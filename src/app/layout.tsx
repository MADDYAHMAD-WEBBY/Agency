import type { Metadata } from "next";
import { Plus_Jakarta_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";

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
  title: "MHKMarkedia — Web Development, Headless WordPress & AI-Driven SEO Agency",
  description: "MHKMarkedia is a high-performance digital agency led by CEO M. Hafeez Khan (16+ Yrs Exp), specializing in custom Next.js Web Development, Headless WordPress solutions, Local SEO, and Generative Engine Optimization (GEO).",
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
              "description": "High-performance digital agency specializing in custom Web Development, Headless WordPress, Local SEO, and AI Search Engine Optimization (GEO).",
              "founder": {
                "@type": "Person",
                "name": "M. Hafeez Khan",
                "jobTitle": "CEO & Lead Digital Architect"
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
      </body>
    </html>
  );
}
