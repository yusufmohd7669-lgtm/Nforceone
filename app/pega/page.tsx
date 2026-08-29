"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DigitRoll } from "@/components/ui/DigitRoll";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { ScanSweep } from "@/components/ui/ScanSweep";
import { VerificationStamp } from "@/components/ui/VerificationStamp";
import { useHudBracketHover } from "@/hooks/useHudBracketHover";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
  ArrowUpRight,
  Zap,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function PegaPage() {
  const capabilitiesSectionRef = useRef<HTMLElement>(null);
  const caseStudyCardRef = useRef<HTMLDivElement>(null);
  useHudBracketHover(caseStudyCardRef);

  const pegaCapabilities = [
    {
      index: "01",
      title: "Pega Infinity '24 Modernization",
      description:
        "Seamless cloud upgrades and technical debt remediation from legacy versions (7.x/8.x) to Constellation architecture with zero business disruption.",
      slug: "pega-development",
    },
    {
      index: "02",
      title: "Customer Decision Hub (CDH)",
      description:
        "1-to-1 customer engagement engines, adaptive AI modeling, Next-Best-Action (NBA) designer, and real-time event streaming architectures.",
      slug: "pega-development",
    },
    {
      index: "03",
      title: "Enterprise Case Management",
      description:
        "Multi-persona case lifecycles, automated SLA escalation queues, dynamic assignment routing, and deep situational layer cake rule specializations.",
      slug: "pega-development",
    },
    {
      index: "04",
      title: "Automated Scenario & Regression Testing",
      description:
        "Zero-defect pipeline validation using Pega Scenario Testing, Deployment Manager quality gates, and automated test data generation suites.",
      slug: "pega-testing",
    },
    {
      index: "05",
      title: "Pega Cloud & Multi-Cloud DevOps",
      description:
        "Infrastructure-as-Code pipeline templates, automated hotfix deployments, CloudKicker migrations, and secure VPC peering topologies.",
      slug: "pega-development",
    },
    {
      index: "06",
      title: "Situational Layer Cake Architecture",
      description:
        "Strict enterprise rule separation ensuring corporate layers remain pristine while state, line-of-business, and regional rules specialize cleanly.",
      slug: "pega-development",
    },
  ];

  const pegaCaseStudy = caseStudies.find((c) =>
    c.slug.includes("pega-insurance")
  ) || caseStudies[0];

  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Signature Masked Headline Reveal */}
            <HeroReveal
              eyebrow="PEGA FLAGSHIP PRACTICE"
              lines={[
                "Enterprise Pega Implementations",
                "Built by Certified",
                "Lead Architects.",
              ]}
              accentWord="Lead Architects."
              accentLineIndex={2}
            />

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
              We specialize in mission-critical Pega implementations, upgrades, and automated QA testing. Every solution is architected by certified Lead System Architects (CLSA) who guarantee strict layer cake discipline and high guardrail compliance.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button href="/contact" size="lg" variant="primary" icon magnetic>
                Book a CLSA Consultation
              </Button>
              <Button href="/services/pega-development" size="lg" variant="secondary" magnetic>
                Pega Development Spec
              </Button>
              <Button href="/services/pega-testing" size="lg" variant="outline" magnetic>
                Pega Testing Spec
              </Button>
            </div>

            {/* Quality Seal Banner with Verification Stamp */}
            <div className="p-4 md:p-5 rounded-xl bg-bg-card border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <VerificationStamp label="MANDATED GUARDRAIL STANDARD" />
                <span className="text-xs md:text-sm text-text-muted">
                  Minimum acceptable score across all client delivery pipelines.
                </span>
              </div>
              <div className="text-2xl font-bold font-mono text-white flex items-center">
                <DigitRoll value={90} suffix=" / 100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID (With Signature ScanSweep) */}
      <section
        ref={capabilitiesSectionRef}
        className="relative py-20 md:py-24 border-b border-border bg-bg"
      >
        {/* Single-pass ScanSweep across capabilities header */}
        <ScanSweep sectionRef={capabilitiesSectionRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="PEGA PRACTICE CAPABILITIES"
            title="Comprehensive Pega Platform Specializations"
            subtitle="Full lifecycle Pega delivery from greenfield architecture design to high-concurrency production cutover."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pegaCapabilities.map((cap) => (
              <PegaCapabilityCard key={cap.index} cap={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PEGA CASE STUDY */}
      <section className="py-20 md:py-24 border-b border-border bg-bg-raised/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FLAGSHIP CASE STUDY"
            title="Automating Claims Processing with Pega Infinity"
            subtitle="How a Fortune 500 carrier modernized legacy case management to achieve touchless processing."
          />

          <div
            ref={caseStudyCardRef}
            className="relative p-8 md:p-12 rounded-2xl bg-bg-card border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group shadow-2xl"
          >
            {/* HUD Corner Reticles */}
            <span data-bracket="tl" className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-accent" />
            <span data-bracket="tr" className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-accent" />
            <span data-bracket="bl" className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-accent" />
            <span data-bracket="br" className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-accent" />

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                [FINANCIAL SERVICES & INSURANCE]
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                {pegaCaseStudy.title}
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {pegaCaseStudy.summary}
              </p>
              <div className="pt-2">
                <Button
                  href={`/case-studies/${pegaCaseStudy.slug}`}
                  variant="primary"
                  size="md"
                  icon
                  magnetic
                >
                  Read Full Architecture Breakdown
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-bg p-6 rounded-xl border border-border">
              {pegaCaseStudy.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-3xl md:text-4xl font-bold font-display text-accent">
                    <DigitRoll value={m.value} />
                  </div>
                  <span className="text-xs font-mono uppercase text-text-muted mt-1">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR ARCHITECTURAL DISCIPLINE */}
      <section className="py-20 md:py-24 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR ARCHITECTURAL DISCIPLINE"
            title="Engineered for Zero Technical Debt"
            subtitle="The three non-negotiable architectural standards enforced on every Pega engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 rounded-xl bg-bg-card border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Situational Layer Cake
              </h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                Rules are partitioned strictly into Enterprise, Framework, and Implementation layers so regional specializations never pollute core reusable assets.
              </p>
              <span className="text-[10px] font-mono text-accent block pt-2">
                [SYS.ARCH.STANDARD-01]
              </span>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-bg-card border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                ≥90 Guardrail Compliance
              </h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                Automated validation scripts reject builds with guardrail warnings or custom Java code where out-of-the-box Pega rules should be utilized.
              </p>
              <span className="text-[10px] font-mono text-accent block pt-2">
                [SYS.ARCH.STANDARD-02]
              </span>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-bg-card border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Automated Deployment Manager
              </h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                CI/CD quality gates execute automated scenario tests and branch merges continuously to ensure rapid, zero-downtime releases.
              </p>
              <span className="text-[10px] font-mono text-accent block pt-2">
                [SYS.ARCH.STANDARD-03]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            PRACTICE ENGAGEMENT
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Review Your Pega Architecture with a CLSA
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Schedule a complimentary architecture review to assess your application guardrails, layer cake structure, and upgrade readiness.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon magnetic>
            Schedule Architecture Review
          </Button>
        </div>
      </section>
    </div>
  );
}

function PegaCapabilityCard({ cap }: { cap: { index: string; title: string; description: string; slug: string } }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  useHudBracketHover(cardRef);

  return (
    <Link
      ref={cardRef}
      href={`/services/${cap.slug}`}
      className="relative p-6 md:p-7 rounded-xl bg-bg-card border border-border transition-all duration-300 flex flex-col justify-between group hover:bg-bg-raised shadow-lg"
    >
      <span data-bracket="tl" className="absolute -top-px -left-px h-3 w-3 border-t-2 border-l-2 border-accent" />
      <span data-bracket="tr" className="absolute -top-px -right-px h-3 w-3 border-t-2 border-r-2 border-accent" />
      <span data-bracket="bl" className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-accent" />
      <span data-bracket="br" className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-accent" />

      <div>
        <span className="font-mono text-xs text-text-muted/60 group-hover:text-accent font-semibold block mb-3">
          [{cap.index}]
        </span>
        <h3 className="text-lg font-bold font-display text-white group-hover:text-accent transition-colors mb-2.5">
          {cap.title}
        </h3>
        <p className="text-xs md:text-sm text-text-muted leading-relaxed">
          {cap.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-accent font-semibold">
        <span className="relative">
          Explore Capability
          <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
