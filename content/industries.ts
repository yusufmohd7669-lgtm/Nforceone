import { Industry } from "@/lib/schema";

export const industries: Industry[] = [
  {
    id: "insurance",
    slug: "insurance",
    name: "Insurance",
    headline: "Transforming Claims, Underwriting & Policy Lifecycle Automation",
    description: "Empower property, casualty, life, and health insurers with automated claims adjudication, dynamic underwriting rule engines, and seamless omnichannel policyholder portals.",
    challenges: [
      {
        title: "Legacy Core Policy & Claims Fragmentation",
        description: "Multi-decade mainframe systems prevent real-time data access and require extensive manual re-keying across departmental silos.",
      },
      {
        title: "Slow First Notice of Loss (FNOL) to Settlement",
        description: "Manual handoffs and archaic document processing stretch simple claim cycles to weeks, driving up operational overhead.",
      },
      {
        title: "Ever-Evolving State & Federal Regulatory Compliance",
        description: "Dynamic compliance mandates require rapid, auditable adjustments to underwriting and rating rules without risking regressions.",
      },
    ],
    solutions: [
      {
        title: "Pega Infinity Claims Modernization",
        description: "Implement unified case management to automate touchless claims adjudication and orchestrate complex adjustor workflows.",
      },
      {
        title: "AI-Powered Fraud & Risk Detection",
        description: "Deploy machine learning models and predictive scoring directly at the point of ingestion to flag anomalies in milliseconds.",
      },
      {
        title: "Automated Regression & Quality Engineering",
        description: "Protect critical policy processing engines with continuous automated testing pipelines across every release.",
      },
    ],
    relevantServices: ["pega-development", "pega-testing", "data-analytics", "artificial-intelligence"],
    metrics: [
      { value: "70%", label: "Touchless Claim Rate" },
      { value: "3x", label: "Underwriting Velocity" },
      { value: "$18M+", label: "Operational Savings" },
    ],
  },
  {
    id: "banking-financial-services",
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    headline: "Real-Time Streaming, Fraud Prevention & Automated Financial Operations",
    description: "Accelerate digital banking, customer onboarding, fraud detection, and regulatory reporting with high-throughput streaming architectures and intelligent automation.",
    challenges: [
      {
        title: "Sub-Second Fraud & Anomaly Detection",
        description: "High transaction volumes require real-time risk evaluation before transactions clear, preventing costly chargebacks.",
      },
      {
        title: "Complex KYC/AML Compliance Workflows",
        description: "Rigorous anti-money laundering and Know Your Customer regulations demand seamless, auditable customer verification.",
      },
      {
        title: "High-Availability 24/7 Operations",
        description: "Zero tolerance for database outages or transaction processing downtime across global card networks.",
      },
    ],
    solutions: [
      {
        title: "Real-Time Event Ingestion & Lakehouse Platforms",
        description: "Architect sub-second telemetry pipelines using Apache Kafka and Databricks Delta Lake handling 50,000+ TPS.",
      },
      {
        title: "Automated Onboarding with Pega KYC",
        description: "Streamline commercial and retail account opening with automated compliance checks and dynamic document gathering.",
      },
      {
        title: "High-Availability Cloud Database Clusters",
        description: "Engineer resilient multi-region database tiers with automated failover and zero data loss.",
      },
    ],
    relevantServices: ["big-data", "database-management", "pega-development", "devops"],
    metrics: [
      { value: "<85ms", label: "Transaction Risk Scoring" },
      { value: "99.999%", label: "System Availability" },
      { value: "55%", label: "Cloud Compute Savings" },
    ],
  },
  {
    id: "healthcare-life-sciences",
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    headline: "HIPAA-Compliant Cloud Infrastructure & Clinical Workflow Modernization",
    description: "Modernize patient engagement, clinical data interoperability, and automated prior authorization with secure, HIPAA-compliant cloud architectures.",
    challenges: [
      {
        title: "Strict Data Privacy & HIPAA Compliance",
        description: "Protecting sensitive Protected Health Information (PHI) across distributed clinics and telehealth platforms.",
      },
      {
        title: "Prior Authorization Delays & Friction",
        description: "Complex payer-provider data exchange causes treatment delays and administrative friction for clinicians.",
      },
      {
        title: "Fragmented Electronic Health Record (EHR) Systems",
        description: "Siloed clinical data prevents holistic patient analytics and population health management.",
      },
    ],
    solutions: [
      {
        title: "Zero-Downtime Multi-Cloud Kubernetes (EKS)",
        description: "Codify 100% of clinical infrastructure into Terraform and automated GitOps pipelines with continuous compliance scanning.",
      },
      {
        title: "Pega Care Management & Prior Auth",
        description: "Automate clinical review rules and connect directly with payer systems via FHIR/HL7 API standards.",
      },
      {
        title: "Enterprise Clinical Data Lakehouse",
        description: "Unify longitudinal patient records and clinical trials data into secure, governed analytics platforms.",
      },
    ],
    relevantServices: ["devops", "pega-development", "qa-testing", "it-development"],
    metrics: [
      { value: "100%", label: "Clean HIPAA Audits" },
      { value: "0 min", label: "Unplanned Downtime" },
      { value: "4x", label: "Release Velocity" },
    ],
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    name: "Retail & eCommerce",
    headline: "Headless Commerce, Generative AI & Real-Time Inventory Intelligence",
    description: "Build ultra-fast digital storefronts, generative AI shopping assistants, and unified omnichannel inventory orchestration engines.",
    challenges: [
      {
        title: "Catalog Search Abandonment",
        description: "Traditional keyword search fails to interpret customer style intent across tens of thousands of SKUs.",
      },
      {
        title: "Slow Page Load Times on Mobile",
        description: "Every 100ms delay in page load causes a measurable drop in mobile checkout conversion rates.",
      },
      {
        title: "Omnichannel Inventory Discrepancies",
        description: "Disconnected store POS and online warehouse systems cause stockouts and fulfillment delays.",
      },
    ],
    solutions: [
      {
        title: "Generative AI Conversational Product Advisors",
        description: "Deploy private RAG pipelines and vector search to guide shoppers with human-like styling advice.",
      },
      {
        title: "Next.js 15 High-Performance Headless Storefronts",
        description: "Achieve sub-second page loads and 98+ Core Web Vitals scores with edge-rendered web architectures.",
      },
      {
        title: "Distributed Order & Inventory Streaming",
        description: "Sync warehouse, store, and digital fulfillment channels in real time with event-driven microservices.",
      },
    ],
    relevantServices: ["web-development", "artificial-intelligence", "big-data", "ui-ux"],
    metrics: [
      { value: "+34%", label: "Conversion Lift" },
      { value: "<1.2s", label: "Global Page Load" },
      { value: "98+", label: "Lighthouse Score" },
    ],
  },
];
