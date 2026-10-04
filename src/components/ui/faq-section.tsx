"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

interface FaqItem {
  id: string;
  category: "GEO & SEO" | "Development" | "Performance";
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "01",
    category: "GEO & SEO",
    question: "What is Generative Engine Optimization (GEO) and why is it essential in 2026?",
    answer:
      "Generative Engine Optimization (GEO) is the strategy of optimizing your digital presence to rank inside AI answer engines like ChatGPT, Perplexity, Google Gemini, and Claude. Unlike traditional keyword-stuffing SEO, GEO focuses on semantic entity relationships, structured data (JSON-LD), and authoritative technical content that AI models synthesize and cite when users ask for recommendations.",
  },
  {
    id: "02",
    category: "Development",
    question: "Why does MHKMarkedia specialize in Headless WordPress over traditional monolithic themes?",
    answer:
      "Traditional monolithic WordPress relies on bloated themes and database queries that degrade page performance. MHKMarkedia decouples WordPress into a Headless CMS backend powered by Next.js 15 App Router frontend. This delivers sub-second load times (LCP < 0.8s), unhackable static security, seamless API flexibility, and an effortless content management interface for your marketing team.",
  },
  {
    id: "03",
    category: "Performance",
    question: "How does MHKMarkedia guarantee sub-second load times and 100/100 Core Web Vitals scores?",
    answer:
      "We build on Next.js with TurboPack, utilizing server-side rendering (SSR), incremental static regeneration (ISR), optimized WebP/AVIF media delivery, zero unnecessary third-party scripts, and edge network distribution via Vercel/Cloudflare. We audit every line of code to ensure Google Core Web Vitals (LCP, CLS, INP) score in the top 99th percentile.",
  },
  {
    id: "04",
    category: "GEO & SEO",
    question: "How does your Local SEO Map Pack framework rank businesses #1 locally?",
    answer:
      "Our Local SEO framework optimizes your Google Business Profile (GBP), enforces consistent multi-directory NAP (Name, Address, Phone) citations, embeds Local Business Schema, generates localized landing pages, and automates review management. This guarantees maximum visibility in Google's 3-Map Pack for high-intent local customer queries.",
  },
  {
    id: "05",
    category: "Development",
    question: "What is the typical timeline and process for a custom digital project with MHKMarkedia?",
    answer:
      "Projects follow our 4-Stage Agile Engineering Method: 1) Architecture & UX Discovery, 2) High-Fidelity UI Design, 3) Headless / Next.js Development, and 4) Core Web Vitals & Technical SEO Audit. Standard custom builds take 3 to 6 weeks from kick-off to live launch with 100% transparent staging previews.",
  },
  {
    id: "06",
    category: "Performance",
    question: "What post-launch support, maintenance, and growth optimizations do you provide?",
    answer:
      "Every MHKMarkedia project includes 30 days of post-launch technical hyper-care, real-time security monitoring, automated off-site backups, continuous Core Web Vitals performance tracking, and ongoing local/global SEO growth strategy options led directly by CEO M. Hafeez Khan and senior engineering staff.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="w-full pt-16 sm:pt-24 pb-8 sm:pb-12 bg-white text-zinc-900 relative z-20 overflow-hidden">
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Clear Answers & Technical Transparency
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            Frequently Asked Questions <br />
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
            >
              & Technical Insights
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed"
          >
            Clear technical transparency regarding our development process, security protocols, post-launch maintenance care, and organic growth strategies.
          </motion.p>
        </div>

        {/* Radix Accordion - Ultra Sleek Minimal Design */}
        <div className="w-full font-sans">
          <Accordion type="single" defaultValue="01" collapsible className="w-full space-y-2.5">
            {faqItems.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="border border-zinc-200/70 rounded-xl bg-white data-[state=open]:border-purple-400/80 data-[state=open]:shadow-sm transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-3.5 sm:py-4 px-4 sm:px-5 hover:no-underline cursor-pointer duration-300 [&>svg]:hidden group">
                  <div className="flex flex-1 justify-between items-center gap-4">
                    <span className="font-sans font-semibold text-sm sm:text-base text-zinc-900 leading-snug tracking-tight">
                      {item.question}
                    </span>

                    <div className="relative shrink-0 w-7 h-7 rounded-full bg-zinc-100/80 border border-zinc-200/60 flex items-center justify-center text-zinc-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Plus
                        id="plus"
                        strokeWidth={2}
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 transition-all duration-300",
                          "group-data-[state=open]:opacity-0 group-data-[state=closed]:opacity-100",
                          "group-data-[state=open]:rotate-180"
                        )}
                      />
                      <X
                        strokeWidth={2}
                        id="minus"
                        className={cn(
                          "absolute h-3.5 w-3.5 opacity-0 transition-all duration-300",
                          "group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0",
                          "group-data-[state=open]:rotate-180"
                        )}
                      />
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal font-sans border-t border-zinc-100/80 mt-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
