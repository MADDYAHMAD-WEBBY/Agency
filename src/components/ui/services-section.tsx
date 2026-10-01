"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceItem {
  id: string;
  category: "ai" | "web" | "seo";
  href: string;
  title: string;
  description: string;
  image: string;
  badge: string;
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
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    badge: "Automation",
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
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    badge: "AI Tech",
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
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    badge: "Lead Gen",
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
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    badge: "Custom AI",
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    badge: "Web Design",
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
    image:
      "https://images.unsplash.com/photo-1556742049-0a675659e924?q=80&w=800&auto=format&fit=crop",
    badge: "E-Commerce",
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
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    badge: "CMS Specialist",
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
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    badge: "Frontend Engineering",
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    badge: "SaaS Architect",
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
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    badge: "Mobile Dev",
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
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    badge: "Integrations",
    tags: ["REST & GraphQL", "Webhooks", "Microservices"],
    accent: "#475569",
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
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop",
    badge: "Local SEO",
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
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
    badge: "Authority",
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
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    badge: "Reputation",
    tags: ["5-Star Reviews", "Trustpilot", "Social Proof"],
    accent: "#e11d48",
    accentForeground: "#ffffff",
  },
];

const categories = [
  { id: "ai", label: "AI & Automation" },
  { id: "web", label: "Web & App Development" },
  { id: "seo", label: "Local SEO & Reputation" },
  { id: "all", label: "All Services (14)" },
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
    <section id="services" className="w-full py-16 sm:py-24 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-3"
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
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Maximum Business Impact
            </span>
          </motion.h3>
        </div>

        {/* Category Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
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
                    ? "bg-black text-white shadow-md"
                    : "bg-zinc-100/90 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900 border border-zinc-200/60"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Notched Service Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {displayServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
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

      </div>
    </section>
  );
}
