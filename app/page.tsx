import React from "react";
import Link from "next/link";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { insights } from "@/content/insights";
import { industries } from "@/content/industries";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Marquee } from "@/components/ui/Marquee";
import { Counter } from "@/components/ui/Counter";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { Logo } from "@/components/ui/Logo";
import {
  Layers,
  ShieldCheck,
  Zap,
  Award,
  ArrowUpRight,
  Cpu,
  CheckCircle2,
  Lock,
  GitBranch,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "NForce One | Enterprise Pega Architecture & IT Delivery Partner",
  description:
    "Accelerate enterprise digital transformation with certified Pega Lead System Architects, cloud data platforms, automated QA engineering, and custom software.",
};

export default function HomePage() {
  const marqueeItems = [
    "Pega Infinity '24 Architecture",
    "Pega Customer Decision Hub (CDH)",
    "Automated Scenario & Unit Testing",
    "Petabyte Lakehouse Engineering",
    "Zero-Downtime Database Migration",
    "Multi-Cloud Kubernetes & GitOps",
    "Enterprise RAG & Autonomous AI",
    "90+ Guardrail Compliance Standards",
  ];

  const valuePillars = [
    {
      icon: Award,
      title: "Certified Architecture Mastery",
      description:
        "Led by certified Pega Lead System Architects (CLSA) and cloud specialists who design scalable situational layer cakes and resilient data platforms with zero technical debt.",
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Quality Guardrails",
      description:
        "We mandate 90+ Pega compliance scores and embed automated regression suites directly into CI/CD pipelines, guaranteeing flawless production releases.",
    },
    {
      icon: Zap,
      title: "Accelerated Delivery Velocity",
      description:
        "Reusable domain rule sets, infrastructure-as-code blueprints, and disciplined Agile governance cut multi-month rollout timelines into predictable sprint milestones.",
    },
    {
      icon: Lock,
      title: "Enterprise Security & Governance",
      description:
        "Full SOC2, HIPAA, and financial compliance adherence with fine-grained access control, automated vulnerability scanning, and isolated cloud perimeters.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/60 via-bg to-bg">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider mb-6 font-bold shadow-sm shadow-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Enterprise IT Delivery & Pega Specialization</span>
            </div>

            {/* Headline with Logo-inspired Red/White Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] mb-6">
              Turn Complex IT Challenges into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-accent drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
                Competitive Advantages.
              </span>
            </h1>

            {/* Positioning copy */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-10 font-sans">
              NForce One is an enterprise B2B IT consultancy. We deliver elite{" "}
              <strong className="text-white font-semibold">Pega platform implementations</strong>, 
              scalable cloud data platforms, automated quality engineering, and bespoke software 
              architectures for forward-thinking organizations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
              <Button href="/contact" size="lg" variant="primary" icon>
                Book a Consultation
              </Button>
              <Button href="/pega" size="lg" variant="secondary">
                Explore Pega Specialization
              </Button>
              <Button href="/services" size="lg" variant="outline">
                All 12 Services
              </Button>
            </div>
          </div>

          {/* Metric Counters Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 rounded-2xl bg-bg-card border border-border backdrop-blur-sm shadow-2xl">
            <Counter
              value={14}
              suffix="+"
              label="Years Enterprise Mastery"
            />
            <Counter
              value={90}
              suffix="+"
              label="Guardrail Score Standard"
            />
            <Counter
              value={100}
              suffix="%"
              label="On-Time Delivery Target"
            />
            <Counter
              value={99.99}
              suffix="%"
              decimals={2}
              label="Infrastructure Reliability"
            />
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP & MARQUEE */}
      <section className="bg-bg-raised py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block font-semibold">
                Technical Practice Standard
              </span>
              <p className="text-sm font-display font-bold text-white mt-0.5">
                Certified Pega Lead System Architects & Enterprise Cloud Practitioners
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-bg border border-border text-xs font-mono text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                Pega Infinity & CDH
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-bg border border-border text-xs font-mono text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                AWS & Azure Cloud
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-bg border border-border text-xs font-mono text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                SOC2 / HIPAA Compliance
              </span>
            </div>
          </div>
        </div>

        {/* Real Ticker */}
        <Marquee items={marqueeItems} speed={30} />
      </section>

      {/* 3. VALUE PILLARS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="WHY NFORCE ONE"
            title="Engineered for Enterprise Reliability & Scalable Execution"
            subtitle="We do not just supply staffing — we take full architectural ownership to build systems that scale cleanly, pass strict audits, and eliminate technical debt."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-xl bg-bg-card border border-border hover:border-accent/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent mb-6">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 text-[10px] font-mono uppercase text-accent font-bold">
                  Standard Operating Principle 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP PEGA PRACTICE CALLOUT */}
      <section className="py-16 md:py-24 border-b border-border bg-gradient-to-r from-bg-raised via-bg-card to-bg-raised relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="accent">FLAGSHIP SPECIALIZATION</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
                Enterprise Pega Architecture, Case Management & Decisioning
              </h2>
              <p className="text-base md:text-lg text-text-muted leading-relaxed">
                As our core specialization, our Pega practice is led by Certified Lead System Architects (CLSA) delivering high-stakes implementations. From Pega Infinity modernization and Customer Decision Hub (CDH) to automated Scenario Testing, we help enterprises maximize ROI on their Pega investment.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-white">
                <div className="p-3 rounded bg-bg border border-border">
                  <span className="text-accent block text-sm font-bold font-display">CLSA</span>
                  Lead Architect Led
                </div>
                <div className="p-3 rounded bg-bg border border-border">
                  <span className="text-accent block text-sm font-bold font-display">CDH / 1:1</span>
                  Real-Time AI Decisioning
                </div>
                <div className="p-3 rounded bg-bg border border-border">
                  <span className="text-accent block text-sm font-bold font-display">Pega Cloud</span>
                  Zero-Downtime Migration
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button href="/pega" size="md" variant="primary" icon>
                  Explore Pega Flagship Hub
                </Button>
                <Button href="/services/pega-development" size="md" variant="outline">
                  Pega Development Details
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-bg border border-border shadow-2xl space-y-4 border-l-4 border-l-accent">
              <span className="text-xs font-mono uppercase text-accent tracking-wider block font-bold">
                Pega Quality Guarantee
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                Situational Layer Cake & Automated Guardrail Audits
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Every Pega application we architect strictly adheres to Pega best practices, low-code declarative processing, and automated test coverage via PegaUnit and Deployment Manager.
              </p>
              <div className="p-4 rounded-lg bg-bg-raised border border-border space-y-2 text-xs font-mono">
                <div className="flex justify-between text-white">
                  <span>Guardrail Score Standard</span>
                  <span className="text-accent font-bold">≥ 90 / 100</span>
                </div>
                <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-[94%]" />
                </div>
                <span className="text-text-muted block text-[11px]">
                  Continuous compliance verified on every deployment gate.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALL 12 SERVICES GRID */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <SectionHeader
              eyebrow="OUR SERVICE CAPABILITIES"
              title="Full-Lifecycle IT Consulting & Software Engineering"
              subtitle="Every capability listed resolves to dedicated technical teams and enterprise-grade delivery models."
              className="mb-0 max-w-2xl"
            />
            <Button href="/services" variant="outline" size="sm" icon>
              View Full Services Hub
            </Button>
          </div>

          {/* 12 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES HIGHLIGHTS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <SectionHeader
              eyebrow="PROVEN CLIENT IMPACT"
              title="Enterprise Transformations with Measurable ROI"
              subtitle="Explore how our architecture leadership solves mission-critical problems across complex enterprise environments."
              className="mb-0 max-w-2xl"
            />
            <Button href="/case-studies" variant="outline" size="sm" icon>
              View All Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} caseStudy={study} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SERVED */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="INDUSTRY VERTICALS"
            title="Tailored Solutions for Regulated & High-Volume Sectors"
            subtitle="Deep domain expertise meeting strict compliance, high concurrency, and complex transaction demands."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group p-6 md:p-8 rounded-xl bg-bg-card border border-border hover:border-accent/60 hover:bg-bg-raised transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-accent transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-accent font-semibold">
                  <span>Explore Vertical</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LATEST INSIGHTS & THOUGHT LEADERSHIP */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <SectionHeader
              eyebrow="TECHNICAL INSIGHTS"
              title="Architecture Blueprints & Engineering Notes"
              subtitle="Practical articles from our principal architects and engineering directors on modernizing enterprise stacks."
              className="mb-0 max-w-2xl"
            />
            <Button href="/insights" variant="outline" size="sm" icon>
              All Articles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. GLOBAL CTA BANNER */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-bg to-bg-raised relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="accent" className="mx-auto mb-6">
            LET&apos;S COLLABORATE
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight mb-6">
            Ready to Build Next-Generation Enterprise Systems?
          </h2>
          <p className="text-base md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a technical consultation with an NForce One practice lead to review your system architecture, project timelines, and delivery roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary" icon>
              Book a Consultation
            </Button>
            <Button href="/pega" size="lg" variant="secondary">
              View Pega Hub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
