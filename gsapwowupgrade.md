# GSAP "Wow" Upgrade — NForce One

Hand this whole document to your AI coding assistant. It supersedes the earlier animation brief. I checked the live site: GSAP is wired in and the stat counters do animate, but almost everything else uses the same generic "fade up + opacity, 0.6s, ease power2" scroll reveal that every AI-built site ships with now. That's why it feels flat — it's technically animating, but it has no personality and no single moment that feels impressive. This brief fixes that.

## The core problem to fix first

**Sameness kills "wow."** If every section fades up identically, the eye stops registering it as motion after the second one — it becomes visual noise instead of life. Real "alive" sites work because they have 3-5 **signature moments** built with real craft, surrounded by everything else moving fast and quietly so the signature moments have contrast to pop against.

Tell the AI explicitly:
> Audit the current implementation. Anywhere you find a generic `opacity:0, y:20-40 → opacity:1, y:0` ScrollTrigger reveal applied uniformly across sections, replace it per the spec below. Do not keep the current one-size-fits-all reveal.

## Design direction

This is a dark, red/black, monospace "enterprise systems console / HUD" brand ([SYS.SPEC], [EXP.14], bracketed tags, dotted grid). The "wow" should come from motion that feels like **a system powering on and staying alive** — precise, mechanical, confident, with a bit of sci-fi HUD flavor — not bouncy, not playful, not generic SaaS fade-ups. Think: the boot sequence of a spacecraft console, not a Squarespace template.

Reference feel: Linear.app's precision + Apple product-page scroll choreography + a military/aerospace HUD's scan lines and readouts. Nothing should feel like a free WordPress animation plugin.

## The 5 signature moments to build (do these properly, in this order)

### 1. Hero — the single most important animation on the site
This is what everyone sees first; it has to be the best thing on the page.
- Mask each headline line inside `overflow:hidden`, animate each line from `yPercent:120` to `0` with `ease:"expo.out"`, `duration:1.1`, staggered `0.12s` apart — not `power2`, expo has a much sharper, more "snap into place" feel.
- The instant the last line lands, run a **very fast double-flicker** on "Advantages." (2 flickers of `opacity 1→0.3→1` over ~120ms total) like a HUD label powering on — this single detail sells the whole "alive" feeling more than any scroll reveal will.
- Add real mouse-parallax depth: track `mousemove`, map to `gsap.quickTo()` on 2-3 layers (headline moves least, background grid moves most) so the hero has actual 3D depth when you move the cursor, not just a static reveal.
- The eyebrow tag's red dot: don't just pulse it — give it a `boxShadow`/glow ring that expands and fades outward on each pulse (like a radar ping), `repeat:-1`, ~2s cycle.

### 2. A recurring "scan sweep" motif that ties the whole page together
Right now nothing connects sections into one system — each one just fades in isolation. Add one recurring visual signature: a thin horizontal red scanline (1-2px, subtle glow) that sweeps top-to-bottom across a section **once**, right as it enters the viewport, just ahead of that section's content revealing — like the section is being "scanned/rendered" into existence. Use it on the hero, the flagship Pega panel, and the final CTA (3 places only — if it's everywhere it stops being special). `duration:0.6`, `ease:"power1.inOut"`, translate a full-width absolutely-positioned div from `top:0%` to `top:100%`.

### 3. Digit-roll counters, not plain number interpolation
Plain `onUpdate` number interpolation (what's likely there now) looks like a spinning odometer only if you fake it with real digit columns. Upgrade the stats-strip and case-study counters: render each digit in its own small `overflow:hidden` column, and on trigger, animate each column's inner digit-strip (`0123456789` stacked vertically) with `yPercent` to land on the right digit, staggered a few ms per column left-to-right, `ease:"power3.out"`, `duration: 0.9-1.3` scaled to how many digits change. This reads as dramatically more "premium/mechanical" than a ticking number and costs little extra code. Keep the existing underline-bar detail — animate it filling `scaleX:0→1` in sync with the digit roll, not before/after it.

### 4. Real magnetic cursor + tactile buttons
Buttons popping in with fade/scale isn't enough to feel "alive" — they need to feel physically responsive to the user's presence.
- Add a small crosshair-style custom cursor (fits the HUD theme) that smoothly follows the mouse via `gsap.quickTo(el, "x"/"y", {duration:0.5, ease:"power3"})`, and expands into a thin ring when hovering any button/link.
- On every primary button, add real magnetic pull: on `mousemove` within ~50px of the button, translate the button (and its text slightly less than its border, for a subtle parallax-within-the-button effect) up to 10px toward the cursor; snap back with `ease:"elastic.out(1, 0.4)"` on leave. This one interaction, done well, is the thing people notice and remember about a site.

### 5. HUD-bracket hover state for every card (spec cards, capability rows, case studies, industry cards)
Replace whatever hover effect exists (or lack of one) with a consistent, branded micro-interaction: on hover, four small corner brackets (`⌐` shapes, absolutely positioned, using border segments) animate outward from the card's center corners to sit just outside the card's actual corners, like a targeting reticle locking onto the element (`duration:0.25, ease:"power2.out"`). Combine with a fast, subtle border-color brighten and a barely-there `scale:1.01`. This is cheap to build, consistent across every clickable card on the site, and reinforces the HUD identity way more than a generic shadow-lift.

## Rules that make the difference between "wow" and "busy"

- **Speed up almost everything else.** Non-signature reveals (case study cards, article cards, industry cards) should be quick and confident: `duration:0.5-0.6`, `ease:"power3.out"`, `y:24` max (not 40+), stagger `0.06-0.08s`. Slow floaty fades read as sluggish, not premium.
- **Vary translate distance and easing slightly per element type** (headline vs. card vs. tag chip vs. button) — identical timing on everything is what makes it feel robotic/templated rather than alive.
- **Add inertia to the whole page.** Install **Lenis** for smooth scroll and tie it to `ScrollTrigger.update` via `gsap.ticker`. This alone makes the entire site feel more physical and considered, independent of any individual animation:
  ```js
  const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  lenis.on('scroll', ScrollTrigger.update);
  ```
- **Only 3-5 things should loop infinitely**: the radar-ping dot, the certified-practice marquee, the CTA glow breathe, the background grid drift. Everything else plays once per scroll-into-view. Looping everything is what makes a page feel busy instead of alive.
- Still respect `prefers-reduced-motion` (instant states, no parallax/cursor-follow/marquee) and still animate only `transform`/`opacity`/`filter:blur` (small radius only) for performance.

## What to tell the AI to actually do, in order

1. Audit current animations; strip out the uniform generic fade-up reveal.
2. Build the hero sequence (item 1) — get this one exactly right before touching anything else, it's the highest-leverage 20% of the work.
3. Add Lenis smooth scroll site-wide.
4. Build the scan-sweep motif (item 2) and wire it into exactly 3 sections.
5. Upgrade the stat/case-study counters to digit-roll (item 3).
6. Build the magnetic cursor + button system (item 4) and apply it globally.
7. Build the HUD-bracket card hover (item 5) and apply it to every card type site-wide for consistency.
8. Re-tune every remaining scroll reveal to the faster, varied timing above.
9. Test: reduced-motion users get an instant, fully usable page; nothing blocks clicking; 4x CPU throttle doesn't drop frames on the hero or the card grids.
