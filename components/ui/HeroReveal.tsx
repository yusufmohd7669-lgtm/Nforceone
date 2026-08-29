"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

interface HeroRevealProps {
  eyebrow?: string;
  lines?: string[];
  accentWord?: string;
  accentLineIndex?: number;
  className?: string;
}

export function HeroReveal({
  eyebrow = "SYS.SPEC",
  lines = ["Turn Complex IT Systems", "into Competitive", "Advantages."],
  accentWord = "Advantages.",
  accentLineIndex = 2,
  className = "",
}: HeroRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<HTMLElement[]>([]);
  const accentRef = useRef<HTMLSpanElement>(null);
  const headlineLayerRef = useRef<HTMLHeadingElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  lineRefs.current = [];
  const registerLine = (el: HTMLElement | null) => {
    if (el) lineRefs.current.push(el);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          fullMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          // @ts-expect-error condition
          const { reduceMotion } = context.conditions;

          if (reduceMotion) {
            gsap.set(lineRefs.current, { yPercent: 0, opacity: 1 });
            if (accentRef.current) gsap.set(accentRef.current, { opacity: 1 });
            if (dotRef.current) gsap.set(dotRef.current, { opacity: 1 });
            if (ringRef.current) gsap.set(ringRef.current, { opacity: 0 });
            return;
          }

          // 1. Masked line reveal with expo.out
          const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

          tl.fromTo(
            lineRefs.current,
            { yPercent: 120, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 1.1,
              stagger: 0.12,
            }
          );

          // 2. Accent double-flicker on landing
          if (accentRef.current) {
            tl.to(
              accentRef.current,
              { opacity: 0.3, duration: 0.06, ease: "none" },
              "-=0.1"
            ).to(accentRef.current, { opacity: 1, duration: 0.06, ease: "none" });
          }

          // 3. Mouse parallax across 3 depth layers
          const xToBg = gsap.quickTo(bgLayerRef.current, "x", { duration: 0.8, ease: "power3" });
          const yToBg = gsap.quickTo(bgLayerRef.current, "y", { duration: 0.8, ease: "power3" });
          const xToMid = gsap.quickTo(midLayerRef.current, "x", { duration: 0.6, ease: "power3" });
          const yToMid = gsap.quickTo(midLayerRef.current, "y", { duration: 0.6, ease: "power3" });
          const xToHead = gsap.quickTo(headlineLayerRef.current, "x", { duration: 0.5, ease: "power3" });
          const yToHead = gsap.quickTo(headlineLayerRef.current, "y", { duration: 0.5, ease: "power3" });

          const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const relX = (e.clientX / innerWidth - 0.5) * 2;
            const relY = (e.clientY / innerHeight - 0.5) * 2;

            xToBg(relX * 28);
            yToBg(relY * 28);
            xToMid(relX * 14);
            yToMid(relY * 14);
            xToHead(relX * 5);
            yToHead(relY * 5);
          };
          window.addEventListener("mousemove", handleMouseMove);

          // 4. Eyebrow dot pulse + expanding glow ring
          if (dotRef.current) {
            gsap.to(dotRef.current, {
              opacity: 0.4,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }

          if (ringRef.current) {
            gsap.fromTo(
              ringRef.current,
              { scale: 0.8, opacity: 0.7 },
              {
                scale: 2.4,
                opacity: 0,
                duration: 2,
                repeat: -1,
                ease: "power1.out",
              }
            );
          }

          return () => {
            window.removeEventListener("mousemove", handleMouseMove);
          };
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={bgLayerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" />
      <div ref={midLayerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" />

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider mb-6 font-bold shadow-sm shadow-accent/10">
        <span className="relative flex h-2 w-2">
          <span ref={ringRef} className="absolute inline-flex h-full w-full rounded-full bg-accent" />
          <span ref={dotRef} className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span>[{eyebrow}]</span>
      </div>

      {/* Masked Headline */}
      <h1
        ref={headlineLayerRef}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] mb-6"
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-1">
            <span ref={registerLine} className="block will-change-transform">
              {i === accentLineIndex && accentWord ? (
                renderWithAccent(line, accentWord, accentRef)
              ) : (
                line
              )}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
}

function renderWithAccent(
  line: string,
  accentWord: string,
  accentRef: React.RefObject<HTMLSpanElement | null>
) {
  const idx = line.indexOf(accentWord);
  if (idx === -1) return line;
  const before = line.slice(0, idx);
  const after = line.slice(idx + accentWord.length);
  return (
    <>
      {before}
      <span
        ref={accentRef as React.RefObject<HTMLSpanElement>}
        className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-accent drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]"
      >
        {accentWord}
      </span>
      {after}
    </>
  );
}
export default HeroReveal;
