import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline";
  className?: string;
}

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  const variantStyles = {
    accent: "bg-accent/15 text-accent border-accent/40 font-bold shadow-sm shadow-accent/10",
    muted: "bg-bg-raised text-text-muted border-border",
    outline: "bg-transparent text-white border-border hover:border-accent/50",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
