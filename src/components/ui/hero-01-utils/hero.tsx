"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

const GlassyLavenderBubbles = dynamic(
  () => import("@/components/ui/interactive-hero-backgrounds"),
  { ssr: false }
);

export interface AvatarList {
  image: string;
}

interface HeroProps {
  avatarList: AvatarList[];
}

function TypewriterSubtitle({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    setIsComplete(false);

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-xs sm:text-sm text-[#71717a] max-w-lg sm:max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed font-normal px-2 sm:px-4 min-h-[52px] sm:min-h-[44px] flex items-center justify-center">
      <span>
        {displayedText}
        <span
          className={`inline-block w-[2px] h-[14px] sm:h-[16px] bg-purple-600 ml-1 translate-y-[2px] ${
            isComplete ? "animate-pulse opacity-50" : "opacity-100 animate-ping"
          }`}
        />
      </span>
    </p>
  );
}

function RotatingServicesHeadline() {
  const services = [
    "AI Automation",
    "Web Development",
    "Software Development",
    "Growth Marketing",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <h1 className="text-3xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight text-[#0a0a0c] leading-[1.14] sm:leading-[1.16] mb-4 sm:mb-6">
      We Turn Your Business Into a <br />
      Growth Machine with <br />
      <span className="inline-block py-1 sm:py-2 pr-1 sm:pr-3 font-serif-italic font-normal align-baseline">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
            className="inline-block"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 via-fuchsia-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent pb-1"
            >
              {services[currentIndex]}
            </motion.span>
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}

export default function HeroSection({ avatarList }: HeroProps) {
  const subtitleText =
    "At shadcn space, I help small startups tackle the world's biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.";

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-8 sm:pb-12">
      {/* 3D Glassy Lavender Interactive Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-80">
        <GlassyLavenderBubbles />
      </div>

      {/* Background Radial Glows with Light Purple (Lavender) Aura */}
      <div 
        className="absolute top-1/2 left-[8%] -translate-y-1/2 w-[260px] xs:w-[320px] sm:w-[650px] h-[260px] xs:h-[320px] sm:h-[550px] rounded-full pointer-events-none opacity-90 blur-[70px] sm:blur-[130px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(186, 230, 253, 0.8) 0%, rgba(224, 242, 254, 0.4) 50%, rgba(255, 255, 255, 0) 100%)"
        }}
      />
      <div 
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[260px] xs:w-[320px] sm:w-[650px] h-[260px] xs:h-[320px] sm:h-[550px] rounded-full pointer-events-none opacity-90 blur-[70px] sm:blur-[130px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(233, 213, 255, 0.9) 0%, rgba(216, 180, 254, 0.45) 50%, rgba(255, 255, 255, 0) 100%)"
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl">
        
        {/* Dynamic Rotating Headline */}
        <RotatingServicesHeadline />

        {/* Subtitle with Typing Effect and Smaller Font Size */}
        <TypewriterSubtitle text={subtitleText} />

        {/* Action Row: CTA Button + Avatars + Star Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-12">
          
          {/* Black Get Started Button */}
          <AnimatedPillButton text="Get Started" />

          {/* Social Proof Group */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2 sm:-space-x-2.5">
              {avatarList.map((avatar, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-2xs shrink-0"
                >
                  <img
                    src={avatar.image}
                    alt={`Client avatar ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Stars and Rating Text */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center text-amber-500 text-xs sm:text-sm leading-none">
                ★ ★ ★ ★ ★
              </div>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 sm:mt-1">
                Trusted by 1000+ clients
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Soft Cloudy Blend Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}



