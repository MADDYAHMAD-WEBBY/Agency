"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery";

const industriesData: GalleryItem[] = [
  {
    common: "E-Commerce & DTC",
    binomial: "Headless WooCommerce & High-Speed Shopify",
    photo: {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      text: "Modern luxury boutique store front",
      pos: "center 30%",
      by: "Sub-Second Checkout & High Conversion",
    },
  },
  {
    common: "SaaS & Tech Startups",
    binomial: "Next.js 15 Web Applications & Cloud Portals",
    photo: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      text: "Modern tech analytics dashboard",
      pos: "center",
      by: "Scalable Architecture & Instant Onboarding",
    },
  },
  {
    common: "Healthcare & Clinics",
    binomial: "Patient Portals & Local Google Map Dominance",
    photo: {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      text: "Modern clean medical clinic room",
      pos: "center 40%",
      by: "HIPAA-Ready & Top 3 Map-Pack Rank",
    },
  },
  {
    common: "Real Estate & Architecture",
    binomial: "Dynamic IDX Listings & High-Ticket Leads",
    photo: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      text: "Luxury contemporary home architecture",
      pos: "center",
      by: "Immersive Showcases & Geo-Targeting",
    },
  },
  {
    common: "Law & Legal Services",
    binomial: "Authority Web Builds & Client Acquisition",
    photo: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      text: "Corporate glass skyscraper architecture",
      pos: "center",
      by: "High-Authority Citations & Reputation",
    },
  },
  {
    common: "Finance & Wealth Tech",
    binomial: "Interactive Calculators & Encrypted Portals",
    photo: {
      url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      text: "Financial charts and high tech data",
      pos: "center",
      by: "Bank-Grade Security & Web Utilities",
    },
  },
  {
    common: "Hospitality & Dining",
    binomial: "Direct Booking Engines & 5-Star Reputation",
    photo: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      text: "Luxury boutique resort hotel pool",
      pos: "center",
      by: "Zero-Commission Flows & Social Proof",
    },
  },
  {
    common: "Home Trades & Contractors",
    binomial: "Instant Call Capture & Google Map Pack #1",
    photo: {
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      text: "Industrial architectural craftsmanship",
      pos: "center",
      by: "High-Intent Local Search Dominance",
    },
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative z-10 w-full py-10 sm:py-16 bg-white text-zinc-900 overflow-hidden">
      {/* Rich Purple Ambient Background Glow matching Skills, Works & Services */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(147, 51, 234, 0.07) 0%, rgba(79, 70, 229, 0.03) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Industries & Specialized Verticals
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Engineered for{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
            >
              Industry Leaders
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-600 font-medium max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed tracking-normal"
          >
            I architect custom full-stack web solutions, headless platforms, and local search dominance tailored to the specific conversion mechanics of high-growth sectors.
          </motion.p>
        </div>

        {/* 3D Circular Gallery Stage */}
        <div className="w-full h-[520px] sm:h-[620px] lg:h-[700px] relative flex items-center justify-center">
          <CircularGallery items={industriesData} autoRotateSpeed={0.07} />
        </div>

      </div>
    </section>
  );
}
