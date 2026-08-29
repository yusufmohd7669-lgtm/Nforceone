"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { CaseStudy } from "@/lib/schema";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { use3DTilt } from "@/lib/animations/hooks";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  use3DTilt(cardRef, 4);

  return (
    <Link
      ref={cardRef}
      href={`/case-studies/${caseStudy.slug}`}
      className={cn(
        "group relative flex flex-col justify-between p-6 md:p-8 rounded-xl bg-bg-card border border-border transition-all duration-300 hover:border-accent hover:bg-bg-raised hover:-translate-y-1 shadow-xl hover:shadow-black/60",
        className
      )}
    >
      {/* HUD Reticle Corner Brackets (Signature Moment #5) */}
      <span className="hud-corner-tl" />
      <span className="hud-corner-tr" />
      <span className="hud-corner-bl" />
      <span className="hud-corner-br" />

      <div>
        {/* Header tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
            [{caseStudy.industry}]
          </span>
          <span className="text-xs font-mono text-text-muted">
            {caseStudy.serviceCategory}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-accent transition-colors leading-snug">
          {caseStudy.title}
        </h3>

        <p className="text-sm text-text-muted mt-3 line-clamp-3 leading-relaxed">
          {caseStudy.summary}
        </p>

        {/* Metrics Bar with Highlight */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border bg-bg/50 p-4 rounded-lg">
          {caseStudy.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold font-display text-accent">
                {m.value}
              </span>
              <span className="text-[11px] font-mono uppercase text-text-muted mt-0.5 truncate">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-xs font-mono tracking-wider text-text-muted uppercase group-hover:text-accent transition-colors font-semibold">
        <span>Read Full Spec & Results</span>
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
