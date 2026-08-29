import { Insight } from "@/lib/schema";

export const insights: Insight[] = [
  {
    id: "pega-infinity-migration-guide",
    slug: "pega-infinity-migration-guide",
    title: "The Enterprise Guide to Modernizing Legacy Pega Apps to Infinity 24",
    category: "Pega Architecture",
    readTime: "8 min read",
    publishedAt: "August 2026",
    author: "Siddharth Sharma, Principal Pega Architect",
    summary: "A battle-tested blueprint for migrating legacy Pega 7 and early Pega 8 applications to Pega Infinity '24 without breaking mission-critical business workflows.",
    tags: ["Pega", "Enterprise Architecture", "Cloud Migration", "Constellation UI"],
    featured: true,
    content: [
      {
        heading: "1. The Inevitable Move from Section-Based UI to Constellation",
        body: "For years, enterprise Pega applications relied on complex section rules, harnesses, and custom JavaScript snippets. With Pega Infinity, the Constellation design system replaces server-rendered JSP tags with a lightweight, client-side React architecture that talks directly to DX APIs. This shift yields a 3x boost in page rendering speed and slashes UI maintenance overhead.",
      },
      {
        heading: "2. Remediation of Deprecated Custom Java Rules",
        body: "Legacy Pega applications often accumulated inline Java steps in activities. Infinity mandates low-code declarative data transforms and standard connector rules. We outline an automated auditing methodology to identify and replace custom Java with out-of-the-box Pega functions, improving upgrade resilience and security posture.",
      },
      {
        heading: "3. Automated Guardrail Verification in CI/CD",
        body: "Upgrades fail when technical debt is hidden. By wiring Pega Deployment Manager into GitHub Actions and enforcing a minimum guardrail threshold of 90, teams catch circular rule references and unindexed database queries before staging deployment.",
      },
    ],
  },
  {
    id: "lakehouse-vs-warehouse-2026",
    slug: "lakehouse-vs-warehouse-2026",
    title: "Lakehouse vs Data Warehouse: Architectural Decisions for Enterprise Scale",
    category: "Big Data & Engineering",
    readTime: "6 min read",
    publishedAt: "July 2026",
    author: "Elena Rostova, VP of Data Engineering",
    summary: "Why leading enterprises are unifying streaming telemetry and batch business intelligence onto open table formats like Delta Lake and Apache Iceberg.",
    tags: ["Big Data", "Data Lakehouse", "Databricks", "Snowflake", "Apache Iceberg"],
    featured: true,
    content: [
      {
        heading: "1. The Convergence of Storage and Compute",
        body: "Traditional data warehouses forced expensive proprietary storage coupling. Modern open lakehouse architectures leverage Parquet and Iceberg metadata layers on object storage, giving organizations the flexibility to query petabytes with multiple compute engines without data duplication.",
      },
      {
        heading: "2. Real-Time Streaming Meets ACID Transactions",
        body: "Historically, data lakes suffered from dirty reads and inconsistent schema evolution. With ACID transactional guarantees on open table formats, enterprises can stream hundreds of thousands of events per second while simultaneously running executive BI queries with zero lock contention.",
      },
    ],
  },
  {
    id: "enterprise-rag-governance",
    slug: "enterprise-rag-governance",
    title: "Building Enterprise RAG Systems with Zero Data Leakage and High Recall",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    publishedAt: "June 2026",
    author: "David Kim, Principal AI Engineer",
    summary: "How to deploy production-ready Retrieval-Augmented Generation systems inside private cloud perimeters with hybrid search and deterministic guardrails.",
    tags: ["Generative AI", "RAG", "LLM Security", "Vector Search", "Enterprise AI"],
    featured: true,
    content: [
      {
        heading: "1. Beyond Naive Vector Search: Hybrid Sparse-Dense Retrieval",
        body: "Pure semantic vector search frequently fails on exact serial numbers, policy codes, and technical part IDs. Production RAG requires hybrid retrieval combining BM25 keyword indexing with dense embeddings, reranked via cross-encoders for 98%+ recall accuracy.",
      },
      {
        heading: "2. Private VPC Isolation and Automated PII Scrubbing",
        body: "Enterprises cannot risk leaking proprietary trade secrets or customer PII into public LLMs. We examine the architecture of private inference gateways, automated Presidio-based token sanitization, and audit-logged vector storage.",
      },
    ],
  },
];
