import { Service } from "@/lib/schema";

export const services: Service[] = [
  {
    id: "pega-development",
    slug: "pega-development",
    title: "Pega Development",
    h1: "Enterprise Pega Development & Architecture",
    eyebrow: "CORE SPECIALIZATION",
    shortDescription: "End-to-end Pega platform architecture, Case Management, Decisioning, and automated workflow solutions built for enterprise scale.",
    heroParagraph: "Deliver rapid digital transformation and streamline complex business operations with enterprise Pega applications. Our certified Pega Lead System Architects (CLSA) and Senior System Architects (CSSA) design robust, scalable, and upgrade-ready architectures that unify customer journeys and optimize business processes.",
    icon: "Layers",
    badge: "Flagship Capability",
    capabilities: [
      {
        title: "Enterprise Case Management",
        description: "Model, automate, and orchestrate complex multi-step business cases with dynamic routing, SLAs, and omnichannel resolution paths.",
        icon: "Workflow",
      },
      {
        title: "Pega Customer Decision Hub (CDH)",
        description: "Implement real-time AI and predictive analytics to drive Next-Best-Action recommendations across inbound and outbound channels.",
        icon: "Cpu",
      },
      {
        title: "Legacy Modernization to Pega Infinity",
        description: "Decommission rigid legacy monoliths by migrating core workflows and business rules onto modern Pega Infinity platforms.",
        icon: "RefreshCw",
      },
      {
        title: "Pega Cloud & Architecture Optimization",
        description: "Deploy and optimize Pega applications on Pega Cloud, AWS, or Azure with auto-scaling, high availability, and multi-tenant design.",
        icon: "Cloud",
      },
      {
        title: "Custom Pega UI & Constellation Architecture",
        description: "Design intuitive, accessible, and fast enterprise portals leveraging Pega's modern Constellation design system and React bridges.",
        icon: "Layout",
      },
      {
        title: "API & Enterprise Systems Integration",
        description: "Connect Pega seamlessly with core ERP, CRM, billing, and document repositories via REST, SOAP, Kafka, and microservices.",
        icon: "Network",
      },
    ],
    deliverables: [
      "Target State Architecture & Class Structure Design",
      "Pega Application Guardrail Compliance Score (≥ 90%)",
      "Automated CI/CD Pipelines with Pega Deployment Manager",
      "Custom Integration Connectors & Microservice Layers",
      "Comprehensive Security & RBAC Configuration",
      "Knowledge Transfer & Production Runbooks",
    ],
    technologies: [
      "Pega Infinity (23 & '24)",
      "Pega Customer Decision Hub",
      "Pega 1:1 Customer Engagement",
      "Pega Constellation UI",
      "Pega Deployment Manager",
      "AWS / Azure / Pega Cloud",
    ],
    businessOutcomes: [
      {
        metric: "65%",
        label: "Faster Case Resolution",
        description: "Automated routing and dynamic case management eliminate handoff bottlenecks.",
      },
      {
        metric: "3.5x",
        label: "Deployment Velocity",
        description: "Reusable rule sets and automated deployment pipelines accelerate release cadences.",
      },
      {
        metric: "99.95%",
        label: "Platform Uptime",
        description: "High-availability cloud architecture engineered for enterprise mission-critical workloads.",
      },
    ],
    faqs: [
      {
        question: "What certified Pega talent does NForce One provide?",
        answer: "Our team includes certified Pega Lead System Architects (CLSA), Certified Senior System Architects (CSSA), Certified System Architects (CSA), and Business Architects (PCBA) with extensive enterprise delivery experience.",
      },
      {
        question: "How do you enforce Pega best practices and guardrails?",
        answer: "We mandate strict compliance with Pega's situational layer cake principles, enforce automated guardrail compliance checks (targeting 90+ guardrail score), and conduct peer code reviews prior to pipeline promotions.",
      },
      {
        question: "Can you help migrate our on-premise Pega workloads to Pega Cloud?",
        answer: "Yes. We specialize in zero-downtime Pega Cloud migrations, remediation of deprecated custom Java rules, database schema alignment, and Constellation UI adoption.",
      },
    ],
  },
  {
    id: "pega-testing",
    slug: "pega-testing",
    title: "Pega Testing & Quality Engineering",
    h1: "Specialized Pega Quality Assurance & Automated Testing",
    eyebrow: "ASSURANCE & VERIFICATION",
    shortDescription: "Automated regression suites, scenario testing, and performance validation engineered specifically for Pega platform architectures.",
    heroParagraph: "Ensure flawless Pega releases with testing methodologies tailored specifically to Pega's rule resolution engine and dynamic case lifecycle. From automated Scenario Testing to Pega Unit and end-to-end integration validation, we prevent regressions and verify compliance across complex enterprise workflows.",
    icon: "CheckCircle2",
    capabilities: [
      {
        title: "Pega Scenario & Unit Testing Automation",
        description: "Build robust, repeatable automated test suites leveraging native Pega Scenario Testing and PegaUnit framework.",
        icon: "Terminal",
      },
      {
        title: "Rule-Level Regression Verification",
        description: "Validate rule inheritance, circumstancing logic, and data transform accuracy across version upgrades and patch releases.",
        icon: "ShieldAlert",
      },
      {
        title: "Pega Performance & PAL Profiling",
        description: "Identify database bottlenecks, bloated clipboards, and heavy rule execution using Pega Performance Analyzer (PAL) and DB Trace.",
        icon: "Gauge",
      },
      {
        title: "End-to-End Cross-System Testing",
        description: "Verify complex enterprise workflows spanning Pega portals, backend mainframe systems, ERPs, and third-party APIs.",
        icon: "GitFork",
      },
      {
        title: "CI/CD Pipeline Test Automation",
        description: "Integrate automated regression suites directly into Pega Deployment Manager pipelines for continuous quality gates.",
        icon: "Zap",
      },
      {
        title: "Security & Access Group Testing",
        description: "Exhaustively validate Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), and data privacy constraints.",
        icon: "Lock",
      },
    ],
    deliverables: [
      "Automated Pega Scenario Test Suite Repository",
      "PegaUnit Coverage & Rule Verification Reports",
      "PAL Performance Profiling & Query Optimization Logs",
      "Automated Deployment Gate Integration Scripts",
      "Defect Traceability Matrix & Root Cause Analytics",
    ],
    technologies: [
      "Pega Scenario Testing",
      "PegaUnit Framework",
      "Pega PAL / DBTrace / Tracer",
      "Selenium / Playwright for Pega Portals",
      "Pega Deployment Manager",
      "Jira / TestRail",
    ],
    businessOutcomes: [
      {
        metric: "80%",
        label: "Regression Time Reduction",
        description: "Automated test execution reduces multi-week regression cycles to hours.",
      },
      {
        metric: "99.4%",
        label: "Defect Detection Rate",
        description: "Deep rule-level inspection catches defects prior to staging deployment.",
      },
      {
        metric: "0",
        label: "Upgrade Disruption",
        description: "Automated test coverage ensures smooth Pega Infinity platform updates.",
      },
    ],
    faqs: [
      {
        question: "Why does Pega require specialized testing beyond standard QA?",
        answer: "Pega's dynamic rule resolution, clipboard state management, and declarative processing require deep understanding of Pega internals. Standard black-box tools miss rule circumsancing and cache-related defects that our Pega-certified QA engineers catch instantly.",
      },
      {
        question: "Can you automate tests for legacy Pega 7 and modern Pega 8/Infinity?",
        answer: "Yes, we support both legacy Pega environments using hybrid test frameworks and modern Infinity applications using native Scenario Testing and modern headless browsers.",
      },
    ],
  },
  {
    id: "qa-testing",
    slug: "qa-testing",
    title: "QA Testing & Automation",
    h1: "Comprehensive Software Quality Assurance & Test Engineering",
    eyebrow: "QUALITY ENGINEERING",
    shortDescription: "End-to-end test automation, performance engineering, API validation, and security testing across enterprise applications.",
    heroParagraph: "Eliminate production defects, ensure rock-solid reliability, and shorten release cycles with mature QA engineering. We design full-lifecycle testing strategies spanning automated UI/API testing, load and stress engineering, cross-platform validation, and continuous quality governance.",
    icon: "ShieldCheck",
    capabilities: [
      {
        title: "Full-Stack Test Automation",
        description: "Design modular, maintainable automation frameworks using Playwright, Cypress, and Selenium with cross-browser execution.",
        icon: "Code",
      },
      {
        title: "API & Microservices Testing",
        description: "Validate REST, GraphQL, and event streams (Kafka) for contract compliance, payload integrity, and error handling.",
        icon: "Share2",
      },
      {
        title: "Performance & Load Engineering",
        description: "Simulate peak concurrency and stress-test application infrastructure using k6, JMeter, and distributed cloud load generators.",
        icon: "Activity",
      },
      {
        title: "Security & Vulnerability Assessment",
        description: "Execute automated DAST/SAST scans, OWASP Top 10 compliance audits, and authenticated vulnerability assessments.",
        icon: "ShieldAlert",
      },
      {
        title: "Continuous Quality in CI/CD",
        description: "Embed automated test suites into GitHub Actions, GitLab CI, and Azure DevOps for automated pull-request validation.",
        icon: "GitCommit",
      },
      {
        title: "Accessibility & WCAG Compliance",
        description: "Ensure software meets WCAG 2.1 AA/AAA guidelines with automated axe-core scanning and assistive technology testing.",
        icon: "Eye",
      },
    ],
    deliverables: [
      "Custom Automated Test Framework Codebase",
      "API Contract & Synthetic Monitoring Suites",
      "Performance Benchmarking & Bottleneck Analysis Reports",
      "Security Vulnerability & Remediation Roadmap",
      "Continuous Test Pipeline Integration",
    ],
    technologies: [
      "Playwright",
      "Cypress",
      "k6 / Apache JMeter",
      "Postman / RestAssured",
      "GitHub Actions / Azure DevOps",
      "SonarQube / OWASP ZAP",
    ],
    businessOutcomes: [
      {
        metric: "75%",
        label: "Faster Time-to-Market",
        description: "Continuous automated test pipelines eliminate QA release bottlenecks.",
      },
      {
        metric: "90%+",
        label: "Automated Coverage",
        description: "Comprehensive test suites protect critical revenue and business flows.",
      },
      {
        metric: "4x",
        label: "Release Frequency",
        description: "Reliable automated quality gates allow daily production deployments.",
      },
    ],
    faqs: [
      {
        question: "How do you transition manual testing teams to automation?",
        answer: "We provide structured automation frameworks, reusable test libraries, training workshops, and CI/CD pipelines that enable your team to author and maintain tests with minimal friction.",
      },
      {
        question: "Which automation frameworks do you recommend?",
        answer: "We typically recommend Playwright or Cypress for modern web apps, Postman/k6 for API/performance testing, and custom Python/TypeScript test harnesses for complex data pipelines.",
      },
    ],
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    h1: "Transform Enterprise Data into Actionable Strategic Intelligence",
    eyebrow: "DATA & INSIGHTS",
    shortDescription: "Interactive executive dashboards, predictive modeling, semantic data models, and real-time operational analytics.",
    heroParagraph: "Empower your leadership and operational teams with unified data intelligence. We bridge the gap between raw data sources and strategic decisions by building scalable data marts, self-service BI platforms, executive dashboards, and predictive analytical models.",
    icon: "BarChart3",
    capabilities: [
      {
        title: "Enterprise BI & Executive Dashboards",
        description: "Design real-time, interactive dashboards in Power BI, Tableau, and Looker tailored for C-suite decision-makers.",
        icon: "LayoutDashboard",
      },
      {
        title: "Semantic Layer & Dimensional Modeling",
        description: "Build trusted single-source-of-truth semantic models (dbt, Star Schema) to eliminate conflicting business metrics.",
        icon: "Database",
      },
      {
        title: "Predictive & Prescriptive Modeling",
        description: "Develop statistical and machine learning models for customer churn forecasting, demand planning, and revenue attribution.",
        icon: "TrendingUp",
      },
      {
        title: "Self-Service Analytics Enablement",
        description: "Democratize data access across business units with curated data catalogs, governance rules, and role-based access.",
        icon: "Users",
      },
      {
        title: "Customer & Marketing Analytics",
        description: "Unify omnichannel touchpoints for multi-touch attribution, customer lifetime value (CLV), and segmentation modeling.",
        icon: "PieChart",
      },
      {
        title: "Embedded Analytics & Custom Portals",
        description: "Embed interactive charts and reports securely into client-facing web applications and SaaS products.",
        icon: "Monitor",
      },
    ],
    deliverables: [
      "Production Power BI / Tableau Enterprise Workspaces",
      "Validated Semantic Data Models & Metric Definitions",
      "Predictive Machine Learning Pipelines",
      "Data Dictionary & Governance Documentation",
      "Executive Dashboard User Guides & Training",
    ],
    technologies: [
      "Power BI",
      "Tableau",
      "Looker",
      "dbt (data build tool)",
      "Python / R / SQL",
      "Snowflake / BigQuery",
    ],
    businessOutcomes: [
      {
        metric: "100%",
        label: "Single Source of Truth",
        description: "Eliminate contradictory reporting across departments with centralized metrics.",
      },
      {
        metric: "40%",
        label: "Faster Decision Cycles",
        description: "Real-time dashboards replace manual spreadsheet collation and weekly reporting delays.",
      },
      {
        metric: "+28%",
        label: "Operational Efficiency",
        description: "Predictive insights optimize inventory levels, staffing, and customer retention.",
      },
    ],
    faqs: [
      {
        question: "How does Data Analytics differ from Big Data at NForce One?",
        answer: "Data Analytics focuses on business intelligence, decision modeling, semantic layers, and dashboards. Big Data focuses on data platform infrastructure, distributed pipelines (Spark, Kafka), data lakes, and high-throughput ingestion architecture.",
      },
      {
        question: "Can you help migrate our legacy on-premise reporting to cloud BI?",
        answer: "Yes. We regularly migrate legacy SSRS, Cognos, and SAP BusinessObjects reports into modern cloud platforms like Power BI, Tableau Cloud, and Looker.",
      },
    ],
  },
  {
    id: "big-data",
    slug: "big-data",
    title: "Big Data & Data Engineering",
    h1: "Enterprise Big Data Infrastructure, Pipelines & Data Lakes",
    eyebrow: "DATA INFRASTRUCTURE",
    shortDescription: "High-throughput data pipelines, cloud data lakes, distributed stream processing, and modern lakehouse architectures.",
    heroParagraph: "Build resilient, high-volume data foundations engineered for massive scale. We design and operate distributed data platforms, modern lakehouses, real-time streaming architectures, and enterprise ETL/ELT pipelines capable of processing petabytes with strict governance and low latency.",
    icon: "DatabaseBackup",
    capabilities: [
      {
        title: "Cloud Data Lake & Lakehouse Architecture",
        description: "Implement modern lakehouses on Databricks, Snowflake, AWS Lake Formation, or Google BigQuery using Delta Lake/Iceberg.",
        icon: "HardDrive",
      },
      {
        title: "Real-Time Streaming & Event Ingestion",
        description: "Architect low-latency streaming pipelines using Apache Kafka, Apache Flink, and AWS Kinesis for real-time telemetry.",
        icon: "Zap",
      },
      {
        title: "Distributed ETL/ELT Pipeline Engineering",
        description: "Build robust, idempotent data transformation pipelines with Apache Spark, Airflow, dbt, and cloud-native orchestration.",
        icon: "Workflow",
      },
      {
        title: "Data Quality, Lineage & Governance",
        description: "Enforce automated data quality checks, schema evolution management, metadata catalogs, and GDPR/HIPAA compliance.",
        icon: "ShieldCheck",
      },
      {
        title: "Storage & Query Optimization",
        description: "Optimize partitioning, clustering, compression formats (Parquet/ORC), and compute clusters to dramatically reduce cloud costs.",
        icon: "Sliders",
      },
      {
        title: "Migration from Legacy Hadoop/On-Prem",
        description: "Decommission expensive on-premise Hadoop/Cloudera clusters and seamlessly migrate workloads to modern cloud platforms.",
        icon: "Server",
      },
    ],
    deliverables: [
      "Production-Grade Cloud Data Lakehouse Infrastructure",
      "Automated Distributed ETL/ELT DAG Pipelines",
      "Streaming Event Ingestion Framework",
      "Data Quality Testing Suite & Lineage Catalog",
      "Cloud Infrastructure as Code (Terraform) & Monitoring",
    ],
    technologies: [
      "Apache Spark",
      "Apache Kafka / Flink",
      "Databricks / Delta Lake",
      "Snowflake / AWS Glue",
      "Apache Airflow / Dagster",
      "Apache Iceberg / Parquet",
    ],
    businessOutcomes: [
      {
        metric: "10x",
        label: "Pipeline Processing Speed",
        description: "Distributed compute architectures accelerate petabyte-scale transformations.",
      },
      {
        metric: "45%",
        label: "Cloud Cost Optimization",
        description: "Intelligent cluster auto-scaling and storage tiering reduce cloud infrastructure spend.",
      },
      {
        metric: "<5s",
        label: "Streaming Ingestion Latency",
        description: "Real-time event pipelines deliver instant operational telemetry.",
      },
    ],
    faqs: [
      {
        question: "How do you handle data governance and compliance in data lakes?",
        answer: "We implement fine-grained access control, automated column-level masking for PII, data lineage tracking, and automated quality assertions (Great Expectations) at every ingestion stage.",
      },
      {
        question: "Which lakehouse format do you recommend: Delta Lake or Apache Iceberg?",
        answer: "We evaluate your existing stack. Delta Lake is ideal for Databricks-centric architectures, while Apache Iceberg provides unparalleled multi-engine interoperability across Snowflake, Trino, and Spark.",
      },
    ],
  },
  {
    id: "database-management",
    slug: "database-management",
    title: "Database Management & Administration",
    h1: "High-Availability Database Engineering & Performance Optimization",
    eyebrow: "DATA RELIABILITY",
    shortDescription: "24/7 database administration, zero-downtime migrations, performance tuning, and disaster recovery across SQL and NoSQL engines.",
    heroParagraph: "Ensure mission-critical uptime, sub-millisecond query performance, and bulletproof security for your enterprise data tiers. We deliver comprehensive database management, cloud migration, automated backup strategies, and index tuning across PostgreSQL, Oracle, SQL Server, MySQL, and distributed NoSQL databases.",
    icon: "ServerCrash",
    capabilities: [
      {
        title: "24/7 Monitoring & Proactive DBA",
        description: "Continuous health monitoring, automated alert triage, deadlock resolution, and capacity planning for mission-critical databases.",
        icon: "Eye",
      },
      {
        title: "Query Tuning & Index Optimization",
        description: "Deep query plan analysis, buffer pool tuning, index defragmentation, and execution plan optimization to eliminate latency.",
        icon: "Cpu",
      },
      {
        title: "High Availability & Multi-Region Replication",
        description: "Architect active-active clusters, read replicas, and automated failover topologies with sub-minute RTO and zero RPO.",
        icon: "Network",
      },
      {
        title: "Zero-Downtime Cloud Migration",
        description: "Migrate legacy on-premise databases to AWS RDS, Aurora, Azure SQL, or Google Cloud SQL using change-data-capture (CDC).",
        icon: "CloudUpload",
      },
      {
        title: "Security, Encryption & Compliance",
        description: "Implement transparent data encryption (TDE), role-based privilege segregation, automated patching, and audit logging.",
        icon: "Lock",
      },
      {
        title: "Disaster Recovery & Point-in-Time Restore",
        description: "Configure automated incremental backups, cross-region replication, and regularly tested point-in-time recovery drills.",
        icon: "ShieldAlert",
      },
    ],
    deliverables: [
      "High Availability Database Architecture Configuration",
      "Query Performance Audit & Optimization Report",
      "Automated Backup & Disaster Recovery Playbook",
      "Automated Health Monitoring Dashboards",
      "Security Hardening & Privilege Audit Matrices",
    ],
    technologies: [
      "PostgreSQL",
      "Oracle Database",
      "Microsoft SQL Server",
      "Amazon Aurora / RDS",
      "MongoDB / DynamoDB",
      "Redis / ElasticSearch",
    ],
    businessOutcomes: [
      {
        metric: "99.999%",
        label: "Database Availability",
        description: "High-availability clustering guarantees uninterrupted enterprise uptime.",
      },
      {
        metric: "85%",
        label: "Query Latency Reduction",
        description: "Deep index optimization and query refactoring eliminate application lag.",
      },
      {
        metric: "<15min",
        label: "Disaster Recovery RTO",
        description: "Tested point-in-time restoration procedures protect critical enterprise assets.",
      },
    ],
    faqs: [
      {
        question: "Do you support hybrid and multi-cloud database deployments?",
        answer: "Yes. We manage and replicate databases spanning on-premise data centers and multiple public clouds (AWS, Azure, GCP) with encrypted replication tunnels.",
      },
      {
        question: "How do you migrate large production databases without downtime?",
        answer: "We utilize Change Data Capture (CDC) replication tools like AWS DMS or Debezium to continuously sync transactional data to the cloud target before executing an instantaneous cutover.",
      },
    ],
  },
  {
    id: "devops",
    slug: "devops",
    title: "DevOps & Cloud Engineering",
    h1: "Enterprise DevOps, CI/CD Automation & Cloud Infrastructure",
    eyebrow: "INFRASTRUCTURE & DELIVERY",
    shortDescription: "Automated deployment pipelines, Kubernetes container orchestration, Infrastructure-as-Code, and Site Reliability Engineering (SRE).",
    heroParagraph: "Accelerate software delivery cycles while boosting system resilience and security. We build robust Infrastructure-as-Code, immutable CI/CD pipelines, containerized Kubernetes architectures, and observability platforms that empower your engineering teams to deploy confidently multiple times a day.",
    icon: "Terminal",
    capabilities: [
      {
        title: "CI/CD Pipeline Engineering",
        description: "Build automated, secure build-test-deploy pipelines using GitHub Actions, GitLab CI, and ArgoCD with automated rollback capabilities.",
        icon: "GitPullRequest",
      },
      {
        title: "Kubernetes & Container Orchestration",
        description: "Deploy and manage resilient, auto-scaling microservices on AWS EKS, Azure AKS, and Google Cloud GKE.",
        icon: "Box",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description: "Manage 100% of cloud infrastructure deterministically using Terraform, OpenTofu, and AWS CDK with automated drift detection.",
        icon: "FileCode",
      },
      {
        title: "Cloud Migration & Architecture",
        description: "Architect well-architected cloud foundations on AWS, Azure, or GCP with secure VPCs, transit gateways, and IAM least privilege.",
        icon: "Cloud",
      },
      {
        title: "Observability & SRE (Monitoring)",
        description: "Implement full-stack telemetry with Prometheus, Grafana, Datadog, and OpenTelemetry for distributed tracing and anomaly alerts.",
        icon: "Activity",
      },
      {
        title: "DevSecOps & Compliance Automation",
        description: "Automate container image scanning, secret management (Vault), static code analysis, and SOC2/ISO27001 compliance guardrails.",
        icon: "ShieldCheck",
      },
    ],
    deliverables: [
      "Modular Terraform / CDK Infrastructure Code Repositories",
      "Production-Ready Kubernetes Cluster Configurations",
      "Automated Multi-Stage CI/CD Deployment Pipelines",
      "Grafana / Datadog Monitoring & SLO Alerting Dashboards",
      "Comprehensive Disaster Recovery & Runbook Documentation",
    ],
    technologies: [
      "Kubernetes (EKS / AKS / GKE)",
      "Terraform / OpenTofu",
      "GitHub Actions / GitLab CI",
      "Docker / Helm",
      "Prometheus / Grafana / Datadog",
      "AWS / Microsoft Azure / GCP",
    ],
    businessOutcomes: [
      {
        metric: "15min",
        label: "Commit to Production",
        description: "Automated pipelines take code from merged pull request to live production safely.",
      },
      {
        metric: "99.99%",
        label: "Infrastructure Uptime",
        description: "Self-healing Kubernetes clusters and multi-AZ deployments eliminate downtime.",
      },
      {
        metric: "60%",
        label: "Faster Incident Recovery",
        description: "Automated observability and distributed tracing isolate root causes in minutes.",
      },
    ],
    faqs: [
      {
        question: "Can you help our team adopt GitOps?",
        answer: "Yes. We configure declarative GitOps workflows using ArgoCD or Flux, ensuring that your Git repository remains the single source of truth for all environment configurations.",
      },
      {
        question: "How do you ensure cloud security in automated pipelines?",
        answer: "We embed automated SAST/DAST checks, container vulnerability scanning with Trivy, Terraform policy-as-code with Checkov, and automated secret detection into every pipeline run.",
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Design & Development",
    h1: "High-Performance Modern Web Applications & Digital Platforms",
    eyebrow: "DIGITAL EXPERIENCES",
    shortDescription: "Custom full-stack web applications, enterprise portals, headless CMS architectures, and lightning-fast digital experiences.",
    heroParagraph: "Turn digital interactions into high-converting enterprise assets. We build ultra-responsive, accessible, and performant web applications using Next.js, React, Node.js, and TypeScript, engineered for lightning load times, robust security, and seamless integration with your backend ecosystem.",
    icon: "Globe",
    capabilities: [
      {
        title: "Enterprise Web Applications",
        description: "Build robust, mission-critical customer portals, partner intranets, and SaaS applications with Next.js and modern React.",
        icon: "Layout",
      },
      {
        title: "Headless CMS & Digital Platforms",
        description: "Implement decoupled CMS architectures (Sanity, Contentful, Strapi) allowing marketing teams to publish at scale with zero developer bottlenecks.",
        icon: "FileText",
      },
      {
        title: "High-Converting B2B Marketing Sites",
        description: "Design sleek, interactive web experiences engineered with modern typography, smooth animations, and optimized lead capture funnels.",
        icon: "Sparkles",
      },
      {
        title: "API-First Architecture & Micro-Frontends",
        description: "Develop composable frontends connected to modern REST and GraphQL APIs for seamless third-party service integration.",
        icon: "Share2",
      },
      {
        title: "Web Performance & Core Web Vitals",
        description: "Audit and optimize web performance to achieve 95+ Lighthouse scores, sub-second LCP, and zero cumulative layout shift.",
        icon: "Zap",
      },
      {
        title: "Accessibility (a11y) & WCAG 2.1 Compliance",
        description: "Ensure digital accessibility across all screen sizes and assistive devices adhering to strict WCAG 2.1 AA/AAA guidelines.",
        icon: "Eye",
      },
    ],
    deliverables: [
      "Production Next.js / TypeScript Web Application Codebase",
      "Modular Component Design System (Tailwind / Radix UI)",
      "Headless Content Management System Integration",
      "Core Web Vitals Performance Audit & Optimization",
      "Automated CI/CD Deployment on Vercel / AWS Amplify",
    ],
    technologies: [
      "Next.js 15 (App Router)",
      "React 19 / TypeScript",
      "Tailwind CSS",
      "Node.js / Express / NestJS",
      "GraphQL / REST APIs",
      "Vercel / AWS CloudFront",
    ],
    businessOutcomes: [
      {
        metric: "<1.2s",
        label: "Average Page Load",
        description: "Server-side rendering and edge caching deliver instant global experiences.",
      },
      {
        metric: "98+",
        label: "Lighthouse Score",
        description: "Best-in-class performance, accessibility, and SEO metrics across all devices.",
      },
      {
        metric: "+42%",
        label: "Lead Conversion Rate",
        description: "Streamlined UX and intuitive lead-capture funnels turn visitors into qualified buyers.",
      },
    ],
    faqs: [
      {
        question: "Why do you recommend Next.js and TypeScript for enterprise web projects?",
        answer: "Next.js provides enterprise-grade SSR, static optimization, edge middleware, and built-in SEO capabilities. TypeScript enforces compile-time type safety, minimizing production bugs and simplifying long-term maintenance.",
      },
      {
        question: "Can you redesign our existing website while keeping our current backend intact?",
        answer: "Absolutely. We routinely decouple existing monolithic web apps into modern frontend architectures that communicate with your existing APIs, authentication systems, and databases.",
      },
    ],
  },
  {
    id: "it-development",
    slug: "it-development",
    title: "IT Development & Custom Software",
    h1: "Custom Software Engineering & Enterprise Systems Integration",
    eyebrow: "ENTERPRISE SOFTWARE",
    shortDescription: "Custom business software, microservice backends, legacy system modernization, and cross-platform enterprise solutions.",
    heroParagraph: "Bridge critical business gaps that off-the-shelf software cannot solve. We architect and develop custom, scalable enterprise software applications, secure API gateways, and integrated distributed systems designed to adapt to your organization's unique operational workflows.",
    icon: "Code2",
    capabilities: [
      {
        title: "Custom Enterprise Software Engineering",
        description: "Build bespoke business applications, ERP extensions, and workflow management systems designed for your exact processes.",
        icon: "Terminal",
      },
      {
        title: "Microservices & Distributed Backends",
        description: "Design modular, loosely coupled microservices architectures in Node.js, Go, Python, and Java with high throughput.",
        icon: "Server",
      },
      {
        title: "Legacy Monolith Refactoring & Modernization",
        description: "Decompose brittle legacy systems using the strangler-fig pattern into modern, cloud-native containerized applications.",
        icon: "RefreshCw",
      },
      {
        title: "Enterprise Systems Integration & Middleware",
        description: "Connect disparate ERP, CRM, HRIS, and legacy databases via robust API gateways, message queues, and event buses.",
        icon: "GitFork",
      },
      {
        title: "Secure Identity & RBAC Engineering",
        description: "Implement enterprise SSO, OAuth2/OIDC, SAML, Multi-Factor Authentication, and fine-grained role-based permissions.",
        icon: "Lock",
      },
      {
        title: "Cross-Platform Enterprise Mobile Apps",
        description: "Develop enterprise-grade iOS and Android mobile solutions with React Native, securely integrated with backend systems.",
        icon: "Smartphone",
      },
    ],
    deliverables: [
      "Custom Software Application Source Code & Documentation",
      "API Specifications & Interactive Swagger / OpenAPI Docs",
      "Microservice Architecture Blueprints",
      "Integration Middleware & Webhook Connectors",
      "Automated Unit & Integration Test Suites",
    ],
    technologies: [
      "Node.js / TypeScript",
      "Python / FastAPI / Django",
      "Go (Golang)",
      "Java / Spring Boot",
      "PostgreSQL / Redis",
      "Kafka / RabbitMQ",
    ],
    businessOutcomes: [
      {
        metric: "100%",
        label: "Custom Fit to Workflows",
        description: "Bespoke software eliminates the operational compromises of off-the-shelf tooling.",
      },
      {
        metric: "3x",
        label: "Systems Interoperability",
        description: "Unified API integration enables frictionless real-time data exchange across departments.",
      },
      {
        metric: "0",
        label: "Vendor Lock-in",
        description: "You retain 100% intellectual property ownership of all custom codebase and assets.",
      },
    ],
    faqs: [
      {
        question: "How does IT Development fit alongside Pega and Web Development?",
        answer: "IT Development serves as our overarching custom software engineering practice. We build the custom backend APIs, data pipelines, integrations, and proprietary platforms that connect alongside Pega workflow layers and modern web interfaces.",
      },
      {
        question: "Who owns the intellectual property of the code created?",
        answer: "You do. 100% of all code, architecture designs, automated scripts, and documentation belong completely to your enterprise upon delivery.",
      },
    ],
  },
  {
    id: "artificial-intelligence",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence & Machine Learning",
    h1: "Enterprise AI Solutions, LLMs & Intelligent Automation",
    eyebrow: "INTELLIGENT AUTOMATION",
    shortDescription: "Enterprise Large Language Model (LLM) integration, Retrieval-Augmented Generation (RAG), predictive ML, and autonomous agents.",
    heroParagraph: "Harness the power of generative AI and predictive machine learning to transform manual workflows into automated intelligence. We build enterprise-grade AI solutions with strict data privacy, custom RAG pipelines, fine-tuned domain models, and intelligent process automation.",
    icon: "Sparkles",
    capabilities: [
      {
        title: "Enterprise Retrieval-Augmented Generation (RAG)",
        description: "Build secure AI assistants grounded in your private enterprise documentation, wikis, and databases with zero data leakage.",
        icon: "BookOpen",
      },
      {
        title: "Custom LLM Fine-Tuning & Prompt Engineering",
        description: "Fine-tune open and proprietary models for domain-specific vocabulary, compliance classification, and deterministic responses.",
        icon: "Sliders",
      },
      {
        title: "Intelligent Document Processing (IDP)",
        description: "Automate data extraction, invoice parsing, contract analysis, and claim verification using multimodal AI models.",
        icon: "FileCheck",
      },
      {
        title: "Predictive Machine Learning Pipelines",
        description: "Develop and deploy production ML models for risk assessment, churn prediction, fraud detection, and demand forecasting.",
        icon: "TrendingUp",
      },
      {
        title: "Autonomous Workflow Agents",
        description: "Deploy multi-agent systems that autonomously execute complex multi-step tasks, API calls, and customer inquiries.",
        icon: "Bot",
      },
      {
        title: "AI Safety, Guardrails & Governance",
        description: "Implement deterministic hallucination filters, PII sanitization, toxicity monitoring, and explainable AI auditing.",
        icon: "Shield",
      },
    ],
    deliverables: [
      "Custom Enterprise RAG Pipeline & Vector Database Setup",
      "Fine-Tuned LLM Models & Inference API Endpoints",
      "Intelligent Document Processing Workflows",
      "AI Safety Guardrail Filters & Content Moderation Layer",
      "MLOps Model Monitoring & Retraining Infrastructure",
    ],
    technologies: [
      "OpenAI GPT-4o / Claude 3.5 / Llama 3",
      "LangChain / LlamaIndex",
      "Pinecone / Qdrant / pgvector",
      "PyTorch / Hugging Face",
      "FastAPI / Python",
      "Weights & Biases / MLflow",
    ],
    businessOutcomes: [
      {
        metric: "80%",
        label: "Document Processing Time",
        description: "Automated extraction and classification replaces days of manual document review.",
      },
      {
        metric: "99.8%",
        label: "Data Privacy Compliance",
        description: "Enterprise privacy boundaries prevent sensitive organizational data from leaking into public models.",
      },
      {
        metric: "24/7",
        label: "Autonomous Resolution",
        description: "Intelligent AI agents handle complex tier-1 and tier-2 operational requests instantly.",
      },
    ],
    faqs: [
      {
        question: "How do you protect proprietary company data when using AI models?",
        answer: "We employ private VPC-isolated inference endpoints, zero-data-retention agreements, automated PII scrubbing, and local vector storage so your data is never used to train public models.",
      },
      {
        question: "Can AI be integrated directly with our existing Pega and ERP workflows?",
        answer: "Yes. We specialize in connecting modern AI models directly with Pega Case Management and core ERPs to trigger automated decisions and synthesize operational case notes.",
      },
    ],
  },
  {
    id: "ui-ux",
    slug: "ui-ux",
    title: "UI/UX Design & Product Strategy",
    h1: "Enterprise UI/UX Design Systems & User Experience Architecture",
    eyebrow: "DESIGN SYSTEMS",
    shortDescription: "User research, enterprise design systems, interactive prototyping, and accessible interface design for complex workflows.",
    heroParagraph: "Transform complex enterprise workflows into intuitive, elegant digital interfaces. We combine in-depth user research, interaction design, and scalable design systems to create software that reduces cognitive overload, accelerates user onboarding, and drives measurable productivity gains.",
    icon: "LayoutGrid",
    capabilities: [
      {
        title: "Enterprise UX & Workflow Architecture",
        description: "Untangle intricate operational processes into clean, efficient task flows that maximize user throughput and reduce error rates.",
        icon: "Workflow",
      },
      {
        title: "Design System Engineering (Figma to Code)",
        description: "Create comprehensive multi-brand design systems with reusable tokens, components, accessibility standards, and code mirrors.",
        icon: "Layers",
      },
      {
        title: "User Research & Usability Testing",
        description: "Conduct stakeholder interviews, heuristic evaluations, task-completion benchmarking, and live usability testing sessions.",
        icon: "Users",
      },
      {
        title: "Interactive High-Fidelity Prototyping",
        description: "Build clickable, high-fidelity prototypes to validate business logic and user flows prior to committing engineering resources.",
        icon: "MousePointer",
      },
      {
        title: "Accessibility (WCAG AA/AAA) Auditing",
        description: "Design accessible digital products that pass strict contrast, focus-state, keyboard-navigation, and screen-reader standards.",
        icon: "Eye",
      },
      {
        title: "Pega Constellation & Portal UI Design",
        description: "Craft bespoke enterprise portals utilizing Pega Constellation design guidelines for consistent, modern user experiences.",
        icon: "Layout",
      },
    ],
    deliverables: [
      "Figma Enterprise Design System & Component Library",
      "Interactive High-Fidelity User Prototypes",
      "User Journey Maps & Heuristic Audit Reports",
      "Design Token System (JSON/CSS Variables)",
      "Developer Handoff Specs & Storybook Documentation",
    ],
    technologies: [
      "Figma",
      "Storybook",
      "Tailwind CSS",
      "Radix UI / Pega Constellation",
      "Miro / FigJam",
      "Maze / UsabilityHub",
    ],
    businessOutcomes: [
      {
        metric: "50%",
        label: "Faster Feature Handoff",
        description: "Unified design systems eliminate design-to-code friction and ambiguity for engineers.",
      },
      {
        metric: "60%",
        label: "Reduction in User Errors",
        description: "Intuitive interface patterns and clear visual hierarchy streamline complex data entry.",
      },
      {
        metric: "100%",
        label: "WCAG AA Compliance",
        description: "Universal accessibility built into every color palette, typography rule, and interactive element.",
      },
    ],
    faqs: [
      {
        question: "How do your UI/UX designers collaborate with our engineering team?",
        answer: "Our designers work in lockstep with engineers, delivering atomic Figma components, design tokens, responsive breakpoints, and Storybook components with clear interaction specs.",
      },
      {
        question: "Can you redesign our legacy software interface without disrupting backend services?",
        answer: "Yes. We focus on modernizing the presentation and user journey layer while ensuring seamless compatibility with your existing backend API contracts.",
      },
    ],
  },
  {
    id: "management-services",
    slug: "management-services",
    title: "Management Services",
    h1: "IT Program Management, Agile Governance & Delivery Leadership",
    eyebrow: "DELIVERY GOVERNANCE",
    shortDescription: "Strategic IT program management, PMO leadership, Agile delivery frameworks, and technology vendor governance.",
    heroParagraph: "Ensure high-stakes IT initiatives ship on time, on budget, and aligned with corporate strategy. Our certified Scrum Masters, PMP leaders, and enterprise program directors provide structured delivery governance, proactive risk mitigation, resource optimization, and transparent stakeholder communication.",
    icon: "Briefcase",
    capabilities: [
      {
        title: "IT Program & Project Management (PMO)",
        description: "Lead multi-million-dollar technology transformations with disciplined milestone tracking, budget governance, and risk mitigation.",
        icon: "Target",
      },
      {
        title: "Agile & Scaled Agile (SAFe) Implementation",
        description: "Transform development velocity by implementing Scrum, Kanban, and SAFe frameworks tailored to enterprise environments.",
        icon: "RefreshCw",
      },
      {
        title: "Technology Vendor & Partner Governance",
        description: "Manage system integrators, software vendors, and offshore delivery partners with strict SLA adherence and quality gates.",
        icon: "Users2",
      },
      {
        title: "Release Management & Cutover Planning",
        description: "Orchestrate complex multi-system production cutovers, rollback strategies, and business continuity runbooks.",
        icon: "CheckSquare",
      },
      {
        title: "Resource Capacity & Sprint Planning",
        description: "Optimize engineering resource allocation, velocity forecasting, and skill-gap identification across distributed teams.",
        icon: "BarChart",
      },
      {
        title: "Executive Reporting & KPI Dashboards",
        description: "Provide transparent, real-time executive visibility into project velocity, burn-down metrics, budget utilization, and risks.",
        icon: "FileSpreadsheet",
      },
    ],
    deliverables: [
      "Enterprise Program Charter & Governance Framework",
      "Detailed Work Breakdown Structure & Critical Path Schedule",
      "Risk, Assumption, Issue & Dependency (RAID) Logs",
      "Executive Steering Committee KPI Dashboards",
      "Production Cutover Playbooks & Runbooks",
    ],
    technologies: [
      "Jira / Confluence",
      "Azure DevOps Boards",
      "Smartsheet / Asana",
      "Monday.com",
      "Tableau / Power BI for PMO",
      "SAFe / PMI PMP Standards",
    ],
    businessOutcomes: [
      {
        metric: "98%",
        label: "On-Time Milestone Delivery",
        description: "Disciplined critical-path management eliminates unexpected release slippages.",
      },
      {
        metric: "25%",
        label: "Budget Variance Reduction",
        description: "Proactive scope and vendor management prevents project cost overruns.",
      },
      {
        metric: "100%",
        label: "Executive Transparency",
        description: "Clear weekly RAID dashboards keep leadership aligned and informed at all times.",
      },
    ],
    faqs: [
      {
        question: "How do your IT Program Managers integrate with our internal teams?",
        answer: "We seamlessly embed alongside your internal product owners, engineering managers, and executive sponsors, establishing standardized communication cadences and clear accountability.",
      },
      {
        question: "What certifications do your management consultants hold?",
        answer: "Our leaders hold recognized credentials including PMP (Project Management Professional), PMI-ACP, Certified ScrumMaster (CSM), SAFe Program Consultant (SPC), and ITIL Foundation.",
      },
    ],
  },
];
