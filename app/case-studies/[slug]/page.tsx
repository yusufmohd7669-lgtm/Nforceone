import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Counter } from "@/components/ui/Counter";
import {
  ArrowLeft,
  ShieldAlert,
  CheckCircle2,
  Cpu,
  Layers,
  Quote,
  TrendingUp,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study | NForce One`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="accent">{study.industry}</Badge>
              <span className="text-xs font-mono text-text-muted">
                {study.serviceCategory}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              {study.title}
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
              {study.summary}
            </p>

            <div className="p-4 rounded-lg bg-bg-raised border border-border inline-block text-xs font-mono text-text-muted">
              <span className="text-accent font-semibold">Client Organization:</span>{" "}
              {study.client}
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUANTIFIED METRICS BANNER */}
      <section className="py-12 bg-bg-raised/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-bg border border-border">
                <div className="text-4xl md:text-5xl font-bold font-display text-accent mb-1">
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-text mb-1">{m.suffix}</div>
                <p className="text-xs text-text-muted uppercase font-mono">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHALLENGE & SOLUTION DETAILED BREAKDOWN */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div className="p-8 rounded-2xl bg-bg-card border border-border space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold font-display text-text">
                  The Enterprise Challenge
                </h2>
              </div>
              <ul className="space-y-4">
                {study.challenge.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-2xl bg-bg-card border border-accent/40 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold font-display text-text">
                  The Architectural Solution
                </h2>
              </div>
              <ul className="space-y-4">
                {study.solution.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE & IMPACT */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Architecture Highlights */}
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase text-accent tracking-wider block">
                Technical Stack & Infrastructure
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-text">
                Architecture Highlights
              </h3>
              <div className="space-y-3">
                {study.architecturePoints.map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-bg border border-border text-xs font-mono text-text flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-accent shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantified Impact */}
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase text-accent tracking-wider block">
                Operational Return on Investment
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-text">
                Business & Technical Impact
              </h3>
              <ul className="space-y-3.5">
                {study.impact.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text">
                    <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial Quote */}
          {study.testimonial && (
            <div className="mt-16 p-8 md:p-12 rounded-2xl bg-bg border border-border relative overflow-hidden">
              <Quote className="w-16 h-16 text-accent/10 absolute -right-2 -bottom-2 pointer-events-none" />
              <p className="text-lg md:text-xl font-display text-text italic leading-relaxed mb-6">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div className="text-xs font-mono">
                <span className="font-bold text-accent block">{study.testimonial.author}</span>
                <span className="text-text-muted">{study.testimonial.role}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            DELIVER SIMILAR RESULTS
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Ready to Solve Your Architecture Challenges?
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Schedule an architecture assessment with an NForce One practice director.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
