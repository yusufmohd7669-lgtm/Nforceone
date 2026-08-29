import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insights } from "@/content/insights";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, Calendar, UserCheck } from "lucide-react";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return { title: "Article Not Found" };

  return {
    title: `${insight.title} | NForce One Insights`,
    description: insight.summary,
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
      {/* 1. ARTICLE HEADER */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 border-b border-border bg-gradient-to-b from-bg-raised/40 via-bg to-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </Link>

          <Badge variant="accent" className="mb-4">
            {insight.category}
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-text leading-[1.15] mb-6">
            {insight.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-text-muted pt-2 border-t border-border/60">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-accent" />
              <span>{insight.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{insight.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>{insight.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT */}
      <section className="py-16 md:py-24 border-b border-border bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Executive Summary */}
          <div className="p-6 rounded-xl bg-bg-card border-l-4 border-accent text-base text-text-muted leading-relaxed italic">
            {insight.summary}
          </div>

          {/* Content sections */}
          <div className="space-y-10">
            {insight.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-text">
                  {sec.heading}
                </h2>
                <p className="text-base text-text-muted leading-relaxed font-sans">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-text-muted mr-2">Tags:</span>
            {insight.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded bg-bg-raised border border-border text-accent"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg-raised">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mx-auto mb-6">
            PRACTICE CONSULTATION
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text mb-6">
            Implement These Architectural Principles
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Schedule a direct architecture consultation with an NForce One practice lead.
          </p>
          <Button href="/contact" size="lg" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
