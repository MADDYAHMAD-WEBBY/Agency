"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export interface CobeGlobeProps {
  className?: string;
}

export function CobeGlobe({ className = "" }: CobeGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.3,
      mapSamples: 20000,
      mapBrightness: 8,
      baseColor: [0.94, 0.92, 0.98],
      markerColor: [0.57, 0.2, 0.91], // Purple marker
      glowColor: [0.92, 0.86, 1], // Soft lavender glow
      markers: [
        { location: [40.71, -74.01], size: 0.08 },  // USA (New York)
        { location: [37.77, -122.41], size: 0.07 }, // USA (San Francisco)
        { location: [51.51, -0.13], size: 0.08 },   // UK (London)
        { location: [25.20, 55.27], size: 0.09 },   // UAE (Dubai)
        { location: [52.52, 13.41], size: 0.07 },   // Germany (Berlin)
        { location: [-33.87, 151.21], size: 0.07 }, // Australia (Sydney)
        { location: [31.52, 74.35], size: 0.09 },   // Pakistan (Lahore)
      ],
      onRender: (state: Record<string, any>) => {
        // Auto-rotation when not dragging
        if (pointerInteracting.current === null) {
          phiRef.current += 0.005;
        }
        state.phi = phiRef.current + pointerInteractionMovement.current;
      },
    } as any);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={`relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center ${className}`}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        className="w-full h-full cursor-grab opacity-0 transition-opacity duration-700 ease-in-out touch-none"
      />
    </div>
  );
}
