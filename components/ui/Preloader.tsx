"use client";

import React, { useEffect, useState } from "react";
import { StreakTrail } from "./StreakDivider";

/** Hard ceiling on the boot overlay's life, in ms. Never exceed this. */
const FAILSAFE_MS = 2200;

export function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("nf1_booted");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hasBooted || prefersReducedMotion) return;

    // Claim the boot slot up front: if this tab is closed or errors out
    // mid-sequence, the next load must not replay (or re-trap on) the overlay.
    sessionStorage.setItem("nf1_booted", "true");
    setShowPreloader(true);

    // The overlay is opaque and covers the entire site, so its removal can
    // never be conditional on an animation completing. setTimeout is driven by
    // the task queue rather than rAF, so it still fires when the compositor is
    // throttled, GSAP fails to load, or the tab is restored from the bfcache.
    const failsafe = setTimeout(() => setShowPreloader(false), FAILSAFE_MS);
    return () => clearTimeout(failsafe);
  }, []);

  if (!showPreloader) return null;

  return (
    <div
      aria-hidden="true"
      className="nf1-preloader fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none select-none"
      // Normal path: the wipe finishes and we unmount immediately.
      onAnimationEnd={() => setShowPreloader(false)}
    >
      {/* Scanline */}
      <div className="nf1-preloader-scan absolute left-0 right-0 h-[2px] bg-accent shadow-[0_0_15px_#E50914] z-10 opacity-0" />

      <div className="text-center font-mono space-y-3 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-bg-raised border border-border text-xs text-text-muted">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>NFORCE ONE KERNEL</span>
        </div>
        <p className="nf1-preloader-text text-sm md:text-base font-mono tracking-widest text-white uppercase font-bold opacity-0">
          [SYS.INIT] LOADING ARCHITECTURE...
        </p>

        {/* The mark s own speed trail, standing in for a generic spinner */}
        <span className="nf1-preloader-text flex justify-center opacity-0">
          <StreakTrail />
        </span>
      </div>
    </div>
  );
}
