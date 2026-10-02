"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials";

const clientTestimonials: Testimonial[] = [
  {
    quote:
      "Hamad rebuilt our entire legacy WordPress store into a custom Headless architecture with Next.js. Our mobile Google PageSpeed score jumped from 48 to 99, and our checkout drop-off rate fell by 38% in the first month.",
    name: "Marcus Vance",
    designation: "Founder & CEO, Vance Luxury Goods",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    metric: "+38% Mobile Checkout Rate",
  },
  {
    quote:
      "Before hiring Hamad, our clinic was buried on page 3 of local Google searches. Within 90 days of his Local SEO overhaul and technical site rebuild, we took the #1 spot in the Google 3-Pack across 12 high-intent keywords.",
    name: "Dr. Elena Rostova",
    designation: "Medical Director, Apex Health Group",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    metric: "#1 Google Map Pack Rank",
  },
  {
    quote:
      "The full-stack web application Hamad engineered for our venture firm replaced three disconnected SaaS tools. His code quality, API architecture, and speed of delivery exceeded agencies that quoted us triple the cost.",
    name: "Julian Thorne",
    designation: "Managing Partner, Thorne Capital Partners",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    metric: "Custom Next.js 15 Web App",
  },
  {
    quote:
      "Working with Hamad was completely frictionless. He delivered our enterprise platform with zero fluff, solved every Core Web Vital bottleneck, and gave us a backend that our marketing team actually loves editing.",
    name: "Sophia Sterling",
    designation: "Head of Marketing, Lumina Cloud Solutions",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    metric: "Sub-Second TTFB & Core Web Vitals",
  },
  {
    quote:
      "If you need an uncompromising technical developer who understands how design and search algorithms intersect to drive revenue, Hamad is in a league of his own. The ROI on our new platform was instant.",
    name: "David Kelling",
    designation: "Principal Architect, Kelling Modern Real Estate",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    metric: "Dynamic IDX Platform & Geo-SEO",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 w-full py-16 sm:py-24 bg-white text-zinc-900 overflow-hidden">
      {/* Rich Purple Ambient Background Glow matching Skills, Works & Services */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(147, 51, 234, 0.07) 0%, rgba(79, 70, 229, 0.03) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Brand Style */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Client Validation & Proof of Impact
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Trusted by Founders &{" "}
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
            Direct testimonials from founders, clinicians, and executives who scaled their search visibility, page speeds, and conversion pipelines with my technical architectures.
          </motion.p>
        </div>

        {/* Animated Testimonials Interactive Display */}
        <AnimatedTestimonials testimonials={clientTestimonials} autoplay={true} />

      </div>
    </section>
  );
}
