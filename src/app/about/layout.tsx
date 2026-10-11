import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CEO M. Hafeez Khan | 16+ Yrs Digital Architecture Experience",
  description:
    "Meet M. Hafeez Khan, CEO & Lead Architect at MHKMarkedia with 16+ years of experience engineering high-performance web platforms, Headless Next.js, and organic Local SEO.",
  alternates: {
    canonical: "https://mhkmarkedia.com/about",
  },
  openGraph: {
    title: "About CEO M. Hafeez Khan | 16+ Yrs Digital Architecture Experience",
    description:
      "Meet M. Hafeez Khan, CEO & Lead Architect at MHKMarkedia with 16+ years of experience engineering high-performance web platforms, Headless Next.js, and organic Local SEO.",
    url: "https://mhkmarkedia.com/about",
    siteName: "MHKMarkedia",
    type: "profile",
    images: [
      {
        url: "/images/ceo.webp",
        width: 1200,
        height: 630,
        alt: "CEO M. Hafeez Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CEO M. Hafeez Khan | MHKMarkedia",
    description:
      "16+ years engineering high-performance web platforms, Headless Next.js, and organic Local SEO.",
    images: ["/images/ceo.webp"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
