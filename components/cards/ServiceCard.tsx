import React from "react";
import Link from "next/link";
import { Service } from "@/lib/schema";
import { IconRenderer } from "../ui/IconRenderer";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  index?: number;
  className?: string;
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between p-6 md:p-8 rounded-xl bg-bg-card border border-border transition-all duration-300 hover:border-accent/60 hover:bg-bg-raised hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40",
        className
      )}
    >
      {/* Top row */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
            <IconRenderer name={service.icon} className="w-6 h-6" />
          </div>
          {typeof index === "number" && (
            <span className="font-mono text-xs text-text-muted/60">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {service.badge && (
          <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded mb-3">
            {service.badge}
          </span>
        )}

        <h3 className="text-xl font-bold font-display text-text group-hover:text-accent transition-colors leading-snug">
          {service.title}
        </h3>

        <p className="text-sm text-text-muted mt-3 line-clamp-3 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Capabilities preview */}
        <ul className="mt-5 space-y-1.5 border-t border-border/50 pt-4">
          {service.capabilities.slice(0, 3).map((cap, idx) => (
            <li key={idx} className="text-xs text-text-muted/80 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="truncate">{cap.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom CTA link */}
      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono tracking-wider text-text-muted uppercase group-hover:text-accent transition-colors">
        <span>Explore Service</span>
        <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-accent-text transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
