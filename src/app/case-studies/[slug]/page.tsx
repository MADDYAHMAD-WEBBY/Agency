import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import StudioFooterHero from "@/components/ui/studio-footer-hero";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/#works", isActive: true },
  { title: "FAQ", href: "/#faq" },
];

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.slug === slug);
  if (!cs) return {};

  return {
    title: `${cs.title} | Case Study | MHKMarkedia`,
    description: cs.summary,
    openGraph: {
      title: cs.title,
      description: cs.summary,
      images: [cs.coverImage],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-purple-600 selection:text-white relative">
      <Header navigationData={navigationData} />

      <main className="w-full pt-28 sm:pt-36 pb-20 overflow-hidden relative">
        {/* Background Blurred Cover Image Layer (InstaGhost Style) */}
        <div className="absolute top-0 right-0 w-full sm:w-2/3 lg:w-1/2 h-[550px] pointer-events-none select-none overflow-hidden z-0">
          <img
            src={cs.coverImage}
            alt=""
            className="w-full h-full object-cover object-center filter blur-3xl opacity-30 scale-125 transform origin-top-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Top Back Button Navigation */}
          <div className="mb-6">
            <Link
              href="/#works"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-600 hover:text-purple-600 uppercase transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-zinc-200 bg-zinc-50 group-hover:border-purple-300 group-hover:bg-purple-50 flex items-center justify-center transition-all">
                <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span>
              </div>
              <span>CASE STUDY</span>
            </Link>
          </div>

          {/* Main Title Heading in Serif Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-extrabold text-zinc-900 tracking-tight leading-[1.15] max-w-4xl">
            {cs.title}
          </h1>

          {/* Visit Live Platform CTA Button & Client Tag */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="px-3.5 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-mono font-semibold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Client: {cs.client}
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-purple-700 active:scale-95 transition-all shadow-md hover:shadow-purple-500/25"
            >
              <span>Request Custom Build</span>
              <span>↗</span>
            </Link>
          </div>

          {/* Tech Stack Badges Row */}
          <div className="mt-8 flex flex-wrap gap-2">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] border border-purple-200/80 bg-purple-50/60 text-[11px] font-mono font-bold tracking-wider uppercase text-purple-900 shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                {tech}
              </span>
            ))}
          </div>

          {/* Large Hero Showcase Cover Image Container */}
          <div className="mt-10 sm:mt-14 w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-950 relative group">
            <img
              src={cs.coverImage}
              alt={cs.title}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Key ROI Performance Metrics Highlights Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {cs.metrics.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/50 border border-purple-200/80 shadow-xs flex flex-col justify-between"
              >
                <div className="text-[11px] font-mono font-bold text-purple-700 uppercase tracking-wider mb-2">
                  {m.label}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight my-1">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-600 font-medium pt-1">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Deep-Dive Case Study Narrative Content */}
          <div className="mt-14 sm:mt-20 space-y-12 sm:space-y-16 text-zinc-800 font-normal leading-relaxed text-sm sm:text-base border-t border-zinc-200/80 pt-12">
            
            {/* Executive Summary */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-zinc-900 tracking-tight">
                Executive Overview
              </h2>
              <p className="text-zinc-600 leading-relaxed max-w-3xl">
                {cs.summary}
              </p>
            </div>

            {/* The Challenge */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80">
              <div className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest">
                01 / The Bottleneck
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                The Client Challenge
              </h3>
              <p className="text-zinc-700 leading-relaxed text-xs sm:text-sm">
                {cs.challenge}
              </p>
            </div>

            {/* Technical Strategy & Solution */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-900 via-zinc-900 to-black text-white shadow-xl">
              <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest">
                02 / Architectural Engineering
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Our Bespoke Technical Strategy
              </h3>
              <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                {cs.solution}
              </p>
            </div>

            {/* Quantifiable Results */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-emerald-50/80 border border-emerald-200/80">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                03 / Quantifiable ROI
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
                Business Outcomes & Impact
              </h3>
              <p className="text-emerald-900 leading-relaxed text-xs sm:text-sm font-medium">
                {cs.results}
              </p>
            </div>

          </div>

          {/* Bottom Strategy Call Consultation Banner */}
          <ConsultationCtaBanner
            title="Ready for similar business results?"
            subtitle="Book a direct technical architecture consultation with CEO M. Hafeez Khan today."
            buttonText="Book CEO Strategy Call"
          />

        </div>
      </main>

      <StudioFooterHero />
    </div>
  );
}
