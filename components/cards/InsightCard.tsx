import React from "react";
import Link from "next/link";
import { Insight } from "@/lib/schema";
import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: Insight;
  className?: string;
}

export function InsightCard({ insight, className }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className={cn(
        "group flex flex-col justify-between p-6 md:p-8 rounded-xl bg-bg-card border border-border transition-all duration-300 hover:border-accent/60 hover:bg-bg-raised hover:-translate-y-1 relative overflow-hidden",
        className
      )}
    >
      {/* Top Accent Line that animates on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
            [{insight.category}]
          </span>
          <div className="flex items-center gap-1 text-xs font-mono text-text-muted">
            <Clock className="w-3 h-3 text-accent" />
            <span>{insight.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold font-display text-white group-hover:text-accent transition-colors leading-snug">
          {insight.title}
        </h3>

        <p className="text-sm text-text-muted mt-3 line-clamp-3 leading-relaxed">
          {insight.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-6">
          {insight.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-raised border border-border text-text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono tracking-wider text-text-muted uppercase group-hover:text-accent transition-colors font-semibold">
        <span className="relative">
          Read Article
          <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
        </span>
        <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
