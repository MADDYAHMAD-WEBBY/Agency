"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedPillButton from "@/components/ui/animated-pill-button";
import Bucket from "@/components/ui/bucket";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-10 sm:py-16 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
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
            Transforming Brands with{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
            >
              World-Class Digital Solutions
            </motion.span>
          </motion.h3>
        </div>

        {/* Bento Grid: 3 Aesthetic Pastel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* Card 1: Left Main Feature Bucket Card (Soft Periwinkle / Lavender) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-gradient-to-br from-[#f0efff] via-[#e8e7fd] to-[#f4f3ff] border border-purple-200/80 rounded-[12px] pt-5 sm:pt-10 px-5 sm:px-10 pb-0 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-shadow min-h-[420px] xs:min-h-[460px] sm:min-h-[540px] lg:min-h-[620px]"
          >
            {/* Top Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
              
              {/* Pulsating Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/90 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                  Available for projects
                </span>
              </div>

              {/* Location Heading */}
              <h4 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Based{" "}
                <span className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 bg-clip-text text-transparent">
                  Worldwide
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

            {/* Bottom Interactive Feature Bucket Component - Grounded at Card Bottom */}
            <div className="relative z-10 mt-4 sm:mt-6 w-full max-w-[560px] mx-auto flex items-end justify-center -mb-1">
              <Bucket />
            </div>
          </motion.div>

          {/* Right Column: 2 Glassy Pastel Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Card 2: Top-Right Stat & Trust Card (Aesthetic Icy Blue Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-gradient-to-br from-[#eaf2fe] via-[#f0f5ff] to-[#eef4fe] border border-blue-200/80 rounded-[12px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-shadow h-auto lg:h-full"
            >
              {/* Content text */}
              <p className="text-zinc-700 font-medium text-sm sm:text-base leading-relaxed max-w-lg relative z-10 mb-4 sm:mb-6">
                Trusted by local and international clients, delivering bespoke digital solutions that rank number one in search results.
              </p>

              {/* Bottom Row: Official Trustpilot Rating & Action Button */}
              <div className="flex flex-col items-start sm:flex-row sm:items-end justify-between gap-4 relative z-10 pt-2">
                {/* Official Trustpilot Rating Block */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 tracking-tight">
                    <span className="text-emerald-500 font-black text-sm">★</span> Trustpilot
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 bg-zinc-900 flex items-center justify-center rounded-xs text-emerald-400 text-xs sm:text-sm font-bold shadow-2xs">
                        ★
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero Animated Pill Button */}
                <AnimatedPillButton text="Explore Results" />
              </div>
            </motion.div>

            {/* Card 3: Bottom-Right Quote & Portrait Card (Soft Blush Pink Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-[#fdeaf2] via-[#fef2f7] to-[#fde5f0] border border-pink-200/80 rounded-[12px] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow h-auto lg:h-full"
            >
              {/* Profile Image Portrait */}
              <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white bg-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                  alt="Muhammad Hafeez Khan portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote & Signature Details */}
              <div className="flex flex-col justify-between space-y-4 text-center sm:text-left h-auto lg:h-full w-full">
                <div className="space-y-2">
                  {/* Quote Mark */}
                  <span className="text-3xl sm:text-5xl leading-none text-pink-300 font-serif font-black select-none block -mb-1 sm:-mb-2">
                    “
                  </span>
                  
                  {/* Quote Text */}
                  <blockquote className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                    Good design feels obvious, because the hard work is hidden.
                  </blockquote>

                  {/* Signature / Role */}
                  <div className="text-xs sm:text-sm text-zinc-600 pt-1">
                    <span className="font-bold text-zinc-900">Muhammad Hafeez Khan</span>
                    <span className="mx-1.5 text-zinc-300">|</span>
                    <span className="font-medium text-zinc-700">shadcnspace. Lead</span>
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
