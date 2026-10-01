"use client";

import React from "react";
import { motion } from "framer-motion";

export interface BrandList {
  image?: string;
  lightimg?: string;
  name?: string;
}

interface BrandSliderProps {
  brandList?: BrandList[];
}

export default function BrandSlider({}: BrandSliderProps) {
  const logos = [
    {
      id: 1,
      name: "n8n",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF6D5A] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 9.5a3.5 3.5 0 0 0-3.1 1.9H11.6a3.5 3.5 0 0 0-6.1.1H2.5v3h3a3.5 3.5 0 0 0 6.1.1h3.3a3.5 3.5 0 1 0 3.1-5.2zm-12 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Shopify",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#96BF48] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.34 2.87c-.07.03-.43.16-1 .39-1.07.45-2.6 1.1-2.6 1.1s-.4-.95-1.07-1.57C10.02 2.2 9.17 2 8.35 2.1c-1.6.2-2.76 1.4-3.08 2.92-.25 1.23.1 2.37.78 3.16.58.68 1.43 1.08 2.24 1.34l-1.92 12.02c-.04.28.06.56.27.74.17.15.4.22.63.22.06 0 .12 0 .18-.02l9.88-2.12c.45-.1.77-.49.77-.95V3.34c0-.28-.15-.54-.4-.68-.25-.13-.56-.11-.79.03zM10.82 4.9c.28.43.6 1.06.6 1.06s-1.12.3-2.14.7c-.22-.65-.18-1.34.1-1.83.27-.47.8-.75 1.44-.01zM8.88 7.33c.8-.3 1.63-.52 2.22-.62l.85 10.92-5.74 1.23L8.88 7.33z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "HubSpot",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF7A59] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.8 10.4c-.8 0-1.5.5-1.8 1.2l-3.3-1.9v-2.3c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.5 1.2 1.8v2.3l-3.3 1.9c-.3-.7-1-1.2-1.8-1.2-1.1 0-2 .9-2 2s.9 2 2 2c.8 0 1.5-.5 1.8-1.2l3.3 1.9v2.3c-.7.3-1.2 1-1.2 1.8 0 1.1.9 2 2 2s2-.9 2-2c0-.8-.5-1.5-1.2-1.8v-2.3l3.3-1.9c.3.7 1 1.2 1.8 1.2 1.1 0 2-.9 2-2s-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "WordPress",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#21759B] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.18-1.86l4.24-11.6 4.38 11.6A8.2 8.2 0 0 1 12 20.2zm6.36-4.63-2.65-7.73h2.15a8.18 8.18 0 0 1 .5 7.73zM5.29 8.44l2.67 7.75A8.18 8.18 0 0 1 5.29 8.44z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "OpenAI",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.04 6.04 0 0 0-6.52-2.82 6 6 0 0 0-4.56-2.03 6.04 6.04 0 0 0-5.74 4.12 5.98 5.98 0 0 0-4.04 2.92 6.04 6.04 0 0 0 .78 7.1 5.98 5.98 0 0 0 .52 4.9 6.04 6.04 0 0 0 6.52 2.83 6 6 0 0 0 4.56 2.03 6.04 6.04 0 0 0 5.74-4.13 5.98 5.98 0 0 0 4.04-2.9 6.04 6.04 0 0 0-.78-7.11zm-8.87 11.23a4.5 4.5 0 0 1-2.91-1.07l.15-.08 3.84-2.22a.77.77 0 0 0 .39-.67v-5.42l1.63.94a.07.07 0 0 1 .04.05v4.47a4.52 4.52 0 0 1-3.14 4vhM4.35 17.5a4.49 4.49 0 0 1-.54-3.06l.15.09 3.84 2.22a.77.77 0 0 0 .77 0l4.69-2.71v1.89a.07.07 0 0 1-.03.06l-3.87 2.23a4.52 4.52 0 0 1-5.01-.62zM3.46 8.32a4.49 4.49 0 0 1 2.37-2l.01.17v4.44a.77.77 0 0 0 .38.67l4.69 2.71-1.63.94a.07.07 0 0 1-.07 0l-3.87-2.23a4.52 4.52 0 0 1-1.88-4.7z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Make",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#6B46C1] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h6v16H4V4zm10 0h6v6h-6V4zm0 10h6v6h-6v-6z" />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Stripe",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#635BFF] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.98 11.23c-1.7-.5-2.2-.84-2.2-1.42 0-.56.55-.91 1.48-.91 1.62 0 3.03.62 3.84 1.1l.82-2.4c-.95-.57-2.61-1-4.48-1-3.66 0-5.96 1.83-5.96 4.46 0 3.73 5.15 3.08 5.15 4.67 0 .66-.6 1.01-1.63 1.01-1.85 0-3.52-.77-4.45-1.42l-.84 2.45c1.1.77 3.08 1.23 5.16 1.23 3.84 0 6.22-1.77 6.22-4.57 0-3.92-5.11-3.23-5.11-4.7z" />
        </svg>
      ),
    },
    {
      id: 8,
      name: "Zapier",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4A00] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 2L3 13.5h7.5L9 22l10.5-11.5H12L13.5 2z" />
        </svg>
      ),
    },
  ];

  // Quadruple array for seamless infinite marquee loop
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full pb-6 sm:pb-8 pt-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Divider Line with Centered Text */}
        <div className="relative flex py-3 sm:py-4 items-center justify-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4">
          <div className="flex-1 border-t border-zinc-200 min-w-[16px]"></div>
          <span className="shrink-0 px-2 sm:px-4 text-[11px] xs:text-xs sm:text-sm text-zinc-600 font-medium tracking-tight text-center">
            Integrated with top platforms & modern tech stacks
          </span>
          <div className="flex-1 border-t border-zinc-200 min-w-[16px]"></div>
        </div>

        {/* Marquee Track Container with Masked Fade Edges */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
          <motion.div
            className="flex items-center gap-8 sm:gap-14 md:gap-20 w-max py-2 sm:py-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3 font-bold text-lg sm:text-2xl text-zinc-800 hover:text-black tracking-tight shrink-0 hover:scale-105 transition-transform cursor-pointer"
              >
                {logo.icon}
                <span>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
