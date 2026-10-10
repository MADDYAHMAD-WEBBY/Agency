import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";
import FolderCard from "@/components/ui/folder-card";
import { CASE_STUDIES } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Featured Works & E-Commerce Case Studies | MHKMarkedia",
  description:
    "Explore our portfolio of Amazon FBA global expansions, Saudi Arabia marketplace launches, Headless Next.js e-commerce migrations, and high-converting FinTech web applications.",
  alternates: {
    canonical: "https://mhkmarkedia.com/works",
  },
  openGraph: {
    title: "Featured Works & E-Commerce Case Studies | MHKMarkedia",
    description:
      "Explore real client results: $42.5K/mo Amazon FBA launches, SAR 185K/mo Saudi marketplace brands, 100/100 Core Web Vitals Next.js migrations, and FinTech cloud portals.",
    url: "https://mhkmarkedia.com/works",
    siteName: "MHKMarkedia",
    type: "website",
  },
};

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/about", isActive: false },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/works", isActive: true },
  { title: "Contact", href: "/contact", isActive: false },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Header */}
      <Header navigationData={navigationData} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-[50px] sm:-mt-[70px] pt-24 sm:pt-28 pb-12 sm:pb-16 space-y-16 sm:space-y-24">

        {/* 1. HERO SECTION (Matching About & Contact pages) */}
        <section className="text-center max-w-4xl mx-auto pt-4 relative">
          
          {/* Ambient Purple Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-300/30 blur-[120px] pointer-events-none rounded-full -z-10" />

          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
            Selected Works &amp; Case Studies
          </h2>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Data-Driven Systems Built for{" "}
            <span className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal">
              Measurable Client Growth.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed font-sans mt-3 sm:mt-4">
            Explore our real-world client implementations: from cross-border Amazon FBA expansions and Saudi marketplace launches to sub-second Headless Next.js storefronts and bank-grade FinTech portals.
          </p>

          {/* Key Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-5 text-xs font-mono text-zinc-600">
            <span className="flex items-center gap-1.5 bg-zinc-100/90 px-3.5 py-1.5 rounded-full border border-zinc-200/80">
              <span className="text-emerald-500">✓</span> Real Revenue Metrics
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-100/90 px-3.5 py-1.5 rounded-full border border-zinc-200/80">
              <span className="text-emerald-500">✓</span> Sub-Second Core Web Vitals
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-100/90 px-3.5 py-1.5 rounded-full border border-zinc-200/80">
              <span className="text-emerald-500">✓</span> 100% Client Asset Ownership
            </span>
          </div>
        </section>

        {/* 2. CASE STUDIES GRID WITH FOLDER CARDS */}
        <section className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
            <div>
              <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-1">
                Project Directories &amp; Client Files
              </h2>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                All Case Studies ({CASE_STUDIES.length})
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono">
              Click any folder card to view full case study roadmap &amp; results ↗
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
            {CASE_STUDIES.map((study) => {
              const primaryMetric = study.metrics && study.metrics[0];
              const timeline = study.snapshot?.timeline || "Verified Impact";

              return (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block h-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-4 rounded-3xl transition-transform"
                >
                  <FolderCard
                    title={study.client}
                    subtitle={study.title}
                    count={primaryMetric ? primaryMetric.value : "100%"}
                    countLabel={primaryMetric ? primaryMetric.label : "Growth"}
                    meta={timeline}
                    cover={study.coverImage}
                    coverAlt={study.title}
                    className="h-full"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* 3. CAPABILITIES QUICK NAVIGATION */}
        <section className="max-w-5xl mx-auto bg-purple-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              Custom Engineering &amp; Growth
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif italic font-normal text-white leading-tight">
              Have a similar e-commerce or web software project in mind?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
              We build tailor-made digital systems with clear timelines, sub-second Core Web Vitals speed, and 100% full asset handoff.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase active:scale-95 transition-all shadow-lg shadow-purple-600/30"
              >
                <span>Book Free Discovery Call</span>
                <span>↗</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-purple-800/80 bg-purple-900/40 hover:bg-purple-900/80 text-purple-200 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all"
              >
                <span>Browse All Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. CONSULTATION CTA BANNER */}
        <ConsultationCtaBanner />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
