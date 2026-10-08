import React from "react";
import type { Metadata } from "next";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";
import BlogPostsGrid from "@/components/ui/blog-posts-grid";
import { BLOG_POSTS } from "@/lib/content-data";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title: "Blog | Web Development, AI Automation & Local SEO Insights | MHKMarkedia",
  description:
    "Actionable technical breakdowns on Next.js 15 architecture, zero-downtime headless WordPress migrations, custom AI workflow automations, and local SEO ranking strategies.",
  keywords: [
    "web development blog",
    "Next.js 15 tutorials",
    "headless WordPress migration",
    "AI automation guides",
    "local SEO strategies",
    "Core Web Vitals optimization",
    "React development",
    "full stack developer blog",
  ],
  openGraph: {
    title: "Blog | Web Development, AI & SEO Insights",
    description:
      "Deep dives into Next.js 15, headless WordPress, AI workflow automation, and local SEO — written from hands-on production builds.",
    url: "https://mhkmarkedia.com/blog",
    siteName: "MHKMarkedia",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Engineering & SEO Insights",
    description:
      "Technical articles on Next.js, headless WordPress, AI automations & local SEO.",
  },
  alternates: {
    canonical: "https://mhkmarkedia.com/blog",
  },
};

/* ─── NAVIGATION ─── */
const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/#works" },
  { title: "Blog", href: "/blog", isActive: true },
  { title: "Contact", href: "/contact" },
];

/* ─── HELPERS ─── */
function getCategories(posts: typeof BLOG_POSTS): string[] {
  const cats = new Set(posts.map((p) => p.category));
  return ["All", ...Array.from(cats)];
}

/* ─── JSON-LD STRUCTURED DATA ─── */
function BlogJsonLd() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MHKMarkedia Technical Blog",
    description:
      "Technical articles on Next.js 15 architecture, headless WordPress, AI workflow automation, and local SEO strategies.",
    url: "https://mhkmarkedia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "MHKMarkedia",
      url: "https://mhkmarkedia.com",
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://mhkmarkedia.com/blog/${post.slug}`,
      image: post.coverImage,
      datePublished: post.publishDate,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
      publisher: {
        "@type": "Organization",
        name: "MHKMarkedia",
      },
      articleSection: post.category,
      keywords: post.tags.join(", "),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mhkmarkedia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://mhkmarkedia.com/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

/* ─── PAGE COMPONENT (Server) ─── */
export default function BlogPage() {
  const categories = getCategories(BLOG_POSTS);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* JSON-LD Structured Data */}
      <BlogJsonLd />

      {/* Header */}
      <Header navigationData={navigationData} />

      {/* Main Content Area — matches About/Contact page spacing */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-[50px] sm:-mt-[70px] pt-24 sm:pt-28 pb-2 sm:pb-4 space-y-16 sm:space-y-20">

        {/* ─── HERO SECTION ─── */}
        <section className="text-center max-w-4xl mx-auto pt-4">
          <p className="text-xs sm:text-sm font-mono font-bold tracking-widest text-purple-600 uppercase mb-2 sm:mb-3">
            Blog &amp; Technical Insights
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Insights on AI Automation,{" "}
            <span className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal animate-gradient-shift">
              Web Development &amp; Local SEO.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed font-sans mt-3 sm:mt-4">
            Practical guides, case studies, and actionable tips designed to help grow your business.
          </p>
        </section>

        {/* Interactive Blog Grid (Client Component) */}
        <BlogPostsGrid posts={BLOG_POSTS} categories={categories} />

      </main>

      {/* CTA Banner matching About/Contact */}
      <ConsultationCtaBanner
        title="HAVE A PROJECT IN MIND?"
        subtitle="Book a free 30-minute strategy call or send a direct project brief."
        subtext="Discuss your Next.js architecture, headless WordPress migration, AI workflow automation, or local SEO strategy directly with senior engineers. Guaranteed 24-hour response."
        buttonText="Book Your Free Call"
        buttonHref="/contact"
      />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
