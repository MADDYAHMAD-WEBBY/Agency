"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/ui/brand-logo";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-zinc-950 text-white border-t border-zinc-800/80 py-16 sm:py-20 relative z-20 overflow-hidden">
      {/* Background Soft Purple Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-purple-900/15 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white text-black px-5 py-2 rounded-full font-bold text-base tracking-tight inline-flex items-center gap-2">
                <span>MHKMarkedia</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Engineering high-converting Next.js web applications, sub-second Headless WordPress solutions, and dominant Local SEO growth engines.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select Q4 client projects</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-bold text-zinc-300 uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">All Services & Capabilities</Link>
              </li>
              <li>
                <Link href="/services/custom-ai-integrations" className="hover:text-purple-400 transition-colors text-purple-300 font-semibold">🔮 Custom AI Integrations</Link>
              </li>
              <li>
                <Link href="/services/crm-lead-automation" className="hover:text-purple-400 transition-colors">📊 CRM & Lead Automation</Link>
              </li>
              <li>
                <Link href="/services/ai-chatbots" className="hover:text-purple-400 transition-colors">🤖 AI Chatbots & Agents</Link>
              </li>
              <li>
                <Link href="/services/workflow-automation" className="hover:text-purple-400 transition-colors">⚡ Workflow Automation</Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-purple-400 transition-colors">🛒 E-Commerce (Shopify & WooCommerce)</Link>
              </li>
              <li>
                <Link href="/services/business-websites" className="hover:text-purple-400 transition-colors">🌐 Business Websites</Link>
              </li>
              <li>
                <Link href="/services/web-applications" className="hover:text-purple-400 transition-colors">💻 Web Applications (React & Next.js)</Link>
              </li>
              <li>
                <Link href="/services/custom-software-saas" className="hover:text-purple-400 transition-colors">🚀 Custom Software & SaaS Solutions</Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-purple-400 transition-colors">📱 Mobile Apps (iOS & Android)</Link>
              </li>
              <li>
                <Link href="/services/api-integrations" className="hover:text-purple-400 transition-colors">🔌 API & Software Integrations</Link>
              </li>
              <li>
                <Link href="/services/gbp-optimization" className="hover:text-purple-400 transition-colors">📍 Google Business Profile (GBP) Optimization</Link>
              </li>
              <li>
                <Link href="/services/citation-building" className="hover:text-purple-400 transition-colors">📌 Local Citation Building & NAP Sync</Link>
              </li>
              <li>
                <Link href="/services/review-management" className="hover:text-purple-400 transition-colors">⭐ Review Management & Reputation Automation</Link>
              </li>
              <li>
                <Link href="/services/wordpress-website" className="hover:text-purple-400 transition-colors">Custom WordPress Development</Link>
              </li>
              <li>
                <Link href="/#works" className="hover:text-white transition-colors">Portfolio & Works</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <div className="font-bold text-zinc-300 uppercase tracking-wider mb-4">
              Direct Strategy Inquiry
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Have an architecture or full-stack web engineering question? Speak directly with the MHKMarkedia team.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors shadow-md"
              >
                <span>Book Strategy Call</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} MHKMarkedia. Designed & Engineered for Enterprise Scale.
          </div>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
