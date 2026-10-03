"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as MP4Box from "mp4box";

const LERP_TAU = 10;
const SNAP = 0.001;
const LRU_MAX = 36;
const LEAD = 24;
const WATCHDOG_MS = 60000;

interface FrameEntry {
  ts: number; // microseconds
  blob: Blob;
}

export function useVideoScrub(videoSrc: string, containerRef: React.RefObject<HTMLDivElement | null>) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canvasLive, setCanvasLive] = useState(false);
  const [duration, setDuration] = useState(0);

  // Smooth scrubbing refs
  const currentTimeRef = useRef(0);
  const targetTimeRef = useRef(0);
  const durationRef = useRef(0);
  const readyRef = useRef(false);
  const seekingRef = useRef(false);
  const lastSeekTimeRef = useRef(0);
  const lastProgressStateRef = useRef(0);

  // Frame bank & LRU cache
  const bankRef = useRef<FrameEntry[]>([]);
  const lruCacheRef = useRef<Map<number, ImageBitmap | null>>(new Map());
  const hardwareFailRef = useRef(false);

  // Handle Video Metadata Loaded & Attach seeking/seeked listeners
  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      const dur = video.duration || 0;
      setDuration(dur);
      durationRef.current = dur;

      video.onseeking = () => {
        seekingRef.current = true;
      };
      video.onseeked = () => {
        seekingRef.current = false;
      };
    }
  }, []);

  // Frame Bank Extraction with MP4Box + VideoDecoder
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isCancelled = false;
    let decoder: VideoDecoder | null = null;

    const initWebCodecs = async () => {
      if (!("VideoDecoder" in window)) return;

      const watchdogTimer = setTimeout(() => {
        if (!readyRef.current) {
          setCanvasLive(false);
        }
      }, WATCHDOG_MS);

      try {
        const response = await fetch(videoSrc, { mode: "cors" });
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const buffer = await response.arrayBuffer();

        if (isCancelled) {
          clearTimeout(watchdogTimer);
          return;
        }

        const mp4file = MP4Box.createFile();
        let videoTrack: any = null;

        mp4file.onReady = (info: any) => {
          videoTrack = info.videoTracks[0];
          if (!videoTrack) return;

          const codec = videoTrack.codec;
          const description = getTrackDescription(mp4file, videoTrack);

          try {
            decoder = new VideoDecoder({
              output: async (frame: VideoFrame) => {
                if (isCancelled) {
                  frame.close();
                  return;
                }

                try {
                  const offCanvas = document.createElement("canvas");
                  offCanvas.width = Math.min(frame.displayWidth || 1920, 1920);
                  offCanvas.height = Math.min(frame.displayHeight || 1080, 1080);
                  const ctx = offCanvas.getContext("2d");
                  if (ctx) {
                    ctx.drawImage(frame, 0, 0, offCanvas.width, offCanvas.height);
                    offCanvas.toBlob(
                      (blob) => {
                        if (blob && !isCancelled) {
                          bankRef.current.push({
                            ts: frame.timestamp,
                            blob,
                          });
                          bankRef.current.sort((a, b) => a.ts - b.ts);
                          if (!readyRef.current && bankRef.current.length >= 8) {
                            readyRef.current = true;
                            setCanvasLive(true);
                          }
                        }
                        frame.close();
                      },
                      "image/webp",
                      0.8
                    );
                  } else {
                    frame.close();
                  }
                } catch {
                  frame.close();
                }
              },
              error: (e: any) => {
                console.warn("[VideoScrub] VideoDecoder error:", e);
                if (!hardwareFailRef.current) {
                  hardwareFailRef.current = true;
                }
              },
            });

            decoder.configure({
              codec,
              description,
              hardwareAcceleration: hardwareFailRef.current ? "prefer-software" : "no-preference",
            });

            mp4file.setExtractionOptions(videoTrack.id, null, { nbSamples: 1000 });
            mp4file.start();
          } catch (e) {
            console.warn("[VideoScrub] WebCodecs decode configuration failed:", e);
          }
        };

        mp4file.onSamples = (_id: number, _user: any, samples: any[]) => {
          if (!decoder || decoder.state === "closed") return;
          for (const sample of samples) {
            const chunk = new EncodedVideoChunk({
              type: sample.is_sync ? "key" : "delta",
              timestamp: (sample.cts * 1000000) / sample.timescale,
              duration: (sample.duration * 1000000) / sample.timescale,
              data: sample.data,
            });
            if (decoder.decodeQueueSize < LEAD) {
              decoder.decode(chunk);
            }
          }
        };

        const buf = buffer as any;
        buf.fileStart = 0;
        mp4file.appendBuffer(buf);
        mp4file.flush();
      } catch (err) {
        console.warn("[VideoScrub] WebCodecs extraction fallback to HTML5 Video:", err);
      } finally {
        clearTimeout(watchdogTimer);
      }
    };

    initWebCodecs();

    return () => {
      isCancelled = true;
      if (decoder && decoder.state !== "closed") {
        try {
          decoder.close();
        } catch {}
      }
    };
  }, [videoSrc]);

  function getTrackDescription(mp4file: any, track: any) {
    for (const entry of track.stsd || []) {
      const box = entry.avcC || entry.hvcC || entry.vpcC || entry.av1C;
      if (box) {
        const stream = new (MP4Box as any).DataStream(undefined, 0, (MP4Box as any).DataStream.BIG_ENDIAN);
        box.write(stream);
        return new Uint8Array(stream.buffer, 8);
      }
    }
    return undefined;
  }

  // Draw Nearest Frame from Bank on Canvas
  const drawNearestFrame = useCallback((timeInSeconds: number) => {
    const canvas = canvasRef.current;
    if (!canvas || bankRef.current.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const targetTs = timeInSeconds * 1e6;
    let low = 0;
    let high = bankRef.current.length - 1;
    let closestIdx = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (Math.abs(bankRef.current[mid].ts - targetTs) < Math.abs(bankRef.current[closestIdx].ts - targetTs)) {
        closestIdx = mid;
      }
      if (bankRef.current[mid].ts < targetTs) low = mid + 1;
      else high = mid - 1;
    }

    const cache = lruCacheRef.current;
    if (cache.has(closestIdx)) {
      const bitmap = cache.get(closestIdx);
      if (bitmap) {
        ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      }
    } else {
      const entry = bankRef.current[closestIdx];
      if (entry) {
        createImageBitmap(entry.blob).then((bitmap) => {
          cache.set(closestIdx, bitmap);
          ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

          if (cache.size > LRU_MAX) {
            const firstKey = cache.keys().next().value;
            if (firstKey !== undefined) {
              const old = cache.get(firstKey);
              if (old) old.close();
              cache.delete(firstKey);
            }
          }
        });
      }
    }
  }, []);

  // Main High-Performance rAF Animation Loop
  useEffect(() => {
    if (typeof window === "undefined") return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const deltaSeconds = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const container = containerRef.current;
      if (container) {
        const scrollY = window.scrollY;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        const maxScroll = Math.max(1, containerHeight - windowHeight);
        const p = Math.max(0, Math.min(1, scrollY / maxScroll));

        // Throttle React state updates to avoid unnecessary component re-renders
        if (Math.abs(p - lastProgressStateRef.current) > 0.001) {
          lastProgressStateRef.current = p;
          setScrollProgress(p);
        }

        const dur = durationRef.current;
        if (dur > 0) {
          const target = p * dur;
          targetTimeRef.current = target;

          const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (prefersReduced) {
            currentTimeRef.current = target;
          } else {
            const diff = target - currentTimeRef.current;
            currentTimeRef.current += diff * (1 - Math.exp(-deltaSeconds * LERP_TAU));
            if (Math.abs(target - currentTimeRef.current) < SNAP) {
              currentTimeRef.current = target;
            }
          }

          if (readyRef.current) {
            drawNearestFrame(currentTimeRef.current);
          } else if (videoRef.current) {
            const video = videoRef.current;
            const nowMs = performance.now();

            // Throttled seeking lock to prevent video decoding stutter
            if (!seekingRef.current && nowMs - lastSeekTimeRef.current > 33) {
              if (Math.abs(video.currentTime - currentTimeRef.current) > 0.02) {
                lastSeekTimeRef.current = nowMs;
                seekingRef.current = true;

                if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
                  (video as any).fastSeek(currentTimeRef.current);
                } else {
                  video.currentTime = currentTimeRef.current;
                }
              }
            }
          }
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [containerRef, drawNearestFrame]);

  return {
    videoRef,
    canvasRef,
    scrollProgress,
    canvasLive,
    duration,
    handleLoadedMetadata,
  };
}
