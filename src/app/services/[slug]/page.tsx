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

      <main className="w-full pt-28 sm:pt-36 pb-20 overflow-hidden relative">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="mb-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-600 uppercase tracking-widest hover:underline"
            >
              ← ALL SERVICES & CAPABILITIES
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.18] font-sans">
            {service.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl font-medium text-purple-700 leading-relaxed max-w-3xl">
            {service.tagline}
          </p>

          {/* Cover Showcase Image */}
          <div className="mt-8 w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-950 relative">
            <img
              src={service.coverImage}
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Description */}
          <div className="mt-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-zinc-900">Overview</h2>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="mt-12 p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4">
            <h3 className="text-lg font-bold font-serif text-zinc-900">Key Engineering Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Roadmap */}
          <div className="mt-12 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-zinc-900">Development Roadmap</h3>
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
