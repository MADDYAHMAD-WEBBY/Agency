# Agency Web Architecture & Styling Guidelines

## 1. Persona & Tone
- Represent Hamad Ahmad as the solo Full-Stack Developer, Headless WP Specialist & Local SEO Expert.
- Use first-person perspective ("I", "My") in client communications, copywriting, and project descriptions; avoid generic agency plural terms ("We", "Our team") unless referring to explicit external partners.

## 2. Button Routing & Label Invariants
- **Primary Hero CTAs**: Link directly to `/contact?service=<TITLE>` or `/contact?industry=<TITLE>`.
- **Secondary Hero CTAs**: Always link to `#pricing` or `/pricing` with concise text (`Explore Packages & Pricing`).
- **Pricing Cards**: Link to `/contact?package=<PLAN>&service=<SERVICE>` or `/contact?package=<PLAN>&industry=<INDUSTRY>`.
- **Label Limits**: Keep button labels short and actionable (e.g. `Book Free Digital Audit`). Never interpolate long page headlines, descriptions, or titles into button text labels.

## 3. Performance & Animation Invariants
- For continuous horizontal tickers or marquees (e.g., brand logos, tech stack scrollers), use pure CSS `@keyframes` with `translate3d(0, 0, 0)` and `.animate-logo-marquee` to ensure GPU composition and completely eliminate Y-axis subpixel matrix drift over infinite loops.

## 4. Contact Page Deal Pre-selection System
- Always wrap `useSearchParams()` calls in `<Suspense>` on `/contact`.
- When `package`, `service`, or `industry` query parameters are detected:
  - Display a prominent **Selected Deal Highlight Badge** at the top of the form.
  - Pre-fill user booking notes and inquiry message textareas automatically.

## 5. Headless WordPress Integration Readiness
- Maintain dynamic App Router slug routes (`/services/[slug]`, `/industries/[slug]`, `/case-studies/[slug]`, `/blog/[slug]`) configured for WP GraphQL + ACF (Advanced Custom Fields) custom post types with Incremental Static Regeneration (ISR).
