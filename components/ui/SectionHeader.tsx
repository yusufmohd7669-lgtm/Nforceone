import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col gap-3 max-w-3xl mb-12 md:mb-16", alignStyles[align], className)}>
      {eyebrow && (
        <Badge variant="accent" className="w-fit">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-text leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
