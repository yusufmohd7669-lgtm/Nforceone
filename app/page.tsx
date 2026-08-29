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
import { ServicesShowcase } from "@/components/ui/ServicesShowcase";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { HeroParallax } from "@/components/hero/HeroParallax";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { ScanlineSweep } from "@/components/ui/ScanlineSweep";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { StreakDivider } from "@/components/ui/StreakDivider";
import {
  Layers,
  ShieldCheck,
  Zap,
  Award,
  ArrowUpRight,
  Cpu,
  CheckCircle2,
  Lock,
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
    "Customer Decision Hub (CDH)",
    "Automated Scenario & Unit Testing",
    "Petabyte Lakehouse Engineering",
    "Zero-Downtime Database Migration",
    "Multi-Cloud Kubernetes & GitOps",
    "Enterprise RAG & Autonomous AI",
    "≥90 Guardrail Compliance Standard",
  ];

  const valuePillars = [
    {
      code: "SPEC-01",
      icon: Award,
      title: "CLSA Architecture Mastery",
      description:
        "Led by certified Pega Lead System Architects (CLSA) who design clean situational layer cakes with zero technical debt.",
    },
    {
      code: "SPEC-02",
      icon: ShieldCheck,
      title: "≥90 Guardrail Standard",
      description:
        "Automated regression gates embedded in CI/CD pipelines to guarantee upgrade-ready, audit-compliant production releases.",
    },
    {
      code: "SPEC-03",
      icon: Zap,
      title: "Accelerated Sprint Velocity",
      description:
        "Reusable rule sets, Infrastructure-as-Code blueprints, and disciplined PMO governance cut deployment cycles in half.",
    },
    {
      code: "SPEC-04",
      icon: Lock,
      title: "Enterprise Governance",
      description:
        "Full SOC2 and HIPAA compliance adherence with fine-grained access control and isolated cloud infrastructure.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION (Signature Moment #1) */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised via-bg to-bg overflow-hidden">
        {/* Signature Scanline Sweep (1 of 3) */}
        <ScanlineSweep delay={0.1} />

        {/* Multi-Layer Mouse Parallax & Radial Glow */}
        <HeroParallax />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            {/* Eyebrow badge with radar ping animation */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider mb-6 font-bold shadow-sm shadow-accent/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>[SYS.SPEC] Enterprise IT Architecture & Pega Specialization</span>
            </div>

            {/* Precision 3-Line Masked Headline Reveal with 120ms HUD flicker */}
            <HeroHeadline />

            {/* Tightened, Punchy Subhead */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-10 font-sans">
              NForce One delivers certified <strong className="text-white font-semibold">Pega platform engineering</strong>, 
              scalable cloud data platforms, automated QA testing, and resilient custom software for enterprise leaders.
            </p>

            {/* CTAs with Magnetic Hover Physics & Parallax */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
              <Button href="/contact" size="lg" variant="primary" icon magnetic>
                Book a Consultation
              </Button>
              <Button href="/pega" size="lg" variant="secondary" magnetic>
                Pega Specialization Hub
              </Button>
              <Button href="/services" size="lg" variant="outline" magnetic>
                Browse 12 Services
              </Button>
            </div>
          </div>

          {/* Metric Counters Banner (Signature Moment #3: Mechanical Digit-Roll) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
              label="On-Time Sprint Delivery"
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

      {/* 2. TRUST STRIP & CLEAN SINGLE-PASS MARQUEE */}
      <section className="bg-bg-raised py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted">
              <span className="text-accent font-bold">[CERTIFIED PRACTICE]</span>
              <span>CLSA-Led Pega · AWS & Azure Cloud · SOC2/HIPAA</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-accent font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Pega Infinity &apos;24
              </span>
              <span className="text-text-muted">·</span>
              <span className="text-accent font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Kubernetes GitOps
              </span>
            </div>
          </div>
        </div>

        {/* Clean, slow, hover-pausable single loop marquee */}
        <Marquee items={marqueeItems} speed={35} />
      </section>

      {/* 3. VALUE PILLARS (WHY US) WITH HUD RETICLE CORNERS */}
      <section className="py-20 md:py-24 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="WHY NFORCE ONE"
            title="Architectural Rigor Over Disposable Code"
            subtitle="We take full architectural ownership to build systems that scale cleanly, pass strict compliance audits, and eliminate technical debt."
          />

          <Reveal stagger={0.08} y={22}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="relative p-6 md:p-7 rounded-xl bg-bg-card border border-border hover:border-accent transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-black/60"
                >
                  {/* HUD Corner Reticle Brackets (Signature Moment #5) */}
                  <span className="hud-corner-tl" />
                  <span className="hud-corner-tr" />
                  <span className="hud-corner-bl" />
                  <span className="hud-corner-br" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                        <pillar.icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-text-muted/60 group-hover:text-accent font-semibold">
                        {pillar.code}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CONSOLIDATED FLAGSHIP PEGA PRACTICE (Signature Scanline Sweep 2 of 3) */}
      <section className="py-16 md:py-20 border-b border-border bg-gradient-to-r from-bg-raised via-bg-card to-bg-raised relative overflow-hidden">
        {/* Signature Scanline Sweep (2 of 3) */}
        <ScanlineSweep />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal y={22}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">FLAGSHIP SPECIALIZATION</Badge>
                  {/* Folded Quality Fact directly as a prominent badge */}
                  <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-accent/20 text-white border border-accent/40 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    Mandated Guardrail Score: ≥90 / 100
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
                  Enterprise Pega Architecture & Case Modernization
                </h2>

                <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-3xl">
                  Led by certified Pega Lead System Architects (CLSA), our practice specializes in Pega Infinity modernization, Customer Decision Hub (CDH), and automated Scenario Testing. We enforce clean Situational Layer Cake separation so local rule sets never pollute core enterprise assets.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/pega" size="md" variant="primary" icon magnetic>
                    Explore Pega Flagship Hub
                  </Button>
                  <Button href="/services/pega-development" size="md" variant="outline" magnetic>
                    Pega Development Specs
                  </Button>
                  <Button href="/services/pega-testing" size="md" variant="outline" magnetic>
                    Pega QA Testing
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-xl bg-bg border border-border shadow-2xl relative group">
                <span className="hud-corner-tl" />
                <span className="hud-corner-tr" />
                <span className="hud-corner-bl" />
                <span className="hud-corner-br" />

                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono uppercase text-accent font-bold">
                    [SYS.ARCH.PEGA]
                  </span>
                  <span className="text-[11px] font-mono uppercase text-text-muted/70">
                    Situational Layer Cake
                  </span>
                </div>

                <ArchitectureDiagram />

                <p className="mt-5 pt-4 border-t border-border text-xs font-mono text-text-muted leading-relaxed">
                  Local rule sets stay in the upper layers. Reusable enterprise assets
                  stay at the base. That separation is what keeps an implementation
                  upgrade-ready.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. ALL 12 SERVICES — pinned horizontal rail on desktop, indexed table on mobile */}
      <section className="py-20 md:py-24 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <SectionHeader
              eyebrow="CAPABILITY CATALOG"
              title="All 12 Core Technical Services"
              subtitle="Indexed technical disciplines backed by dedicated practice leads and measurable SLAs."
              className="mb-0 max-w-2xl"
            />
            <Button href="/services" variant="outline" size="sm" icon magnetic>
              Full Directory View
            </Button>
          </div>
        </div>

        <ServicesShowcase />
      </section>

      {/* 6. CASE STUDIES HIGHLIGHTS */}
      <section className="py-20 md:py-24 border-b border-border bg-bg-raised/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <SectionHeader
              eyebrow="PROVEN OUTCOMES"
              title="Enterprise Case Studies & Architecture Notes"
              subtitle="Measurable ROI and performance outcomes delivered across regulated industries."
              className="mb-0 max-w-2xl"
            />
            <Button href="/case-studies" variant="outline" size="sm" icon magnetic>
              View All Studies
            </Button>
          </div>

          <Reveal stagger={0.08} y={22}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.slice(0, 3).map((study) => (
                <CaseStudyCard key={study.slug} caseStudy={study} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StreakDivider className="py-14" />
      </div>
      {/* 7. INDUSTRIES SERVED */}
      <section className="py-20 md:py-24 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="INDUSTRY VERTICALS"
            title="Tailored Solutions for Regulated Domains"
            subtitle="Deep domain architecture meeting strict compliance, high concurrency, and high-volume transaction requirements."
          />

          <Reveal stagger={0.06} y={20}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group p-6 rounded-xl bg-bg-card border border-border hover:border-accent hover:bg-bg-raised transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-black/60 relative"
                >
                  {/* HUD Corner Reticle Brackets */}
                  <span className="hud-corner-tl" />
                  <span className="hud-corner-tr" />
                  <span className="hud-corner-bl" />
                  <span className="hud-corner-br" />

                  <div>
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-accent transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed line-clamp-3">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-accent font-semibold">
                    <span>Explore Vertical</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. LATEST INSIGHTS */}
      <section className="py-20 md:py-24 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <SectionHeader
              eyebrow="TECHNICAL INSIGHTS"
              title="Engineering Notes & Architecture Blueprints"
              subtitle="Practical articles authored by our principal architects on enterprise modernization."
              className="mb-0 max-w-2xl"
            />
            <Button href="/insights" variant="outline" size="sm" icon magnetic>
              All Articles
            </Button>
          </div>

          <Reveal stagger={0.08} y={22}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.slice(0, 3).map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StreakDivider className="py-14" />
      </div>
      {/* 9. GLOBAL CTA BANNER (Signature Scanline Sweep 3 of 3) */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-bg to-bg-raised relative overflow-hidden">
        {/* Signature Scanline Sweep (3 of 3) */}
        <ScanlineSweep />

        {/* Pulsing Breathing Radial Glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(229,9,20,0.15)_0%,transparent_70%)] animate-pulse blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal y={22}>
            <Badge variant="accent" className="mx-auto mb-6">
              LET&apos;S COLLABORATE
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight mb-5">
              Ready to Build Next-Generation Enterprise Systems?
            </h2>
            <p className="text-sm md:text-lg text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a technical consultation with an NForce One practice lead to review your system architecture, project timelines, and delivery roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary" icon magnetic>
                Book a Consultation
              </Button>
              <Button href="/pega" size="lg" variant="secondary" magnetic>
                View Pega Hub
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
