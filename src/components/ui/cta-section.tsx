"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="contact" className="relative z-20 w-full py-12 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with Curved Borders and Soft Blue-Cyan Atmosphere Glow */}
        <div className="relative rounded-[22px] sm:rounded-[28px] border border-zinc-200/90 bg-white/90 backdrop-blur-md overflow-hidden p-8 sm:p-14 lg:p-16 shadow-[0_12px_45px_rgba(0,0,0,0.04)]">
          
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
            
            {/* Top Emblem: Outstretched Ethereal Wings with Central Monogram Orb */}
            <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
              <svg
                className="w-48 sm:w-64 h-16 sm:h-20 text-zinc-300"
                viewBox="0 0 320 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left Wing Feathers */}
                <path
                  d="M135 50 C110 32, 70 20, 20 22 C15 22, 10 24, 8 26 C15 32, 45 42, 75 48 C50 48, 30 52, 22 55 C35 60, 65 65, 90 66 C70 68, 50 72, 42 76 C60 80, 85 80, 110 75 C120 73, 130 65, 138 56"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-400/80"
                />
                <path
                  d="M130 46 C105 32, 75 26, 38 28"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="text-zinc-300"
                />
                <path
                  d="M125 54 C100 48, 70 46, 45 52"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="text-zinc-300"
                />

                {/* Right Wing Feathers */}
                <path
                  d="M185 50 C210 32, 250 20, 300 22 C305 22, 310 24, 312 26 C305 32, 275 42, 245 48 C270 48, 290 52, 298 55 C285 60, 255 65, 230 66 C250 68, 270 72, 278 76 C260 80, 235 80, 210 75 C200 73, 190 65, 182 56"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-400/80"
                />
                <path
                  d="M190 46 C215 32, 245 26, 282 28"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="text-zinc-300"
                />
                <path
                  d="M195 54 C220 48, 250 46, 275 52"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="text-zinc-300"
                />
              </svg>

              {/* Central Glowing Monogram Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#e0e7ff] via-[#dbeafe] to-[#bfdbfe] p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.25)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm border border-blue-200/60 flex items-center justify-center">
                    <span className="font-extrabold text-sm sm:text-base tracking-tighter text-zinc-900 font-sans">
                      HA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline with Relative Wrapper for Rotating Badge */}
            <div className="relative inline-block max-w-4xl mx-auto mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-sans font-light tracking-tight text-zinc-900 leading-[1.12] uppercase select-none">
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
