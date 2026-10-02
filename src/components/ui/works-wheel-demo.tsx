"use client";

import React from "react";
import { motion } from "framer-motion";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

// Placeholder art served straight off the crafterui CDN so the demo works the
// moment it is installed - no assets to copy into your public/. Swap the names
// and the titles for your own index - the wheel sizes its ring to however many
// pieces it is handed.
const ART = (name: string) => `https://www.crafterui.com/art/${name}.jpg`;

const WORKS: WorksWheelItem[] = [
  {
    title: "Prismatic Rift",
    image: ART("prismatic-rift-anime"),
    href: "#prismatic-rift",
  },
  {
    title: "Ember Clouds",
    image: ART("black-hole-ember-clouds"),
    href: "#ember-clouds",
  },
  {
    title: "Neon Portal",
    image: ART("neon-cave-portal-silhouette"),
    href: "#neon-portal",
  },
  {
    title: "Red Ribbon",
    image: ART("red-ribbon-typography"),
    href: "#red-ribbon",
  },
  {
    title: "Celestial",
    image: ART("celestial-light-figure"),
    href: "#celestial",
  },
  { title: "Uplight", image: ART("neon-portrait-uplight"), href: "#uplight" },
  {
    title: "Indigo Marble",
    image: ART("indigo-liquid-marble"),
    href: "#indigo-marble",
  },
  {
    title: "Launch Window",
    image: ART("rocket-launch-gradient"),
    href: "#launch-window",
  },
  {
    title: "Cosmic Wave",
    image: ART("astronaut-cosmic-wave"),
    href: "#cosmic-wave",
  },
];

export default function WorksWheelDemo() {
  return (
    <div className="relative w-full py-6 sm:py-20 lg:py-24 bg-white text-zinc-900 overflow-hidden">
      
      {/* Rich Purple Ambient Background Glow matching Skills & About sections */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(147, 51, 234, 0.08) 0%, rgba(79, 70, 229, 0.03) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Website Theme Typography & Animations */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Portfolio & Selected Works
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Featured Projects &{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
            >
              Case Studies
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-500 font-medium max-w-xl mx-auto mt-2 sm:mt-4 leading-relaxed tracking-normal"
          >
            A curated showcase of my custom Headless WordPress architectures, full-stack Next.js web applications, and conversion-engineered digital experiences.
          </motion.p>
        </div>

        {/* 3D Works Wheel Stage with responsive height for mobile and desktop */}
        <div className="w-full h-[370px] sm:h-[660px] lg:h-[760px] relative">
          <WorksWheel items={WORKS} label="Selected Works" action="View" />
        </div>

      </div>
    </div>
  );
}
