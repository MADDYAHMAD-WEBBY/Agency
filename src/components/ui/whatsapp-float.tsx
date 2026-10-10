"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/966532428200?text=" + encodeURIComponent("Hi! I came from your website and would like to discuss a project.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip badge on hover */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-xs font-medium text-white shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp +966 53 242 8200"
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        
        {/* Icon */}
        <FaWhatsapp className="w-7 h-7 relative z-10" />

        {/* Online Status Badge */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-300 border-2 border-zinc-950 rounded-full z-20" />
      </a>
    </div>
  );
}
