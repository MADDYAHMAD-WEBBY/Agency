"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  metric?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const randomRotateY = (idx: number) => {
    // Deterministic pleasant rotations for stacked cards
    const rotations = [-7, 6, -4, 8, -5];
    return rotations[idx % rotations.length];
  };

  const activeItem = testimonials[active] || testimonials[0];

  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center">
        
        {/* Left: 3D Stacked Image Showcase */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full max-w-[340px] sm:max-w-[380px]">
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.65,
                    scale: isActive(index) ? 1 : 0.94,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.88,
                    z: 100,
                    rotate: randomRotateY(index),
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full rounded-[20px] overflow-hidden border border-zinc-200/80 shadow-[0_20px_50px_-12px_rgba(147,51,234,0.18)] bg-zinc-950">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={600}
                      height={600}
                      draggable={false}
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Gradient overlay for bottom badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                    {/* Verified Client Pill Badge */}
                    {testimonial.metric ? (
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.65rem] sm:text-xs font-mono font-medium bg-black/60 text-white/95 border border-white/15 backdrop-blur-md shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                          {testimonial.metric}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Editorial Quote, Persona Details & Navigation */}
        <div className="md:col-span-7 flex flex-col justify-between py-2 sm:py-6">
          <div className="mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100/80 text-purple-600 mb-6 border border-purple-200/60 shadow-xs">
              <Quote className="w-5 h-5 fill-purple-600/20" />
            </span>
          </div>

          <motion.div
            key={active}
            initial={{
              y: 18,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -18,
              opacity: 0,
            }}
            transition={{
              duration: 0.28,
              ease: "easeInOut",
            }}
          >
            {/* Animated Word-by-Word Quote with Brand Typography */}
            <blockquote className="text-xl sm:text-2xl lg:text-[1.7rem] font-serif text-zinc-900 leading-snug sm:leading-relaxed font-bold tracking-tight">
              &ldquo;
              {activeItem.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(8px)",
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: "easeInOut",
                    delay: 0.015 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              &rdquo;
            </blockquote>

            {/* Author Information */}
            <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-sans text-zinc-900 tracking-tight">
                  {activeItem.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono font-medium text-purple-600 mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {activeItem.designation}
                </p>
              </div>

              {/* Navigation Counter & Buttons */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className="text-xs font-mono font-semibold text-zinc-400 select-none mr-1">
                  0{active + 1} / 0{testimonials.length}
                </span>

                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={handlePrev}
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-zinc-100 hover:bg-purple-600 hover:text-white border border-zinc-200/80 shadow-xs flex items-center justify-center text-zinc-700 active:scale-95 transition-all duration-300 group cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={handleNext}
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-zinc-100 hover:bg-purple-600 hover:text-white border border-zinc-200/80 shadow-xs flex items-center justify-center text-zinc-700 active:scale-95 transition-all duration-300 group cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
