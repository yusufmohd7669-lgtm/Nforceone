"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}";

export function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState(text);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let iteration = 0;
        const totalIterations = 8;
        const intervalTime = 30;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.call(() => {
          const interval = setInterval(() => {
            setDisplayText(
              text
                .split("")
                .map((char, index) => {
                  if (char === " " || char === "[" || char === "]") return char;
                  if (index < iteration) {
                    return text[index];
                  }
                  return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("")
            );

            if (iteration >= text.length) {
              clearInterval(interval);
              setDisplayText(text);
            }

            iteration += 1 / 2;
          }, intervalTime);
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [text] }
  );

  return (
    <span ref={containerRef} className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
}
export default ScrambleText;
