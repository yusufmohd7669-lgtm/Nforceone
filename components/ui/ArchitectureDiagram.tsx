"use client";

import React from "react";
import { useDrawOnScroll } from "@/hooks/useDrawOnScroll";
import { cn } from "@/lib/utils";

/**
 * The Situational Layer Cake, drawn rather than described.
 *
 * This is the concept the homepage and the Pega hub both lean on in prose, so
 * it earns a diagram: clean separation between reusable enterprise foundation
 * rules at the base and application-specific work at the top. The strokes trace
 * themselves on scroll, which reads as the architecture being assembled.
 */

const BAND_X = 74;
const BAND_W = 372;
const BAND_H = 54;
const BAND_GAP = 70;
const BAND_Y0 = 18;

/** Perimeter of a band rect — the dash length that traces its outline. */
const BAND_LEN = 2 * (BAND_W + BAND_H);
const LINK_LEN = BAND_GAP - BAND_H;

const LAYERS = [
  { code: "L5", title: "Channel & Constellation UI", detail: "Portals · Mobile · Service APIs" },
  { code: "L4", title: "Case Management", detail: "Workflows · SLAs · Routing" },
  { code: "L3", title: "Decisioning · CDH", detail: "Next-Best-Action · Predictive AI" },
  { code: "L2", title: "Integration Services", detail: "Connectors · Queues · Events" },
  { code: "L1", title: "Enterprise Foundation", detail: "Org-wide reusable rule sets" },
];

const SPINE_TOP = BAND_Y0;
const SPINE_BOTTOM = BAND_Y0 + (LAYERS.length - 1) * BAND_GAP + BAND_H;
const SPINE_LEN = SPINE_BOTTOM - SPINE_TOP;

export function ArchitectureDiagram({ className }: { className?: string }) {
  const { ref, phase } = useDrawOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} data-phase={phase} className={cn("nf1-arch w-full", className)}>
      <svg
        viewBox="0 0 460 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Situational Layer Cake: five architectural layers from Enterprise Foundation up to Channel and Constellation UI"
      >
        {/* Left spine tying the stack together */}
        <line
          className="nf1-arch-spine"
          x1={40}
          y1={SPINE_TOP}
          x2={40}
          y2={SPINE_BOTTOM}
          stroke="rgba(156, 163, 175, 0.28)"
          strokeWidth={1}
          strokeDasharray={SPINE_LEN}
          style={{ "--len": SPINE_LEN } as React.CSSProperties}
        />

        {LAYERS.map((layer, i) => {
          const y = BAND_Y0 + i * BAND_GAP;
          const mid = y + BAND_H / 2;
          // Foundation reads heaviest: the deeper the layer, the more reuse it carries.
          const edgeOpacity = 0.35 + (i / (LAYERS.length - 1)) * 0.65;

          return (
            <g key={layer.code}>
              {/* Connector down to the next layer */}
              {i < LAYERS.length - 1 && (
                <line
                  className="nf1-arch-link"
                  x1={260}
                  y1={y + BAND_H}
                  x2={260}
                  y2={y + BAND_GAP}
                  stroke="var(--color-accent)"
                  strokeWidth={1.5}
                  strokeDasharray={LINK_LEN}
                  style={{ "--len": LINK_LEN, "--i": i } as React.CSSProperties}
                />
              )}

              {/* Spine tick */}
              <line
                className="nf1-arch-label"
                x1={40}
                y1={mid}
                x2={56}
                y2={mid}
                stroke="rgba(156, 163, 175, 0.28)"
                strokeWidth={1}
                style={{ "--i": i } as React.CSSProperties}
              />

              {/* Layer band */}
              <rect
                className="nf1-arch-band"
                x={BAND_X}
                y={y}
                width={BAND_W}
                height={BAND_H}
                rx={7}
                stroke="rgba(156, 163, 175, 0.34)"
                strokeWidth={1.25}
                fill="var(--color-bg-raised)"
                strokeDasharray={BAND_LEN}
                style={{ "--len": BAND_LEN, "--i": i } as React.CSSProperties}
              />

              {/* Accent edge — the layer boundary itself */}
              <rect
                className="nf1-arch-edge"
                x={BAND_X}
                y={y + 1}
                width={3.5}
                height={BAND_H - 2}
                fill="var(--color-accent)"
                opacity={edgeOpacity}
                style={{ "--i": i } as React.CSSProperties}
              />

              <text
                className="nf1-arch-label"
                x={30}
                y={mid + 3.5}
                textAnchor="end"
                fill="var(--color-accent)"
                style={{ "--i": i } as React.CSSProperties}
                fontSize={10}
                fontFamily="var(--font-mono), monospace"
                fontWeight={700}
              >
                {layer.code}
              </text>

              <text
                className="nf1-arch-label"
                x={BAND_X + 18}
                y={y + 23}
                fill="#ffffff"
                style={{ "--i": i } as React.CSSProperties}
                fontSize={14}
                fontFamily="var(--font-display), system-ui, sans-serif"
                fontWeight={700}
              >
                {layer.title}
              </text>

              <text
                className="nf1-arch-label"
                x={BAND_X + 18}
                y={y + 40}
                fill="rgba(156, 163, 175, 0.95)"
                style={{ "--i": i } as React.CSSProperties}
                fontSize={11}
                fontFamily="var(--font-mono), monospace"
              >
                {layer.detail}
              </text>
            </g>
          );
        })}

        {/* Signature scan pass as the stack resolves */}
        <rect
          className="nf1-arch-scan"
          x={BAND_X}
          y={BAND_Y0}
          width={BAND_W}
          height={1.5}
          fill="var(--color-accent)"
        />
      </svg>
    </div>
  );
}
