import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { IconRenderer } from "@/components/ui/IconRenderer";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Cpu,
  Layers,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | NForce One`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | NForce One Enterprise IT Solutions`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find other services for related navigation
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  // Find relevant case studies
  const relevantCaseStudies = caseStudies.filter(
    (cs) =>
      cs.serviceCategory.toLowerCase().includes(service.title.toLowerCase()) ||
      service.slug.includes("pega") && cs.serviceCategory.includes("Pega")
  );

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="accent">{service.eyebrow}</Badge>
              {service.badge && (
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-accent/20 text-accent border border-accent/30">
                  {service.badge}
                </span>
              )}
            </div>

            {/* Unique Dedicated H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-text leading-[1.12] mb-6">
              {service.h1}
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-10">
              {service.heroParagraph}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" size="lg" variant="primary" icon>
                Book a Consultation
              </Button>
              {service.slug.startsWith("pega") && (
                <Button href="/pega" size="lg" variant="secondary">
                  View Flagship Pega Hub
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS OUTCOMES / METRICS */}
      <section className="py-12 bg-bg-raised/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.businessOutcomes.map((outcome, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-bg border border-border">
                <div className="text-3xl md:text-4xl font-bold font-display text-accent mb-1">
                  {outcome.metric}
                </div>
                <div className="text-sm font-semibold text-text mb-1">{outcome.label}</div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES & SUBSECTIONS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CAPABILITY BREAKDOWN"
            title={`What We Deliver in ${service.title}`}
            subtitle="Modular engineering disciplines executed by senior specialists with deep domain expertise."
          />

          <div className="space-y-3">
            {service.capabilities.map((cap, idx) => (
              <FeatureRow
                key={idx}
                number={String(idx + 1).padStart(2, "0")}
                title={cap.title}
                description={cap.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES & TECHNOLOGIES */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div className="p-8 rounded-2xl bg-bg-card border border-border">
              <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-3">
                Engagement Outcomes
              </span>
              <h3 className="text-2xl font-bold font-display text-text mb-6">
                Standard Engagement Deliverables
              </h3>
              <ul className="space-y-3.5">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="p-8 rounded-2xl bg-bg-card border border-border">
              <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-3">
                Tech Stack & Tooling
              </span>
              <h3 className="text-2xl font-bold font-display text-text mb-6">
                Core Platforms & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3.5 py-2 rounded-lg bg-bg-raised border border-border text-text font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-xs font-mono uppercase text-text-muted block mb-2">
                  Need a custom tech evaluation?
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  We adapt to your enterprise standard tools, cloud providers, and on-premise infrastructure constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Technical & Engagement FAQs"
            align="center"
          />

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-bg-card border border-border"
              >
                <h4 className="text-lg font-bold font-display text-text flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-sm text-text-muted mt-3 pl-8 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELEVANT CASE STUDY (IF APPLICABLE) */}
      {relevantCaseStudies.length > 0 && (
        <section className="py-20 border-b border-border bg-bg-raised/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="CASE STUDY"
              title="Related Enterprise Work"
              subtitle="Explore how this capability drives quantifiable business results."
            />
            <div className="max-w-3xl">
              <CaseStudyCard caseStudy={relevantCaseStudies[0]} />
            </div>
          </div>
        </section>
      )}

      {/* 7. RELATED SERVICES */}
      <section className="py-20 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold font-display text-text">
              Explore Adjacent Capabilities
            </h3>
            <Link
              href="/services"
              className="text-xs font-mono uppercase text-accent hover:underline flex items-center gap-1"
            >
              <span>All 12 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group p-6 rounded-xl bg-bg-card border border-border hover:border-accent/40 hover:bg-bg-raised transition-all"
              >
                <span className="text-[10px] font-mono uppercase text-accent">
                  {other.eyebrow}
                </span>
                <h4 className="text-lg font-bold font-display text-text group-hover:text-accent transition-colors mt-1">
                  {other.title}
                </h4>
                <p className="text-xs text-text-muted mt-2 line-clamp-2">
                  {other.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            CONSULT WITH OUR PRACTICE LEAD
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Ready to Implement {service.title}?
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Speak with an NForce One practice lead to review scope, estimate sprint velocity, and outline target milestones.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
