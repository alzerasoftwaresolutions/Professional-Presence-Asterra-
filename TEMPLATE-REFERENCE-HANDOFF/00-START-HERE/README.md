# Professional Presence — Template Reference Handoff Guide

Welcome to the **Template Reference Handoff Package** for **Package 03 (Professional Presence)** in the Agency Playbook.

---

## 1. Purpose of This Handoff Package

This directory is an isolated, curated reference environment created specifically for the designers and engineering leads responsible for **Template 02 (Editorial Expertise)** and **Template 03 (Premium Experience)**.

Template 01 (Corporate Authority) has been fully designed, specified, implemented, and verified to a 100% acceptance standard. Rather than having other designers read through hundreds of implementation files or reinvent documentation standards from scratch, this folder provides the **exact structural blueprints, universal playbooks, and methodology examples** needed to independently build Templates 02 and 03.

---

## 2. The 3-Template Directional Model

The Professional Presence package establishes three distinct commercial and brand archetypes:

```text
                           PACKAGE 03: PROFESSIONAL PRESENCE
                                          │
                  ┌───────────────────────┼───────────────────────┐
                  │                       │                       │
             TEMPLATE 01             TEMPLATE 02             TEMPLATE 03
         Corporate Authority     Editorial Expertise      Premium Experience
                  │                       │                       │
             Core Archetype:         Core Archetype:         Core Archetype:
         Authority / Scale /      Knowledge / Thought     Prestige / Emotion /
          Engineering Trust        Leadership / Impact    Sensory Immersion
```

* **Template 01 — Corporate Authority (Reference Implementation)**:
  * *Target*: Heavy industrial conglomerates, civil EPC contractors, infrastructure groups, utility authorities.
  * *Tonal Character*: Architectural, disciplined, evidence-driven, dense, authoritative.
* **Template 02 — Editorial Expertise (Assigned to Designer 2)**:
  * *Target*: Strategy consultancies, economic think tanks, research & engineering labs, specialized legal/financial advisory firms.
  * *Tonal Character*: Monograph-rich, typographic rhythm, pull-quotes, data visualization, thought leadership.
* **Template 03 — Premium Experience (Assigned to Designer 3)**:
  * *Target*: Luxury architectural studios, high-end private equity/wealth management, premium bespoke hospitality, visionary design-build practices.
  * *Tonal Character*: Cinematic, dark-mode/fluid canvas, sensory pacing, refined micro-interactions, high aesthetic emotional resonance.

---

## 3. The Golden Rule: Same Documentation System, Different Template Decisions

> [!IMPORTANT]
> **Template 01 is a STRUCTURAL EXAMPLE, NOT A DESIGN MANDATE.**
> 
> You must **NOT** copy Template 01's visual palette (Deep Evergreen / Warm Ivory), specific typography (IBM Plex Serif), industrial manufacturing copy (Asterra), or specific grid treatments.
> 
> You **SHOULD** reuse the exact documentation structure, section taxonomy, level of detail, decision tracking, and QA acceptance methodology.

---

## 4. Copy / Adapt / Do Not Copy Matrix

| Area | Reuse Structure? | Reuse Decisions? | Adapt / Independent? | What to Learn from Template 01 Reference |
| :--- | :---: | :---: | :---: | :--- |
| **Package Foundations** | **Yes** | **Yes** | **Follow Standard** | Read package baseline goals, 16-phase lifecycle, and shared deliverables. |
| **Universal Design Analysis** | **Yes** | **Yes** | **Apply Universally** | Use the audit framework in `02-UNIVERSAL-STANDARDS/Universal_Design_Analysis.md` to analyze visual references. |
| **Universal SEO Framework** | **Yes** | **Yes** | **Apply Universally** | Follow `02-UNIVERSAL-STANDARDS/Universal_SEO_Analytics_Playbook.md` for technical SEO, indexing, and JSON-LD structure. |
| **Information Architecture** | **Yes** | **No** | **Adapt Routes** | Follow the 15-route matrix pattern (`/`, `/about`, `/business`, `/projects`, `/leadership`, `/insights`, `/careers`, `/contact`) while adapting names/slugs to your theme. |
| **Design System Manual** | **Yes** | **No** | **Independently Create** | Learn how tokens (color, type, spacing, elevation) are documented in `03-TEMPLATE-01-.../02-Design-System/`. Create your own unique palette & type. |
| **Page Specifications** | **Yes** | **No** | **Independently Create** | Follow the 6-layer page specification format (Summary, Visual Specs, Section Breakdown, Content Slots, Responsive Physics, Acceptance Criteria). |
| **Component Architecture** | **Yes** | **No** | **Independently Create** | Follow the 4-tier taxonomy (`ui/`, `shared/`, `domain/`, `pages/`). Design components tailored to your template archetype. |
| **Content Data Model** | **Yes** | **No** | **Independently Create** | Decouple copy into typed JSON fixtures (`src/data/*.json`). Define entities matching your template's domain. |
| **Color Palette & Ink** | **No** | **No** | **DO NOT COPY** | Template 01 uses Evergreen (`#173A35`). Template 02/03 must define their own distinct palettes. |
| **Typography Pairing** | **No** | **No** | **DO NOT COPY** | Template 01 uses IBM Plex. Template 02 should explore rich editorial serif pairings; Template 03 should explore modern geometric/editorial pairings. |
| **Client Content (Asterra)** | **No** | **No** | **DO NOT COPY** | Asterra is an industrial manufacturing example. Create a compelling fictional client profile tailored to Editorial or Premium. |

---

## 5. Directory Structure of This Handoff Package

```text
TEMPLATE-REFERENCE-HANDOFF/
│
├── 00-START-HERE/
│   ├── README.md                  # Main onboarding guide & methodology rules (this file)
│   ├── REFERENCE-INDEX.md         # Master index of all 23 included reference files
│   ├── TEMPLATE-02-HANDOFF.md     # Dedicated guide for Template 02 (Editorial Expertise)
│   └── TEMPLATE-03-HANDOFF.md     # Dedicated guide for Template 03 (Premium Experience)
│
├── 01-SHARED-FOUNDATIONS/          # Foundational definitions for all 3 templates
│   ├── Template_01_Corporate_Authority.md
│   ├── Template_02_Editorial_Expertise.md
│   └── Template_03_Premium_Experience.md
│
├── 02-UNIVERSAL-STANDARDS/         # Shared methodologies applying across all templates
│   ├── Universal_Design_Analysis.md
│   └── Universal_SEO_Analytics_Playbook.md
│
└── 03-TEMPLATE-01-METHODOLOGY-EXAMPLES/ # Gold-standard structural examples from Template 01
    ├── 01-Architecture-Routing/
    ├── 02-Design-System/
    ├── 03-Page-Specifications/
    ├── 04-Components/
    ├── 05-Content-Model/
    ├── 06-SEO-Implementation/
    ├── 07-Responsive-Interaction/
    ├── 08-Accessibility-Performance/
    ├── 09-Technical-Architecture/
    └── 10-QA-Acceptance-Review/
```

---

## 6. Recommended 6-Step Development Workflow

When beginning work on **Template 02** or **Template 03**, follow this structured sequence:

```text
Step 1: Read Foundations & Brief
  ↳ Read your template brief in 01-SHARED-FOUNDATIONS/
  ↳ Review 02-UNIVERSAL-STANDARDS/ for design and SEO rules
       ↓
Step 2: Create Example Client Profile & Design Manual
  ↳ Define fictional client (e.g. strategy consultancy or luxury studio)
  ↳ Author Design System manual using 03-.../02-Design-System/ as format guide
       ↓
Step 3: Define Information Architecture & Route Table
  ↳ Map core routes and entity relationships using 03-.../01-Architecture-Routing/
       ↓
Step 4: Author Page Specifications (All 15 Pages)
  ↳ Write comprehensive page specifications using 03-.../03-Page-Specifications/
       ↓
Step 5: Define Component System & Content Models
  ↳ Map atomic UI primitives and domain components using 03-.../04-Components/
  ↳ Define JSON schemas and TypeScript interfaces using 03-.../05-Content-Model/
       ↓
Step 6: Execute QA & Acceptance Review
  ↳ Set up DECISIONS.md, TRREVIEW.md, and CHANGELOG.md using 03-.../10-QA-Acceptance-Review/
```

---

## 7. Independence Confirmation

Both **Template 02** and **Template 03** can proceed **100% independently**. You do not need to wait for further Template 01 development, nor do you need to inspect the live codebase unless you want to see a React/Vite implementation reference.

For detailed instructions tailored to your assigned template, open:
* 👉 [`TEMPLATE-02-HANDOFF.md`](file:///c:/Users/Natha/Desktop/Agency%20Playbook/Company%20Profile%20Service/company%20profile%20packages/Professional%20Presence/TEMPLATE-REFERENCE-HANDOFF/00-START-HERE/TEMPLATE-02-HANDOFF.md) for **Editorial Expertise**
* 👉 [`TEMPLATE-03-HANDOFF.md`](file:///c:/Users/Natha/Desktop/Agency%20Playbook/Company%20Profile%20Service/company%20profile%20packages/Professional%20Presence/TEMPLATE-REFERENCE-HANDOFF/00-START-HERE/TEMPLATE-03-HANDOFF.md) for **Premium Experience**
