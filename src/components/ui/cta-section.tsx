"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="contact" className="relative z-20 w-full py-12 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-[1202px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with 10px Border Radius and Soft Blue-Cyan Atmosphere Glow */}
        <div className="relative rounded-[10px] border border-zinc-200/90 bg-white/90 backdrop-blur-md overflow-hidden p-8 sm:p-14 lg:p-16 shadow-[0_12px_45px_rgba(0,0,0,0.04)]">
          
          {/* Bottom-Left Vibrant Cyan/Blue Aura */}
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full blur-[85px] opacity-75"
            style={{
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.7) 0%, rgba(6, 182, 212, 0.4) 45%, transparent 75%)",
            }}
          />

          {/* Top-Right Vibrant Sky/Azure Aura */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-80 sm:w-[440px] h-80 sm:h-[440px] rounded-full blur-[90px] opacity-70"
            style={{
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.65) 0%, rgba(14, 165, 233, 0.35) 45%, transparent 75%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Main Headline with Theme Sans Font and Relative Wrapper for Rotating Badge */}
            <div className="relative inline-block max-w-4xl mx-auto mb-6 sm:mb-8 pt-2 sm:pt-4">
              <h2
                className="text-3xl sm:text-5xl lg:text-[3.6rem] font-light tracking-tight text-zinc-900 leading-[1.12] uppercase select-none"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span>FROM CONCEPT TO </span>
                <strong className="font-extrabold text-black">CREATION</strong>
                <br />
                <span>LET&apos;S MAKE IT </span>
                <strong className="font-extrabold text-black">HAPPEN!</strong>
              </h2>

              {/* Rotating "OPEN TO WORK" Sticker Badge */}
              <div className="relative sm:absolute sm:-top-2 sm:-right-16 md:-right-20 lg:-right-24 mt-4 sm:mt-0 inline-flex items-center justify-center">
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[3.5px] border-[#0055ff] bg-black shadow-xl flex items-center justify-center">
                  
                  {/* Rotating Circular Text SVG */}
                  <svg
                    className="w-full h-full animate-[spin_10s_linear_infinite]"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text
                      className="text-[8.8px] font-mono font-bold tracking-[2.8px] fill-white uppercase"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        • OPEN TO WORK • OPEN TO WORK
                      </textPath>
                    </text>
                  </svg>

                  {/* Centered 4-Point Star / Sparkle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* "Get In Touch" Call-To-Action Pill Button */}
            <div className="mb-8 sm:mb-10">
              <a
                href="mailto:hammadahmad749@gmail.com"
                className="group inline-flex items-center gap-3.5 px-6 py-2.5 rounded-full bg-zinc-200/80 hover:bg-zinc-300/90 text-zinc-900 font-medium text-sm sm:text-base border border-zinc-300/60 shadow-xs transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Get In Touch</span>
                <span className="w-7 h-7 rounded-full bg-zinc-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Bottom Subtitle Copy matching screenshot with Solo Persona */}
            <div className="max-w-xl mx-auto space-y-2">
              <p className="font-serif font-bold text-zinc-900 text-lg sm:text-xl tracking-tight">
                I&apos;m available for full-time roles &amp; freelance projects.
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 font-sans font-normal leading-relaxed">
                I thrive on crafting dynamic web applications, and delivering seamless user experiences.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
