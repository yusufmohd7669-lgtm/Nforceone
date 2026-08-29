"use client";

import React, { useState, useRef } from "react";
import { jobs } from "@/content/jobs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { DigitRoll } from "@/components/ui/DigitRoll";
import { useHudBracketHover } from "@/hooks/useHudBracketHover";
import {
  MapPin,
  Clock,
  DollarSign,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  const perks = [
    {
      title: "Enterprise Architecture Mastery",
      description:
        "Work on high-stakes, mission-critical systems with direct mentorship from certified Lead System Architects (CLSA).",
    },
    {
      title: "Full Certification Sponsorship",
      description:
        "100% financial coverage and study-time allocation for Pega (CLSA, CSSA), AWS, Azure, GCP, and Kubernetes certifications.",
    },
    {
      title: "High-Performance Compensation",
      description:
        "Tier-one market salaries, bi-annual performance bonuses, 401(k) matching, and comprehensive healthcare coverage.",
    },
    {
      title: "Remote-First Flexibility",
      description:
        "Work from anywhere in the US or Canada with dedicated home office allowances and flexible working hours.",
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
              eyebrow="CAREERS & PRACTICE TALENT"
              lines={[
                "Build Mission-Critical Systems",
                "with the Industry's Top",
                "Engineers.",
              ]}
              accentWord="Engineers."
              accentLineIndex={2}
            />

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
              Join an elite engineering practice specializing in Pega platform architecture, real-time data lakehouses, and high-concurrency cloud infrastructure.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-bg-card border border-border">
              <span className="text-xs font-mono uppercase text-text-muted">
                Active Open Roles:
              </span>
              <span className="text-sm font-mono font-bold text-accent">
                <DigitRoll value={jobs.length} /> Position{jobs.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPEN ROLES */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OPEN POSITIONS"
            title="Current Practice Openings"
            subtitle="Explore our active engineering and consulting roles. Direct client impact with zero bureaucratic red tape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={() => setSelectedJob(job)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING CULTURE */}
      <section className="py-20 md:py-28 border-b border-border bg-bg-raised/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="WHY WORK WITH US"
            title="An Engineering-First Culture"
            subtitle="We invest heavily in our people, providing continuous learning, top-tier compensation, and high-trust autonomy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-xl bg-bg-card border border-border flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-accent font-bold block mb-3">
                    [PERK.0{idx + 1}]
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 rounded-2xl bg-bg-card border border-border shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-bg-raised border border-border flex items-center justify-center text-text-muted hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono uppercase text-accent font-bold">
              [APPLICATION DOSSIER: {selectedJob.id.toUpperCase()}]
            </span>
            <h3 className="text-2xl font-bold font-display text-white mt-1">
              Apply for {selectedJob.title}
            </h3>
            <p className="text-xs font-mono text-text-muted mt-1">
              {selectedJob.department} · {selectedJob.location} · {selectedJob.experience}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your application! Our talent team will review your profile and reach out shortly.");
                setSelectedJob(null);
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-xs font-mono uppercase text-text-muted mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-muted mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-muted mb-1">
                  LinkedIn Profile / Portfolio *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-muted mb-1">
                  Relevant Certifications / Highlights
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention Pega CLSA/CSSA, AWS, or architecture achievements..."
                  className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedJob(null)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md" icon magnetic>
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function JobCard({
  job,
  onApply,
}: {
  job: (typeof jobs)[0];
  onApply: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  useHudBracketHover(cardRef);

  return (
    <div
      ref={cardRef}
      className="relative p-6 md:p-8 rounded-xl bg-bg-card border border-border flex flex-col justify-between group hover:bg-bg-raised shadow-lg transition-all"
    >
      <span data-bracket="tl" className="absolute -top-px -left-px h-3 w-3 border-t-2 border-l-2 border-accent" />
      <span data-bracket="tr" className="absolute -top-px -right-px h-3 w-3 border-t-2 border-r-2 border-accent" />
      <span data-bracket="bl" className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-accent" />
      <span data-bracket="br" className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-accent" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono uppercase text-accent font-bold">
            [{job.department}]
          </span>
          {/* Actively Hiring ambient breathing status dot */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-[10px] font-mono text-accent font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Actively Hiring</span>
          </div>
        </div>

        <h3 className="text-xl font-bold font-display text-white group-hover:text-accent transition-colors">
          {job.title}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted mt-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>{job.experience}</span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
          {job.summary}
        </p>

        {/* Role Spec Bracket Markers */}
        <div className="mt-5 pt-4 border-t border-border space-y-2">
          <span className="text-[10px] font-mono uppercase text-text-muted tracking-wider block font-bold">
            Key Responsibilities:
          </span>
          {job.responsibilities.slice(0, 3).map((resp, rIdx) => (
            <div key={rIdx} className="flex items-start gap-2 text-xs font-mono text-white/90">
              <span className="text-accent font-bold shrink-0">[&gt;]</span>
              <span className="leading-snug">{resp}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs font-mono text-text-muted">{job.type}</span>
        <button
          type="button"
          onClick={onApply}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-accent font-bold hover:underline"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
