import React from "react";
import Link from "next/link";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Works", href: "/works" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-white selection:text-black">
      <Header navigationData={navigationData} />

      <main className="flex-1 flex items-center justify-center px-6 py-24 sm:py-32">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <span>404 Error</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span>Page Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-sans">
            Lost in the Architecture?
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            The page you are looking for has been moved, renamed, or does not exist.
            Let&apos;s get you back to the high-converting parts of the site.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/5"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-slate-200 font-medium text-sm border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-slate-200 font-medium text-sm border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-colors"
            >
              View Case Studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium text-sm hover:bg-emerald-500/20 transition-colors"
            >
              Contact CEO Hafeez
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
