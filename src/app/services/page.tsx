import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SERVICE_DETAILS } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

export const metadata: Metadata = {
  title: "High-Performance Web, AI & SEO Engineering Services | MHKMarkedia",
  description:
    "Explore custom Next.js web applications, sub-second Headless WordPress builds, AI workflow automations, and #1 Google Map Pack Local SEO services engineered by CEO M. Hafeez Khan.",
  alternates: {
    canonical: "https://mhkmarkedia.com/services",
  },
  openGraph: {
    title: "High-Performance Web, AI & SEO Engineering Services | MHKMarkedia",
    description:
      "Explore custom Next.js web applications, sub-second Headless WordPress builds, AI workflow automations, and #1 Google Map Pack Local SEO services.",
    url: "https://mhkmarkedia.com/services",
    siteName: "MHKMarkedia",
    type: "website",
  },
};

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services", isActive: true },
  { title: "Works", href: "/works" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

const categoryLabels: Record<string, { label: string; desc: string; badge: string }> = {
  web: {
    label: "Web Architecture & E-Commerce",
    desc: "Next.js 16, Headless WordPress, and bespoke web apps tuned for 100/100 Core Web Vitals.",
    badge: "ENGINEERING",
  },
  ai: {
    label: "AI Systems & Workflow Automation",
    desc: "Enterprise n8n pipelines, 24/7 autonomous WhatsApp bots, and CRM lead sync automations.",
    badge: "AUTOMATION",
  },
  seo: {
    label: "Local SEO & Map Pack Domination",
    desc: "Google Business Profile optimization, authoritative local citations, and generative GEO rankings.",
    badge: "ORGANIC GROWTH",
  },
};

export default function ServicesPage() {
  const categories = ["web", "ai", "seo"] as const;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-white selection:text-black">
      <Header navigationData={navigationData} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 sm:px-8 border-b border-slate-900 bg-gradient-to-b from-slate-900/50 to-slate-950">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-mono uppercase tracking-widest text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Full-Stack Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Engineering Services Built to <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Dominate &amp; Scale
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
              Every deliverable is engineered with zero fluff by CEO M. Hafeez Khan.
              From sub-second headless architectures to algorithmic local search dominance.
            </p>
          </div>
        </section>

        {/* SERVICES GROUPED BY CATEGORY */}
        <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto space-y-24">
          {categories.map((catKey) => {
            const meta = categoryLabels[catKey];
            const services = SERVICE_DETAILS.filter((s) => s.category === catKey);

            return (
              <div key={catKey} className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
                  <div>
                    <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase">
                      {meta.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                      {meta.label}
                    </h2>
                  </div>
                  <p className="text-sm text-slate-400 max-w-md">
                    {meta.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-blue-950/20"
                    >
                      <div className="space-y-4">
                        {service.coverImage && (
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800/60">
                            <Image
                              src={service.coverImage}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                          {service.tagline || service.description}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-blue-400">
                        <span>View Architecture &amp; Pricing</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <ConsultationCtaBanner />
      </main>

      <SiteFooter />
    </div>
  );
}
