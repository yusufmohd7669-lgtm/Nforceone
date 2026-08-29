import React from "react";
import Link from "next/link";
import { services } from "@/content/services";
import { Logo } from "../ui/Logo";
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-raised border-t border-border mt-auto relative z-10">
      {/* Top Banner / Consultation CTA */}
      <div className="border-b border-border py-12 md:py-16 bg-gradient-to-b from-bg to-bg-raised relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold block mb-2">
              Ready to Accelerate Your IT Transformation?
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-white">
              Let&apos;s Build Resilient, High-Performance Systems Together.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/35 active:scale-[0.98] shrink-0 text-sm"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main 4-Column Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block py-1">
              <Logo size="lg" />
            </Link>

            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              Enterprise B2B IT consultancy delivering elite Pega implementations, cloud data platforms, automated quality engineering, and custom software architecture.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2 pt-2 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <a href="tel:+19724996667" className="hover:text-white transition-colors">
                  +1 (972) 499-6667
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <a href="mailto:contact@nforce.one" className="hover:text-white transition-colors">
                  contact@nforce.one
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                <span>Dallas-Fort Worth Metroplex, Texas, USA</span>
              </div>
            </div>

            {/* Certifications Badge row */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-bg border border-border text-text-muted">
                <Award className="w-3 h-3 text-accent" />
                Pega Certified CLSA / CSSA
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-bg border border-border text-text-muted">
                <ShieldCheck className="w-3 h-3 text-accent" />
                AWS & Azure Certified
              </span>
            </div>
          </div>

          {/* Col 1: Pega & Flagship */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-bold mb-4">
              Pega & Assurance
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-text-muted">
              <li>
                <Link href="/pega" className="hover:text-accent transition-colors font-bold text-white">
                  Flagship Pega Hub ↗
                </Link>
              </li>
              <li>
                <Link href="/services/pega-development" className="hover:text-white transition-colors">
                  Pega Development
                </Link>
              </li>
              <li>
                <Link href="/services/pega-testing" className="hover:text-white transition-colors">
                  Pega Testing
                </Link>
              </li>
              <li>
                <Link href="/services/qa-testing" className="hover:text-white transition-colors">
                  QA Testing & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/artificial-intelligence" className="hover:text-white transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/management-services" className="hover:text-white transition-colors">
                  Management Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Data & Engineering Services */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-bold mb-4">
              Data & Cloud Services
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-text-muted">
              <li>
                <Link href="/services/data-analytics" className="hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/big-data" className="hover:text-white transition-colors">
                  Big Data Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/database-management" className="hover:text-white transition-colors">
                  Database Management
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="hover:text-white transition-colors">
                  DevOps & Cloud
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/it-development" className="hover:text-white transition-colors">
                  IT Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Resources */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-bold mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-text-muted">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About NForce One
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers (Hiring)
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal disclaimer */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © {new Date().getFullYear()} NForce One Inc. All rights reserved. &ldquo;NF1 — Let&apos;s Do IT!&rdquo; is a registered trademark.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
