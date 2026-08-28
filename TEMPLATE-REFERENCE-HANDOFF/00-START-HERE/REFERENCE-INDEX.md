# Professional Presence — Master Reference Index

This document catalogs every curated reference file included in the `TEMPLATE-REFERENCE-HANDOFF/` package, detailing its category, requirement level, and the specific structural lessons it provides.

---

## 1. Included Reference Files Catalog

| # | File Path in Handoff Package | Category | Requirement | What It Demonstrates / Structural Lesson |
|---|---|---|---|---|
| **01** | `01-SHARED-FOUNDATIONS/Template_01_Corporate_Authority.md` | **Shared Foundation** | **Required** | Foundational archetype definition for Template 01 (Authority, Scale, Trust) establishing the baseline benchmark. |
| **02** | `01-SHARED-FOUNDATIONS/Template_02_Editorial_Expertise.md` | **Shared Foundation** | **Required (T02)** | Dedicated brief and design manual requirements for Template 02 (Knowledge, Expertise, Impact). |
| **03** | `01-SHARED-FOUNDATIONS/Template_03_Premium_Experience.md` | **Shared Foundation** | **Required (T03)** | Dedicated brief and design manual requirements for Template 03 (Prestige, Emotion, Brand Immersion). |
| **04** | `02-UNIVERSAL-STANDARDS/Universal_Design_Analysis.md` | **Universal Standard** | **Required** | Universal methodology for reverse-engineering design references into tokens, layout physics, and accessibility. |
| **05** | `02-UNIVERSAL-STANDARDS/Universal_SEO_Analytics_Playbook.md` | **Universal Standard** | **Required** | Universal SEO auditing framework covering crawlability, JSON-LD Schema.org entities, on-page optimization, and analytics. |
| **06** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/01-Architecture-Routing/Asterra_Routing_Architecture.md` | **T01 Reference** | **Required** | Gold-standard route hierarchy mapping URLs (`/business/:slug`, `/projects/:slug`, etc.) to page types and SEO parameters. |
| **07** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/01-Architecture-Routing/Asterra_Page_Architecture.md` | **T01 Reference** | **Recommended** | Demonstrates how the 15-page information architecture and navigation trees are organized without monolithic bloat. |
| **08** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/02-Design-System/Asterra_Design_System.md` | **T01 Reference** | **Required** | Comprehensive design manual structure (Color Tokens, Typography Hierarchy, Spacing Rhythm, Elevations, Form States). |
| **09** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/Homepage_Page_Specification.md` | **T01 Reference** | **Required** | Complete 9-chapter editorial landing page specification (Slots, component mapping, responsive behavior, acceptance criteria). |
| **10** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/About_Corporate_Story_Specification.md` | **T01 Reference** | **Recommended** | Multi-era heritage story specification, timeline mechanics, core values grid, and ESG disclosure structures. |
| **11** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/Business_Unit_Detail_Specification.md` | **T01 Reference** | **Required** | Dynamic operational detail page specification (`/business/:slug`) with plant telemetry, machinery tables, and embedded RFQ. |
| **12** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/Project_Case_Study_Detailed_Specification.md` | **T01 Reference** | **Required** | Dynamic project case study specification (`/projects/:slug`) with multi-angle photography, Challenge vs Solution tabs, and metrics. |
| **13** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/04-Components/Asterra_Component_Architecture.md` | **T01 Reference** | **Required** | 4-tier component taxonomy (`ui/`, `shared/`, `domain/`, `pages/`), prop contracts, slots, and reusability rules. |
| **14** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/05-Content-Model/Asterra_Content_Data_Implementation_Specification.md` | **T01 Reference** | **Required** | Data decoupling architecture: JSON fixture schemas (`company.json`, `projects.json`), TypeScript interfaces, and getter functions. |
| **15** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/06-SEO-Implementation/Asterra_SEO_Implementation_Specification.md` | **T01 Reference** | **Required** | Template-level SEO implementation: Dynamic meta tags, OpenGraph images, canonical URLs, and JSON-LD structured data. |
| **16** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/07-Responsive-Interaction/Asterra_Responsive_Behavior_Breakpoint_Specification.md` | **T01 Reference** | **Required** | Responsive breakpoint tokens (`640px`, `768px`, `1024px`, `1280px`, `1440px`), touch target rules (`>=44px`), and container constraints. |
| **17** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/07-Responsive-Interaction/Asterra_Interaction_Motion_Specification.md` | **T01 Reference** | **Recommended** | Micro-interaction easing curves, button press scaling (`active:scale-95`), modal transitions, and accordion physics. |
| **18** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/08-Accessibility-Performance/Asterra_Accessibility_Performance_Implementation_Specification.md` | **T01 Reference** | **Required** | WCAG 2.1 AA contrast rules, skip links (`#main-content`), focus indicator styles, aria attributes, and WebP asset optimization. |
| **19** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/09-Technical-Architecture/Asterra_Implementation_Architecture.md` | **T01 Reference** | **Recommended** | Frontend architecture blueprint: Tech stack (React 18 + Vite 5 + TS 5), directory layout, and build pipeline setup. |
| **20** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/Asterra_Final_Design_QA_Acceptance_Specification.md` | **T01 Reference** | **Required** | 5-level QA validation framework (Structural, Visual, Interaction, Performance, Acceptance Sign-off). |
| **21** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/DECISIONS.md` | **T01 Reference** | **Required** | Architectural Decision Record (ADR) format (Context, Decision, Consequences) tracking ADR-001 through ADR-008. |
| **22** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/TRREVIEW.md` | **T01 Reference** | **Required** | Technical Requirements Review format (Open Issues, Status, Priority, Resolution Sign-Off). |
| **23** | `03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/CHANGELOG.md` | **T01 Reference** | **Recommended** | Production release notes format following Keep a Changelog standards. |

---

## 2. Deliberately Excluded Files & Rationale

To maintain maximum signal-to-noise ratio and prevent template contamination, the following files and directories were **deliberately excluded**:

| Excluded Resource | Category | Why It Was Excluded |
| :--- | :--- | :--- |
| `Professional Presence md/` (23 files) | **Raw / Duplicate Drafts** | Earlier unorganized markdown exports superseded by structured `ASTERRA/` directories. Including them would create confusion and duplicate references. |
| `src/` (Source Code) | **Implementation Specific** | React/TypeScript source files (`.tsx`, `.ts`, `.css`) contain Template 01-specific code. Designers need documentation specifications, not code clutter. |
| `public/images/` (27 image assets) | **Client Specific** | High-resolution photography of Asterra manufacturing plants and leadership. Template 02/03 will define their own visual assets. |
| `dist/`, `node_modules/`, `package-lock.json` | **Build & Dependency Artifacts** | Runtime dependencies and compiled static outputs irrelevant to template specification and design. |
| `playwright-report/`, `test-results/` | **Test Artifacts** | Local test execution outputs. QA methodology is already captured in `Asterra_Final_Design_QA_Acceptance_Specification.md`. |
| `.docx` & `.pdf` Binary Files | **Legacy Packaging** | Unstructured binary Word documents. All active specifications have been fully translated into clean GitHub-flavored markdown. |
