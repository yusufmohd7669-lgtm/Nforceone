import React from "react";
import Link from "next/link";
import { insights } from "@/content/insights";
import { InsightCard } from "@/components/cards/InsightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Engineering Insights & Technical Architecture | NForce One",
  description:
    "Read technical articles, modernization guides, and architectural whitepapers authored by NForce One lead system architects and practice directors.",
};

export default function InsightsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              TECHNICAL THOUGHT LEADERSHIP
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              Engineering Notes, Architecture Guides & Insights.
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              Practical, battle-tested insights on Pega Infinity upgrades, low-latency streaming lakehouses, automated quality pipelines, and enterprise generative AI.
            </p>

            <Button href="/contact" size="md" variant="primary" icon>
              Consult with Our Architects
            </Button>
          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>

          {/* User Placeholder Note */}
          <div className="mt-16 p-6 rounded-xl bg-bg-raised border border-border text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-1">
              Publishing Pipeline
            </span>
            <p className="text-xs text-text-muted">
              New articles, whitepapers, and guides can be added to <code className="text-text font-mono">content/insights.ts</code> with zero CMS configuration needed.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            COLLABORATE WITH AN AUTHOR
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Have a Specific Architecture Question?
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Connect directly with the authors and lead architects behind our technical publications.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
