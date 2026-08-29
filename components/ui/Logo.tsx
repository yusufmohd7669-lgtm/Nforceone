import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  hideTagline?: boolean;
}

export function Logo({ className, size = "md", hideTagline = false }: LogoProps) {
  const sizes = {
    sm: { height: 28, text: "text-base", subtext: "text-[9px]" },
    md: { height: 38, text: "text-xl", subtext: "text-[11px]" },
    lg: { height: 50, text: "text-2xl", subtext: "text-[13px]" },
  };

  return (
    <div className={cn("inline-flex flex-col items-start select-none", className)}>
      <div className="flex items-center">
        {/* Exact Vector NF1 Mark */}
        <svg
          height={sizes[size].height}
          viewBox="0 0 160 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="redGrad" x1="60" y1="0" x2="110" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C4151C" />
              <stop offset="50%" stopColor="#E50914" />
              <stop offset="100%" stopColor="#8A0005" />
            </linearGradient>
            <linearGradient id="whiteGrad" x1="0" y1="0" x2="60" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E0E0E0" />
            </linearGradient>
            <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8"/>
            </filter>
          </defs>

          {/* Letter 'N' - Bold Slanted White */}
          <path
            d="M8 50L24 6H40L24 50H8ZM36 6L20 50H36L52 6H36ZM52 6L36 50H46L68 6H52Z"
            fill="url(#whiteGrad)"
            filter="url(#glow)"
          />
          <path
            d="M6 50L26 6H42L28 32L58 6H74L54 50H38L52 24L22 50H6Z"
            fill="url(#whiteGrad)"
            filter="url(#glow)"
          />

          {/* Letter '1' - Crimson Gradient */}
          <path
            d="M80 18L64 24L67 15L90 6H104L88 50H72L80 18Z"
            fill="url(#redGrad)"
            filter="url(#glow)"
          />

          {/* Speedlines on the '1' trailing to the right */}
          <path d="M102 8H152V11H101L102 8Z" fill="#E50914" />
          <path d="M100 13H148V16H99L100 13Z" fill="#E50914" />
          <path d="M98 18H144V21H97L98 18Z" fill="#E50914" />
          <path d="M96 23H140V26H95L96 23Z" fill="#E50914" />
          <path d="M94 28H138V31H93L94 28Z" fill="#E50914" />
          <path d="M92 33H134V36H91L92 33Z" fill="#E50914" />
          <path d="M90 38H130V41H89L90 38Z" fill="#E50914" />
          <path d="M88 43H126V46H87L88 43Z" fill="#E50914" />
          <path d="M86 48H122V51H85L86 48Z" fill="#E50914" />
        </svg>
      </div>

      {/* Tagline: Let's Do IT! */}
      {!hideTagline && (
        <div className="flex items-center gap-1 font-mono tracking-widest uppercase font-bold text-white mt-1 pl-1">
          <span className={cn(sizes[size].subtext, "text-white tracking-widest")}>
            Let&apos;s Do
          </span>
          <span className={cn(sizes[size].subtext, "text-accent font-black tracking-widest drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]")}>
            IT!
          </span>
        </div>
      )}
    </div>
  );
}
