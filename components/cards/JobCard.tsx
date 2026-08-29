import React from "react";
import { Job } from "@/lib/schema";
import { MapPin, Briefcase, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: Job;
  onApplyClick?: (job: Job) => void;
  className?: string;
}

export function JobCard({ job, onApplyClick, className }: JobCardProps) {
  return (
    <div
      className={cn(
        "p-6 md:p-8 rounded-xl bg-bg-card border border-border flex flex-col justify-between hover:border-accent/50 transition-all duration-300",
        className
      )}
    >
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
            {job.department}
          </span>
          <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-bg-raised text-text-muted border border-border">
            {job.type}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold font-display text-text">{job.title}</h3>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted mt-3">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-accent" />
            <span>{job.experience}</span>
          </div>
        </div>

        <p className="text-sm text-text-muted mt-4 leading-relaxed">{job.summary}</p>

        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-xs font-mono uppercase tracking-wider text-text mb-2">
            Key Responsibilities:
          </h4>
          <ul className="space-y-1.5">
            {job.responsibilities.slice(0, 3).map((resp, idx) => (
              <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/80 mt-1.5 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs font-mono text-text-muted">Actively Hiring</span>
        <button
          type="button"
          onClick={() => onApplyClick?.(job)}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-accent-text bg-accent hover:bg-accent-hover px-4 py-2 rounded-md transition-colors"
        >
          <span>Apply For Role</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
