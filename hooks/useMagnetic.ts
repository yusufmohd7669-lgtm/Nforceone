"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export interface UseMagneticOptions {
  strength?: number;
  radius?: number;
  textStrength?: number;
}

export function useMagnetic(
  ref: React.RefObject<HTMLElement | null>,
  options: UseMagneticOptions = {}
) {
  const { strength = 10, radius = 50, textStrength = 0.4 } = options;

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!ref.current || isTouchDevice() || reduced) return;

      const el = ref.current;
      const textEl = el.querySelector<HTMLElement>(".btn-text");

      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
      const xTextTo = textEl ? gsap.quickTo(textEl, "x", { duration: 0.4, ease: "power3" }) : null;
      const yTextTo = textEl ? gsap.quickTo(textEl, "y", { duration: 0.4, ease: "power3" }) : null;

      function reset() {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        if (textEl) gsap.to(textEl, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      }

      const handleMove = (e: MouseEvent) => {
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
          if (xTextTo && yTextTo) {
            xTextTo(moveX * textStrength);
            yTextTo(moveY * textStrength);
          }
        } else {
          reset();
        }
      };

      window.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", reset);

      return () => {
        window.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", reset);
      };
    },
    { scope: ref }
  );
}
