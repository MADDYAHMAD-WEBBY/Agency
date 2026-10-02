"use client";

// A portfolio index built as a wheel you turn.
//
// At rest the work sits in a ring around a title, each card tangent to the
// circle. The first notch of scroll blows the ring open into a vertical drum:
// the card at the front lies flat and full size, the ones above and below
// rotate away into hard perspective and run off the top and bottom of the
// frame. Keep turning and the drum carries the next piece round to the front.
//
// The whole thing is one number - `turn` - read by a single rAF pass that writes
// transforms straight to the DOM. 0 is the ring, 1 is the drum with item 0 at
// the front, and every whole number after that is one more item turned past.
import * as React from "react";

import { cn } from "@/lib/utils";

export interface WorksWheelItem {
  /** Project name. Shown beside the front card and in the index. */
  title: string;
  /** Cover art. Any src an <img> takes. */
  image: string;
  /** Where the card links to. Omit for a wheel that only browses. */
  href?: string;
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  items: WorksWheelItem[];
  /** Sits in the middle of the ring. @default undefined */
  label?: string;
  /** Label on the card's hover affordance. Omit to drop it. @default undefined */
  action?: string;
}

/* Geometry ratios */
const CARD_H = 0.35; // front card height, ratio of stage height on desktop
const CARD_MAX_W = 0.35; // max width ratio on desktop
const CARD_RATIO = 1.45; // card width / height
const STEP = 40; // degrees between cards on the drum
const DRUM = 2.1; // drum radius, in card heights
const LENS = 2.7; // perspective distance
const RING_R = 1.05; // ring radius
const BOW = 1.82;
const TITLE = 0.15; // ring label and front-card title
const INDEX = 0.045; // the index down the right-hand side
const CULL = 1.6;

/** How much of a wheel-notch or a dragged pixel counts as one item. */
const WHEEL_UNITS = 900;
const DRAG_UNITS = 420;
const TOUCH_DRAG_UNITS = 240;
/** Quiet time after the last wheel event before the wheel settles on an item. */
const SETTLE = 140;
/** Fraction of the remaining distance closed each frame. 1 = no smoothing. */
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Stage = { w: number; h: number };

const rad = (deg: number) => (deg * Math.PI) / 180;

/** How far left the arc has carried something that has turned `drumDeg` off the
    front. Zero at the front, so the piece being read stays centred. */
const bowAt = (drumDeg: number, bow: number) =>
  -bow * (1 - Math.cos(rad(drumDeg)));

/** Both states in one chain: the ring terms fall away as `m` reaches the drum,
    and the drum terms are still zero while the ring is up. */
function place(
  ringDeg: number,
  drumDeg: number,
  ringR: number,
  drumR: number,
  bow: number,
  s: number,
) {
  return (
    `translateX(${s * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - s) * ringDeg}deg) translateY(${-(1 - s) * ringR}px)` +
    ` rotateX(${s * drumDeg}deg) translateZ(${s * drumR}px)`
  );
}

export function WorksWheel({
  items,
  label = "Selected Works",
  action = "View",
  className,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLElement | null)[]>([]);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  const turn = React.useRef(0);
  const target = React.useRef(0);
  const [active, setActive] = React.useState(0);
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 });

  const count = items.length;
  const last = Math.max(count - 1, 0);

  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const metrics = React.useMemo(() => {
    const { w, h } = stage;
    const isMobile = w > 0 && w < 640;
    const maxWFactor = isMobile ? 0.48 : CARD_MAX_W;
    const cardHFactor = isMobile ? 0.34 : CARD_H;
    const cardW = Math.min(h * cardHFactor * CARD_RATIO, w * maxWFactor);
    const cardH = cardW / CARD_RATIO;
    const drumR = cardH * DRUM;
    const ringR = cardH * (isMobile ? 1.02 : RING_R);
    const ringScale = count
      ? clamp((((2 * Math.PI * ringR) / count) * 0.90) / (cardW || 1), isMobile ? 0.30 : 0.20, 1)
      : 1;
    return {
      cardW,
      cardH,
      ringR,
      ringScale,
      drumR,
      bow: cardH * (isMobile ? 0.85 : BOW),
      depth: cardH * LENS,
      title: Math.max(isMobile ? 18 : 28, cardH * TITLE),
      index: Math.max(14, cardH * INDEX),
      isMobile,
    };
  }, [stage, count]);

  // One pass per frame: ease toward the target, then write every transform.
  React.useEffect(() => {
    if (!stage.h) return;
    let frame = 0;
    const { ringR, ringScale, drumR, bow } = metrics;

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) turn.current = target.current;
      else turn.current += gap * (reduced ? 1 : EASE);

      const t = turn.current;
      const m = clamp(t, 0, 1);
      // Cubic smoothstep for seamless acceleration/deceleration between Ring (0) & Drum (1)
      const s = m * m * (3 - 2 * m);
      const pos = Math.max(0, t - 1);

      const shiftX = s * (metrics.isMobile ? metrics.cardW * 0.28 : 0);
      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateX(${shiftX}px) translateZ(${-s * drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs.current[i];
        if (card) {
          card.style.transform = place(
            d * (360 / count),
            drumDeg,
            ringR,
            drumR,
            bow,
            s,
          );

          // Continuous smooth opacity interpolation: zero popping!
          let cardOpacity = 1;
          if (Math.abs(d) > CULL) {
            // Smoothly fade out as drum forms, fade back in when returning to ring
            const fade = clamp((s - 0.12) / 0.55, 0, 1);
            cardOpacity = 1 - fade;
          }
          card.style.opacity = String(cardOpacity);
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * (14 * s + 2)));
        }
        const face = card?.firstElementChild as HTMLElement | null;
        if (face) face.style.transform = `scale(${lerp(ringScale, 1, s)})`;
      }

      // Rapid fade-out: label completely disappears as soon as wheel starts turning (gone by m = 0.25)
      const labelOpacity = clamp(1 - m * 4, 0, 1);
      if (labelRef.current) {
        labelRef.current.style.opacity = String(labelOpacity);
        labelRef.current.style.visibility = labelOpacity <= 0 ? "hidden" : "visible";
      }

      // Title fades in once drum is open (m > 0.35)
      const titleOpacity = clamp((m - 0.35) * 2.5, 0, 1);
      if (titleRef.current) {
        titleRef.current.style.opacity = String(titleOpacity);
        titleRef.current.style.visibility = titleOpacity <= 0 ? "hidden" : "visible";
      }
      const near = clamp(Math.round(pos), 0, last);
      setActive((prev) => (prev === near ? prev : near));
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [metrics, stage.h, count, last, reduced]);

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last + 1);
    },
    [last],
  );

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      const next = target.current + event.deltaY / WHEEL_UNITS;
      if (next > 0 && next < last + 1) event.preventDefault();
      to(next);
      window.clearTimeout(settling.current);
      settling.current = window.setTimeout(
        () => to(Math.round(target.current)),
        SETTLE,
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.clearTimeout(settling.current);
    };
  }, [to, last]);

  const dragStart = React.useRef<{ x: number; y: number; turn: number } | null>(null);
  const isHorizontalDrag = React.useRef<boolean | null>(null);
  const settling = React.useRef(0);

  return (
    <section
      aria-label={label}
      className={cn(
        "relative h-full min-h-[16rem] sm:min-h-[26rem] w-full select-none",
        className,
      )}
      {...props}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${active}`}
        className="focus-visible:outline-purple-600 absolute inset-0 cursor-grab touch-pan-y outline-none active:cursor-grabbing"
        style={{
          perspective: `${metrics.depth}px`,
          transformStyle: "preserve-3d",
        }}
        onPointerDown={(event) => {
          dragStart.current = {
            x: event.clientX,
            y: event.clientY,
            turn: target.current,
          };
          isHorizontalDrag.current = null;
        }}
        onPointerMove={(event) => {
          if (!dragStart.current) return;
          const dx = event.clientX - dragStart.current.x;
          const dy = event.clientY - dragStart.current.y;

          if (event.pointerType === "touch") {
            // Determine horizontal swipe vs vertical page scroll
            if (isHorizontalDrag.current === null) {
              if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
                if (Math.abs(dx) > Math.abs(dy)) {
                  // User intentionally swiped horizontally to turn the wheel
                  isHorizontalDrag.current = true;
                  try {
                    event.currentTarget.setPointerCapture(event.pointerId);
                  } catch (_) {}
                } else {
                  // User is swiping vertically to scroll the page: DO NOT intercept!
                  isHorizontalDrag.current = false;
                  dragStart.current = null;
                  return;
                }
              } else {
                return;
              }
            }

            if (isHorizontalDrag.current) {
              to(dragStart.current.turn - dx / TOUCH_DRAG_UNITS);
            }
          } else {
            // Desktop mouse drag
            if (Math.abs(dy) > 4 || Math.abs(dx) > 4) {
              try {
                if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.setPointerCapture(event.pointerId);
                }
              } catch (_) {}
            }
            to(dragStart.current.turn + (dragStart.current.y - event.clientY) / DRAG_UNITS);
          }
        }}
        onPointerUp={(event) => {
          try {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          } catch (_) {}
          dragStart.current = null;
          isHorizontalDrag.current = null;
          to(Math.round(target.current));
        }}
        onPointerCancel={() => {
          dragStart.current = null;
          isHorizontalDrag.current = null;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") to(Math.round(target.current) + 1);
          else if (event.key === "ArrowUp") to(Math.round(target.current) - 1);
          else return;
          event.preventDefault();
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2"
          style={{ transformStyle: "preserve-3d" }}
        >
          {items.map((item, i) => {
            const Tag = (item.href ? "a" : "div") as "a";
            return (
              <React.Fragment key={item.title}>
                <Tag
                  id={`works-wheel-${i}`}
                  role="option"
                  aria-selected={i === active}
                  href={item.href}
                  ref={(node: HTMLElement | null) => {
                    cardRefs.current[i] = node;
                  }}
                  className="group absolute"
                  style={{
                    width: metrics.cardW,
                    height: metrics.cardH,
                    marginLeft: -metrics.cardW / 2,
                    marginTop: -metrics.cardH / 2,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span className="bg-zinc-900 shadow-2xl relative block size-full overflow-hidden rounded-2xl ring-1 ring-black/5 group-hover:ring-purple-500/50 transition-all duration-500 group-hover:shadow-[0_24px_50px_rgba(147,51,234,0.18)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {action && item.href ? (
                      <span className="bg-white/95 text-zinc-900 font-semibold pointer-events-none absolute right-2.5 bottom-2.5 sm:right-3.5 sm:bottom-3.5 flex translate-y-1 items-center gap-1 rounded-full px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[0.65rem] sm:text-xs shadow-lg shadow-black/15 backdrop-blur-md opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 border border-white/40 group-hover:border-purple-600">
                        <span>{action}</span>
                        <svg
                          viewBox="0 0 12 12"
                          className="size-2.5 sm:size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9 9 3M4 3h5v5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </span>
                </Tag>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Ring center display at rest */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center select-none z-10 px-2"
      >
        <span
          className="font-serif italic font-semibold text-zinc-400 select-none tracking-tight block drop-shadow-xs"
          style={{ fontSize: metrics.title * 0.95 }}
        >
          {label}
        </span>
        <span className="text-[0.6rem] sm:text-xs font-mono font-medium tracking-widest text-purple-600/80 uppercase mt-0.5 sm:mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          <span>{metrics.isMobile ? "Swipe ↔ or Tap" : "Drag or Scroll"}</span>
        </span>
      </div>

      {/* Front-card title display with editorial typography */}
      <div
        ref={titleRef}
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 tracking-tight opacity-0 z-20",
          metrics.isMobile ? "left-[3%] max-w-[32vw]" : "left-[5%] sm:left-[7%] max-w-[34vw]"
        )}
        style={{ fontSize: metrics.title }}
      >
        <span className="text-[0.58rem] sm:text-xs font-mono font-bold tracking-widest text-purple-600 uppercase block mb-0.5 sm:mb-1">
          Project 0{active + 1}
        </span>
        <span className="font-serif font-extrabold text-zinc-900 leading-tight block drop-shadow-xs break-words hyphens-auto">
          {items[active]?.title}
        </span>
      </div>

      {/* Right-hand Index with clean numbers & indicator dots */}
      <ol
        className="absolute top-[8%] right-[3%] sm:right-[4%] text-right leading-[2] z-20 hidden sm:flex flex-col items-end"
        style={{ fontSize: metrics.index }}
      >
        {items.map((item, i) => (
          <li key={item.title} className="group">
            <button
              type="button"
              onClick={() => to(i + 1)}
              className={cn(
                "cursor-pointer transition-all duration-300 outline-none flex items-center justify-end gap-2.5",
                i === active
                  ? "text-purple-600 font-bold scale-105 font-serif"
                  : "text-zinc-400 hover:text-zinc-800 font-medium"
              )}
            >
              <span className="text-[0.68rem] font-mono opacity-60">0{i + 1}</span>
              <span>{item.title}</span>
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  i === active
                    ? "bg-purple-600 scale-125 shadow-sm shadow-purple-500/50"
                    : "bg-transparent group-hover:bg-zinc-300"
                )}
              />
            </button>
          </li>
        ))}
      </ol>

      {/* Mobile Touch Navigation Controls (Prev / Next & Counter) */}
      <div className="sm:hidden absolute bottom-2 right-3 z-30 flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-1 shadow-md border border-zinc-200/80">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => to(Math.max(0, Math.round(target.current) - 1))}
          disabled={active === 0 && target.current <= 0}
          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:text-purple-600 hover:bg-purple-50 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <span className="text-[0.68rem] font-mono font-semibold text-zinc-700 px-1 select-none">
          {target.current < 0.5 ? "Ring" : `${active + 1} / ${count}`}
        </span>

        <button
          type="button"
          aria-label="Next project"
          onClick={() => to(Math.min(last + 1, Math.round(target.current) + 1))}
          disabled={target.current >= last + 1}
          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:text-purple-600 hover:bg-purple-50 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default WorksWheel;
