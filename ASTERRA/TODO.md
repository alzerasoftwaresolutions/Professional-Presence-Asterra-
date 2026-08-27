# ASTERRA — Implementation Tasks (TODO)

## Phase 2 — Foundation (COMPLETED)
- [x] Initialize `package.json`, Vite configuration, TypeScript configs (`tsconfig.json`), and PostCSS/Tailwind (`tailwind.config.js`).
- [x] Implement `src/styles/globals.css` with Google Fonts (`IBM Plex Sans`, `IBM Plex Serif`, `IBM Plex Mono`), color variables, and container classes (`container-corporate`).
- [x] Build base routing infrastructure in `src/app/routes.tsx` and application shell `src/app/App.tsx`.
- [x] Create core TypeScript interfaces in `src/types/index.ts` for all entities (Company, BusinessUnit, Project, Executive, Insight, JobOpportunity, ContactInquiry).
- [x] Implement base views for all 16 application routes.
- [x] Validate production build (`npm run build`) and automated test suite (`vitest run`).

## Phase 3 — Global UI Primitives & Chrome (CRITICAL - NEXT)
- [ ] Build reusable UI primitives in `src/components/ui/`:
  - [ ] `Button.tsx` (Primary Evergreen, Secondary Outline, Ghost/Link, Disabled states)
  - [ ] `Badge.tsx` (Monospace Eyebrow Badge, Division Tag, Status Badge)
  - [ ] `Heading.tsx` & `Text.tsx` (Type-scale typography wrappers)
  - [ ] `Input.tsx`, `Select.tsx`, `Textarea.tsx` (Corporate form controls with error states)
  - [ ] `Divider.tsx` (Crisp 1px mineral dividers)
- [ ] Build shared composite components in `src/components/shared/`:
  - [ ] `StatCard.tsx` (Top-bordered metric callout with subtitle)
  - [ ] `SectionHeader.tsx` (Eyebrow + H2 + Lead description + Optional Action link)
  - [ ] `Breadcrumbs.tsx` (Hierarchical route breadcrumbs with microdata)
  - [ ] `CTABanner.tsx` (High-conversion full-width corporate inquiry banner)

## Phase 4 — Domain Components & Content Models (HIGH)
- [ ] Assemble typed JSON content fixtures in `src/data/`:
  - [ ] `company.json` (Headquarters, certifications, global footprint metrics)
  - [ ] `businessUnits.json` (4 Divisions: DIV-01 to DIV-04, capabilities, plant specs)
  - [ ] `projects.json` (Flagship case studies, challenge-solution pairs, metrics)
  - [ ] `leadership.json` (Board of Directors & Executive Committee profiles)
  - [ ] `insights.json` (Thought leadership articles, summaries, takeaways)
  - [ ] `careers.json` (Open positions, requirements, benefits)
  - [ ] `navigation.json` (Mega-menu and footer link trees)
- [ ] Build domain components in `src/components/domain/`:
  - [ ] `BusinessUnitCard.tsx` & `DivisionSpecList.tsx`
  - [ ] `ProjectCard.tsx` & `CaseStudyGallery.tsx`
  - [ ] `ExecutiveCard.tsx` & `GovernanceQuote.tsx`
  - [ ] `ArticleCard.tsx` & `ResourceDownloadCard.tsx`
  - [ ] `JobCard.tsx`
  - [ ] `CorporateInquiryForm.tsx` (Department routing, RFQ details, honeypot)

## Phase 5 — Full Editorial Page Implementations (HIGH)
- [ ] `HomePage.tsx` (100% complete editorial sections matching spec)
- [ ] `AboutPage.tsx` (Heritage narrative, interactive timeline 1998-Present, values, ESG)
- [ ] `LeadershipListingPage.tsx` & `ExecutiveProfilePage.tsx`
- [ ] `BusinessListingPage.tsx` & `BusinessUnitDetailPage.tsx`
- [ ] `ProjectsListingPage.tsx` & `ProjectDetailPage.tsx`
- [ ] `InsightsListingPage.tsx` & `InsightDetailPage.tsx`
- [ ] `CareersListingPage.tsx` & `JobDetailPage.tsx`
- [ ] `ContactPage.tsx` & `LegalPage.tsx`

## Phase 6 & 7 — SEO, A11y & Performance (MEDIUM)
- [ ] `PageSeo.tsx` with dynamic JSON-LD Schema (`Corporation`, `Article`, `JobPosting`).
- [ ] Accessibility review (WCAG 2.1 AA keyboard nav, focus indicators, aria labels).
- [ ] Image optimization and WebP curation.

## Phase 8 & 9 — QA, Testing & Handover (LOW)
- [ ] Comprehensive unit tests for all domain components and schemas.
- [ ] Responsive QA across Mobile (375px), Tablet (768px/1024px), Desktop (1440px).
- [ ] Production build and final acceptance review.
