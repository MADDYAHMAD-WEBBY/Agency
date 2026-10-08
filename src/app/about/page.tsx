"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import TeamSection from "@/components/ui/team-section";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/about", isActive: true },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/#works" },

  { title: "Contact", href: "/contact", isActive: false },
];

const CORE_VALUES = [
  {
    title: "Honest Advice",
    tagline: "No upselling unnecessary complexity",
    description: "If a simple no-code tool or standard web setup fits your current stage, we'll recommend it—never upselling bloated custom software.",
    icon: "🤝",
  },
  {
    title: "Results Over Hype",
    tagline: "Metrics over buzzwords",
    description: "We focus strictly on sub-second Core Web Vitals speed scores, conversion rate lift, and verified organic lead growth.",
    icon: "📊",
  },
  {
    title: "Radical Transparency",
    tagline: "Clear pricing & regular updates",
    description: "Upfront milestone pricing, weekly async video progress walkthroughs, and zero hidden technical costs.",
    icon: "🔍",
  },
  {
    title: "100% Client Ownership",
    tagline: "You own every single asset",
    description: "You retain full ownership of every line of code, git repository, design file, domain, and platform admin account.",
    icon: "🔑",
  },
  {
    title: "Long-Term Partnership",
    tagline: "Support beyond the launch",
    description: "Post-launch performance monitoring, security patches, and continuous system optimizations as your business expands.",
    icon: "🚀",
  },
];

const CORE_SERVICES = [
  {
    title: "AI & Business Automation",
    description: "Eliminate repetitive manual tasks with n8n, Make workflows, AI chatbots, and automated lead management pipelines.",
    href: "/services/workflow-automation",
    icon: "🤖",
    tag: "AUTOMATION",
  },
  {
    title: "Web & E-Commerce Engineering",
    description: "High-converting, sub-second React/Next.js platforms, Shopify Plus storefronts, and custom WordPress systems.",
    href: "/services/business-websites",
    icon: "⚡",
    tag: "DEVELOPMENT",
  },
  {
    title: "Custom Software & SaaS Portals",
    description: "Scalable web applications, interactive admin dashboards, and secure API integrations built to scale effortlessly.",
    href: "/services/custom-ai-integrations",
    icon: "💻",
    tag: "SOFTWARE",
  },
  {
    title: "Local SEO & Map-Pack Dominance",
    description: "Dominate local Google search rankings, optimize Google Business Profiles, and capture high-intent local customer leads.",
    href: "/services/gbp-optimization",
    icon: "📍",
    tag: "LOCAL SEO",
  },
];

const PROCESS_STEPS = [
  {
    step: "STEP 01",
    title: "Discovery & Technical Audit",
    desc: "We analyze your business operations, current tech stack, speed bottlenecks, and conversion goals during our initial call.",
  },
  {
    step: "STEP 02",
    title: "Strategy & Architecture",
    desc: "We deliver a detailed project blueprint with clear scope, milestone timeline, database design, and transparent pricing.",
  },
  {
    step: "STEP 03",
    title: "Engineering & Automation",
    desc: "Our team develops your web platform and embeds automated workflows, lead capture, and API integrations in parallel.",
  },
  {
    step: "STEP 04",
    title: "Testing & Speed Optimization",
    desc: "Rigorously tested across mobile devices, security protocols, sub-second speed audits, and cross-browser compatibility.",
  },
  {
    step: "STEP 05",
    title: "Launch & Growth Support",
    desc: "Smooth production deployment with complete repository handoff, admin training, and ongoing technical support.",
  },
];

const TECH_STACK = [
  { name: "Next.js 15", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "n8n Automation", icon: "⚡" },
  { name: "Make.com", icon: "🔄" },
  { name: "OpenAI API", icon: "🧠" },
  { name: "Shopify Plus", icon: "🛍️" },
  { name: "Headless WooCommerce", icon: "🌐" },
  { name: "WordPress", icon: "⚙️" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Stripe API", icon: "💳" },
];

const INDUSTRIES = [
  { title: "Hospitality & Direct Booking", href: "/industries/hospitality-dining", icon: "🏨" },
  { title: "Home Trades & Emergency Services", href: "/industries/home-trades-services", icon: "🛠️" },
  { title: "E-Commerce & DTC Stores", href: "/industries/ecommerce-dtc", icon: "🛍️" },
  { title: "Finance & Wealth Tech", href: "/industries/finance-wealth-tech", icon: "📈" },
  { title: "Law & Legal Services", href: "/industries/law-legal-services", icon: "⚖️" },
  { title: "Real Estate & Architecture", href: "/industries/real-estate-architecture", icon: "🏢" },
  { title: "Healthcare & Patient Portals", href: "/industries/healthcare-clinics", icon: "🩺" },
];

const DIFFERENTIATORS = [
  {
    title: "Single Accountable Team",
    desc: "No more stress from managing multiple freelancers or conflicting agency opinions—we handle design, dev, automation, and SEO in one place.",
  },
  {
    title: "Embedded AI & Automation",
    desc: "Every web platform we build comes pre-configured with automated lead routing, instant WhatsApp/email notifications, and CRM sync.",
  },
  {
    title: "Global & Regional Experience",
    desc: "Proven track record serving growth-focused businesses across the US, UK, UAE, Europe, and Australia with agile remote workflows.",
  },
  {
    title: "Honest Recommendations",
    desc: "Zero buzzwords or forced upselling. We build exactly what your business needs to operate efficiently and generate revenue.",
  },
  {
    title: "100% IP & Data Ownership",
    desc: "Full code repositories, hosting accounts, and database credentials are completely transferred to your control upon project sign-off.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Header */}
      <Header navigationData={navigationData} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-[50px] sm:-mt-[70px] pt-24 sm:pt-28 pb-2 sm:pb-4 space-y-20 sm:space-y-28">

        {/* 1. HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto pt-4">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
            About Our Agency
          </h2>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            We Build Systems That{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
            >
              Help Businesses Grow.
            </motion.span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed font-sans mt-3 sm:mt-4">
            A focused, agile team of digital engineers, automation architects, and SEO specialists bringing AI workflows, custom web builds, and local search dominance under one roof.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs font-mono text-zinc-600">
            <span className="flex items-center gap-1.5 bg-zinc-100/90 px-3.5 py-1.5 rounded-full border border-zinc-200/80">
              <span className="text-emerald-500">✓</span> Sub-Second Speed Guarantee
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-100/90 px-3.5 py-1.5 rounded-full border border-zinc-200/80">
              <span className="text-emerald-500">✓</span> 100% Client Code Ownership
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-100/90 px-3.5 py-1.5 rounded-full border border-zinc-200/80">
              <span className="text-emerald-500">✓</span> Guaranteed 24h Response
            </span>
          </div>
        </section>

        {/* 2. OUR STORY (SIMPLIFIED & PUNCHY STORY CARDS) */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              Our Journey &amp; Origin
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              The Story Behind Our Agency{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
              >
                Why We Started
              </motion.span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-rose-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-rose-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-lg text-rose-600 font-bold">
                ✕
              </div>
              <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                THE PROBLEM WE SAW
              </div>
              <h4 className="text-lg font-serif font-bold text-zinc-900">
                Fragmented Vendors &amp; Blame
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Business owners were forced to manage 4 separate freelancers &amp; agencies—leading to finger-pointing, slow site speeds, broken tools, and bloated retainer invoices.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-purple-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-lg text-purple-600 font-bold">
                ⚡
              </div>
              <div className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider">
                THE SOLUTION WE BUILT
              </div>
              <h4 className="text-lg font-serif font-bold text-zinc-900">
                One Accountable Team
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                We unified full-stack web engineering, AI workflow automations, and local SEO dominance under a single, highly responsive engineering team.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-emerald-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-emerald-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg text-emerald-600 font-bold">
                ✓
              </div>
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                THE RESULT FOR CLIENTS
              </div>
              <h4 className="text-lg font-serif font-bold text-zinc-900">
                Speed, Growth &amp; Ownership
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Sub-second website loading speeds, automated lead capture pipelines, guaranteed 24h response times, and 100% full client code ownership.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 via-[#FAF5FF] to-purple-50 p-6 sm:p-8 rounded-3xl border border-purple-100/90 shadow-2xs text-center space-y-3">
            <blockquote className="text-base sm:text-lg font-serif italic text-zinc-900 leading-snug">
              &ldquo;Eliminate unnecessary agency fluff, speak directly with senior engineers, and build digital systems that deliver verified business growth.&rdquo;
            </blockquote>
            <div className="text-xs font-mono text-purple-700 font-semibold">
              — M Hafeez Khan, Founder &amp; CEO
            </div>
          </div>
        </section>

        {/* 3. MISSION & VISION */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-purple-100/90 shadow-sm space-y-4 hover:border-purple-300/80 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl">
              🎯
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-purple-600 uppercase">
                OUR MISSION
              </span>
              <h3 className="text-2xl font-serif font-bold text-zinc-900">
                Eliminate Friction, Accelerate Growth
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              To eliminate technical friction and replace manual operational bottlenecks with scalable, sub-second web platforms and automated workflows that drive predictable revenue for our clients.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-purple-100/90 shadow-sm space-y-4 hover:border-purple-300/80 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl">
              🔭
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-purple-600 uppercase">
                OUR VISION
              </span>
              <h3 className="text-2xl font-serif font-bold text-zinc-900">
                Setting the Benchmark for Digital Quality
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              To become the premier digital engineering partner for growth-stage businesses across North America, Europe, and global markets—setting the benchmark for transparency, speed, and complete client IP ownership.
            </p>
          </div>
        </section>

        {/* 4. CORE VALUES */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              Guiding Principles
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              The Standards We Live By{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
              >
                Our Core Values
              </motion.span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed">
              How we operate, communicate, and deliver value on every single project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-purple-100/90 shadow-2xs space-y-3 hover:border-purple-300 transition-all hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{val.icon}</span>
                  <span className="text-[10px] font-mono font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                    VALUE 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-zinc-900">
                  {val.title}
                </h3>
                <div className="text-[11px] font-mono font-medium text-purple-700">
                  {val.tagline}
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. TEAM SECTION (EXACT HOMEPAGE TEAM BENTO GRID) */}
        <TeamSection />

        {/* 6. WHAT WE DO (CORE SERVICES OVERVIEW) */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              Capabilities &amp; Solutions
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Engineered Digital Systems{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
              >
                What We Do
              </motion.span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed">
              Four core pillars engineered to accelerate your revenue and streamline operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_SERVICES.map((srv, idx) => (
              <Link
                key={idx}
                href={srv.href}
                className="p-8 rounded-3xl bg-white border border-purple-100/90 shadow-2xs space-y-4 hover:border-purple-300 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{srv.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                      {srv.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                    {srv.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-600 group-hover:translate-x-1 transition-transform pt-2">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 7. OUR PROCESS */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              How We Work
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Agile Execution Blueprint{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
              >
                Our 5-Step Process
              </motion.span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed">
              A structured, transparent engineering workflow from initial brief to post-launch support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((pst, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3 hover:border-purple-300 transition-all group"
              >
                <div className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full inline-block">
                  {pst.step}
                </div>
                <h3 className="text-sm font-serif font-bold text-zinc-900">
                  {pst.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {pst.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. NUMBERS & ACHIEVEMENTS */}
        <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-white border border-purple-100 text-center space-y-2 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-mono font-bold text-purple-600">100%</div>
            <div className="text-xs font-mono text-zinc-600">Code &amp; IP Ownership Transferred</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-purple-100 text-center space-y-2 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-mono font-bold text-purple-600">&lt; 1.0s</div>
            <div className="text-xs font-mono text-zinc-600">Target Core Web Vitals Load Speed</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-purple-100 text-center space-y-2 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-mono font-bold text-purple-600">24h</div>
            <div className="text-xs font-mono text-zinc-600">Guaranteed Response Time (Mon-Sat)</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-purple-100 text-center space-y-2 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-mono font-bold text-purple-600">Multi-Reg</div>
            <div className="text-xs font-mono text-zinc-600">Clients Across US, UK, UAE &amp; Global</div>
          </div>
        </section>

        {/* 11. INDUSTRIES WE SERVE */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              Sector Expertise
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Tailored Digital Growth{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
              >
                Industries We Serve
              </motion.span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed">
              Tailored digital solutions engineered for specific market challenges and growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs flex items-center justify-between hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ind.icon}</span>
                  <span className="text-xs font-serif font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                    {ind.title}
                  </span>
                </div>
                <span className="text-purple-600 text-xs font-mono font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 12. WHY WE ARE DIFFERENT */}
        <section className="max-w-5xl mx-auto rounded-3xl bg-[#FAF5FF] border border-purple-100/90 p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              Why Work With Us
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              The Agency Advantage{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
              >
                How We Are Different
              </motion.span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-2 hover:border-purple-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-700 font-mono font-bold text-xs flex items-center justify-center mb-2 border border-purple-100">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-serif font-bold text-zinc-900">{diff.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">{diff.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* About Us CTA Section matching Homepage design system */}
      <ConsultationCtaBanner
        title="READY TO UPGRADE YOUR DIGITAL INFRASTRUCTURE?"
        subtitle="Book a free 30-minute discovery call or send us a direct project brief."
        subtext="Speak directly with senior engineers to discuss your Next.js web build, headless WordPress migration, AI workflow automations, or local SEO strategy. Guaranteed response within 24 hours."
        buttonText="Book Your Free Call"
        buttonHref="/contact"
      />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
