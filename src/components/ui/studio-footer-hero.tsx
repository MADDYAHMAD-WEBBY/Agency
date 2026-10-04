"use client";

import React from "react";
import FooterBackground from "./footer-background";
import BrandLogo from "./brand-logo";

export default function StudioFooterHero() {
  return (
    <section className="footer min-h-screen relative overflow-hidden" aria-label="Agency Hero Section">
      {/* Eye-gaze video background engine */}
      <FooterBackground />

      {/* Left Block: Agency Value Proposition & Services */}
      <div className="jobs">
        <span className="tag font-semibold text-emerald-800 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2 inline-block" />
          available for new projects
        </span>

        <h1 className="headline job-title text-zinc-900 tracking-tight font-extrabold">
          Engineering High-Converting
          <br />
          Web Experiences
        </h1>

        <nav className="footer-nav text-zinc-700 font-medium">
          <a href="#services" className="hover:text-black transition-colors flex items-center gap-1.5 group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            Headless WordPress
          </a>
          <a href="#works" className="hover:text-black transition-colors flex items-center gap-1.5 group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            Full-Stack Development
          </a>
          <a href="#about" className="hover:text-black transition-colors flex items-center gap-1.5 group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            Local SEO & Organic Growth
          </a>
          <a href="#contact" className="hover:text-black transition-colors flex items-center gap-1.5 group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            Core Web Vitals Speed
          </a>
        </nav>
      </div>

      {/* Center Brand Logo */}
      <div className="logo" role="img" aria-label="MHKMarkedia Studio Logo">
        <BrandLogo />
      </div>

      {/* Right Block: Call to Action & Social Proof */}
      <div className="contact">
        <span className="tag font-semibold text-indigo-900 tracking-wide">
          let’s build together
        </span>

        <div className="headline contact-links text-zinc-900 tracking-tight font-extrabold">
          <span>Ready to scale</span>
          <span>your digital presence?*</span>
        </div>

        <p className="note text-zinc-600 font-normal max-w-sm">
          *Guaranteed 95+ Core Web Vitals score & tailored organic growth strategies.
        </p>

        {/* Social Icons & CTA Action */}
        <div className="socials items-center gap-4 mt-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src="/linkedin.svg" alt="LinkedIn" width="35" height="35" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src="/instagram.svg" alt="Instagram" width="35" height="35" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src="/tiktok.svg" alt="TikTok" width="35" height="35" />
          </a>
        </div>
      </div>
    </section>
  );
}
