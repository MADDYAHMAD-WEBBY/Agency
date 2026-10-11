import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { INDUSTRY_DETAILS } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

export const metadata: Metadata = {
  title: "Industry-Specific Web & SEO Growth Solutions | MHKMarkedia",
  description:
    "Tailored digital architecture, custom web platforms, and local SEO engines engineered for high-growth industries including Real Estate, Law, Healthcare, E-Commerce, and Contractors.",
  alternates: {
    canonical: "https://mhkmarkedia.com/industries",
  },
  openGraph: {
    title: "Industry-Specific Web & SEO Growth Solutions | MHKMarkedia",
    description:
      "Explore high-converting websites and local SEO playbooks customized for your vertical, led by CEO M. Hafeez Khan.",
    url: "https://mhkmarkedia.com/industries",
    siteName: "MHKMarkedia",
    type: "website",
  },
};

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries", isActive: true },
  { title: "Works", href: "/works" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-white selection:text-black">
      <Header navigationData={navigationData} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 sm:px-8 border-b border-slate-900 bg-gradient-to-b from-slate-900/50 to-slate-950">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-mono uppercase tracking-widest text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Vertical Specialization
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Tailored Architecture for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                High-Growth Verticals
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
              Every vertical faces distinct compliance, search intent, and conversion hurdles.
              We deploy proven systems engineered specifically to solve your industry pain points.
            </p>
          </div>
        </section>

        {/* INDUSTRIES GRID */}
        <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_DETAILS.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-blue-950/20"
              >
                <div className="space-y-4">
                  {industry.coverImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800/60">
                      <Image
                        src={industry.coverImage}
                        alt={industry.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <h2 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {industry.tagline || industry.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-blue-400">
                  <span>Explore Strategy &amp; Results</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ConsultationCtaBanner />
      </main>

      <SiteFooter />
    </div>
  );
}
