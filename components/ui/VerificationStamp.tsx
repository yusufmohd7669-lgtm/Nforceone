"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerificationStampProps {
  label?: string;
  className?: string;
}

export function VerificationStamp({
  label = "CERTIFIED ARCHITECTURE PRACTICE",
  className,
}: VerificationStampProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !pathRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          pathRef.current,
          { scale: 0.5, opacity: 0, rotate: -20 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider font-bold shadow-sm shadow-accent/10 select-none",
        className
      )}
    >
      <svg
        ref={pathRef}
        className="w-4 h-4 text-accent will-change-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
      <span>{label}</span>
    </div>
  );
}
export default VerificationStamp;
