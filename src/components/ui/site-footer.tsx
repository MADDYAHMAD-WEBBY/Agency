"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/ui/brand-logo";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#060608] text-white border-t border-purple-500/20 pt-16 sm:pt-20 pb-12 relative z-20 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[480px] h-[320px] rounded-full bg-purple-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links Grid: 4 Well-Arranged Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-zinc-800/80">
          
          {/* Column 1: Brand & E-E-A-T Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block text-white hover:opacity-90 transition-opacity">
              <BrandLogo />
            </Link>
            
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed pr-4 font-normal">
              MHKMarkedia engineers sub-second Next.js web applications, Headless WordPress architectures, and AI-driven SEO strategies that rank your business #1 on Google, ChatGPT, Perplexity &amp; Gemini.
            </p>

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Available for select Q4 client projects</span>
            </div>

            {/* Technical Trust Badges */}
            <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-300">
              <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-2xs">
                ⚡ Sub-Second Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-2xs">
                🛡️ E-E-A-T &amp; Bar Ethics
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-2xs">
                📍 Map Pack #1 SEO
              </span>
            </div>
          </div>

          {/* Column 2: Web Engineering & Apps (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-mono font-bold text-purple-400 text-xs uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2.5">
              Web &amp; Software Engineering
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link href="/services/custom-ai-integrations" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-purple-400">🔮</span> Custom AI Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/web-applications" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-blue-400">💻</span> Web Applications (Next.js)
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-amber-400">🛒</span> E-Commerce (Shopify &amp; Woo)
                </Link>
              </li>
              <li>
                <Link href="/services/business-websites" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-emerald-400">🌐</span> High-Converting Business Sites
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-webflow" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-cyan-400">⚡</span> Headless WordPress Build
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software-saas" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-indigo-400">🚀</span> Custom Software &amp; SaaS
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-pink-400">📱</span> Mobile Apps (iOS &amp; Android)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Local SEO & AI Automations (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-mono font-bold text-purple-400 text-xs uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2.5">
              Local SEO &amp; AI Automation
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link href="/services/gbp-optimization" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-emerald-400">📍</span> Google Map Pack #1 Rank
                </Link>
              </li>
              <li>
                <Link href="/services/citation-building" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-amber-400">📌</span> Citation &amp; NAP Sync
                </Link>
              </li>
              <li>
                <Link href="/services/review-management" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span> 5-Star Review Automation
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-purple-400">⚡</span> n8n &amp; Zapier Automations
                </Link>
              </li>
              <li>
                <Link href="/services/ai-chatbots" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-cyan-400">🤖</span> 24/7 WhatsApp AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/services/crm-lead-automation" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span className="text-blue-400">📊</span> CRM Lead Pipeline Sync
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-purple-300 font-bold hover:text-purple-200 hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span>💎</span> Interactive Package Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industry Verticals (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="font-mono font-bold text-purple-400 text-xs uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2.5">
              Verticals
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link href="/industries/ecommerce-dtc" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all block">
                  E-Commerce &amp; DTC
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare-clinics" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all block">
                  Healthcare &amp; Clinics
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate-architecture" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all block">
                  Real Estate &amp; IDX
                </Link>
              </li>
              <li>
                <Link href="/industries/law-legal-services" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all block">
                  Law &amp; Legal Services
                </Link>
              </li>
              <li>
                <Link href="/industries/finance-wealth-tech" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all block">
                  Finance &amp; Wealth Tech
                </Link>
              </li>
              <li>
                <Link href="/industries/hospitality-dining" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all block">
                  Hospitality &amp; Dining
                </Link>
              </li>
              <li>
                <Link href="/industries/home-trades-contractors" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all block">
                  Home Contractors
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Navigation & Social Icons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} MHKMarkedia. Designed &amp; Engineered for Enterprise Scale.</span>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zinc-300 font-medium font-sans">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/30 flex items-center justify-center transition-all hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/30 flex items-center justify-center transition-all hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-950/30 flex items-center justify-center transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.167-1.334A9.946 9.946 0 0012.01 22c5.507 0 9.991-4.479 9.991-9.986.001-5.507-4.482-9.986-9.989-9.986zm5.836 14.072c-.247.692-1.239 1.327-1.733 1.385-.458.053-1.045.1-3.045-.724-2.553-1.053-4.183-3.666-4.31-3.835-.125-.168-1.026-1.368-1.026-2.61 0-1.241.649-1.849.882-2.1.233-.251.509-.313.679-.313.169 0 .339.002.486.009.156.007.366-.059.573.438.212.509.722 1.759.785 1.887.063.127.106.276.021.444-.085.168-.127.275-.254.423-.127.148-.267.331-.381.444-.127.127-.26.265-.112.519.148.254.656 1.084 1.408 1.754.968.863 1.785 1.131 2.039 1.258.254.127.403.106.551-.063.148-.169.635-.741.805-.995.169-.254.338-.211.572-.127.233.084 1.482.699 1.736.826.254.127.423.19.486.296.063.106.063.614-.184 1.306z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
