"use client";

import { useEffect, useState, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";
import { useGSAP } from "@gsap/react";

/**
 * Hook to detect whether the user prefers reduced motion.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for scroll-triggered staggered fade and slide up animation.
 */
export function useScrollReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  targetSelector: string = ".reveal-item",
  options?: {
    stagger?: number;
    y?: number;
    delay?: number;
    start?: string;
  }
) {
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || prefersReduced) return;

      const elements = containerRef.current.querySelectorAll(targetSelector);
      if (!elements || elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: options?.y ?? 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: options?.stagger ?? 0.08,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: options?.start ?? "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReduced, targetSelector] }
  );
}

/**
 * Hook to animate numbers counting up from 0 on scroll.
 */
export function useCountUp(
  containerRef: React.RefObject<HTMLElement | null>,
  endValue: number,
  duration: number = 1.5
) {
  const [displayValue, setDisplayValue] = useState(0);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (prefersReduced) {
        setDisplayValue(endValue);
        return;
      }

      const countObj = { val: 0 };

      gsap.to(countObj, {
        val: endValue,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          setDisplayValue(Math.floor(countObj.val));
        },
        onComplete: () => {
          setDisplayValue(endValue);
        },
      });
    },
    { scope: containerRef, dependencies: [endValue, duration, prefersReduced] }
  );

  return displayValue;
}
