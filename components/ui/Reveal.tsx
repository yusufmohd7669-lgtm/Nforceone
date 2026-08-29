"use client";

import React, { useRef } from "react";
import { useRevealAnimation } from "@/lib/animations/hooks";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  delay?: number;
  selector?: string;
}

export function Reveal({
  children,
  className,
  stagger = 0.08,
  y = 35,
  delay = 0,
  selector,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useRevealAnimation(containerRef, {
    stagger,
    y,
    delay,
    selector,
  });

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      {children}
    </div>
  );
}
