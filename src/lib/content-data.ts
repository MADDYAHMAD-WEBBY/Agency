export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  metrics: { label: string; value: string; desc: string }[];
  challenge: string;
  solution: string;
  results: string;
  coverImage: string;
  techStack: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  category: "ai" | "web" | "seo";
  tagline: string;
  description: string;
  deliverables: string[];
  processSteps: { step: string; title: string; desc: string }[];
  coverImage: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "generative-engine-optimization-geo-2026-guide",
    title: "The 2026 Playbook for Generative Engine Optimization (GEO)",
    excerpt: "How to optimize your brand entity so AI answer engines like ChatGPT, Perplexity, and Google Gemini cite your business first.",
    content: `
### What is Generative Engine Optimization (GEO)?
In 2026, over 45% of commercial search queries bypass traditional blue links in favor of AI-generated answers. Generative Engine Optimization (GEO) is the technical discipline of structuring your web assets, schema entities, and authoritative citations so artificial intelligence models recommend your service when users ask high-intent questions.

### The 3 Core Pillars of High-GEO Visibility
1. **Entity Schema Integration (JSON-LD)**: Defining clear relationships between your CEO, brand credentials, products, and industry awards.
2. **Sub-Second Core Web Vitals (LCP < 0.8s)**: AI bots prioritize rapidly indexable static edges built on Next.js 15 App Router over heavy legacy monoliths.
3. **Third-Party Citation Depth**: Securing verified entity mentions across high-domain authority databases like Trustpilot, Crunchbase, and niche industry portals.

### Implementing GEO for E-Commerce & Service Brands
When building custom web applications at MHKMarkedia, we embed JSON-LD schemas directly into the server component render tree. This guarantees search engine crawlers parsing your DOM immediately identify your unique E-E-A-T signals.
    `,
    category: "GEO & AI Search",
    publishDate: "October 2026",
    readTime: "6 min read",
    author: {
      name: "Muhammad Hafeez Khan",
      role: "CEO & Lead Digital Architect",
      avatar: "/images/ceo.webp",
    },
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["GEO 2026", "AI Search", "Next.js 15", "Schema Markup"],
  },
  {
    slug: "why-headless-wordpress-outperforms-monolithic-themes",
    title: "Why Headless WordPress Outperforms Monolithic Themes in 2026",
    excerpt: "Decoupling your WordPress content repository with a Next.js frontend unlocks sub-second speed, 100/100 Core Web Vitals, and bulletproof security.",
    content: `
### The Limitations of Monolithic WordPress
Traditional WordPress themes bundle database queries, PHP rendering, and unoptimized plugin scripts on every page request. As your media library grows, mobile page speeds degrade rapidly, dropping your Google Map Pack rankings and ad conversion rates.

### The Next.js + Headless WordPress Advantage
By decoupling WordPress as a headless content management system API and serving the user interface with Next.js App Router static site generation (SSG) & Incremental Static Regeneration (ISR):
- **100/100 Mobile Speed Scores**: Pages load instantly off global Vercel/Cloudflare edge networks.
- **Unhackable Security**: No exposed WordPress login portals or database entry points on the public frontend.
- **Empowered Marketing Team**: Content managers continue using the familiar WordPress Gutenberg editor while developers build ultra-sleek React components.
    `,
    category: "Web Development",
    publishDate: "September 2026",
    readTime: "5 min read",
    author: {
      name: "Muhammad Hafeez Khan",
      role: "CEO & Lead Digital Architect",
      avatar: "/images/ceo.webp",
    },
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Headless WP", "Next.js", "Core Web Vitals", "Web Architecture"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cloudscale-lahore-headless-migration",
    title: "Scaling CloudScale E-Commerce to 340% Phone Leads & Sub-Second Speeds",
    client: "CloudScale Solutions",
    industry: "E-Commerce & DTC",
    summary: "Migrated a legacy WooCommerce monolith to custom Next.js 15 + Headless WP architecture, driving 340% increase in inbound leads.",
    metrics: [
      { label: "Mobile Speed Score", value: "99/100", desc: "Up from 35/100 baseline" },
      { label: "Organic Inbound Calls", value: "+340%", desc: "Google Map Pack #1" },
      { label: "Page Load Time", value: "0.6s", desc: "Sub-second LCP execution" },
    ],
    challenge: "CloudScale was suffering from heavy database locks, 4.8s mobile load times, and poor search engine rankings that caused high ad bounce rates.",
    solution: "MHKMarkedia rebuilt the frontend using Next.js 15, optimized image pipelines using edge CDN compression, and implemented structured GEO schemas for AI answer engines.",
    results: "In the first 90 days post-launch, CloudScale secured top 3 Map Pack rankings across 14 target keywords and generated a 3.4x surge in direct customer inquiries.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js 15", "Headless WP", "Tailwind CSS", "Stripe API", "Vercel Edge"],
  },
  {
    slug: "fintech-cloud-portal-case-study",
    title: "Engineering a Bank-Grade FinTech Client Portal & Interactive Calculator",
    client: "Apex Wealth Tech",
    industry: "Finance & Wealth Management",
    summary: "Built an encrypted wealth management portal with real-time financial calculators and multi-factor security.",
    metrics: [
      { label: "Security Rating", value: "A+", desc: "Bank-Grade Encryption" },
      { label: "Lead Conversion Rate", value: "14.2%", desc: "2.8x industry average" },
      { label: "Client Retention", value: "98%", desc: "Zero platform downtime" },
    ],
    challenge: "Apex needed to replace static PDF brochures with interactive digital calculators while maintaining strict data privacy compliance.",
    solution: "Engineered a custom TypeScript & React portal connected to secure API endpoints, featuring interactive ROI estimators and automated CRM synchronization.",
    results: "Appointed as lead digital platform for over $120M in tracked wealth consultations in year one.",
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "headless-wordpress-development",
    title: "Headless WordPress & Next.js Architecture",
    category: "web",
    tagline: "Sub-Second Edge Performance, 100/100 Core Web Vitals & Enterprise React Frontends",
    description: "Traditional WordPress sites suffer from bloated PHP rendering, database locks, and plugin vulnerabilities that tank your Google rankings and ad conversions. I decouple WordPress into a headless CMS API backed by Next.js 15 App Router static site generation (SSG) and edge caching. You get the seamless WordPress editing dashboard your marketing team loves, paired with unhackable static speed and instant mobile load times.",
    deliverables: [
      "Custom Next.js 15 App Router React Frontend",
      "Decoupled WP GraphQL API Setup & Custom Post Types",
      "100/100 Google Core Web Vitals (LCP < 0.8s)",
      "JSON-LD Schema & GEO 2026 AI Search Optimization",
      "Vercel & Cloudflare Global Edge Deployment",
      "Automated CI/CD Pipeline & GitHub Integration",
    ],
    processSteps: [
      {
        step: "01",
        title: "Database & Performance Audit",
        desc: "I analyze your current WordPress database queries, plugin dependencies, and Core Web Vitals bottlenecks to architect a zero-latency headless strategy.",
      },
      {
        step: "02",
        title: "Headless GraphQL API Configuration",
        desc: "Setting up secure GraphQL endpoints, custom ACF fields, and caching policies so WP content syncs seamlessly with Next.js.",
      },
      {
        step: "03",
        title: "Next.js 15 Frontend Engineering",
        desc: "Building pixel-perfect React components with dynamic SSG & ISR caching, ambient dark modes, and micro-interactions.",
      },
      {
        step: "04",
        title: "Global Edge Launch & CEO Support",
        desc: "Deploying to Vercel/Cloudflare global edge networks with 30 days of direct technical support and 1-on-1 strategy handoff.",
      },
    ],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];
