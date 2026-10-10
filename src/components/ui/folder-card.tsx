"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  FolderCard                                                                 */
/*                                                                             */
/*  A folder-shaped media card: a cover sits behind a dark folder panel that    */
/*  is notched over it, with the title and subtitle riding in the tab and a     */
/*  stat line along the bottom.                                                 */
/*                                                                             */
/*  On hover the panel slides down to reveal more of the cover, the cover       */
/*  drifts in, and the whole card lifts — one spring, driven by variants on     */
/*  the root, so the parts stay in sync.                                        */
/*                                                                             */
/*  Every dimension is in container query units (cqw), so the card is           */
/*  pixel-exact at any width.                                                   */
/* -------------------------------------------------------------------------- */

export interface FolderCardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
> {
  /** Headline shown inside the folder tab. */
  title?: string;
  /** Supporting line under the title. */
  subtitle?: string;
  /** Large figure in the footer, e.g. "24". */
  count?: React.ReactNode;
  /** Word next to the figure, e.g. "Files". */
  countLabel?: string;
  /** Right-aligned footer text, e.g. "312 Assets". */
  meta?: string;
  /** Cover image URL. Falls back to a CSS aurora gradient when omitted. */
  cover?: string;
  /** Alt text for the cover image. */
  coverAlt?: string;
  /** Hover motion. Default: true. */
  interactive?: boolean;
}

/**
 * The folder silhouette. The viewBox matches the inner (inside-bezel) box
 * exactly, so `preserveAspectRatio="none"` scales it without distorting radii.
 */
const FOLDER_PATH =
  "M-2,151 a16,16 0 0 1 16,-16 h247 " +
  "c26.6,0 59.3,59 76,59 " +
  "h149 a32,32 0 0 1 32,32 v368 " +
  "a32,32 0 0 1 -32,32 h-456 a32,32 0 0 1 -32,-32 Z";

/** Amethyst dusk — a soft violet bloom rising out of the bottom-left. */
const AURORA_GRADIENT = [
  "radial-gradient(58% 76% at 76% 114%, rgba(246,238,255,.8) 0%, rgba(208,154,255,.42) 34%, rgba(0,0,0,0) 72%)",
  "radial-gradient(105% 95% at 28% 136%, rgba(167,90,247,.72) 0%, rgba(109,40,217,.38) 46%, rgba(0,0,0,0) 80%)",
  "linear-gradient(172deg, #140726 0%, #29104f 40%, #4a1c8f 74%, #6d28d9 100%)",
].join(",");

const FONT_STACK =
  '"Poppins", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

const LIGHT_TOKENS = [
  "[--folder-card-bezel:#f4f0ff]",
  "[--folder-card-surface:#18181b]",
  "[--folder-card-panel-from:#27272a]",
  "[--folder-card-panel-to:#18181b]",
  "[--folder-card-title:#ffffff]",
  "[--folder-card-subtitle:#a1a1aa]",
].join(" ");

const DARK_TOKENS = [
  "dark:[--folder-card-bezel:#27272a]",
  "dark:[--folder-card-surface:#151515]",
  "dark:[--folder-card-panel-from:#242424]",
  "dark:[--folder-card-panel-to:#151515]",
  "dark:[--folder-card-title:#ffffff]",
  "dark:[--folder-card-subtitle:#8b8b8b]",
].join(" ");

const SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
} as const;

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -8 },
  tap: { y: -4, scale: 0.99 },
};

const panelVariants: Variants = {
  rest: { y: "0%" },
  hover: { y: "8%" },
};

const coverVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.07 },
};

export const FolderCard = React.forwardRef<HTMLDivElement, FolderCardProps>(
  function FolderCard(
    {
      title = "Brand kit",
      subtitle = "Logos & Typography",
      count = "18",
      countLabel = "Files",
      meta = "240 Assets",
      cover,
      coverAlt = "",
      interactive = true,
      className,
      style,
      ...props
    },
    ref,
  ) {
    const gradientId = React.useId();
    const reduceMotion = useReducedMotion();
    const animate = interactive && !reduceMotion;

    return (
      <motion.div
        ref={ref}
        initial="rest"
        animate="rest"
        whileHover={animate ? "hover" : undefined}
        whileTap={animate ? "tap" : undefined}
        transition={SPRING}
        variants={animate ? cardVariants : undefined}
        style={
          {
            "--folder-card-font": FONT_STACK,
            fontFamily: "var(--folder-card-font)",
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          "w-full select-none [container-type:inline-size]",
          LIGHT_TOKENS,
          DARK_TOKENS,
          className,
        )}
        {...props}
      >
        {/* bezel */}
        <div className="relative box-border aspect-[544/522] w-full rounded-[8.46cqw] bg-[var(--folder-card-bezel)] p-[2.57cqw] shadow-[0_2cqw_5cqw_-2cqw_rgb(0_0_0/.5)] border border-purple-200/50 dark:border-zinc-800">
          <div className="relative h-full w-full overflow-hidden rounded-[5.88cqw] bg-[var(--folder-card-surface)]">
            {/* Cover image area */}
            <div className="absolute left-px right-px top-0 h-[54%] overflow-hidden">
              <motion.div
                variants={animate ? coverVariants : undefined}
                transition={SPRING}
                className="h-full w-full origin-bottom"
              >
                {cover ? (
                  <img
                    src={cover}
                    alt={coverAlt}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    style={{ background: AURORA_GRADIENT }}
                    className="h-full w-full"
                  />
                )}
              </motion.div>
            </div>

            {/* folder front: panel + tab copy, moving as one */}
            <div className="absolute -left-px -right-px inset-y-0 overflow-hidden">
              <motion.div
                variants={animate ? panelVariants : undefined}
                transition={SPRING}
                className="absolute inset-0"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 516 494"
                  preserveAspectRatio="none"
                  className="absolute inset-0 block h-full w-full"
                >
                  <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0"
                        stopColor="var(--folder-card-panel-from)"
                      />
                      <stop
                        offset="1"
                        stopColor="var(--folder-card-panel-to)"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d={FOLDER_PATH}
                    fill={"url(#" + gradientId + ")"}
                    stroke={"url(#" + gradientId + ")"}
                    strokeWidth="2"
                  />
                </svg>

                <div className="absolute left-[4.78cqw] top-[29cqw] right-[4.78cqw] leading-none">
                  <h3 className="m-0 text-[4.25cqw] font-semibold tracking-[0.005em] text-[var(--folder-card-title)] truncate">
                    {title}
                  </h3>
                  <p className="mt-[2.15cqw] text-[3.8cqw] font-normal tracking-[0.005em] text-[var(--folder-card-subtitle)] line-clamp-1">
                    {subtitle}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* footer stays put while the folder front slides */}
            <div className="absolute inset-x-[4.78cqw] bottom-[4.3cqw] flex items-baseline justify-between leading-none text-[var(--folder-card-title)] z-10">
              <p className="m-0 flex items-baseline">
                <span className="text-[7.5cqw] font-bold tracking-[-0.01em] text-purple-400">
                  {count}
                </span>
                <span className="ml-[1.6cqw] text-[3.6cqw] font-normal text-zinc-400">
                  {countLabel}
                </span>
              </p>
              <p className="m-0 text-[3.6cqw] font-semibold px-2 py-1 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40">{meta}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  },
);

export default FolderCard;

export { FolderCard as Component };
