"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Award, ShoppingBag, TrendingUp } from "lucide-react";
import AnimatedPillButton from "@/components/ui/animated-pill-button";
import type { GlobeMarker } from "@/components/ui/3d-globe";

const Globe3D = dynamic(
  () => import("@/components/ui/3d-globe").then((m) => m.Globe3D),
  { ssr: false }
);

const globeMarkers: GlobeMarker[] = [
  { lat: 29.3544, lng: 71.6911, label: "Pakistan" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  { lat: 40.7128, lng: -74.006, label: "New York" },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-10 sm:py-16 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP MINIMALIST SECTION (Clean layout without background card enclosure) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full relative mb-16 sm:mb-24 lg:mb-28"
        >

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center relative z-10">
            
            {/* Left Column: Minimalist Typography & Bio */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Meet M. Hafeez Khan <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent inline-block pt-1">
                  E-Commerce & SEO Specialist
                </span>
              </h2>

              <div className="space-y-3 text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                <p>
                  M. Hafeez Khan is a CEO & Lead Digital Architect with over 16+ years of industry experience turning ambitious brands into market leaders, specializing in high-converting E-Commerce platforms and advanced Local & Global SEO.
                </p>
                <p>
                  With nearly two decades of technical mastery, he crafts sub-second web experiences, optimizes Core Web Vitals, and secures top-tier organic Google rankings for client platforms worldwide.
                </p>
              </div>

              {/* Mature Executive Credentials Grid with 10px Border Radius */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-[10px] border border-zinc-200/80 bg-zinc-50/80 shadow-2xs hover:border-zinc-300 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-purple-500/10 border border-purple-200/80 flex items-center justify-center text-purple-600 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-zinc-900 leading-tight">16+ Years</div>
                    <div className="text-[11px] font-medium text-zinc-500">Industry Leadership</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-[10px] border border-zinc-200/80 bg-zinc-50/80 shadow-2xs hover:border-zinc-300 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-emerald-500/10 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-zinc-900 leading-tight">E-Commerce</div>
                    <div className="text-[11px] font-medium text-zinc-500">TikTok & Shopify E-Commerce</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-[10px] border border-zinc-200/80 bg-zinc-50/80 shadow-2xs hover:border-zinc-300 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-indigo-500/10 border border-indigo-200/80 flex items-center justify-center text-indigo-600 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-zinc-900 leading-tight">#1 Rankings</div>
                    <div className="text-[11px] font-medium text-zinc-500">Local & Global SEO</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <AnimatedPillButton 
                  text="Explore More"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                />
                
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2.5 rounded-full border border-zinc-200 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-all cursor-pointer shadow-2xs"
                >
                  🗓️ Book 15-Min Strategy Call
                </button>
              </div>
            </div>

            {/* Right Column: Tilted Polaroid Frame matching reference image */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full max-w-[320px] sm:max-w-[360px] bg-[#1a1a1e] text-white p-3.5 sm:p-4 rounded-[26px] shadow-2xl border border-zinc-800 transform -rotate-2 sm:-rotate-3 hover:rotate-0 transition-all duration-300 relative cursor-pointer"
              >
                {/* Photo Container */}
                <div className="w-full aspect-[4/5] rounded-[18px] overflow-hidden bg-zinc-900 relative shadow-inner">
                  <img
                    src="/images/ceo.webp"
                    alt="M. Hafeez Khan CEO portrait"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Bottom Details Bar */}
                <div className="flex items-center justify-between pt-3.5 px-2 text-zinc-300">
                  <span className="font-serif italic text-xs sm:text-sm font-semibold tracking-wide text-zinc-100">
                    M. Hafeez Khan
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                    16+ YRS EXP | CEO
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Section Sub-Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10 mb-8 sm:mb-12">
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
            className="lg:col-span-6 bg-gradient-to-br from-[#f0efff] via-[#e8e7fd] to-[#f4f3ff] border border-purple-200/80 rounded-[12px] pt-6 sm:pt-10 px-5 sm:px-10 pb-0 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-shadow min-h-[420px] xs:min-h-[460px] sm:min-h-[540px] lg:min-h-[620px]"
          >
            {/* Top Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
              
              {/* Pulsating Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/90 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-semibold text-zinc-800">
                  Serving Businesses Worldwide
                </span>
              </div>

              {/* Worldwide Growth Heading */}
              <h4 className="text-xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Empowering Businesses <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent font-serif italic font-normal">
                  Across the Entire Globe
                </span>
              </h4>

              {/* Sub-description focusing purely on Global Reach & Cross-Border Execution */}
              <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed font-normal">
                From North America and Europe to the UAE and Asia-Pacific, we engineer custom web platforms tailored for international expansion. Our cross-border digital solutions help brands scale effortlessly across global markets.
              </p>

              {/* Hero Animated Pill Button */}
              <div className="pt-1">
                <AnimatedPillButton 
                  text="Explore Global Services"
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            </div>

            {/* Bottom 3D Interactive Globe Container (Sleek 3D NASA Globe with No Side Clipping) */}
            <div className="relative z-10 mt-4 sm:mt-6 w-full h-[280px] sm:h-[360px] lg:h-[400px] mx-auto flex items-center justify-center overflow-hidden rounded-b-[12px]">
              {/* Globe Canvas Container */}
              <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[540px] lg:h-[540px] relative flex items-center justify-center translate-y-8 sm:translate-y-12 lg:translate-y-16 pointer-events-auto">
                <Globe3D markers={globeMarkers} className="w-full h-full" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Glassy Pastel Cards (Original 50% Width) */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Card 2: Top-Right Stat & Trust Card (Aesthetic Icy Blue Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-gradient-to-br from-[#eaf2fe] via-[#f0f5ff] to-[#eef4fe] border border-blue-200/80 rounded-[12px] p-4 sm:p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-shadow h-auto lg:h-full"
            >
              {/* Content text - Focusing on Revenue Metrics & Local SEO */}
              <div className="space-y-2.5 relative z-10 mb-3 sm:mb-4">
                <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">Proven Revenue & Organic Impact</div>
                <p className="text-zinc-800 font-medium text-xs sm:text-sm leading-relaxed max-w-lg">
                  Over 200+ successful brand transformations with documented performance: 340% average phone call increase, top Google Map Pack rankings, and optimized conversion funnels built for maximum ROI.
                </p>

                {/* Micro Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px] font-semibold text-zinc-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> #1 Google 3-Map Pack Ranking
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> High Lead Conversion (CRO)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Sub-Second Site Speed
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 100% White-Hat Local SEO
                  </div>
                </div>
              </div>

              {/* Bottom Row: Official Trustpilot Rating & Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 pt-4 sm:pt-5 border-t border-blue-200/60 mt-2 sm:mt-3">
                {/* Official Trustpilot Rating Block */}
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 tracking-tight">
                    <span className="text-emerald-500 font-black text-sm">★</span> Trustpilot Verified (4.9/5 Rating)
                  </div>
                  <div className="flex items-center gap-1 pl-[20px]">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 bg-zinc-900 flex items-center justify-center rounded-xs text-emerald-400 text-[10px] font-bold shadow-2xs">
                        ★
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero Animated Pill Button */}
                <div className="shrink-0 flex items-center">
                  <AnimatedPillButton text="View Results" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Bottom-Right Quote & Portrait Card (Soft Blush Pink Pastel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-[#fdeaf2] via-[#fef2f7] to-[#fde5f0] border border-pink-200/80 rounded-[12px] p-5 sm:p-7 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow h-auto lg:h-full"
            >
              {/* Profile Image Portrait */}
              <div className="w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white bg-zinc-200">
                <img 
                  src="/images/ceo.webp" 
                  alt="Muhammad Hafeez Khan portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Quote & Signature Details - Focusing on 2026 AI Search & Tech Architecture */}
              <div className="flex flex-col justify-between space-y-3 text-center sm:text-left h-auto lg:h-full w-full">
                <div className="space-y-1.5">
                  {/* Quote Mark */}
                  <span className="text-2xl sm:text-4xl leading-none text-pink-300 font-serif font-black select-none block -mb-1">
                    “
                  </span>
                  
                  {/* Quote Text */}
                  <blockquote className="text-xs text-zinc-800 font-medium leading-relaxed">
                    Modern web platforms require more than traditional themes—they need Generative Engine Optimization (GEO) and custom Next.js architecture so AI engines like ChatGPT & Perplexity recommend your business first.
                  </blockquote>

                  {/* Signature / Role */}
                  <div className="text-xs text-zinc-600 pt-1">
                    <span className="font-bold text-zinc-900">Muhammad Hafeez Khan</span>
                    <span className="mx-1.5 text-zinc-300">|</span>
                    <span className="font-medium text-zinc-700">CEO & Lead Architect (16+ Yrs Exp)</span>
                  </div>
                </div>

                {/* Hero Animated Pill Button */}
                <div className="pt-1 flex justify-center sm:justify-start">
                  <AnimatedPillButton text="Book Call with CEO" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
