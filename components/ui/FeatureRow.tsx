import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureRowProps {
  number?: string;
  title: string;
  description: string;
  href?: string;
  tag?: string;
  className?: string;
}

export function FeatureRow({
  number,
  title,
  description,
  href,
  tag,
  className,
}: FeatureRowProps) {
  const content = (
    <div
      className={cn(
        "group relative flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-border transition-all duration-300 hover:border-accent/60 hover:bg-bg-raised/40 px-4 md:px-6 rounded-lg",
        className
      )}
    >
      <div className="flex items-start md:items-center gap-6 max-w-2xl">
        {number && (
          <span className="font-mono text-xs md:text-sm text-text-muted/60 group-hover:text-accent transition-colors pt-1 md:pt-0">
            {number}
          </span>
        )}
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg md:text-xl font-semibold text-text group-hover:text-accent transition-colors">
              {title}
            </h3>
            {tag && (
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-bg-raised border border-border text-text-muted group-hover:border-accent/30">
                {tag}
              </span>
            )}
          </div>
          <p className="text-sm md:text-base text-text-muted mt-1.5 leading-relaxed group-hover:text-text/90 transition-colors">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-0 flex items-center gap-2 self-end md:self-auto">
        <span className="text-xs font-mono text-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:inline-block">
          Explore Capability
        </span>
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-accent group-hover:bg-accent group-hover:text-accent-text transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
