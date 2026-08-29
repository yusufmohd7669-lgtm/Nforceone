import React from "react";
import Link from "next/link";
import { teamMembers } from "@/content/team";
import { TeamCard } from "@/components/cards/TeamCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Target,
  Users2,
  Award,
  ArrowUpRight,
  Code2,
  Building,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "About NForce One | Mission, Leadership & Engineering Culture",
  description:
    "Learn about NForce One's mission to revolutionize enterprise technology through transformative solutions, certified Pega leadership, and disciplined delivery governance.",
};

export default function AboutPage() {
  const companyValues = [
    {
      title: "Architectural Integrity Over Short-Cuts",
      description:
        "We build clean situational layer cakes, enforce strict guardrail compliance (≥ 90), and eliminate technical debt before it reaches production.",
    },
    {
      title: "Predictable & Transparent Delivery",
      description:
        "No black-box consulting. Clients have real-time visibility into sprint burndowns, automated test pass rates, and release risk matrices.",
    },
    {
      title: "Domain Mastery & Continuous Learning",
      description:
        "Our practitioners are certified CLSAs, cloud architects, and data engineers with deep subject-matter expertise across regulated industries.",
    },
    {
      title: "Long-Term Client Partnership",
      description:
        "We measure our success not by hours billed, but by the tangible operational ROI and uptime improvements achieved by our enterprise partners.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO & MISSION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              WHO WE ARE & OUR MISSION
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              Revolutionizing Businesses Through Transformative Technology Solutions.
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              NForce One was founded on a simple premise: enterprise digital transformation fails when software is treated as disposable code. We combine senior architectural leadership with battle-tested delivery frameworks to build enduring, high-performance systems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="md" variant="primary" icon>
                Book a Consultation
              </Button>
              <Button href="/pega" size="md" variant="secondary">
                Our Pega Practice
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR OPERATING PRINCIPLES"
            title="Engineered for Long-Term Enterprise Value"
            subtitle="The core values that guide our architecture reviews, code standards, and client relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-bg-card border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-accent mb-3">
                    PRINCIPLE 0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP & TECHNICAL MASTERY */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="LEADERSHIP & ARCHITECTS"
            title="Meet the Practice Leadership"
            subtitle="Our teams are led by recognized industry architects with extensive hands-on delivery records."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* User Placeholder Note Callout */}
          <div className="mt-12 p-6 rounded-xl bg-bg border border-border text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-1">
              Leadership Bios & Certifications
            </span>
            <p className="text-xs text-text-muted">
              Bios and credentials can be customized and updated in <code className="text-text font-mono">content/team.ts</code> with team photos and specific partner designations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CAREERS & CONSULTATION BANNER */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            JOIN OUR TEAM OR PARTNER WITH US
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Let&apos;s Build Transformative Systems Together
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Whether you are an enterprise seeking an IT delivery partner or an engineer looking to solve complex technology challenges, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary" icon>
              Book a Consultation
            </Button>
            <Button href="/careers" size="lg" variant="secondary">
              View Career Openings
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
