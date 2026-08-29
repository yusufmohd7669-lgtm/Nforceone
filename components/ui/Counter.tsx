"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label?: string;
  className?: string;
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.5,
  label,
  className,
}: CounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numericValue = typeof value === "number" ? value : parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const [displayNumber, setDisplayNumber] = useState(0);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (prefersReduced) {
        setDisplayNumber(numericValue);
        return;
      }

      const counterObj = { val: 0 };

      gsap.to(counterObj, {
        val: numericValue,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          setDisplayNumber(decimals > 0 ? parseFloat(counterObj.val.toFixed(decimals)) : Math.floor(counterObj.val));
        },
        onComplete: () => {
          setDisplayNumber(numericValue);
        },
      });
    },
    { scope: containerRef, dependencies: [numericValue, decimals, duration, prefersReduced] }
  );

  return (
    <div ref={containerRef} className={cn("flex flex-col", className)}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-text flex items-baseline">
        {prefix && <span className="text-accent mr-0.5">{prefix}</span>}
        <span>{displayNumber}</span>
        {suffix && <span className="text-accent ml-1 text-2xl md:text-3xl lg:text-4xl">{suffix}</span>}
      </div>
      {label && <p className="text-sm md:text-base text-text-muted mt-2 font-mono uppercase tracking-wide">{label}</p>}
    </div>
  );
}
