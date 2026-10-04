"use client";

import React from "react";
// Official Claude starburst brand emblem icon
import { LogoMarquee, Logo } from "@/components/ui/logo-marquee";
import {
  SiShopify,
  SiWoocommerce,
  SiWordpress,
  SiStripe,
  SiHubspot,
  SiZapier,
  SiNvidia,
  SiSupabase,
  SiVercel,
  SiGithub,
  SiClerk,
  SiTurso,
  SiClaude,
  SiMake,
} from "react-icons/si";

// GoHighLevel Custom Brand Icon Component
const GoHighLevelIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 2L2 7.5l10 5.5 10-5.5L12 2zm0 4.2L17.5 9 12 12 6.5 9 12 6.2zM4 9.8v7.2l7 3.8v-7.2L4 9.8zm16 0l-7 3.8v7.2l7-3.8V9.8z"/>
  </svg>
);

// OpenAI Custom Brand Icon Component
const OpenAiIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3423 8.787a4.485 4.485 0 0 1 2.3655-1.9728V12.4a.7665.7665 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3423 8.787zm15.6304 3.0184-5.8428-3.3733 2.02-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6765zm2.706-2.6775l-.1419-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0L9.1304 9.653V7.3206a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6754 4.6606zm-10.7416-6.666a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369L7.48 12.611a.071.071 0 0 1-.038-.052V6.9764a4.504 4.504 0 0 1 4.4945-4.4945zm-1.6322 9.479 2.692-1.5546 2.692 1.5546v3.1092l-2.692 1.5546-2.692-1.5546z"/>
  </svg>
);

export const logos: Logo[] = [
  {
    alt: "GoHighLevel",
    icon: GoHighLevelIcon,
    color: "#FF5722",
  },
  {
    alt: "Shopify",
    icon: SiShopify,
    color: "#96BF48",
  },
  {
    alt: "WooCommerce",
    icon: SiWoocommerce,
    color: "#96588A",
  },
  {
    alt: "WordPress",
    icon: SiWordpress,
    color: "#21759B",
  },
  {
    alt: "Stripe",
    icon: SiStripe,
    color: "#635BFF",
  },
  {
    alt: "HubSpot",
    icon: SiHubspot,
    color: "#FF7A59",
  },
  {
    alt: "Zapier",
    icon: SiZapier,
    color: "#FF4A00",
  },
  {
    alt: "Make.com",
    icon: SiMake,
    color: "#6B21A8",
  },
  {
    alt: "OpenAI",
    icon: OpenAiIcon,
    color: "#10A37F",
  },
  {
    alt: "Nvidia",
    icon: SiNvidia,
    color: "#76B900",
  },
  {
    alt: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  {
    alt: "Vercel",
    icon: SiVercel,
    color: "#000000",
  },
  {
    alt: "GitHub",
    icon: SiGithub,
    color: "#24292E",
  },
  {
    alt: "Clerk",
    icon: SiClerk,
    color: "#6C47FF",
  },
  {
    alt: "Claude",
    icon: SiClaude,
    color: "#D97706",
  },
  {
    alt: "Turso",
    icon: SiTurso,
    color: "#00E699",
  },
];

export default function LogoMarqueePreview() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 border-y border-zinc-100/80 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-widest text-zinc-400 uppercase mb-6">
          Powering High-Growth E-Commerce, CRMs, AI & Enterprise Tech Stacks
        </p>
        <LogoMarquee logos={logos} />
      </div>
    </section>
  );
}
