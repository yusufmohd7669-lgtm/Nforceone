"use client";

import { useEffect, useState, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";
import { useGSAP } from "@gsap/react";

/**
 * Detect user prefers-reduced-motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReduced;
}

/**
 * Standard HUD / Enterprise Section Reveal hook
 */
export function useRevealAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  options?: {
    selector?: string;
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

      const target = options?.selector
        ? containerRef.current.querySelectorAll(options.selector)
        : containerRef.current.children;

      if (!target || target.length === 0) return;

      gsap.fromTo(
        target,
        {
          opacity: 0,
          y: options?.y ?? 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
    { scope: containerRef, dependencies: [prefersReduced, options?.selector] }
  );
}

/**
 * Precise count-up hook for stats and case-study metrics
 */
export function useCountUp(
  targetValue: number,
  decimals: number = 0,
  duration: number = 1.6,
  triggerRef?: React.RefObject<HTMLElement | null>
) {
  const [displayValue, setDisplayValue] = useState(0);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setDisplayValue(targetValue);
      return;
    }

    const element = triggerRef?.current;
    if (!element) {
      setDisplayValue(targetValue);
      return;
    }

    const countObj = { val: 0 };

    const tween = gsap.to(countObj, {
      val: targetValue,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      onUpdate: () => {
        setDisplayValue(
          decimals > 0
            ? parseFloat(countObj.val.toFixed(decimals))
            : Math.floor(countObj.val)
        );
      },
      onComplete: () => {
        setDisplayValue(targetValue);
      },
    });

    return () => {
      tween.kill();
    };
  }, [targetValue, decimals, duration, triggerRef, prefersReduced]);

  return displayValue;
}

/**
 * Magnetic button hover effect using GSAP quickTo
 */
export function useMagnetic(
  ref: React.RefObject<HTMLElement | null>,
  strength: number = 12
) {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      xTo((distanceX / width) * strength);
      yTo((distanceY / height) * strength);
    };

    const handleMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength, prefersReduced]);
}

/**
 * 3D HUD Tilt effect for cards on hover
 */
export function use3DTilt(
  cardRef: React.RefObject<HTMLElement | null>,
  maxTilt: number = 6
) {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const card = cardRef.current;
    if (!card || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.6,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cardRef, maxTilt, prefersReduced]);
}
