"use client";

import React, { useState } from "react";
import { caseStudies } from "@/content/caseStudies";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industriesList = [
    "All",
    "Insurance",
    "Banking & Financial Services",
    "Healthcare & Life Sciences",
    "Retail & eCommerce",
  ];

  const filteredStudies =
    selectedIndustry === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              PROVEN RESULTS & ARCHITECTURE
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              Enterprise Case Studies & Quantified Outcomes.
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              Explore how NForce One solves mission-critical technology challenges — from flagship Pega modernizations and automated QA pipelines to petabyte-scale data platforms.
            </p>

            <Button href="/contact" size="md" variant="primary" icon>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* 2. FILTER & GALLERY */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <span className="text-xs font-mono uppercase text-text-muted mr-2">
              Filter by Industry:
            </span>
            {industriesList.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedIndustry === ind
                    ? "bg-accent text-accent-text font-semibold border-accent"
                    : "bg-bg-card text-text-muted border-border hover:border-accent/40"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.slug} caseStudy={study} />
            ))}
          </div>

          {/* Placeholder callout note for user */}
          <div className="mt-16 p-6 rounded-xl bg-bg-raised border border-border text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-1">
              Production Client Portfolio
            </span>
            <p className="text-xs text-text-muted">
              Case study metrics, anonymized details, and client testimonials are structured in <code className="text-text font-mono">content/caseStudies.ts</code> ready for live enterprise references.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            EVALUATE YOUR ROI
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Achieve Measurable Impact on Your Next Initiative
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Let&apos;s evaluate your current architecture bottlenecks and model target ROI milestones.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
