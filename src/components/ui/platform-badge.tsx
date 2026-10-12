import React from "react";
import { FaAmazon, FaShopify, FaEtsy, FaTiktok } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { ShieldCheck } from "lucide-react";

interface PlatformBadgeProps {
  slug: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PlatformBadge({
  slug,
  size = "md",
  className = "",
}: PlatformBadgeProps) {
  const isLarge = size === "lg";

  const paddingClass = isLarge
    ? "px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm gap-2"
    : "px-2.5 py-1 text-[10px] sm:text-[11px] gap-1.5";

  const iconClass = isLarge ? "w-4 h-4 sm:w-5 sm:h-5" : "w-3.5 h-3.5";

  if (slug.includes("amazon-fba") || slug.includes("ksa-to-usa")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-zinc-950/90 backdrop-blur-md border border-amber-500/40 text-white shadow-xl font-bold font-sans ${paddingClass} ${className}`}
      >
        <FaAmazon className={`${iconClass} text-[#FF9900]`} />
        <span className="tracking-tight text-white">Amazon FBA</span>
      </div>
    );
  }

  if (slug.includes("amazon-saudi") || slug.includes("amazon.sa")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-zinc-950/90 backdrop-blur-md border border-amber-500/40 text-white shadow-xl font-bold font-sans ${paddingClass} ${className}`}
      >
        <FaAmazon className={`${iconClass} text-[#FF9900]`} />
        <span className="tracking-tight text-white">Amazon.sa</span>
      </div>
    );
  }

  if (slug.includes("noon")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-[#FEEE00] text-black border border-yellow-300 shadow-xl font-black font-sans ${paddingClass} ${className}`}
      >
        <span
          className={`rounded-full bg-black flex items-center justify-center text-[#FEEE00] font-black ${
            isLarge ? "w-3.5 h-3.5 text-[9px]" : "w-2.5 h-2.5 text-[7px]"
          }`}
        >
          ن
        </span>
        <span className="tracking-tight">noon</span>
      </div>
    );
  }

  if (slug.includes("shopify")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-zinc-950/90 backdrop-blur-md border border-emerald-500/40 text-white shadow-xl font-bold font-sans ${paddingClass} ${className}`}
      >
        <FaShopify className={`${iconClass} text-[#95BF47]`} />
        <span className="tracking-tight text-white">Shopify DTC</span>
      </div>
    );
  }

  if (slug.includes("etsy")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-zinc-950/90 backdrop-blur-md border border-orange-500/40 text-white shadow-xl font-bold font-sans ${paddingClass} ${className}`}
      >
        <FaEtsy className={`${iconClass} text-[#F16521]`} />
        <span className="tracking-tight text-white">Etsy Global</span>
      </div>
    );
  }

  if (slug.includes("tiktok")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-zinc-950/90 backdrop-blur-md border border-pink-500/40 text-white shadow-xl font-bold font-sans ${paddingClass} ${className}`}
      >
        <FaTiktok className={`${iconClass} text-[#FE2C55]`} />
        <span className="tracking-tight text-white">TikTok Shop</span>
      </div>
    );
  }

  if (slug.includes("cloudscale") || slug.includes("headless")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-zinc-950/90 backdrop-blur-md border border-purple-500/40 text-white shadow-xl font-bold font-sans ${paddingClass} ${className}`}
      >
        <SiNextdotjs className={`${iconClass} text-white`} />
        <span className="tracking-tight text-white">
          {isLarge ? "Next.js 16 + Shopify API" : "Next.js 16"}
        </span>
      </div>
    );
  }

  if (slug.includes("fintech")) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-zinc-950/90 backdrop-blur-md border border-blue-500/40 text-white shadow-xl font-bold font-sans ${paddingClass} ${className}`}
      >
        <ShieldCheck className={`${iconClass} text-blue-400`} />
        <span className="tracking-tight text-white">
          {isLarge ? "Enterprise FinTech Cloud" : "FinTech Cloud"}
        </span>
      </div>
    );
  }

  return null;
}
