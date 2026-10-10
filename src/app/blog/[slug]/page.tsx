import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, BlogPost } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/#works" },
  { title: "Blog", href: "/#blog", isActive: true },

];

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return {};

  const titleMap: Record<string, string> = {
    "generative-engine-optimization-geo-2026-guide": "2026 Generative Engine Optimization Guide | MHKMarkedia",
    "why-headless-wordpress-outperforms-monolithic-themes": "Why Headless WordPress Outperforms Themes | MHKMarkedia",
  };

  const descMap: Record<string, string> = {
    "generative-engine-optimization-geo-2026-guide": "How to optimize your brand entity so AI engines like ChatGPT, Perplexity, and Gemini cite your business first. Complete 2026 GEO playbook.",
    "why-headless-wordpress-outperforms-monolithic-themes": "Decoupling WordPress with Next.js frontend unlocks sub-second load speeds, 100/100 Core Web Vitals, and bulletproof cloud security.",
  };

  const title = titleMap[slug] || (post.title.length > 44 ? `${post.title.slice(0, 42)} | MHKMarkedia` : `${post.title} | MHKMarkedia`);
  const description = descMap[slug] || (post.excerpt.length > 155 ? `${post.excerpt.slice(0, 150)}.` : post.excerpt);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-purple-600 selection:text-white relative">
      <Header navigationData={navigationData} />

      <main className="w-full -mt-[68px] sm:-mt-[96px] pt-28 sm:pt-36 pb-0 overflow-hidden relative">
        {/* Ambient Top Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none select-none overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Category & Breadcrumbs */}
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-600 uppercase tracking-widest hover:underline"
            >
              ← BLOG & TECHNICAL INSIGHTS
            </Link>
            <span className="text-zinc-300">|</span>
            <span className="px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-[11px] font-mono font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Article Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.18] font-sans">
            {post.title}
          </h1>

          {/* Article Meta Bar (Author E-E-A-T, Date, Read Time) */}
          <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-zinc-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-300 shadow-xs bg-zinc-200 shrink-0">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <div className="font-bold text-zinc-900 text-sm leading-snug">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-zinc-500 font-mono">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-zinc-500 font-mono text-[11px]">
              <span>📅 {post.publishDate}</span>
              <span>⏱️ {post.readTime}</span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="mt-8 w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-950 relative">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Post Excerpt Lead Paragraph */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple-50/90 to-indigo-50/50 border border-purple-200/70 text-zinc-900 text-base sm:text-lg font-medium leading-relaxed italic">
            “{post.excerpt}”
          </div>

          {/* Article Body Content */}
          <article className="mt-10 space-y-6 text-zinc-800 font-normal leading-relaxed text-sm sm:text-base prose prose-purple max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl sm:text-2xl font-bold font-serif text-zinc-900 pt-4 pb-1 tracking-tight"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-zinc-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-zinc-200/80 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-mono font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CEO Consultation Callout matching Homepage */}
        <ConsultationCtaBanner
          title={`Have questions about ${post.category}?`}
          subtitle="Speak directly with our technical lead."
          buttonText="Book Strategy Call"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
