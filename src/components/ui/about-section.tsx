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
            About Our Agency & Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Transforming Brands with World-Class Digital Solutions
          </motion.h3>
        </div>

        {/* Bento Grid: 3 Refined Pastel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Left Main Globe Card (Soft Periwinkle / Lavender) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-gradient-to-br from-[#f0efff] via-[#e8e7fd] to-[#f4f3ff] border border-purple-200/80 rounded-[32px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-shadow min-h-[520px] sm:min-h-[600px]"
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

            {/* Bottom Large Curved 3D Dotted Globe Container */}
            <div className="absolute inset-x-0 bottom-0 top-36 sm:top-40 z-0 pointer-events-auto flex items-end justify-center overflow-hidden">
              <RotatingEarth 
                width={800}
                height={620}
                strokeColor="rgba(99, 102, 241, 0.4)"
                dotColor="rgba(30, 27, 75, 0.8)"
                graticuleColor="rgba(129, 140, 248, 0.22)"
                scaleMultiplier={2.25}
                centerYRatio={0.92}
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Column: 2 Glassy Pastel Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 justify-between">
            
            {/* Card 2: Top-Right Stat & Trust Card (Aesthetic Icy Blue Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-gradient-to-br from-[#eaf2fe] via-[#f0f5ff] to-[#eef4fe] border border-blue-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-shadow h-full"
            >
              {/* Content text */}
              <p className="text-zinc-800 font-semibold text-base sm:text-xl leading-relaxed max-w-lg relative z-10 mb-6">
                Trusted by local and international clients, delivering bespoke digital solutions that rank number one in search results.
              </p>

              {/* Aesthetic Vibe Badges Row */}
              <div className="relative z-10 pt-2 flex flex-wrap items-center gap-3">
                {/* Trustpilot Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-2xs">
                  <span className="text-emerald-500 font-black text-xs">★</span>
                  <span className="text-xs font-bold text-zinc-900">Trustpilot 5.0 Rating</span>
                  <div className="flex items-center gap-0.5 ml-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-emerald-500 text-xs">★</span>
                    ))}
                  </div>
                </div>

                {/* Satisfaction Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-2xs text-xs font-bold text-zinc-800">
                  <span>⚡</span> 100% Client Satisfaction
                </div>

                {/* Local SEO Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-2xs text-xs font-bold text-zinc-800">
                  <span>📈</span> #1 Local SEO Ranking
                </div>
              </div>
            </motion.div>

            {/* Card 3: Bottom-Right Quote & Portrait Card (Soft Blush Pink Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-[#fdeaf2] via-[#fef2f7] to-[#fde5f0] border border-pink-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow h-full"
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
              <div className="flex flex-col justify-between space-y-4 text-center sm:text-left h-full w-full">
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
                    <span className="font-medium text-zinc-700">RankIF&apos;s Design Lead</span>
                  </div>
                </div>

                {/* Hero Animated Pill Button */}
                <div className="pt-2 flex justify-center sm:justify-start">
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
