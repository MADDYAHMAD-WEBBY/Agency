"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotchedProjectCard from "@/components/ui/notched-project-card";
import AnimatedPillButton from "@/components/ui/animated-pill-button";
import { ExternalLink, Sparkles, TrendingUp, Zap, ShieldCheck } from "lucide-react";

export interface ProjectItem {
  id: string;
  category: "all" | "web" | "wordpress" | "seo" | "ai";
  categoryLabel: string;
  title: string;
  client: string;
  description: string;
  image: string;
  badge: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  accent: string;
  accentForeground: string;
  liveUrl?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "apex-saas-platform",
    category: "web",
    categoryLabel: "Web App & SaaS",
    title: "Apex Cloud SaaS Analytics Platform",
    client: "Apex Enterprise Solutions",
    description:
      "Engineered a full-stack, real-time analytics web application using Next.js 14, TypeScript, Supabase, and Tailwind CSS with sub-second page loads.",
    image: "/images/services/custom-software-saas.webp",
    badge: "2025 Case Study",
    metrics: [
      { label: "Core Web Vitals", value: "99/100" },
      { label: "Load Time", value: "0.4s" },
      { label: "User Retention", value: "+140%" },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"],
    accent: "#9333ea",
    accentForeground: "#ffffff",
  },
  {
    id: "luxe-commerce-headless",
    category: "wordpress",
    categoryLabel: "Headless CMS",
    title: "Luxe Decor Headless WooCommerce",
    client: "Luxe Home Goods",
    description:
      "Converted a slow legacy WordPress site into a ultra-fast Headless WordPress architecture with Next.js frontend, boosting mobile sales conversion significantly.",
    image: "/images/services/wordpress-webflow.webp",
    badge: "E-Commerce ROI",
    metrics: [
      { label: "Mobile Sales", value: "+215%" },
      { label: "Page Speed Score", value: "100/100" },
      { label: "Checkout Bounce", value: "-68%" },
    ],
    tags: ["Headless WordPress", "WooCommerce", "GraphQL", "Next.js", "Vercel"],
    accent: "#0284c7",
    accentForeground: "#ffffff",
  },
  {
    id: "dental-clinic-local-seo",
    category: "seo",
    categoryLabel: "Local SEO Specialist",
    title: "Metro Dental GBP & Local SEO Overhaul",
    client: "Metro Dental Care Network",
    description:
      "Executed a comprehensive Local SEO strategy including Google Business Profile optimization, local schema markup, geotagged citation building, and rank tracking.",
    image: "/images/services/gbp-optimization.webp",
    badge: "SEO Overhaul",
    metrics: [
      { label: "Organic Calls", value: "+340%" },
      { label: "GBP Map Pack", value: "Top 3 (#1)" },
      { label: "Local Keywords", value: "120+ #1 Ranks" },
    ],
    tags: ["Local SEO", "GBP Optimization", "Schema Markup", "Citation Building"],
    accent: "#16a34a",
    accentForeground: "#ffffff",
  },
  {
    id: "nexus-ai-workflow",
    category: "ai",
    categoryLabel: "AI & Automation",
    title: "Nexus Lead Nurturing & AI Bot Suite",
    client: "Nexus Global Logistics",
    description:
      "Integrated autonomous OpenAI-powered web agents and Make.com CRM pipelines to auto-qualify inbound enterprise leads and schedule instant consultations.",
    image: "/images/services/workflow-automation.webp",
    badge: "AI Automation",
    metrics: [
      { label: "Lead Qualification", value: "Instant 24/7" },
      { label: "Hours Saved", value: "180+ hrs/mo" },
      { label: "Pipeline Value", value: "$450k+" },
    ],
    tags: ["OpenAI API", "Zapier & Make", "CRM Automation", "Webhooks"],
    accent: "#ea580c",
    accentForeground: "#ffffff",
  },
  {
    id: "apk-mod-vault",
    category: "web",
    categoryLabel: "Web Applications",
    title: "TechVault APK High-Traffic Tool Portal",
    client: "Digital Media Network",
    description:
      "Architected a custom lightweight web application built for extreme traffic concurrency, automated caching, and high ad yield optimization.",
    image: "/images/services/apk-websites.webp",
    badge: "High Concurrency",
    metrics: [
      { label: "Monthly Visitors", value: "1.2M+" },
      { label: "Server Response", value: "120ms" },
      { label: "Ad Revenue", value: "+85%" },
    ],
    tags: ["Next.js", "Node.js", "Redis Cache", "Cloudflare Workers"],
    accent: "#ec4899",
    accentForeground: "#ffffff",
  },
  {
    id: "legal-firm-domination",
    category: "seo",
    categoryLabel: "Local SEO & Web",
    title: "Vanguard Legal Group Lead Engine",
    client: "Vanguard Attorneys",
    description:
      "Redesigned corporate website and dominated hyper-competitive local search keywords for high-value legal injury lead generation.",
    image: "/images/services/business-websites.webp",
    badge: "Revenue Growth",
    metrics: [
      { label: "Monthly Inquiries", value: "+410%" },
      { label: "Core Web Vitals", value: "Passed" },
      { label: "Google Rank", value: "#1 Local" },
    ],
    tags: ["Custom Web Design", "Local SEO", "Conversion Rate Opt", "WordPress"],
    accent: "#8b5cf6",
    accentForeground: "#ffffff",
  },
];

const categoryTabs = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Apps & SaaS" },
  { id: "wordpress", label: "Headless WordPress" },
  { id: "seo", label: "Local SEO" },
  { id: "ai", label: "AI Systems" },
];

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 bg-zinc-50/50 overflow-hidden border-t border-zinc-200/60">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-3.5 py-1.5 text-xs font-semibold text-purple-700 backdrop-blur-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Selected Work &{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-medium">
            Explore how I build custom full-stack web applications, headless WordPress architectures, and high-ranking Local SEO campaigns that drive measurable business revenue.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-md shadow-zinc-900/10"
                    : "bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200/80"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col h-full bg-white rounded-[28px] p-4 border border-zinc-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                {/* Notched Project Card Cover */}
                <NotchedProjectCard
                  href="#contact"
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  imageAlt={project.title}
                  badge={project.badge}
                  tags={project.tags}
                  accent={project.accent}
                  accentForeground={project.accentForeground}
                  surface="#ffffff"
                />

                {/* Performance Metrics Highlights */}
                <div className="mt-5 pt-4 border-t border-zinc-100 grid grid-cols-3 gap-2 text-center bg-zinc-50/80 rounded-2xl p-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-xs sm:text-sm font-black text-purple-700 tracking-tight">
                        {m.value}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-zinc-500 uppercase tracking-wider mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Footer */}
        <div className="mt-16 text-center flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm text-zinc-500 font-semibold uppercase tracking-widest mb-4">
            Have a project in mind? Let’s engineer something exceptional together.
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
