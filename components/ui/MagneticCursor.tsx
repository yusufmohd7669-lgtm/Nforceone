"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!isTouchDevice() && !reduced);
  }, []);

  useGSAP(
    () => {
      if (!enabled || !cursorRef.current) return;
      const el = cursorRef.current;
      let hasMoved = false;
      gsap.set(el, { opacity: 0 });

      const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });

      const handleMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
        if (!hasMoved) {
          hasMoved = true;
          gsap.to(el, { opacity: 1, duration: 0.2 });
        }
      };

      const handleOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (target?.closest("[data-magnetic]") || target?.closest("a") || target?.closest("button")) {
          gsap.to(el, { scale: 2.2, duration: 0.25, ease: "power2.out" });
        }
      };
      const handleOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (target?.closest("[data-magnetic]") || target?.closest("a") || target?.closest("button")) {
          gsap.to(el, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      };

      window.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseover", handleOver);
      document.addEventListener("mouseout", handleOut);

      return () => {
        window.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseover", handleOver);
        document.removeEventListener("mouseout", handleOut);
      };
    },
    { scope: cursorRef, dependencies: [enabled] }
  );

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2 select-none"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-accent/80 shadow-[0_0_10px_rgba(229,9,20,0.5)]">
        <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_#E50914]" />
      </div>
    </div>
  );
}
export default MagneticCursor;
