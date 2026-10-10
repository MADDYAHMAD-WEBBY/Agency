"use client";

import React from "react";
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
  SiTiktok,
  SiEtsy,
  SiEbay,
  SiBigcommerce,
  SiSquarespace,
} from "react-icons/si";
import { FaAmazon, FaMagento, FaMeta, FaLinkedin, FaPinterest, FaSnapchat, FaGoogle } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";

// Official Google Ads Brand Logo Component ("A" shape: Yellow left bar, Blue right capsule, Green bottom circle)
const GoogleAdsIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className={className} style={style}>
    {/* Yellow Left Bar */}
    <path d="M14.5 74.5L46.5 19L66.5 53.5L34.5 109Z" fill="#FABB05" />
    {/* Blue Right Pill */}
    <g transform="translate(61, 47) rotate(30)">
      <rect x="-12" y="-36" width="24" height="72" rx="12" fill="#4285F4" />
    </g>
    {/* Green Bottom-Left Circle */}
    <circle cx="24.5" cy="74.5" r="14.5" fill="#34A853" />
  </svg>
);

// Official GoHighLevel (GHL) 3-Arrow Brand Logo Component
const GoHighLevelIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className={className} style={style}>
    {/* Left Yellow Arrow */}
    <path d="M4 34L20 8L36 34H27V92H13V34H4Z" fill="#F59E0B" />
    <path d="M20 8L36 34H20V8Z" fill="#000000" opacity="0.15" />

    {/* Middle Blue Arrow */}
    <path d="M34 54L50 28L66 54H57V92H43V54H34Z" fill="#3B82F6" />
    <path d="M50 28L66 54H50V28Z" fill="#000000" opacity="0.15" />

    {/* Right Green Arrow */}
    <path d="M64 34L80 8L96 34H87V92H73V34H64Z" fill="#10B981" />
    <path d="M80 8L96 34H80V8Z" fill="#000000" opacity="0.15" />
  </svg>
);

export const logos: Logo[] = [
  {
    alt: "Google Ads",
    icon: GoogleAdsIcon,
    color: "#4285F4",
  },
  {
    alt: "Meta Ads",
    icon: FaMeta,
    color: "#0081FB",
  },
  {
    alt: "TikTok Ads",
    icon: SiTiktok,
    color: "#000000",
  },
  {
    alt: "Google Analytics",
    icon: FaGoogle,
    color: "#E37400",
  },
  {
    alt: "LinkedIn Ads",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    alt: "Pinterest Ads",
    icon: FaPinterest,
    color: "#E60023",
  },
  {
    alt: "Snapchat Ads",
    icon: FaSnapchat,
    color: "#FFFC00",
  },
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
    alt: "Amazon",
    icon: FaAmazon,
    color: "#FF9900",
  },
  {
    alt: "Etsy",
    icon: SiEtsy,
    color: "#F1641E",
  },
  {
    alt: "eBay",
    icon: SiEbay,
    color: "#E53238",
  },
  {
    alt: "BigCommerce",
    icon: SiBigcommerce,
    color: "#121118",
  },
  {
    alt: "Magento",
    icon: FaMagento,
    color: "#EE6723",
  },
  {
    alt: "Squarespace",
    icon: SiSquarespace,
    color: "#000000",
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
    icon: RiOpenaiFill,
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
          Powering High-Growth E-Commerce, Ads & Growth Platforms, CRMs, AI & Enterprise Tech Stacks
        </p>
        <LogoMarquee logos={logos} />
      </div>
    </section>
  );
}
