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

## 3. Design System & Theme Guidelines
- **Theme**: Luxury Dark Mode Theme (`#09090b` obsidian background, `#f4f4f5` silver-white text).
- **Global Scrollbar**: Hidden globally in `globals.css` (`scrollbar-width: none`, `::-webkit-scrollbar { display: none }`, `overflow-x: clip`).
- **Typography & Headline**:
  - `h1-h6` elements automatically inherit `EB Garamond` serif font via CSS variables.
  - Hero Headline Structure (Strict 3-Line Layout):
    1. Line 1: *"We Turn Your Business Into a"* (Ivory `#E1E0CC`)
    2. Line 2: *"Growth Machine with"* (Ivory `#E1E0CC`)
    3. Line 3: `[Rotating Service Pill]` rendered in `EB Garamond Italic` with an animated cyan-pink gradient (`from-cyan-400 via-blue-500 via-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent`).
  - Subtitle: `TypewriterSubtitle` component with typing effect (`text-xs sm:text-sm text-zinc-300`).
- **Accent Colors**: Minimalist Light White / Silver (`#ffffff` / `zinc-300` / `zinc-700`).

---

## 4. Key Performance & Technical Solutions

### A. 100% IDM-Proof Offscreen Canvas Video Background (`IDMProofCanvasVideo`)
- **Problem**: Internet Download Manager (IDM) extension injects a floating "Download this video" button over standard HTML5 `<video>` tags.
- **Solution**: Create an offscreen video element in JS memory (`document.createElement("video")`) without attaching it to the DOM tree. Render frames onto an HTML5 `<canvas>` at 60 FPS. IDM extension DOM observers only scan attached `<video>` nodes, completely bypassing `<canvas>` elements.
- **Suppression CSS**: Global rules in `globals.css` hide any injected `[id*="idm"]` or `[class*="idm"]` elements.

### B. Mobile & Desktop WebGL Optimization (`GlassyLavenderBubbles`)
- Dynamic code splitting using `next/dynamic` with `{ ssr: false }` to prevent Three.js from blocking initial critical path JS bundles.
- Zero-allocation physics loop (`W.update`) using static pre-allocated vectors (`vPos`, `vVel`, `vDiff`) to eliminate JavaScript Garbage Collector lag spikes.
- Center Exclusion Zone to push floating background bubbles to the side wings, keeping the headline text 100% readable.

### C. Sticky Navigation Header
- `<Header />` uses `sticky top-0 z-50 bg-transparent`.
- Ancestor containers MUST NOT use `overflow-hidden` (use `overflow-x: clip` instead), as CSS `overflow-hidden` breaks sticky positioning on child elements.

### D. Seamless Bottom Video Fade
- Background video uses `[mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]`.
- Bottom transition layer (`h-36 sm:h-52 bg-gradient-to-b from-transparent via-[#09090b]/60 to-[#09090b]`) smoothly blends the hero video into the dark Brand Slider with zero hard edges or white fog.
