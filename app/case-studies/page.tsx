"use client";

import React, { useState } from "react";
import { caseStudies } from "@/content/caseStudies";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroReveal } from "@/components/ui/HeroReveal";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = [
    "All",
    ...Array.from(new Set(caseStudies.map((cs) => cs.industry))),
  ];

  const filteredCaseStudies =
    selectedIndustry === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <HeroReveal
              eyebrow="ENTERPRISE CASE STUDIES"
              lines={[
                "Proven Outcomes & Architectural",
                "Case Notes Across",
                "Regulated Domains.",
              ]}
              accentWord="Regulated Domains."
              accentLineIndex={2}
            />

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
              Explore how we have engineered scalable Pega workflows, high-throughput cloud lakehouses, automated test suites, and resilient cloud architectures for leading global enterprises.
            </p>

            <Button href="/contact" size="md" variant="primary" icon magnetic>
              Discuss Your Challenge
            </Button>
          </div>
        </div>
      </section>

      {/* 2. FILTER & GRID (With Quick-Swap Crossfade) */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mechanical Filter Pill Control */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 select-none border-b border-border/80">
            <span className="text-xs font-mono uppercase text-text-muted mr-3 hidden sm:inline-block font-bold">
              [FILTER BY INDUSTRY]:
            </span>
            {industries.map((ind) => {
              const isActive = selectedIndustry === ind;
              return (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-150 relative ${
                    isActive
                      ? "bg-accent text-white font-bold shadow-lg shadow-accent/25 border border-accent"
                      : "bg-bg-card text-text-muted hover:text-white hover:bg-bg-raised border border-border"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>

          {/* Quick-swap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-200">
            {filteredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} caseStudy={study} />
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="p-12 text-center border border-border rounded-xl bg-bg-card">
              <p className="text-text-muted font-mono text-sm">
                No case studies found matching this industry filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            ENTERPRISE VALIDATION
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Ready to Deliver Measurable ROI?
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Connect with our solution architects to review detailed case architectures and explore benchmarks for your project.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon magnetic>
            Book a Technical Briefing
          </Button>
        </div>
      </section>
    </div>
  );
}
