import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CEO M. Hafeez Khan | Free Digital Consultation | MHKMarkedia",
  description:
    "Schedule a direct consultation with CEO M. Hafeez Khan. Get custom web architecture recommendations, local SEO audit insights, and transparent upfront milestone pricing.",
  alternates: {
    canonical: "https://mhkmarkedia.com/contact",
  },
  openGraph: {
    title: "Contact CEO M. Hafeez Khan | Free Digital Consultation | MHKMarkedia",
    description:
      "Schedule a direct consultation with CEO M. Hafeez Khan. Get custom web architecture recommendations and transparent milestone pricing.",
    url: "https://mhkmarkedia.com/contact",
    siteName: "MHKMarkedia",
    type: "website",
    images: [
      {
        url: "/images/ceo.webp",
        width: 1200,
        height: 630,
        alt: "Contact CEO M. Hafeez Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CEO M. Hafeez Khan | MHKMarkedia",
    description:
      "Book a direct consultation for web architecture, headless migrations, and local SEO.",
    images: ["/images/ceo.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
