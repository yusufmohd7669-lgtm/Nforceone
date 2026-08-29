"use client";

import React from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { VerificationStamp } from "@/components/ui/VerificationStamp";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <HeroReveal
              eyebrow="DIRECT PRACTICE TRANSMISSION"
              lines={[
                "Schedule an Architecture Session",
                "with an NForce One",
                "Practice Lead.",
              ]}
              accentWord="Practice Lead."
              accentLineIndex={2}
            />

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-4">
              Connect directly with our senior Lead System Architects (CLSA), cloud data engineers, and quality assurance leads.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & INFO GRID */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Direct Information & Confidentiality */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Card */}
              <div className="p-8 rounded-2xl bg-bg-card border border-border space-y-6">
                <span className="text-xs font-mono uppercase text-accent tracking-wider block font-bold">
                  [DIRECT OFFICE DISPATCH]
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Enterprise Inquiries:
                      </span>
                      <a
                        href="mailto:contact@nforce.one"
                        className="text-base font-semibold text-white hover:text-accent font-mono transition-colors"
                      >
                        contact@nforce.one
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Direct Practice Line:
                      </span>
                      <a
                        href="tel:+19724996667"
                        className="text-base font-semibold text-white hover:text-accent font-mono transition-colors"
                      >
                        +1 (972) 499-6667
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Headquarters:
                      </span>
                      <p className="text-sm text-white/90">
                        Dallas-Fort Worth Metroplex, Texas, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Guaranteed SLA Response:
                      </span>
                      <p className="text-sm font-semibold text-accent font-mono">
                        Within 1 Business Day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Assurance Card with Verification Stamp */}
              <div className="p-8 rounded-2xl bg-bg-card border border-border space-y-4">
                <VerificationStamp label="MUTUAL NDA ASSURANCE" />
                <h3 className="text-lg font-bold font-display text-white">
                  Enterprise Confidentiality Protocol
                </h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  All shared architecture documents, technical specifications, and project requirements are protected under mutual NDA standards. We never disclose client identities or architecture details without explicit consent.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>SOC2 & HIPAA compliant communication channel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
