# Agency Website Design & Typography Standards

## 1. Persona & Branding Invariants
- **Identity & Persona**: Hamad Ahmad (Solo Full-Stack Developer, Headless WordPress Specialist, Local SEO Expert).
- **Agency Name**: `shadcnspace.`
- **Team / Leadership**: `Muhammad Hafeez Khan | shadcnspace. Lead` (Always use male portrait imagery for leadership cards).

## 2. Section Heading Typography Invariants
- **Eyebrow Badge**: `text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-3`
- **Main Heading (`<h3>` / `<h2>`)**: `text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight`
- **Shimmering Gradient Accent**: Highlighting keywords MUST use thin serif italic font with continuous animated gradient shimmer:
  ```tsx
  <motion.span
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
  >
    Gradient Keyword
  </motion.span>
  ```
- **Section Subheadings**: MUST be small, clean sans-serif text matching the global font family:
  `className="text-xs sm:text-sm text-zinc-500 font-medium max-w-xl mx-auto mt-4 leading-relaxed tracking-normal"`

## 3. Card Hover & Accent Consistency
- **Dynamic Accent Mirroring**: Interactive cards (e.g. `NotchedProjectCard`) MUST sync their hover effects to the card's specific `accent` color:
  - Arrow Button Fill: `group-hover:bg-[var(--card-accent)]`
  - Title Text: `group-hover:text-[var(--card-accent)]`
  - Outer Card Border: `hover:border-[var(--card-accent)]`
- **Tech Stack Cards**: White squircle rounded cards (`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-zinc-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)]`) containing official brand colored vector icons.

## 4. Section Background Blending
- Stacked sections on the white theme MUST have 100% seamless edge blending (`bg-white` with centered ambient radial glows) — NO hard top border lines or contrasting top background strips between adjacent sections.

## 5. Dynamic Detail Page Architecture (InstaGhost Editorial System)
- **Top Navigation Pill**: `← SERVICE CAPABILITY` / `← CASE STUDY` pill badge inside a rounded icon container.
- **Editorial Title Typography**: MUST use medium-weight serif italic font (`text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-zinc-900 tracking-tight leading-[1.14]`). Do NOT use heavy `font-extrabold`.
- **Top CTA Action Pill**: Black pill button with pulsing status dot (`Book Strategy Call ↗`).
- **Tech Stack Pills**: Monospace tech badges (`bg-zinc-100/90 border border-zinc-200 text-[11px] font-mono font-semibold text-zinc-700`) with emerald status dots.
- **Under-Header Background Layer**: The main element MUST use `-mt-[68px] sm:-mt-[96px] pt-28 sm:pt-36` so top background elements and ambient blurred cover images extend smoothly up behind the sticky transparent header.
- **Right-Side Blurred Cover Image**: Full-height right-side cover image preview (`top-0 right-0 w-full sm:w-1/2 lg:w-[55%] h-[650px] sm:h-[780px] filter blur-[8px] opacity-40 sm:opacity-55`) with smooth fade gradients.
- **2-Column Body & Sticky "ON THIS PAGE" Navigation**:
  - Left Column (`lg:col-span-8`): 8 detailed architectural sections + feature callout boxes (`bg-purple-50/60 border border-purple-200/70`) + code snippets + defense layer tables.
  - Right Column (`lg:col-span-4`): `OnThisPageNav` client component tracking active scroll sections and applying `border-l-2 border-black -ml-[25px] pl-5 font-bold text-black` to the active link.
- **Full-Bleed CTA Banner Position**: `ConsultationCtaBanner` MUST be placed OUTSIDE the inner `max-w-7xl` content container so it can expand to its full `max-w-[1562px]` card width without clipping the right-side rotating sticker badge.
- **Container Width Consistency**: Main content containers across ALL pages (Homepage, Services, Case Studies, Blog) MUST use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (1280px) for 100% visual width consistency.
- **Unified Footer**: All pages MUST render `<SiteFooter />` directly at the bottom with a tight gap (`mb-8 sm:mb-12`) below the CTA card.

## 6. Terminal & PowerShell Constraints (Windows)
- In PowerShell, do NOT use `&&` for chaining commands. Always use `;` as the statement separator (e.g., `git add .; git commit -m "..."; git push`).
- Long-running dev server and `npm` commands that require system PATH should run unsandboxed (`BypassSandbox: true`).

