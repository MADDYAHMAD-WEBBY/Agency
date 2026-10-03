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
  title: "shadcnspace. — Web Development, Headless WordPress & Local SEO Agency",
  description: "shadcnspace. is a high-performance digital agency by Hamad Ahmad, specializing in custom Web Development, Headless WordPress solutions, and Local SEO strategies to turn ambitious brands into growth machines.",
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
        {children}
      </body>
    </html>
  );
}
