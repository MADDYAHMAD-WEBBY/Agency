"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  bannerGradient: string;
  image: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "keythm-saas",
    title: "Keythm & Apex Analytics",
    tagline: "Keychron meets typing test — every key has its own sound, every stat tracked",
    summary:
      "A typing test where every key has its own sound. Per-key mechanical audio via Web Audio API, four test modes, statistical anti-cheat, and a fully offline PWA — built to make typing feel physical.",
    bannerGradient: "from-pink-600 via-rose-600 to-purple-800",
    image: "/images/services/custom-software-saas.webp",
    highlights: [
      "Per-key mechanical audio from a single OGG sprite — decoded once, sliced per-keystroke via Web Audio API.",
      "Four modes (timed, word count, quotes, zen) with live WPM, accuracy, and consistency tracking.",
      "Statistical anti-cheat: 13 checks for bot patterns, AFK gaps, and impossible burst spikes.",
      "Offline-first PWA — all state in localStorage, Serwist precaching, works without a connection.",
    ],
    techStack: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "DRIZZLE ORM",
      "MOTION.DEV",
      "SHADCN UI",
      "WEB-AUDIO-API",
      "SERWIST",
      "ZOD",
      "RECHARTS",
    ],
    liveUrl: "#contact",
  },
  {
    id: "luxe-commerce",
    title: "Luxe Home Goods",
    tagline: "Sub-second e-commerce engine — 100/100 Core Web Vitals with Headless WordPress",
    summary:
      "Enterprise Headless WordPress architecture powering a high-converting WooCommerce storefront with instant page transitions and real-time GraphQL backend synchronization.",
    bannerGradient: "from-purple-700 via-indigo-700 to-violet-900",
    image: "/images/services/wordpress-webflow.webp",
    highlights: [
      "Sub-second initial page load with Next.js ISR (Incremental Static Regeneration).",
      "GraphQL backend connection with WooCommerce for real-time inventory and instant cart updates.",
      "Custom Tailwind UI component system with zero layout shift (CLS: 0.00).",
      "Integrated Stripe & Apple Pay checkout flows resulting in a 215% mobile revenue increase.",
    ],
    techStack: [
      "NEXT.JS",
      "HEADLESS WORDPRESS",
      "WOOCOMMERCE",
      "GRAPHQL",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "VERCEL",
      "STRIPE",
    ],
    liveUrl: "#contact",
  },
  {
    id: "nexus-ai-engine",
    title: "Nexus Global Logistics",
    tagline: "Autonomous AI workflows — 24/7 lead qualification & instant CRM pipelines",
    summary:
      "Custom AI agent suite and automated lead nurturing system connecting OpenAI LLMs directly into enterprise CRMs, saving over 180 hours of manual sales operations monthly.",
    bannerGradient: "from-blue-600 via-indigo-700 to-purple-900",
    image: "/images/services/workflow-automation.webp",
    highlights: [
      "24/7 Autonomous OpenAI lead qualification agent engaging web traffic in real time.",
      "Automated SMS & email nurturing workflows powered by Make.com and custom Webhooks.",
      "Real-time lead scoring and instant Slack/CRM alerts for high-value enterprise accounts.",
      "Zero-latency API gateway processing thousands of webhooks concurrently with 99.99% uptime.",
    ],
    techStack: [
      "OPENAI API",
      "NEXT.JS",
      "NODE.JS",
      "ZAPIER & MAKE",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "SUPABASE",
      "WEBHOOKS",
    ],
    liveUrl: "#contact",
  },
];

export default function WorkSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const currentProject = featuredProjects[activeProjectIndex];

  return (
    <section id="work" className="w-full py-20 sm:py-32 bg-zinc-50/70 border-t border-zinc-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight font-serif">
            Curated{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent italic">
              work
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
            A curated showcase of high-performing web platforms, headless WordPress architectures, and AI workflow engines built for ambitious brands.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {featuredProjects.map((p, idx) => {
            const isActive = idx === activeProjectIndex;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProjectIndex(idx)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-md"
                    : "bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200/80"
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Featured Project Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-[32px] p-6 sm:p-10 border border-zinc-200/80 shadow-xs"
          >
            {/* Left Column: Visual Banner Card with Framed Preview */}
            <div className="lg:col-span-6 flex flex-col">
              <a
                href={currentProject.liveUrl}
                className="group relative rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between aspect-[4/3] shadow-md transition-transform duration-500 hover:scale-[1.01]"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentProject.bannerGradient} transition-opacity duration-500`}
                />

                {/* Top Banner Text & Arrow Button */}
                <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug max-w-md">
                    {currentProject.tagline}
                  </h3>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* Framed Web Application Screen Preview */}
                <div className="relative z-10 mt-auto rounded-t-2xl overflow-hidden border border-white/20 bg-zinc-950/80 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                  <div className="h-6 bg-zinc-900/90 border-b border-white/10 px-3 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-auto object-cover object-top max-h-[280px] sm:max-h-[340px]"
                  />
                </div>
              </a>
            </div>

            {/* Right Column: Project Details, Bullet Points & Tech Badges */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              {/* Title with dash prefix */}
              <div className="flex items-center gap-3">
                <span className="w-6 h-0.5 bg-pink-600 rounded-full" />
                <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight font-serif">
                  {currentProject.title}
                </h3>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {currentProject.summary}
              </p>

              {/* Bullet points with pink 4-point star icon */}
              <ul className="space-y-3 pt-2">
                {currentProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                    <span className="text-pink-600 font-bold text-base flex-shrink-0 mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-zinc-700 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 text-center flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm text-zinc-500 font-semibold uppercase tracking-widest mb-4">
            Have a project in mind? Let’s build your flagship web platform.
          </p>
          <AnimatedPillButton
            text="Start Your Project"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

      </div>
    </section>
  );
}
