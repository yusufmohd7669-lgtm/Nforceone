import React from "react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Privacy Policy | NForce One",
  description: "NForce One corporate privacy policy and data governance practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Badge variant="accent" className="mb-6">
        LEGAL & COMPLIANCE
      </Badge>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-text leading-tight mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-sm text-text-muted leading-relaxed">
        <p className="text-xs font-mono text-text-muted/70">
          Last Updated: August 2026
        </p>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p>
          NForce One Inc. (&ldquo;NForce One&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects information you provide directly through our website consultation forms, job application portals, and direct email communications. This includes your name, corporate email address, telephone number, company affiliation, and project requirements.
        </p>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          2. How We Use Information
        </h2>
        <p>
          We use your information exclusively to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Evaluate and respond to technical consultation requests and RFP inquiries</li>
          <li>Assess qualifications for employment and career openings</li>
          <li>Communicate project milestones, technical architecture proposals, and engagement contracts</li>
          <li>Ensure the security, reliability, and performance of our digital infrastructure</li>
        </ul>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          3. Data Security & Confidentiality
        </h2>
        <p>
          We employ industry-standard encryption protocols (TLS in transit, AES-256 at rest) to safeguard all inbound communications. We do not sell, rent, or monetize your corporate or personal data to third parties.
        </p>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          4. Contact Information
        </h2>
        <p>
          If you have questions regarding our data privacy practices or wish to request data deletion, contact our data protection team at{" "}
          <a href="mailto:privacy@nforce.one" className="text-accent underline">
            privacy@nforce.one
          </a>.
        </p>
      </div>
    </div>
  );
}
