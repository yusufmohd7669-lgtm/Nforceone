# NForce One — Signature Scroll Moments (GSAP 3 + `@gsap/react`)

Ready-to-adapt code for the 5 signature animation moments. Hand this whole file to your coding AI alongside the animation spec docs — it has actual working components/hooks, not just descriptions.

Install:

```bash
npm install gsap
npm install @gsap/react
```

`lib/gsap.js` — registers `ScrollTrigger` exactly once, everything else imports `gsap`/`ScrollTrigger` from here:

```js
// lib/gsap.js
'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

Everything below assumes a `@/*` path alias to your project root. Adjust import paths if yours differs.

---

## 1. `<HeroReveal>` — masked line reveal + accent flicker + parallax + eyebrow pulse

`components/HeroReveal.jsx`

```jsx
'use client';
// Component for: the homepage (and any landing-page) hero — the single
// above-the-fold headline block. Mount once per page.

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function HeroReveal({
  eyebrow = 'SYS.ONLINE',
  lines = [],              // e.g. ["We build systems", "that outlast the", "hype cycle."]
  accentWord,               // exact substring inside one line to highlight, e.g. "outlast"
  accentLineIndex = 0,      // which line (index) contains the accent word
  className = '',
}) {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const accentRef = useRef(null);
  const headlineLayerRef = useRef(null); // moves LEAST — keep the h1 readable/stable
  const midLayerRef = useRef(null);      // moves a bit more — HUD frame lines / decorations
  const bgLayerRef = useRef(null);       // moves MOST — dotted grid / ambient glow
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  lineRefs.current = [];
  const registerLine = (el) => {
    if (el) lineRefs.current.push(el);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          fullMotion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const { reduceMotion } = context.conditions;

          if (reduceMotion) {
            gsap.set(lineRefs.current, { yPercent: 0 });
            if (accentRef.current) gsap.set(accentRef.current, { opacity: 1 });
            gsap.set(dotRef.current, { opacity: 1 });
            gsap.set(ringRef.current, { opacity: 0 });
            return;
          }

          // ---- 1. Masked line reveal -------------------------------------
          const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

          tl.fromTo(
            lineRefs.current,
            { yPercent: 120 },
            {
              yPercent: 0,
              duration: 1.1,
              stagger: 0.12,
              // expo.out slams in hard and decelerates to a dead stop —
              // reads as data "snapping" into place, which fits the
              // HUD/systems theme far better than a soft power2 float.
            }
          );

          // ---- 2. Accent double-flicker once the last line has landed ---
          if (accentRef.current) {
            tl.to(
              accentRef.current,
              { opacity: 0.3, duration: 0.06, ease: 'none' },
              '-=0.1'
            ).to(accentRef.current, { opacity: 1, duration: 0.06, ease: 'none' });
          }

          // ---- 3. Mouse parallax across 3 depth layers -------------------
          const xToBg = gsap.quickTo(bgLayerRef.current, 'x', { duration: 0.8, ease: 'power3' });
          const yToBg = gsap.quickTo(bgLayerRef.current, 'y', { duration: 0.8, ease: 'power3' });
          const xToMid = gsap.quickTo(midLayerRef.current, 'x', { duration: 0.6, ease: 'power3' });
          const yToMid = gsap.quickTo(midLayerRef.current, 'y', { duration: 0.6, ease: 'power3' });
          const xToHead = gsap.quickTo(headlineLayerRef.current, 'x', { duration: 0.5, ease: 'power3' });
          const yToHead = gsap.quickTo(headlineLayerRef.current, 'y', { duration: 0.5, ease: 'power3' });

          const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const relX = (e.clientX / innerWidth - 0.5) * 2;
            const relY = (e.clientY / innerHeight - 0.5) * 2;

            xToBg(relX * 30);   // background: most travel, feels "far away"
            yToBg(relY * 30);
            xToMid(relX * 14);  // mid decorations: half-ish travel
            yToMid(relY * 14);
            xToHead(relX * 5);  // headline: barely moves, stays legible
            yToHead(relY * 5);
          };
          window.addEventListener('mousemove', handleMouseMove);

          // ---- 4. Eyebrow dot pulse + expanding glow ring ----------------
          gsap.to(dotRef.current, {
            opacity: 0.4,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });

          gsap.fromTo(
            ringRef.current,
            { scale: 0.8, opacity: 0.6 },
            {
              scale: 2.2,
              opacity: 0,
              duration: 2,
              repeat: -1,
              ease: 'power1.out',
            }
          );

          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={bgLayerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" />
      <div ref={midLayerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" />

      <div className="relative flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span ref={ringRef} className="absolute inline-flex h-full w-full rounded-full bg-red-500" />
          <span ref={dotRef} className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
        <span className="font-mono text-xs tracking-widest text-red-500/80">[{eyebrow}]</span>
      </div>

      <h1 ref={headlineLayerRef} className="relative font-mono font-bold text-4xl md:text-6xl leading-tight text-white">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <span ref={registerLine} className="block will-change-transform">
              {i === accentLineIndex && accentWord ? renderWithAccent(line, accentWord, accentRef) : line}
            </span>
          </span>
        ))}
      </h1>
    </section>
  );
}

function renderWithAccent(line, accentWord, accentRef) {
  const idx = line.indexOf(accentWord);
  if (idx === -1) return line;
  const before = line.slice(0, idx);
  const after = line.slice(idx + accentWord.length);
  return (
    <>
      {before}
      <span ref={accentRef} className="text-red-500">
        {accentWord}
      </span>
      {after}
    </>
  );
}
```

Usage:

```jsx
<HeroReveal
  eyebrow="SYS.ONLINE"
  lines={['We build systems', 'that outlast the', 'hype cycle.']}
  accentWord="outlast"
  accentLineIndex={1}
/>
```

---

## 2. `<ScanSweep>` — one-shot scroll-triggered scanline

`components/ScanSweep.jsx`

```jsx
'use client';
// Component for: sparingly-used section accents sitewide (above a stats
// block, a pricing table, a case-study panel) — expect 3-4 mounts total.

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

/**
 * Renders an absolutely-positioned line inside `sectionRef`'s DOM subtree.
 * `sectionRef` must be a `position: relative` element that wraps this
 * component (the sweep positions itself relative to it).
 */
export default function ScanSweep({ sectionRef, color = '#ff2b2b', className = '' }) {
  const lineRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef?.current || !lineRef.current) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(lineRef.current, { top: '0%', opacity: 1 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true, // fire exactly one time, ever
            },
          })
          .fromTo(
            lineRef.current,
            { top: '0%', opacity: 1 },
            {
              top: '100%',
              duration: 0.6,
              ease: 'power1.inOut',
            }
          )
          .to(lineRef.current, { opacity: 0, duration: 0.25 }, '-=0.05');
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(lineRef.current, { opacity: 0 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={lineRef}
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 w-full h-px ${className}`}
      style={{
        background: color,
        boxShadow: `0 0 8px 1px ${color}, 0 0 24px 4px ${color}66`,
      }}
    />
  );
}
```

Usage:

```jsx
function StatsSection() {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} className="relative py-24">
      <ScanSweep sectionRef={sectionRef} />
      {/* ...stats content... */}
    </section>
  );
}
```

---

## 3. `useDigitRoll` + `<DigitRoll>` — odometer-style stat digits

`hooks/useDigitRoll.js`

```js
'use client';
// Hook for: KPI/stat tiles and metric strips (e.g. "[SYS.UPTIME] 99.99%").

import { useRef, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

function parseDigits(value, decimals) {
  const fixed = decimals != null ? Number(value).toFixed(decimals) : String(value);
  return fixed.split('').map((ch) =>
    ch === '.' ? { type: 'static', value: '.' } : { type: 'digit', value: Number(ch) }
  );
}

export function useDigitRoll(targetValue, options = {}) {
  const {
    startValue = 0,
    decimals,
    duration = 1.2,
    ease = 'power3.out',
    staggerEach = 0.04,
    scrollTriggerRef = null,
    start = 'top 85%',
  } = options;

  const resolvedDecimals = decimals ?? (String(targetValue).split('.')[1]?.length || 0);

  const targetSlots = useMemo(() => parseDigits(targetValue, resolvedDecimals), [targetValue, resolvedDecimals]);
  const startSlots = useMemo(() => parseDigits(startValue, resolvedDecimals), [startValue, resolvedDecimals]);

  const containerRef = useRef(null);
  const columnRefs = useRef([]);
  columnRefs.current = [];
  const registerColumn = (el) => {
    if (el) columnRefs.current.push(el);
  };

  const targetDigits = targetSlots.filter((s) => s.type === 'digit');
  const startDigits = startSlots.filter((s) => s.type === 'digit');
  const changedCount = targetDigits.reduce(
    (count, slot, i) => (slot.value !== startDigits[i]?.value ? count + 1 : count),
    0
  );

  useGSAP(
    () => {
      if (!columnRefs.current.length) return;
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        columnRefs.current.forEach((strip, i) => {
          gsap.set(strip, { yPercent: -(startDigits[i]?.value ?? 0) * 10 });
        });

        const ratio = targetDigits.length ? changedCount / targetDigits.length : 0;
        const scaledDuration = duration * gsap.utils.clamp(0.4, 1, ratio || 1);

        gsap.to(columnRefs.current, {
          yPercent: (i) => -targetDigits[i].value * 10, // each digit = 10% of the 10-row strip's height
          duration: scaledDuration,
          ease,
          stagger: staggerEach,
          scrollTrigger: {
            trigger: scrollTriggerRef?.current || containerRef.current,
            start,
            once: true,
          },
        });
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        columnRefs.current.forEach((strip, i) => {
          gsap.set(strip, { yPercent: -targetDigits[i].value * 10 });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [targetValue, startValue, resolvedDecimals] }
  );

  return { containerRef, registerColumn, targetSlots };
}
```

`components/DigitRoll.jsx`

```jsx
'use client';
// Component for: rendering a single animated stat value using useDigitRoll.

import { useDigitRoll } from '@/hooks/useDigitRoll';

export default function DigitRoll({
  value,
  prefix = '',
  suffix = '',
  startValue = 0,
  className = '',
  digitClassName = '',
  ...rollOptions
}) {
  const { containerRef, registerColumn, targetSlots } = useDigitRoll(value, { startValue, ...rollOptions });

  return (
    <span ref={containerRef} className={`inline-flex items-baseline font-mono tabular-nums ${className}`}>
      {prefix && <span className="mr-0.5">{prefix}</span>}

      {targetSlots.map((slot, i) =>
        slot.type === 'static' ? (
          <span key={i} className="mx-px">
            {slot.value}
          </span>
        ) : (
          <span
            key={i}
            className={`relative inline-block h-[1em] w-[0.62em] overflow-hidden align-baseline ${digitClassName}`}
          >
            <span ref={registerColumn} className="absolute left-0 top-0 block will-change-transform">
              {Array.from({ length: 10 }).map((_, d) => (
                <span key={d} className="block h-[1em] leading-[1em] text-center">
                  {d}
                </span>
              ))}
            </span>
          </span>
        )
      )}

      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>
  );
}
```

Usage examples:

```jsx
<DigitRoll value={99.99} suffix="%" className="text-5xl text-white" />
<DigitRoll value={150} prefix="+" className="text-5xl text-white" />
<DigitRoll value={85} suffix="ms" className="text-5xl text-white" />

<div ref={statsRowRef} className="flex gap-12">
  <DigitRoll value={39.18} startValue={0} scrollTriggerRef={statsRowRef} />
</div>
```

---

## 4. Magnetic cursor system — `<MagneticCursor>` + `useMagnetic`

`components/MagneticCursor.jsx`

```jsx
'use client';
// Component for: site-wide custom cursor. Mount ONCE near the root layout
// (e.g. app/layout.jsx, as a sibling of {children}) — not per page/section.

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

function isTouchDevice() {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export default function MagneticCursor() {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(!isTouchDevice() && !reduced);
  }, []);

  useGSAP(
    () => {
      if (!enabled || !cursorRef.current) return;
      const el = cursorRef.current;
      let hasMoved = false;
      gsap.set(el, { opacity: 0 });

      const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });

      const handleMove = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
        if (!hasMoved) {
          hasMoved = true;
          gsap.to(el, { opacity: 1, duration: 0.2 });
        }
      };

      const handleOver = (e) => {
        if (e.target.closest('[data-magnetic]')) {
          gsap.to(el, { scale: 2.4, duration: 0.3, ease: 'power2.out' });
        }
      };
      const handleOut = (e) => {
        if (e.target.closest('[data-magnetic]')) {
          gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' });
        }
      };

      window.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseover', handleOver);
      document.addEventListener('mouseout', handleOut);

      return () => {
        window.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseover', handleOver);
        document.removeEventListener('mouseout', handleOut);
      };
    },
    { scope: cursorRef, dependencies: [enabled] }
  );

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-red-500/80">
        <div className="h-1 w-1 rounded-full bg-red-500" />
      </div>
    </div>
  );
}
```

`hooks/useMagnetic.js`

```js
'use client';
// Hook for: primary CTA buttons (hero CTA, nav "Contact" button, pricing CTA).

import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

function isTouchDevice() {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Apply to a button ref. The button must contain an inner wrapper with
 * className "btn-text" around its label/icon:
 *
 *   const btnRef = useRef(null);
 *   useMagnetic(btnRef);
 *   <button ref={btnRef} data-magnetic className="relative ...">
 *     <span className="btn-text">Get in touch</span>
 *   </button>
 */
export function useMagnetic(ref, options = {}) {
  const { strength = 10, radius = 50, textStrength = 0.4 } = options;

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!ref.current || isTouchDevice() || reduced) return;

      const el = ref.current;
      const textEl = el.querySelector('.btn-text');

      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });
      const xTextTo = textEl && gsap.quickTo(textEl, 'x', { duration: 0.4, ease: 'power3' });
      const yTextTo = textEl && gsap.quickTo(textEl, 'y', { duration: 0.4, ease: 'power3' });

      function reset() {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        if (textEl) gsap.to(textEl, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      }

      const handleMove = (e) => {
        const bounds = el.getBoundingClientRect();
        const cx = bounds.left + bounds.width / 2;
        const cy = bounds.top + bounds.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        const withinX = e.clientX > bounds.left - radius && e.clientX < bounds.right + radius;
        const withinY = e.clientY > bounds.top - radius && e.clientY < bounds.bottom + radius;

        if (withinX && withinY) {
          const moveX = gsap.utils.clamp(-strength, strength, dx * 0.25);
          const moveY = gsap.utils.clamp(-strength, strength, dy * 0.25);
          xTo(moveX);
          yTo(moveY);
          if (xTextTo) {
            xTextTo(moveX * textStrength);
            yTextTo(moveY * textStrength);
          }
        } else {
          reset();
        }
      };

      window.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', reset);

      return () => {
        window.removeEventListener('mousemove', handleMove);
        el.removeEventListener('mouseleave', reset);
      };
    },
    { scope: ref }
  );
}
```

Usage:

```jsx
function CtaButton({ children }) {
  const btnRef = useRef(null);
  useMagnetic(btnRef);

  return (
    <button ref={btnRef} data-magnetic className="relative border border-red-500 px-8 py-3 font-mono text-sm">
      <span className="btn-text">{children}</span>
    </button>
  );
}
```

Mount `<MagneticCursor />` once in `app/layout.jsx`:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MagneticCursor />
        {children}
      </body>
    </html>
  );
}
```

---

## 5. `useHudBracketHover` — corner brackets that snap outward on hover

`hooks/useHudBracketHover.js`

```js
'use client';
// Hook for: card components (service cards, case-study cards, pricing cards).

import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

/**
 * Apply to a card's outer ref. The card must render 4 elements tagged
 * data-bracket="tl|tr|bl|br" positioned at its actual resting corners —
 * see the markup below. This hook tucks them inward on mount and snaps
 * them outward past the card's edge on hover.
 */
export function useHudBracketHover(ref, options = {}) {
  const {
    tuck = 6,
    expand = 4,
    restColor = 'rgba(255,255,255,0.15)',
    hoverColor = 'rgb(239,68,68)',
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;
      const card = ref.current;
      const brackets = card.querySelectorAll('[data-bracket]');
      if (!brackets.length) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const dur = reduced ? 0 : 0.25;

      const restPositions = new Map();
      brackets.forEach((b) => {
        const type = b.dataset.bracket;
        const x = type.includes('r') ? -tuck : tuck;
        const y = type.includes('b') ? -tuck : tuck;
        restPositions.set(b, { x, y });
        gsap.set(b, { x, y, opacity: 0.5 });
      });

      const handleEnter = () => {
        brackets.forEach((b) => {
          const type = b.dataset.bracket;
          const x = type.includes('r') ? expand : -expand;
          const y = type.includes('b') ? expand : -expand;
          gsap.to(b, { x, y, opacity: 1, duration: dur, ease: 'power2.out' });
        });
        gsap.to(card, { scale: 1.01, borderColor: hoverColor, duration: dur, ease: 'power2.out' });
      };

      const handleLeave = () => {
        brackets.forEach((b) => {
          const { x, y } = restPositions.get(b);
          gsap.to(b, { x, y, opacity: 0.5, duration: dur, ease: 'power2.out' });
        });
        gsap.to(card, { scale: 1, borderColor: restColor, duration: dur, ease: 'power2.out' });
      };

      card.addEventListener('mouseenter', handleEnter);
      card.addEventListener('mouseleave', handleLeave);

      return () => {
        card.removeEventListener('mouseenter', handleEnter);
        card.removeEventListener('mouseleave', handleLeave);
      };
    },
    { scope: ref }
  );
}
```

Minimal required markup for the consumer:

```jsx
'use client';
import { useRef } from 'react';
import { useHudBracketHover } from '@/hooks/useHudBracketHover';

function Card({ children }) {
  const cardRef = useRef(null);
  useHudBracketHover(cardRef);

  return (
    <div ref={cardRef} className="relative border border-white/15 bg-black/40 p-6 transition-none">
      <span data-bracket="tl" className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-red-500" />
      <span data-bracket="tr" className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-red-500" />
      <span data-bracket="bl" className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-red-500" />
      <span data-bracket="br" className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-red-500" />

      {children}
    </div>
  );
}
```

---

### How to wire these into an existing component

None of these are meant to replace existing markup wholesale — import the piece you need into the component you already have. For the hero, drop `<HeroReveal>` in place of the existing static `<h1>` block (or lift just its `useGSAP` logic into your current hero component if it already owns other layout). For sections, wrap the section in a ref and mount `<ScanSweep sectionRef={...}>` as one extra absolutely-positioned child, alongside your real content. For stats, swap the plain number text for `<DigitRoll value={...} suffix="..."/>` inside your existing stat-tile markup. For buttons, keep your current `<button>` JSX and just add a ref, `useMagnetic(ref)`, `data-magnetic`, and wrap the existing label in `.btn-text` — no other structure changes. For cards, add a ref, call `useHudBracketHover(ref)`, and add the four `data-bracket` spans as siblings of your existing card content; the hook only touches those five elements (four brackets + the card itself) and never queries anything outside its own scope.
