"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HudCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  code?: string;
  glowColor?: string;
  enableTilt?: boolean;
}

export function HudCard({
  children,
  className = "",
  code,
  glowColor = "rgba(229, 9, 20, 0.18)",
  enableTilt = true,
  ...props
}: HudCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y, opacity: 1 });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    if (enableTilt) {
      setTilt({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(${
              mousePos.opacity ? "-4px" : "0px"
            })`
          : undefined,
        transition:
          mousePos.opacity === 0
            ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease"
            : "transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      className={cn(
        "hud-card group relative rounded-xl bg-bg-card border border-border/80 transition-all duration-300 flex flex-col justify-between overflow-hidden select-none",
        "hover:border-accent/80 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(229,9,20,0.15)]",
        className
      )}
      {...props}
    >
      {/* 1. Cybernetic Blueprint Dotted Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent 80%)`,
        }}
      />

      {/* 2. Interactive Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* 3. Subtle Laser Border Highlighting Near Cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity * 0.8,
          border: "1px solid rgba(229, 9, 20, 0.7)",
          maskImage: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent 70%)`,
        }}
      />

      {/* 4. Top Laser Scan Edge on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100 origin-center transform transition-transform duration-700 ease-out" />

      {/* 5. Precision HUD Reticle Corner Brackets */}
      {/* Top Left */}
      <div className="absolute top-1.5 left-1.5 w-3 h-3 pointer-events-none transition-all duration-300">
        <span className="absolute top-0 left-0 w-2.5 h-[2px] bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
        <span className="absolute top-0 left-0 w-[2px] h-2.5 bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
      </div>

      {/* Top Right */}
      <div className="absolute top-1.5 right-1.5 w-3 h-3 pointer-events-none transition-all duration-300">
        <span className="absolute top-0 right-0 w-2.5 h-[2px] bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
        <span className="absolute top-0 right-0 w-[2px] h-2.5 bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-1.5 left-1.5 w-3 h-3 pointer-events-none transition-all duration-300">
        <span className="absolute bottom-0 left-0 w-2.5 h-[2px] bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
        <span className="absolute bottom-0 left-0 w-[2px] h-2.5 bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 pointer-events-none transition-all duration-300">
        <span className="absolute bottom-0 right-0 w-2.5 h-[2px] bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
        <span className="absolute bottom-0 right-0 w-[2px] h-2.5 bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(229,9,20,0.9)] transition-all duration-300" />
      </div>

      {/* Card Body */}
      <div className="relative z-10 p-6 md:p-7 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  );
}
