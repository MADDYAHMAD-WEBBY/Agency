"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedPillButton from "@/components/ui/animated-pill-button";
import Bucket from "@/components/ui/bucket";
import { Zap, TrendingUp, ShoppingBag, Bot, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-10 sm:py-16 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP MINIMALIST GLASSY WHITE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full bg-gradient-to-br from-white/95 via-white/90 to-purple-50/40 backdrop-blur-2xl border border-purple-100/70 rounded-[10px] p-6 sm:p-12 lg:p-14 shadow-lg relative overflow-hidden mb-12 sm:mb-16"
        >
          {/* Glassy Background Ambient Lighting Effects */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center relative z-10">
            
            {/* Left Column: Minimalist Typography & Bio */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-[1.2]">
                Meet M. Hafeez Khan <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent inline-block pt-1">
                  E-Commerce & SEO Specialist
                </span>
              </h2>

              <div className="space-y-3 text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                <p>
                  M. Hafeez Khan is a CEO & Lead Digital Architect with over 16+ years of industry experience turning ambitious brands into market leaders. Specializing in high-converting E-Commerce platforms, advanced Local & Global SEO, Headless WordPress, and custom AI automations, he builds high-ROI digital systems.
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
                    <div className="text-[11px] font-medium text-zinc-500">Shopify & Stripe Expert</div>
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
                text="Explore More"
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
                <AnimatedPillButton text="Explore More" />
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
                  src="/images/ceo.webp" 
                  alt="Muhammad Hafeez Khan portrait"
                  className="w-full h-full object-cover object-center"
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
                  <AnimatedPillButton text="Explore More" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
