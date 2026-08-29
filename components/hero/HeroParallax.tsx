"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";

export function HeroParallax() {
  const bgGridRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const bgGrid = bgGridRef.current;
    if (!bgGrid) return;

    const gridXTo = gsap.quickTo(bgGrid, "x", { duration: 0.6, ease: "power2" });
    const gridYTo = gsap.quickTo(bgGrid, "y", { duration: 0.6, ease: "power2" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      gridXTo(xPercent * 12);
      gridYTo(yPercent * 12);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReduced]);

  return (
    <div
      ref={bgGridRef}
      className="absolute inset-[-20px] bg-grid-pattern opacity-40 pointer-events-none will-change-transform"
    />
  );
}
export default HeroParallax;
