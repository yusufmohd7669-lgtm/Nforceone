import React from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award } from "lucide-react";

export const metadata = {
  title: "Contact NForce One | Technical Consultation & Inquiry",
  description:
    "Schedule a technical consultation with NForce One practice leads for Pega development, QA testing, big data engineering, or custom software architecture.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              GET IN TOUCH
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              Let&apos;s Build Transformative Technology Together.
            </h1>

            {/* Exact required prompt copy */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
              At NForce One, we&apos;re dedicated to providing comprehensive, transformative technology solutions to clients across industries — from Pega development and testing to data analytics and DevOps. We&apos;re not just a service provider; we&apos;re a partner in your journey toward growth, efficiency, and digital transformation. Tell us about your project and let&apos;s talk about how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & DIRECT CONTACT SECTION */}
      <section className="py-16 md:py-24 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Form */}
            <div className="lg:col-span-7 bg-bg-card p-6 md:p-10 rounded-2xl border border-border">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-1">
                  Direct Inbound
                </span>
                <h2 className="text-2xl font-bold font-display text-text">
                  Request a Technical Consultation
                </h2>
                <p className="text-xs text-text-muted mt-1">
                  Fill in your project requirements below. A practice director will follow up within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Col: Corporate Information & Trust */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Card */}
              <div className="p-8 rounded-2xl bg-bg-card border border-border space-y-6">
                <h3 className="text-xl font-bold font-display text-text">
                  Direct Communications
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Telephone
                      </span>
                      <a
                        href="tel:+19724996667"
                        className="text-base font-semibold text-text hover:text-accent transition-colors"
                      >
                        +1 (972) 499-6667
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Corporate Inquiries
                      </span>
                      <a
                        href="mailto:contact@nforce.one"
                        className="text-base font-semibold text-text hover:text-accent transition-colors"
                      >
                        contact@nforce.one
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Corporate Location
                      </span>
                      <p className="text-base font-semibold text-text">
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
                        Response Guarantee
                      </span>
                      <p className="text-sm text-text-muted">
                        Consultation requests triaged within 1 business day by an architect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Assurance Card */}
              <div className="p-8 rounded-2xl bg-bg-raised border border-border space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Confidentiality Assurance
                  </span>
                </div>
                <h4 className="text-base font-bold font-display text-text">
                  Standard Non-Disclosure & Data Protection
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  All consultations, architecture discussions, and initial code reviews are protected by mutual enterprise NDAs. We never share client specifications or project data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
