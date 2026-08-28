# Asterra Manufacturing Group — Professional Presence Platform

[![Production Build](https://img.shields.io/badge/Build-Passing-173A35?style=flat-square)](https://github.com/alzerasoftwaresolutions/Professional-Presence-Asterra-)
[![Vitest Unit Tests](https://img.shields.io/badge/Vitest-15%2F15%20Passing-4F7C84?style=flat-square)](https://github.com/alzerasoftwaresolutions/Professional-Presence-Asterra-)
[![Playwright E2E](https://img.shields.io/badge/Playwright-27%2F27%20Passing-3E5A58?style=flat-square)](https://github.com/alzerasoftwaresolutions/Professional-Presence-Asterra-)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x%20Strict-blue?style=flat-square)](https://github.com/alzerasoftwaresolutions/Professional-Presence-Asterra-)
[![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA%20Compliant-success?style=flat-square)](https://github.com/alzerasoftwaresolutions/Professional-Presence-Asterra-)

Enterprise-grade digital flagship and corporate authority web platform for **Asterra Manufacturing Group S.C.**, built according to **Package 03 (Professional Presence)** in the Agency Playbook.

---

## 1. Executive Summary & Brand Overview

**Asterra Manufacturing Group S.C.** is a premier diversified heavy industrial manufacturing conglomerate operating four specialized manufacturing divisions across East Africa:
* **DIV-01: Precision Metals & Heavy Fabrication** (85,000 MT/year, 32,000 m² floor space, EN 1090-2 EXC3).
* **DIV-02: Industrial Materials & Building Products** (45,000 MT/year, UHPC precast panels, steam-cured bridge girders).
* **DIV-03: Industrial Polymers & Engineered Composites** (18,000 MT/year, PE100 municipal water mains, chemical vessels).
* **DIV-04: Automated Equipment & Contract Assemblies** (12,000 MT/year, 5-axis CNC machining, bulk material handling conveyors).

The digital platform is engineered specifically for institutional investors, EPC general contractors, commercial developers, and government infrastructure ministries.

---

## 2. Technology Stack & Key Libraries

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React 18.3** | Declarative component UI engine |
| **Build Tool** | **Vite 5.4** | Ultra-fast HMR and optimized production bundling |
| **Language** | **TypeScript 5.6** | Strict static type checking and zero runtime type errors |
| **Styling** | **Tailwind CSS 3.4 + Vanilla CSS** | Custom design tokens, glassmorphism, and responsive physics |
| **Routing** | **React Router DOM v6.28** | Declarative client-side routing with nested layout shell |
| **Icons** | **Lucide React** | Precision monochrome industrial iconography |
| **Unit Testing** | **Vitest 1.6** | High-speed isolated component and data layer testing |
| **E2E Testing** | **Playwright 1.51** | Multi-viewport browser automation with Page Object Models |
| **SEO & Schema** | **Dynamic JSON-LD** | Native Schema.org `Corporation`, `Article`, and `JobPosting` injection |

---

## 3. Visual Design System & Brand Standards

The platform strictly avoids generic SaaS templates, utilizing a bespoke **Corporate Authority** design system:

### 3.1 Curated Color Palette
* **Deep Evergreen (`#173A35`)**: Primary brand anchor conveying institutional weight and industrial precision.
* **Warm Ivory (`#F3F0E8`)**: Warm, premium paper canvas replacing stark sterile whites.
* **Mineral Teal (`#4F7C84`)**: Technical accent for telemetry badges, active indicators, and focus rings.
* **Forest Shade (`#3E5A58`)**: Secondary structural and border framing.
* **Deep Neutral (`#202B29`)**: High-contrast typographic ink (> 11:1 contrast ratio against Warm Ivory).

### 3.2 Typography Hierarchy
* **Headings**: Editorial serif typography (`IBM Plex Serif` / `Playfair`) for institutional authority.
* **Body**: High-legibility grotesque sans-serif (`IBM Plex Sans` / `Plus Jakarta Sans`).
* **Telemetry & Badges**: Monospace engineering typography (`IBM Plex Mono`).

---

## 4. Architecture & Route Directory Mapping

The application implements a 4-tier modular component architecture:

```text
src/
├── app/                  # Application bootstrap & routing table
│   ├── App.tsx           # Global shell & layout wrapper
│   └── routes.tsx        # 16-route declarative routing table
├── components/
│   ├── ui/               # Pure atomic primitives (Button, Badge, Heading, Input, etc.)
│   ├── shared/           # Cross-cutting composites (Header, Footer, StatCard, PageSeo)
│   └── domain/           # Business entities (BusinessUnitCard, ProjectCard, RFQForm)
├── data/                 # Decoupled typed JSON fixtures & getters
│   ├── company.json      # Corporate facts, milestones, certifications
│   ├── businessUnits.json# DIV-01 to DIV-04 specifications & machines
│   ├── projects.json     # Flagship case studies & measurable results
│   ├── leadership.json   # Executive committee & board governance profiles
│   ├── insights.json     # Technical whitepapers & takeaways
│   └── careers.json      # Open engineering & manufacturing vacancies
├── layouts/              # SiteLayout with mega-menu & mobile navigation drawer
├── pages/                # 15 Rich editorial page views
├── styles/               # Design tokens, custom scrollbars, and elevations
└── types/                # Core TypeScript domain models & schemas
```

### Route Table Overview

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage.tsx` | 9-chapter flagship corporate editorial overview |
| `/about` | `AboutPage.tsx` | Heritage story, mission, values, 25-year timeline, ESG circularity |
| `/business` | `BusinessListingPage.tsx` | 4 Operating Divisions portfolio & group synergy |
| `/business/:slug` | `BusinessUnitDetailPage.tsx` | Plant specs, machine tolerances, standard products, division RFQ |
| `/projects` | `ProjectsListingPage.tsx` | Filterable infrastructure delivery portfolio |
| `/projects/:slug` | `ProjectDetailPage.tsx` | Multi-angle photography, Challenge/Solution tabs, verified results |
| `/leadership` | `LeadershipListingPage.tsx` | Governance committee & Board of Directors directory |
| `/leadership/:slug`| `ExecutiveProfilePage.tsx` | Executive bio, governance quote, credentials, directorships |
| `/insights` | `InsightsListingPage.tsx` | Technical whitepapers & market intelligence monographs |
| `/insights/:slug` | `InsightDetailPage.tsx` | Full technical research paper with key takeaways callout |
| `/careers` | `CareersListingPage.tsx` | Apprenticeship academy, workplace culture, vacancy directory |
| `/careers/:slug` | `JobDetailPage.tsx` | Role requirements, compensation package, direct application form |
| `/contact` | `ContactPage.tsx` | Headquarters directory, division email desks, multi-department RFQ |
| `/privacy` | `LegalPage.tsx` | Enterprise privacy & industrial data confidentiality policy |
| `/terms` | `LegalPage.tsx` | Procurement & manufacturing terms of service |
| `*` | `NotFoundPage.tsx` | Contextual error recovery with direct operating portal links |

---

## 5. Developer Quickstart Guide

### Prerequisites
* **Node.js**: `v18.x` or `v20.x+`
* **npm**: `v9.x` or `v10.x+`

### Installation & Local Development

```bash
# 1. Clone repository
git clone https://github.com/alzerasoftwaresolutions/Professional-Presence-Asterra-.git
cd "Professional Presence"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The application will be accessible locally at `http://localhost:5174/`.

---

## 6. Automated Testing Suite

The codebase enforces a **dual-tier testing strategy** with independent test runners:

### 6.1 Unit Tests (Vitest)
Executes isolated unit and regression tests for data fixtures, primitives, and routing:

```bash
# Run unit tests
npm test
# or
npx vitest run
```

### 6.2 Multi-Viewport End-to-End Tests (Playwright)
Validates critical user journeys across Desktop (1440x900) and Mobile (Pixel 5 touch simulation) using 5 dedicated Page Object Models:

```bash
# Run all Playwright E2E tests
npm run test:e2e
# or
npx playwright test

# View interactive HTML test report
npx playwright show-report
```

---

## 7. Production Build & Deployment Guide

Compile the optimized static bundle:

```bash
npm run build
```

This compiles a clean, minified production bundle in `dist/` with gzip sizes under 110kB for JS and 10kB for CSS.

### Deployment Targets

* **Vercel / Netlify**: Connect repository to root with build command `npm run build` and publish directory `dist`. Set Single Page App (SPA) rewrite rules to `/index.html`.
* **Nginx Static Server**: Copy `dist/*` to `/var/www/html/` with `try_files $uri $uri/ /index.html;`.
* **Cloudflare Pages / AWS S3**: Deploy `dist/` directly with standard SPA error routing.

---

## 8. Final Acceptance & Quality Matrix

| Acceptance Dimension | Standard / Tool | Target | Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Unit Verification** | Vitest (`v1.6.1`) | 100% pass | **15/15 passed** |  PASSED |
| **E2E Critical User Journeys** | Playwright (`v1.51`) | Multi-viewport pass | **27/27 passed** |  PASSED |
| **Type Safety** | TypeScript (`tsc --noEmit`) | 0 errors | **0 errors** |  PASSED |
| **Production Build** | Vite 5 Production Bundle | Clean minified dist | **Compiled in 10.43s** |  PASSED |
| **Offline Asset Resilience** | Local Bundling (`public/images/`) | 0 CDN dependencies | **27 local assets** |  PASSED |
| **Accessibility** | WCAG 2.1 AA | > 4.5:1 contrast, skip links | **> 11:1 contrast (AAA)** |  PASSED |
| **SEO & Structured Data** | JSON-LD + Meta Tags | 100% route coverage | **Active on all routes** |  PASSED |

---

## 9. License & Handover

Copyright © 2026 Asterra Manufacturing Group S.C.  
Developed by Alzera Software Solutions under the Agency Playbook (Package 03 — Professional Presence). All rights reserved.
