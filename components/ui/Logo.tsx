import React from "react";
import { cn } from "@/lib/utils";
import {
  LOGO_VIEWBOX,
  LETTER_N,
  LETTER_F,
  NUMERAL_ONE,
  SPEEDLINES,
} from "@/lib/logoGeometry";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  hideTagline?: boolean;
}

export function Logo({ className, size = "md", hideTagline = false }: LogoProps) {
  const sizes = {
    sm: { height: 26, subtext: "text-[9px]" },
    md: { height: 34, subtext: "text-[11px]" },
    lg: { height: 46, subtext: "text-[13px]" },
  };

  return (
    <div className={cn("nf1-logo inline-flex flex-col items-start select-none", className)}>
      <svg
        height={sizes[size].height}
        viewBox={LOGO_VIEWBOX}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        role="img"
        aria-label="NForce One"
      >
        <defs>
          <linearGradient id="nf1White" x1="0" y1="0" x2="80" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#F2F2F4" />
            <stop offset="100%" stopColor="#C9CBD2" />
          </linearGradient>

          <linearGradient id="nf1Red" x1="116" y1="0" x2="152" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF2A33" />
            <stop offset="45%" stopColor="#E50914" />
            <stop offset="100%" stopColor="#8A0005" />
          </linearGradient>

          {/* Streaks burn hot at the mark and dissolve into the slipstream */}
          <linearGradient id="nf1Streak" x1="138" y1="0" x2="210" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF3A42" />
            <stop offset="30%" stopColor="#E50914" />
            <stop offset="100%" stopColor="#E50914" stopOpacity="0" />
          </linearGradient>

          <filter id="nf1Depth" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.85" />
          </filter>
        </defs>

        {/* Speed streaks */}
        <g fill="url(#nf1Streak)">
          {SPEEDLINES.map((d, i) => (
            <path
              key={i}
              d={d}
              className="nf1-speedline"
              style={{ "--sl": i } as React.CSSProperties}
            />
          ))}
        </g>

        <path d={LETTER_N} fill="url(#nf1White)" filter="url(#nf1Depth)" />
        <path d={LETTER_F} fill="url(#nf1White)" filter="url(#nf1Depth)" />
        <path
          className="nf1-mark-one"
          d={NUMERAL_ONE}
          fill="url(#nf1Red)"
          filter="url(#nf1Depth)"
        />
      </svg>

      {!hideTagline && (
        <div className="flex items-center gap-1 font-mono tracking-widest uppercase font-bold text-white mt-1 pl-1">
          <span className={cn(sizes[size].subtext, "text-white tracking-widest")}>
            Let&apos;s Do
          </span>
          <span
            className={cn(
              sizes[size].subtext,
              "text-accent font-black tracking-widest drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]"
            )}
          >
            IT!
          </span>
        </div>
      )}
    </div>
  );
}
