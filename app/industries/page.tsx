"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { industries } from "@/content/industries";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { DigitRoll } from "@/components/ui/DigitRoll";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { useHudBracketHover } from "@/hooks/useHudBracketHover";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <HeroReveal
              eyebrow="INDUSTRY SPECIALIZATIONS"
              lines={[
                "Domain-Specific Solutions for",
                "Regulated & High-Volume",
                "Sectors.",
              ]}
              accentWord="Sectors."
              accentLineIndex={2}
            />

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
              We engineer mission-critical systems designed for strict compliance, high-volume transactions, and uninterrupted availability across regulated industries.
            </p>

            <Button href="/contact" size="md" variant="primary" icon magnetic>
              Schedule Domain Architecture Session
            </Button>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES DETAIL PANELS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {industries.map((ind, idx) => (
            <IndustryPanel key={ind.slug} ind={ind} index={idx} />
          ))}
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            INDUSTRY ADVISORY
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Explore Architecture Blueprints for Your Sector
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Consult with practice leads who have built mission-critical architectures for leading insurance carriers, tier-one banks, healthcare networks, and retailers.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon magnetic>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}

function IndustryPanel({ ind, index }: { ind: (typeof industries)[0]; index: number }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useHudBracketHover(panelRef);

  return (
    <div
      ref={panelRef}
      id={ind.slug}
      className="relative p-8 md:p-12 rounded-2xl bg-bg-card border border-border group hover:border-accent shadow-2xl transition-all"
    >
      <span data-bracket="tl" className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-accent" />
      <span data-bracket="tr" className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-accent" />
      <span data-bracket="bl" className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-accent" />
      <span data-bracket="br" className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-accent" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
              [VERTICAL SOLUTION 0{index + 1}]
            </span>
            <ScrambleText
              text={`[SYS.SEC.${ind.slug.toUpperCase().slice(0, 4)}]`}
              className="text-[10px] text-text-muted/60"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
            {ind.name}
          </h2>

          <p className="text-sm md:text-base text-text-muted leading-relaxed">
            {ind.description}
          </p>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase text-text-muted tracking-wider block font-bold">
              Architectural Solutions in this Vertical:
            </span>
            <div className="space-y-2">
              {ind.solutions.map((sol, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-start gap-2.5 text-xs font-mono text-white/90 bg-bg p-3 rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans font-semibold mb-0.5">
                      {sol.title}
                    </strong>
                    <span className="text-text-muted text-[11px] leading-relaxed">
                      {sol.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button
              href={`/industries/${ind.slug}`}
              size="md"
              variant="primary"
              icon
              magnetic
            >
              Explore {ind.name} Architecture
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-bg p-6 md:p-8 rounded-xl border border-border">
          <div>
            <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-4 font-bold">
              Validated Benchmark Outcomes
            </span>
            <div className="space-y-6 divide-y divide-border">
              {ind.metrics.map((st, mIdx) => (
                <div key={mIdx} className={mIdx > 0 ? "pt-5" : ""}>
                  <div className="text-3xl md:text-4xl font-bold font-display text-accent">
                    <DigitRoll value={st.value} />
                  </div>
                  <span className="text-xs font-mono uppercase text-text-muted mt-1 block">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <span className="text-[11px] font-mono text-text-muted block">
              Relevant Core Practices:
            </span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {ind.relevantServices.map((srv, rIdx) => (
                <span
                  key={rIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-raised border border-border text-white/90"
                >
                  #{srv}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
