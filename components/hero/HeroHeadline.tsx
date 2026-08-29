import React from "react";

/**
 * The hero headline entrance is deliberately CSS-only.
 *
 * It used to be a GSAP timeline, which meant the H1 was stamped to
 * `opacity: 0; yPercent: 120` at mount and only became readable once a
 * requestAnimationFrame-driven tween completed. Any stall in that loop — a
 * throttled background tab, a restored tab, a slow device, GSAP failing to
 * load — left the single most important sentence on the site permanently
 * invisible. CSS keyframes run on the compositor, cannot stall, need no
 * JavaScript at all, and let this render as a server component.
 */

const LINES = ["Turn Complex IT Systems", "into Competitive"];

export function HeroHeadline() {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] mb-6">
      {LINES.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-1">
          <span
            className="hero-line-inner block will-change-transform"
            style={{ "--ln": i } as React.CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}

      <span className="block overflow-hidden pb-1">
        <span
          className="hero-line-inner block will-change-transform"
          style={{ "--ln": LINES.length } as React.CSSProperties}
        >
          <span className="hero-flicker text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-accent drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
            Advantages.
          </span>
        </span>
      </span>
    </h1>
  );
}
