import { z } from "zod";

export const CapabilitySchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const ServiceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  h1: z.string(),
  eyebrow: z.string(),
  shortDescription: z.string(),
  heroParagraph: z.string(),
  icon: z.string(),
  badge: z.string().optional(),
  capabilities: z.array(CapabilitySchema),
  deliverables: z.array(z.string()),
  technologies: z.array(z.string()),
  businessOutcomes: z.array(z.object({
    metric: z.string(),
    label: z.string(),
    description: z.string(),
  })),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })),
});

export type Service = z.infer<typeof ServiceSchema>;
export type Capability = z.infer<typeof CapabilitySchema>;

export const CaseStudySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  client: z.string(),
  industry: z.string(),
  serviceCategory: z.string(),
  heroHeadline: z.string(),
  summary: z.string(),
  metrics: z.array(z.object({
    value: z.string(),
    suffix: z.string().optional(),
    label: z.string(),
  })),
  challenge: z.array(z.string()),
  solution: z.array(z.string()),
  architecturePoints: z.array(z.string()),
  impact: z.array(z.string()),
  testimonial: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string(),
  }).optional(),
  featured: z.boolean().default(false),
});

export type CaseStudy = z.infer<typeof CaseStudySchema>;

export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  certifications: z.array(z.string()),
  linkedin: z.string().optional(),
  specialization: z.string(),
  featured: z.boolean().default(false),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;

export const InsightSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  category: z.string(),
  readTime: z.string(),
  publishedAt: z.string(),
  author: z.string(),
  summary: z.string(),
  content: z.array(z.object({
    heading: z.string(),
    body: z.string(),
  })),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
});

export type Insight = z.infer<typeof InsightSchema>;

export const JobSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  department: z.string(),
  location: z.string(),
  type: z.enum(["Full-Time", "Contract", "Hybrid", "Remote"]),
  experience: z.string(),
  summary: z.string(),
  responsibilities: z.array(z.string()),
  qualifications: z.array(z.string()),
  niceToHave: z.array(z.string()).optional(),
  active: z.boolean().default(true),
});

export type Job = z.infer<typeof JobSchema>;

export const IndustrySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  headline: z.string(),
  description: z.string(),
  challenges: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })),
  solutions: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })),
  relevantServices: z.array(z.string()),
  metrics: z.array(z.object({
    value: z.string(),
    label: z.string(),
  })),
});

export type Industry = z.infer<typeof IndustrySchema>;

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service of interest"),
  message: z.string().min(10, "Please provide more details about your project (at least 10 characters)"),
  website: z.string().max(0, "Spam detected").optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
