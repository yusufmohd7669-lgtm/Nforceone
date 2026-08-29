"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives a scroll-triggered entrance without ever being able to hide content.
 *
 * The phases invert the usual pattern deliberately:
 *
 *   "static"  no class, the finished state — what the markup renders on its own
 *   "armed"   the start state, applied only once JS has confirmed the element
 *             is still off-screen (so arming can never flash over content the
 *             reader is already looking at)
 *   "play"    runs the animation from start state to finished state
 *
 * If JavaScript never runs, IntersectionObserver is missing, or the user
 * prefers reduced motion, the phase stays "static" and the artwork is simply
 * complete. The animation is additive; it is never load-bearing.
 */
export type DrawPhase = "static" | "armed" | "play";

export function useDrawOnScroll<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<DrawPhase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stays "static": drawn, no motion
    }

    const rect = el.getBoundingClientRect();
    const alreadyOnScreen = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyOnScreen) {
      setPhase("play");
      return;
    }

    setPhase("armed");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase("play");
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, phase };
}
