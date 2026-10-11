import type { Metadata } from "next";
import { Plus_Jakarta_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans-main",
  subsets: ["latin"],
});

const serifFont = EB_Garamond({
  variable: "--font-serif-italic",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mhkmarkedia.com"),
  title: {
    default: "Build High-Converting Websites & #1 Map SEO | MHKMarkedia",
    template: "%s | MHKMarkedia",
  },
  description:
    "Scale your business with high-converting custom web apps, sub-second headless stores, and #1 Google Map Pack rankings engineered by CEO M. Hafeez Khan.",
  keywords: [
    "Full-Stack Web Development",
    "Headless WordPress",
    "Next.js Development Agency",
    "Local SEO Expert",
    "Google Map Pack Ranking",
    "Core Web Vitals Optimization",
    "AI Workflow Automation",
    "E-Commerce Web Architecture",
  ],
  authors: [{ name: "M. Hafeez Khan", url: "https://mhkmarkedia.com" }],
  creator: "M. Hafeez Khan",
  publisher: "MHKMarkedia",
  alternates: {
    canonical: "https://mhkmarkedia.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhkmarkedia.com",
    siteName: "MHKMarkedia",
    title: "Build High-Converting Websites & #1 Map SEO | MHKMarkedia",
    description:
      "Scale your business with high-converting custom web apps, sub-second headless stores, and #1 Google Map Pack rankings engineered by CEO M. Hafeez Khan.",
    images: [
      {
        url: "/images/ceo.webp",
        width: 1200,
        height: 630,
        alt: "MHKMarkedia — CEO M. Hafeez Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build High-Converting Websites & #1 Map SEO | MHKMarkedia",
    description:
      "Scale your business with high-converting custom web apps, sub-second headless stores, and #1 Google Map Pack rankings.",
    images: ["/images/ceo.webp"],
    creator: "@mhkmarkedia",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-slate-900 selection:text-white"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "MHKMarkedia",
              "url": "https://mhkmarkedia.com",
              "logo": "https://mhkmarkedia.com/images/ceo.webp",
              "image": "https://mhkmarkedia.com/images/ceo.webp",
              "description": "High-performance digital agency specializing in custom Web Development, Headless WordPress, Local SEO, and AI Search Engine Optimization (GEO).",
              "founder": {
                "@type": "Person",
                "name": "M. Hafeez Khan",
                "jobTitle": "CEO & Lead Digital Architect",
                "url": "https://mhkmarkedia.com/about"
              },
              "knowsAbout": [
                "Full-Stack Web Development",
                "Headless WordPress",
                "Local SEO",
                "Core Web Vitals Speed Optimization",
                "Generative Engine Optimization (GEO)"
              ]
            })
          }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
