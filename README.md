# NForce One — Enterprise Website Rebuild

A high-performance, production-ready rebuild of the NForce One B2B IT consultancy website. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP 3.x, Lenis smooth scrolling, and a strictly typed content architecture.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components by default)
- **Language**: TypeScript (Strict mode enabled, 0 untyped `any`)
- **Styling**: Tailwind CSS with official NF1 logo color tokens (Pitch Black `#050505`, Crisp White `#FFFFFF`, Crimson Red `#E50914`, Metallic Silver `#9CA3AF`)
- **Branding**: Official NF1 Vector Logo & "Let's Do IT!" Mark
- **Motion & Interaction**: GSAP 3.x (`@gsap/react`, `ScrollTrigger`, `useGSAP`)
- **Smooth Scroll**: Lenis integrated with GSAP ticker
- **Content Engine**: Typed TypeScript data modules with Zod validation schemas
- **Form Handling**: Route Handler (`/api/contact`) with Zod validation, honeypot spam protection, and Resend email integration

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type-Check and Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with fonts, JSON-LD, smooth scroll, Nav & Footer
│   ├── template.tsx               # Non-blocking GSAP route transitions (<300ms)
│   ├── page.tsx                   # Homepage (Hero, Trust strip, Value pillars, 12 Services, Case studies, Insights)
│   ├── pega/page.tsx              # Flagship Pega Implementation & Architecture hub
│   ├── services/
│   │   ├── page.tsx               # Full services directory
│   │   └── [slug]/page.tsx        # All 12 individual service capability pages
│   ├── industries/
│   │   ├── page.tsx               # Industry verticals hub
│   │   └── [slug]/page.tsx        # Vertical pages (Insurance, Banking, Healthcare, Retail)
│   ├── case-studies/
│   │   ├── page.tsx               # Case studies gallery with interactive industry filters
│   │   └── [slug]/page.tsx        # In-depth case study breakdown
│   ├── about/page.tsx             # Mission, values, leadership team & Pega certifications
│   ├── careers/page.tsx           # Culture, benefits, active jobs & application modal
│   ├── insights/
│   │   ├── page.tsx               # Technical thought leadership hub
│   │   └── [slug]/page.tsx        # Technical article reader
│   ├── contact/page.tsx           # Contact form, direct phone/email, office information
│   ├── privacy-policy/page.tsx    # Privacy policy
│   ├── terms-of-service/page.tsx  # Terms of service
│   ├── not-found.tsx              # Custom 404 error page
│   ├── sitemap.ts                 # Auto-generated XML sitemap
│   ├── robots.ts                  # Search engine crawler configuration
│   └── api/contact/route.ts       # Contact form endpoint with Zod validation & Resend
├── components/
│   ├── layout/                    # Header, Footer, SmoothScroll
│   ├── ui/                        # Button, Badge, SectionHeader, Marquee, Counter, FeatureRow
│   ├── cards/                     # ServiceCard, CaseStudyCard, TeamCard, InsightCard, JobCard
│   └── forms/                     # ContactForm
├── content/                       # Typed content modules (services, caseStudies, team, insights, jobs, industries)
└── lib/                           # Animation hooks, Zod schemas, utilities
```

---

## ✍️ How to Add or Edit Typed Content

All website content lives directly in the repository under `/content` and is validated via Zod schemas in `lib/schema.ts`. Content changes are type-checked at build time.

### 1. Adding / Updating a Service
Edit `content/services.ts`. Ensure all fields conform to `ServiceSchema`:
- `id`, `slug`, `title`, `h1` (distinct descriptive heading), `eyebrow`, `shortDescription`, `heroParagraph`
- `capabilities`: Array of 5-8 capability objects with `title` and `description`
- `deliverables`: Array of deliverable strings
- `technologies`: Array of tech stack items
- `businessOutcomes`: Array of `{ metric, label, description }`
- `faqs`: Array of `{ question, answer }`

### 2. Adding a Case Study
Edit `content/caseStudies.ts`. Each entry contains `client`, `industry`, `metrics`, `challenge`, `solution`, `architecturePoints`, and `impact`.

### 3. Adding a Job Opening
Edit `content/jobs.ts`. Set `active: true`, define `responsibilities`, and `qualifications`.

### 4. Publishing an Insight / Article
Edit `content/insights.ts`. Add headings and markdown paragraphs in the `content` array.

---

## 🔑 Environment Variables

To enable live email delivery from the contact form, create a `.env.local` file:
```env
RESEND_API_KEY=re_your_resend_api_key_here
CONTACT_NOTIFICATION_EMAIL=contact@nforce.one
```
*(If no API key is provided, form submissions will log to the console with zero errors).*
