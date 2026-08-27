# ASTERRA Changelog

All notable changes to the Asterra Manufacturing Group (Package 3 — Professional Presence) project will be documented in this file.

## [Unreleased]

### Added
- **Phase 5 (Full Editorial Page Compositions Complete)**:
  - Implemented all 15 application page shells into rich editorial compositions:
    - `HomePage.tsx`: 9 distinct editorial chapters (Hero with live group metrics, 4-stat scale band, 25-year corporate story preview, 4 operating divisions grid, featured case study showcase, executive governance preview, ISO evidence wall, technical whitepaper insights, full-width RFQ CTABanner).
    - `AboutPage.tsx`: Quarter-century heritage narrative, institutional mission & vision, 4 core values (Precision, Integrity, Safety, Stewardship), interactive milestone timeline (1998–2024), and ESG circular metallurgy / solar energy section.
    - `BusinessListingPage.tsx`: Group synergy overview, 4-division fast-fact metrics, and detailed featured cards.
    - `BusinessUnitDetailPage.tsx`: Dynamic route matching `/business/:slug` displaying plant specifications, machinery capabilities, standard products, related project case studies, and embedded division RFQ form.
    - `ProjectsListingPage.tsx`: Sector filter bar (`Transport & Rail`, `Industrial Logistics`, `Maritime & Dry Ports`, `Water Infrastructure`), featured flagship delivery (`Awash Heavy Rail Transit Overpass`), and case study portfolio grid.
    - `ProjectDetailPage.tsx`: Dynamic route matching `/projects/:slug` displaying client data, multi-image gallery, challenge vs. solution comparison, engineering execution details, verified results sidebar, and delivering division card.
    - `LeadershipListingPage.tsx`: Governance oversight framework, Executive Committee grid, and Board of Directors grid.
    - `ExecutiveProfilePage.tsx`: Dynamic route matching `/leadership/:slug` displaying executive portrait, governance quote, career highlights, academic degrees, professional fellowships, and directorships.
    - `InsightsListingPage.tsx`: Engineering discipline filter bar, featured technical paper, and research whitepapers grid.
    - `InsightDetailPage.tsx`: Dynamic route matching `/insights/:slug` displaying author bio, read time, key takeaways callout, full editorial Markdown sections, and PDF report download.
    - `CareersListingPage.tsx`: Workplace culture pillars, Asterra Technical Apprenticeship Academy showcase (800+ graduates), department vacancy filter, and open position cards.
    - `JobDetailPage.tsx`: Dynamic route matching `/careers/:slug` displaying role accountabilities, candidate qualifications, compensation/benefits, and encrypted job application form.
    - `ContactPage.tsx`: Group headquarters and manufacturing complexes directory, direct department email desks, and multi-department RFQ routing form with honeypot spam protection.
    - `LegalPage.tsx`: Dual-mode compliance view serving `/privacy` and `/terms` with data confidentiality and procurement terms.
    - `NotFoundPage.tsx`: Branded 404 error page with direct navigation cards back to active operating portals.
  - Added `PageSeo.tsx` component injecting dynamic `<title>`, `<meta name="description">`, OpenGraph tags, and Schema.org JSON-LD structured data (`Corporation`, `Article`, `JobPosting`) across all routes.
  - Enhanced `SiteLayout.tsx` with interactive desktop hover mega-dropdown for "Business Units" and responsive mobile navigation drawer.

### QA & Verification
- `npx vitest run`: **15/15 tests passing (100%)** across 5 test suites (`data.test.ts`, `primitives.test.ts`, `domain.test.ts`, `pages.test.ts`, `routes.test.ts`).
- `npx tsc --noEmit`: 0 type errors.
- `npm run build`: Production bundle built in 5.74s (dist/ CSS: 6.62 kB gzip, JS: 98.61 kB gzip).
