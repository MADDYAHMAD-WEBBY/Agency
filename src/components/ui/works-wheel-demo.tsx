"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

// Placeholder art served straight off the crafterui CDN so the demo works the
// moment it is installed - no assets to copy into your public/. Swap the names
// and the titles for your own index - the wheel sizes its ring to however many
// pieces it is handed.
const WORKS: WorksWheelItem[] = [
  {
    title: "Amazon FBA Global",
    image: "/images/work/amazon-fba-global.webp",
    href: "/case-studies/ksa-to-usa-uk-eu-amazon-fba-case-study",
  },
  {
    title: "Amazon.sa Saudi Launch",
    image: "/images/work/amazon-saudi-arabia-fba-launch.webp",
    href: "/case-studies/amazon-saudi-arabia-fba-launch-case-study",
  },
  {
    title: "Noon.com Gulf Launch",
    image: "/images/work/noon-gulf-marketplace-brand.webp",
    href: "/case-studies/noon-gulf-marketplace-brand-case-study",
  },
  {
    title: "Shopify DTC Brand",
    image: "/images/work/shopify-dtc-brand-building.webp",
    href: "/case-studies/shopify-dtc-brand-building-case-study",
  },
  {
    title: "Etsy Global Crafts",
    image: "/images/work/etsy-handmade-crafts-global.webp",
    href: "/case-studies/etsy-handmade-crafts-global-case-study",
  },
  {
    title: "TikTok Shop Growth",
    image: "/images/work/tiktok-shop-video-sales.webp",
    href: "/case-studies/tiktok-shop-video-sales-case-study",
  },
  {
    title: "Headless E-Commerce",
    image: "/images/work/cloudscale-lahore-headless-migration.webp",
    href: "/case-studies/cloudscale-lahore-headless-migration",
  },
  {
    title: "FinTech Client Portal",
    image: "/images/work/fintech-cloud-portal.webp",
    href: "/case-studies/fintech-cloud-portal-case-study",
  },
];

export default function WorksWheelDemo() {
  return (
    <div className="relative w-full py-6 sm:py-12 lg:py-14 bg-white text-zinc-900 overflow-hidden">
      
      {/* Rich Purple Ambient Background Glow matching Skills & About sections */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(147, 51, 234, 0.08) 0%, rgba(79, 70, 229, 0.03) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header matching Website Theme Typography & Animations */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Portfolio &amp; Selected Works
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Featured Projects &amp;{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal pr-3 sm:pr-4 py-1"
            >
              Case Studies
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-500 font-medium max-w-xl mx-auto mt-2 sm:mt-4 leading-relaxed tracking-normal"
          >
            An editorial showcase of recent production deployments, bespoke web applications, and high-converting digital interfaces created for ambitious clients.
          </motion.p>
        </div>

        {/* 3D Works Wheel Stage with responsive height for mobile and desktop */}
        <div className="w-full h-[400px] sm:h-[700px] lg:h-[800px] relative">
          <WorksWheel key={WORKS.map((w) => w.title).join("-")} items={WORKS} label="Selected Works" action="View" />
        </div>

      </div>
    </div>
  );
}
