"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";

export function HeroHeadline() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const advantagesRef = useRef<HTMLSpanElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || prefersReduced) return;

      const lines = containerRef.current.querySelectorAll(".hero-line-inner");

      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Signature expo.out line reveal from overflow:hidden
      tl.fromTo(
        lines,
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "expo.out",
        }
      );

      // 2. Signature 120ms HUD double-flicker on "Advantages."
      if (advantagesRef.current) {
        tl.to(
          advantagesRef.current,
          {
            opacity: 0.3,
            duration: 0.03,
            repeat: 3,
            yoyo: true,
            ease: "none",
          },
          "+=0.02"
        );
      }
    },
    { scope: containerRef, dependencies: [prefersReduced] }
  );

  return (
    <h1
      ref={containerRef}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] mb-6"
    >
      <span className="block overflow-hidden pb-1">
        <span className="hero-line-inner block will-change-transform">
          Turn Complex IT Systems
        </span>
      </span>
      <span className="block overflow-hidden pb-1">
        <span className="hero-line-inner block will-change-transform">
          into Competitive
        </span>
      </span>
      <span className="block overflow-hidden pb-1">
        <span className="hero-line-inner block will-change-transform">
          <span
            ref={advantagesRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-accent drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]"
          >
            Advantages.
          </span>
        </span>
      </span>
    </h1>
  );
}
