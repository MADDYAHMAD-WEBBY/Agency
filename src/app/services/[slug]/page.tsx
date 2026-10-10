import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS, ServiceDetail } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";
import OnThisPageNav from "@/components/ui/on-this-page-nav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services", isActive: true },
  { title: "Works", href: "/#works" },

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

  const cleanTitle = service.title.replace(/ Services$/i, "");
  const rawTitle = `${cleanTitle} | MHKMarkedia`;
  const title = rawTitle.length > 60 ? `${cleanTitle.slice(0, 44)} | MHKMarkedia` : rawTitle;

  const rawDesc = service.description || service.tagline || "";
  let description = rawDesc;
  if (description.length > 155) {
    description = description.slice(0, 150).trim();
    const lastSpace = description.lastIndexOf(" ");
    if (lastSpace > 110) {
      description = description.slice(0, lastSpace).trim();
    }
    description += ".";
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://mhkmarkedia.com/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://mhkmarkedia.com/services/${service.slug}`,
      siteName: "MHKMarkedia",
      images: [
        {
          url: service.coverImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

  // Build dynamic navigation for OnThisPageNav
  const pageNavItems = [
    { id: "overview", label: "Overview & Strategy", icon: "⚡" },
    ...(service.leadJourney ? [{ id: "lead-journey", label: "Lead Journey Flow", icon: "🗺️" }] : []),
    ...(service.comparisonTable ? [{ id: "comparison", label: service.slug === "ecommerce" ? "Shopify vs WooCommerce" : service.slug === "wordpress-website" ? "Generic Themes vs Custom WP" : service.slug === "web-applications" ? "Website vs Web App" : service.slug === "custom-software-saas" ? "Ready-Made vs Custom / SaaS" : service.slug === "mobile-apps" ? "Native vs Cross-Platform" : "Traditional Chatbots vs Autonomous AI Agents", icon: "⚖️" }] : []),
    ...(service.buildVsBuy ? [{ id: "build-vs-buy", label: "Build vs Buy Analysis", icon: "⚔️" }] : []),
    ...(service.problems ? [{ id: "problems", label: "Key Challenges Solved", icon: "⚠️" }] : []),
    ...(service.botTypes ? [{ id: "bot-types", label: "Capabilities We Engineer", icon: "🤖" }] : []),
    ...(service.securityPillars ? [{ id: "security-pillars", label: "Data Security & Privacy", icon: "🛡️" }] : []),
    ...(service.leadSources ? [{ id: "lead-sources", label: "Connected Lead Sources", icon: "🔌" }] : []),
    ...(service.automationsTable ? [{ id: "automations", label: "Department Automations", icon: "⚙️" }] : []),
    ...(service.dashboardMetrics ? [{ id: "dashboard-metrics", label: "Reporting & Dashboards", icon: "📊" }] : []),
    ...(service.useCases ? [{ id: "use-cases", label: "Industry Use Cases", icon: "🏢" }] : []),
    ...(service.tools ? [{ id: "tools", label: "Tools & Platforms", icon: "🛠️" }] : []),
    ...(service.processSteps ? [{ id: "process", label: "Implementation Process", icon: "🔄" }] : []),
    ...(service.benefits ? [{ id: "benefits", label: "Key Business Benefits", icon: "📈" }] : []),
    ...(service.beforeAfter ? [{ id: "before-after", label: "Before vs After Impact", icon: "🚀" }] : []),
    ...(service.pricingModels ? [{ id: "pricing", label: "Pricing & Packages", icon: "💎" }] : []),
    ...(service.deliverables ? [{ id: "deliverables", label: "Key Deliverables", icon: "📦" }] : []),
    ...(service.faqs ? [{ id: "faqs", label: "Frequently Asked Questions", icon: "❓" }] : []),
  ];

  // Structured Data (JSON-LD) for Search Engines & GEO (Generative Engine Optimization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mhkmarkedia.com/services/${service.slug}#service`,
        "name": service.title,
        "serviceType": service.title,
        "provider": {
          "@type": "Organization",
          "name": "MHKMarkedia",
          "url": "https://mhkmarkedia.com"
        },
        "description": service.description,
        "areaServed": "Worldwide"
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://mhkmarkedia.com/services/${service.slug}#faq`,
              "mainEntity": service.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mhkmarkedia.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://mhkmarkedia.com/#services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://mhkmarkedia.com/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-purple-600 selection:text-white relative">
      {/* Embedded JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header navigationData={navigationData} />

      <main className="w-full -mt-[68px] sm:-mt-[96px] pt-28 sm:pt-36 pb-0 overflow-x-clip relative">
        {/* Full-Height Right Side Blurred Cover Image Background */}
        <div className="absolute top-0 right-0 w-full sm:w-1/2 lg:w-[55%] h-[650px] sm:h-[780px] pointer-events-none select-none z-0 overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src={service.coverImage}
              alt={service.title}
              className="w-full h-full object-cover object-top filter blur-[8px] opacity-40 sm:opacity-55 scale-110"
            />
            {/* Smooth Edge Fade Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
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

          {/* 1. Hero Section: Main Title & Sub-Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-zinc-900 tracking-tight leading-[1.14] max-w-5xl">
            {service.headline || service.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl font-medium text-purple-950/80 max-w-3xl leading-relaxed">
            {service.tagline}
          </p>

          {/* CTA Action Pill Button below Title */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase active:scale-95 transition-all shadow-lg shadow-purple-600/25"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{service.heroCtaText || "Book Free Demo Call"}</span>
              <span>↗</span>
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 bg-white/80 hover:bg-zinc-100 text-zinc-800 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all"
            >
              <span>Explore Engagement & Pricing</span>
            </Link>
          </div>

          {/* Tech Stack Badges Row */}
          {service.techStack && service.techStack.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 max-w-5xl">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] border border-zinc-200 bg-zinc-100/90 text-[11px] font-mono font-semibold tracking-wide text-zinc-700 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Overview Lead Description */}
          <div className="mt-8 text-zinc-700 text-sm sm:text-base font-normal leading-relaxed max-w-5xl">
            {service.description}
          </div>

          {/* 2-Column Content Layout with Sticky ON THIS PAGE Sidebar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Main Narrative & Sections (8 cols) */}
            <div className="lg:col-span-8 space-y-14">
              
              {/* Overview & Core Strategy */}
              <div id="overview" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>⚡</span> Strategy & Technical Architecture
                </h2>
                <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 flex items-center gap-2 font-serif">
                    <span>🚀</span> Enterprise Engineering & Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    By combining modern engineering frameworks, cloud databases, and bespoke software architecture, MHKMarkedia builds robust digital systems that streamline business operations and scale revenue effortlessly.
                  </p>
                </div>
              </div>
              {service.leadJourney && (
                <div id="lead-journey" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🗺️</span> Visual Lead Journey & Pipeline Map
                  </h2>
                  <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-6 shadow-xl border border-zinc-800">
                    <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                      REAL-TIME PIPELINE AUTOMATION MAP
                    </div>
                    <div className="space-y-4">
                      {service.leadJourney.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 relative group">
                          <div className="shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
                            {step.step}
                          </div>
                          <div className="space-y-1 pb-3 border-b border-zinc-800/80 w-full last:border-0">
                            <h3 className="text-sm sm:text-base font-serif font-bold text-white flex items-center justify-between">
                              <span>{step.title}</span>
                              <span className="text-purple-400 font-mono text-xs opacity-75">Step {idx + 1}</span>
                            </h3>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Comparison Section */}
              {service.comparisonTable && (
                <div id="comparison" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>⚖️</span> {service.slug === "ecommerce" ? "Shopify vs WooCommerce Platform Comparison" : service.slug === "wordpress-website" ? "Generic Pre-Made Themes vs Custom WordPress Engineering" : service.slug === "web-applications" ? "Standard Website vs Interactive Web Application" : service.slug === "custom-software-saas" ? "Ready-Made Software vs Custom Software & SaaS Platforms" : service.slug === "mobile-apps" ? "Native (Swift/Kotlin) vs Cross-Platform (React Native/Flutter)" : service.slug === "api-integrations" ? "No-Code (Zapier/Make) vs Custom Integration & API Development" : service.slug === "gbp-optimization" ? "Unoptimized Google Profile vs Fully Optimized Map Pack Asset" : service.slug === "citation-building" ? "Unaudited Directory Listings vs Synchronized Citation Platform" : service.slug === "review-management" ? "Manual Review Requests vs Automated Reputation System" : "Traditional Chatbots vs Autonomous AI Agents"}
                  </h2>
                  <div className="rounded-2xl border border-zinc-200 overflow-hidden text-xs sm:text-sm shadow-sm">
                    <div className="grid grid-cols-12 bg-zinc-900 p-4 font-mono font-bold text-white uppercase tracking-wider">
                      <div className="col-span-4">{service.comparisonHeaders?.col1 || "FEATURE / CAPABILITY"}</div>
                      <div className="col-span-4 text-purple-300">{service.comparisonHeaders?.col2 || "TRADITIONAL CHATBOT"}</div>
                      <div className="col-span-4 text-emerald-400">{service.comparisonHeaders?.col3 || "AUTONOMOUS AI AGENT"}</div>
                    </div>
                    {service.comparisonTable.map((row, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-12 p-4 items-center ${
                          idx % 2 === 0 ? "bg-white" : "bg-zinc-50/80"
                        } border-b border-zinc-200/60 last:border-0`}
                      >
                        <div className="col-span-4 font-bold text-zinc-900 font-serif">
                          {row.feature}
                        </div>
                        <div className="col-span-4 text-zinc-600 text-xs leading-relaxed pr-2">
                          {row.chatbot}
                        </div>
                        <div className="col-span-4 text-purple-950 font-medium text-xs leading-relaxed">
                          {row.agent}
                        </div>
                      </div>
                    ))}
                  </div>
                  {service.slug === "ecommerce" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Confused between Shopify and WooCommerce? We provide a free platform consultation to select the optimal e-commerce tech stack for your business.</span>
                    </div>
                  )}
                  {service.slug === "wordpress-website" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Confused between pre-made themes and custom WordPress engineering? We evaluate your business requirements for free and design the ideal WordPress architecture.</span>
                    </div>
                  )}
                  {service.slug === "web-applications" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Not sure whether you need a website or a full web app? We provide a free architectural consultation to guide your business.</span>
                    </div>
                  )}
                  {service.slug === "custom-software-saas" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Not sure whether you need internal custom software or a commercial SaaS product? We provide a free architectural scoping consultation to guide your product strategy.</span>
                    </div>
                  )}
                  {service.slug === "mobile-apps" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Confused between Native (Swift/Kotlin) and Cross-Platform (React Native/Flutter)? We provide a free technical consultation to select the optimal mobile architecture for your budget.</span>
                    </div>
                  )}
                  {service.slug === "api-integrations" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Not sure which integration approach is right for your stack? We suggest the optimal approach for free. In many cases, no-code connectors (Zapier/Make) are sufficient, and we will honestly advise you if that fits your requirements.</span>
                    </div>
                  )}
                  {service.slug === "gbp-optimization" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Not sure where your business ranks on local Google Maps? We provide a 100% free Google Business Profile audit and competitor map pack analysis.</span>
                    </div>
                  )}
                  {service.slug === "citation-building" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Unsure whether your NAP data is consistent across online directories? We provide a 100% free local citation and duplicate listing audit.</span>
                    </div>
                  )}
                  {service.slug === "review-management" && (
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/70 text-xs text-purple-950 font-medium flex items-center gap-2">
                      <span>💡</span>
                      <span>Struggling to collect fresh 5-star customer reviews? We provide a 100% free online reputation audit and review workflow scoping call.</span>
                    </div>
                  )}
                </div>
              )}

              {/* Build vs Buy Comparison Section */}
              {service.buildVsBuy && (
                <div id="build-vs-buy" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>⚔️</span> Off-the-Shelf Tools vs Custom Engineering
                  </h2>
                  <div className="rounded-2xl border border-zinc-200 overflow-hidden text-xs sm:text-sm shadow-sm">
                    <div className="grid grid-cols-12 bg-zinc-900 p-4 font-mono font-bold text-white uppercase tracking-wider">
                      <div className="col-span-4">EVALUATION CRITERIA</div>
                      <div className="col-span-4 text-red-300">READY-MADE TOOLS</div>
                      <div className="col-span-4 text-emerald-400">CUSTOM ENGINEERING</div>
                    </div>
                    {service.buildVsBuy.map((row, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-12 p-4 items-center ${
                          idx % 2 === 0 ? "bg-white" : "bg-zinc-50/80"
                        } border-b border-zinc-200/60 last:border-0`}
                      >
                        <div className="col-span-4 font-bold text-zinc-900 font-serif">
                          {row.feature}
                        </div>
                        <div className="col-span-4 text-zinc-600 text-xs leading-relaxed pr-2">
                          {row.readyMade}
                        </div>
                        <div className="col-span-4 text-purple-950 font-medium text-xs leading-relaxed">
                          {row.custom}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem Section */}
              {service.problems && (
                <div id="problems" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>⚠️</span> Key Business & Operational Challenges Solved
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.problems.map((prob, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-red-50/40 border border-red-200/60 space-y-2 hover:border-red-300 transition-colors"
                      >
                        <div className="text-sm font-bold text-red-950 flex items-center gap-2 font-serif">
                          <span className="text-red-500 font-bold">✕</span> {prob.title}
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {prob.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Types of Bots / Capabilities We Build */}
              {service.botTypes && (
                <div id="bot-types" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🤖</span> {service.sectionTitles?.capabilities || "System Capabilities & Core Modules"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.botTypes.map((bot, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-purple-50/40 border border-purple-200/60 space-y-2 hover:border-purple-300 transition-colors">
                        <h3 className="text-base font-bold text-zinc-900 font-serif flex items-center gap-2">
                          <span className="text-purple-600 font-bold">•</span> {bot.title}
                        </h3>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {bot.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Security & Data Privacy Pillars Section */}
              {service.securityPillars && (
                <div id="security-pillars" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🛡️</span> {service.sectionTitles?.security || "Security, Privacy & Access Control"}
                  </h2>
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white space-y-6 shadow-xl border border-slate-800">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                      ZERO-DATA-LEAKAGE PRIVACY FRAMEWORK
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.securityPillars.map((sec, idx) => (
                        <div key={idx} className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                          <h3 className="text-sm font-bold text-emerald-400 font-serif flex items-center gap-2">
                            <span>🔒</span> {sec.title}
                          </h3>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {sec.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Lead Sources Section */}
              {service.leadSources && (
                <div id="lead-sources" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🔌</span> Connected Ingestion Channels & Sources
                  </h2>
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                      We connect every prospective touchpoint into a unified CRM pipeline with zero lead leakage:
                    </p>
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {service.leadSources.map((source, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-mono font-semibold text-purple-900 shadow-2xs flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Department Automations Table */}
              {service.automationsTable && (
                <div id="automations" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>⚙️</span> Department-Level Automation Use Cases
                  </h2>
                  
                  <div className="rounded-2xl border border-zinc-200 overflow-hidden text-xs sm:text-sm shadow-sm">
                    <div className="grid grid-cols-12 bg-zinc-900 p-4 font-mono font-bold text-white uppercase tracking-wider">
                      <div className="col-span-4">DEPARTMENT</div>
                      <div className="col-span-8">AUTOMATION EXAMPLES & WORKFLOWS</div>
                    </div>
                    {service.automationsTable.map((item, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-12 p-4 items-center ${
                          idx % 2 === 0 ? "bg-white" : "bg-zinc-50/80"
                        } border-b border-zinc-200/60 last:border-0`}
                      >
                        <div className="col-span-4 font-bold text-purple-700 font-serif">
                          {item.department}
                        </div>
                        <div className="col-span-8 text-zinc-700 leading-relaxed font-sans font-medium text-xs sm:text-sm">
                          {item.examples}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Executive Dashboard Reporting Metrics */}
              {service.dashboardMetrics && (
                <div id="dashboard-metrics" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>📊</span> Executive Dashboards & Reporting Analytics
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.dashboardMetrics.map((m, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                        <h3 className="text-sm font-bold text-zinc-900 font-serif text-purple-900">
                          {m.metric}
                        </h3>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Industry Use Cases */}
              {service.useCases && (
                <div id="use-cases" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏢</span> Industry Applications & Real-World Impact
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.useCases.map((uc, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                        <h3 className="text-sm font-bold text-zinc-900 font-serif text-purple-900">
                          {uc.industry}
                        </h3>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {uc.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Integrations */}
              {service.tools && (
                <div id="tools" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🛠️</span> {service.sectionTitles?.tools || "Battle-Tested Tech Stack & Tools"}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {service.tools.map((toolGroup, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                        <h3 className="text-sm font-bold text-zinc-900 font-serif tracking-wide text-purple-900">
                          {toolGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {toolGroup.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-2xs"
                            >
                              ✓ {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {service.processSteps && (
                <div id="process" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🔄</span> {service.sectionTitles?.process || "Engineering & Implementation Roadmap"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.processSteps.map((step) => (
                      <div key={step.step} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 relative">
                        <span className="text-xs font-mono font-bold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-full">
                          {step.step}
                        </span>
                        <h3 className="text-base font-bold text-zinc-900 font-serif pt-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.benefits && (
                <div id="benefits" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>📈</span> {service.sectionTitles?.benefits || "Business Benefits & Strategic ROI"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
                        <h3 className="text-sm font-bold text-emerald-950 font-serif flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✓</span> {b.title}
                        </h3>
                        <p className="text-xs text-zinc-700 leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Before vs After Impact */}
              {service.beforeAfter && (
                <div id="before-after" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🚀</span> Operational Transformation & Performance Impact
                  </h2>
                  <div className="space-y-4">
                    {service.beforeAfter.map((ba, idx) => (
                      <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                        <div className="space-y-1.5 p-4 rounded-xl bg-red-50/60 border border-red-200/60">
                          <div className="text-xs font-mono font-bold text-red-600 uppercase">BEFORE AUTOMATION</div>
                          <p className="text-xs text-zinc-700 leading-relaxed">{ba.before}</p>
                        </div>
                        <div className="space-y-1.5 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                          <div className="text-xs font-mono font-bold text-emerald-700 uppercase">AFTER AUTOMATION</div>
                          <p className="text-xs text-zinc-800 leading-relaxed">{ba.after}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing / Engagement */}
              {service.pricingModels && (
                <div id="pricing" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> {service.sectionTitles?.pricing || `${service.title} Engagement Models & Pricing`}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.pricingModels.map((plan, idx) => (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl border flex flex-col justify-between relative transition-all ${
                          plan.highlight
                            ? "bg-purple-950 text-white border-purple-800 shadow-xl scale-[1.02]"
                            : "bg-zinc-50 text-zinc-900 border-zinc-200"
                        }`}
                      >
                        {plan.highlight && (
                          <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-purple-500 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-sm">
                            MOST POPULAR
                          </span>
                        )}
                        <div className="space-y-3">
                          <h3 className={`text-base font-bold font-serif ${plan.highlight ? "text-white" : "text-zinc-900"}`}>
                            {plan.title}
                          </h3>
                          <p className={`text-xs ${plan.highlight ? "text-purple-200" : "text-zinc-500"}`}>
                            {plan.subtitle}
                          </p>
                          {plan.price && (
                            <div className={`text-xl font-extrabold font-mono pt-2 ${plan.highlight ? "text-emerald-400" : "text-purple-700"}`}>
                              {plan.price}
                            </div>
                          )}
                          <ul className="space-y-2 pt-4 text-xs">
                            {plan.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <span className={plan.highlight ? "text-emerald-400 font-bold" : "text-purple-600 font-bold"}>
                                  ✓
                                </span>
                                <span className={plan.highlight ? "text-purple-100" : "text-zinc-700"}>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 pt-4 border-t border-zinc-200/30">
                          <Link
                            href={`/contact?package=${encodeURIComponent(plan.title)}&service=${encodeURIComponent(service.title)}`}
                            className={`w-full text-center block py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                              plan.highlight
                                ? "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30 ring-2 ring-purple-400"
                                : "bg-zinc-900 hover:bg-black text-white"
                            }`}
                          >
                            Get Started →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              {service.deliverables && (
                <div id="deliverables" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>📦</span> {service.sectionTitles?.deliverables || `${service.title} Deliverables & Asset Handoff`}
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
              )}

              {/* FAQs */}
              {service.faqs && (
                <div id="faqs" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>❓</span> {service.sectionTitles?.faqs || `Frequently Asked Questions About ${service.title}`}
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                        <h3 className="text-sm font-bold text-zinc-900 font-serif flex items-center gap-2">
                          <span className="text-purple-600 font-mono font-bold">Q:</span> {faq.question}
                        </h3>
                        <p className="text-xs text-zinc-700 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Interactive Sticky ON THIS PAGE Navigation Sidebar */}
            <OnThisPageNav items={pageNavItems} />

          </div>
        </div>

        {/* 9. Final CTA Banner */}
        <ConsultationCtaBanner
          title={service.ctaTitle || `READY TO ELEVATE YOUR ${service.title.toUpperCase()}?`}
          subtitle="Book a free strategy audit call and discover how your business can save 20+ hours every single week."
          subtext={`Whether you need enterprise ${service.title.toLowerCase()}, n8n & Zapier cloud orchestration, or custom AI integrations, MHKMarkedia engineers robust digital systems built for speed, conversion, and scale.`}
          buttonText="Book Free Audit Call"
          buttonHref={`/contact?service=${encodeURIComponent(service.title)}`}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
