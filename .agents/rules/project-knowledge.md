# Project Knowledge & Guidelines — MADDYAHMAD Agency Website

This document records the complete architecture, design system, performance rules, and branding personas learned for the **MADDYAHMAD Agency Website** codebase.

---

## 1. Branding & Identity Persona
- **Developer Persona**: Hamad Ahmad — solo Full-Stack Web Developer, Headless WordPress Specialist, and Local SEO Expert.
- **Tone**: Always use first-person singular ("I", "My") instead of agency plurals ("We", "Our team").
- **Copywriting**: Zero fluff, E-E-A-T signals, NLP keywords, Core Web Vitals optimization focus.

---

## 2. Tech Stack & Dependencies
- **Framework**: Next.js 16 (App Router), React 19 (Server Components + Client Components).
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` in `globals.css`).
- **Typography**: `next/font/google` loading `Plus_Jakarta_Sans` (Sans) and `EB Garamond` (Serif).
- **Animations & 3D**: Framer Motion 13, Three.js 0.186 (`@types/three`).
- **Components & Icons**: Radix UI primitives, Lucide React icons (`lucide-react`).
- **Deployment**: Vercel (Washington D.C. region), GitHub repo `https://github.com/MADDYAHMAD-WEBBY/Agency.git`.

---

## 3. Design System & Clean White Theme Guidelines
- **Theme**: Clean White Theme (`#ffffff` background, `#09090b` primary dark typography) chosen for maximum high-ticket B2B client trust, E-E-A-T clarity, and sharp contrast.
- **Global Scrollbar**: Hidden globally in `globals.css` (`scrollbar-width: none`, `::-webkit-scrollbar { display: none }`, `overflow-x: clip`).
- **Header Navigation Bar**:
  - Logo Pill: Black pill (`bg-black text-white border border-zinc-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold`).
  - Center Navigation: Light Glass Segmented Pill (`bg-zinc-100/90 backdrop-blur-md border border-zinc-200/80 shadow-xs`).
  - Active Nav Link: `bg-white text-black font-semibold shadow-xs border border-zinc-200/80`.
  - Inactive Nav Link: `text-zinc-600 hover:text-black hover:bg-zinc-200/60`.
- **Typography & Headline**:
  - `h1-h6` elements automatically inherit `EB Garamond` serif font via CSS variables.
  - Hero Headline Structure (Strict 3-Line Layout):
    1. Line 1: *"We Turn Your Business Into a"* (`#0a0a0c`)
    2. Line 2: *"Growth Machine with"* (`#0a0a0c`)
    3. Line 3: `[Rotating Service Pill]` rendered in `EB Garamond Italic` with an animated cyan-pink gradient (`from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent`).
  - Subtitle: `TypewriterSubtitle` component with typing effect (`text-xs sm:text-sm text-zinc-800 font-medium`).
- **Social Proof**:
  - Avatars stacked with `border-2 border-white bg-zinc-100 shadow-md`.
  - Rating: Amber 5-star rating (`text-amber-500`) + rating text (`text-zinc-800 font-semibold`).

---

## 4. Key Performance & Technical Solutions

### A. 100% IDM-Proof Offscreen Canvas Video Background (`IDMProofCanvasVideo`)
- **Problem**: Internet Download Manager (IDM) extension injects a floating "Download this video" button over standard HTML5 `<video>` tags.
- **Solution**: Create an offscreen video element in JS memory (`document.createElement("video")`) without attaching it to the DOM tree. Render frames onto an HTML5 `<canvas>` at 60 FPS. IDM extension DOM observers only scan attached `<video>` nodes, completely bypassing `<canvas>` elements.
- **Suppression CSS**: Global rules in `globals.css` hide any injected `[id*="idm"]`, `[class*="idm"]`, or high z-index overlay elements.

### B. High-Contrast Light Overlay for Hero Video
- To ensure 100% typography contrast over dynamic cinematic video frames without obscuring motion, a soft gradient light overlay is applied:
  `bg-gradient-to-b from-white/85 via-white/60 to-white backdrop-blur-[1px]` over an `opacity-45` canvas video.

### C. Mobile & Desktop WebGL Optimization (`GlassyLavenderBubbles`)
- Dynamic code splitting using `next/dynamic` with `{ ssr: false }` to prevent Three.js from blocking initial critical path JS bundles.
- Zero-allocation physics loop (`W.update`) using static pre-allocated vectors (`vPos`, `vVel`, `vDiff`) to eliminate JavaScript Garbage Collector lag spikes.
- Center Exclusion Zone to push floating background bubbles to the side wings, keeping the headline text 100% readable.

### D. Sticky Navigation Header
- `<Header />` uses `sticky top-0 z-50 bg-transparent`.
- Ancestor containers MUST NOT use `overflow-hidden` (use `overflow-x: clip` instead), as CSS `overflow-hidden` breaks sticky positioning on child elements.

### E. Seamless Bottom Transition to Brand Slider
- Seamless bottom transition layer (`h-32 sm:h-48 bg-gradient-to-b from-transparent via-white/90 to-white`) smoothly blends the hero canvas video into the white Brand Slider container (`bg-white`) with zero hard edges.
- Brand Slider divider lines (`border-zinc-200`), text (`text-zinc-600 font-medium`), and marquee logos (`text-zinc-700 hover:text-black`).
