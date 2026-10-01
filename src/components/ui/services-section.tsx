"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

interface ServiceItem {
  id: string;
  category: "ai" | "web" | "seo";
  href: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  accent: string;
  accentForeground: string;
}

const servicesData: ServiceItem[] = [
  // --- Category: AI & Automation ---
  {
    id: "workflow-automation",
    category: "ai",
    href: "#contact",
    title: "Workflow Automation",
    description:
      "Automate repetitive business operations, eliminate manual bottlenecks, and connect software tools seamlessly to save hundreds of hours monthly.",
    image: "/images/services/workflow-automation.webp",
    badge: "Automation",
    metrics: [
      { label: "Hours Saved", value: "200+ hrs/mo" },
      { label: "Error Reduction", value: "99.9%" },
      { label: "Efficiency", value: "10x Fast" },
    ],
    tags: ["Zapier & Make", "Process Scaling", "No-Code Systems"],
    accent: "#9333ea",
    accentForeground: "#ffffff",
  },
  {
    id: "ai-chatbots",
    category: "ai",
    href: "#contact",
    title: "AI Chatbots & Autonomous Agents",
    description:
      "Deploy intelligent LLM chatbots and 24/7 AI agents that engage website visitors, qualify leads, and close sales automatically.",
    image: "/images/services/ai-chatbots.webp",
    badge: "AI Tech",
    metrics: [
      { label: "Uptime", value: "24/7 Live" },
      { label: "Response Time", value: "<1 Sec" },
      { label: "Lead Capture", value: "+300%" },
    ],
    tags: ["OpenAI & LLMs", "24/7 Lead Capture", "Custom Agents"],
    accent: "#0284c7",
    accentForeground: "#ffffff",
  },
  {
    id: "crm-lead-automation",
    category: "ai",
    href: "#contact",
    title: "CRM / Lead Automation",
    description:
      "Capture, track, and nurture incoming leads automatically with custom CRM pipelines, SMS/Email sequences, and instant team alerts.",
    image: "/images/services/crm-lead-automation.webp",
    badge: "Lead Gen",
    metrics: [
      { label: "Lead Velocity", value: "Instant" },
      { label: "Conversion", value: "+180%" },
      { label: "Pipeline ROI", value: "5x Growth" },
    ],
    tags: ["CRM Integration", "SMS & Email Flow", "High Conversion"],
    accent: "#2563eb",
    accentForeground: "#ffffff",
  },
  {
    id: "custom-ai-integrations",
    category: "ai",
    href: "#contact",
    title: "Custom AI Integrations",
    description:
      "Embed custom artificial intelligence capabilities directly into your existing web platforms for intelligent analytics and smart recommendations.",
    image: "/images/services/custom-ai-integrations.webp",
    badge: "Custom AI",
    metrics: [
      { label: "Model Latency", value: "Sub-100ms" },
      { label: "Accuracy", value: "98.5%" },
      { label: "API Uptime", value: "99.99%" },
    ],
    tags: ["API Integration", "Machine Learning", "Custom Models"],
    accent: "#c026d3",
    accentForeground: "#ffffff",
  },

  // --- Category: Web & App Development ---
  {
    id: "business-websites",
    category: "web",
    href: "#contact",
    title: "Business Websites",
    description:
      "High-converting, mobile-responsive business websites built to showcase your brand, establish immediate authority, and turn traffic into clients.",
    image: "/images/services/business-websites.webp",
    badge: "Web Design",
    metrics: [
      { label: "Page Speed", value: "99/100" },
      { label: "Mobile Ready", value: "100%" },
      { label: "Bounce Rate", value: "-45%" },
    ],
    tags: ["Responsive UI", "Brand Strategy", "Fast Load"],
    accent: "#059669",
    accentForeground: "#ffffff",
  },
  {
    id: "ecommerce",
    category: "web",
    href: "#contact",
    title: "E-Commerce (Shopify & WooCommerce)",
    description:
      "Scalable online store solutions engineered for seamless checkout, high conversion rates, inventory synchronization, and sub-second loading.",
    image: "/images/services/ecommerce.webp",
    badge: "E-Commerce",
    metrics: [
      { label: "Sales Lift", value: "+210%" },
      { label: "Checkout Speed", value: "Sub-1s" },
      { label: "Cart Recovery", value: "+35%" },
    ],
    tags: ["Shopify", "WooCommerce", "Payment Gateways"],
    accent: "#d97706",
    accentForeground: "#ffffff",
  },
  {
    id: "wordpress-webflow",
    category: "web",
    href: "#contact",
    title: "WordPress & Webflow Development",
    description:
      "Custom Headless WordPress and Webflow builds engineered with clean code, sub-second Core Web Vitals, and effortless CMS editing.",
    image: "/images/services/wordpress-webflow.webp",
    badge: "CMS Specialist",
    metrics: [
      { label: "Core Web Vitals", value: "Passed" },
      { label: "Security Score", value: "A+ Tier" },
      { label: "Load Speed", value: "0.5s" },
    ],
    tags: ["Headless WP", "Webflow", "Core Web Vitals"],
    accent: "#7c3aed",
    accentForeground: "#ffffff",
  },
  {
    id: "web-apps",
    category: "web",
    href: "#contact",
    title: "Web Apps (React / Next.js)",
    description:
      "Modern web applications built with Next.js 15 and React delivering lightning performance, dynamic routing, and pixel-perfect design.",
    image: "/images/services/web-apps.webp",
    badge: "Frontend Eng",
    metrics: [
      { label: "Framework", value: "Next.js 15" },
      { label: "Performance", value: "100/100" },
      { label: "Type Safety", value: "Strict TS" },
    ],
    tags: ["Next.js 15", "React", "TypeScript"],
    accent: "#4f46e5",
    accentForeground: "#ffffff",
  },
  {
    id: "custom-software-saas",
    category: "web",
    href: "#contact",
    title: "Custom Software / SaaS Solutions",
    description:
      "End-to-end full-stack software architecture, MVP product builds, and multi-tenant SaaS platforms engineered for security and scale.",
    image: "/images/services/custom-software-saas.webp",
    badge: "SaaS Architect",
    metrics: [
      { label: "Architecture", value: "Full-Stack" },
      { label: "Scale Capacity", value: "1M+ Users" },
      { label: "Security", value: "ISO Ready" },
    ],
    tags: ["Custom SaaS", "Cloud Backend", "Database Architecture"],
    accent: "#0d9488",
    accentForeground: "#ffffff",
  },
  {
    id: "mobile-apps",
    category: "web",
    href: "#contact",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications for iOS and Android delivering native fluidity, push notifications, and intuitive interfaces.",
    image: "/images/services/mobile-apps.webp",
    badge: "Mobile Dev",
    metrics: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "FPS Rate", value: "60 FPS" },
      { label: "User Rating", value: "4.9 ★" },
    ],
    tags: ["React Native", "iOS & Android", "App Store"],
    accent: "#dc2626",
    accentForeground: "#ffffff",
  },
  {
    id: "api-integrations",
    category: "web",
    href: "#contact",
    title: "API & Third-Party Integrations",
    description:
      "Secure REST & GraphQL API integrations connecting payment systems, CRMs, ERPs, and custom backend microservices seamlessly.",
    image: "/images/services/api-integrations.webp",
    badge: "Integrations",
    metrics: [
      { label: "Sync Speed", value: "Realtime" },
      { label: "Reliability", value: "99.99%" },
      { label: "Security", value: "Encrypted" },
    ],
    tags: ["REST & GraphQL", "Webhooks", "Microservices"],
    accent: "#475569",
    accentForeground: "#ffffff",
  },
  {
    id: "apk-websites",
    category: "web",
    href: "#contact",
    title: "APK & App Download Portals",
    description:
      "High-traffic APK download portals and Android directory websites optimized for rapid search indexing, high ad revenue, and instant file downloads.",
    image: "/images/services/apk-websites.webp",
    badge: "Niche Web",
    metrics: [
      { label: "Traffic Concurrency", value: "High Volume" },
      { label: "Index Rate", value: "Instant" },
      { label: "Download Speed", value: "Blazing" },
    ],
    tags: ["APK Portals", "High Traffic", "AdSense & SEO"],
    accent: "#16a34a",
    accentForeground: "#ffffff",
  },
  {
    id: "tool-websites",
    category: "web",
    href: "#contact",
    title: "Tool-Based Websites & Utilities",
    description:
      "Custom interactive web tools, online calculators, converters, and browser utilities engineered for high user retention and viral organic traffic.",
    image: "/images/services/tool-websites.webp",
    badge: "Interactive Utilities",
    metrics: [
      { label: "User Retention", value: "High D30" },
      { label: "Organic Reach", value: "Viral Growth" },
      { label: "Execution", value: "Client-Side" },
    ],
    tags: ["Online Tools", "Calculators & Converters", "Passive Traffic"],
    accent: "#0284c7",
    accentForeground: "#ffffff",
  },

  // --- Category: Local SEO & Reputation ---
  {
    id: "gbp-optimization",
    category: "seo",
    href: "#contact",
    title: "Google Business Profile Optimization",
    description:
      "Claim, optimize, and rank your Google Business Profile to capture top 3 map-pack positions and dominate local organic search traffic.",
    image: "/images/services/gbp-optimization.webp",
    badge: "Local SEO",
    metrics: [
      { label: "Map Pack Rank", value: "Top 3 (#1)" },
      { label: "Call Growth", value: "+320%" },
      { label: "Local Reach", value: "Hyper-Local" },
    ],
    tags: ["Google Maps", "Map Pack #1", "Geo-Targeting"],
    accent: "#ea580c",
    accentForeground: "#ffffff",
  },
  {
    id: "citation-building",
    category: "seo",
    href: "#contact",
    title: "Citation Building",
    description:
      "Consistent, high-authority NAP (Name, Address, Phone) citations built across premium directory networks to boost local trust scores.",
    image: "/images/services/citation-building.webp",
    badge: "Authority",
    metrics: [
      { label: "NAP Consistency", value: "100% Match" },
      { label: "Directory Score", value: "High DA" },
      { label: "Index Rate", value: "Guaranteed" },
    ],
    tags: ["Directory Submissions", "NAP Consistency", "Local Rank"],
    accent: "#16a34a",
    accentForeground: "#ffffff",
  },
  {
    id: "review-management",
    category: "seo",
    href: "#contact",
    title: "Review Management & Reputation",
    description:
      "Automate customer review requests, monitor feedback across Google & Trustpilot, and build glowing 5-star social proof continuously.",
    image: "/images/services/review-management.webp",
    badge: "Reputation",
    metrics: [
      { label: "Avg Rating", value: "4.9 ★" },
      { label: "Review Flow", value: "Automated" },
      { label: "Trust Factor", value: "Max Level" },
    ],
    tags: ["5-Star Reviews", "Trustpilot", "Social Proof"],
    accent: "#e11d48",
    accentForeground: "#ffffff",
  },
];

const categories = [
  { id: "ai", label: "AI & Automation" },
  { id: "web", label: "Web & App Development" },
  { id: "seo", label: "Local SEO & Reputation" },
  { id: "all", label: "All Services (16)" },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("ai");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const rawServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((item) => item.category === activeTab);

  // When on "all", show max 6 unless expanded
  const displayServices =
    activeTab === "all" && !isExpanded ? rawServices.slice(0, 6) : rawServices;

  return (
    <section id="services" className="w-full py-24 sm:py-32 bg-white relative z-20 overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-3.5 py-1.5 text-xs font-semibold text-purple-700 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>CAPABILITIES & SOLUTIONS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Specialized Services Built for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Maximum Business Impact
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-medium"
          >
            Delivering high-converting web applications, Headless WordPress platforms, AI workflow automation, and Local SEO domination tailored to your exact growth goals.
          </motion.p>
        </div>

        {/* Category Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setIsExpanded(false);
                }}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-md shadow-zinc-900/10"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900 border border-zinc-200/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Notched Service Cards Grid matching Work Section Card Design */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeInOut" }}
                className="flex flex-col h-full bg-white rounded-[28px] p-4 border border-zinc-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                {/* Notched Cover Component */}
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

                {/* Key Performance / Capability Metrics Box */}
                <div className="mt-5 pt-4 border-t border-zinc-100 grid grid-cols-3 gap-2 text-center bg-zinc-50/80 rounded-2xl p-3">
                  {service.metrics.map((m, i) => (
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

        {/* Expand / Collapse Button for 'All Services' */}
        {activeTab === "all" && rawServices.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-sm transition-all duration-300 shadow-md cursor-pointer group"
            >
              <span>{isExpanded ? "Show Less Services" : `View All ${rawServices.length} Services`}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm text-zinc-500 font-semibold uppercase tracking-widest mb-4">
            Need a custom solution tailored for your business?
          </p>
          <AnimatedPillButton
            text="Get a Free Consultation"
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
