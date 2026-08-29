import React from "react";
import Link from "next/link";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Enterprise IT Services & Capabilities | NForce One",
  description:
    "Explore NForce One's full spectrum of 12 core technical capabilities across Pega implementation, QA test engineering, Big Data lakehouses, DevOps, AI, and custom software.",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              CORE PRACTICE CAPABILITIES
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              Enterprise Technology Solutions Engineered for Scale.
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              From flagship Pega implementations and real-time data lakehouses to continuous test automation and custom software architecture, we deliver robust digital foundations for global organizations.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="md" variant="primary" icon>
                Book a Consultation
              </Button>
              <Button href="/pega" size="md" variant="secondary">
                View Pega Specialization
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Banner */}
      <section className="py-8 bg-bg-raised border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl bg-bg border border-accent/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase bg-accent text-accent-text font-bold px-2 py-0.5 rounded">
                  Flagship
                </span>
                <h3 className="text-lg font-bold font-display text-text">
                  Dedicated Pega Architecture & Implementation Practice
                </h3>
              </div>
              <p className="text-xs text-text-muted">
                Looking specifically for certified Pega Lead System Architect (CLSA) delivery, Case Management, or CDH?
              </p>
            </div>
            <Link
              href="/pega"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent border border-accent/40 hover:bg-accent/10 px-4 py-2.5 rounded-lg transition-colors shrink-0"
            >
              <span>Explore Pega Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* All 12 Services Grid */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="SERVICE PORTFOLIO"
            title="All 12 Core Technical Capabilities"
            subtitle="Every service line is backed by dedicated technical architects, established delivery frameworks, and measurable business SLAs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            NEED A CUSTOM ENGAGEMENT MODEL?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Let&apos;s Design Your Target Architecture
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Tell us about your technical landscape, upcoming modernization initiatives, or quality engineering objectives.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
