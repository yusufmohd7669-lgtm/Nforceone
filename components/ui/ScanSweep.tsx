"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

interface ScanSweepProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  color?: string;
  className?: string;
}

export function ScanSweep({
  sectionRef,
  color = "#E50914",
  className = "",
}: ScanSweepProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef?.current || !lineRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(lineRef.current, { top: "0%", opacity: 1 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true, // fire exactly one time, ever
            },
          })
          .fromTo(
            lineRef.current,
            { top: "0%", opacity: 1 },
            {
              top: "100%",
              duration: 0.6,
              ease: "power1.inOut",
            }
          )
          .to(lineRef.current, { opacity: 0, duration: 0.25 }, "-=0.05");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (lineRef.current) gsap.set(lineRef.current, { opacity: 0 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={lineRef}
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 w-full h-[2px] z-20 ${className}`}
      style={{
        background: color,
        boxShadow: `0 0 10px 1px ${color}, 0 0 28px 4px rgba(229, 9, 20, 0.45)`,
      }}
    />
  );
}
export default ScanSweep;
