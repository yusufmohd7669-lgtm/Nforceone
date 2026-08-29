"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";
import { gsap } from "@/lib/animations/gsap";

interface MarqueeProps {
  items: string[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({
  items,
  speed = 25,
  direction = "left",
  className,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !trackRef.current) return;

    const track = trackRef.current;
    const distance = track.scrollWidth / 2;

    const fromX = direction === "left" ? 0 : -distance;
    const toX = direction === "left" ? -distance : 0;

    const tween = gsap.fromTo(
      track,
      { x: fromX },
      {
        x: toX,
        duration: speed,
        ease: "none",
        repeat: -1,
      }
    );

    tweenRef.current = tween;

    const handleMouseEnter = () => tween.pause();
    const handleMouseLeave = () => tween.play();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      tween.kill();
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [items, speed, direction, prefersReduced]);

  if (prefersReduced) {
    return (
      <div className={cn("flex flex-wrap gap-6 justify-center py-4 border-y border-border", className)}>
        {items.map((item, idx) => (
          <span key={idx} className="text-sm font-mono text-text-muted flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    );
  }

  // Duplicate items array so the ticker loops seamlessly
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden whitespace-nowrap py-4 border-y border-border select-none relative bg-bg/50 backdrop-blur-sm",
        className
      )}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div ref={trackRef} className="inline-flex gap-8 items-center will-change-transform">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 text-sm md:text-base font-mono tracking-wider text-text-muted uppercase hover:text-accent transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
