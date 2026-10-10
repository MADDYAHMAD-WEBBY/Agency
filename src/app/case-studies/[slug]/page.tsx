import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/#works", isActive: true },

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

  const titleMap: Record<string, string> = {
    "cloudscale-lahore-headless-migration": "Scale Online Store Sales to $142K/Mo | MHKMarkedia",
    "ksa-to-usa-uk-eu-amazon-fba-case-study": "Scale Amazon FBA Brand to $42.5K/Mo | MHKMarkedia",
    "amazon-saudi-arabia-fba-launch-case-study": "Scale Brand on Amazon Saudi to SAR 185K/Mo | MHKMarkedia",
    "noon-gulf-marketplace-brand-case-study": "Scale Gulf Brand on Noon to SAR 128.5K/Mo | MHKMarkedia",
    "shopify-dtc-brand-building-case-study": "Scale Shopify DTC Store Sales to $68.5K/Mo | MHKMarkedia",
    "etsy-handmade-crafts-global-case-study": "Scale Etsy Global Shop Sales to $14.8K/Mo | MHKMarkedia",
    "tiktok-shop-video-sales-case-study": "Turn TikTok Short Videos into $84.5K/Mo Sales | MHK",
    "fintech-cloud-portal-case-study": "Build $120M+ Wealth FinTech Client Portal | MHKMarkedia",
  };

  const descMap: Record<string, string> = {
    "cloudscale-lahore-headless-migration": "Discover how we transformed a slow online store into a high-converting revenue engine, scaling sales to $142,000+/mo with sub-second page speeds.",
    "ksa-to-usa-uk-eu-amazon-fba-case-study": "See how a Saudi entrepreneur launched a profitable Amazon FBA brand scaling to $42,500/mo across USA & UK in 6 months. Learn our proven strategy.",
    "amazon-saudi-arabia-fba-launch-case-study": "Learn how we built a top-ranking brand on Amazon Saudi Arabia scaling to SAR 185,000+/month revenue with Arabic listings & local fulfillment.",
    "noon-gulf-marketplace-brand-case-study": "Discover how we built a profitable Gulf brand on Noon.com scaling to SAR 128,500+/month in 8 months with high-margin Yellow Friday sales.",
    "shopify-dtc-brand-building-case-study": "See how we scaled a standalone direct-to-consumer store to $68,500+/month with 3.85% store conversion rates and high-ROI ad campaigns.",
    "etsy-handmade-crafts-global-case-study": "Learn how we took handmade Pakistani cultural crafts to global Etsy buyers, scaling shop sales to $14,800/month with 38.5% net profit margins.",
    "tiktok-shop-video-sales-case-study": "Discover how we turned short viral videos into $84,500+/month in sales on TikTok Shop with creator affiliates and live shopping events.",
    "fintech-cloud-portal-case-study": "See how we engineered a bank-grade client portal handling $120M+ in wealth consultations while boosting prospect lead conversion to 14.2%.",
  };

  const title = titleMap[slug] || `${cs.title.slice(0, 42)} | MHKMarkedia`;
  const description = descMap[slug] || (cs.summary.length > 155 ? `${cs.summary.slice(0, 150).trim()}.` : cs.summary);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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

      <main className="w-full -mt-[68px] sm:-mt-[96px] pt-28 sm:pt-36 pb-0 overflow-hidden relative">
        {/* Full-Height Right Side Blurred Cover Image Background (Under Header, InstaGhost Reference Style) */}
        <div className="absolute top-0 right-0 w-full sm:w-1/2 lg:w-[55%] h-[650px] sm:h-[780px] pointer-events-none select-none z-0 overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src={cs.coverImage}
              alt=""
              className="w-full h-full object-cover object-top filter blur-[8px] opacity-40 sm:opacity-55 scale-110"
            />
            {/* Smooth Edge Fade Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-zinc-900 tracking-tight leading-[1.14] max-w-4xl">
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
          <div className="mt-8 flex flex-wrap gap-2 max-w-4xl">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] border border-zinc-200 bg-zinc-100/90 text-[11px] font-mono font-semibold tracking-wide text-zinc-700 shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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

          {/* Snapshot Grid Card */}
          {cs.snapshot && (
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-zinc-900 text-white border border-zinc-800 shadow-2xl">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-2">
                <span>📋</span> Project Snapshot
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
                <div>
                  <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-1">Client</div>
                  <div className="font-bold text-white">{cs.snapshot.client}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-1">Based In</div>
                  <div className="font-bold text-emerald-400">{cs.snapshot.basedIn}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-1">Marketplaces</div>
                  <div className="font-bold text-white">{cs.snapshot.marketplaces}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-1">Fulfillment</div>
                  <div className="font-bold text-purple-300">{cs.snapshot.fulfillment}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-1">Sourcing Origin</div>
                  <div className="font-bold text-zinc-300">{cs.snapshot.sourcing}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-1">Execution Timeline</div>
                  <div className="font-bold text-emerald-400">{cs.snapshot.timeline}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-1">Services Provided</div>
                  <div className="font-medium text-zinc-300">{cs.snapshot.services}</div>
                </div>
              </div>
            </div>
          )}

          {/* Key ROI Performance Metrics Highlights Grid */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {cs.metrics.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/50 border border-purple-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="text-[11px] font-mono font-bold text-purple-700 uppercase tracking-wider">
                    {m.label}
                  </div>
                  {m.before && (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100/90 border border-red-200 text-red-700 font-mono text-[10px] font-bold shadow-2xs">
                      Was: {m.before}
                    </span>
                  )}
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
            
            {/* Executive Overview */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight">
                Executive Overview
              </h2>
              <p className="text-zinc-700 leading-relaxed max-w-4xl text-sm sm:text-base">
                {cs.summary}
              </p>
            </div>

            {/* Market Context Stats */}
            {cs.marketContext && cs.marketContext.length > 0 && (() => {
              const ctxInfo = (() => {
                if (cs.slug.includes("etsy")) {
                  return {
                    icon: "🌐",
                    label: "Why Etsy? (Market Context)",
                    heading: "Global Artisanal Crafts & Creative Goods Opportunity",
                    sourceUrl: "https://investors.etsy.com",
                  };
                }
                if (cs.slug.includes("shopify")) {
                  return {
                    icon: "🛍️",
                    label: "Why Shopify? (Market Context)",
                    heading: "Direct-to-Consumer (DTC) E-Commerce & Brand Opportunity",
                    sourceUrl: "https://www.shopify.com",
                  };
                }
                if (cs.slug.includes("tiktok")) {
                  return {
                    icon: "🎵",
                    label: "Why TikTok Shop? (Market Context)",
                    heading: "Social Commerce & Short-Form Video E-Commerce Opportunity",
                    sourceUrl: "https://www.tiktok.com",
                  };
                }
                if (cs.slug.includes("fintech")) {
                  return {
                    icon: "🏦",
                    label: "Why Enterprise FinTech? (Market Context)",
                    heading: "US & Global Digital Banking & Wealth Tech Opportunity",
                    sourceUrl: "https://www.sec.gov",
                  };
                }
                if (cs.slug.includes("cloudscale") || cs.slug.includes("headless")) {
                  return {
                    icon: "⚡",
                    label: "Why Headless Commerce? (Market Context)",
                    heading: "Sub-Second Mobile Speed & GraphQL Architecture Opportunity",
                    sourceUrl: "https://shopify.dev",
                  };
                }
                if (cs.slug.includes("noon")) {
                  return {
                    icon: "🇸🇦",
                    label: "Why Noon.com? (Market Context)",
                    heading: "Gulf-Native Marketplace & Regional E-Commerce Opportunity",
                    sourceUrl: "https://www.mcit.gov.sa",
                  };
                }
                if (cs.slug.includes("amazon-saudi")) {
                  return {
                    icon: "🇸🇦",
                    label: "Why Amazon.sa? (Market Context)",
                    heading: "Saudi Arabia E-Commerce Growth & Market Opportunity",
                    sourceUrl: "https://www.mcit.gov.sa",
                  };
                }
                return {
                  icon: "🌍",
                  label: "Why Global Marketplaces? (Market Context)",
                  heading: "Cross-Border E-Commerce & Global Market Opportunity",
                  sourceUrl: "https://www.mcit.gov.sa",
                };
              })();

              return (
                <div className="space-y-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white border border-amber-500/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2 relative z-10">
                    <span>{ctxInfo.icon}</span> {ctxInfo.label}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white relative z-10">
                    {ctxInfo.heading}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-2 relative z-10">
                    {cs.marketContext.map((item, idx) => {
                      const isLongText = item.value.length > 10;
                      const isMediumText = item.value.length > 6;
                      const isSource = item.stat.toLowerCase().includes("source");

                      return (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 hover:border-amber-400/40 text-center flex flex-col justify-between items-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm group min-h-[110px]"
                        >
                          <div className="w-full flex-1 flex items-center justify-center">
                            {isSource ? (
                              <a
                                href={ctxInfo.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 underline decoration-amber-400/40 hover:decoration-amber-300 transition-colors uppercase tracking-wider flex items-center gap-1"
                              >
                                <span>{item.value}</span>
                                <span className="text-[10px]">↗</span>
                              </a>
                            ) : (
                              <div
                                className={
                                  isLongText
                                    ? "text-xs font-bold text-amber-400 font-sans tracking-wide leading-tight"
                                    : isMediumText
                                    ? "text-sm sm:text-base font-extrabold text-amber-400 font-mono tracking-tight"
                                    : "text-xl sm:text-2xl font-extrabold text-amber-400 font-mono tracking-tight"
                                }
                              >
                                {item.value}
                              </div>
                            )}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium mt-1.5 leading-snug w-full pt-1 border-t border-zinc-800/60">
                            {item.stat}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* The Challenge */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80">
              <div className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
                <span>⚠️</span> 01 / The Challenge &amp; Hurdles
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-zinc-900">
                Overcoming Cross-Border Selling Obstacles
              </h3>
              <p className="text-zinc-700 leading-relaxed text-xs sm:text-sm">
                {cs.challenge}
              </p>
            </div>

            {/* Our Approach: 6 Steps Roadmap */}
            {cs.steps && cs.steps.length > 0 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest">
                    02 / Our Approach
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight">
                    Our Proven 6-Step Execution Strategy
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {cs.steps.map((step) => (
                    <div
                      key={step.step}
                      className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-4 hover:border-purple-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-mono text-xs font-bold">
                          Step {step.step}
                        </span>
                        <h4 className="text-lg sm:text-xl font-serif font-bold text-zinc-900 flex-1 ml-3">
                          {step.title}
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                        {step.desc}
                      </p>

                      {step.bullets && step.bullets.length > 0 && (
                        <ul className="space-y-2 pt-2 text-xs font-sans text-zinc-700">
                          {step.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-purple-600 font-bold shrink-0">✓</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {step.outcome && (
                        <div className="mt-4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 font-medium flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">🎯 Outcome:</span>
                          <span>{step.outcome}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results Comparison Table */}
            {cs.resultsTable && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest">
                    03 / Performance Metrics
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight">
                    Before vs After {cs.snapshot?.timeline ? `${cs.snapshot.timeline.replace(/ Execution/i, "")} Transformation` : "Transformation"}
                  </h3>
                </div>

                <div className="rounded-2xl border border-zinc-200 overflow-hidden text-xs sm:text-sm shadow-sm">
                  <div className="grid grid-cols-12 bg-zinc-900 p-4 font-mono font-bold text-white uppercase tracking-wider">
                    <div className="col-span-4 sm:col-span-4">METRIC</div>
                    <div className="col-span-4 sm:col-span-4 text-red-400">BEFORE</div>
                    <div className="col-span-4 sm:col-span-4 text-emerald-400">
                      AFTER ({cs.snapshot?.timeline ? cs.snapshot.timeline.replace(/ Execution/i, "").toUpperCase() : "RESULT"})
                    </div>
                  </div>
                  {cs.resultsTable.map((row, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-12 p-4 items-center ${
                        idx % 2 === 0 ? "bg-white" : "bg-zinc-50/80"
                      } border-b border-zinc-200/60 last:border-0`}
                    >
                      <div className="col-span-4 sm:col-span-4 font-bold text-zinc-900 font-serif">
                        {row.metric}
                      </div>
                      <div className="col-span-4 sm:col-span-4 text-zinc-500 font-mono text-xs">
                        {row.before}
                      </div>
                      <div className="col-span-4 sm:col-span-4 text-emerald-700 font-mono font-bold text-xs sm:text-sm">
                        {row.after}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What Made It Work Section */}
            {cs.whatMadeItWork && (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950 via-zinc-900 to-black text-white space-y-4 shadow-xl">
                <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest flex items-center gap-2">
                  <span>💡</span> What Made It Work
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Core Success Factors
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {cs.whatMadeItWork.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1.5 backdrop-blur-xs">
                      <div className="text-xs font-mono font-bold text-purple-300">0{idx + 1}</div>
                      <p className="text-xs text-zinc-200 leading-relaxed font-sans">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Shopify vs Marketplace Comparison Table */}
            {cs.comparisonTable && cs.comparisonTable.length > 0 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
                    <span>⚖️</span> Strategic Channel Analysis
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight">
                    Shopify (Own Store) vs Amazon / Noon (Marketplace)
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                    Choosing between your own store and third-party marketplaces depends on your growth objectives. The best strategy often combines both: marketplaces for immediate sales volume, and your own Shopify DTC store for brand equity and customer retention.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 overflow-hidden text-xs sm:text-sm shadow-sm">
                  <div className="grid grid-cols-12 bg-zinc-900 p-4 font-mono font-bold text-white uppercase tracking-wider">
                    <div className="col-span-3 sm:col-span-3">FEATURE</div>
                    <div className="col-span-4 sm:col-span-4 text-purple-400">SHOPIFY (OWN STORE)</div>
                    <div className="col-span-5 sm:col-span-5 text-amber-400">AMAZON / NOON (MARKETPLACE)</div>
                  </div>
                  {cs.comparisonTable.map((row, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-12 p-4 items-center ${
                        idx % 2 === 0 ? "bg-white" : "bg-zinc-50/80"
                      } border-b border-zinc-200/60 last:border-0`}
                    >
                      <div className="col-span-3 sm:col-span-3 font-bold text-zinc-900 font-serif">
                        {row.feature}
                      </div>
                      <div className="col-span-4 sm:col-span-4 text-purple-950 font-medium text-xs sm:text-sm">
                        {row.col1}
                      </div>
                      <div className="col-span-5 sm:col-span-5 text-zinc-700 font-medium text-xs sm:text-sm">
                        {row.col2}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's Next Expansion Roadmap */}
            {cs.whatsNext && (
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/80 border border-emerald-200/80 space-y-3">
                <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest flex items-center gap-2">
                  <span>🚀</span> What&apos;s Next
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-950">
                  Scaling Multi-SKU Brand &amp; Regional Expansion
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                  {cs.whatsNext}
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Strategy Call Consultation Banner matching Homepage */}
        <ConsultationCtaBanner
          title="Want a Similar Result for Your Amazon Brand?"
          subtitle="Book a free Amazon strategy call with CEO M. Hafeez Khan. We'll review your product idea, margins, and the best route to market."
          buttonText="Book Free Strategy Call"
          buttonHref="/contact?package=Amazon+FBA+Strategy+Call"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
