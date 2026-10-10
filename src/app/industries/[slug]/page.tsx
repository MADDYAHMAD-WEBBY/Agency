import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRY_DETAILS } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import OnThisPageNav from "@/components/ui/on-this-page-nav";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Industries", href: "/#industries", isActive: true },
  { title: "Works", href: "/#works" },

];

export async function generateStaticParams() {
  return INDUSTRY_DETAILS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRY_DETAILS.find((item) => item.slug === slug);
  if (!industry) return {};

  const cleanTitle = industry.title.replace(/ Growth$/i, "").replace(/ Services$/i, "");
  const rawTitle = `${cleanTitle} | MHKMarkedia`;
  const title = rawTitle.length > 60 ? `${cleanTitle.slice(0, 44)} | MHKMarkedia` : rawTitle;

  const rawDesc = industry.description || industry.tagline || "";
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
      canonical: `https://mhkmarkedia.com/industries/${industry.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://mhkmarkedia.com/industries/${industry.slug}`,
      siteName: "MHKMarkedia",
      images: [
        {
          url: industry.coverImage,
          width: 1200,
          height: 630,
          alt: industry.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [industry.coverImage],
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRY_DETAILS.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const isHospitality = industry.slug === "hospitality-dining";
  const isHomeTrades = industry.slug === "home-trades-contractors";
  const isEcommerce = industry.slug === "ecommerce-dtc";
  const isFinance = industry.slug === "finance-wealth-tech";
  const isLegal = industry.slug === "law-legal-services";
  const isRealEstate = industry.slug === "real-estate-architecture";
  const isHealthcare = industry.slug === "healthcare-clinics";

  // Build dynamic navigation items for OnThisPageNav sticky sidebar
  const pageNavItems = [
    { id: "overview", label: "Overview & Strategy", icon: "⚡" },
    ...(isHospitality ? [{ id: "pillars", label: "Booking Engine & 5-Star Reputation", icon: "🏨" }] : []),
    ...(isHomeTrades ? [{ id: "pillars", label: "Call Capture & Map Pack #1", icon: "🛠️" }] : []),
    ...(isEcommerce ? [{ id: "pillars", label: "Shopify, Headless & Fast Checkout", icon: "🛒" }] : []),
    ...(isFinance ? [{ id: "pillars", label: "Calculators, Portals & Security", icon: "🔐" }] : []),
    ...(isLegal ? [{ id: "pillars", label: "Authority Builds & Bar Ethics", icon: "⚖️" }] : []),
    ...(isRealEstate ? [{ id: "pillars", label: "Dynamic Listings & High-Ticket Leads", icon: "🏢" }] : []),
    ...(isHealthcare ? [{ id: "pillars", label: "Patient Portals, Maps & Privacy", icon: "🏥" }] : []),
    ...(industry.problems ? [{ id: "problems", label: "Industry Challenges Solved", icon: "⚠️" }] : []),
    ...(industry.leadJourney ? [{ id: "guest-journey", label: "Visual Client Journey", icon: "🗺️" }] : []),
    ...(industry.automationsTable ? [{ id: "services-matrix", label: "Services Matrix", icon: "⚙️" }] : []),
    ...(industry.botTypes ? [{ id: "capabilities", label: "Core Sector Solutions", icon: "🤖" }] : []),
    ...(isHospitality || isHomeTrades || isEcommerce || isFinance || isLegal || isRealEstate || isHealthcare ? [{ id: "case-study", label: "Case Study & ROI", icon: "🏆" }] : []),
    ...(isHospitality || isHomeTrades || isEcommerce || isFinance || isLegal || isRealEstate || isHealthcare ? [{ id: "why-us", label: "Why Choose Us", icon: "💎" }] : []),
    ...(industry.tools ? [{ id: "tools", label: "Tech Stack & Integrations", icon: "🛠️" }] : []),
    ...(industry.processSteps ? [{ id: "process", label: "Implementation Roadmap", icon: "🔄" }] : []),
    ...(industry.benefits ? [{ id: "benefits", label: "Strategic Business ROI", icon: "📈" }] : []),
    ...(industry.pricingModels ? [{ id: "pricing", label: "Engagement Packages", icon: "🏷️" }] : []),
    ...(industry.deliverables ? [{ id: "deliverables", label: "Key Deliverables", icon: "📦" }] : []),
    ...(industry.faqs ? [{ id: "faqs", label: "Frequently Asked Questions", icon: "❓" }] : []),
    ...(isHospitality || isHomeTrades || isEcommerce || isFinance || isLegal || isRealEstate || isHealthcare ? [{ id: "contact", label: "Free Growth Audit", icon: "💬" }] : []),
  ];

  // Structured Data (JSON-LD) for Search Engines & GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mhkmarkedia.com/industries/${industry.slug}#service`,
        "name": industry.title,
        "serviceType": industry.title,
        "provider": {
          "@type": "Organization",
          "name": "MHKMarkedia",
          "url": "https://mhkmarkedia.com",
        },
        "description": industry.description,
        "areaServed": "Worldwide",
      },
      ...(industry.faqs && industry.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://mhkmarkedia.com/industries/${industry.slug}#faq`,
              "mainEntity": industry.faqs.map((faq) => ({
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
            "name": "Industries",
            "item": "https://mhkmarkedia.com/#industries",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": industry.title,
            "item": `https://mhkmarkedia.com/industries/${industry.slug}`,
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
        
        {/* HERO LIGHT PURPLE GLOW BLUR BACKGROUND */}
        <div className="absolute top-0 right-0 w-full sm:w-1/2 lg:w-[60%] h-[650px] sm:h-[780px] pointer-events-none select-none z-0 overflow-hidden">
          {/* Ambient Light Purple Blur Layers */}
          <div className="absolute top-12 right-12 w-[350px] sm:w-[520px] h-[350px] sm:h-[520px] bg-purple-300/45 rounded-full blur-[110px] mix-blend-multiply animate-pulse" />
          <div className="absolute top-28 right-36 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-purple-400/35 rounded-full blur-[130px] mix-blend-multiply" />
          <div className="absolute top-44 right-8 w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] bg-indigo-200/40 rounded-full blur-[95px]" />

          {/* Soft Cover Image Layer */}
          {industry.coverImage && (
            <div className="w-full h-full relative opacity-35 sm:opacity-50 mix-blend-overlay">
              <img
                src={industry.coverImage}
                alt={industry.title}
                className="w-full h-full object-cover object-top filter blur-[6px] scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Top Back Navigation Pill */}
          <div className="mb-6">
            <Link
              href="/#industries"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-600 hover:text-purple-600 uppercase transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-purple-200 bg-purple-50 group-hover:border-purple-300 group-hover:bg-purple-100 flex items-center justify-center transition-all">
                <span className="transform group-hover:-translate-x-0.5 transition-transform text-purple-700">←</span>
              </div>
              <span className="text-purple-900">INDUSTRY VERTICAL</span>
            </Link>
          </div>

          {/* 1. Hero Section */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-zinc-900 tracking-tight leading-[1.14] max-w-5xl">
            {industry.headline || industry.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl font-medium text-purple-950/80 max-w-3xl leading-relaxed">
            {industry.tagline}
          </p>

          {/* CTA Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?industry=${encodeURIComponent(industry.title)}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase active:scale-95 transition-all shadow-lg shadow-purple-600/25"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Book Free Digital Audit</span>
              <span>↗</span>
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-purple-200 bg-white/90 hover:bg-purple-50 text-purple-950 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all shadow-2xs"
            >
              <span>Explore Packages & Pricing</span>
            </Link>
          </div>

          {/* Tech & Sector Badges */}
          {industry.techStack && industry.techStack.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 max-w-5xl">
              {industry.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] border border-purple-200/80 bg-purple-50/80 text-[11px] font-mono font-semibold tracking-wide text-purple-900 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Overview Description */}
          <div className="mt-8 text-zinc-700 text-sm sm:text-base font-normal leading-relaxed max-w-5xl">
            {industry.description}
          </div>

          {/* 2-Column Content Layout with Sticky Sidebar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Main Narrative & Sections (8 cols) */}
            <div className="lg:col-span-8 space-y-14">
              
              {/* Overview & Core Strategy */}
              <div id="overview" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>⚡</span> Strategic Architecture & Direct Revenue Focus
                </h2>
                <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-purple-950 flex items-center gap-2 font-serif">
                    <span>🚀</span> Tailored Digital Engineering for {industry.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    By aligning high-speed web application frameworks, automated lead qualification, and hyper-local SEO strategies, MHKMarkedia engineers digital systems built specifically for the operational workflows and acquisition channels of your industry.
                  </p>
                </div>
              </div>

              {/* 3 & 4. TWO PILLARS SECTION (Direct Booking Engine & 5-Star Reputation) */}
              {isHospitality && (
                <div id="pillars" className="space-y-8 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏨</span> Core Pillars: Direct Booking Engine & 5-Star Reputation
                  </h2>

                  {/* PILLAR 1: DIRECT BOOKING ENGINE */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-purple-300 flex items-center gap-2">
                      <span>🔑</span> Direct Booking Engine (Hotels, Resorts, Restaurants & Cafes)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">HOTELS & RESORTS</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Room booking engine, real-time availability calendar, suite photo tours, online deposit and full payment gateways.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">RESTAURANTS & CAFES</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Table reservation calendar, digital interactive menus, online food pre-order, and takeaway checkout modules.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">ENGINE FEATURES & INTEGRATIONS:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                        <div className="flex items-center gap-2">✓ Multi-language (English + Urdu/Roman Urdu)</div>
                        <div className="flex items-center gap-2">✓ Mobile-first ultra-fast checkout</div>
                        <div className="flex items-center gap-2">✓ Promo codes & stay+dining packages</div>
                        <div className="flex items-center gap-2">✓ Partial deposit payments</div>
                        <div className="flex items-center gap-2">✓ PMS & Channel Manager API connectors</div>
                        <div className="flex items-center gap-2">✓ Best-rate guarantee messaging</div>
                      </div>
                    </div>

                    {/* Prominent Highlight Line */}
                    <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-500/50 text-center font-mono font-bold text-xs sm:text-sm text-purple-200">
                      "Platform fees ki jagah apna booking channel banayein."
                    </div>
                  </div>

                  {/* PILLAR 2: 5-STAR REPUTATION */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 02
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-300 flex items-center gap-2">
                      <span>⭐</span> 5-Star Reputation & Review Management Engine
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">AUTOMATED REVIEW REQUESTS</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Stay ya meal ke baad automated review request triggers via WhatsApp, SMS, or Email.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">MULTI-PLATFORM MONITORING</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Real-time sentiment monitoring across Google Business Profile, TripAdvisor, and Facebook.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">PROFESSIONAL REPLIES</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Brand-aligned response playbooks for 5-star praise and negative feedback.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">INSTANT CRITICAL ALERTS</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Low rating feedback triggers instant Slack/WhatsApp alerts to hotel & restaurant managers.
                        </p>
                      </div>
                    </div>

                    {/* Google Policy Compliance Warning Banner */}
                    <div className="p-5 rounded-xl bg-amber-950/60 border border-amber-500/60 space-y-2">
                      <div className="text-xs font-mono font-bold text-amber-300 uppercase flex items-center gap-2">
                        <span>⚖️</span> 100% WHITE-HAT GOOGLE POLICY COMPLIANCE GUARANTEE
                      </div>
                      <p className="text-xs text-amber-100 leading-relaxed">
                        MHKMarkedia Google aur TripAdvisor policy ka strict dhyan rakhti hai: Hum sabhi guests ko review ka equal option dete hain. Hum gated feedback, fake reviews, ya incentivized ratings jaisi illegal tactics strictly use nahi karte.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* HOME TRADES & CONTRACTORS 3 PILLARS */}
              {isHomeTrades && (
                <div id="pillars" className="space-y-8 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🛠️</span> Core Pillars: Instant Call Capture, Map Pack #1 & Search Dominance
                  </h2>

                  {/* PILLAR 1: INSTANT CALL CAPTURE */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-amber-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-300 flex items-center gap-2">
                      <span>📞</span> Instant Call Capture (No More Missed Leads)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-amber-400 uppercase">MISSED CALL TEXT-BACK</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Missed call triggers an instant SMS/WhatsApp within 5 seconds asking how you can help, securing the homeowner before they call a competitor.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-amber-400 uppercase">AI VOICE RECEPTIONIST</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          24/7 AI voice receptionist picks up calls, records emergency job details, and captures customer address automatically.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">CALL CAPTURE FEATURES:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                        <div className="flex items-center gap-2">✓ 24/7 WhatsApp & Website Chatbot</div>
                        <div className="flex items-center gap-2">✓ Click-to-Call & WhatsApp buttons on every page</div>
                        <div className="flex items-center gap-2">✓ Instant owner lead alerts</div>
                        <div className="flex items-center gap-2">✓ Call attribution tracking (Google, Ads, Web)</div>
                        <div className="flex items-center gap-2">✓ Emergency job priority routing</div>
                        <div className="flex items-center gap-2">✓ Automated quote request capture</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-500/50 text-center font-mono font-bold text-xs sm:text-sm text-amber-200">
                      "No more missed calls. No more jobs lost to competitors."
                    </div>
                  </div>

                  {/* PILLAR 2: GOOGLE MAP PACK #1 */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 02
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-purple-300 flex items-center gap-2">
                      <span>📍</span> Google Map Pack #1 Local Ranking Engine
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-purple-400 uppercase">GBP FULL OPTIMIZATION</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Primary/secondary category setup, service areas, and geo-tagged before/after project photos.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-purple-400 uppercase">POST-JOB REVIEW AUTOMATION</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Automated SMS triggers after job completion encouraging authentic 5-star Google reviews.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-purple-400 uppercase">NAP & CITATION CONSISTENCY</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Building local directory citations with 100% consistent business Name, Address, and Phone.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-purple-400 uppercase">GEO-GRID RANK TRACKING</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Monthly grid reports mapping your ranking position across every targeted neighborhood zip code.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-purple-950/60 border border-purple-500/60 space-y-2">
                      <div className="text-xs font-mono font-bold text-purple-300 uppercase flex items-center gap-2">
                        <span>⚖️</span> PROVEN PROCESS & HONEST EXPECTATIONS
                      </div>
                      <p className="text-xs text-purple-100 leading-relaxed">
                        Google Map Pack ranking depends on local competition and citation history. We do not provide fake ranking guarantees; instead, we execute a rigorous white-hat SEO process backed by monthly transparent reporting.
                      </p>
                    </div>
                  </div>

                  {/* PILLAR 3: HIGH-INTENT LOCAL SEARCH DOMINANCE */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-indigo-950 text-white border border-indigo-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-indigo-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 03
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-indigo-300 flex items-center gap-2">
                      <span>🔎</span> High-Intent Local Search Dominance
                    </h3>

                    <p className="text-xs text-indigo-200 leading-relaxed">
                      Targeting homeowners searching "pipe repair near me", "AC repair in [city]", or "24/7 electrician" right when emergency strikes:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-indigo-100">
                      <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Dedicated Service Pages</div>
                        <div>Individual pages for pipe repair, water heater replacement, AC maintenance, roofing, etc.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Neighborhood Location Pages</div>
                        <div>Hyper-targeted landing pages for each city, suburb, and service territory.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Emergency Keyword Schema</div>
                        <div>24/7, same-day repair keywords + LocalBusiness JSON-LD rich snippets.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Fast Mobile Web & Ads Setup</div>
                        <div>Sub-second fast loading on mobile phones + Google Local Services Ads (LSA) integration.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* E-COMMERCE & DTC 3 PILLARS */}
              {isEcommerce && (
                <div id="pillars" className="space-y-8 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🛒</span> Core Pillars: High-Speed Shopify, Headless & Fast Checkout
                  </h2>

                  {/* PILLAR 1: HIGH-SPEED SHOPIFY */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-purple-300 flex items-center gap-2">
                      <span>🛍️</span> High-Speed Custom Shopify & Shopify Plus
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">LIQUID & ONLINE STORE 2.0</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Bespoke theme development without bloated page builders, optimizing images, fonts, and critical rendering paths.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">APP SCRIPT PURGING & SHOPIFY MARKETS</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Eliminating heavy 3rd-party apps by writing native Liquid code, configuring multi-currency, bundles, and upsell features.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">SHOPIFY ARCHITECTURE HIGHLIGHTS:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                        <div className="flex items-center gap-2">✓ Shopify Plus checkout customization</div>
                        <div className="flex items-center gap-2">✓ Conversion-focused product page redesign</div>
                        <div className="flex items-center gap-2">✓ Dynamic product bundling & 1-click upsells</div>
                        <div className="flex items-center gap-2">✓ Smooth WooCommerce/Magento migration</div>
                        <div className="flex items-center gap-2">✓ Shopify Markets multi-language setup</div>
                        <div className="flex items-center gap-2">✓ Sub-second mobile cart drawer</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 2: HEADLESS WOOCOMMERCE */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-indigo-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 02
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-indigo-300 flex items-center gap-2">
                      <span>⚡</span> Headless WooCommerce Engine (Next.js + WPGraphQL)
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Headless commerce decouples the frontend UI (Next.js / React) from the backend store engine (WooCommerce REST API / WPGraphQL). This gives your store app-like speed, sub-second page transitions, and complete UI freedom without WordPress theme limits.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">WHEN HEADLESS IS RIGHT</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Large product catalogs, high traffic volume, custom 3D/interactive landing pages, or demanding international scaling.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-amber-400 uppercase">WHEN MONOLITHIC IS BETTER</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          For smaller stores or budget-conscious launches, an optimized standard Shopify or WooCommerce store is faster to market and more cost-effective.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-indigo-950/70 border border-indigo-500/60 space-y-2">
                      <div className="text-xs font-mono font-bold text-indigo-300 uppercase flex items-center gap-2">
                        <span>💡</span> HONEST ARCHITECTURAL GUIDANCE
                      </div>
                      <p className="text-xs text-indigo-100 leading-relaxed">
                        "Not every store needs headless commerce. We build headless strictly when your brand scale demands it, saving you unnecessary development overhead."
                      </p>
                    </div>
                  </div>

                  {/* PILLAR 3: SUB-SECOND CHECKOUT & HIGH CONVERSION */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-purple-950 text-white border border-purple-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 03
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-300 flex items-center gap-2">
                      <span>🚀</span> Fast Checkout & Conversion Rate Optimization (CRO)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-purple-100">
                      <div className="p-3.5 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Guest Checkout & 1-Click Payments</div>
                        <div>Shop Pay, Apple Pay, Google Pay, and streamlined 1-page checkout forms.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Local & Regional Gateways</div>
                        <div>COD with automated verification, regional mobile wallets, and credit card processing.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">UX Trust & Cart Drawer</div>
                        <div>Address autofill, sticky buy buttons, cart drawer, free-shipping progress bars, and trust badges.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Core Web Vitals Mastery</div>
                        <div>Optimizing LCP, INP, and CLS scores to maximize ad return on spend (ROAS).</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center font-mono font-bold text-xs sm:text-sm text-emerald-200">
                      "Every extra second degrades conversion; we make speed our top architectural priority."
                    </div>
                  </div>
                </div>
              )}

              {/* FINANCE & WEALTH TECH 3 PILLARS */}
              {isFinance && (
                <div id="pillars" className="space-y-8 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🔐</span> Core Pillars: Calculators, Encrypted Portals & Security
                  </h2>

                  {/* PILLAR 1: INTERACTIVE CALCULATORS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-300 flex items-center gap-2">
                      <span>📊</span> Interactive Financial Calculators & Lead Engines
                    </h3>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Custom mathematical models embedded directly across your site to engage prospects and capture pre-qualified leads:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-emerald-400">Loan & Mortgage Calculators</div>
                        <div>EMI estimation, amortization schedules, and home loan eligibility checkers.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-emerald-400">Investment, SIP & Retirement</div>
                        <div>Compound growth projections, wealth growth calculators, and retirement income planners.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-emerald-400">Tax & Zakat Estimators</div>
                        <div>Tax liability estimators (built per jurisdiction) and regional Zakat calculation tools.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-emerald-400">Insurance & Business Loan Tools</div>
                        <div>Premium estimation tools, business loan eligibility checkers, and ROI models.</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center font-mono text-xs text-emerald-200">
                      *Mandatory Notice: All calculators feature prominent disclaimers stating estimates are for informational purposes only and do not constitute formal financial advice.
                    </div>
                  </div>

                  {/* PILLAR 2: ENCRYPTED CLIENT PORTALS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 02
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-purple-300 flex items-center gap-2">
                      <span>🗄️</span> Encrypted Client Portals & Document Vaults
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-purple-400 uppercase">MFA & ENCRYPTED VAULT</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Secure 2FA login, document upload/sharing (KYC, bank statements, tax files) with AES-256 storage encryption.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-purple-400 uppercase">E-SIGNATURE & DASHBOARDS</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Integrated e-signature API workflows, portfolio summaries, application status tracking, and secure client messaging.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">PORTAL SECURITY CONTROLS:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2">✓ Role-based access control (Client, Advisor, Admin)</div>
                        <div className="flex items-center gap-2">✓ Comprehensive audit logging (who viewed what & when)</div>
                        <div className="flex items-center gap-2">✓ Session timeout & device monitoring</div>
                        <div className="flex items-center gap-2">✓ Non-sensitive notification webhooks (Email/SMS)</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 3: BANK-GRADE SECURITY & COMPLIANCE */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-indigo-950 text-white border border-indigo-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-indigo-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 03
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-indigo-300 flex items-center gap-2">
                      <span>🛡️</span> Security-First Architecture & Compliance-Ready Structure
                    </h3>

                    <p className="text-xs text-indigo-200 leading-relaxed">
                      We construct security-first technical architectures adhering to international data protection standards (GDPR, SBP/SECP guidelines, local privacy laws):
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-indigo-100">
                      <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Transit & Rest Encryption</div>
                        <div>TLS 1.3 encryption in transit and AES-256 encrypted database storage.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                        <div className="font-bold text-emerald-300">Penetration Testing & Backups</div>
                        <div>Security code reviews, vulnerability checks, and automated cloud backups.</div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-indigo-950/70 border border-indigo-500/60 space-y-2">
                      <div className="text-xs font-mono font-bold text-indigo-300 uppercase flex items-center gap-2">
                        <span>⚖️</span> TRANSPARENT COMPLIANCE DISCLAIMER
                      </div>
                      <p className="text-xs text-indigo-100 leading-relaxed">
                        We build compliance-ready technical structures. Formal regulatory certification remains the joint legal responsibility of your firm and your compliance counsel. We make zero false claims regarding third-party certifications.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* LAW & LEGAL SERVICES 3 PILLARS */}
              {isLegal && (
                <div id="pillars" className="space-y-8 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>⚖️</span> Core Pillars: Authority Web Builds, Client Acquisition & Bar Ethics
                  </h2>

                  {/* PILLAR 1: AUTHORITY WEB BUILDS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-purple-300 flex items-center gap-2">
                      <span>🏛️</span> High-Authority Law Firm Web Architecture
                    </h3>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Custom mobile-first Next.js firm platform projecting undeniable legal authority, academic credentials, and client confidence:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-purple-300">Dedicated Practice Area Pages</div>
                        <div>Separate high-ranking landing pages for family, criminal, corporate, property, immigration, and tax law.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-purple-300">Attorney Credentials & Profiles</div>
                        <div>Detailed partner profiles showcasing academic qualifications, bar admissions, and court experience.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-purple-300">Compliant Case Insights & Blog</div>
                        <div>Thought leadership legal insights and FAQs that establish topical authority for search engines.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-purple-300">Multi-Language & Urdu RTL</div>
                        <div>Seamless English and Right-to-Left (RTL) Urdu UI support for local court clients.</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 2: CLIENT ACQUISITION & LOCAL SEO */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 02
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-300 flex items-center gap-2">
                      <span>🔎</span> High-Intent Client Acquisition & Local Maps Engine
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">LOCAL MAP PACK DOMINANCE</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Top 3 Google Maps optimization for 'advocate in [city]' and 'family lawyer near me' search queries.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">24/7 AUTOMATED INTAKE SCREENING</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Confidential intake forms screen prospects by practice area, budget, and case urgency before booking.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">ACQUISITION & INTAKE HIGHLIGHTS:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2">✓ Automated consultation scheduling & reminders</div>
                        <div className="flex items-center gap-2">✓ Missed call instant text-back setup</div>
                        <div className="flex items-center gap-2">✓ 24/7 AI intake assistant (strictly non-legal advice)</div>
                        <div className="flex items-center gap-2">✓ Compliant Google Ads setup (where bar rules permit)</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 3: CITATIONS, REPUTATION & BAR ETHICS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-amber-950 text-white border border-amber-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-amber-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 03
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-300 flex items-center gap-2">
                      <span>📜</span> High-Authority Legal Citations & Bar Ethics Adherence
                    </h3>

                    <p className="text-xs text-amber-100 leading-relaxed">
                      Legal marketing requires absolute compliance with local Bar Council rules and advertising ethics:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-amber-100">
                      <div className="p-3.5 rounded-xl bg-amber-900/60 border border-amber-700/60 space-y-1">
                        <div className="font-bold text-amber-300">Legal Directory Citations</div>
                        <div>Listings in local bar association directories and high-authority legal portals with NAP consistency.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-amber-900/60 border border-amber-700/60 space-y-1">
                        <div className="font-bold text-amber-300">Ethical Review Management</div>
                        <div>Professional review request flows and confidential owner responses protecting client privacy.</div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-amber-900/70 border border-amber-500/60 space-y-2">
                      <div className="text-xs font-mono font-bold text-amber-300 uppercase flex items-center gap-2">
                        <span>⚖️</span> STRICT LEGAL ADVERTISING ETHICS GUARANTEE
                      </div>
                      <p className="text-xs text-amber-100 leading-relaxed">
                        We strictly follow local Bar Council rules: We never use prohibited claims like 'best lawyer' or make false outcome guarantees. All website copy undergoes thorough review by your firm's legal counsel prior to launch.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* REAL ESTATE & ARCHITECTURE 4 PILLARS */}
              {isRealEstate && (
                <div id="pillars" className="space-y-8 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏢</span> Core Pillars: Dynamic Listings, High-Ticket Leads & Immersive Showcases
                  </h2>

                  {/* PILLAR 1: DYNAMIC LISTINGS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-blue-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-blue-300 flex items-center gap-2">
                      <span>🏡</span> Dynamic MLS / IDX Property Listing System
                    </h3>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Custom MLS-style listing architecture connected to dynamic property databases, portal feeds, and agent management panels:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-blue-300">Multi-Category Search & Filters</div>
                        <div>Instant filtering by city, neighborhood, price range, size (marla/kanal/sq ft), bedrooms, and property status.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-blue-300">Map-Based Property Search</div>
                        <div>Interactive Google Maps integration allowing buyers to zoom into specific areas and explore active listings.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-blue-300">Agent Listing Panel & Portal Feeds</div>
                        <div>Self-service agent dashboards to add/edit listings, plus REST API connectors for external portal feeds.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-blue-300">Multi-Currency & English + Urdu RTL</div>
                        <div>Sub-second mobile interface supporting USD, AED, PKR pricing and right-to-left (RTL) Urdu UI views.</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 2: HIGH-TICKET LEADS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 02
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-300 flex items-center gap-2">
                      <span>⚡</span> Sub-1-Minute WhatsApp Lead Qualification
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">24/7 WHATSAPP INTAKE BOT</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Automated WhatsApp assistant greets buyers, screens budget & buying timeline, and logs details in CRM instantly.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">OVERSEAS INVESTOR FUNNELS</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Dedicated video tour scheduling, digital brochure downloads, and multi-touch automated follow-up sequences.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">LEAD AUTOMATION HIGHLIGHTS:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2">✓ Automated site visit scheduling & reminders</div>
                        <div className="flex items-center gap-2">✓ Lead scoring (Hot, Warm, Cold) & agent routing</div>
                        <div className="flex items-center gap-2">✓ EMI loan & rental yield calculators</div>
                        <div className="flex items-center gap-2">✓ Saved search auto-alerts on new matching listings</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 3: IMMERSIVE SHOWCASES */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-purple-950 text-white border border-purple-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 03
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-purple-300 flex items-center gap-2">
                      <span>🎬</span> Immersive 360° Showcases & Architectural Renders
                    </h3>

                    <p className="text-xs text-purple-200 leading-relaxed">
                      Transform flat property photos into high-converting virtual walkthroughs that engage remote buyers:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-purple-100">
                      <div className="p-3.5 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="font-bold text-purple-300">360° Virtual Tours & Matterport</div>
                        <div>Seamless embedding of Matterport 360° tours, drone video walkthroughs, and interactive floor plans.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="font-bold text-purple-300">Developer & Architect Landing Pages</div>
                        <div>Dedicated project pages with payment schedules, construction timelines, and before/after visual sliders.</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 4: GEO-TARGETING & MAP PACK */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-amber-950 text-white border border-amber-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-amber-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 04
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-300 flex items-center gap-2">
                      <span>📍</span> Neighborhood Geo-Targeting & Google Map Pack #1
                    </h3>

                    <p className="text-xs text-amber-100 leading-relaxed">
                      Dominating local search queries for high-intent property buyers and architectural services:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-amber-100">
                      <div className="p-3.5 rounded-xl bg-amber-900/60 border border-amber-700/60 space-y-1">
                        <div className="font-bold text-amber-300">Neighborhood SEO Landing Pages</div>
                        <div>Dedicated high-ranking pages for specific areas ('Plots in DHA Multan', 'Flats in Gulberg Lahore').</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-amber-900/60 border border-amber-700/60 space-y-1">
                        <div className="font-bold text-amber-300">Google Business Profile Optimization</div>
                        <div>Top 3 Map Pack rank for 'real estate agent near me', 'architect in [city]', and housing society searches.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* HEALTHCARE & CLINICS 4 PILLARS */}
              {isHealthcare && (
                <div id="pillars" className="space-y-8 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏥</span> Core Pillars: Patient Portals, Local Maps & Privacy Architecture
                  </h2>

                  {/* PILLAR 1: PATIENT PORTALS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-cyan-300 flex items-center gap-2">
                      <span>🩺</span> Secure Patient Portals & Encrypted Vaults
                    </h3>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Encrypted MFA-authenticated patient portal for lab reports, medical history, and digital prescriptions:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-cyan-300">Encrypted Report & Prescription Vault</div>
                        <div>Patients authenticate via 2FA to download diagnostic lab reports and digital prescriptions securely.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-cyan-300">Digital Intake & Consent Forms</div>
                        <div>Paperless new patient registration, medical history intake, and digital consent form signing.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-cyan-300">Family Accounts & Billing Records</div>
                        <div>Manage multiple family members under one master login, plus online invoice and payment history.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="font-bold text-cyan-300">Role-Based Access & Audit Logs</div>
                        <div>Strict RBAC controls (Patient, Doctor, Receptionist, Admin) with immutable data access logs.</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 2: AUTOMATED BOOKING & RECALL */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 02
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-300 flex items-center gap-2">
                      <span>⚡</span> 24/7 Automated Booking & 60% Lower No-Shows
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">24/7 WHATSAPP BOOKING BOT</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Conversational bot checks doctor schedules, books slots, and triggers automated confirmations.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">AUTOMATED PATIENT RECALL</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Automated 6-month checkup, vaccination, and repeat visit recall drips to maximize patient retention.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">BOOKING & RECALL HIGHLIGHTS:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2">✓ Multi-channel SMS/WhatsApp appointment reminders</div>
                        <div className="flex items-center gap-2">✓ Instant 5-second missed call text-back</div>
                        <div className="flex items-center gap-2">✓ Automated cancellation waitlist filler</div>
                        <div className="flex items-center gap-2">✓ Real-time Google Calendar & HMS API sync</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 3: LOCAL GOOGLE MAPS DOMINANCE */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-teal-950 text-white border border-teal-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-teal-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 03
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-teal-300 flex items-center gap-2">
                      <span>📍</span> Local Google Map Pack Dominance & Verified Reviews
                    </h3>

                    <p className="text-xs text-teal-100 leading-relaxed">
                      Dominating local search queries when patients look for medical clinics and specialists:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-teal-100">
                      <div className="p-3.5 rounded-xl bg-teal-900/60 border border-teal-700/60 space-y-1">
                        <div className="font-bold text-teal-300">Google Business Profile Optimization</div>
                        <div>Top 3 Map Pack rank for 'dentist near me', 'skin specialist in [city]', and diagnostic lab queries.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-teal-900/60 border border-teal-700/60 space-y-1">
                        <div className="font-bold text-teal-300">Healthcare Directory Citations</div>
                        <div>Synchronized citations across Marham, Oladoc, WebMD, and local medical board directories.</div>
                      </div>
                    </div>
                  </div>

                  {/* PILLAR 4: PRIVACY & MEDICAL ETHICS */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                      PILLAR 04
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-cyan-300 flex items-center gap-2">
                      <span>⚖️</span> Privacy-First Architecture & Medical Ethics Adherence
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Built specifically for healthcare data protection and health authority advertising compliance:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="font-bold text-cyan-300">PHI-Stripped Notifications</div>
                        <div>Protected Health Information is never sent via unencrypted SMS/WhatsApp—only secure portal links.</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="font-bold text-cyan-300">Strict Medical Ethics Adherence</div>
                        <div>Zero false cure claims, zero unearned promises ('best doctor'). All content verified by clinic doctors.</div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-cyan-950/70 border border-cyan-500/60 space-y-2">
                      <div className="text-xs font-mono font-bold text-cyan-300 uppercase flex items-center gap-2">
                        <span>🛡️</span> PRIVACY-FIRST & COMPLIANCE-READY DISCLAIMER
                      </div>
                      <p className="text-xs text-cyan-100 leading-relaxed">
                        We build privacy-first, compliance-ready technical structures (TLS 1.3, AES-256, MFA, RBAC). Full operational compliance (e.g., HIPAA/local health laws) involves hosting, software tools, staff policies, and physical security, managed in partnership with your clinic's legal counsel.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Problems Solved */}
              {industry.problems && (
                <div id="problems" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>⚠️</span> Key Sector Challenges Solved
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.problems.map((prob, idx) => (
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

              {/* 6. HIGHLIGHT SECTION: VISUAL GUEST JOURNEY DIAGRAM */}
              {industry.leadJourney && (
                <div id="guest-journey" className="space-y-6 scroll-mt-28">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                      <span>🗺️</span> Seamless Guest Journey Flow
                    </h2>
                    <span className="text-xs font-mono font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      HIGHLIGHT SECTION
                    </span>
                  </div>

                  <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-6 shadow-2xl border border-zinc-800">
                    <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest flex items-center justify-between">
                      <span>END-TO-END GUEST PIPELINE AUTOMATION MAP</span>
                      <span className="text-emerald-400">8 STEP AUTOMATED FLOW</span>
                    </div>

                    {/* Step Cards with Visual Connectors */}
                    <div className="space-y-4">
                      {industry.leadJourney.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 relative group">
                          <div className="shrink-0 w-9 h-9 rounded-full bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-lg border border-purple-400">
                            {step.step}
                          </div>
                          <div className="space-y-1 pb-4 border-b border-zinc-800/80 w-full last:border-0">
                            <h3 className="text-sm sm:text-base font-serif font-bold text-white flex items-center justify-between">
                              <span>{step.title}</span>
                              <span className="text-purple-400 font-mono text-xs">Step {idx + 1}</span>
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

              {/* 5. SERVICES MATRIX TABLE */}
              {industry.automationsTable && (
                <div id="services-matrix" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>⚙️</span> Hospitality Services & Specific Use Cases
                  </h2>
                  
                  <div className="rounded-2xl border border-zinc-200 overflow-hidden text-xs sm:text-sm shadow-sm">
                    <div className="grid grid-cols-12 bg-zinc-900 p-4 font-mono font-bold text-white uppercase tracking-wider">
                      <div className="col-span-4">SERVICE</div>
                      <div className="col-span-8">HOSPITALITY SPECIFIC USE CASE</div>
                    </div>
                    {industry.automationsTable.map((item, idx) => (
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

              {/* Core Sector Capabilities */}
              {industry.botTypes && (
                <div id="capabilities" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🤖</span> Specialized Sector Capabilities & Modules
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.botTypes.map((bot, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-purple-50/50 border border-purple-200/70 space-y-2 hover:border-purple-300 transition-colors">
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

              {/* 8. CASE STUDY FORMAT */}
              {isHospitality && (
                <div id="case-study" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏆</span> Real Case Study: Direct Booking & Rating Surge
                  </h2>
                  
                  <div className="p-6 sm:p-8 rounded-2xl bg-purple-950 text-white space-y-6 shadow-xl border border-purple-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                        HERITAGE LUXURY RESORT & FINE DINING
                      </span>
                      <span className="text-xs font-mono bg-purple-800/80 text-purple-200 px-3 py-1 rounded-full">
                        HOSPITALITY CASE STUDY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="text-xs font-mono font-bold text-red-300 uppercase">PROBLEM</div>
                        <p className="text-xs text-purple-100 leading-relaxed">
                          78% of bookings came through OTAs paying 22% average commission, zero direct guest marketing, slow legacy site.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-300 uppercase">SOLUTION</div>
                        <p className="text-xs text-purple-100 leading-relaxed">
                          Next.js direct booking engine + 24/7 WhatsApp concierge bot + 100% white-hat Google review request engine.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">EMPIRICAL RESULTS</div>
                        <p className="text-xs text-purple-100 leading-relaxed">
                          • Direct Bookings: 22% → 58%<br/>
                          • OTA Commission Saved: ~$14,500/yr<br/>
                          • Rating: 4.1 → 4.8 Stars (210+ reviews)
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-purple-900/30 border border-purple-700/40 text-[11px] font-mono text-purple-200">
                      *Note: Results are based on real empirical metrics from past deployments. We do not provide false guarantees.
                    </div>
                  </div>
                </div>
              )}

              {isHomeTrades && (
                <div id="case-study" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏆</span> Real Case Study: Emergency Contractor Call Surge
                  </h2>
                  
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-6 shadow-xl border border-zinc-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                        METRO PLUMBING & HVAC CONTRACTORS
                      </span>
                      <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                        HOME TRADES CASE STUDY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-red-400 uppercase">PROBLEM</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          42% of emergency calls missed while on job sites, zero Map Pack ranking, stuck at 3.8 Google rating with 14 reviews.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">SOLUTION</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          5-second missed call text-back + GBP Map Pack #1 SEO + mobile-fast site + post-job SMS review requests.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-amber-300 uppercase">EMPIRICAL RESULTS</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          • Captured Leads: 58% → 94%<br/>
                          • Map Pack Position: Unranked → Top 3<br/>
                          • Rating: 3.8 → 4.9 Stars (140+ reviews)
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      *Note: Empirical metrics from verified deployments. Results vary by area competition; no unrealistic guarantees.
                    </div>
                  </div>
                </div>
              )}

              {isEcommerce && (
                <div id="case-study" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏆</span> Real Case Study: Speed & Conversion Rate Surge
                  </h2>
                  
                  <div className="p-6 sm:p-8 rounded-2xl bg-purple-950 text-white space-y-6 shadow-xl border border-purple-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                        AURA DTC APPAREL & BEAUTY
                      </span>
                      <span className="text-xs font-mono bg-purple-800 text-purple-200 px-3 py-1 rounded-full">
                        E-COMMERCE CASE STUDY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="text-xs font-mono font-bold text-red-300 uppercase">PROBLEM</div>
                        <p className="text-xs text-purple-100 leading-relaxed">
                          4.2s mobile load time, 74% cart abandonment, heavy plugin app bloat, inaccurate Meta pixel ad attribution.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-300 uppercase">SOLUTION</div>
                        <p className="text-xs text-purple-100 leading-relaxed">
                          Custom Liquid theme speed optimization + 1-click checkout + Meta CAPI server tracking + automated WhatsApp/Klaviyo recovery flows.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-700/60 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">EMPIRICAL RESULTS</div>
                        <p className="text-xs text-purple-100 leading-relaxed">
                          • Mobile Speed: 4.2s → 0.9s<br/>
                          • Conversion Rate: 1.4% → 3.6%<br/>
                          • Cart Recovery: 32% of abandoned carts recovered
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-purple-900/30 border border-purple-700/40 text-[11px] font-mono text-purple-200">
                      *Note: Empirical metrics from past store optimizations. Results depend on brand ad quality and product offer fit.
                    </div>
                  </div>
                </div>
              )}

              {isFinance && (
                <div id="case-study" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏆</span> Real Case Study: Wealth Portal & Lead Conversion Surge
                  </h2>
                  
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-6 shadow-xl border border-zinc-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                        APEX WEALTH MANAGEMENT FIRM
                      </span>
                      <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                        FINANCE CASE STUDY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-red-400 uppercase">PROBLEM</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Static PDF brochure site, un-qualified lead phone inquiries, 14-day manual email document onboarding.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">SOLUTION</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Interactive investment calculators + 2FA encrypted client portal + e-signature & automated CRM onboarding workflows.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-300 uppercase">EMPIRICAL RESULTS</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          • Lead Conversion: 3.1% → 14.2%<br/>
                          • Onboarding Speed: 14 days → 2 days<br/>
                          • Encrypted Vault: 100% secure client file uploads
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      *Note: Anonymized empirical metrics from verified financial firm deployment. Results vary by firm specialization and marketing reach.
                    </div>
                  </div>
                </div>
              )}

              {isLegal && (
                <div id="case-study" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏆</span> Real Case Study: Commercial & Practice Area Lead Surge
                  </h2>
                  
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-6 shadow-xl border border-zinc-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                        ANONYMIZED COMMERCIAL & FAMILY LAW FIRM
                      </span>
                      <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                        LEGAL SERVICES CASE STUDY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-red-400 uppercase">PROBLEM</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Outdated brochure website, missing Map Pack visibility for key practice terms, delayed intake leading to lost consultations.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">SOLUTION</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          High-authority Next.js firm portal + practice area landing pages + bar-compliant Google Business Profile optimization + 24/7 automated lead intake workflow.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-purple-300 uppercase">EMPIRICAL RESULTS</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          • Consultation Requests: +240% qualified inquiry growth<br/>
                          • Map Pack Placement: Unranked → Top 3 for primary city searches<br/>
                          • Intake Speed: Consultation scheduled within 5 minutes of inquiry
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      *Note: Case study metrics anonymized to preserve strict client confidentiality in compliance with Bar Council guidelines. Results vary based on local practice competition; no guaranteed outcomes promised.
                    </div>
                  </div>
                </div>
              )}

              {isRealEstate && (
                <div id="case-study" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏆</span> Real Case Study: High-Ticket Property Buyer Surge
                  </h2>
                  
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-6 shadow-xl border border-zinc-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                        LUXURY DEVELOPER & AGENCY BROKERAGE
                      </span>
                      <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                        REAL ESTATE CASE STUDY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-red-400 uppercase">PROBLEM</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Listings trapped in WhatsApp groups & Excel, heavy portal dependence, slow 4h lead response time, high site visit drop-off.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">SOLUTION</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Dynamic Next.js listing portal + 60s WhatsApp qualification bot + 360 virtual tours + neighborhood location SEO pages.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-blue-300 uppercase">EMPIRICAL RESULTS</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          • Qualified Buyer Leads: +180% surge in verified inquiries<br/>
                          • Site Visit Bookings: 4.2x increase with calendar reminders<br/>
                          • Lead Response Time: Reduced from 4 hours to under 60 seconds
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      *Note: Case study metrics based on verified agency deployment. Results vary by property location and ad budget; no guaranteed timelines promised.
                    </div>
                  </div>
                </div>
              )}

              {isHealthcare && (
                <div id="case-study" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🏆</span> Real Case Study: Clinic Appointment & Local Search Surge
                  </h2>
                  
                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-6 shadow-xl border border-zinc-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                        ANONYMIZED DENTAL & MULTISPECIALTY CLINIC
                      </span>
                      <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                        HEALTHCARE CASE STUDY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-red-400 uppercase">PROBLEM</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Phone-only booking causing missed after-hours calls, 35% no-show rate, low Google Maps presence, insecure WhatsApp report sharing.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">SOLUTION</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Next.js clinic web platform + 24/7 WhatsApp booking bot + automated SMS reminders + encrypted 2FA patient report portal + Map Pack SEO.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-xs font-mono font-bold text-cyan-300 uppercase">EMPIRICAL RESULTS</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          • Online Patient Bookings: +210% increase within 90 days<br/>
                          • No-Show Rate: Reduced from 35% to under 11%<br/>
                          • Google Map Pack Placement: Unranked → Top 3 for target specialty
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      *Note: Case study metrics anonymized to protect patient data privacy. Results vary based on local clinic competition and specialty demand; no guaranteed timelines promised.
                    </div>
                  </div>
                </div>
              )}

              {/* 10. WHY CHOOSE US */}
              {isHospitality && (
                <div id="why-us" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Why Choose MHKMarkedia for Hospitality Growth
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Unified Engineering Team
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Booking engine + Local SEO + Google reviews + WhatsApp automation built by a single expert team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Focus on Cutting OTA Commissions
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Our primary architectural goal is maximizing your direct profit margins by reducing third-party fees.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Local Payment & WhatsApp Mastery
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Deep integration expertise with regional payment gateways, Stripe, and official WhatsApp Business APIs.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Transparent Reporting & Data Ownership
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Real-time analytics dashboards with 100% client ownership of domain, source code, and guest databases.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isHomeTrades && (
                <div id="why-us" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Why Choose MHKMarkedia for Home Trades Growth
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Unified Calls + Web + SEO Team
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Missed call text-back, high-speed website, Map Pack SEO, and Google review automation managed by one expert agency team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Built Specifically for Trade Contractors
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Simple, practical systems tailored for plumbers, electricians, HVAC, roofers, and repair contractors on the go.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Fast Setup & Zero Technical Hassle
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        We handle 100% of the technical workload, domain setup, call webhooks, and Google Business Profile optimization.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Transparent Monthly Reporting
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Clear monthly reports showing exact call volume, text-back lead conversions, and neighborhood geo-grid rankings.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 sm:col-span-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> 100% Client Data & Profile Ownership
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        You retain 100% ownership of your Google Business Profile, domain, website source code, and customer records.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isEcommerce && (
                <div id="why-us" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Why Choose MHKMarkedia for E-Commerce & DTC Growth
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Unified Store + Automation + Integrations Team
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Shopify theme code, Next.js headless storefronts, Klaviyo/WhatsApp drips, and Meta CAPI server integrations built by a single engineering team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Speed & Conversion First Philosophy
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        We prioritize sub-second Core Web Vitals, app script purging, and frictionless checkout funnels to maximize your return on ad spend (ROAS).
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Honest Architectural Platform Guidance
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        We recommend headless commerce strictly when catalog scale and custom UX demand it, ensuring smaller stores launch cost-effectively on custom Shopify/WooCommerce themes.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Local & Global Gateway Expertise
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Proven integration experience with 1-click credit card checkout, Shop Pay, Apple Pay, Cash on Delivery (COD verification), and regional payment options.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 sm:col-span-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> 100% Store & Data Ownership
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        You retain full primary ownership of your Shopify account, WooCommerce database, domain, repository source code, and customer records.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isFinance && (
                <div id="why-us" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Why Choose MHKMarkedia for Finance & Wealth Tech Growth
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Website + Calculators + Portal + Automation
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        High-trust firm website, mathematical calculators, encrypted client vaults, and CRM lead pipelines engineered by a single expert team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Security-First Development Standards
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Built with TLS 1.3 transit encryption, AES-256 storage, MFA authentication, role-based access, and session auditing controls.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Transparent & Honest Compliance Claims
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        We build compliance-ready technical structures aligned with data privacy standards without making false regulatory certification claims.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Lead Generation & Unshakeable Client Trust
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Engage high-net-worth leads with interactive financial tools while assuring clients their confidential files are encrypted and safe.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 sm:col-span-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> 100% Code, IP & Data Ownership Under NDA
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        You retain 100% primary ownership of your website source code, client records, database, and custom financial algorithms protected under NDA.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isLegal && (
                <div id="why-us" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Why Choose MHKMarkedia for Law Firm Marketing
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Unified Web + SEO + Citations + Reputation Team
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Firm website, practice area pages, legal directory listings, and review workflows handled by a single dedicated team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Strict Bar Council & Ethics Adherence
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Strict adherence to legal marketing ethics—zero prohibited claims like 'best lawyer' or false outcome guarantees.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Strict Confidentiality & Security Focus
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Encrypted intake forms, NDA-backed data workflows, and complete protection of sensitive client details.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Honest Claims & Real Reviews Only
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Zero fake reviews or deceptive marketing tactics; only authentic client reviews processed strictly where bar rules permit.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Transparent Monthly Reporting
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Detailed monthly reports tracking inquiry sources, practice area performance, and local search visibility.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> 100% Website & Profile Ownership
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        You retain complete primary ownership of your domain, website source code, legal directories, and Google Business Profile.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isRealEstate && (
                <div id="why-us" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Why Choose MHKMarkedia for Real Estate & Architecture Growth
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Unified Listing + CRM + WhatsApp + SEO Team
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        MLS/IDX listing site, CRM pipeline, 24/7 WhatsApp qualification bot, and Map Pack SEO engineered by a single team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Break Free from Portal Dependency
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Build your own direct buyer channel and retain 100% ownership of your high-ticket buyer data without sharing leads with portal competitors.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Sub-1-Minute Lead Response Speed
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        24/7 automated WhatsApp bot greets and qualifies buyers instantly, ensuring serious investors never wait for manual callbacks.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Deep Neighborhood SEO Expertise
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Proven experience building high-ranking area pages, housing society landing pages, and Google Business Profile Map Pack rankings.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 sm:col-span-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> 100% Platform, Listing & Code Ownership Under NDA
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        You retain complete primary ownership of your website source code, domain, listing database, and customer CRM records.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isHealthcare && (
                <div id="why-us" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Why Choose MHKMarkedia for Healthcare & Clinic Growth
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Unified Web + Map Pack SEO + Booking + Portal Team
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Clinic website, Google Map Pack SEO, 24/7 WhatsApp booking bot, and encrypted patient portal engineered by a single team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Privacy-First Development Standards
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Built with TLS 1.3 transit encryption, AES-256 database storage, MFA authentication, role-based access, and audit logging.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Strict Medical Ethics & Advertising Adherence
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Zero misleading cure promises ('100% cure', 'best doctor'). All medical content is reviewed by your clinic's medical team.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> Honest Claims & Transparent Reporting
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        No fake instant ranking guarantees; systematic citation building and monthly reporting on appointments and Map Pack progress.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 sm:col-span-2">
                      <h3 className="text-sm font-bold text-purple-900 font-serif flex items-center gap-2">
                        <span>✓</span> 100% Website, Profile & Patient Data Ownership
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        You retain complete primary ownership of your domain, website source code, Google Business Profile, and patient records under NDA.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack & Tools */}
              {industry.tools && (
                <div id="tools" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🛠️</span> Tech Stack & Platform Integrations
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {industry.tools.map((toolGroup, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                        <h3 className="text-sm font-bold text-purple-900 font-serif tracking-wide">
                          {toolGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {toolGroup.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg bg-white border border-purple-200/60 text-xs font-mono font-medium text-purple-950 shadow-2xs"
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

              {/* Implementation Process */}
              {industry.processSteps && (
                <div id="process" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>🔄</span> Implementation Roadmap
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.processSteps.map((step) => (
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

              {/* Strategic Benefits */}
              {industry.benefits && (
                <div id="benefits" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>📈</span> Strategic Business ROI
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.benefits.map((b, idx) => (
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

              {/* 9. PACKAGES & PRICING */}
              {industry.pricingModels && (
                <div id="pricing" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>💎</span> Hospitality Packages & Investment
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {industry.pricingModels.map((plan, idx) => (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl border flex flex-col justify-between relative transition-all ${
                          plan.highlight
                            ? "bg-purple-950 text-white border-purple-800 shadow-xl scale-[1.01]"
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
                            <div className={`text-2xl font-extrabold font-mono pt-2 ${plan.highlight ? "text-emerald-400" : "text-purple-700"}`}>
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
                            href={`/contact?package=${encodeURIComponent(plan.title)}&industry=${encodeURIComponent(industry.title)}`}
                            className={`w-full text-center block py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                              plan.highlight
                                ? "bg-purple-500 hover:bg-purple-400 text-white shadow-lg shadow-purple-500/30"
                                : "bg-zinc-900 hover:bg-black text-white"
                            }`}
                          >
                            Book Package Audit
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Explicit Fee Disclaimer Note */}
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-200/80 text-xs text-purple-950 font-medium">
                    💡 <strong>Note:</strong> Third-party SMS/WhatsApp messaging fees, phone call minutes, ad spend, domain/hosting costs, and payment gateway processing fees are billed separately by respective service providers at cost.
                  </div>
                </div>
              )}

              {/* Deliverables */}
              {industry.deliverables && (
                <div id="deliverables" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>📦</span> Key Deliverables & Code Assets
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-zinc-800 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    {industry.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 11. FAQs */}
              {industry.faqs && (
                <div id="faqs" className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                    <span>❓</span> Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {industry.faqs.map((faq, idx) => (
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

            {/* Right Column: Sticky ON THIS PAGE Sidebar */}
            <OnThisPageNav items={pageNavItems} />

          </div>
        </div>

        {/* 12. Final CTA Banner matching Service Pages */}
        <ConsultationCtaBanner
          title={industry.ctaTitle || `READY TO SCALE YOUR ${industry.title.toUpperCase()}?`}
          subtitle="Book a free 1-on-1 strategy consultation and transform your digital presence."
          subtext={`Whether you need direct booking engines, 24/7 WhatsApp reservation bots, local Google Map Pack dominance, or automated 5-star review growth, MHKMarkedia architects custom web solutions built for speed, conversion, and scale.`}
          buttonText="Book Free Growth Audit"
          buttonHref={`/contact?industry=${encodeURIComponent(industry.title)}`}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
