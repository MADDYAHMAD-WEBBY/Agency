"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FolderCardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
> {
  /** Main project title or headline. */
  title?: string;
  /** Summary or excerpt text. */
  subtitle?: string;
  /** Short category tag shown inside tab, e.g. "AMAZON FBA". */
  tag?: string;
  /** Metric highlight figure, e.g. "$42,500+". */
  count?: React.ReactNode;
  /** Label for metric, e.g. "Monthly Revenue". */
  countLabel?: string;
  /** Secondary meta label, e.g. "6 Months". */
  meta?: string;
  /** Cover image URL. Falls back to a CSS aurora gradient when omitted. */
  cover?: string;
  /** Alt text for the cover image. */
  coverAlt?: string;
  /** Hover motion. Default: true. */
  interactive?: boolean;
}

const FOLDER_PATH =
  "M-2,151 a16,16 0 0 1 16,-16 h247 " +
  "c26.6,0 59.3,59 76,59 " +
  "h149 a32,32 0 0 1 32,32 v368 " +
  "a32,32 0 0 1 -32,32 h-456 a32,32 0 0 1 -32,-32 Z";

const AURORA_GRADIENT = [
  "radial-gradient(58% 76% at 76% 114%, rgba(246,238,255,.8) 0%, rgba(208,154,255,.42) 34%, rgba(0,0,0,0) 72%)",
  "radial-gradient(105% 95% at 28% 136%, rgba(167,90,247,.72) 0%, rgba(109,40,217,.38) 46%, rgba(0,0,0,0) 80%)",
  "linear-gradient(172deg, #140726 0%, #29104f 40%, #4a1c8f 74%, #6d28d9 100%)",
].join(",");

const FONT_STACK =
  '"Inter", ui-sans-serif, system-ui, -apple-system, Roboto, sans-serif';

const TOKENS = [
  "[--folder-card-bezel:#2b1a44]",
  "[--folder-card-surface:#120c1d]",
  "[--folder-card-panel-from:#201438]",
  "[--folder-card-panel-to:#120c1d]",
  "[--folder-card-title:#ffffff]",
  "[--folder-card-subtitle:#e9d5ff]",
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
  hover: { y: "5%" },
};

const coverVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
};

export const FolderCard = React.forwardRef<HTMLDivElement, FolderCardProps>(
  function FolderCard(
    {
      title = "Brand Growth Project",
      subtitle = "Scalable digital architecture and performance execution.",
      tag = "CASE STUDY",
      count,
      countLabel,
      meta,
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
          TOKENS,
          className,
        )}
        {...props}
      >
        {/* Bezel frame */}
        <div className="relative box-border aspect-[544/535] w-full rounded-[8.46cqw] bg-[var(--folder-card-bezel)] p-[2.57cqw] shadow-[0_6cqw_14cqw_-3cqw_rgba(147,51,234,0.35)] border border-purple-500/35">
          <div className="relative h-full w-full overflow-hidden rounded-[5.88cqw] bg-[var(--folder-card-surface)]">
            
            {/* Cover Image Area */}
            <div className="absolute left-px right-px top-0 h-[49%] overflow-hidden">
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

            {/* Folder Front Panel */}
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
                  className="absolute inset-0 block h-full w-full drop-shadow-lg"
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
                    stroke="rgba(168, 85, 247, 0.4)"
                    strokeWidth="2"
                  />
                </svg>

                {/* Tab Notch Header (Centered in the Top Tab Notch) */}
                <div className="absolute left-[4.8cqw] top-[26.5cqw] right-[4.8cqw] flex items-center justify-between pointer-events-none z-10">
                  <span className="px-[2.5cqw] py-[0.8cqw] rounded-full bg-purple-950/90 border border-purple-400/50 text-[2.5cqw] font-mono font-bold tracking-wider text-purple-200 uppercase truncate max-w-[55%] shadow-sm">
                    {tag}
                  </span>
                  <div className="w-[6.2cqw] h-[6.2cqw] rounded-full bg-purple-600/35 border border-purple-400/50 text-purple-200 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center text-[3.2cqw] font-mono transition-all shadow-sm">
                    ↗
                  </div>
                </div>

                {/* Main Body Content (Below the Tab Curve) */}
                <div className="absolute left-[5cqw] top-[43.5cqw] right-[5cqw] bottom-[4.5cqw] flex flex-col justify-between">
                  <div className="space-y-[1.6cqw]">
                    <h3 className="m-0 font-sans text-[4.3cqw] font-extrabold tracking-tight text-white leading-[1.28] line-clamp-2">
                      {title}
                    </h3>
                    <p className="m-0 font-sans text-[3.3cqw] font-normal text-purple-100/85 leading-relaxed line-clamp-2">
                      {subtitle}
                    </p>
                  </div>

                  {/* Clean Bottom Metric Bar */}
                  {(count || meta) && (
                    <div className="flex items-center justify-between border-t border-purple-500/25 pt-[2.2cqw] mt-[2cqw]">
                      {count ? (
                        <div className="flex items-baseline gap-[1cqw]">
                          <span className="font-mono font-extrabold text-[4.2cqw] text-emerald-400">
                            {count}
                          </span>
                          {countLabel && (
                            <span className="font-sans text-[2.8cqw] font-medium text-zinc-400">
                              {countLabel}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="font-mono text-[2.8cqw] text-purple-300 font-semibold">Verified Case Study</span>
                      )}
                      
                      {meta && (
                        <span className="font-mono text-[2.7cqw] font-semibold text-purple-200 px-[2.4cqw] py-[0.7cqw] rounded-full bg-purple-950/70 border border-purple-700/50">
                          {meta}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    );
  },
);

export default FolderCard;

export { FolderCard as Component };
