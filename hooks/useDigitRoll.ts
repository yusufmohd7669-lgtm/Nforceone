"use client";

import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

export interface DigitSlot {
  type: "static" | "digit";
  value: string | number;
}

export function parseDigits(value: number | string, decimals?: number): DigitSlot[] {
  const fixed = decimals != null ? Number(value).toFixed(decimals) : String(value);
  return fixed.split("").map((ch) =>
    ch === "." || isNaN(Number(ch))
      ? { type: "static", value: ch }
      : { type: "digit", value: Number(ch) }
  );
}

export interface UseDigitRollOptions {
  startValue?: number | string;
  decimals?: number;
  duration?: number;
  ease?: string;
  staggerEach?: number;
  scrollTriggerRef?: React.RefObject<HTMLElement | null>;
  start?: string;
}

export function useDigitRoll(targetValue: number | string, options: UseDigitRollOptions = {}) {
  const {
    startValue = 0,
    decimals,
    duration = 1.2,
    ease = "power3.out",
    staggerEach = 0.04,
    scrollTriggerRef = null,
    start = "top 85%",
  } = options;

  const resolvedDecimals =
    decimals ?? (String(targetValue).split(".")[1]?.length || 0);

  const targetSlots = useMemo(
    () => parseDigits(targetValue, resolvedDecimals),
    [targetValue, resolvedDecimals]
  );
  const startSlots = useMemo(
    () => parseDigits(startValue, resolvedDecimals),
    [startValue, resolvedDecimals]
  );

  const containerRef = useRef<HTMLSpanElement>(null);
  const columnRefs = useRef<HTMLElement[]>([]);
  columnRefs.current = [];
  const registerColumn = (el: HTMLElement | null) => {
    if (el) columnRefs.current.push(el);
  };

  const targetDigits = targetSlots.filter((s) => s.type === "digit");
  const startDigits = startSlots.filter((s) => s.type === "digit");
  const changedCount = targetDigits.reduce(
    (count, slot, i) => (slot.value !== startDigits[i]?.value ? count + 1 : count),
    0
  );

  useGSAP(
    () => {
      if (!columnRefs.current.length) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        columnRefs.current.forEach((strip, i) => {
          gsap.set(strip, { yPercent: -(Number(startDigits[i]?.value) || 0) * 10 });
        });

        const ratio = targetDigits.length ? changedCount / targetDigits.length : 0;
        const scaledDuration = duration * gsap.utils.clamp(0.4, 1, ratio || 1);

        gsap.to(columnRefs.current, {
          yPercent: (i) => -(Number(targetDigits[i]?.value) || 0) * 10,
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

      mm.add("(prefers-reduced-motion: reduce)", () => {
        columnRefs.current.forEach((strip, i) => {
          gsap.set(strip, { yPercent: -(Number(targetDigits[i]?.value) || 0) * 10 });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [targetValue, startValue, resolvedDecimals] }
  );

  return { containerRef, registerColumn, targetSlots };
}
