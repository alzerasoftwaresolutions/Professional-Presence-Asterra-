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
