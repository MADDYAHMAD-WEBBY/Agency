import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS, ServiceDetail } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import StudioFooterHero from "@/components/ui/studio-footer-hero";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services", isActive: true },
  { title: "Works", href: "/#works" },
  { title: "FAQ", href: "/#faq" },
];

export async function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_DETAILS.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Services | MHKMarkedia`,
    description: service.tagline,
    openGraph: {
      title: service.title,
      description: service.tagline,
      images: [service.coverImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_DETAILS.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-purple-600 selection:text-white relative">
      <Header navigationData={navigationData} />

      <main className="w-full -mt-[68px] sm:-mt-[96px] pt-28 sm:pt-36 pb-20 overflow-hidden relative">
        {/* Full-Height Right Side Blurred Cover Image Background (Under Header, InstaGhost Reference Style) */}
        <div className="absolute top-0 right-0 w-full sm:w-1/2 lg:w-[55%] h-[650px] sm:h-[780px] pointer-events-none select-none z-0 overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src={service.coverImage}
              alt=""
              className="w-full h-full object-cover object-top filter blur-[8px] opacity-40 sm:opacity-55 scale-110"
            />
            {/* Smooth Edge Fade Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Top Back Navigation Button Pill */}
          <div className="mb-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-600 hover:text-purple-600 uppercase transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-zinc-200 bg-zinc-50 group-hover:border-purple-300 group-hover:bg-purple-50 flex items-center justify-center transition-all">
                <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span>
              </div>
              <span>SERVICE CAPABILITY</span>
            </Link>
          </div>

          {/* Main Title Heading in Elegant Serif Italic Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-zinc-900 tracking-tight leading-[1.14] max-w-4xl">
            {service.title}
          </h1>

          {/* CTA Action Pill Button below Title */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-black active:scale-95 transition-all shadow-md hover:shadow-zinc-950/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Book Strategy Call</span>
              <span>↗</span>
            </Link>
          </div>

          {/* Tech Stack Badges Row */}
          {service.techStack && service.techStack.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 max-w-4xl">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] border border-zinc-200 bg-zinc-100/90 text-[11px] font-mono font-semibold tracking-wide text-zinc-700 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Overview Lead Description */}
          <div className="mt-8 text-zinc-700 text-sm sm:text-base font-normal leading-relaxed max-w-4xl">
            {service.description}
          </div>

          {/* 2-Column Content Layout with Sticky ON THIS PAGE Sidebar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Main Narrative & Sections (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Architecture Deep Dive & Callout Box */}
              <div id="overview" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>⚡</span> Overview & Architectural Blueprint
                </h2>
                
                {/* Styled Purple Feature Callout Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 flex items-center gap-2 font-serif">
                    <span>🏛️</span> High-Performance Runtime Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    To achieve extreme global responsiveness while supporting heavy continuous client traffic, this service is engineered with a decoupled architecture:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800">
                    <li className="flex items-start gap-2.5">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Serverless Edge Runtime (Next.js 15 & Vercel):</strong> Executes request routing, schema rendering, and edge cache lookups across 300+ global edge locations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Decoupled Headless WP (GraphQL):</strong> Pure content management API layer isolating database queries from frontend client hits.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cover Showcase Media Container */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-950 relative group">
                <img
                  src={service.coverImage}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Engineering Deliverables Section */}
              <div id="deliverables" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🛡️</span> Key Engineering Deliverables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-zinc-800 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Roadmap Section */}
              <div id="roadmap" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🚀</span> Development Roadmap
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.processSteps.map((s) => (
                    <div key={s.step} className="p-6 rounded-xl bg-white border border-zinc-200/80 shadow-xs space-y-2">
                      <div className="text-xs font-mono font-bold text-purple-600 uppercase">{s.step}</div>
                      <div className="text-base font-bold text-zinc-900">{s.title}</div>
                      <div className="text-xs text-zinc-600 leading-relaxed">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky "ON THIS PAGE" Navigation Sidebar (4 cols) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4 pl-6 border-l border-zinc-200/80">
              <div className="text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase mb-3">
                ON THIS PAGE
              </div>
              <nav className="space-y-3 text-xs font-mono font-semibold">
                <a href="#overview" className="flex items-center gap-2.5 text-zinc-900 hover:text-purple-600 transition-colors">
                  <span>⚡</span>
                  <span>Overview & Architecture</span>
                </a>
                <a href="#deliverables" className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-900 transition-colors">
                  <span>🛡️</span>
                  <span>Engineering Deliverables</span>
                </a>
                <a href="#roadmap" className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-900 transition-colors">
                  <span>🚀</span>
                  <span>Development Roadmap</span>
                </a>
                <a href="#contact" className="flex items-center gap-2.5 text-purple-600 hover:underline pt-2">
                  <span>💬</span>
                  <span>Book Strategy Call</span>
                </a>
              </nav>
            </div>

          </div>

          {/* CTA Banner */}
          <ConsultationCtaBanner
            title={`Get Started with ${service.title}`}
            subtitle="Book a direct 15-minute strategy call with CEO M. Hafeez Khan."
            buttonText="Book Strategy Call"
          />

        </div>
      </main>

      <StudioFooterHero />
    </div>
  );
}
