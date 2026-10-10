"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, Globe2 } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import BrandLogo from "@/components/ui/brand-logo";

const footerCategories = [
  {
    title: "Web & Software",
    links: [
      { text: "Next.js Web Applications", href: "/services/web-applications" },
      { text: "Headless WordPress Build", href: "/services/wordpress-website" },
      { text: "E-Commerce (Shopify & Woo)", href: "/services/ecommerce" },
      { text: "High-Converting Business Sites", href: "/services/business-websites" },
      { text: "Custom Software & SaaS", href: "/services/custom-software-saas" },
      { text: "Mobile Apps (iOS & Android)", href: "/services/mobile-apps" },
      { text: "REST & GraphQL API Connectors", href: "/services/api-integrations" },
    ],
  },
  {
    title: "AI & Local SEO",
    links: [
      { text: "n8n & Zapier Automations", href: "/services/workflow-automation" },
      { text: "24/7 WhatsApp AI Chatbots", href: "/services/ai-chatbots" },
      { text: "CRM Lead Pipeline Sync", href: "/services/crm-lead-automation" },
      { text: "Custom AI & LLM Integrations", href: "/services/custom-ai-integrations" },
      { text: "Google Map Pack #1 Rank", href: "/services/gbp-optimization" },
      { text: "Citation & Directory Sync", href: "/services/citation-building" },
      { text: "5-Star Review Automation", href: "/services/review-management" },
    ],
  },
  {
    title: "Industry Verticals",
    links: [
      { text: "E-Commerce & DTC Brands", href: "/industries/ecommerce-dtc" },
      { text: "SaaS & Tech Startups", href: "/industries/saas-tech-startups" },
      { text: "Healthcare & Clinics", href: "/industries/healthcare-clinics" },
      { text: "Real Estate & IDX Platforms", href: "/industries/real-estate-architecture" },
      { text: "Law & Legal Services", href: "/industries/law-legal-services" },
      { text: "Finance & Wealth Tech", href: "/industries/finance-wealth-tech" },
      { text: "Hospitality & Dining", href: "/industries/hospitality-dining" },
      { text: "Home Trades & Contractors", href: "/industries/home-trades-contractors" },
    ],
  },
  {
    title: "Company & Resources",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Featured Works & Case Studies", href: "/works" },
      { text: "Interactive Package Calculator", href: "/pricing" },
      { text: "Tech Insights & Guides", href: "/blog" },
      { text: "Schedule Strategy Call", href: "/contact", highlight: true },
    ],
  },
];

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://twitter.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
];

const contactInfo = [
  { icon: Mail, text: "hello@mhkmarkedia.com", href: "mailto:hello@mhkmarkedia.com" },
  { icon: FaWhatsapp, text: "+966 53 242 8200", href: "https://wa.me/966532428200", isExternal: true },
  { icon: MapPin, text: "Worldwide / Remote Execution", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-20 w-full bg-zinc-950 text-zinc-100 font-sans border-t border-zinc-800/80 pt-16 lg:pt-20 pb-10 overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-purple-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand Header & Bio */}
        <div className="pb-12 border-b border-zinc-800/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <BrandLogo variant="dark" />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl font-normal">
              Engineering sub-second Next.js web applications, Headless WordPress architectures, and AI-driven local SEO strategies that scale high-growth brands globally.
            </p>
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Select Q4 Engagements</span>
            </div>
          </div>

          {/* Direct Contact & Socials Bar */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-zinc-900/50 border border-zinc-800/80 p-5 rounded-xl backdrop-blur-xs">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Direct Contact
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
                {contactInfo.map(({ icon: Icon, text, href, isExternal }) => (
                  <a
                    key={text}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isExternal ? "text-emerald-400" : "text-purple-400"}`} />
                    <span>{text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 shrink-0">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Services & Pages Grid: 4 Clean Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-12 border-b border-zinc-800/60">
          {footerCategories.map((cat) => (
            <div key={cat.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 border-b border-zinc-800/80 pb-2.5">
                {cat.title}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {cat.links.map(({ text, href, highlight }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className={`inline-flex items-center gap-1.5 transition-colors ${
                        highlight
                          ? "font-semibold text-purple-400 hover:text-purple-300"
                          : "text-zinc-400 hover:text-zinc-100"
                      }`}
                    >
                      <span>{text}</span>
                      {highlight && <ArrowUpRight className="w-3.5 h-3.5" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Rights & Global Presence Bar (Centered) */}
        <div className="pt-8 flex items-center justify-center text-center text-xs text-zinc-500 font-mono">
          <div className="flex items-center justify-center gap-2">
            <Globe2 className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>&copy; {new Date().getFullYear()} MHKMarkedia. Designed &amp; Engineered for Scale.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
