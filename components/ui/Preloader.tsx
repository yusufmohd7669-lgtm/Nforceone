"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

export function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const hasBooted = sessionStorage.getItem("nf1_booted");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasBooted || prefersReducedMotion) {
      return;
    }

    setShowPreloader(true);

    const timer = setTimeout(() => {
      if (!overlayRef.current) return;

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("nf1_booted", "true");
          setShowPreloader(false);
        },
      });

      // 1. Text typing effect simulation
      tl.to(textRef.current, {
        opacity: 1,
        duration: 0.3,
      });

      // 2. Scanline sweep
      if (scanlineRef.current) {
        tl.fromTo(
          scanlineRef.current,
          { top: "0%", opacity: 0.8 },
          { top: "100%", opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "-=0.1"
        );
      }

      // 3. Screen wipes up via clip-path
      tl.to(overlayRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!showPreloader) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none select-none"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      {/* Scanline */}
      <div
        ref={scanlineRef}
        className="absolute left-0 right-0 h-[2px] bg-accent shadow-[0_0_15px_#E50914] z-10"
      />

      <div className="text-center font-mono space-y-3 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-bg-raised border border-border text-xs text-text-muted">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>NFORCE ONE KERNEL</span>
        </div>
        <p
          ref={textRef}
          className="text-sm md:text-base font-mono tracking-widest text-white uppercase font-bold opacity-0"
        >
          [SYS.INIT] LOADING ARCHITECTURE...
        </p>
      </div>
    </div>
  );
}
