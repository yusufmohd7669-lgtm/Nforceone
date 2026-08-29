# GSAP Animation Brief — NForce One Website

Paste this whole document to your AI coding assistant (Claude Code, Cursor, etc.) working in the repo. It tells it exactly what stack to use, which sections exist, and what animation to build in each one, so the site feels alive instead of static — without turning it into a gimmick.

---

## 0. Context for the AI

This is a Next.js (App Router) site for **NForce One**, an enterprise Pega/IT consulting firm. The visual language is a dark "systems / HUD / terminal" aesthetic: black background, red (`#e11d2e`-ish) and white accents, monospace tags like `[SYS.SPEC]`, `[EXP.14]`, `[01]`, dotted grid background, bracket/spec-sheet typography. Animation choices should reinforce that "enterprise systems console" feeling — precise, mechanical, confident — not playful or bouncy.

Sections on the home page, top to bottom, in order:

1. Sticky nav bar (logo, links, "Book a Consultation" button)
2. Hero — eyebrow tag, 3-line gradient headline, subtext, 3 CTA buttons
3. Stats strip — 4 stat blocks (14+ Years, 90+ Guardrail Score, 100% On-Time, 99.99% SLA)
4. Certified practice ticker/marquee — scrolling row of capability tags
5. "Why NForce One" — 4 spec cards (SPEC-01 to SPEC-04)
6. Flagship Pega panel — large feature section with bullet list and tag chips
7. Capability catalog — grid of 12 numbered service cards ([01]–[12])
8. Case studies — 3 large cards with big stat numbers (70%, 14, 50k, 85ms, 99.999%, 100%)
9. Industry verticals — 4 cards (Insurance, Banking, Healthcare, Retail)
10. Insights/articles — 3 article cards
11. Final CTA panel
12. Footer

## 1. Stack & setup rules

- Use **GSAP 3** + **ScrollTrigger**. Install `gsap` (already includes ScrollTrigger, no separate paid plugins required — do NOT reach for SplitText/MorphSVG/club plugins; recreate "split text into lines/chars" manually by wrapping words/lines in spans at build time or with a small custom split utility).
- Use the **`@gsap/react`** package's `useGSAP()` hook in every client component that animates. It auto-cleans on unmount, which matters in Next.js App Router where components mount/unmount on navigation.
- Every animated component needs `'use client'` at the top.
- Wrap each component's animations in `gsap.context()` (or rely on `useGSAP`'s built-in context) scoped to a `useRef` container — never animate by global selector, always scope to the component's ref, so nothing leaks across route changes.
- Register plugins once in a small `lib/gsap.js`:
  ```js
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  export default gsap;
  ```
- **Respect `prefers-reduced-motion`**: check `window.matchMedia('(prefers-reduced-motion: reduce)')` and use `gsap.matchMedia()` to skip/shorten entrance animations and disable parallax/marquee for those users — swap to instant `opacity:1` states.
- **Performance**: animate only `transform` and `opacity` wherever possible. Avoid animating `width`, `top/left`, `box-shadow`, or `filter` on scroll-driven or frequent animations. Use `will-change: transform` sparingly and remove it after animation completes.
- Every scroll-triggered animation should default to `start: "top 80%"`, `toggleActions: "play none none reverse"` unless stated otherwise below, so content re-plays subtly on scroll-back but never re-triggers annoyingly.
- Batch grid/list reveals with `ScrollTrigger.batch()` instead of one ScrollTrigger per card (12-item catalog, case studies, etc.) for performance.
- Keep a single smooth-scroll layer optional: if adding Lenis for smooth scrolling, wire `lenis.on('scroll', ScrollTrigger.update)` and drive it off `gsap.ticker` — don't add smooth scroll unless asked, since it changes feel significantly; flag it as optional.

## 2. Global / site-wide animation

**Boot/preloader sequence** (runs once on first load only, ~0.8–1.2s, skip on route changes): black screen, monospace text like `[SYS.INIT] LOADING ARCHITECTURE...` types on with a terminal-style character reveal (`gsap.to` stepping through string with a text-plugin-free interval, or reveal via `clip-path`), then a horizontal scan-line sweeps once and the screen wipes up (`clip-path: inset(0 0 0% 0)` animating to `100%`) to reveal the hero underneath.

**Nav bar**: on scroll down past ~80px, animate nav to a shorter/condensed height and add a subtle bottom border-glow (`yPercent` + background-opacity tween). On scroll up, animate back. Use `ScrollTrigger` with `onUpdate` comparing scroll direction, animated with a short `gsap.to(nav, {duration:0.3, ...})` — not an abrupt class toggle.

**Custom cursor (optional but fits the HUD theme)**: a small crosshair/reticle cursor that follows the mouse with `gsap.quickTo()` for smooth lag, expands into a ring on hoverable elements (buttons, cards, links), and snaps/magnetizes toward buttons within ~40px (magnetic button effect: on `mousemove` over a button, translate the button up to 8–12px toward the cursor with `gsap.quickTo`, reset with `elastic` ease on `mouseleave`).

**Background grid**: the dotted/grid background already present should drift very slowly (huge duration, e.g. 60–120s, `backgroundPosition` or a translated pseudo-layer, linear ease, repeat -1) to feel like a live radar grid rather than a static texture. Keep displacement small (a few px) so it's subliminal, not distracting.

**Section reveal pattern (reuse everywhere)**: define one shared "reveal" pattern in a `hooks/useRevealAnimation.js` or a `<Reveal>` wrapper component: children start at `opacity:0, y:40`, animate to `opacity:1, y:0` with `duration:0.8, ease:"power3.out"`, triggered by ScrollTrigger at `top 85%`. For groups of siblings (cards, list items, stat blocks), stagger `0.08–0.12s` between children. This is the baseline "alive" feel used across every section below — sections should feel like they're powering on as you scroll to them.

## 3. Section-by-section detail

### Hero
- Eyebrow tag `[SYS.SPEC] ENTERPRISE IT ARCHITECTURE...`: reveal via a left-to-right `clip-path` wipe or a fast character-by-character terminal type-on, with the small red dot pulsing (infinite subtle `scale` 1→1.3→1 pulse, `repeat:-1`, `yoyo:true`, ~1.5s).
- Headline (3 lines, "Turn Complex IT Systems / into Competitive / Advantages."): split into lines (wrap each visual line in a span at markup level), animate each line up from `y:110%` inside an `overflow:hidden` mask, staggered ~0.1s apart, `ease:"power4.out"`, `duration:1`. This is the single highest-impact animation on the page — get this one polished.
- The gradient/red word ("Advantages.") can get a secondary subtle animation: a brief color-sweep or text-shadow flicker (2 quick flickers like a HUD label powering on) after the line lands.
- Subtext paragraph: fade + slight `y:20` rise, delayed to start just as headline finishes.
- 3 CTA buttons: stagger in with `scale:0.9→1, opacity:0→1`, `ease:"back.out(1.7)"`, each 0.08s apart. Apply the magnetic hover behavior from section 2 to all three.
- Optional: faint particle/scan lines drifting in the hero background, or a subtle parallax where the headline moves slightly slower than the background grid on mouse move (mouse-parallax, `gsap.quickTo` mapped from `mousemove` coordinates, small range ±10px).

### Stats strip (14+, 90+, 100%, 99.99%)
- Each block enters with the shared reveal pattern, staggered.
- The **number itself** count-up animates from 0 (or from a lower number) to its target value when it scrolls into view, using `gsap.to({val:0}, {val: target, duration: 1.6, ease:"power2.out", onUpdate: () => set text, snap:{val:1}})`. Preserve suffix (`+`, `%`) and decimals (99.99, 85ms) correctly — don't round off the decimal ones.
- The small monospace tag above each number (`[EXP.14]` etc.) can do a quick glitch-flicker (2–3 rapid opacity/text-scramble flickers) right before the count-up starts, like a readout initializing.

### Certified practice ticker
- Infinite horizontal marquee: duplicate the content once in the DOM, animate `xPercent: -50` linearly (`duration` scaled to content width, `ease:"none"`, `repeat:-1`), pause on hover (`gsap.globalTimeline` or a dedicated marquee timeline `.pause()`/`.resume()` on `mouseenter`/`mouseleave`).

### "Why NForce One" spec cards (SPEC-01–04)
- Cards stagger in with the shared reveal pattern.
- Each card's border should "draw itself in" on entrance: give the card a border built from an absolutely-positioned pseudo-element or SVG rect and animate `stroke-dashoffset` (if SVG) or clip-path corners growing from 0 to full, like a HUD panel materializing.
- On hover: subtle 3D tilt following cursor position (`gsap.to(card, {rotateX, rotateY, transformPerspective:800, ease:"power2.out", duration:0.4})`, reset on leave), plus the accent number (SPEC-01 etc.) shifts color/brightens.

### Flagship Pega panel
- Panel reveals with a clip-path wipe (`inset(0 100% 0 0)` → `inset(0 0 0 0)`) rather than a plain fade, since it's a large hero-like block.
- Bullet list items (Zero Technical Debt Architecture, etc.) stagger in with a small leading icon/checkmark that draws on (scale/opacity pop) just before the text.
- Tag chips (Pega Development Specs, Pega QA Testing) pop in with a light stagger and elastic ease.

### Capability catalog (12 services grid)
- Use `ScrollTrigger.batch()` so cards animate in small batches as the grid scrolls into view (not all 12 at once) — feels like a system loading a directory listing.
- Each card: fade + `y:30` + slight `scale:0.96→1`.
- The `[01]`–`[12]` index numbers can do a fast digit-flicker/scramble (cycle through 2–3 random digits before settling, ~150ms) right as the card lands — reinforces the "readout" feel.
- On hover: animate an accent border/glow sliding in and a small arrow icon translating right (`x:0→4`, infinite yoyo while hovered or single move).

### Case studies
- Each case study card reveals with the shared pattern, but stagger the two big stat numbers inside each card with count-up animations (70%, 14, 50k, 85ms, 99.999%, 100%) triggered independently when that specific card enters view — same count-up technique as the stats strip, respecting units/decimals/suffixes.
- Consider a horizontal-scroll variant if there's room: pin the section briefly and translate the 3 cards horizontally as the user scrolls vertically (`ScrollTrigger` with `pin:true`, `scrub:true`) — flag this as an enhancement option since it changes scroll feel; simple staggered vertical reveal is the safe default.

### Industry verticals
- 4 cards stagger in; on hover, reveal the "Explore Vertical" link/arrow with a slide-up-and-fade (`yPercent:100→0`) inside an `overflow:hidden` wrapper, like the label rising into place.

### Insights / articles
- Standard staggered card reveal; image or top accent bar animates a clip-path reveal left-to-right as each card enters.
- On hover: card lifts (`y:-6`, subtle shadow growth via opacity of a pre-rendered shadow element, not `box-shadow` blur animation) and the "Read Article" text underline draws in (`scaleX:0→1` on a pseudo-element, `transformOrigin:left`).

### Final CTA panel
- Background gets a slow pulsing radial glow (`opacity`/`scale` breathing loop on a blurred radial-gradient div, infinite yoyo, ~4s).
- Headline uses the same line-mask reveal as the hero for consistency.
- "Book a Consultation" button gets a stronger magnetic pull + a subtle infinite pulse on its glow/border to draw the eye, but keep it gentle — this is the final conversion point, don't over-animate it into a distraction.

### Footer
- Simple fade-up on first scroll into view; no looping animation needed here.

## 4. What "alive" means here — guardrails

- Every animation should read as **precise and mechanical** (matching the systems/HUD branding), not bouncy or cartoonish. Prefer `power`/`expo` eases; use `back`/`elastic` only sparingly on buttons and small UI chips.
- Nothing should loop forever at a noticeable amplitude except: the marquee, the background grid drift, the eyebrow-tag pulse dot, and the CTA glow breathing — all of those should be subtle enough to sit in peripheral vision without demanding attention.
- No animation should block interaction — CTAs and nav links must be clickable immediately, don't gate them behind animation completion.
- Test at 4x CPU throttle in DevTools; if anything drops frames, first suspect an animation touching layout-triggering properties and switch it to `transform`/`opacity`.

## 5. Deliverable checklist for the AI

1. Add `gsap` and `@gsap/react` to the project.
2. Create `lib/gsap.js` for plugin registration.
3. Build a reusable `<Reveal>` component (or `useRevealAnimation` hook) implementing section 2's shared pattern, and a `useCountUp(target, opts)` hook for all the number animations (stats strip + case study stats).
4. Go section by section per this brief, wiring animations into the actual existing components (find them under the app's component/section files rather than rewriting markup from scratch).
5. Add the `prefers-reduced-motion` guard globally once, not per component.
6. Verify: scroll through the whole page at normal speed and at fast "flick" scroll speed, confirm nothing double-fires or flashes unstyled content, confirm reduced-motion users get an instantly-usable page, confirm Lighthouse performance score doesn't regress meaningfully.
