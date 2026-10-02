"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

const NovatrixBackground = dynamic(
  () => import("@/components/ui/novatrix-background").then((m) => m.NovatrixBackground),
  { ssr: false }
);

export interface AvatarList {
  image: string;
}

interface HeroProps {
  avatarList: AvatarList[];
}

function TypewriterSubtitle({ text, delayStart = 850 }: { text: string; delayStart?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let i = 0;
    setDisplayedText("");
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 28);
    }, delayStart);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delayStart]);

  return (
    <p className="text-xs sm:text-sm text-zinc-800 font-medium max-w-lg sm:max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 sm:px-4 min-h-[52px] sm:min-h-[44px] flex items-center justify-center">
      <span>
        {displayedText}
        <span
          className={`inline-block w-[2px] h-[14px] sm:h-[16px] bg-zinc-900 ml-1 translate-y-[2px] ${
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
      We Turn Your Business Into <br />
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
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent pb-1"
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
    <section className="relative w-full min-h-[105vh] sm:min-h-[118vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-36 sm:pb-56 bg-white">
      {/* Official Novatrix WebGL Silk Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NovatrixBackground />
      </div>

      {/* Whitish Soft Frosted Backdrop Blur Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/65 backdrop-blur-[12px] sm:backdrop-blur-[20px] z-0" />

      {/* Soft White Top & Bottom Gradient Overlay for Seamless Contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white z-0" />

      {/* Noise Overlay for Subtle Film Grain Finish */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl pt-6 sm:pt-12 pb-10 sm:pb-20">
        
        {/* Dynamic Rotating Headline with Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <RotatingServicesHeadline />
        </motion.div>

        {/* Subtitle with Typing Effect and Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <TypewriterSubtitle text={subtitleText} />
        </motion.div>

        {/* Action Row: CTA Button + Avatars + Star Rating with Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.48, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-20"
        >
          {/* Black Get Started Button */}
          <AnimatedPillButton text="Get Started" />

          {/* Social Proof Group */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2 sm:-space-x-2.5">
              {avatarList.map((avatar, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-zinc-100 shadow-md shrink-0"
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
              <span className="text-[11px] sm:text-xs text-zinc-800 font-semibold mt-0.5 sm:mt-1">
                Trusted by 1000+ clients
              </span>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Ultra-Smooth Seamless Blend Transition to Light Brand Slider */}
      <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-52 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none z-10" />
    </section>
  );
}



