# ASTERRA Changelog

All notable changes to the Asterra Manufacturing Group (Package 3 — Professional Presence) project will be documented in this file.

## [Unreleased]

### Added
- **Phase 4 (Content Data Layer & Domain Components Complete)**:
  - Assembled comprehensive structured JSON data fixtures in `src/data/`:
    - `company.json`: 25-year corporate story, milestones (1998–2024), values, certifications, and global footprint statistics.
    - `businessUnits.json`: 4 specialized operating divisions (`DIV-01` to `DIV-04`) with detailed plant specifications, capacities, and capabilities.
    - `projects.json`: Flagship infrastructure case studies with verified metrics (`awash-heavy-rail-overpass`, `dire-dawa-industrial-steel-terminal`, etc.).
    - `leadership.json`: Executive Committee and Board of Directors profiles with governance quotes and credentials.
    - `insights.json`: Authoritative engineering whitepapers and technical research papers with executive takeaways.
    - `careers.json`: Open engineering and plant management job postings with full specifications.
    - `navigation.json`: Centralized navigation and footer link hierarchy.
  - Created type-safe data access layer in `src/data/index.ts` with getters for all domain models.
  - Built domain components in `src/components/domain/`:
    - `BusinessUnitCard.tsx` (Grid & featured layouts with technical capability lists)
    - `ProjectCard.tsx` (Infrastructure case study cards with metric callouts)
    - `ExecutiveCard.tsx` (Executive governance profile cards)
    - `ArticleCard.tsx` (Research whitepaper cards with reading times)
    - `JobCard.tsx` (Career vacancy cards)
    - `CorporateInquiryForm.tsx` (Multi-department routing, RFQ parameters, honeypot spam protection, reference ID generation)

- **Phase 3 (Global UI Primitives & Chrome Complete)**:
  - Built foundational UI primitives in `src/components/ui/`:
    - `Button.tsx` (Primary Evergreen, Secondary Outline, Accent Teal, Ghost, and White variants)
    - `Badge.tsx` (Mono uppercase eyebrow, division tags, status variants)
    - `Heading.tsx` & `Text.tsx` (Typography components with exact IBM Plex scale)
    - `Divider.tsx` (1px mineral dividers)
    - `Input.tsx`, `Select.tsx`, `Textarea.tsx` (WCAG 2.1 AA compliant form controls)
  - Built shared composites in `src/components/shared/`:
    - `StatCard.tsx` (Top-bordered metric callout)
    - `SectionHeader.tsx` (Eyebrow + H2 + lead text + optional CTA link)
    - `Breadcrumbs.tsx` (Hierarchical route breadcrumbs with microdata)
    - `CTABanner.tsx` (Full-width high-conversion chapter banner)
    - `PageHeader.tsx` (Standardized editorial banner for inner pages)

### Changed
- Resolved `TR-002` (Curated industrial imagery references) and `TR-003` (Content schemas unified).

### QA & Verification
- `npx vitest run`: **14/14 tests passing (100%)** across 4 test suites (`data.test.ts`, `primitives.test.ts`, `domain.test.ts`, `routes.test.ts`).
- `npx tsc --noEmit`: 0 errors.
- `npm run build`: Production bundle generated cleanly in 3.49s (dist/ CSS: 6.05 kB gzip, JS: 63.61 kB gzip).
