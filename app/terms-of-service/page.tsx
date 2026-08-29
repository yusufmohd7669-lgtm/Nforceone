import React from "react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Terms of Service | NForce One",
  description: "NForce One corporate terms of service and website usage agreements.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Badge variant="accent" className="mb-6">
        LEGAL & COMPLIANCE
      </Badge>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-text leading-tight mb-8">
        Terms of Service
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-sm text-text-muted leading-relaxed">
        <p className="text-xs font-mono text-text-muted/70">
          Last Updated: August 2026
        </p>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          1. Agreement to Terms
        </h2>
        <p>
          By accessing or using the website of NForce One Inc. (nforce.one), you agree to be bound by these Terms of Service and all applicable federal, state, and local laws and regulations.
        </p>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          2. Intellectual Property Rights
        </h2>
        <p>
          All proprietary trademarks, service marks (&ldquo;N1 — Let&apos;s Do IT!&rdquo;), software code, whitepapers, design systems, and website assets are the intellectual property of NForce One Inc. or its licensors. Third-party brand names (such as Pega, AWS, Microsoft) belong to their respective trademark holders.
        </p>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          3. Professional Services Engagements
        </h2>
        <p>
          The materials on this website are provided for informational and consultation-intake purposes only and do not constitute a formal binding statement of work (SOW). All consulting engagements are governed by separate Master Services Agreements (MSA) and executed project orders.
        </p>

        <h2 className="text-xl font-bold font-display text-text mt-8 mb-3">
          4. Inquiries
        </h2>
        <p>
          For contractual and legal inquiries, please contact{" "}
          <a href="mailto:legal@nforce.one" className="text-accent underline">
            legal@nforce.one
          </a>.
        </p>
      </div>
    </div>
  );
}
