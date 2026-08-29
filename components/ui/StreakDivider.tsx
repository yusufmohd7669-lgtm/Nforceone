import React from "react";
import { cn } from "@/lib/utils";

/**
 * The logo's speed streaks, reused wherever the brand needs a beat: between
 * sections, and as the boot screen's loading indicator.
 *
 * The tapering trail is the one piece of visual DNA the brand actually owns, so
 * it repeats rather than a generic hairline or spinner. Same travelling wave as
 * the mark in the header — pure CSS, no JS, no rAF.
 */

/** Tapering trail widths, in px — longest at the head, dissolving into the tail. */
const TRAIL = [36, 28, 22, 17, 13, 9, 6];

export function StreakTrail({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-[5px]", className)}>
      {TRAIL.map((width, i) => (
        <span
          key={i}
          className="nf1-divider-streak block h-[2px] rounded-full bg-accent"
          style={{ width, "--sl": i } as React.CSSProperties}
        />
      ))}
    </span>
  );
}

export function StreakDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-4 select-none", className)}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border-light" />
      <StreakTrail />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border-light" />
    </div>
  );
}
