"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({
  items,
  speed = 35,
  className,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap py-3.5 border-y border-border/80 relative bg-bg/80 backdrop-blur-md select-none group",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Edge Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite Seamless Track */}
      <div
        className="inline-flex gap-8 items-center will-change-transform animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-text-muted uppercase hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shadow-[0_0_6px_#E50914]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
