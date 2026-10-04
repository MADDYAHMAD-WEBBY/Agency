"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPillButton from "@/components/ui/animated-pill-button";
import OrbitingCirclesGlobeDemo from "@/components/ui/orbiting-circles-02";
import {
  Search,
  FileText,
  MapPin,
  Link as LinkIcon,
  Globe,
  ShoppingBag,
  Layout,
  Code,
  Database,
  Download,
  Wrench,
  Zap,
  Bot,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceItem {
  id: string;
  tabLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  features: ServiceFeature[];
}

const servicesList: ServiceItem[] = [
  {
    id: "seo-audits",
    tabLabel: "SEO Audits & Strategy",
    icon: Search,
    title: "Technical SEO Audits & Growth Strategy",
    subtitle:
      "Deep-dive technical site analysis, competitor gap intelligence, and custom quarter-by-quarter roadmaps engineered to grow organic traffic and revenue.",
    features: [
      {
        title: "Full Technical Audit",
        description:
          "Crawl analysis, indexation checks, schema verification, and Core Web Vitals signal optimization.",
      },
      {
        title: "Competitor Gap Analysis",
        description:
          "Uncover high-intent buyer keywords, backlink profiles, and content angles rivals rank for.",
      },
      {
        title: "Custom Growth Roadmap",
        description:
          "Quarter-by-quarter execution plan with transparent KPIs to scale organic traffic predictability.",
      },
      {
        title: "Transparent Live Dashboards",
        description:
          "Real-time analytics dashboards, monthly strategy walkthroughs, and full visibility into deliverable metrics.",
      },
    ],
  },
  {
    id: "onpage-seo",
    tabLabel: "On-Page SEO & Content",
    icon: FileText,
    title: "On-Page Optimization & Content Strategy",
    subtitle:
      "Transform website pages into high-converting organic search magnets. We craft NLP-optimized content, optimize site architecture, and implement JSON-LD schema.",
    features: [
      {
        title: "NLP Keyword Strategy",
        description:
          "Target high-value buyer search intent keywords with natural semantic relevance and zero fluff.",
      },
      {
        title: "E-E-A-T Content Writing",
        description:
          "In-depth, authority-building articles and sales landing pages tailored for both Google and human conversion.",
      },
      {
        title: "JSON-LD Schema Markup",
        description:
          "Implement rich snippets, JSON-LD schemas, and FAQ markup for maximum SERP eye-share.",
      },
      {
        title: "Internal Linking & CRO",
        description:
          "Strategic internal link architecture and user-flow optimizations to lower bounce rates and boost sales.",
      },
    ],
  },
  {
    id: "local-seo",
    tabLabel: "Google Business Profile & Local SEO",
    icon: MapPin,
    title: "Google Business Profile & Local SEO",
    subtitle:
      "Claim, optimize, and rank your Google Business Profile in top 3 local map-pack positions to capture high-intent local customer calls.",
    features: [
      {
        title: "Map Pack #1 Ranking",
        description:
          "Claim, optimize, and rank your Google Business Profile in top 3 local map-pack positions.",
      },
      {
        title: "Geo-Grid Local Tracking",
        description:
          "Track local ranking radius across neighborhood grids and dominate high-intent local search queries.",
      },
      {
        title: "Citation & NAP Consistency",
        description:
          "Consistent, verified NAP (Name, Address, Phone) directory listings across high-trust local platforms.",
      },
      {
        title: "Review & Reputation Automation",
        description:
          "Automate 5-star customer review collection on Google & Trustpilot to build unstoppable social proof.",
      },
    ],
  },
  {
    id: "link-building",
    tabLabel: "Link Building & Off-Page",
    icon: LinkIcon,
    title: "Off-Page Authority & Digital PR",
    subtitle:
      "High-DR editorial backlinks and contextual guest posts that elevate domain authority and push competitive keywords to #1 rankings.",
    features: [
      {
        title: "High-DR Editorial Links",
        description:
          "Contextual editorial backlinks from authentic, high-DR industry publications and authority sites.",
      },
      {
        title: "Contextual Guest Posts",
        description:
          "Niche-relevant guest posts written by industry experts to drive referral traffic and link authority.",
      },
      {
        title: "Digital PR Outreach",
        description:
          "Strategic brand outreach and press release placements that earn top-tier organic media mentions.",
      },
      {
        title: "Toxic Link Audit & Cleanup",
        description:
          "Identify and disavow spammy backlinks to safeguard your site from search engine penalty risks.",
      },
    ],
  },
  {
    id: "business-websites",
    tabLabel: "Business & Corporate Websites",
    icon: Globe,
    title: "High-Converting Business Websites",
    subtitle:
      "Custom mobile-responsive corporate websites built to establish immediate brand authority and convert visitors into high-paying clients.",
    features: [
      {
        title: "Custom Responsive UI/UX",
        description:
          "Tailored visual design systems and mobile-first layouts engineered for maximum audience engagement.",
      },
      {
        title: "Brand Authority Positioning",
        description:
          "Position your business as the market leader with compelling copy, trust badges, and executive aesthetics.",
      },
      {
        title: "Sub-Second Load Times",
        description:
          "Optimized code, compressed assets, and fast hosting architecture that pass Core Web Vitals with ease.",
      },
      {
        title: "Lead Conversion Architecture",
        description:
          "Strategically placed call-to-actions, contact forms, and booking triggers designed to maximize leads.",
      },
    ],
  },
  {
    id: "ecommerce",
    tabLabel: "E-Commerce (Shopify & Woo)",
    icon: ShoppingBag,
    title: "E-Commerce Store Engineering",
    subtitle:
      "Scalable Shopify and WooCommerce online store builds engineered for sub-second page loads, inventory sync, and maximum checkout conversion.",
    features: [
      {
        title: "Shopify & WooCommerce Builds",
        description:
          "Custom theme design, app integration, and store setup tailored for seamless product showcases.",
      },
      {
        title: "Sub-Second Checkout Flow",
        description:
          "Streamlined single-page checkouts designed to reduce cart abandonment and boost average order value.",
      },
      {
        title: "Payment Gateway Setup",
        description:
          "Secure integration of Stripe, PayPal, Apple Pay, and multi-currency international payment gateways.",
      },
      {
        title: "Inventory & Order Automation",
        description:
          "Automate stock synchronization, order tracking notifications, and fulfillment integration.",
      },
    ],
  },
  {
    id: "wordpress-webflow",
    tabLabel: "WordPress & Webflow Development",
    icon: Layout,
    title: "WordPress & Webflow Development",
    subtitle:
      "Custom Headless WordPress and Webflow builds engineered with clean code, sub-second Core Web Vitals, and effortless CMS editing.",
    features: [
      {
        title: "Headless WordPress Builds",
        description:
          "Decoupled WordPress backend connected to modern frontend frameworks for ultimate speed and security.",
      },
      {
        title: "Webflow Custom Development",
        description:
          "Pixel-perfect Webflow sites with fluid animations, custom interactions, and easy content management.",
      },
      {
        title: "Core Web Vitals Pass Guarantee",
        description:
          "Sub-second LCP, minimal CLS, and lightning FID metrics for top Google page experience scores.",
      },
      {
        title: "Easy CMS Management",
        description:
          "Intuitive custom admin panels that allow your team to edit text, images, and blogs without touching code.",
      },
    ],
  },
  {
    id: "nextjs-apps",
    tabLabel: "Next.js & React Web Apps",
    icon: Code,
    title: "Modern Next.js & React Web Applications",
    subtitle:
      "Custom full-stack web applications built with Next.js 15 and React delivering native fluid performance, serverless routing, and scale.",
    features: [
      {
        title: "Next.js 15 & React 19",
        description:
          "Cutting-edge App Router architecture, Server Components, and dynamic client rendering for top speed.",
      },
      {
        title: "Serverless Architecture",
        description:
          "Scalable Vercel/AWS serverless backends that handle high user concurrency without server management.",
      },
      {
        title: "Custom API & Microservices",
        description:
          "RESTful and GraphQL API integrations connecting frontend interfaces with backend databases.",
      },
      {
        title: "Pixel-Perfect UI Componentry",
        description:
          "Tailwind CSS, Framer Motion animations, and reusable component systems built for long-term scalability.",
      },
    ],
  },
  {
    id: "custom-saas",
    tabLabel: "Custom Software & SaaS",
    icon: Database,
    title: "Custom Software & SaaS Architecture",
    subtitle:
      "End-to-end full-stack software architecture, MVP product builds, and multi-tenant SaaS platforms engineered for security and scale.",
    features: [
      {
        title: "Full-Stack SaaS MVP Build",
        description:
          "Rapid MVP prototyping and production-ready SaaS builds designed to validate and monetize your software idea.",
      },
      {
        title: "Cloud Architecture & DB",
        description:
          "Scalable PostgreSQL/Supabase database schemas and secure serverless backend microservices.",
      },
      {
        title: "Multi-Tenant & Security",
        description:
          "User authentication, role-based access control (RBAC), and multi-tenant data isolation standards.",
      },
      {
        title: "Subscription Billing Setup",
        description:
          "Stripe Billing integration supporting monthly/yearly tiers, usage tracking, and invoice generation.",
      },
    ],
  },
  {
    id: "apk-websites",
    tabLabel: "APK Download Portals",
    icon: Download,
    title: "APK & App Download Portals",
    subtitle:
      "High-traffic Android APK download directory portals built for sub-second file delivery, rapid search indexing, and high ad revenue.",
    features: [
      {
        title: "APK Directory Portals",
        description:
          "Android app download portals engineered for high catalog scaling, category browsing, and search speed.",
      },
      {
        title: "Rapid Search Indexing",
        description:
          "Automated sitemap updates, schema indexing triggers, and fast Google search bot crawling.",
      },
      {
        title: "Sub-Second File Downloads",
        description:
          "Optimized storage CDNs and fast mirror links that deliver instant APK downloads with zero lag.",
      },
      {
        title: "AdSense & Traffic Monetization",
        description:
          "Optimized ad placements, high-CPM layout structures, and ad-block resistant revenue architecture.",
      },
    ],
  },
  {
    id: "tool-websites",
    tabLabel: "Tool-Based Websites & Utilities",
    icon: Wrench,
    title: "Interactive Tool Websites & Utilities",
    subtitle:
      "Custom online calculators, converters, and browser utilities engineered to rank organically and generate passive repeat traffic.",
    features: [
      {
        title: "Interactive Web Tools",
        description:
          "Custom browser-based web tools that solve specific user problems and drive high engagement.",
      },
      {
        title: "Calculators & Converters",
        description:
          "Financial calculators, unit converters, and data processing utilities engineered with JavaScript.",
      },
      {
        title: "Passive Organic Traffic",
        description:
          "Utility tools that rank naturally for high-volume search queries and earn organic backlinks.",
      },
      {
        title: "High User Retention",
        description:
          "Fast, bookmark-worthy tools that keep visitors coming back repeatedly without ad spend.",
      },
    ],
  },
  {
    id: "workflow-automation",
    tabLabel: "Workflow & Process Automation",
    icon: Zap,
    title: "Business Workflow Automation",
    subtitle:
      "Connect software tools seamlessly with Zapier and Make.com to eliminate manual data entry and save hundreds of operational hours.",
    features: [
      {
        title: "Zapier & Make.com Workflows",
        description:
          "Automated multi-step workflows connecting CRMs, emails, spreadsheets, and databases effortlessly.",
      },
      {
        title: "Process Bottleneck Cleanup",
        description:
          "Audit repetitive team tasks and automate manual data copy-pasting to boost productivity.",
      },
      {
        title: "Software Tool Integrations",
        description:
          "Seamless Webhooks and API triggers between Slack, Google Sheets, HubSpot, and custom tools.",
      },
      {
        title: "Automated Data Syncing",
        description:
          "Real-time customer data synchronization across platforms to prevent data silos.",
      },
    ],
  },
  {
    id: "ai-agents",
    tabLabel: "AI Chatbots & 24/7 Agents",
    icon: Bot,
    title: "AI Chatbots & 24/7 Agents",
    subtitle:
      "Deploy intelligent LLM chatbots and autonomous 24/7 AI agents that engage website visitors, qualify leads, and schedule calls automatically.",
    features: [
      {
        title: "OpenAI & LLM Integration",
        description:
          "Custom AI agents trained on your business data for accurate, context-aware customer responses.",
      },
      {
        title: "24/7 Autonomous Lead Capture",
        description:
          "Capture and qualify website visitors around the clock, collecting contact info and sales requirements.",
      },
      {
        title: "Custom Knowledge Base",
        description:
          "Feed your documentation, pricing, and FAQs into the AI agent to answer complex customer queries.",
      },
      {
        title: "Instant Meeting Scheduling",
        description:
          "AI agents that automatically check calendar availability and book strategy calls directly.",
      },
    ],
  },
  {
    id: "crm-automation",
    tabLabel: "CRM & Lead Pipeline Automation",
    icon: Users,
    title: "CRM & Lead Nurture Automation",
    subtitle:
      "Automate lead capture, GoHighLevel & HubSpot CRM pipelines, instant SMS/Email sequences, and real-time team notifications.",
    features: [
      {
        title: "GoHighLevel & HubSpot CRM",
        description:
          "Custom pipeline setup, lead tagging, opportunity stage tracking, and sales dashboard setup.",
      },
      {
        title: "Automated SMS & Email Flows",
        description:
          "Instant automated follow-up sequences that nurture leads immediately upon form submission.",
      },
      {
        title: "Instant Lead Qualification",
        description:
          "Smart lead scoring rules that route high-value leads directly to senior team members.",
      },
      {
        title: "Real-Time Team Alerts",
        description:
          "Instant Slack, Email, or SMS notifications when a prospective client submits a high-intent inquiry.",
      },
    ],
  },
];

export default function ServicesSection() {
  const [activeTabId, setActiveTabId] = useState<string>("seo-audits");

  const currentService =
    servicesList.find((item) => item.id === activeTabId) || servicesList[0];

  return (
    <section
      id="services"
      className="relative z-20 w-full py-10 sm:py-16 bg-white text-zinc-900 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Capabilities & Solutions
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Specialized Services Built for{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
            >
              Maximum Business Impact
            </motion.span>
          </motion.h3>
        </div>

        {/* Main Bento Layout: Left Vertical Tabs + Right Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column: Horizontal Scrollable Tabs on Mobile / Vertical Sidebar Tabs on Desktop */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50/80 border border-slate-200/90 rounded-[10px] p-2.5 sm:p-4 shadow-2xs overflow-hidden h-auto lg:h-full lg:min-h-[530px]">
            <div className="flex-1 min-h-0 flex flex-col">
              {/* Tab Buttons List: Horizontal scroll on mobile/tablet, vertical stack on lg desktop */}
              <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto max-h-none lg:max-h-[405px] pb-1.5 lg:pb-0 pr-0 lg:pr-1 thin-scrollbar">
                {servicesList.map((item) => {
                  const isActive = item.id === activeTabId;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTabId(item.id)}
                      className={`flex items-center justify-between px-3 py-2 rounded-[10px] text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-purple-600 text-white shadow-xs"
                          : "bg-white text-zinc-700 hover:text-purple-950 hover:bg-purple-50/60 border border-slate-200/80 hover:border-purple-200/80"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 whitespace-nowrap">
                        <div
                          className={`w-6 h-6 rounded-[8px] flex items-center justify-center shrink-0 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-purple-100/80 text-purple-700"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="whitespace-nowrap">{item.tabLabel}</span>
                      </div>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform shrink-0 hidden lg:block ${
                          isActive
                            ? "translate-x-0.5 text-white"
                            : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-purple-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Bottom CTA Box - Hidden on mobile, visible on desktop lg */}
            <div className="hidden lg:block mt-3 pt-3 border-t border-slate-200/80 bg-white rounded-[10px] p-3 border border-slate-200/80 shadow-2xs shrink-0">
              <div className="text-[10px] sm:text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">
                NOT SURE WHICH MIX YOU NEED?
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed mb-2">
                Book a free 15-min call — we'll analyze your goals & recommend the right strategy mix.
              </p>
              <AnimatedPillButton
                text="Book a Call"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>

          {/* Right Column: Static Persistent Detail Card matching compact height */}
          <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-[10px] p-6 sm:p-8 lg:p-10 shadow-2xs relative overflow-hidden flex flex-col justify-between min-h-[510px] sm:min-h-[530px]">
            {/* Background Orbiting Circles Particle Globe */}
            <OrbitingCirclesGlobeDemo />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
                className="flex flex-col justify-between h-full w-full"
              >
                {/* Top Section Header */}
                <div className="relative z-10">
                  <div className="min-h-[85px] sm:min-h-[75px] flex flex-col justify-start">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                      {currentService.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-2.5 max-w-2xl">
                      {currentService.subtitle}
                    </p>
                  </div>

                  {/* Section Divider */}
                  <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest my-5 sm:my-6 border-b border-slate-200/80 pb-2">
                    KEY DELIVERABLES & FEATURES
                  </div>
                </div>

                {/* 2x2 Features Grid - Fixed Heights to eliminate layout shift */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10 mb-6 sm:mb-8">
                  {currentService.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="bg-slate-50/60 hover:bg-white border border-slate-200/90 hover:border-purple-300 rounded-[10px] p-4 sm:p-5 transition-all duration-300 shadow-2xs group flex flex-col justify-between min-h-[135px] sm:min-h-[145px]"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className="w-7 h-7 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-700 shrink-0 font-bold">
                            <Check className="w-4 h-4 text-purple-700" />
                          </div>
                          <h4 className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                            {feat.title}
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed pl-10">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Buttons: Learn More & See Pricing */}
                <div className="flex flex-wrap items-center gap-3 pt-2 relative z-10 border-t border-slate-200/80">
                  <AnimatedPillButton
                    text="Learn more"
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  />

                  <button
                    onClick={() => {
                      const el = document.getElementById("pricing");
                      if (el) el ? el.scrollIntoView({ behavior: "smooth" }) : (document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }));
                    }}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 border border-slate-200 hover:border-slate-300 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-2xs cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>See pricing</span>
                    <ArrowRight className="w-4 h-4 text-slate-700" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
