"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";
import { cn } from "@/lib/utils";

interface ScanlineSweepProps {
  className?: string;
  triggerSelector?: string;
  delay?: number;
}

export function ScanlineSweep({
  className,
  triggerSelector,
  delay = 0,
}: ScanlineSweepProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!lineRef.current || prefersReduced) return;

      const triggerEl = triggerSelector
        ? document.querySelector(triggerSelector) || containerRef.current
        : containerRef.current;

      gsap.fromTo(
        lineRef.current,
        {
          top: "0%",
          opacity: 0,
        },
        {
          top: "100%",
          opacity: 0.9,
          duration: 0.65,
          delay,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            if (lineRef.current) {
              lineRef.current.style.opacity = "0";
            }
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReduced, triggerSelector, delay] }
  );

  if (prefersReduced) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden z-20",
        className
      )}
    >
      <div
        ref={lineRef}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 shadow-[0_0_12px_#E50914] will-change-transform"
      />
    </div>
  );
}
