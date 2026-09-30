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

function IDMProofCanvasVideo({ src, className }: { src: string; className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    // Offscreen video element kept in JS memory only - IDM cannot inspect or attach to non-DOM nodes
    const video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.setAttribute("data-idm-no-download", "true");

    let animId: number;

    const render = () => {
      const canvas = canvasRef.current;
      if (canvas && video.readyState >= 2) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
            canvas.width = video.videoWidth || 1280;
            canvas.height = video.videoHeight || 720;
          }
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
      }
      animId = requestAnimationFrame(render);
    };

    video.play().catch(() => {});
    render();

    return () => {
      cancelAnimationFrame(animId);
      video.pause();
      video.src = "";
      video.remove();
    };
  }, [src]);

  return <canvas ref={canvasRef} className={className} />;
}

export default function HeroSection({ avatarList }: HeroProps) {
  const subtitleText =
    "At shadcn space, I help small startups tackle the world's biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.";

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-28 bg-white">
      {/* 100% IDM-Proof Offscreen Canvas Video Background */}
      <IDMProofCanvasVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none opacity-45 select-none"
      />

      {/* Bright Soft Light Overlay for Ultra-Crisp High Contrast Reading */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white z-0 backdrop-blur-[1px]" />

      {/* Noise Overlay for Subtle Film Grain Finish */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl pt-6 sm:pt-12">
        
        {/* Dynamic Rotating Headline */}
        <RotatingServicesHeadline />

        {/* Subtitle with Typing Effect */}
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

        </div>

      </div>

      {/* Ultra-Smooth Seamless Blend Transition to Light Brand Slider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-b from-transparent via-white/90 to-white pointer-events-none z-10" />
    </section>
  );
}



