import React from "react";
import { cn } from "@/lib/utils";
import {
  LOGO_VIEWBOX,
  N_POLYGON,
  F_TOP_BAR,
  F_MID_BAR,
  ONE_PATH_FIXED,
  SPEED_POLYGONS_FIXED,
} from "@/lib/logoGeometry";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  hideTagline?: boolean;
}

export function Logo({ className, size = "md", hideTagline = false }: LogoProps) {
  const heights = {
    sm: hideTagline ? 24 : 32,
    md: hideTagline ? 32 : 44,
    lg: hideTagline ? 44 : 58,
  };

  const viewBox = hideTagline ? "70 60 880 340" : LOGO_VIEWBOX;

  return (
    <div className={cn("nf1-logo inline-flex items-center select-none", className)}>
      <svg
        height={heights[size]}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto overflow-visible"
        role="img"
        aria-label="NForce One"
      >
        <defs>
          {/* Red Gradient */}
          <linearGradient id="nf1RedGradFixed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E10600" />
            <stop offset="60%" stopColor="#800000" />
            <stop offset="100%" stopColor="#220000" />
          </linearGradient>

          {/* Drop Shadow */}
          <filter id="nf1ShadowFixed" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="-6" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.9" />
          </filter>
        </defs>

        <g filter="url(#nf1ShadowFixed)">
          {/* White Shapes: 'N' + Top/Middle Bars of 'F' */}
          <polygon points={N_POLYGON} fill="#FFFFFF" />
          <polygon points={F_TOP_BAR} fill="#FFFFFF" />
          <polygon points={F_MID_BAR} fill="#FFFFFF" />

          {/* Red Shapes: '1' extending into speed trails */}
          <path d={ONE_PATH_FIXED} fill="url(#nf1RedGradFixed)" />

          {/* Speed Lines */}
          <g fill="url(#nf1RedGradFixed)">
            {SPEED_POLYGONS_FIXED.map((pts, i) => (
              <polygon key={i} points={pts} />
            ))}
          </g>
        </g>

        {/* Tagline */}
        {!hideTagline && (
          <g
            fontFamily="'Arial Black', 'Arial', sans-serif"
            fontWeight="900"
            fontSize="62"
            letterSpacing="2"
          >
            <text x="140" y="475" fill="#FFFFFF">
              Let&apos;s Do
            </text>
            <text x="610" y="475" fill="#E10600">
              IT!
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}




