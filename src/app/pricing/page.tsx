"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

/* ─── NAVIGATION ─── */
const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/#works" },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing", isActive: true },
  { title: "Contact", href: "/contact" },
];

/* ─── CURRENCIES & RATES ─── */
type Currency = "USD" | "PKR" | "AED";

const CURRENCY_CONFIG: Record<Currency, { symbol: string; rate: number; label: string; suffix: string }> = {
  USD: { symbol: "$", rate: 1, label: "USD ($)", suffix: "USD" },
  PKR: { symbol: "Rs ", rate: 280, label: "PKR (Rs)", suffix: "PKR" },
  AED: { symbol: "AED ", rate: 3.67, label: "AED (AED)", suffix: "AED" },
};

function formatPrice(usdAmount: number, currency: Currency): string {
  const cfg = CURRENCY_CONFIG[currency];
  const converted = Math.round(usdAmount * cfg.rate);
  return `${cfg.symbol}${converted.toLocaleString()}`;
}

/* ─── MODULAR CALCULATOR ITEMS (TAILORED TO OUR SERVICES) ─── */
interface CalcItem {
  id: string;
  title: string;
  category: string;
  unitLabel: string;
  usdUnitPrice: number;
  defaultQty: number;
}

const MODULAR_ITEMS: CalcItem[] = [
  {
    id: "web-pages",
    title: "Custom Web Page",
    category: "Web Development",
    unitLabel: "Per page",
    usdUnitPrice: 85,
    defaultQty: 0,
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Map Pack Setup",
    category: "Local SEO",
    unitLabel: "Per profile / location",
    usdUnitPrice: 299,
    defaultQty: 0,
  },
  {
    id: "citations",
    title: "Local NAP Citations Building",
    category: "Local SEO",
    unitLabel: "Per 10 citations",
    usdUnitPrice: 25,
    defaultQty: 0,
  },
  {
    id: "whatsapp-bot",
    title: "WhatsApp AI Chatbot & Qualification Bot",
    category: "AI & Automations",
    unitLabel: "Per bot integration",
    usdUnitPrice: 299,
    defaultQty: 0,
  },
  {
    id: "review-system",
    title: "Automated Review Request & Management",
    category: "Reputation",
    unitLabel: "Per business system",
    usdUnitPrice: 149,
    defaultQty: 0,
  },
  {
    id: "missed-call-sms",
    title: "5-Second Missed Call Instant SMS Text-Back",
    category: "AI & Automations",
    unitLabel: "Per phone line",
    usdUnitPrice: 149,
    defaultQty: 0,
  },
  {
    id: "crm-workflow",
    title: "CRM Lead Pipeline Automation Workflow",
    category: "AI & Automations",
    unitLabel: "Per workflow",
    usdUnitPrice: 199,
    defaultQty: 0,
  },
  {
    id: "booking-engine",
    title: "Direct Calendar Booking Engine",
    category: "Web Utilities",
    unitLabel: "Per system",
    usdUnitPrice: 149,
    defaultQty: 0,
  },
  {
    id: "copywriting",
    title: "Technical SEO Copywriting",
    category: "Content",
    unitLabel: "Per 1,000 words",
    usdUnitPrice: 99,
    defaultQty: 0,
  },
  {
    id: "branding-pack",
    title: "Vector Logo & Brand Identity Pack",
    category: "Branding",
    unitLabel: "Per package",
    usdUnitPrice: 249,
    defaultQty: 0,
  },
];

/* ─── PRICING MODELS DATA ─── */
const PRICING_MODELS = [
  {
    title: "Fixed Price",
    target: "Websites, Landing Pages & Small Automations",
    benefit: "100% Predictable Budget",
    desc: "Fixed scope, milestone deadlines, and zero unexpected invoices. You know the exact cost before line 1 of code is written.",
    icon: "🎯",
    bg: "bg-purple-50/60 border-purple-200/80",
  },
  {
    title: "Monthly Retainer",
    target: "Local SEO, GBP, Review Velocity & Maintenance",
    benefit: "Continuous Growth & Care",
    desc: "Dedicated monthly execution for ranking dominance, review automation, security patches, and ongoing performance tuning.",
    icon: "📈",
    bg: "bg-indigo-50/60 border-indigo-200/80",
  },
  {
    title: "Custom Quote",
    target: "Custom Software, SaaS Portals & Mobile Apps",
    benefit: "Tailored to Exact Scope",
    desc: "Architected around your specific business logic, user roles, API integrations, and scaling requirements with a paid discovery phase.",
    icon: "💎",
    bg: "bg-blue-50/60 border-blue-200/80",
  },
];

/* ─── SERVICE TIERS DATA ─── */
const WEB_DEV_TIERS = [
  {
    name: "Starter",
    subtitle: "Ideal for small businesses & landing pages",
    usdPrice: 499,
    period: "one-time",
    pages: "1–5 Custom Pages",
    design: "Customized Fast Template",
    seo: "Basic Technical & On-Page SEO",
    extras: "Click-to-Call, WhatsApp & Contact Form",
    support: "15 Days Post-Launch Support",
    highlight: false,
    badge: null,
  },
  {
    name: "Business",
    subtitle: "Most popular for growing brands & contractors",
    usdPrice: 999,
    period: "one-time",
    pages: "6–12 Custom Pages",
    design: "100% Fully Custom UI/UX",
    seo: "Advanced Core Web Vitals + On-Page SEO",
    extras: "Blog System + Automated WhatsApp Chatbot",
    support: "30 Days Post-Launch Support",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Premium",
    subtitle: "For high-volume platforms & custom portals",
    usdPrice: 1899,
    period: "one-time",
    pages: "12+ Custom Pages / Sub-Services",
    design: "Custom UI + Smooth Micro-Animations",
    seo: "Advanced SEO + Hyper-Local Schema Markup",
    extras: "Direct Booking Engine + CRM Pipeline Sync",
    support: "60 Days Post-Launch Support",
    highlight: false,
    badge: null,
  },
];

const LOCAL_SEO_TIERS = [
  {
    name: "Starter SEO",
    subtitle: "Essential local Map Pack visibility",
    usdPrice: 299,
    period: "/month",
    gbp: "GBP Profile Audit & Core Optimization",
    posts: "4 Geotagged Updates / month",
    citations: "Core Directories (NAP Consistency)",
    reviews: "Basic Review Direct Link & QR Setup",
    reporting: "Monthly PDF Performance Report",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth SEO",
    subtitle: "Top 3 Google Map Pack dominance engine",
    usdPrice: 599,
    period: "/month",
    gbp: "Full Map Pack 3-Pack SEO Strategy",
    posts: "8 Geotagged Updates / month",
    citations: "20–30 High-Authority Local Citations",
    reviews: "Automated SMS/WhatsApp Review Requests",
    reporting: "Monthly Report + 30-min Strategy Call",
    highlight: true,
    badge: "RECOMMENDED",
  },
  {
    name: "Premium SEO",
    subtitle: "Multi-location & competitive area takeover",
    usdPrice: 999,
    period: "/month",
    gbp: "Multi-Area Geo-Grid Rank Optimization",
    posts: "12+ Geotagged Updates & Q&A Posts",
    citations: "50+ Niche & Local Authority Citations",
    reviews: "Full Reputation Management + Auto-Replies",
    reporting: "Live Analytics Dashboard + Monthly Call",
    highlight: false,
    badge: null,
  },
];

const AI_AUTOMATION_TIERS = [
  {
    name: "Starter Workflow",
    subtitle: "Stop missing leads & automate basic data entry",
    usdSetup: 399,
    usdMonthly: 99,
    features: [
      "1–2 Core Workflows (Form → CRM → SMS)",
      "Instant 5-Second Lead Notification Alert",
      "Automated Email/WhatsApp Lead Follow-up",
      "Google Sheets / Airtable CRM Sync",
      "Standard Webhook Integration",
    ],
    highlight: false,
  },
  {
    name: "Growth Automation",
    subtitle: "24/7 AI chatbot & intelligent multi-channel routing",
    usdSetup: 799,
    usdMonthly: 199,
    features: [
      "24/7 Custom WhatsApp AI Chatbot",
      "Intelligent Lead Qualification & Booking",
      "Multi-Channel CRM Pipeline Integration",
      "Automated Post-Job Review Requests",
      "Monthly Workflow Optimization & Monitoring",
    ],
    highlight: true,
    badge: "BEST VALUE",
  },
  {
    name: "Advanced AI Agents",
    subtitle: "Custom LLM agents trained on your business data",
    usdSetup: 1499,
    usdMonthly: 399,
    features: [
      "Custom AI Voice Receptionist / Knowledge Agent",
      "RAG Vector Database Trained on Firm Documents",
      "Custom API Integrations (Stripe, HubSpot, Custom DB)",
      "Live Analytics & Call Recording Attribution",
      "Priority SLA Support & SLA Maintenance",
    ],
    highlight: false,
  },
];

/* ─── BUNDLES DATA ─── */
const BUNDLES = [
  {
    name: "Launch Bundle",
    subtitle: "Fast modern site + Google Maps setup + Missed call text-back",
    originalUsd: 898,
    bundleUsd: 749,
    savingsPct: "15% SAVINGS",
    includes: [
      "1–5 Page Fast Custom Web Site ($499 value)",
      "Google Business Profile Setup & Optimization ($299 value)",
      "5-Second Missed Call Instant SMS Text-Back ($100 value)",
    ],
    bg: "bg-white border-purple-200",
  },
  {
    name: "Local Growth Bundle",
    subtitle: "Full digital engine for local contractors, clinics & businesses",
    originalUsd: 1897,
    bundleUsd: 1499,
    savingsPct: "20% SAVINGS",
    includes: [
      "Custom 6–12 Page Web Platform ($999 value)",
      "Growth Local SEO & Map Pack Optimization ($599 value)",
      "24/7 WhatsApp AI Chatbot & Lead Automation ($299 value)",
    ],
    bg: "bg-gradient-to-b from-purple-50/90 to-white border-purple-300 shadow-lg",
    badge: "MOST POPULAR COMBO",
  },
  {
    name: "Scale Bundle",
    subtitle: "High-volume business suite with full AI workflows & SEO",
    originalUsd: 3297,
    bundleUsd: 2599,
    savingsPct: "20% SAVINGS",
    includes: [
      "Premium Web Platform with Animations ($1,899 value)",
      "Advanced AI Workflows & CRM Pipeline ($799 value)",
      "Growth Local SEO & Review Velocity ($599 value)",
    ],
    bg: "bg-white border-purple-200",
  },
];

/* ─── INCLUDED VS EXCLUDED ─── */
const INCLUDED_ITEMS = [
  "Custom UI/UX Design (No generic off-the-shelf bloatware)",
  "Sub-Second Fast Performance & 100/100 Core Web Vitals",
  "Clean, Scalable React/Next.js Codebase",
  "Basic On-Page SEO & OpenGraph Social Cards",
  "1-on-1 Hands-On CMS Training Video/Session",
  "Guaranteed Post-Launch Bug Fix Support Window",
  "100% Full Code Repository & Account Ownership Handoff",
];

const EXCLUDED_ITEMS = [
  "Domain Name Renewal (Billed directly by Registrar at ~ $12–$20/yr)",
  "Cloud Hosting / Vercel / WP Engine Subscriptions (Billed directly at cost)",
  "Third-party API / Twilio SMS / WhatsApp Messaging Usage Fees",
  "Google Ads / Meta Ads Marketing Spend",
  "Stock Image & Video License Purchases (if requested)",
  "Shopify / Webflow Monthly Platform Plan Fees",
];

/* ─── ADD-ONS ─── */
const ADD_ONS = [
  { name: "24/7 WhatsApp AI Chatbot", usd: 299, desc: "Lead capture & instant FAQ responder" },
  { name: "Direct Booking Engine", usd: 249, desc: "Cal.com / Calendly calendar integration" },
  { name: "Extra Custom Page", usd: 85, desc: "Design & development per additional page" },
  { name: "Logo & Brand Identity Pack", usd: 299, desc: "Vector logos, color palette & brand guidelines" },
  { name: "Technical SEO Copywriting", usd: 149, desc: "E-E-A-T optimized copy per 1,000 words" },
  { name: "Monthly Maintenance & Backups", usd: 99, desc: "Per month care, security & speed updates" },
  { name: "Rush Express Delivery (2x Speed)", usd: 349, desc: "Priority milestone delivery pipeline" },
  { name: "Multi-Language (Urdu RTL Support)", usd: 199, desc: "Full RTL layout & language toggle" },
];

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS = [
  {
    quote: "The fixed-price quote meant zero surprise costs. Our new Next.js site loads instantly, and the missed-call text-back system paid for the entire project in the first week.",
    author: "Tariq Mahmood",
    role: "Managing Director, CloudScale",
    metric: "+180% Inbound Calls",
  },
  {
    quote: "No agency runarounds or hidden monthly fees. Transparent pricing, direct communication with the lead engineer, and clear milestone progress throughout.",
    author: "Sarah Jenkins",
    role: "Founder, Zenith Health",
    metric: "100/100 Mobile Speed",
  },
];

/* ─── FAQS ─── */
const PRICING_FAQS = [
  {
    q: "Is the initial strategy consultation really 100% free?",
    a: "Yes, 100% free with zero obligation. We discuss your business goals, technical requirements, and suggest the exact tier or custom roadmap needed before any agreement.",
  },
  {
    q: "What factors determine the final price of a custom project?",
    a: "Price depends strictly on scope complexity: number of unique pages, custom API integrations (CRMs, payment gateways, vector databases), animation detail, and required turnaround time.",
  },
  {
    q: "Can I pay in milestone installments?",
    a: "Yes! Standard projects follow a 50% initial deposit and 50% upon final sign-off before deployment. Larger software/app builds can be split into 3–4 milestone installments.",
  },
  {
    q: "Are domain name and web hosting costs included in the price?",
    a: "Third-party infrastructure costs (domain name, Vercel/hosting server, WhatsApp/Twilio usage fees) are billed directly to your own credit card by the respective providers at cost. We set everything up under your account so you maintain 100% ownership.",
  },
  {
    q: "How many rounds of design revisions are included?",
    a: "Every package includes 2 to 3 structured revision rounds per milestone stage to ensure the final product matches your exact vision before coding.",
  },
  {
    q: "What happens after the included post-launch support window ends?",
    a: "After the included support period (15 to 60 days depending on tier), you can choose an optional monthly care plan ($99/mo) or simply request pay-as-you-go maintenance whenever needed.",
  },
  {
    q: "Is there a money-back or satisfaction guarantee?",
    a: "We work in transparent milestone stages. If during the initial UI design mockup phase you decide not to proceed, your deposit is fully refundable minus design time.",
  },
  {
    q: "Can you create a custom plan tailored to my exact budget?",
    a: "Absolutely. If our standard tiers don't fit your budget, we can adjust scope boundaries (e.g. starting with an MVP) to fit your target budget comfortably.",
  },
  {
    q: "Can I swap or remove a service from a combo bundle?",
    a: "Yes! Bundles are fully customizable. We can substitute components to match your exact business priorities while preserving bundle discount savings.",
  },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [activeTab, setActiveTab] = useState<"web" | "seo" | "ai" | "software">("web");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ─── SELECTED TIER PLAN STATE ─── */
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string; period?: string } | null>(null);

  const handleSelectPlan = (name: string, price: string, period: string = "") => {
    if (selectedPlan?.name === name) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan({ name, price, period });
    }
  };

  /* ─── MODULAR CALCULATOR STATE ─── */
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({});

  const updateItemQty = (id: string, delta: number) => {
    setItemQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const toggleItemCheck = (id: string) => {
    setItemQuantities((prev) => {
      const current = prev[id] || 0;
      return { ...prev, [id]: current > 0 ? 0 : 1 };
    });
  };

  /* CALCULATE TOTAL COST FOR MODULAR CALCULATOR */
  const selectedItems = MODULAR_ITEMS.map((item) => {
    const qty = itemQuantities[item.id] || 0;
    return {
      ...item,
      qty,
      lineTotalUsd: item.usdUnitPrice * qty,
    };
  }).filter((i) => i.qty > 0);

  const totalUsd = selectedItems.reduce((acc, item) => acc + item.lineTotalUsd, 0);

  /* GENERATE WHATSAPP ORDER LINK */
  const generateWhatsAppLink = () => {
    const phone = "966532428200";
    if (selectedItems.length === 0) {
      const msg = encodeURIComponent("Hi! I am interested in getting a custom project quote for my business.");
      return `https://wa.me/${phone}?text=${msg}`;
    }

    let messageText = `Hi! I would like to order a custom package on your website:\n\n`;
    selectedItems.forEach((item, idx) => {
      messageText += `${idx + 1}. ${item.title} (x${item.qty}) - ${formatPrice(item.lineTotalUsd, currency)}\n`;
    });
    messageText += `\n*Live Total:* ${formatPrice(totalUsd, currency)} (${currency})\n\nPlease confirm availability and next steps.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
  };

  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://mhkmarkedia.com/pricing#page",
        "url": "https://mhkmarkedia.com/pricing",
        "name": "Simple, Transparent Pricing & Custom Calculator | MHKMarkedia",
        "description": "Transparent web development, local SEO, and AI workflow packages. Build your custom estimate with zero hidden fees.",
        "publisher": {
          "@type": "Organization",
          "name": "MHKMarkedia",
          "url": "https://mhkmarkedia.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://mhkmarkedia.com/pricing#faq",
        "mainEntity": PRICING_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mhkmarkedia.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing",
            "item": "https://mhkmarkedia.com/pricing"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      {/* Header */}
      <Header navigationData={navigationData} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-[50px] sm:-mt-[70px] pt-24 sm:pt-28 pb-2 sm:pb-4 space-y-16 sm:space-y-24">

        {/* ─── 1. HERO SECTION ─── */}
        <section className="text-center max-w-4xl mx-auto pt-4 space-y-4">
          <p className="text-xs sm:text-sm font-mono font-bold tracking-widest text-purple-600 uppercase">
            Pricing &amp; Transparent Estimates
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Simple, Transparent Pricing.{" "}
            <span className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal animate-gradient-shift">
              No Hidden Charges.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed font-sans">
            Choose the right package for your business, build a modular custom estimate below, or request a direct project brief. Every item details exactly what is included with zero unexpected fees.
          </p>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#8B3DFF] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#782ee6] transition-all shadow-md active:scale-95"
            >
              Get a Free Custom Quote →
            </Link>
            <a
              href="#calculator-tool"
              className="px-6 py-3 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all"
            >
              Try Modular Price Calculator 🧮
            </a>
          </div>

          {/* ─── CURRENCY TOGGLE ─── */}
          <div className="pt-6 flex flex-col items-center gap-2">
            <span className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider">
              Select Your Preferred Currency:
            </span>
            <div className="inline-flex p-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 shadow-2xs gap-1">
              {(Object.keys(CURRENCY_CONFIG) as Currency[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    currency === c
                      ? "bg-[#8B3DFF] text-white shadow-sm scale-105"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {CURRENCY_CONFIG[c].label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. INTERACTIVE MODULAR CALCULATION TOOL (EXACTLY BELOW HERO) ─── */}
        <section id="calculator-tool" className="max-w-6xl mx-auto space-y-8 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 font-mono text-xs font-bold uppercase tracking-wider">
              🧮 Modular Custom Package Builder
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Build Your Custom Package
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Select one or more services and set quantities. Your custom total updates instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* LEFT COLUMN: MODULAR ITEMS LIST */}
            <div className="lg:col-span-7 space-y-3.5">
              {MODULAR_ITEMS.map((item) => {
                const qty = itemQuantities[item.id] || 0;
                const isChecked = qty > 0;

                return (
                  <div
                    key={item.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                      isChecked
                        ? "bg-purple-50/40 border-purple-400 shadow-md ring-1 ring-purple-400/30"
                        : "bg-white border-zinc-200/80 hover:border-purple-300 shadow-2xs"
                    }`}
                  >
                    {/* Item Checkbox & Information */}
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <button
                        type="button"
                        onClick={() => toggleItemCheck(item.id)}
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                          isChecked
                            ? "bg-[#8B3DFF] border-[#8B3DFF] text-white"
                            : "border-zinc-300 bg-zinc-50 hover:border-purple-400"
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-sm font-bold font-serif text-zinc-900 leading-snug truncate">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 mt-0.5">
                          <span className="font-bold text-purple-700">
                            {formatPrice(item.usdUnitPrice, currency)}
                          </span>
                          <span>·</span>
                          <span className="text-zinc-400">{item.unitLabel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Counter (- 0 +) */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateItemQty(item.id, -1)}
                        disabled={qty === 0}
                        className="w-8 h-8 rounded-xl border border-zinc-200 bg-zinc-100 hover:bg-purple-100 text-zinc-700 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center font-mono font-bold text-sm transition-all"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-mono font-extrabold text-sm text-zinc-900">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateItemQty(item.id, 1)}
                        className="w-8 h-8 rounded-xl border border-purple-300 bg-purple-100 hover:bg-purple-200 text-purple-900 flex items-center justify-center font-mono font-bold text-sm transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: STICKY LIVE TOTAL CARD */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-purple-200/90 shadow-xl space-y-6">
                
                <div className="space-y-1">
                  <p className="text-[11px] font-mono font-bold tracking-widest text-purple-600 uppercase">
                    Your Custom Package
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-zinc-900">
                    Live Total
                  </h3>
                  <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                    Select one or more services and set quantities. Your price updates instantly.
                  </p>
                </div>

                {/* Selected Items Breakdown List */}
                <div className="space-y-2 border-t border-b border-zinc-100 py-4 max-h-[220px] overflow-y-auto">
                  {selectedItems.length === 0 ? (
                    <p className="text-xs text-zinc-400 font-mono italic text-center py-4">
                      No services selected yet. Click any item on the left to customize.
                    </p>
                  ) : (
                    selectedItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-700 truncate max-w-[200px]">
                          {item.title} <strong className="text-purple-600">(x{item.qty})</strong>
                        </span>
                        <span className="font-bold text-zinc-900">
                          {formatPrice(item.lineTotalUsd, currency)}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Total Price Display */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                    Estimated Total
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 font-mono">
                    {formatPrice(totalUsd, currency)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <Link
                    href={selectedItems.length > 0
                      ? `/contact?package=${encodeURIComponent(`Custom Estimate: ${selectedItems.map(i => `${i.title} (x${i.qty})`).join(', ')}`)}&total=${encodeURIComponent(formatPrice(totalUsd, currency))}`
                      : `/contact?package=Custom+Estimate`
                    }
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#8B3DFF] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#782ee6] transition-all shadow-md active:scale-95"
                  >
                    <span>Get Started</span>
                    <span>→</span>
                  </Link>

                  <Link
                    href="/contact?package=Custom+Estimate+Strategy+Call"
                    className="w-full flex items-center justify-center py-3.5 rounded-full border border-purple-300 bg-purple-50/60 hover:bg-purple-100 text-purple-950 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Book a Free Strategy Call
                  </Link>
                </div>

                {/* Disclaimer Note */}
                <p className="text-[11px] text-zinc-400 font-sans italic text-center leading-relaxed">
                  Prices are per unit in {CURRENCY_CONFIG[currency].suffix}. Final scope and delivery timeline are confirmed during your project setup or free consultation.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 3. PRICING MODELS EXPLAINED ─── */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase mb-2">
              Engagement Models
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Three Flexible Ways to Work Together
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_MODELS.map((model) => (
              <div
                key={model.title}
                className={`p-6 rounded-2xl border ${model.bg} flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{model.icon}</span>
                    <span className="px-3 py-1 rounded-full bg-white/80 border border-zinc-200 text-[10px] font-mono font-bold uppercase tracking-wider text-purple-900">
                      {model.benefit}
                    </span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-zinc-900">{model.title}</h4>
                  <p className="text-xs font-mono font-semibold text-purple-700">{model.target}</p>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. SERVICE-WISE PACKAGES (3 TIERS) ─── */}
        <section className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase">
              Service Packages
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Select Your Service Category
            </h3>

            {/* Service Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("web")}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeTab === "web"
                    ? "bg-[#8B3DFF] text-white shadow-md scale-105"
                    : "bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-zinc-900"
                }`}
              >
                💻 Web Development
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("seo")}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeTab === "seo"
                    ? "bg-[#8B3DFF] text-white shadow-md scale-105"
                    : "bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-zinc-900"
                }`}
              >
                📍 Local SEO &amp; Maps
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ai")}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeTab === "ai"
                    ? "bg-[#8B3DFF] text-white shadow-md scale-105"
                    : "bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-zinc-900"
                }`}
              >
                ⚡ AI Workflows &amp; Bots
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("software")}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeTab === "software"
                    ? "bg-[#8B3DFF] text-white shadow-md scale-105"
                    : "bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-zinc-900"
                }`}
              >
                🚀 Custom Software / SaaS
              </button>
            </div>
          </div>

          {/* TAB 1: WEB DEVELOPMENT */}
          {activeTab === "web" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WEB_DEV_TIERS.map((tier) => {
                const isSelected = selectedPlan?.name === tier.name;
                const formattedPrice = formatPrice(tier.usdPrice, currency);
                return (
                  <div
                    key={tier.name}
                    onClick={() => handleSelectPlan(tier.name, formattedPrice, tier.period)}
                    className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-b from-emerald-50/90 via-white to-white border-2 border-emerald-500 shadow-2xl relative scale-[1.03] ring-4 ring-emerald-500/20"
                        : tier.highlight
                        ? "bg-gradient-to-b from-purple-50/90 via-white to-white border-2 border-purple-500 shadow-xl relative scale-[1.02] hover:border-purple-600"
                        : "bg-white border border-zinc-200 shadow-2xs hover:border-purple-300 hover:shadow-md"
                    }`}
                  >
                    {(isSelected || tier.badge) && (
                      <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm transition-colors ${
                        isSelected ? "bg-emerald-600 ring-2 ring-emerald-300" : "bg-[#8B3DFF]"
                      }`}>
                        {isSelected ? "SELECTED PLAN ✓" : tier.badge}
                      </span>
                    )}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-serif font-bold text-zinc-900">{tier.name}</h4>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
                          isSelected ? "bg-emerald-500 border-emerald-500 text-white" : "border-zinc-300 text-transparent"
                        }`}>
                          ✓
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 font-sans min-h-[32px]">{tier.subtitle}</p>

                      <div className="pt-2 border-t border-zinc-100">
                        <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 font-mono">
                          {formattedPrice}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 ml-1">/{tier.period}</span>
                      </div>

                      <ul className="space-y-3 pt-4 text-xs font-sans text-zinc-700">
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Pages:</strong> {tier.pages}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Design:</strong> {tier.design}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>SEO:</strong> {tier.seo}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Features:</strong> {tier.extras}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Support:</strong> {tier.support}</span>
                        </li>
                      </ul>
                    </div>

                    <Link
                      href={`/contact?package=${encodeURIComponent(tier.name)}&total=${encodeURIComponent(formattedPrice)}`}
                      className={`w-full text-center py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                        isSelected
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 ring-2 ring-emerald-400"
                          : tier.highlight
                          ? "bg-[#8B3DFF] text-white hover:bg-[#782ee6]"
                          : "bg-zinc-900 text-white hover:bg-black"
                      }`}
                    >
                      GET {tier.name.toUpperCase()} PLAN →
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: LOCAL SEO */}
          {activeTab === "seo" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LOCAL_SEO_TIERS.map((tier) => {
                const isSelected = selectedPlan?.name === tier.name;
                const formattedPrice = formatPrice(tier.usdPrice, currency);
                return (
                  <div
                    key={tier.name}
                    onClick={() => handleSelectPlan(tier.name, formattedPrice, tier.period)}
                    className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-b from-emerald-50/90 via-white to-white border-2 border-emerald-500 shadow-2xl relative scale-[1.03] ring-4 ring-emerald-500/20"
                        : tier.highlight
                        ? "bg-gradient-to-b from-purple-50/90 via-white to-white border-2 border-purple-500 shadow-xl relative scale-[1.02] hover:border-purple-600"
                        : "bg-white border border-zinc-200 shadow-2xs hover:border-purple-300 hover:shadow-md"
                    }`}
                  >
                    {(isSelected || tier.badge) && (
                      <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm transition-colors ${
                        isSelected ? "bg-emerald-600 ring-2 ring-emerald-300" : "bg-[#8B3DFF]"
                      }`}>
                        {isSelected ? "SELECTED PLAN ✓" : tier.badge}
                      </span>
                    )}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-serif font-bold text-zinc-900">{tier.name}</h4>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
                          isSelected ? "bg-emerald-500 border-emerald-500 text-white" : "border-zinc-300 text-transparent"
                        }`}>
                          ✓
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 font-sans min-h-[32px]">{tier.subtitle}</p>

                      <div className="pt-2 border-t border-zinc-100">
                        <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 font-mono">
                          {formattedPrice}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 ml-1">{tier.period}</span>
                      </div>

                      <ul className="space-y-3 pt-4 text-xs font-sans text-zinc-700">
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>GBP:</strong> {tier.gbp}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Posts:</strong> {tier.posts}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Citations:</strong> {tier.citations}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Reviews:</strong> {tier.reviews}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <span><strong>Reporting:</strong> {tier.reporting}</span>
                        </li>
                      </ul>
                    </div>

                    <Link
                      href={`/contact?package=${encodeURIComponent(tier.name)}&total=${encodeURIComponent(formattedPrice)}`}
                      className={`w-full text-center py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                        isSelected
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 ring-2 ring-emerald-400"
                          : tier.highlight
                          ? "bg-[#8B3DFF] text-white hover:bg-[#782ee6]"
                          : "bg-zinc-900 text-white hover:bg-black"
                      }`}
                    >
                      GET {tier.name.toUpperCase()} →
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: AI AUTOMATIONS */}
          {activeTab === "ai" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AI_AUTOMATION_TIERS.map((tier) => {
                const formattedSetup = formatPrice(tier.usdSetup, currency);
                const formattedMonthly = formatPrice(tier.usdMonthly, currency);
                const priceLabel = `${formattedSetup} setup + ${formattedMonthly}/mo`;
                const isSelected = selectedPlan?.name === tier.name;

                return (
                  <div
                    key={tier.name}
                    onClick={() => handleSelectPlan(tier.name, priceLabel, "setup")}
                    className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-b from-emerald-50/90 via-white to-white border-2 border-emerald-500 shadow-2xl relative scale-[1.03] ring-4 ring-emerald-500/20"
                        : tier.highlight
                        ? "bg-gradient-to-b from-purple-50/90 via-white to-white border-2 border-purple-500 shadow-xl relative scale-[1.02] hover:border-purple-600"
                        : "bg-white border border-zinc-200 shadow-2xs hover:border-purple-300 hover:shadow-md"
                    }`}
                  >
                    {(isSelected || tier.badge) && (
                      <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm transition-colors ${
                        isSelected ? "bg-emerald-600 ring-2 ring-emerald-300" : "bg-[#8B3DFF]"
                      }`}>
                        {isSelected ? "SELECTED PLAN ✓" : tier.badge}
                      </span>
                    )}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-serif font-bold text-zinc-900">{tier.name}</h4>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
                          isSelected ? "bg-emerald-500 border-emerald-500 text-white" : "border-zinc-300 text-transparent"
                        }`}>
                          ✓
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 font-sans min-h-[32px]">{tier.subtitle}</p>

                      <div className="pt-2 border-t border-zinc-100 space-y-1">
                        <div className="text-xs font-mono text-zinc-500">
                          Setup: <strong className="text-zinc-900 text-base">{formattedSetup}</strong>
                        </div>
                        <div className="text-xs font-mono text-purple-600 font-bold">
                          Maintenance: {formattedMonthly}/mo
                        </div>
                      </div>

                      <ul className="space-y-2.5 pt-4 text-xs font-sans text-zinc-700">
                        {tier.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2">
                            <span className="text-purple-600 font-bold">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/contact?package=${encodeURIComponent(tier.name)}&total=${encodeURIComponent(priceLabel)}`}
                      className={`w-full text-center py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                        isSelected
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 ring-2 ring-emerald-400"
                          : tier.highlight
                          ? "bg-[#8B3DFF] text-white hover:bg-[#782ee6]"
                          : "bg-zinc-900 text-white hover:bg-black"
                      }`}
                    >
                      BUILD {tier.name.toUpperCase()} PLAN →
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 4: CUSTOM SOFTWARE / APPS */}
          {activeTab === "software" && (
            <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-indigo-50/50 to-purple-50 border border-purple-200/80 space-y-6">
              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-purple-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                  Custom Enterprise Engineering
                </span>
                <h4 className="text-3xl font-serif font-bold text-zinc-900">
                  Custom Software, SaaS Portals &amp; Mobile Apps
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                  Complex web applications, SaaS MVP builds, and custom cross-platform mobile apps are scoped individually after a technical discovery audit.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-purple-200/60">
                <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-2">
                  <h5 className="font-serif font-bold text-zinc-900 text-base">Indicative MVP Range</h5>
                  <p className="text-2xl font-mono font-extrabold text-purple-700">
                    Starting from {formatPrice(2499, currency)}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Full functional MVP with React/Next.js, database architecture, authentication &amp; payment gateway integration.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-2">
                  <h5 className="font-serif font-bold text-zinc-900 text-base">Paid Discovery Phase</h5>
                  <p className="text-2xl font-mono font-extrabold text-purple-700">
                    {formatPrice(299, currency)} <span className="text-xs text-zinc-400 font-normal">(Fully Deductible)</span>
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Detailed technical blueprint, database schema, API map, and fixed milestone quotation. 100% credited toward your build cost.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Link
                  href="/contact?package=Custom+Software+Discovery"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#8B3DFF] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#782ee6] transition-all shadow-md active:scale-95"
                >
                  Book Discovery &amp; Scope Call →
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* ─── 5. BUNDLES (COMBO DEALS) ─── */}
        <section className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase">
              Combo Bundles
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              All-In-One Growth Bundles (Save Up to 20%)
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Combine web development, local SEO, and AI automations into a single integrated build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUNDLES.map((bundle) => (
              <div
                key={bundle.name}
                className={`p-6 sm:p-8 rounded-2xl border ${bundle.bg} flex flex-col justify-between space-y-6 relative`}
              >
                {bundle.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#8B3DFF] text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
                    {bundle.badge}
                  </span>
                )}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-serif font-bold text-zinc-900">{bundle.name}</h4>
                    <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 text-[10px] font-mono font-bold">
                      {bundle.savingsPct}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 font-sans">{bundle.subtitle}</p>

                  <div className="pt-2 border-t border-zinc-100">
                    <div className="text-xs font-mono text-zinc-400 line-through">
                      Was {formatPrice(bundle.originalUsd, currency)}
                    </div>
                    <div className="text-3xl font-extrabold text-purple-700 font-mono">
                      {formatPrice(bundle.bundleUsd, currency)}
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-3 text-xs font-sans text-zinc-700">
                    {bundle.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?package=${encodeURIComponent(bundle.name)}&total=${encodeURIComponent(formatPrice(bundle.bundleUsd, currency))}`}
                  className="w-full text-center py-3 rounded-full bg-zinc-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md active:scale-95"
                >
                  GET {bundle.name.toUpperCase()} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 6. WHAT IS INCLUDED VS NOT INCLUDED ─── */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase mb-2">
              Transparency &amp; Trust
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              What is Included vs Not Included
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* INCLUDED */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 space-y-4">
              <h4 className="text-lg font-serif font-bold text-emerald-950 flex items-center gap-2">
                <span>✅</span> Included in Your Project
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-800 font-medium">
                {INCLUDED_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXCLUDED */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
              <h4 className="text-lg font-serif font-bold text-zinc-900 flex items-center gap-2">
                <span>📌</span> Separate 3rd-Party Costs (Billed Direct)
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-700">
                {EXCLUDED_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-zinc-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 7. ADD-ONS ─── */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase mb-2">
              Modular Extras
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Popular Project Add-Ons
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADD_ONS.map((addon) => (
              <div key={addon.name} className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-2 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold font-serif text-zinc-900 leading-snug">{addon.name}</h5>
                  <p className="text-[11px] text-zinc-500 font-sans mt-1">{addon.desc}</p>
                </div>
                <div className="pt-2 border-t border-zinc-100 font-mono text-xs font-bold text-purple-700">
                  +{formatPrice(addon.usd, currency)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 8. PAYMENT TERMS ─── */}
        <section className="max-w-5xl mx-auto p-8 rounded-3xl bg-zinc-900 text-white space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              Payment &amp; Milestone Terms
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              Fair Payment Schedules &amp; Secure Channels
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-2">
              <h5 className="font-mono text-xs font-bold uppercase text-purple-300">50/50 Milestone Schedule</h5>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                50% advance deposit to initiate design &amp; architecture, and 50% balance upon final sign-off before server deployment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-2">
              <h5 className="font-mono text-xs font-bold uppercase text-purple-300">Flexible Payment Channels</h5>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Direct Bank Transfer, JazzCash / Easypaisa, Wise, and Stripe / PayPal for international clients.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-2">
              <h5 className="font-mono text-xs font-bold uppercase text-purple-300">Refund &amp; Cancellation Policy</h5>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                If during the initial UI design mockup phase you decide not to proceed, your deposit is fully refundable minus design time.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 9. WHY OUR PRICING IS DIFFERENT ─── */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase mb-2">
              The Engineering Difference
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Why Our Pricing &amp; Value Stand Out
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fixed Price Guarantee", desc: "No scope creep surprise bills. The agreed milestone price is the final price.", icon: "🔒" },
              { title: "100% Code & Asset Ownership", desc: "You own all source code repositories, hosting accounts, and domain credentials from day 1.", icon: "🗝️" },
              { title: "Single Dedicated Engineer", desc: "Direct communication with the full-stack engineer building your application—no junior middle-managers.", icon: "👤" },
              { title: "Post-Launch Support Included", desc: "Every tier includes hands-on post-launch bug fixes and training.", icon: "🛡️" },
              { title: "Free Initial Technical Audit", desc: "Zero commitment audit to evaluate your speed bottlenecks and conversion opportunities.", icon: "🔍" },
              { title: "Zero Agency Overhead", desc: "You pay strictly for clean code and performance results—not bloated agency office rent.", icon: "⚡" },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-white border border-zinc-200/80 space-y-2 shadow-2xs">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-serif font-bold text-zinc-900 text-base">{item.title}</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 10. PROOF AND TRUST ─── */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase mb-2">
              Client Feedback
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Proven Return on Investment
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="p-6 rounded-2xl bg-purple-50/40 border border-purple-200/80 space-y-4 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-zinc-700 italic font-medium leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-purple-100">
                  <div>
                    <div className="font-bold text-zinc-900 text-xs">{t.author}</div>
                    <div className="text-[11px] text-zinc-500 font-mono">{t.role}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-[10px] font-mono font-bold">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 11. FAQ ACCORDION ─── */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase mb-2">
              Clear Answers
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {PRICING_FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-zinc-900 hover:text-purple-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-purple-600 font-mono text-lg font-normal">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed font-sans border-t border-zinc-100 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ─── FINAL CTA ─── */}
      <ConsultationCtaBanner
        title="UNSURE WHICH PLAN FITS YOUR GOALS?"
        subtitle="Book a free 30-minute strategy call or send a direct project brief."
        subtext="Discuss your project scope, custom feature requirements, or timeline directly with a full-stack engineer. Guaranteed 24-hour response."
        buttonText="Book Your Free Call"
        buttonHref="/contact"
      />

      {/* ─── STICKY SELECTION CONVERSION BAR ─── */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl bg-zinc-950/95 text-white p-4 rounded-2xl border border-emerald-500/50 shadow-2xl backdrop-blur-md flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shrink-0 text-sm">
                ✓
              </div>
              <div>
                <div className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Selected Package</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-sm font-bold text-white font-serif">
                  {selectedPlan.name} <span className="text-emerald-300 font-mono font-normal">({selectedPlan.price})</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={`/contact?package=${encodeURIComponent(selectedPlan.name)}&total=${encodeURIComponent(selectedPlan.price)}`}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-95"
              >
                <span>Get Started →</span>
              </Link>
              <Link
                href={`/contact?package=${encodeURIComponent(selectedPlan.name)}`}
                className="hidden sm:inline-flex px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                Book Call 📅
              </Link>
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center text-xs font-mono transition-colors"
                title="Clear selection"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
