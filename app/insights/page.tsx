"use client";

import React from "react";
import { insights } from "@/content/insights";
import { InsightCard } from "@/components/cards/InsightCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroReveal } from "@/components/ui/HeroReveal";

export default function InsightsPage() {
  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <HeroReveal
              eyebrow="ENGINEERING NOTES & ARCHITECTURE"
              lines={[
                "Practical Architecture Guides &",
                "Technical Modernization",
                "Insights.",
              ]}
              accentWord="Insights."
              accentLineIndex={2}
            />

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
              Practical, battle-tested insights on Pega Infinity upgrades, low-latency streaming lakehouses, automated quality pipelines, and enterprise generative AI.
            </p>

            <Button href="/contact" size="md" variant="primary" icon magnetic>
              Consult with Our Authors
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
          <Button href="/contact" size="lg" variant="primary" icon magnetic>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
