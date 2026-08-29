import React from "react";
import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import {
  Layers,
  Cpu,
  RefreshCw,
  ShieldCheck,
  Zap,
  CheckCircle2,
  AlertCircle,
  Award,
  ArrowUpRight,
  Database,
  Cloud,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "Pega Implementation & Architecture Hub | Flagship Specialization",
  description:
    "Enterprise Pega architecture, Case Management, Decision Hub (CDH), and Pega Cloud modernization led by certified Pega Lead System Architects (CLSA).",
};

export default function PegaHubPage() {
  const pegaCapabilities = [
    {
      number: "01",
      title: "Enterprise Case Management & Workflow Automation",
      description:
        "Orchestrate multi-step business cases across departmental silos with dynamic routing, SLAs, multi-channel intake, and automated resolution.",
      tag: "Case Management",
      href: "/services/pega-development",
    },
    {
      number: "02",
      title: "Pega Customer Decision Hub (CDH) & 1:1 Engagement",
      description:
        "Implement real-time AI and predictive analytics to determine the Next-Best-Action for inbound and outbound customer interactions.",
      tag: "Decisioning",
      href: "/services/pega-development",
    },
    {
      number: "03",
      title: "Legacy Modernization to Pega Infinity '24",
      description:
        "Decommission brittle legacy monoliths by migrating core workflows and business rules onto modern Pega Infinity platforms with zero business interruption.",
      tag: "Modernization",
      href: "/services/pega-development",
    },
    {
      number: "04",
      title: "Automated Pega Testing & Quality Engineering",
      description:
        "Ensure regression-free releases with automated Pega Scenario Testing, PegaUnit coverage, and PAL performance profiling integrated into CI/CD pipelines.",
      tag: "QA & Verification",
      href: "/services/pega-testing",
    },
    {
      number: "05",
      title: "Pega Cloud & Architecture Optimization",
      description:
        "Deploy and optimize Pega applications on Pega Cloud, AWS, or Azure with auto-scaling, high availability, and multi-tenant security design.",
      tag: "Cloud Architecture",
      href: "/services/pega-development",
    },
    {
      number: "06",
      title: "Constellation UI & DX API Integration",
      description:
        "Build intuitive, accessible, and fast enterprise portals leveraging Pega's modern Constellation design system and React/micro-frontend bridges.",
      tag: "Frontend & Portals",
      href: "/services/pega-development",
    },
  ];

  const pegaCaseStudy = caseStudies.find((cs) => cs.slug === "pega-insurance-claims-automation");

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-6">
              FLAGSHIP PRACTICE & SPECIALIZATION
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-text leading-[1.08] mb-6">
              Enterprise Pega Implementations Built by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-lime-200 to-accent">
                Certified Lead Architects.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-10">
              NForce One delivers end-to-end Pega platform engineering for Fortune 500 enterprises. 
              Our Certified Lead System Architects (CLSA) design clean situational layer cakes, 
              maximize out-of-the-box guardrail compliance, and build automated regression test suites 
              for seamless platform upgrades.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" size="lg" variant="primary" icon>
                Book a Pega Architecture Review
              </Button>
              <Button href="/services/pega-development" size="lg" variant="secondary">
                Pega Development Services
              </Button>
              <Button href="/services/pega-testing" size="lg" variant="outline">
                Pega Testing Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER TIER & COMPLIANCE CALLOUT BANNER */}
      <section className="py-8 bg-bg-raised border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-xl bg-bg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-text">
                    Pega Implementation Practice
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded">
                    Certified Delivery Team
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-1 max-w-2xl">
                  Staffed by Certified Lead System Architects (CLSA), Certified Senior System Architects (CSSA), and Decisioning Consultants with a proven 90+ guardrail quality mandate.
                </p>
              </div>
            </div>

            {/* Note for verified partner tier badge */}
            <div className="text-xs font-mono text-text-muted/80 bg-bg-raised p-3 rounded-lg border border-border/60 shrink-0">
              <span className="text-accent font-semibold block mb-0.5">Partner Specialization</span>
              <span>Build · Deliver · Modernize</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PEGA CORE CAPABILITY DOMAINS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="PEGA PRACTICE CAPABILITIES"
            title="Comprehensive Pega Infinity Lifecycle Engineering"
            subtitle="From initial class structure design to continuous automated testing and cloud cutover."
          />

          <div className="space-y-3">
            {pegaCapabilities.map((cap) => (
              <FeatureRow
                key={cap.number}
                number={cap.number}
                title={cap.title}
                description={cap.description}
                tag={cap.tag}
                href={cap.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE NFORCE ONE PEGA DELIVERY METHODOLOGY */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR ARCHITECTURAL DISCIPLINE"
            title="How We Guarantee Long-Term Pega Maintainability"
            subtitle="Most Pega projects suffer from brittle custom Java and tangled rule sets. Here is our engineering standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-text mb-3">
                Situational Layer Cake
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                We structure enterprise rule sets strictly around Pega&apos;s Layer Cake principles (Enterprise, Framework, Division, Implementation) so that local variations never pollute core enterprise assets.
              </p>
              <div className="mt-6 pt-4 border-t border-border text-xs font-mono text-accent">
                Zero Rule Duplication
              </div>
            </div>

            <div className="p-8 rounded-xl bg-bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-text mb-3">
                ≥ 90 Guardrail Compliance
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                We reject custom Java in activities in favor of declarative data transforms. Automated guardrail analysis blocks pull requests that drop application compliance below 90.
              </p>
              <div className="mt-6 pt-4 border-t border-border text-xs font-mono text-accent">
                Upgrade-Ready Codebase
              </div>
            </div>

            <div className="p-8 rounded-xl bg-bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent mb-6">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-text mb-3">
                Automated Deployment Manager
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Continuous integration with Pega Deployment Manager, automated PegaUnit test runs, Scenario Testing gates, and zero-downtime pipeline promotions.
              </p>
              <div className="mt-6 pt-4 border-t border-border text-xs font-mono text-accent">
                Continuous Quality Gates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDY */}
      {pegaCaseStudy && (
        <section className="py-20 md:py-28 border-b border-border bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="PEGA IN PRODUCTION"
              title="Real-World Pega Case Study"
              subtitle="See how our Pega architecture automated 70% of claims processing for a tier-1 insurance carrier."
            />

            <div className="max-w-3xl">
              <CaseStudyCard caseStudy={pegaCaseStudy} />
            </div>
          </div>
        </section>
      )}

      {/* 6. BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            CONSULT WITH A PEGA ARCHITECT
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Review Your Pega Architecture & Guardrails
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Speak directly with a Certified Pega Lead System Architect to evaluate your upgrade path, guardrail compliance score, or new application roadmap.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
