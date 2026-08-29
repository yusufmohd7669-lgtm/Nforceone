# Claude Code Prompt — Rebuild NForce One Website

> Copy everything below into Claude Code in your new empty repository. It contains the full audit of the current live site (nforce.one), the tech stack decision, the site map, the design system, and every functional/content requirement needed to ship a complete, production-ready rebuild.

---

## Prompt to paste into Claude Code

I want you to build a complete, production-ready rebuild of my company's marketing website in this repository. This is a from-scratch rebuild (not a port of the old code) — the old site is only a reference for content and IA. Read this whole brief before writing any code, then propose a short plan and start building.

### 1. Company & project context

NForce One is a B2B IT consultancy. Core service lines: **Pega Development, Pega Testing, QA Testing, Data Analytics, Big Data, Database Management, DevOps, Web Design & Development, IT Development (custom software), Artificial Intelligence, UI/UX, and Management Services (IT program/project management)**. Pega implementation is the flagship specialization. Primary buyers are enterprise decision-makers evaluating an IT delivery partner — the site's job is to build credibility and generate qualified leads (calls/form submissions), not just describe services.

Tagline/logo: "N1 — Let's Do IT!" — keep this mark, it's a decent pun, but don't force it into copy elsewhere.

### 2. Audit of the current live site — what's broken and must NOT be carried forward

The current site (nforce.one) is a static HTML template (jQuery 3.6 + jquery-migrate, old TweenMax/GSAP, `charming.js` per-character text splitting, `imagesloaded`) with these confirmed problems:

- **Mismatched template copy left unedited.** The Careers page says *"We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic"* and the Contact page headline is *"Let's make your brand brilliant!"* — both are leftover branding-agency boilerplate that contradicts the rest of the site's IT-consultancy positioning. Do not reuse this copy. Replacement copy is in section 5.
- **A copy-paste title bug**: the DevOps and Database Management service pages both carry the H1 "Robust **Testing** Solutions for X" (cloned from the QA/Pega Testing page and never fixed). Fix this in every service page — each H1 must describe its own service.
- **A typo**: "Management Servies" on the homepage service grid → "Management Services."
- **Broken/lazy marquee content**: several horizontal scrolling ticker bands just repeat one word 9-10 times with zero information ("Amazing Services" ×10, "ABOUT US" ×10, "CAREER" ×10, "Get In Touch" ×9). Do not reproduce this pattern. If you build a marquee, it must carry real rotating content (see section 6).
- **A broken/annoying full-page preloader**: every page load (and, observed during testing, some in-page scroll/interaction) triggers a multi-second full-screen animation that spells out a word letter-by-letter and blocks the page. This must not exist in the rebuild — see section 7 for the performance/animation approach to use instead.
- **Homepage advertises 12 services, only 6 have real pages behind them** (Web Design and Development, IT Development, Artificial Intelligence, UI UX, Management Services, and Big Data are listed as service tiles on the homepage with no destination page — dead-end links). Every service listed anywhere on the site must resolve to a real page.
- **No functional lead capture.** The Contact page has only a phone number (+1 (972) 499-6667), four social icons (Facebook/Twitter/LinkedIn/Instagram), and a "Let's Talk" button that does not appear to submit anywhere — no actual `<form>` fields, no email address, no physical address.
- **No trust signals at all**: no case studies, no client logos/testimonials, no stated Pega partner tier/certifications, no team/leadership bios, no real job listings on Careers (just the mismatched intro paragraph and nothing else), no privacy policy or terms.

### 3. Tech stack (use exactly this — non-negotiable requirements from me: Next.js, TypeScript, and GSAP)

- **Framework:** Next.js 15.x, App Router, **TypeScript throughout — strict mode on, no `.js`/`.jsx` files anywhere, no untyped `any` used as a shortcut.** Every component, hook, utility, API route, and content schema is typed. Use Server Components by default; mark a component `"use client"` only when it genuinely needs interactivity/animation/state.
- **Styling:** Tailwind CSS 4.x + a small typed `tailwind.config.ts` design-token setup matching section 6.
- **Animation:** **GSAP 3.x is the primary animation engine**, wired in via `@gsap/react`'s `useGSAP()` hook (handles cleanup/StrictMode correctly — do not hand-roll `useEffect` + manual `.kill()` calls). Use `ScrollTrigger` for scroll-driven work and `SplitText` for headline text reveals (both are free/bundled in current GSAP versions — confirm licensing when you scaffold). See section 7 for the specific animation spec — the goal is tasteful, premium, and performant, not the old site's blocking full-page loader.
- **Smooth scroll:** Lenis, synced to GSAP's ScrollTrigger (`ScrollTrigger.scrollerProxy` / Lenis's `raf` tied to GSAP's ticker) for a cohesive, high-end scroll feel across the whole site — this is a deliberate premium touch, implement it once at the root layout, not per-page.
- **Content:** typed content modules — either MDX via `next-mdx-remote-client`/`@next/mdx` or plain TypeScript data files (e.g. `content/services.ts`) — every content shape defined as a Zod schema and inferred TS type (`services`, `caseStudies`, `team`, `insights`, `jobs`). No headless CMS for v1 — content lives in the repo and ships via normal PRs, fully type-checked at build time.
- **Interactive components:** typed React client components for: mobile nav menu, services dropdown, marquee, contact form, any filterable list (e.g. case studies by industry) — props and state fully typed, no implicit any.
- **Forms/backend:** a Next.js Route Handler (`app/api/contact/route.ts`, typed request/response) that sends via **Resend** (preferred) or Formspree as a zero-backend fallback. Validate the payload with a shared Zod schema (same one used for the client-side form) + a honeypot field + basic rate limiting — never trust client-only validation.
- **Images:** `next/image` for automatic optimization/responsive `srcset`; no manual load-detection scripts.
- **Fonts:** `next/font/google` or `next/font/local` (self-hosted, no runtime `fonts.googleapis.com` `<link>` tags like the old site had) — zero layout shift, typed font variables.
- **SEO integration:** the Next.js Metadata API (`generateMetadata` per route, fully typed) for titles/OG/Twitter tags, a typed `sitemap.ts` and `robots.ts` (Next's built-in file conventions).
- **Analytics:** Plausible (cookieless, no consent banner required) unless I tell you otherwise.
- **Hosting target:** Vercel.

### 4. Site map — build all of these as real pages

**Utility/legal:** Privacy Policy, Terms of Service, 404 page (on-brand, not default).

**Top-level marketing pages:**
- `/` Home
- `/about` — company story + mission (keep the existing mission language: *"revolutionize businesses through transformative technology solutions"* is fine as a seed) + **Team/Leadership** section with named people, titles, and any individual Pega certifications
- `/services` — services hub/overview linking out to every individual service page below (don't dump all descriptions on one page — link out)
- `/services/pega-development`
- `/services/pega-testing`
- `/services/qa-testing`
- `/services/data-analytics`
- `/services/big-data` — differentiate clearly from Data Analytics: this page is about data infrastructure/pipelines/scale (data lakes, ETL/ELT, distributed processing, governance), Data Analytics is about insight/dashboards/ML — don't let the two overlap in copy
- `/services/database-management`
- `/services/devops`
- `/services/web-development`
- `/services/it-development` (custom software / systems integration — positioned as the umbrella above Pega/Web/Data)
- `/services/artificial-intelligence`
- `/services/ui-ux`
- `/services/management-services` — scope this clearly as IT program/project management, not generic business consulting
- `/pega` — a dedicated flagship "Pega Services" hub distinct from the general services list (this is standard practice among Pega implementation partners and reflects that Pega is the primary specialization); state NForce One's actual, verifiable Pega partner tier and capability (Authorized/Specialized/Global Elite/Government Elite; Sell/Deliver/Build/Training — use Pega's real terminology, don't invent a badge) — **flag to me in your plan that you need the real tier/capability info from me before publishing a specific claim**
- `/industries` — hub linking to 3-4 vertical pages (pick verticals that plausibly match an IT/Pega consultancy's client base — e.g. Insurance, Banking & Financial Services, Healthcare, Retail — flag this as an assumption to confirm with me)
- `/case-studies` — hub + individual case study pages, each with: client/industry, challenge, solution, quantified outcome. **Flag to me that you need real project outcomes/permissions** — scaffold with clearly-marked placeholder content structured correctly rather than inventing fake client names or metrics
- `/careers` — real intro (see section 5) + either actual open roles with an apply flow, or an honest "no open roles right now, submit your resume" state with a resume-upload/contact mechanism — never ship an empty page with generic copy again
- `/insights` — blog/resource list (even a slow-cadence placeholder structure is fine to scaffold; content can be added later)
- `/contact` — real working contact form (see section 7), phone, a real email address and physical address (flag to me that you need these), map embed optional, social links

### 5. Content fixes and new copy to use

Replace the Careers intro with something in this direction (adjust to match my brand voice once you see the full site, but do not reuse the old branding-agency copy):

> "At NForce One, we're building a team of engineers, analysts, and consultants who thrive on solving hard technology problems — from Pega platform development to data analytics and DevOps automation. If you want to work on enterprise-scale projects, grow your technical expertise, and help organizations turn IT challenges into competitive advantages, we want to hear from you."

Replace the Contact intro with something in this direction:

> "At NForce One, we're dedicated to providing comprehensive, transformative technology solutions to clients across industries — from Pega development and testing to data analytics and DevOps. We're not just a service provider; we're a partner in your journey toward growth, efficiency, and digital transformation. Tell us about your project and let's talk about how we can help."

For every new service page (the 6 that don't exist today — Web Development, IT Development, AI, UI/UX, Management Services, Big Data), write a hero paragraph + 5-8 capability subsections in the same structure as the existing pages (short headline + 1-3 sentence description each), matching the tone of the existing Pega Development/QA Testing pages (confident, outcome-focused, not generic marketing fluff).

Homepage structure, top to bottom:
1. Hero — bold headline (benefit/positioning-driven, not just "Welcome to NForce One"), one primary CTA button ("Book a Consultation" or similar — pick one CTA phrase and reuse it identically everywhere on the site: nav, hero, mid-page bands, footer)
2. Trust strip — Pega partner badge/tier (once real info is provided) + any other certifications, placed high, not buried in the footer
3. Value pillars — 3-4 short blocks on why NForce One (not a restated service list)
4. Services grid — condensed tiles for all 12 services, every tile links to a real page
5. Case study teasers — 2-3 cards with a metric each, linking to `/case-studies`
6. Industries strip
7. Insights teaser (2-3 latest posts)
8. CTA band
9. Footer — 4-column mini-sitemap (Solutions/Services/Company/Resources) + certifications + social icons + contact info

### 6. Design system — keep the mood, rebuild the execution

The current dark, bold, editorial look is worth keeping conceptually; the implementation is what needs replacing.

**Color tokens (Official NF1 Logo Palette)**
```
--color-bg:          #050505   /* deep pitch black matching logo background */
--color-bg-raised:   #121214   /* dark charcoal raised containers and cards */
--color-text:        #ffffff   /* pure crisp white from the 'N' & 'Let's Do' text */
--color-text-muted:  #9ca3af   /* metallic silver for secondary text */
--color-border:      #222226   /* hairline subtle dividers */
--color-accent:      #E50914   /* official NF1 Racing Crimson Red from the '1' & 'IT!' */
--color-accent-hover:#ff1e27   /* vibrant scarlet red on hover */
--color-accent-text: #ffffff   /* pure white text placed on top of the crimson accent color */
```
Check accent-on-dark and muted-text-on-dark combinations against WCAG AA contrast — pure white on `#E50914` crimson red achieves high contrast compliance for buttons, badges, and highlights.

**Type**
- Display/headline font: a bold geometric/grotesk sans (e.g. General Sans, Inter Tight, or similar self-hostable family) — tight tracking, large scale (`clamp()`-based responsive sizing).
- Body font: a clean, highly readable sans (Inter or similar).
- Small uppercase tracked-out "eyebrow" labels above section headlines (matches the existing "WHAT WE DO ?" / "WHO WE ARE ?" pattern — keep this convention).

**Components to build**
- Nav: logo + wordmark, horizontal menu with a Services dropdown, one persistent CTA button on the right, collapses to a full-screen hamburger menu below `768px`.
- Hero.
- Service card grid (3-4 cols desktop → 2 → 1 responsive).
- Feature-list rows with a hover-arrow (↗) interaction — this is a nice signature pattern from the old site, keep it, but implement it in pure CSS (`:hover`/`:focus-visible` transform + underline reveal), no JS required.
- Marquee/ticker — only build this if it carries real rotating content (client logos, an actual rotating list of service names, or short testimonial lines); implement as a seamless GSAP infinite-loop timeline (duplicated content track, `repeat: -1`), paused on hover and swapped for a static state under `prefers-reduced-motion`.
- CTA band, footer, case-study card, testimonial card, team bio card, job listing card, contact form.

### 7. Animation spec — professional, GSAP-driven, and performant (plus performance/accessibility/functional requirements)

This is a priority for me: I want new, tasteful, professional-feeling motion design that replaces the old site's clunky/broken preloader entirely, using GSAP as the primary engine. Build a small `lib/animations/` (or `hooks/`) module of reusable, typed GSAP hooks/utilities so every component uses the same primitives instead of one-off scripts scattered around. Specifically:

- **No full-page preloader and no route-transition animation longer than ~300ms.** Replace the old letter-by-letter loader entirely. Use a `template.tsx` at the root (or per top-level route) to run a short, subtle GSAP fade/slide-up on route entry (opacity + 8-12px translateY, ~250-350ms, `power2.out`) — never anything that blocks first paint or can re-trigger mid-session.
- **Hero headline reveal:** GSAP `SplitText` splitting the hero headline into words or characters, staggered fade+rise entrance on page load (`stagger: 0.02-0.04`, `duration: 0.6-0.9`, `ease: power3.out`), run once via `useGSAP` with a `gsap.context()` scope so it's safe under React StrictMode/fast refresh.
- **Scroll-triggered section reveals:** `ScrollTrigger`-driven `fromTo` (opacity 0→1, y 24-40px→0) on section headers, paragraphs, and cards as they enter the viewport (`start: "top 80%"`, `toggleActions: "play none none reverse"`). Apply with a small stagger (`0.08-0.12s`) across grids (service cards, feature-list rows, case-study cards, team cards) so they cascade in rather than popping in simultaneously.
- **Stat/metric counters:** for case-study metrics and any homepage stats, animate the number counting up from 0 on scroll-into-view using GSAP's `gsap.to()` on a numeric value with `snap: { value: 1 }` and `ScrollTrigger` as the trigger — a common, professional pattern for this kind of site.
- **Image reveals:** case-study/hero images animate in via a `clip-path` wipe (e.g. `inset(0 100% 0 0)` → `inset(0 0 0 0)`) driven by GSAP + ScrollTrigger — a modern, tasteful replacement for the old `charming.js` text-splitting effect, used on images rather than every heading.
- **Hover micro-interactions:** the signature feature-list hover-arrow (↗) rows get a GSAP `quickTo()`-powered smooth transform/translate on hover/focus (snappier and more "premium" than a plain CSS transition); primary CTA buttons get a subtle scale + fill-color animation on hover, also via `quickTo` for buttery interpolation.
- **Nav:** underline-follow or magnetic-lite hover state on nav links using GSAP, and a smooth slide/fade-in for the mobile full-screen menu (timeline: backdrop fade, then staggered link entrance).
- **Smooth scroll:** Lenis wired to GSAP's ticker at the root layout so all ScrollTrigger-based animations feel physically smooth site-wide, not just within individual components.
- **Every animation must be wrapped in a `prefers-reduced-motion: reduce` check** (a shared `usePrefersReducedMotion` hook) that either skips the animation entirely or reduces it to an instant/opacity-only state — this is both an accessibility requirement and something to verify explicitly before calling any page "done."
- **Cleanup discipline:** every GSAP animation lives inside `useGSAP(() => { ... }, { scope, dependencies })` from `@gsap/react` so timelines/ScrollTriggers are automatically reverted on unmount/re-render — no manual `useEffect` + `gsap.killTweensOf` patterns, and no memory-leaking ScrollTriggers piling up on client-side navigation.
- Keep the CSS-only hover-arrow/underline patterns from the old design only where GSAP would be overkill (e.g. a simple color transition) — use GSAP specifically for the reveal/scroll/counter/hero moments listed above where it visibly elevates the feel.
- Contact form: name, email, company, phone (optional), message, and a service-of-interest dropdown; honeypot spam field; client + server-side validation; accessible inline error states (`aria-invalid`, `aria-describedby`); real success/error UI with no full page reload; a visible `mailto:`/phone fallback for non-JS cases.
- SEO: unique `<title>`/meta description per page from frontmatter, Open Graph + Twitter Card tags with a real OG image per major page, auto-generated `sitemap.xml`, `robots.txt`, canonical URLs, `Organization` JSON-LD sitewide, `JobPosting` JSON-LD on any live listings, `BreadcrumbList` on service sub-pages. Clean URLs (`/about`, not `/page-about.html`).
- Accessibility: correct one-`<h1>`-per-page heading hierarchy, `alt` text on all images, visible focus states everywhere, landmark roles (`<nav>`, `<main>`, `<footer>`), skip-to-content link, verified color contrast.
- Responsive: test and confirm at 375px, 768px, 1024px, 1440px.
- Performance budget: Lighthouse Performance ≥ 95, LCP < 1.5s, no page shipping more than ~100KB gzipped JS excluding GSAP + the contact form bundle, both of which should still be code-split so pages that don't need them don't load them.

### 8. What I need to give you before some pages can go live (call these out explicitly in your plan, don't invent facts)

- Real Pega partner tier/capability designation (for the `/pega` page trust badge)
- Real client case studies/permissions, or explicit sign-off to launch with placeholder-structured content
- Real physical address and a company email address
- Confirmed industries/verticals to feature on `/industries`
- Any current job openings for `/careers`
- Team member names/titles/photos for `/about`

### 9. How to proceed

Scaffold the Next.js + TypeScript project (App Router, strict TS config, Tailwind, GSAP + `@gsap/react` + Lenis installed and wired at the root layout), set up the design tokens and base layout/components first, build the home page and one full service page end-to-end as a pattern — including its animations — then replicate the pattern across the remaining service pages and other sections. Flag every place you had to guess or placeholder real business information (per section 8) clearly in your final summary so I can fill those in before launch. Include a short README covering how to run, build, type-check, and add new typed content (services/case studies/team/jobs).
