"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useMagnetic } from "@/lib/animations/hooks";

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
}

export function Button({
  children = "Book a Consultation",
  href,
  variant = "primary",
  size = "md",
  className,
  icon = false,
  type = "button",
  disabled = false,
  magnetic = true,
  onClick,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  // Apply subtle magnetic pull
  useMagnetic(buttonRef, magnetic ? 10 : 0);

  const baseStyles =
    "inline-flex items-center justify-center font-medium font-sans tracking-wide transition-all duration-300 rounded-md select-none group relative overflow-hidden disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent text-white font-bold hover:bg-accent-hover active:scale-[0.98] shadow-lg shadow-accent/25 hover:shadow-accent/40 border border-accent/40",
    secondary:
      "bg-bg-raised text-white hover:bg-border active:scale-[0.98] border border-border hover:border-accent/40",
    outline:
      "bg-transparent text-white border border-border hover:border-accent hover:text-accent active:scale-[0.98]",
    ghost:
      "bg-transparent text-text-muted hover:text-white hover:bg-bg-raised active:scale-[0.98]",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        // @ts-expect-error Link ref
        ref={buttonRef}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {content}
    </button>
  );
}
