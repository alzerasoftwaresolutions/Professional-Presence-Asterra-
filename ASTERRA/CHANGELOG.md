# ASTERRA Changelog

All notable changes to the Asterra Manufacturing Group (Package 3 — Professional Presence) project will be documented in this file.

## [Unreleased]

### Added
- **Phase 2 (Foundation & Tooling Complete)**:
  - Initialized application codebase with React 18, Vite 5, TypeScript 5, and Tailwind CSS 3.4.
  - Configured Asterra design system tokens in `tailwind.config.js` and `src/styles/globals.css` (Evergreen `#173A35`, Mineral Teal `#4F7C84`, Warm Ivory `#F3F0E8`, Charcoal `#202B29`).
  - Integrated typography hierarchy supporting `IBM Plex Sans`, `IBM Plex Serif`, and `IBM Plex Mono` via Google Fonts.
  - Implemented responsive `SiteLayout.tsx` featuring top utility header, sticky main header, full-screen mobile drawer with scroll-lock, and 5-column corporate footer.
  - Built declarative routing registry in `src/app/routes.tsx` covering all 8 core modules and dynamic detail routes.
  - Created strict TypeScript data interfaces in `src/types/index.ts` conforming to `Asterra_Content & Data_Implementation_Specification.md`.
  - Implemented initial foundation page views for all 13 routes (`Home`, `About`, `Leadership`, `ExecutiveProfile`, `Business`, `BusinessUnitDetail`, `Projects`, `ProjectDetail`, `Insights`, `InsightDetail`, `Careers`, `JobDetail`, `Contact`, `Legal`, `NotFound`).
  - Added automated Vitest routing test suite (`src/app/__tests__/routes.test.ts`).

### Changed
- Refactored imports across all page components to enforce strict TypeScript zero-unused-locals compliance.

### Fixed
- Resolved `TR-001` (Application codebase scaffolding).

### Removed
- N/A.

### Refactored
- Structured the project hierarchy to strictly match the 5-tier component and routing blueprint in `04_IMPLEMENTATION/`.

### Documentation
- Updated `IMPLEMENTATION_STATUS.md`, `TRREVIEW.md`, `DECISIONS.md`, and `TODO.md` to reflect Phase 2 completion.

### QA
- Validated production build (`npm run build`) with zero errors (CSS gzip: 4.15 kB, JS gzip: 63.61 kB).
- Validated TypeScript type-checking (`npx tsc --noEmit`) with 0 errors.
- Validated automated test suite (`npx vitest run`) with 2/2 tests passing (100%).
