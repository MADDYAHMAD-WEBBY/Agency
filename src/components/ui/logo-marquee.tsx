"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type Logo = {
  src?: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  alt: string;
  width?: number;
  height?: number;
  color?: string;
  badgeTag?: string;
};

// Brand colors & subtle background glow for uniform visual hierarchy
const brandColorMap: Record<string, { color: string; bg: string }> = {
  Shopify: { color: "#96BF48", bg: "rgba(150, 191, 72, 0.1)" },
  GoHighLevel: { color: "#FF5722", bg: "rgba(255, 87, 34, 0.1)" },
  WooCommerce: { color: "#96588A", bg: "rgba(150, 88, 138, 0.1)" },
  WordPress: { color: "#21759B", bg: "rgba(33, 117, 155, 0.1)" },
  Stripe: { color: "#635BFF", bg: "rgba(99, 91, 255, 0.1)" },
  HubSpot: { color: "#FF7A59", bg: "rgba(255, 122, 89, 0.1)" },
  Zapier: { color: "#FF4A00", bg: "rgba(255, 74, 0, 0.1)" },
  "Make.com": { color: "#6B21A8", bg: "rgba(107, 33, 168, 0.1)" },
  Nvidia: { color: "#76B900", bg: "rgba(118, 185, 0, 0.1)" },
  Supabase: { color: "#3ECF8E", bg: "rgba(62, 207, 142, 0.1)" },
  OpenAI: { color: "#10A37F", bg: "rgba(16, 163, 127, 0.1)" },
  Vercel: { color: "#000000", bg: "rgba(0, 0, 0, 0.06)" },
  GitHub: { color: "#24292E", bg: "rgba(36, 41, 46, 0.08)" },
  Clerk: { color: "#6C47FF", bg: "rgba(108, 71, 255, 0.1)" },
  Turso: { color: "#00E699", bg: "rgba(0, 230, 153, 0.1)" },
  Claude: { color: "#D97706", bg: "rgba(217, 119, 6, 0.1)" },
};

const LogoItem = memo(function LogoItem({ logo }: { logo: Logo }) {
  const brandMeta = brandColorMap[logo.alt] || {
    color: logo.color || "#4B5563",
    bg: "rgba(243, 244, 246, 0.8)",
  };

  const IconComponent = logo.icon;

  return (
    <div
      className="group relative flex items-center justify-center gap-2.5 h-12 px-5 sm:px-6 rounded-full border border-zinc-200/80 bg-white shadow-2xs hover:shadow-md transition-all duration-300 select-none shrink-0"
      style={{
        borderColor: `${brandMeta.color}40`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: brandMeta.bg }}
      />
      
      {IconComponent ? (
        <IconComponent
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
          style={{ color: brandMeta.color }}
        />
      ) : logo.src ? (
        <img
          alt={logo.alt}
          src={logo.src}
          loading="eager"
          className="pointer-events-none h-5 sm:h-6 w-auto object-contain max-h-6 transition-transform duration-300 group-hover:scale-105"
        />
      ) : null}

      <span
        className="text-xs sm:text-sm font-bold tracking-tight text-zinc-900 group-hover:text-zinc-950 transition-colors"
      >
        {logo.alt}
      </span>
    </div>
  );
});

export const LogoMarquee = memo(function LogoMarquee({
  logos,
  className,
}: {
  logos: Logo[];
  className?: string;
}) {
  // Duplicating logos 3 times guarantees seamless 100% infinite marquee loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      className={cn(
        "w-full overflow-hidden py-2 sm:py-3 relative flex items-center h-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className="flex items-center flex-nowrap gap-4 sm:gap-6 w-max shrink-0 animate-logo-marquee"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {duplicatedLogos.map((logo, i) => (
          <LogoItem key={`${logo.alt}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";
export default LogoMarquee;
