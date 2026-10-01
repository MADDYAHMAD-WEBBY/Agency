"use client";

import React from "react";
import { motion } from "framer-motion";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";

export default function ServicesSection() {
  const services = [
    {
      href: "#contact",
      title: "Headless WordPress & Next.js",
      description:
        "Lightning-fast, decoupled web applications combining WordPress CMS ease with Next.js frontend performance and sub-second Core Web Vitals.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      badge: "Core Specialty",
      tags: ["Headless CMS", "Next.js 15", "Core Web Vitals"],
      accent: "#9333ea",
      accentForeground: "#ffffff",
    },
    {
      href: "#contact",
      title: "Full-Stack Custom Web Apps",
      description:
        "Tailor-made, high-converting digital web applications engineered with React, TypeScript, and modern APIs designed for rapid scale.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      badge: "Engineering",
      tags: ["React & Node", "TypeScript", "Tailwind CSS"],
      accent: "#2563eb",
      accentForeground: "#ffffff",
    },
    {
      href: "#contact",
      title: "Local SEO & Organic Dominance",
      description:
        "E-E-A-T driven search engine strategies built to eliminate competitors, capture high-intent local buyers, and command page #1 rankings.",
      image:
        "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop",
      badge: "Organic Growth",
      tags: ["Local SEO", "E-E-A-T Optimization", "Search Rank"],
      accent: "#e11d48",
      accentForeground: "#ffffff",
    },
  ];

  return (
    <section id="services" className="w-full py-16 sm:py-24 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-3"
          >
            Capabilities & Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Specialized Services Built for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Maximum Impact
            </span>
          </motion.h3>
        </div>

        {/* 3 Notched Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <NotchedProjectCard
                href={service.href}
                title={service.title}
                description={service.description}
                image={service.image}
                badge={service.badge}
                tags={service.tags}
                accent={service.accent}
                accentForeground={service.accentForeground}
                surface="#ffffff"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
