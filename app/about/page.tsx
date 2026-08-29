"use client";

import React, { useRef } from "react";
import { teamMembers } from "@/content/team";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { DigitRoll } from "@/components/ui/DigitRoll";
import { useHudBracketHover } from "@/hooks/useHudBracketHover";
import { Award, ShieldCheck, Zap, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  const principles = [
    {
      num: 1,
      title: "Architecture Over Disposable Code",
      description:
        "We prioritize long-term system maintainability, high guardrail scores, and strict layer cake discipline above short-term hacks.",
    },
    {
      num: 2,
      title: "Outcome-Driven Delivery",
      description:
        "Every engagement is anchored to quantifiable business outcomes: reduced cycle times, touchless throughput, and sub-second latencies.",
    },
    {
      num: 3,
      title: "Enterprise Governance & Security",
      description:
        "Compliance with SOC2, HIPAA, PCI-DSS, and FedRAMP standards is designed into the core system architecture from day one.",
    },
    {
      num: 4,
      title: "Transparent Collaboration",
      description:
        "We operate as an integrated engineering partner, ensuring knowledge transfer and continuous team upskilling on every project.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-bg text-text">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <HeroReveal
              eyebrow="ABOUT NFORCE ONE"
              lines={[
                "Revolutionizing Businesses Through",
                "Transformative Technology",
                "Solutions.",
              ]}
              accentWord="Solutions."
              accentLineIndex={2}
            />

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
              Founded by veteran enterprise architects, NForce One was built to bridge the gap between high-level IT strategy and precision engineering execution. We help Fortune 500 enterprises and hyper-growth scaleups modernize mission-critical systems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="md" variant="primary" icon magnetic>
                Book a Consultation
              </Button>
              <Button href="/careers" size="md" variant="outline" magnetic>
                View Career Openings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERATING PRINCIPLES */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CORE PHILOSOPHY"
            title="Our Operating Principles"
            subtitle="The foundational engineering values that guide every architecture and delivery decision we make."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div
                key={p.num}
                className="p-6 md:p-8 rounded-xl bg-bg-card border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl md:text-4xl font-bold font-mono text-accent mb-4">
                    <DigitRoll value={p.num} prefix="0" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-text-muted/60 mt-6 pt-3 border-t border-border uppercase">
                  [SYS.PRIN.0{p.num}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP & PRACTICE DIRECTORS (Designed Monogram HUD Tiles - No Fake AI Faces) */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="PRACTICE LEADERSHIP"
            title="Architectural Leadership & Credentials"
            subtitle="Senior practitioners who combine hands-on technical mastery with deep enterprise domain experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <LeadershipCard key={member.name} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            START A CONVERSATION
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Partner with Dedicated Enterprise Architects
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Learn how our specialized practice teams can accelerate your technical delivery roadmap with guaranteed SLA governance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary" icon magnetic>
              Book a Consultation
            </Button>
            <Button href="/careers" size="lg" variant="outline" magnetic>
              Explore Open Roles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function LeadershipCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative p-6 md:p-8 rounded-xl bg-bg-card border border-border flex flex-col justify-between group shadow-lg">
      <div>
        {/* Designed Monogram HUD Tile Header (per AI creative brief) */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-white font-mono font-bold text-lg relative select-none">
            <span className="text-accent">{initials}</span>
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-white">{member.name}</h3>
            <p className="text-xs font-mono text-accent font-semibold">{member.role}</p>
          </div>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mt-2">{member.bio}</p>

        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-[11px] font-mono uppercase text-text-muted/70 block mb-1">
            Core Practice Focus:
          </span>
          <p className="text-xs font-mono text-white/90">{member.specialization}</p>
        </div>
      </div>

      {/* Personnel File Dossier Credentials */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-1.5 mb-2.5">
          <Award className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-mono uppercase text-text-muted tracking-wider font-bold">
            Verified Clearance & Certifications
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {member.certifications.map((cert, cIdx) => (
            <span
              key={cIdx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-raised border border-border text-white/90"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
