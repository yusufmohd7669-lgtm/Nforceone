import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
  Building2,
  Layers,
} from "lucide-react";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.name} IT Solutions | NForce One`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  // Find matching services
  const relevantServiceObjects = services.filter((s) =>
    industry.relevantServices.includes(s.slug)
  );

  // Find matching case studies
  const relevantCaseStudies = caseStudies.filter((cs) =>
    cs.industry.toLowerCase().includes(industry.name.toLowerCase().slice(0, 5))
  );

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Industries</span>
          </Link>

          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              INDUSTRY DOMAIN SOLUTION
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-4">
              {industry.name} IT Transformation
            </h1>

            <p className="text-lg md:text-xl font-display font-semibold text-accent mb-6">
              {industry.headline}
            </p>

            <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-3xl mb-8">
              {industry.description}
            </p>

            <Button href="/contact" size="lg" variant="primary" icon>
              Consult with an {industry.name} Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* 2. METRICS STRIP */}
      <section className="py-8 bg-bg-raised/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-bg border border-border">
                <div className="text-3xl md:text-4xl font-bold font-display text-accent mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-mono uppercase text-text-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHALLENGES & TAILORED SOLUTIONS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="DOMAIN LANDSCAPE"
            title="Industry Challenges & Tailored Solutions"
            subtitle="How we tackle specific transactional, architectural, and regulatory hurdles."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-text flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-red-400" />
                <span>Sector Obstacles</span>
              </h3>
              <div className="space-y-4">
                {industry.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-bg-card border border-border/80"
                  >
                    <h4 className="text-base font-bold font-display text-text mb-2">
                      {c.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-text flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span>NForce One Architecture</span>
              </h3>
              <div className="space-y-4">
                {industry.solutions.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-bg-raised border border-border"
                  >
                    <h4 className="text-base font-bold font-display text-text mb-2">
                      {s.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELEVANT SERVICES */}
      <section className="py-20 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CROSS-DISCIPLINE DELIVERY"
            title={`Core Services Deployed in ${industry.name}`}
            subtitle="The specialized capabilities we bring to bear for this vertical."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relevantServiceObjects.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group p-6 rounded-xl bg-bg-card border border-border hover:border-accent/50 hover:bg-bg-raised transition-all"
              >
                <span className="text-[10px] font-mono uppercase text-accent">
                  {svc.eyebrow}
                </span>
                <h4 className="text-lg font-bold font-display text-text group-hover:text-accent transition-colors mt-1">
                  {svc.title}
                </h4>
                <p className="text-xs text-text-muted mt-2 line-clamp-2">
                  {svc.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY TEASER */}
      {relevantCaseStudies.length > 0 && (
        <section className="py-20 border-b border-border bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="PROVEN SUCCESS"
              title="Vertical Case Study"
              subtitle="Measurable outcomes achieved for leaders in this sector."
            />
            <div className="max-w-3xl">
              <CaseStudyCard caseStudy={relevantCaseStudies[0]} />
            </div>
          </div>
        </section>
      )}

      {/* 6. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            START THE CONVERSATION
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Modernize Your {industry.name} Operations
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Schedule a confidential technical review with an NForce One domain architect.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
