"use client";

import React, { useRef } from "react";
import { TeamMember } from "@/lib/schema";
import { Award, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { use3DTilt } from "@/lib/animations/hooks";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  use3DTilt(cardRef, 4);

  return (
    <div
      ref={cardRef}
      className={cn(
        "flex flex-col justify-between p-6 md:p-8 rounded-xl bg-bg-card border border-border hover:border-accent/40 transition-all duration-300 relative group",
        className
      )}
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-bg-raised border border-border flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
            <UserCheck className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-white">{member.name}</h3>
            <p className="text-xs font-mono text-accent font-semibold">{member.role}</p>
          </div>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mt-2">{member.bio}</p>

        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-[11px] font-mono uppercase text-text-muted/70 block mb-1">
            Core Focus
          </span>
          <p className="text-xs font-mono text-white/90">{member.specialization}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-1.5 mb-2">
          <Award className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
            Certifications
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {member.certifications.map((cert, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-raised border border-border text-text-muted"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
