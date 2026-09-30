import type { Metadata } from "next";
import { Plus_Jakarta_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans-main",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const serifFont = EB_Garamond({
  variable: "--font-serif-italic",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "shadcnspace - Building bold brands with thoughtful design",
  description: "At shadcn space, we help small startups tackle the world's biggest challenges with tailored solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
