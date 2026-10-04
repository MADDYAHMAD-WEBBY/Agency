import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS, ServiceDetail } from "@/lib/content-data";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";
import ConsultationCtaBanner from "@/components/ui/consultation-cta-banner";
import OnThisPageNav from "@/components/ui/on-this-page-nav";

const pageNavItems = [
  { id: "overview", label: "Overview & Dual-Target Architecture", icon: "⚡" },
  { id: "zero-footprint", label: "Zero-Footprint Anonymous Access", icon: "🛡️" },
  { id: "zero-buffer", label: "Zero-Buffer Media Streaming & Reverse Proxy", icon: "🌊" },
  { id: "resilient-network", label: "Resilient Network Layer & Concurrency Locks", icon: "🔄" },
  { id: "security-mitigation", label: "Multi-Layered Security & Bot Mitigation", icon: "🔒" },
  { id: "headless-cms", label: "Headless WordPress & Decoupled CMS Integration", icon: "🔌" },
  { id: "vanilla-frontend", label: "Vanilla Frontend Engine & Interactive UX", icon: "🎨" },
  { id: "tech-specs", label: "Technology Stack Specifications", icon: "🛠️" },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services", isActive: true },
  { title: "Works", href: "/#works" },
  { title: "FAQ", href: "/#faq" },
];

export async function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_DETAILS.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Services | MHKMarkedia`,
    description: service.tagline,
    openGraph: {
      title: service.title,
      description: service.tagline,
      images: [service.coverImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_DETAILS.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-purple-600 selection:text-white relative">
      <Header navigationData={navigationData} />

      <main className="w-full -mt-[68px] sm:-mt-[96px] pt-28 sm:pt-36 pb-20 overflow-hidden relative">
        {/* Full-Height Right Side Blurred Cover Image Background (Under Header, InstaGhost Reference Style) */}
        <div className="absolute top-0 right-0 w-full sm:w-1/2 lg:w-[55%] h-[650px] sm:h-[780px] pointer-events-none select-none z-0 overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src={service.coverImage}
              alt=""
              className="w-full h-full object-cover object-top filter blur-[8px] opacity-40 sm:opacity-55 scale-110"
            />
            {/* Smooth Edge Fade Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 z-10">
          
          {/* Top Back Navigation Button Pill */}
          <div className="mb-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-600 hover:text-purple-600 uppercase transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-zinc-200 bg-zinc-50 group-hover:border-purple-300 group-hover:bg-purple-50 flex items-center justify-center transition-all">
                <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span>
              </div>
              <span>SERVICE CAPABILITY</span>
            </Link>
          </div>

          {/* Main Title Heading in Elegant Serif Italic Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-zinc-900 tracking-tight leading-[1.14] max-w-5xl">
            {service.title}
          </h1>

          {/* CTA Action Pill Button below Title */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-black active:scale-95 transition-all shadow-md hover:shadow-zinc-950/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Book Strategy Call</span>
              <span>↗</span>
            </Link>
          </div>

          {/* Tech Stack Badges Row */}
          {service.techStack && service.techStack.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 max-w-5xl">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] border border-zinc-200 bg-zinc-100/90 text-[11px] font-mono font-semibold tracking-wide text-zinc-700 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Overview Lead Description */}
          <div className="mt-8 text-zinc-700 text-sm sm:text-base font-normal leading-relaxed max-w-5xl">
            {service.description}
          </div>

          {/* 2-Column Content Layout with Sticky ON THIS PAGE Sidebar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Main Narrative & Sections (8 cols) */}
            <div className="lg:col-span-8 space-y-14">
              
              {/* Section 1: Overview & Dual-Target Architecture */}
              <div id="overview" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>⚡</span> Overview & Dual-Target Architecture
                </h2>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  This architecture is an enterprise-grade, privacy-first web platform engineered for sub-second edge rendering, low-latency API proxying, and unhackable security—without requiring bloated monolith plugins or database locks.
                </p>
                
                {/* Styled Purple Feature Callout Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 flex items-center gap-2 font-serif">
                    <span>🏛️</span> Dual-Target Runtime Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    To achieve extreme global responsiveness while supporting heavy continuous binary data transfers, the platform was architected with a decoupled dual-target runtime:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800">
                    <li className="flex items-start gap-2.5">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Serverless Edge Runtime (Cloudflare Pages & Workers):</strong> Executes request routing, bot mitigation, edge cache lookups, and token authentication within V8 Isolates distributed across 300+ global edge locations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Containerized Node.js Streaming Cluster:</strong> Manages high-throughput binary proxying, long-lived HTTP Range pipelines, and upstream CDN socket pooling without exhausting server RAM.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Zero-Footprint Anonymous Access */}
              <div id="zero-footprint" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🛡️</span> Zero-Footprint Anonymous Access
                </h2>
                
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    Browsing legacy platforms natively requires active user sessions, third-party cookies, and tracking pixels. This architecture acts as an air-gapped cryptographic barrier:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 font-medium">
                    <li className="flex items-start gap-2">• Zero viewer authentication cookies or session states transmitted to upstream hosts.</li>
                    <li className="flex items-start gap-2">• Ephemeral data can be inspected without triggering telemetry receipts.</li>
                    <li className="flex items-start gap-2">• All client requests terminate at the edge; upstream networks only see isolated proxy pools.</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Zero-Buffer Media Streaming & Reverse Proxy */}
              <div id="zero-buffer" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🌊</span> Zero-Buffer Media Streaming & Reverse Proxy
                </h2>
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                  Traditional media download utilities buffer entire video files (e.g. 50MB to 200MB 4K Reels) into application server RAM before transmitting bytes to the user. Under heavy concurrency, this causes severe memory bloat, high GC pauses, and server crashes.
                </p>

                <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-3">
                  <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2 font-serif">
                    <span>🚀</span> Direct Binary Pipeline via HTTP Streams
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    Eliminates in-memory buffering using the modern HTTP Streams API and Undici stream dispatchers:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Direct Chunk Piping:</strong> Video chunks incoming from upstream CDNs are immediately piped chunk-by-chunk to the client response stream with zero intermediate disk writes or memory retention.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Constant RAM Footprint:</strong> Server memory usage remains static at &lt;50MB even when processing thousands of concurrent high-bitrate streams.</span>
                    </li>
                  </ul>
                </div>

                {/* Code Block Callout: HTTP Range Header Forwarding */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2 font-mono uppercase">
                    <span>⏩</span> HTTP Range Header Forwarding
                  </h3>
                  <p className="text-xs text-zinc-600">
                    When an HTML5 &lt;video&gt; element initiates playback, it requests specific byte windows (e.g., bytes=0-1048575). The streaming engine validates, signs, and proxies these byte offsets directly:
                  </p>
                  <div className="p-4 rounded-xl bg-zinc-950 text-emerald-400 font-mono text-[11px] sm:text-xs overflow-x-auto shadow-lg space-y-1">
                    <div><span className="text-purple-400">GET</span> /api/stream?src=... HTTP/1.1</div>
                    <div><span className="text-zinc-400">Range:</span> bytes=1048576-2097151</div>
                    <div className="text-zinc-500">// Engine pipes directly with 206 Partial Content</div>
                    <div><span className="text-emerald-300">HTTP/1.1 206 Partial Content</span></div>
                    <div><span className="text-zinc-400">Content-Range:</span> bytes 1048576-2097151/15728640</div>
                    <div><span className="text-zinc-400">Content-Type:</span> video/mp4</div>
                  </div>
                </div>
              </div>

              {/* Section 4: Resilient Network Layer & Concurrency Locks */}
              <div id="resilient-network" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🔄</span> Resilient Network Layer & Concurrency Locks
                </h2>
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                  Public endpoints enforce strict rate limits and IP reputation filters. To guarantee 99.99% uptime and prevent traffic blacklisting, a multi-layer network dispatcher is deployed:
                </p>

                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3 text-xs sm:text-sm">
                  <ul className="space-y-2.5 text-zinc-800">
                    <li><strong>• Automated Proxy Dispatcher & Port Rotation:</strong> Outbound queries cycle through dedicated IP pools using round-robin port allocation with health checks.</li>
                    <li><strong>• Resilient Undici Connection Pooling:</strong> Maintains persistent TCP keep-alive sockets, eliminating TLS handshake overhead on rapid repetitive requests.</li>
                    <li><strong>• Token Lifecycle Management & Mutex Lockouts:</strong> Concurrency locks guarantee that simultaneous identical user requests coalesce into a single upstream fetch, thwarting <em>thundering-herd</em> bottlenecks.</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Multi-Layered Security & Bot Mitigation */}
              <div id="security-mitigation" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🔒</span> Multi-Layered Security & Bot Mitigation
                </h2>
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                  Reverse proxy engines handling dynamic external URLs face severe security vectors, most notably Server-Side Request Forgery (SSRF) and scraper abuse. Strict defense-in-depth protocols are enforced:
                </p>

                {/* Table Layout matching Screenshot media_1791130799793 */}
                <div className="rounded-2xl border border-zinc-200/80 overflow-hidden text-xs sm:text-sm">
                  <div className="grid grid-cols-12 bg-zinc-100/90 p-4 font-mono font-bold text-zinc-600 border-b border-zinc-200/80 uppercase">
                    <div className="col-span-4">DEFENSE LAYER</div>
                    <div className="col-span-8">IMPLEMENTATION MECHANISM</div>
                  </div>
                  <div className="grid grid-cols-12 p-4 bg-white border-b border-zinc-100 items-center">
                    <div className="col-span-4 font-mono font-bold text-purple-600">SSRF IP Validation</div>
                    <div className="col-span-8 text-zinc-700 leading-relaxed font-mono text-[11px] sm:text-xs">
                      Strict DNS pre-resolution & CIDR validation blocking loopback (127.0.0.1), private subnets (RFC 1918), link-local (169.254.0.0/16), and cloud metadata endpoints.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Headless WordPress & Decoupled CMS Integration */}
              <div id="headless-cms" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🔌</span> Headless WordPress & Decoupled CMS Integration
                </h2>
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                  To enable easy deployment across existing publishing properties and high-ranking SEO domains without exposing backend clusters, a custom Headless PHP Integration Layer was architected:
                </p>

                <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-3 text-xs sm:text-sm text-zinc-800">
                  <ul className="space-y-2.5">
                    <li><strong>• Custom WordPress REST API Endpoints:</strong> Acts as a secured intermediary that communicates with edge proxies using signed internal tokens.</li>
                    <li><strong>• Reusable Shortcodes & Gutenberg Blocks:</strong> Enables content editors to embed live interactive tools onto any WP page with simple markup.</li>
                    <li><strong>• Origin Shielding:</strong> The core streaming cluster IP remains completely hidden from DNS registries and public scrutiny.</li>
                  </ul>
                </div>
              </div>

              {/* Section 7: Vanilla Frontend Engine & Interactive UX */}
              <div id="vanilla-frontend" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🎨</span> Vanilla Frontend Engine & Interactive UX
                </h2>
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                  The client interface is handcrafted in pure Vanilla JavaScript (ES6+) and CSS3 with zero third-party framework runtime overhead, delivering instant page loads and 60 FPS mobile animations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                    <div className="text-sm font-bold text-zinc-900 flex items-center gap-2 font-serif">
                      <span>⏱️</span> Multi-Segment Story Timers
                    </div>
                    <div className="text-xs text-zinc-600 leading-relaxed">
                      Custom segmented progress bars matching native mobile Instagram story playback with pause, resume, and auto-advance mechanics.
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                    <div className="text-sm font-bold text-zinc-900 flex items-center gap-2 font-serif">
                      <span>👆</span> Hold-to-Pause Touch Listeners
                    </div>
                    <div className="text-xs text-zinc-600 leading-relaxed">
                      Intuitive gesture handlers that freeze playback timers and hide UI overlays when holding down on mobile screens or desktop mouse click.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8: Technology Stack Specifications */}
              <div id="tech-specs" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif italic font-normal text-zinc-900 tracking-tight flex items-center gap-2">
                  <span>🛠️</span> Key Engineering Deliverables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-zinc-800 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Sticky ON THIS PAGE Navigation Sidebar */}
            <OnThisPageNav items={pageNavItems} />

          </div>

          {/* Bottom CTA Hero Banner matching media_1791130889246 */}
          <ConsultationCtaBanner
            title="READY TO ELEVATE YOUR DIGITAL IMPACT? LET'S ENGINEER YOUR GROWTH MACHINE"
            subtitle="Turning high-performance engineering & organic search into lasting revenue."
            buttonText="Start a Conversation"
          />

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
