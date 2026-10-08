"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedPillButton from "@/components/ui/animated-pill-button";
import ParticlesComponent from "@/components/ui/particles-bg";
import LogoMarquee from "@/components/ui/logo-marquee";

const defaultLogos = [
  { src: "https://cdn.21st.dev/assets/mirror/bd/bdf5f3ae72bcfda892a686c03b7932985c694e9a9828643c980601bbc9e53cb4.svg", alt: "Nvidia" },
  { src: "https://cdn.21st.dev/assets/mirror/31/319eeae853dd1af99d442b6c16b6c38dc52a66a719f8e502c65f85d26255cbd3.svg", alt: "Supabase" },
  { src: "https://cdn.21st.dev/assets/mirror/2b/2bcdd4124223e3bf8e66bc08ce0ac32a6cc42ffe3584bbecfd377847176a188d.svg", alt: "OpenAI" },
  { src: "https://cdn.21st.dev/assets/mirror/56/5624b7c243ac8d60e848fb5ea222ec932c1600df54a2762238b37498372fb0c8.svg", alt: "Vercel" },
  { src: "https://cdn.21st.dev/assets/mirror/90/90f01a9537335666282ae5acc80bd4305f86d085a92d60904c3aa3ccc4414570.svg", alt: "GitHub" },
  { src: "https://cdn.21st.dev/assets/mirror/96/96517bce3574d648280ff639d01d9889f354b488b3f826db5df746d730232a0c.svg", alt: "Clerk" },
  { src: "https://cdn.21st.dev/assets/mirror/fc/fc7b090ebcfc468d24a1dc482b2db1fcbfd99ca14568552a30ce553d6dda7fcb.svg", alt: "Turso" },
  { src: "https://cdn.21st.dev/assets/mirror/e8/e8514b1206f79e1abdafcc1d2632393cc7cfbcbbe25426ac5143b17b184b56b8.svg", alt: "Claude" },
];

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
    <p className="text-xs sm:text-sm text-zinc-700 font-medium max-w-lg sm:max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 sm:px-4 min-h-[52px] sm:min-h-[44px] flex items-center justify-center">
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
    "Headless WordPress",
    "Full-Stack Web Dev",
    "AI Search (GEO & AEO)",
    "Local SEO Dominance",
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
      Engineer High-ROI <br />
      Digital Platforms with <br />
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
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-[length:200%_auto] bg-clip-text text-transparent pb-1"
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
    "MHKMarkedia crafts sub-second Next.js web applications, Headless WordPress architectures, and AI-driven SEO strategies that rank your business #1 on Google, ChatGPT, Perplexity & Gemini.";

  return (
    <section className="relative w-full min-h-[105vh] sm:min-h-[118vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-36 sm:pb-56 bg-white text-zinc-900">
      {/* Interactive Lavender Purple Particles Background */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-auto">
        <ParticlesComponent />
      </div>

      {/* Film Grain Noise Overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl pt-6 sm:pt-12 pb-10 sm:pb-20 pointer-events-none">
        
        {/* Dynamic Rotating Headline with Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="pointer-events-none"
        >
          <RotatingServicesHeadline />
        </motion.div>

        {/* Subtitle with Typing Effect and Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="pointer-events-none"
        >
          <TypewriterSubtitle text={subtitleText} />
        </motion.div>

        {/* Action Row: CTA Button + Avatars + Star Rating with Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.48, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-20 pointer-events-auto"
        >
          {/* Black Get Started Button */}
          <Link href="/contact">
            <AnimatedPillButton text="Get Started" />
          </Link>

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

      {/* Smooth Blend Transition to white content section below */}
      <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-52 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none z-10" />
    </section>
  );
}
