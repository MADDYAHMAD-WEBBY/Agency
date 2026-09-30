"use client";

import React from "react";
import { motion } from "framer-motion";

export interface BrandList {
  image: string;
  lightimg?: string;
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  const logos = [
    {
      id: 1,
      name: "Logoipsum",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#14b8a6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Logoipsum",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0284c7] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2 6c3 0 4 3 7 3s4-3 7-3 4 3 6 3" />
          <path d="M2 12c3 0 4 3 7 3s4-3 7-3 4 3 6 3" />
          <path d="M2 18c3 0 4 3 7 3s4-3 7-3 4 3 6 3" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "logoipsum*",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#ef4444] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="12" cy="19" r="2.5" />
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="19" cy="12" r="2.5" />
          <circle cx="7" cy="7" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Logoipsum",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563eb] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 5C5 5 10 9 10 12C10 15 5 19 5 19" strokeLinecap="round" />
          <path d="M19 5C19 5 14 9 14 12C14 15 19 19 19 19" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Logoipsum",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#f59e0b] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  // Quadruple array for smooth infinite marquee loop
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full pb-6 sm:pb-8 pt-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Divider Line with Centered Text */}
        <div className="relative flex py-3 sm:py-4 items-center justify-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4">
          <div className="flex-1 border-t border-gray-200/80 min-w-[16px]"></div>
          <span className="shrink-0 px-2 sm:px-4 text-[11px] xs:text-xs sm:text-sm text-gray-500 font-normal tracking-tight text-center">
            Loved by 1000+ big and small brands around the world
          </span>
          <div className="flex-1 border-t border-gray-200/80 min-w-[16px]"></div>
        </div>

        {/* Marquee Track Container with Masked Fade Edges */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
          <motion.div
            className="flex items-center gap-8 sm:gap-16 md:gap-24 w-max py-2 sm:py-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 font-black text-lg sm:text-2xl text-slate-950 tracking-tight shrink-0 hover:scale-105 transition-transform cursor-pointer"
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

