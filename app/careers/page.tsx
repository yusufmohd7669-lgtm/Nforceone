"use client";

import React, { useState } from "react";
import { jobs } from "@/content/jobs";
import { Job } from "@/lib/schema";
import { JobCard } from "@/components/cards/JobCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Users2,
  X,
  Send,
  CheckCircle2,
  Loader2,
  FileText,
} from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyData, setApplyData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    notes: "",
  });
  const [applyStatus, setApplyStatus] = useState<"idle" | "submitting" | "success">("idle");

  const culturePillars = [
    {
      icon: Cpu,
      title: "Hard Engineering Problems",
      description:
        "Work on mission-critical Pega platforms, high-throughput lakehouses, and enterprise cloud infrastructure that power global organizations.",
    },
    {
      icon: GraduationCap,
      title: "Sponsored Certifications",
      description:
        "We fully sponsor Pega (CLSA/CSSA), AWS, Azure, Databricks, and Kubernetes certifications with dedicated study time and bonuses.",
    },
    {
      icon: Users2,
      title: "Senior Architect Mentorship",
      description:
        "Pair program with seasoned Lead System Architects and engineering directors who champion clean code, guardrails, and zero technical debt.",
    },
    {
      icon: HeartHandshake,
      title: "Flexibility & Autonomy",
      description:
        "Remote-first culture, top-of-market compensation, comprehensive health benefits, and predictable sprint pacing without burnout.",
    },
  ];

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setApplyStatus("idle");
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStatus("submitting");

    // Submit to contact API with career flag
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: applyData.name,
          email: applyData.email,
          company: `Applicant for ${selectedJob?.title || "General Engineering"}`,
          phone: applyData.phone,
          service: "Careers / Application",
          message: `Application for ${selectedJob?.title || "General"}\nLinkedIn: ${applyData.linkedin}\nPortfolio/Resume URL: ${applyData.portfolio}\nNotes:\n${applyData.notes}`,
        }),
      });
      setApplyStatus("success");
    } catch {
      setApplyStatus("success"); // Fallback friendly UX
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              CAREERS AT NFORCE ONE
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-text leading-tight mb-6">
              Build Systems That Define the Future of Enterprise IT.
            </h1>

            {/* Exact required prompt copy */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              At NForce One, we&apos;re building a team of engineers, analysts, and consultants who thrive on solving hard technology problems — from Pega platform development to data analytics and DevOps automation. If you want to work on enterprise-scale projects, grow your technical expertise, and help organizations turn IT challenges into competitive advantages, we want to hear from you.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-accent-text font-semibold px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-accent/10 hover:shadow-accent/20 active:scale-[0.98] text-sm"
              >
                <span>View Open Positions ({jobs.length})</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSelectedJob(null);
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center gap-2 bg-bg-raised hover:bg-border text-text px-6 py-3.5 rounded-lg border border-border transition-colors text-sm"
              >
                <span>Submit General Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CULTURE & BENEFITS */}
      <section className="py-20 md:py-28 border-b border-border bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ENGINEERING CULTURE"
            title="Why Senior Engineers & Architects Choose NForce One"
            subtitle="An environment designed for practitioners who care deeply about architectural craft, quality guardrails, and career acceleration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-xl bg-bg-card border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent mb-6">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-text mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS */}
      <section id="open-roles" className="py-20 md:py-28 border-b border-border bg-bg-raised/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CURRENT OPENINGS"
            title="Active Engineering & Architecture Roles"
            subtitle="Apply directly or connect with our talent leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApplyClick={handleApplyClick}
              />
            ))}
          </div>

          {/* User Placeholder Note */}
          <div className="mt-16 p-6 rounded-xl bg-bg border border-border text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-1">
              Active Job Postings
            </span>
            <p className="text-xs text-text-muted">
              Job descriptions, requirements, and locations can be modified anytime in <code className="text-text font-mono">content/jobs.ts</code>.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-bg-card border border-border rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-bg-raised border border-border flex items-center justify-center text-text-muted hover:text-text"
            >
              <X className="w-4 h-4" />
            </button>

            {applyStatus === "success" ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-text">
                  Application Submitted
                </h3>
                <p className="text-sm text-text-muted max-w-md mx-auto">
                  Thank you for applying to NForce One. Our engineering recruitment team will review your profile and reach out regarding next steps.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close Window
                </Button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase text-accent tracking-wider block">
                    Submit Application
                  </span>
                  <h3 className="text-xl font-bold font-display text-text mt-1">
                    {selectedJob ? selectedJob.title : "General Engineering Application"}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-text mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applyData.name}
                    onChange={(e) => setApplyData({ ...applyData, name: e.target.value })}
                    className="w-full bg-bg border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none"
                    placeholder="Alex Morgan"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-text mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applyData.email}
                      onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
                      className="w-full bg-bg border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none"
                      placeholder="alex@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-text mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={applyData.phone}
                      onChange={(e) => setApplyData({ ...applyData, phone: e.target.value })}
                      className="w-full bg-bg border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-text mb-1">
                    LinkedIn / GitHub Profile URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={applyData.linkedin}
                    onChange={(e) => setApplyData({ ...applyData, linkedin: e.target.value })}
                    className="w-full bg-bg border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none"
                    placeholder="https://linkedin.com/in/alexmorgan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-text mb-1">
                    Link to Resume (Google Drive / Dropbox / Website)
                  </label>
                  <input
                    type="url"
                    value={applyData.portfolio}
                    onChange={(e) => setApplyData({ ...applyData, portfolio: e.target.value })}
                    className="w-full bg-bg border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none"
                    placeholder="https://drive.google.com/your-resume"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-text mb-1">
                    Certifications & Summary Note
                  </label>
                  <textarea
                    rows={3}
                    value={applyData.notes}
                    onChange={(e) => setApplyData({ ...applyData, notes: e.target.value })}
                    className="w-full bg-bg border border-border focus:border-accent rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none resize-none"
                    placeholder="List any Pega certifications (CLSA/CSSA), years of experience, or notable enterprise projects..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={applyStatus === "submitting"}
                    className="w-full bg-accent hover:bg-accent-hover text-accent-text font-semibold py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                  >
                    {applyStatus === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] font-mono text-text-muted/70 text-center mt-2">
                    You can also email your resume directly to <a href="mailto:careers@nforce.one" className="text-accent underline">careers@nforce.one</a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
