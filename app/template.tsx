"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || prefersReduced) return;

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReduced] }
  );

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
