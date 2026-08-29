import React from "react";
import Link from "next/link";
import { industries } from "@/content/industries";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Industry Verticals & Domain Solutions | NForce One",
  description:
    "Explore tailored IT solutions for Insurance, Banking & Financial Services, Healthcare & Life Sciences, and Retail & eCommerce.",
};

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              INDUSTRY DOMAIN EXPERTISE
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              Domain-Specific Solutions for Regulated & High-Volume Sectors.
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              Every industry carries unique regulatory constraints, transactional volume requirements, and security mandates. We tailor our Pega, Data, and DevOps engineering to your domain&apos;s exact realities.
            </p>

            <Button href="/contact" size="md" variant="primary" icon>
              Book an Industry Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="p-8 md:p-10 rounded-2xl bg-bg-card border border-border hover:border-accent/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase text-accent">
                      Vertical Solution
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-display text-text mb-3">
                    {ind.name}
                  </h3>

                  <p className="text-sm font-semibold text-accent mb-3 font-mono">
                    {ind.headline}
                  </p>

                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-bg-raised border border-border mb-6">
                    {ind.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-lg md:text-xl font-bold font-display text-accent">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-text-muted mt-0.5 truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-wider text-accent border-t border-border pt-4 hover:underline"
                >
                  <span>Explore {ind.name} Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            INDUSTRY ADVISORY
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Discuss Your Vertical Regulatory & Architecture Needs
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Our domain architects are ready to review your compliance framework, integration landscape, and target delivery milestones.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
