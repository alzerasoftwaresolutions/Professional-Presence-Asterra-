# ASTERRA — Architecture & Technical Decisions

## ADR-001 — Technology Stack Selection
- **Status:** Accepted
- **Context:** Package 3 (Professional Presence) requires an enterprise-grade, high-performance, maintainable frontend architecture that compiles to static/client bundles with zero server-side overhead.
- **Decision:** Use **React 18 + Vite 5 + TypeScript 5 + Tailwind CSS 3.4 + React Router v6**.
- **Consequences:** Provides lightning-fast build and HMR times, strict type safety, zero runtime CSS injection, and seamless deployment to static CDNs (Vercel, Netlify, Cloudflare Pages, S3).

---

## ADR-002 — Component Hierarchy Architecture
- **Status:** Accepted
- **Context:** In accordance with `Asterra_Component_Architecture.md`, components must avoid monolithic duplication across the 8 core modules.
- **Decision:** Implement a 4-tier component taxonomy:
  1. `components/ui/` (Foundational primitives: Button, Heading, Text, Badge, Input, Divider)
  2. `components/shared/` (Site-wide composites: Header, Footer, MobileNav, StatCard, Breadcrumb, PageHeader)
  3. `components/domain/` (Business-domain specific: BusinessUnitCard, ProjectCard, ExecutiveCard, ArticleCard, CareerCard)
  4. `pages/` (Pure declarative compositions that consume content data models)
- **Consequences:** Guarantees strict visual consistency with Template 01 (Corporate Authority) while allowing each page to retain its distinctive editorial layout.

---

## ADR-003 — Data Decoupling & Content Architecture
- **Status:** Accepted
- **Context:** In accordance with `Asterra_Content & Data_Implementation_Specification.md`, business data must never be hardcoded into UI presentation elements.
- **Decision:** Store all structured corporate data (Business Units, Projects, Leadership, Insights, Careers, Site Config) in typed JSON fixtures under `src/data/`, backed by strict TypeScript interfaces in `src/types/index.ts`.
- **Consequences:** Enables content editors to update company facts, metrics, and case studies without modifying JSX code or risking layout breaks.

---

## ADR-004 — Design System & Color Palette
- **Status:** Accepted
- **Context:** Asterra Manufacturing Group must project industrial credibility, scale, precision, and longevity without copying the construction navy/copper palette of Package 2.
- **Decision:** Standardize on:
  - Primary: Deep Evergreen (`#173A35`, hover `#22564F`, active `#102A27`)
  - Secondary: Mineral Green-Gray (`#3E5A58`)
  - Accent: Mineral Teal (`#4F7C84`, hover `#3E666D`)
  - Canvas: Warm Ivory (`#F3F0E8`)
  - Surface: Pure White (`#FFFFFF`)
  - Ink: Deep Charcoal (`#202B29`)
  - Body: Muted Slate (`#46514F`)
  - Borders: Crisp Mineral (`#D9DDD8`, strong `#B8C2BD`)
- **Consequences:** Establishes a distinct corporate authority tone with high contrast and WCAG AAA compliance.

---

## ADR-005 — Foundation Scaffolding & Layout Token Implementation
- **Status:** Accepted
- **Context:** Phase 2 Foundation requires a strict, performant, and type-checked baseline for all routing, layouts, and typography.
- **Decision:** Implemented `SiteLayout.tsx` with top utility bar, sticky desktop header, full-screen mobile menu with scroll lock, and 5-column footer. Added `container-corporate` (1440px max-width) and Google Fonts `IBM Plex Sans`, `IBM Plex Serif`, and `IBM Plex Mono`.
- **Consequences:** All 16 routes build cleanly into a sub-65kB gzipped production bundle.

---

## ADR-006 — Dual-Tier Automated Testing Strategy (Unit + E2E)
- **Status:** Accepted
- **Context:** The application requires high regression prevention across both data/component units and real-browser viewport interactions without test runner collisions.
- **Decision:** Use **Vitest** for fast isolated unit tests in `src/**/*.{test,spec}.{ts,tsx}` and **Playwright** for multi-viewport E2E testing in `e2e/specs/` using Page Object Models.
- **Consequences:** Provides comprehensive test coverage (15 unit tests + 27 E2E tests) across Desktop Chromium (1440x900) and Mobile Chrome (Pixel 5 touch simulation).

---

## ADR-007 — Local Industrial Asset Caching & Offline Resilience
- **Status:** Accepted
- **Context:** Reliance on external image CDNs (e.g. Unsplash) introduces external network latency, risk of 404 dead links, and slower Largest Contentful Paint (LCP).
- **Decision:** Download, bundle, and cache all 27 high-resolution industrial photography and executive assets locally in `public/images/` categorized by domain entity (`divisions/`, `projects/`, `leadership/`, `insights/`).
- **Consequences:** Guarantees 100% offline resilience, instant asset decoding, zero external network dependency, and sub-second LCP.

---

## ADR-008 — Impeccable Responsive Touch Ergonomics
- **Status:** Accepted
- **Context:** Complex industrial telemetry tables and multi-division consoles can degrade on mobile and tablet viewports.
- **Decision:** Enforce `min-h-[44px]` touch targets, horizontal touch-scrolling filter bars with hidden scrollbars (`no-scrollbar`), and in-place expandable accordions replacing hover popovers on mobile.
- **Consequences:** Delivers seamless ergonomics and prevents layout shifts across mobile, tablet, and high-DPI desktop viewports.
