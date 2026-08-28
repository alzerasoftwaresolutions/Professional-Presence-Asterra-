# ASTERRA Changelog

All notable changes to the Asterra Manufacturing Group (Package 3 — Professional Presence) project are documented in this file.

## [1.0.0] - 2026-08-28 — Official Production Release

### Added
- **Complete Editorial Architecture (All 15 Pages)**:
  - `HomePage.tsx`: 9 distinct chapters (Hero, 4-Stat Band, Corporate Narrative, 4 Operating Divisions Grid, Flagship Project Showcase, Executive Committee Preview, ISO Evidence Wall, Technical Insights, RFQ CTABanner).
  - `AboutPage.tsx`: Quarter-century heritage narrative, institutional mission & vision, 4 core values, 25-year interactive milestone timeline (1998–2024), ESG circular metallurgy section.
  - `BusinessListingPage.tsx`: Group synergy overview, 4-division fast-fact metrics, and detailed featured cards.
  - `BusinessUnitDetailPage.tsx`: Dynamic route matching `/business/:slug` displaying plant specs, machinery capabilities, products, case studies, and embedded division RFQ form.
  - `ProjectsListingPage.tsx`: Sector filter bar (`Transport & Rail`, `Industrial Logistics`, `Maritime & Dry Ports`, `Water Infrastructure`), flagship delivery showcase, and portfolio grid.
  - `ProjectDetailPage.tsx`: Dynamic route matching `/projects/:slug` displaying client data, multi-angle photography viewer, Challenge vs. Solution vs. Execution tabs, verified impact metrics, and delivering division card.
  - `LeadershipListingPage.tsx`: Governance oversight framework, Executive Committee grid, and Board of Directors grid.
  - `ExecutiveProfilePage.tsx`: Dynamic route matching `/leadership/:slug` displaying executive portrait, governance quote, career highlights, academic degrees, professional fellowships, and directorships.
  - `InsightsListingPage.tsx`: Engineering discipline filter bar, featured technical paper, and research whitepapers grid.
  - `InsightDetailPage.tsx`: Dynamic route matching `/insights/:slug` displaying author bio, read time, key takeaways callout, full editorial Markdown sections, and PDF report download.
  - `CareersListingPage.tsx`: Workplace culture pillars, Asterra Technical Apprenticeship Academy showcase (800+ graduates), department vacancy filter, and open position cards.
  - `JobDetailPage.tsx`: Dynamic route matching `/careers/:slug` displaying role accountabilities, candidate qualifications, compensation/benefits, and encrypted job application form.
  - `ContactPage.tsx`: Group headquarters and manufacturing complexes directory, direct department email desks, and multi-department RFQ routing form with honeypot spam protection.
  - `LegalPage.tsx`: Dual-mode compliance view serving `/privacy` and `/terms`.
  - `NotFoundPage.tsx`: Branded 404 error page with direct navigation cards back to active operating portals.
- **Local Industrial Asset Caching (`public/images/`)**:
  - Bundled 27 high-resolution local assets across `divisions/`, `projects/`, `leadership/`, and `insights/` for 100% offline resilience and sub-second LCP.
- **Impeccable Design System & Micro-Interactions (`src/styles/globals.css`)**:
  - Refined card elevation shadows (`0 12px 32px -4px rgba(23, 58, 53, 0.09)`), tactile button active scaling (`active:scale-[0.97]`), custom industrial scrollbar, and brand-matched text selection (`::selection`).
- **Comprehensive E2E Testing Suite (Playwright)**:
  - Configured multi-viewport execution (Desktop Chromium 1440x900 and Mobile Chrome Pixel 5).
  - Built 5 Page Object Models (`SiteNavigation`, `CorporateInquiry`, `DivisionConsole`, `ProjectCaseStudy`, `DirectoryFilters`).
  - 27 E2E tests validating critical user journeys.
- **SEO & JSON-LD Structured Data**:
  - Dynamic OpenGraph and Schema.org metadata on every page via `PageSeo.tsx`.

### Quality & Verification Matrix
- **Playwright E2E Tests**: **27 passed**, 5 skipped (viewport isolation), 0 failed.
- **Vitest Unit Tests**: **15 passed** across 5 test suites.
- **TypeScript**: **0 errors** (`npx tsc --noEmit` clean exit code 0).
- **Production Build**: Compiled in 10.43s via Vite 5.
