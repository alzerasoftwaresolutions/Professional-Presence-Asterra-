# ASTERRA — Implementation Tasks (TODO)

## Phase 2 — Foundation (COMPLETED)
- [x] Initialize `package.json`, Vite configuration, TypeScript configs (`tsconfig.json`), and PostCSS/Tailwind (`tailwind.config.js`).
- [x] Implement `src/styles/globals.css` with Google Fonts (`IBM Plex Sans`, `IBM Plex Serif`, `IBM Plex Mono`), color variables, and container classes (`container-corporate`).
- [x] Build base routing infrastructure in `src/app/routes.tsx` and application shell `src/app/App.tsx`.
- [x] Create core TypeScript interfaces in `src/types/index.ts` for all entities.
- [x] Implement base views for all 16 application routes.
- [x] Validate production build (`npm run build`) and automated test suite (`vitest run`).

## Phase 3 & 4 — UI Primitives & Content Data Models (COMPLETED)
- [x] Build reusable UI primitives in `src/components/ui/` (`Button`, `Badge`, `Heading`, `Text`, `Divider`, `Input`, `Select`, `Textarea`).
- [x] Build shared composite components in `src/components/shared/` (`StatCard`, `SectionHeader`, `Breadcrumbs`, `CTABanner`, `PageHeader`).
- [x] Assemble typed JSON content fixtures in `src/data/` (`company.json`, `businessUnits.json`, `projects.json`, `leadership.json`, `insights.json`, `careers.json`, `navigation.json`).
- [x] Build domain components in `src/components/domain/` (`BusinessUnitCard`, `ProjectCard`, `ExecutiveCard`, `ArticleCard`, `JobCard`, `CorporateInquiryForm`).
- [x] Create automated test suites for data fixtures and components (**14/14 tests passing**).

## Phase 5 — Full Editorial Page Implementations (CRITICAL - NEXT)
- [ ] `HomePage.tsx` — Full 9-section editorial flow:
  - Hero with group metrics & primary CTA
  - Evidence of Scale 4-stat band
  - Corporate Heritage & Capabilities narrative
  - 4 Operating Divisions Grid (DIV-01 to DIV-04)
  - Flagship Case Study showcase (`Awash Heavy Rail Transit Overpass`)
  - Corporate Governance & Executive Committee preview
  - International Accreditations & Quality standards wall
  - Technical Insights & Whitepaper previews
  - Full-width Corporate RFQ CTABanner
- [ ] `AboutPage.tsx` — 25-year heritage story, interactive milestones timeline (1998–2024), core values, ESG circularity, and executive directorships.
- [ ] `LeadershipListingPage.tsx` & `ExecutiveProfilePage.tsx` (`/leadership/:slug`).
- [ ] `BusinessListingPage.tsx` & `BusinessUnitDetailPage.tsx` (`/business/:slug`).
- [ ] `ProjectsListingPage.tsx` & `ProjectDetailPage.tsx` (`/projects/:slug`).
- [ ] `InsightsListingPage.tsx` & `InsightDetailPage.tsx` (`/insights/:slug`).
- [ ] `CareersListingPage.tsx` & `JobDetailPage.tsx` (`/careers/:slug`).
- [ ] `ContactPage.tsx` & `LegalPage.tsx` (`/privacy`, `/terms`).

## Phase 6 & 7 — SEO, A11y & Performance (MEDIUM)
- [ ] `PageSeo.tsx` with dynamic JSON-LD Schema (`Corporation`, `Article`, `JobPosting`).
- [ ] Accessibility review (WCAG 2.1 AA keyboard nav, focus indicators, aria labels).
- [ ] Image optimization and WebP curation.

## Phase 8 & 9 — QA, Testing & Handover (LOW)
- [ ] Comprehensive unit tests for all domain components and schemas.
- [ ] Responsive QA across Mobile (375px), Tablet (768px/1024px), Desktop (1440px).
- [ ] Production build and final acceptance review.
