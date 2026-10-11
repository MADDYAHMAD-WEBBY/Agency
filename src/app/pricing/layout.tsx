import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Web & SEO Pricing | ROI Calculator | MHKMarkedia",
  description:
    "Explore transparent milestone pricing and custom calculators for Next.js web applications, headless WordPress migrations, AI automations, and local SEO services.",
  alternates: {
    canonical: "https://mhkmarkedia.com/pricing",
  },
  openGraph: {
    title: "Transparent Web & SEO Pricing | ROI Calculator | MHKMarkedia",
    description:
      "Calculate project investment for Next.js web applications, headless WordPress, AI workflows, and local SEO with upfront milestone estimates.",
    url: "https://mhkmarkedia.com/pricing",
    siteName: "MHKMarkedia",
    type: "website",
    images: [
      {
        url: "/images/ceo.webp",
        width: 1200,
        height: 630,
        alt: "MHKMarkedia Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing & Scope Estimator | MHKMarkedia",
    description:
      "Upfront pricing and deliverables for web engineering, headless WordPress, and local SEO.",
    images: ["/images/ceo.webp"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
