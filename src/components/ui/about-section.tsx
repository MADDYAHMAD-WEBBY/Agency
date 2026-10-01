"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

const RotatingEarth = dynamic(
  () => import("@/components/ui/wireframe-dotted-globe"),
  { ssr: false }
);

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-3"
          >
            About Me & My Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Full-Stack Developer & Local SEO Expert
          </motion.h3>
        </div>

        {/* Bento Grid: 3 Pastel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Left Main Globe Card (Soft Lavender / Periwinkle Pastel) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-gradient-to-br from-[#eff0fe] via-[#e8e9fc] to-[#f4f4fe] border border-purple-200/80 rounded-[32px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow min-h-[500px] sm:min-h-[580px]"
          >
            {/* Top Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-5 pt-2">
              
              {/* Pulsating Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-purple-200/90 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                  Available for projects worldwide
                </span>
              </div>

              {/* Location Heading */}
              <h4 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Based in{" "}
                <span className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 bg-clip-text text-transparent">
                  Bahawalpur, Pakistan
                </span>
              </h4>

              {/* Hero Animated Pill Button */}
              <AnimatedPillButton 
                text="Start a Project"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>

            {/* Bottom 3D Dotted Wireframe Globe Container */}
            <div className="absolute inset-x-0 bottom-0 top-36 sm:top-44 z-0 pointer-events-auto flex items-end justify-center overflow-hidden">
              <RotatingEarth 
                width={700}
                height={550}
                strokeColor="rgba(99, 102, 241, 0.35)"
                dotColor="rgba(30, 27, 75, 0.75)"
                graticuleColor="rgba(129, 140, 248, 0.2)"
                scaleMultiplier={1.85}
                centerYRatio={0.86}
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Column: 2 Glassy Pastel Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 justify-between">
            
            {/* Card 2: Top-Right Stat & Trust Card (Soft Icy Blue Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-gradient-to-br from-[#eaf2fe] via-[#f0f5ff] to-[#eef4fe] border border-blue-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
            >
              {/* Content text */}
              <p className="text-zinc-800 font-semibold text-base sm:text-xl leading-relaxed max-w-lg relative z-10 mb-6 sm:mb-8">
                Trusted by local and international clients, delivering bespoke digital solutions that rank number one in search results.
              </p>

              {/* Watermark Big Stat + Trustpilot Footer + Hero Animated Pill Button */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10 pt-2">
                {/* Trustpilot & Button Group */}
                <div className="flex flex-col items-start gap-4">
                  {/* Trustpilot Stars */}
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900">
                      <span className="text-emerald-500 font-black text-sm">★</span> Trustpilot
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-zinc-900 flex items-center justify-center rounded-xs text-emerald-400 text-xs font-bold">
                          ★
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hero Animated Pill Button */}
                  <AnimatedPillButton text="Explore Results" />
                </div>

                {/* Massive 120+ Stat Watermark */}
                <span className="text-6xl sm:text-8xl font-black text-blue-900/15 tracking-tighter leading-none select-none pointer-events-none self-end sm:self-auto -mb-2">
                  120+
                </span>
              </div>
            </motion.div>

            {/* Card 3: Bottom-Right Quote & Portrait Card (Soft Blush Pink Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-[#fdeaf2] via-[#fef2f7] to-[#fde5f0] border border-pink-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
            >
              {/* Profile Image Portrait */}
              <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white bg-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                  alt="Zainab Ijaz portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote & Signature Details */}
              <div className="flex flex-col justify-between space-y-4 text-center sm:text-left h-full">
                <div className="space-y-2">
                  {/* Quote Mark */}
                  <span className="text-4xl sm:text-5xl leading-none text-pink-300 font-serif font-black select-none block -mb-2">
                    “
                  </span>
                  
                  {/* Quote Text */}
                  <blockquote className="text-sm sm:text-base font-semibold text-zinc-900 leading-snug">
                    Good design feels obvious, because the hard work is hidden.
                  </blockquote>

                  {/* Signature / Role */}
                  <div className="text-xs sm:text-sm text-zinc-600 pt-1">
                    <span className="font-bold text-zinc-900">Zainab Ijaz</span>
                    <span className="mx-1.5 text-zinc-300">|</span>
                    <span>RankIF&apos;s Design Lead</span>
                  </div>
                </div>

                {/* Hero Animated Pill Button */}
                <div className="pt-1 flex justify-center sm:justify-start">
                  <AnimatedPillButton text="Let's Talk" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
