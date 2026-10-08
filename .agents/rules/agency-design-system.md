# Agency Website Design & Branding Invariants

## 1. Executive Persona & Branding
- **Founder & CEO**: Muhammad Hafeez Khan (`M. Hafeez Khan` / `M Hafeez Khan, Founder & CEO`).
- **Agency Identity**: Single accountable digital engineering unit focused on Next.js, Headless WordPress, AI Workflows, E-Commerce platforms (Shopify, WooCommerce, Amazon, TikTok Shop, GoHighLevel), and Local SEO.
- **Tone**: Professional, direct, E-E-A-T focused ("We build", "Our team").

## 2. Typography & Heading Hierarchy
- **Primary Titles**: `h1`/`h2`/`h3` styled with `font-extrabold text-zinc-900 tracking-tight leading-tight`.
- **Eyebrows**: Upper case tracking text with `text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3`.
- **Gradient Accent Text**: Use `motion.span` with `animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}` and `className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"`.

## 3. Global Call-To-Action (CTA) Banner
- **Component**: Always use `ConsultationCtaBanner` (`src/components/ui/consultation-cta-banner.tsx`) or `CtaSection` (`src/components/ui/cta-section.tsx`).
- **Visual Design**: Backdrop blur white container (`bg-white/90 backdrop-blur-md rounded-[10px] border border-zinc-200/90 shadow-[0_12px_45px_rgba(0,0,0,0.04)]`), vibrant cyan & sky blue radial glows (`rgba(56, 189, 248, 0.7)`), rotating black circular SVG badge (`• AVAILABLE FOR PROJECTS • LET'S TALK`), and `AnimatedPillButton`.
- **Spacing Invariants**: Keep top margin compact (`mt-2 sm:mt-4 pt-2 sm:pt-4`) and main content bottom padding tight (`pb-2 sm:pb-4`) to eliminate blank vertical whitespace.

## 4. Logo Marquee Rules
- **No Y-Axis Drift**: Enforce `style={{ y: 0 }}` on `motion.div`, `h-16 flex items-center`, `flex-nowrap`, and `transform-gpu` to prevent any vertical drifting.
- **Authentic Vector Logos Only**: Use 100% official brand emblems from `react-icons/si`, `react-icons/fa6`, or `react-icons/ri` (TikTok Shop `SiTiktok`, Shopify `SiShopify`, WooCommerce `SiWoocommerce`, Amazon `FaAmazon`, Etsy `SiEtsy`, eBay `SiEbay`, BigCommerce `SiBigcommerce`, Magento `FaMagento`, Squarespace `SiSquarespace`, Meta `FaMeta`, GoHighLevel 3-arrow emblem, WordPress, Stripe, HubSpot, Zapier, Make, OpenAI `RiOpenaiFill`, Nvidia, Supabase, Vercel, GitHub, Clerk, Claude, Turso).

## 5. COBE 3D Interactive Globe
- **Component**: `src/components/ui/cobe-globe.tsx` (`Globe`).
- **Initial Orientation**: Set `phi: 3.6` so South Asia & Middle East (**Lahore & Dubai**) start facing front on page load.
- **Markers & Arcs**: Display key city markers (Lahore, Dubai, New York, London, San Francisco, Tokyo, Sydney) and connection arcs (`Lahore → Dubai`, `NYC → London`).
- **Rotation Speed**: Set `speed={0.012}` for smooth rotation.
- **No Side Clipping**: Use responsive max-width (`max-w-[400px] aspect-square`) with proper padding so the round sphere fits 100% inside container bounds.
