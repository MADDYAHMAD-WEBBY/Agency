"use client";

import React from "react";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

interface BannerProps {
  title?: string;
  subtitle?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ConsultationCtaBanner({
  title = "READY TO ELEVATE YOUR DIGITAL IMPACT?",
  subtitle = "Turning high-performance engineering & organic search into lasting revenue.",
  subtext = "Whether you need an enterprise Next.js web application, a headless WordPress migration, or dominant local search visibility, I architect custom web solutions built for speed, conversion, and scale.",
  buttonText = "Start a Conversation",
  buttonHref,
}: BannerProps) {
  return (
    <section id="contact" className="relative z-20 w-full pt-4 sm:pt-6 pb-12 sm:pb-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1562px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with 10px Border Radius and Soft Blue-Cyan Atmosphere Glow matching Homepage */}
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

            {/* Main Headline with Theme Serif Font and Relative Wrapper for Rotating Badge */}
            <div className="relative inline-block max-w-5xl mx-auto mb-6 sm:mb-8 pt-2 sm:pt-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.3rem] font-serif font-bold tracking-tight text-zinc-900 leading-[1.22] uppercase select-none">
                {title}
              </h2>

              {/* Rotating "OPEN TO COLLABORATE" Sticker Badge */}
              <div className="relative sm:absolute sm:-top-2 sm:-right-16 md:-right-20 lg:-right-24 mt-4 sm:mt-0 inline-flex items-center justify-center">
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[3.5px] border-[#0055ff] bg-black shadow-xl flex items-center justify-center">
                  
                  {/* Rotating Circular Text SVG */}
                  <svg
                    className="w-full h-full animate-[spin_10s_linear_infinite]"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="ctaCirclePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text
                      className="text-[8.5px] font-mono font-bold tracking-[2.7px] fill-white uppercase"
                    >
                      <textPath href="#ctaCirclePath" startOffset="0%">
                        • AVAILABLE FOR PROJECTS • LET&apos;S TALK
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

            {/* Theme Animated Pill Button */}
            <div className="mb-8 sm:mb-10 flex justify-center">
              <AnimatedPillButton
                text={buttonText}
                onClick={() => {
                  if (buttonHref) {
                    window.location.href = buttonHref;
                  } else {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = "/#contact";
                    }
                  }
                }}
                variant="glass"
                className="h-[50px] px-2 text-base shadow-md"
              />
            </div>

            {/* Bottom Subtitle Copy */}
            <div className="max-w-2xl mx-auto space-y-2.5">
              {subtitle && (
                <p className="font-serif font-bold text-zinc-900 text-lg sm:text-xl tracking-tight">
                  {subtitle}
                </p>
              )}
              {subtext && (
                <p className="text-xs sm:text-sm text-zinc-600 font-sans font-normal leading-relaxed">
                  {subtext}
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
