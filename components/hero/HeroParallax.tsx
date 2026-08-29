"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";

export function HeroParallax() {
  const bgGridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const bgGrid = bgGridRef.current;
    const glow = glowRef.current;
    if (!bgGrid || !glow) return;

    // QuickTo for high-performance cursor tracking
    const gridXTo = gsap.quickTo(bgGrid, "x", { duration: 0.6, ease: "power2" });
    const gridYTo = gsap.quickTo(bgGrid, "y", { duration: 0.6, ease: "power2" });
    const glowXTo = gsap.quickTo(glow, "x", { duration: 0.3, ease: "power3" });
    const glowYTo = gsap.quickTo(glow, "y", { duration: 0.3, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      gridXTo(xPercent * 14);
      gridYTo(yPercent * 14);

      glowXTo(clientX);
      glowYTo(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReduced]);

  return (
    <>
      {/* Background blueprint grid with subtle parallax */}
      <div
        ref={bgGridRef}
        className="absolute inset-[-20px] bg-grid-pattern opacity-40 pointer-events-none will-change-transform"
      />

      {/* Subtle radial crimson glow tracking cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(229,9,20,0.4)_0%,transparent_70%)] z-0 will-change-transform blur-2xl"
      />
    </>
  );
}
