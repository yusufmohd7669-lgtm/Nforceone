"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label?: string;
  specCode?: string;
  className?: string;
}

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  specCode,
  className,
}: CounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Format the target string
  const formattedString =
    typeof value === "number"
      ? decimals > 0
        ? value.toFixed(decimals)
        : value.toString()
      : value.toString();

  const chars = formattedString.split("");

  useGSAP(
    () => {
      if (!containerRef.current || prefersReduced) return;

      const columns = containerRef.current.querySelectorAll(".digit-column-track");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Fire as the card crosses into view. The from-state below resets the
          // columns to zero, so a later start would visibly blank a number the
          // reader is already looking at.
          start: "top bottom-=40px",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Tag glitch flicker on entrance
      if (tagRef.current) {
        tl.to(tagRef.current, {
          opacity: 0.2,
          duration: 0.05,
          repeat: 3,
          yoyo: true,
          ease: "none",
        });
      }

      // 2. Mechanical Digit Roll
      columns.forEach((col, index) => {
        const targetDigit = parseInt(col.getAttribute("data-target") || "0", 10);
        // Each digit is 10% of the total 10-digit column height
        const targetYPercent = -targetDigit * 10;

        tl.fromTo(
          col,
          { yPercent: 0 },
          {
            yPercent: targetYPercent,
            duration: 1.1 + index * 0.1,
            ease: "power3.out",
            // The markup already renders the real figure. Without this, GSAP
            // would stamp the zero state at mount and anyone arriving before
            // the roll fires would read "00" or "000%".
            immediateRender: false,
          },
          index === 0 ? "-=0.1" : "<0.06"
        );
      });

      // 3. Progress bar fills in sync with digit roll
      if (progressBarRef.current) {
        tl.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            immediateRender: false,
          },
          0.1
        );
      }
    },
    { scope: containerRef, dependencies: [prefersReduced, formattedString] }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative p-5 md:p-6 rounded-lg bg-bg-card border border-border flex flex-col justify-between group hover:border-accent/60 transition-all duration-300 shadow-lg hover:shadow-black/60",
        className
      )}
    >
      {/* HUD Corner Registration Mark */}
      <div
        ref={tagRef}
        className="absolute top-2 right-2 font-mono text-[9px] text-text-muted/50 group-hover:text-accent transition-colors select-none"
      >
        {specCode || "+"}
      </div>

      <div>
        {/* Number Display with Mechanical Digit Roll */}
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white flex items-baseline select-none">
          {prefix && <span className="text-accent mr-0.5">{prefix}</span>}

          <div className="inline-flex items-baseline overflow-hidden h-[1.15em] leading-[1.15em]">
            {chars.map((char, i) => {
              const isDigit = !isNaN(parseInt(char, 10));

              if (!isDigit) {
                return (
                  <span key={i} className="inline-block text-white">
                    {char}
                  </span>
                );
              }

              return (
                <div
                  key={i}
                  className="relative inline-block overflow-hidden h-[1.15em] leading-[1.15em] w-[0.62em]"
                >
                  <div
                    className="digit-column-track flex flex-col will-change-transform"
                    data-target={char}
                    // Render the real figure by default, in the markup itself.
                    // GSAP rolls down from zero only once it actually runs.
                    style={{
                      transform: `translateY(-${parseInt(char, 10) * 10}%)`,
                    }}
                  >
                    {DIGITS.map((d) => (
                      <span
                        key={d}
                        className="h-[1.15em] leading-[1.15em] flex items-center justify-center text-white"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {suffix && (
            <span className="text-accent ml-1 text-2xl md:text-3xl font-extrabold">
              {suffix}
            </span>
          )}
        </div>

        {label && (
          <p className="text-xs md:text-sm text-text-muted mt-2 font-mono uppercase tracking-wide leading-snug">
            {label}
          </p>
        )}
      </div>

      {/* Underline Bar filling in sync */}
      <div className="w-full bg-border h-0.5 mt-4 rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="bg-accent h-full origin-left will-change-transform"
          style={{ transform: "scaleX(1)" }}
        />
      </div>
    </div>
  );
}
