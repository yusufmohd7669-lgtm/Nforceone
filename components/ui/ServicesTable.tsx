import React from "react";
import Link from "next/link";
import { services } from "@/content/services";
import { ArrowUpRight } from "lucide-react";

export function ServicesTable() {
  return (
    <div className="w-full border border-border rounded-xl bg-bg-card divide-y divide-border overflow-hidden">
      {services.map((service, index) => {
        const indexStr = String(index + 1).padStart(2, "0");
        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col md:flex-row md:items-center justify-between p-5 md:px-8 md:py-6 hover:bg-bg-raised hover:border-l-4 hover:border-l-accent transition-all duration-200"
          >
            {/* Left: Index & Title */}
            <div className="flex items-start md:items-center gap-5 md:gap-8 max-w-xl">
              <span className="font-mono text-xs md:text-sm text-text-muted/60 group-hover:text-accent font-semibold pt-1 md:pt-0">
                [{indexStr}]
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg md:text-xl font-bold font-display text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 font-semibold">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-text-muted mt-1 leading-snug line-clamp-1 group-hover:text-white/90">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            {/* Right: Category & Action */}
            <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
              <span className="text-[11px] font-mono uppercase text-text-muted/70 bg-bg px-2.5 py-1 rounded border border-border/80 hidden sm:inline-block">
                {service.eyebrow}
              </span>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-text-muted group-hover:text-accent font-semibold">
                <span className="hidden lg:inline-block">Spec & Capabilities</span>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
