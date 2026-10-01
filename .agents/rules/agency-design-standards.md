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

## 5. Terminal & PowerShell Constraints (Windows)
- In PowerShell, do NOT use `&&` for chaining commands. Always use `;` as the statement separator (e.g., `git add .; git commit -m "..."; git push`).
- Long-running dev server and `npm` commands that require system PATH should run unsandboxed (`BypassSandbox: true`).
