"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TestimonialCardData {
  title: string;
  quote: string;
  name: string;
  designation: string;
  avatar: string;
  bgClass: string;
  borderClass: string;
}

const testimonials: TestimonialCardData[] = [
  {
    title: "Page speed jumped from 35 to 99 on mobile",
    quote:
      "“They migrated our sluggish bloated WordPress store into a custom Next.js App Router + Headless WP architecture. Sub-second load times, zero downtime, and instant checkout.”",
    name: "Usman Tariq",
    designation: "CTO, CloudScale Solutions Lahore",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    bgClass: "bg-[#f5f3ff]",
    borderClass: "border-[#ddd6fe]",
  },
  {
    title: "Caught hidden image bottlenecks we never knew existed",
    quote:
      "“During our store revamp, the team caught that our image pipeline was serving uncompressed 5MB files. They engineered an automated edge optimization pipeline that reduced payload by 80% with zero quality loss. Outstanding agency.”",
    name: "Hassaan Ahmed",
    designation: "Co-founder, Apparel E-Commerce Karachi",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    bgClass: "bg-[#f0f9ff]",
    borderClass: "border-[#bae6fd]",
  },
  {
    title: "Turned our complex wireframes into a masterpiece",
    quote:
      "“We handed over raw Figma components and ambiguous briefs. The agency delivered an interactive prototype cleaner than what we imagined. Smooth animations, pixel-perfect responsiveness, and flawless execution.”",
    name: "Zainab Chaudhry",
    designation: "Creative Director, Studio Zosh Rawalpindi",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    bgClass: "bg-[#fff1f2]",
    borderClass: "border-[#fecdd3]",
  },
  {
    title: "Ranked #1 for local search keywords within 60 days",
    quote:
      "“Their local SEO architecture and programmatic JSON-LD schema synthesis completely transformed our organic reach. Google Business Profile rankings skyrocketed and organic leads increased by 300%.”",
    name: "Waleed Jutt",
    designation: "Head of Digital Growth, SEO Islamabad",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    bgClass: "bg-[#f0fdf4]",
    borderClass: "border-[#bbf7d0]",
  },
  {
    title: "Shipped 3 complex full-stack applications on time",
    quote:
      "“Working with this agency was completely seamless. From building custom API gateways to responsive frontend dashboards, every milestone was delivered ahead of deadline. Rare technical clarity.”",
    name: "Hamza Shafique",
    designation: "Operations Lead, Logistics Hub Faisalabad",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80",
    bgClass: "bg-[#eef2ff]",
    borderClass: "border-[#c7d2fe]",
  },
  {
    title: "Doubled our organic inbound revenue in under 90 days",
    quote:
      "“The team diagnosed our Core Web Vitals crawl budget waste and fixed our indexation bloat. Organic traffic grew by 140% and our customer acquisition cost dropped dramatically.”",
    name: "Ayesha Malik",
    designation: "Founder, Bloom Digital Islamabad",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
    bgClass: "bg-[#fefce8]",
    borderClass: "border-[#fde68a]",
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Physics state (persisted across renders without causing re-renders)
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isHorizontalGestureRef = useRef<boolean | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Card geometry: width + gap
  const cardWidth = isMobile ? 320 : 380;
  const gap = 14;
  const singleSetWidth = testimonials.length * (cardWidth + gap);

  // High-performance direct GPU animation loop (60-120fps)
  useEffect(() => {
    let frameId: number;
    let prevTimestamp = performance.now();

    const animate = (timestamp: number) => {
      frameId = requestAnimationFrame(animate);
      const deltaMs = Math.min(timestamp - prevTimestamp, 50);
      prevTimestamp = timestamp;

      // Delta time factor normalized to 60fps (16.666ms) for buttery 60Hz/120Hz ProMotion consistency
      const dtFactor = Math.min(deltaMs / 16.666, 2.5);

      // Movement speed:
      // Mobile: fast, fluid continuous marquee (~70px/sec at baseSpeed 1.15)
      // Desktop: refined, smooth pace (~55px/sec at baseSpeed 0.85)
      const baseSpeed = isMobile ? 1.15 : 0.85;

      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.06) {
          // Natural momentum friction decay with dtFactor
          offsetRef.current += velocityRef.current * dtFactor;
          velocityRef.current *= Math.pow(isMobile ? 0.96 : 0.94, dtFactor);
        } else {
          velocityRef.current = 0;
          // Hover pause only applies to desktop mouse interactions (never freeze on mobile touch)
          const isSlowed = !isMobile && isHoveredRef.current;
          const currentSpeed = isSlowed ? baseSpeed * 0.20 : baseSpeed;
          offsetRef.current -= currentSpeed * dtFactor;
        }
      }

      // Infinite modular wrap-around: seamless looping in BOTH forward and backward directions
      if (singleSetWidth > 0) {
        while (offsetRef.current <= -singleSetWidth) {
          offsetRef.current += singleSetWidth;
        }
        while (offsetRef.current > 0) {
          offsetRef.current -= singleSetWidth;
        }
      }

      // Direct GPU transform update on track
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current.toFixed(2)}px, 0, 0)`;
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [singleSetWidth, isMobile]);

  // Touch and Mouse interactive dragging handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    velocityRef.current = 0;
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    lastDragXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    isHorizontalGestureRef.current = null;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dx = e.clientX - dragStartXRef.current;
    const dy = e.clientY - dragStartYRef.current;

    // Smart gesture detection on touch: do NOT intercept vertical page scroll!
    if (e.pointerType === "touch" && isHorizontalGestureRef.current === null) {
      if (Math.abs(dy) > 5 || Math.abs(dx) > 5) {
        if (Math.abs(dy) > Math.abs(dx)) {
          // User is scrolling the page vertically: cancel drag immediately
          isHorizontalGestureRef.current = false;
          isDraggingRef.current = false;
          return;
        } else {
          // User is swiping horizontally: lock to carousel
          isHorizontalGestureRef.current = true;
          lastDragXRef.current = e.clientX;
          lastTimeRef.current = now;
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
      } else {
        return;
      }
    } else if (e.pointerType !== "touch") {
      try {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.setPointerCapture(e.pointerId);
        }
      } catch (_) {}
    }

    // Step delta
    const stepX = e.clientX - lastDragXRef.current;
    const dt = Math.max(now - lastTimeRef.current, 1);

    // Track responsive velocity for inertia release
    const instantVelocity = (stepX / dt) * 16;
    velocityRef.current = velocityRef.current * 0.25 + instantVelocity * 0.75;
    velocityRef.current = Math.max(-28, Math.min(28, velocityRef.current));

    // Update position directly
    offsetRef.current += stepX;

    lastDragXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch (_) {}

    isDraggingRef.current = false;
    isHoveredRef.current = false;
    isHorizontalGestureRef.current = null;
  };

  return (
    <section id="testimonials" className="relative z-10 w-full py-10 sm:py-16 bg-white text-zinc-900 overflow-hidden select-none">
      {/* Rich Purple Ambient Background Glow matching Skills, Works & Services */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(147, 51, 234, 0.07) 0%, rgba(79, 70, 229, 0.03) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Brand Style */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Client Validation & Proof of Impact
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Trusted by Founders &{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
            >
              Industry Leaders
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-600 font-medium max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed tracking-normal"
          >
            Direct feedback from founders, agency owners, and growth executives who scaled their search visibility, page speeds, and conversion pipelines with our engineering solutions.
          </motion.p>
        </div>

      </div>

      {/* Interactive Infinite Drag + Auto-Glide Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          if (!isMobile) isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          if (!isMobile) isHoveredRef.current = false;
        }}
      >
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* GPU Composited Physics Track: renders 3 sets for infinite bidirectional scrolling */}
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{
            gap: `${gap}px`,
            width: "max-content",
          }}
        >
          {/* Triple set guarantees flawless wrap-around buffer in both directions */}
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={`card-${idx}`}
              className={`shrink-0 rounded-[10px] p-5 sm:p-6 flex flex-col justify-between border ${item.borderClass} ${item.bgClass} transition-shadow duration-300 hover:shadow-md select-none`}
              style={{
                width: `${cardWidth}px`,
              }}
            >
              <div>
                <h4 className="font-bold text-zinc-900 text-sm sm:text-base leading-snug tracking-tight mb-2.5">
                  {item.title}
                </h4>
                <p className="text-zinc-600 text-xs sm:text-[0.80rem] leading-relaxed font-mono">
                  {item.quote}
                </p>
              </div>

              <div>
                <div className="border-t border-black/8 my-3.5 sm:my-4" />
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={`${item.name} client testimonial photo`}
                    loading="lazy"
                    draggable={false}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-1 ring-black/10 shrink-0 pointer-events-none"
                  />
                  <div>
                    <h5 className="font-bold text-zinc-900 text-xs sm:text-sm font-sans tracking-tight">
                      {item.name}
                    </h5>
                    <p className="text-[0.65rem] sm:text-xs text-zinc-500 font-mono tracking-tight mt-0.5">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
