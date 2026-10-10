"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowDown, ChevronUp, Info, X } from "lucide-react";
import { useVideoScrub } from "@/hooks/useVideoScrub";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260821_114821_a8ca298f-be2c-4613-a4dd-51b69e16bbde.mp4";

const DARK = "#1D3045";

export default function VectrusScrollHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { videoRef, canvasRef, scrollProgress, canvasLive, handleLoadedMetadata } =
    useVideoScrub(VIDEO_URL, containerRef);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Sequential Section Opacities based on Scroll Progress (p)
  const p = scrollProgress;

  // Section 1 Opacity: p < 0.20 => 1, else max(0, 1 - (p - 0.20) / 0.08)
  const s1Opacity = p < 0.2 ? 1 : Math.max(0, 1 - (p - 0.2) / 0.08);

  // Section 2 Opacity: p < 0.32 => 0, p < 0.40 => (p - 0.32) / 0.08, p < 0.55 => 1, else max(0, 1 - (p - 0.55) / 0.08)
  const s2Opacity =
    p < 0.32 ? 0 : p < 0.4 ? (p - 0.32) / 0.08 : p < 0.55 ? 1 : Math.max(0, 1 - (p - 0.55) / 0.08);

  // Section 3 Opacity: p < 0.67 => 0, p < 0.75 => (p - 0.67) / 0.08, else 1
  const s3Opacity = p < 0.67 ? 0 : p < 0.75 ? (p - 0.67) / 0.08 : 1;

  // Color flips at p > 0.55: DARK -> white
  const isLightTheme = p <= 0.55;
  const navTextColor = isLightTheme ? DARK : "#FFFFFF";

  const navLinks = [
    { label: "ABOUT", href: "/#about", active: true },
    { label: "SERVICES", href: "/#services" },
    { label: "WORKS", href: "/works" },
    { label: "PRICING", href: "/pricing" },
    { label: "CONTACT", href: "/contact" },
  ];

  if (!mounted) {
    return (
      <section className="relative h-[500vh] bg-[#1D3045]">
        <div className="sticky top-0 w-full h-screen bg-[#1D3045]" />
      </section>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full font-sans select-none"
      style={{
        fontFamily: "'Helvetica Neue ME', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Head Link for Helvetica Neue ME font */}
      <link
        href="https://db.onlinewebfonts.com/c/95cecf452d3208890088a5b4c19c7ecf?family=Helvetica+Neue+ME"
        rel="stylesheet"
      />

      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Full-bleed Video (Underneath Canvas) */}
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* High-Performance Canvas for Smooth Frame Scrubbing */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
          style={{ opacity: canvasLive ? 1 : 0 }}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">
          {/* NAVBAR */}
          <header
            className="w-full px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-6 flex items-center justify-between pointer-events-auto transition-colors duration-500 z-50"
            style={{ color: navTextColor }}
          >
            {/* Mobile Hamburger (< lg) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-2 focus:outline-hidden"
              aria-label="Open Mobile Menu"
            >
              <span className="w-[24px] h-[2px] transition-colors duration-500" style={{ backgroundColor: navTextColor }} />
              <span className="w-[24px] h-[2px] transition-colors duration-500" style={{ backgroundColor: navTextColor }} />
              <span className="w-[16px] h-[2px] transition-colors duration-500" style={{ backgroundColor: navTextColor }} />
            </button>

            {/* Desktop Navigation Links (lg+) */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href || "#"}
                  className={`relative text-xs tracking-[0.15em] uppercase font-medium transition-opacity duration-200 hover:opacity-70 animate-nav-entry`}
                  style={{
                    animationDelay: `${i * 80 + 100}ms`,
                  }}
                >
                  {link.label}
                  {link.active && (
                    <span
                      className="absolute left-0 -bottom-3 w-full h-[2px] transition-colors duration-500"
                      style={{ backgroundColor: navTextColor }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Right Cluster */}
            <div className="flex items-center gap-6 animate-nav-entry" style={{ animationDelay: "500ms" }}>
              {/* NEWS Indicator */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs tracking-[0.2em] uppercase font-medium">NEWS</span>
                <div
                  className="w-[20px] h-[20px] rounded-full flex items-center justify-center transition-colors duration-500"
                  style={{ backgroundColor: navTextColor }}
                >
                  <Info className="w-[10px] h-[10px]" style={{ color: isLightTheme ? "#FFFFFF" : DARK }} />
                </div>
              </div>

              {/* MENU Label / Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
              >
                MENU
              </button>
            </div>
          </header>

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* SECTION 1: Hero Left Aligned */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          <section
            className="absolute inset-0 flex items-center px-6 sm:px-8 md:px-20 lg:px-32 transition-opacity duration-100 ease-out"
            style={{
              opacity: s1Opacity,
              pointerEvents: s1Opacity > 0.1 ? "auto" : "none",
            }}
          >
            <div className="max-w-4xl text-left">
              {/* Title */}
              <h1
                className={`text-[clamp(2rem,5vw,5rem)] font-light uppercase leading-[1.2] transition-all duration-800 ${
                  s1Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  color: DARK,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0ms",
                }}
              >
                Advancing resources for a cleaner future
              </h1>

              {/* Subtitle */}
              <p
                className={`mt-6 text-sm tracking-[0.3em] uppercase font-medium transition-all duration-800 ${
                  s1Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  color: "#1D304590",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "150ms",
                }}
              >
                Sustainable power with purpose
              </p>
            </div>

            {/* Bottom Right Circle Button */}
            <button
              className={`absolute bottom-12 right-6 sm:right-8 md:right-12 w-[48px] h-[48px] rounded-full border flex items-center justify-center hover:opacity-70 transition-all duration-800 ${
                s1Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                borderColor: "#1D304580",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "300ms",
              }}
              aria-label="Next Section"
            >
              <ArrowRight className="w-[18px] h-[18px]" style={{ color: DARK }} />
            </button>
          </section>

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* SECTION 2: Center Aligned */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          <section
            className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 transition-opacity duration-100 ease-out"
            style={{
              opacity: s2Opacity,
              pointerEvents: s2Opacity > 0.1 ? "auto" : "none",
            }}
          >
            <div className="max-w-[900px] text-center">
              <h2
                className={`text-[clamp(1.5rem,4.5vw,4.5rem)] font-extralight tracking-wide leading-[1.3] uppercase transition-all duration-800 ${
                  s2Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  color: DARK,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0ms",
                }}
              >
                We build lasting partnerships with vision{" "}
                <span style={{ color: "#1D3045CC" }}>and precision</span>{" "}
                <span style={{ color: "#1D304580" }}>across every frontier</span>
              </h2>
            </div>

            {/* Right Column Controls */}
            <div className="absolute bottom-16 right-6 sm:right-8 md:right-12 flex flex-col items-center gap-4">
              <button
                className={`w-[48px] h-[48px] rounded-full border flex items-center justify-center transition-all duration-800 ${
                  s2Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  borderColor: "#1D304566",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "200ms",
                }}
              >
                <ArrowDown className="w-[18px] h-[18px]" style={{ color: DARK }} />
              </button>

              {/* Three Dots */}
              <div
                className={`flex flex-col items-center gap-2 mt-4 transition-all duration-800 ${
                  s2Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "350ms",
                }}
              >
                <span className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: DARK }} />
                <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: "#1D304566" }} />
                <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: "#1D304566" }} />
              </div>

              {/* Up Chevron */}
              <button
                className={`w-[40px] h-[40px] rounded-full border flex items-center justify-center mt-2 transition-all duration-800 ${
                  s2Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  borderColor: "#1D30454D",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "500ms",
                }}
              >
                <ChevronUp className="w-[16px] h-[16px]" style={{ color: "#1D3045CC" }} />
              </button>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* SECTION 3: Right Aligned White Type */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          <section
            className="absolute inset-0 flex items-center justify-end px-6 sm:px-8 md:px-20 lg:px-32 transition-opacity duration-100 ease-out"
            style={{
              opacity: s3Opacity,
              pointerEvents: s3Opacity > 0.1 ? "auto" : "none",
            }}
          >
            <div className="max-w-2xl text-left">
              {/* Eyebrow */}
              <p
                className={`text-white/60 text-lg tracking-wide mb-4 transition-all duration-800 ${
                  s3Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0ms",
                }}
              >
                Halder | Nordvik
              </p>

              {/* H2 */}
              <h2
                className={`text-[clamp(2rem,4vw,4rem)] font-light text-white leading-[1.2] uppercase tracking-wide mb-8 transition-all duration-800 ${
                  s3Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "150ms",
                }}
              >
                Fueling ambition,
                <br />
                shaping tomorrow.
              </h2>

              {/* CTA Row */}
              <div
                className={`flex items-center gap-4 transition-all duration-800 ${
                  s3Opacity > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "300ms",
                }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 text-sm tracking-[0.3em] text-white/80 hover:text-white uppercase font-medium transition-colors group"
                >
                  <span>Contact Hafeez</span>
                  <span className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-[16px] h-[16px] text-gray-800" />
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* MOBILE MENU OVERLAY */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ backgroundColor: DARK }}
      >
        <div
          className={`w-full h-full flex flex-col justify-between transition-transform duration-500 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          {/* Close Button Header */}
          <div className="w-full flex justify-end px-6 sm:px-8 pt-8 sm:pt-12">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-[40px] h-[40px] rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-[18px] h-[18px]" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col justify-center px-8 sm:px-12 py-3 gap-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href || "#"}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl sm:text-3xl font-light tracking-wide uppercase transition-all duration-300 ${
                  link.active ? "text-white" : "text-white/60 hover:text-white"
                }`}
                style={{
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${idx * 60}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] uppercase text-white/60 px-8 sm:px-12 pb-10">
            <span>NEWS</span>
            <span>CONTACT</span>
          </div>
        </div>
      </div>

      {/* Nav Entrance Keyframe Animation */}
      <style jsx global>{`
        @keyframes navEntry {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-nav-entry {
          animation: navEntry 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
