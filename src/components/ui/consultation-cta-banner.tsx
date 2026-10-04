"use client";

import React from "react";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

interface BannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function ConsultationCtaBanner({
  title = "Ready for similar business results?",
  subtitle = "Book a direct technical architecture consultation with CEO M. Hafeez Khan today.",
  buttonText = "Book CEO Strategy Call",
}: BannerProps) {
  return (
    <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950 via-zinc-900 to-indigo-950 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
      <div className="space-y-2 max-w-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300">
          {subtitle}
        </p>
      </div>

      <div className="shrink-0">
        <AnimatedPillButton
          text={buttonText}
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/#contact";
            }
          }}
        />
      </div>
    </div>
  );
}
