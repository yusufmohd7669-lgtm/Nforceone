"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label?: string;
  specCode?: string;
  className?: string;
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  label,
  specCode,
  className,
}: CounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetNumber =
    typeof value === "number"
      ? value
      : parseFloat(value.toString().replace(/[^0-9.]/g, "")) || 0;

  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCurrentNumber(targetNumber);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;
          const startVal = 0;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const val = startVal + (targetNumber - startVal) * easeProgress;

            setCurrentNumber(
              decimals > 0 ? parseFloat(val.toFixed(decimals)) : Math.floor(val)
            );

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCurrentNumber(targetNumber);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Safety fallback: if observer didn't trigger in 2 seconds, display full number
    const timeout = setTimeout(() => {
      setCurrentNumber(targetNumber);
      setHasAnimated(true);
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [targetNumber, duration, decimals, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative p-5 md:p-6 rounded-lg bg-bg-card border border-border/80 flex flex-col justify-between group hover:border-accent/50 transition-all",
        className
      )}
    >
      {/* Blueprint corner crosshair */}
      <div className="absolute top-2 right-2 font-mono text-[9px] text-text-muted/40 group-hover:text-accent transition-colors">
        {specCode || "+"}
      </div>

      <div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white flex items-baseline">
          {prefix && <span className="text-accent mr-0.5">{prefix}</span>}
          <span>{currentNumber}</span>
          {suffix && <span className="text-accent ml-1 text-2xl md:text-3xl">{suffix}</span>}
        </div>

        {label && (
          <p className="text-xs md:text-sm text-text-muted mt-2 font-mono uppercase tracking-wide leading-snug">
            {label}
          </p>
        )}
      </div>

      <div className="w-full bg-border h-0.5 mt-4 rounded-full overflow-hidden">
        <div
          className="bg-accent h-full transition-all duration-1000 ease-out"
          style={{ width: hasAnimated ? "100%" : "0%" }}
        />
      </div>
    </div>
  );
}
