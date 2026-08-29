"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

export interface UseHudBracketHoverOptions {
  tuck?: number;
  expand?: number;
  restColor?: string;
  hoverColor?: string;
}

export function useHudBracketHover(
  ref: React.RefObject<HTMLElement | null>,
  options: UseHudBracketHoverOptions = {}
) {
  const {
    tuck = 4,
    expand = 4,
    restColor = "rgba(255,255,255,0.12)",
    hoverColor = "rgb(229,9,20)",
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;
      const card = ref.current;
      const brackets = card.querySelectorAll<HTMLElement>("[data-bracket]");
      if (!brackets.length) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dur = reduced ? 0 : 0.25;

      const restPositions = new Map<HTMLElement, { x: number; y: number }>();
      brackets.forEach((b) => {
        const type = b.dataset.bracket || "";
        const x = type.includes("r") ? -tuck : tuck;
        const y = type.includes("b") ? -tuck : tuck;
        restPositions.set(b, { x, y });
        gsap.set(b, { x, y, opacity: 0.4 });
      });

      const handleEnter = () => {
        brackets.forEach((b) => {
          const type = b.dataset.bracket || "";
          const x = type.includes("r") ? expand : -expand;
          const y = type.includes("b") ? expand : -expand;
          gsap.to(b, { x, y, opacity: 1, duration: dur, ease: "power2.out" });
        });
        gsap.to(card, {
          scale: 1.01,
          borderColor: hoverColor,
          duration: dur,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        brackets.forEach((b) => {
          const pos = restPositions.get(b);
          if (pos) {
            gsap.to(b, { x: pos.x, y: pos.y, opacity: 0.4, duration: dur, ease: "power2.out" });
          }
        });
        gsap.to(card, {
          scale: 1,
          borderColor: restColor,
          duration: dur,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: ref }
  );
}
