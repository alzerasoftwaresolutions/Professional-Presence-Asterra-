# Asterra Business Units / Capabilities — Listing Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Example Client:** Asterra Manufacturing Group
**Page:** Business Units / Capabilities — Listing
**Route:** `/business`
**Status:** Design & implementation specification
**Version:** 1.0

---

## 1. Purpose

The **Business Units / Capabilities** page is the primary discovery page for understanding what Asterra actually does.

The About page establishes:

> **Who is Asterra?**

This page establishes:

> **What does Asterra do, and how is its business organized?**

It should help visitors quickly understand Asterra's operating areas and then move into the appropriate Business Unit Detail page.

### Primary objectives

* Present Asterra's business areas clearly.
* Communicate the breadth of the group without creating complexity.
* Give each business unit enough context to understand its role.
* Establish a logical relationship between the group and its individual businesses.
* Provide clear paths into detailed business-unit pages.
* Reinforce Asterra's industrial credibility.
* Support users who already know what capability they need.

### The page should communicate

**Breadth + structure + capability + confidence**

without becoming a technical catalog.

---

# 2. Relationship to the Overall Site

The page occupies the following position:

```text
Homepage
    ↓
About / Corporate Story
    ↓
Business Units / Capabilities
    ↓
Business Unit Detail
    ↓
Projects / Contact / Inquiry
```

The distinction between these pages is important.

### Homepage

Introduces Asterra.

### About

Explains Asterra's identity, history, values, and organization.

### Business Units / Capabilities

Shows the **range of businesses and capabilities**.

### Business Unit Detail

Explains an individual business in depth.

### Projects

Demonstrates completed or representative work.

---

# 3. Primary Audience

The page should support:

* Prospective customers
* Procurement teams
* Business partners
* Distributors
* Institutional stakeholders
* Suppliers
* Industry professionals
* Prospective employees
* Visitors evaluating Asterra's capabilities

---

# 4. Primary User Questions

A visitor should be able to answer:

1. What businesses does Asterra operate?
2. Which business is relevant to my needs?
3. What does each business unit provide?
4. How are the business units connected to Asterra?
5. What differentiates Asterra's capabilities?
6. Where can I learn more?
7. How can I start a conversation?

---

# 5. Primary Conversion

### Primary CTA

**Explore a Business**

The CTA exists at the individual business-unit level.

### Page-level CTA

**Talk to Asterra**

### Secondary actions

* View Business Unit
* Explore Capabilities
* View Related Projects
* Contact Asterra

The page should primarily support **discovery**, not force an immediate sales conversion.

---

# 6. Information Architecture

The recommended structure is:

```text
Global Header
      ↓
01 Hero
      ↓
02 Group Capability Introduction
      ↓
03 Business Units Overview
      ↓
04 Featured Capability
      ↓
05 Capability / Expertise Band
      ↓
06 Cross-Business Advantage
      ↓
07 Related Projects / Evidence
      ↓
08 Final CTA
      ↓
Global Footer
```

The exact number of business units should remain content-driven.

Do **not** force the page into a fixed four- or six-card structure simply to satisfy a visual pattern.

---

# 7. Global Header

The header inherits the established Asterra navigation.

```text
[ASTERra LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request a Quote]
```

### Active state

**Business** should receive a subtle active-state indicator.

Avoid:

* Large navigation redesign
* Different header color system
* Page-specific navigation
* Decorative business icons

The Business page should feel like part of the same corporate website.

---

# 8. Section 01 — Hero

## Objective

Immediately establish that the page presents Asterra's operating businesses and capabilities.

### Eyebrow

**OUR BUSINESS**

### H1 direction

Example:

> **Capabilities built across the value chain.**

Alternative direction:

> **Our businesses. Our capabilities.**

The final production headline should be determined by approved client content.

### Supporting copy

A concise introduction explaining that Asterra operates across multiple industrial areas and combines specialized capabilities under one group.

### CTA

**Explore Our Businesses**

Optional secondary link:

**View Projects**

---

## Hero Composition

Preferred desktop structure:

```text
┌─────────────────────────────────────────────────────────────┐
│ OUR BUSINESS                                                 │
│                                                             │
│ CAPABILITIES BUILT        Large industrial / operational    │
│ ACROSS THE VALUE          image                             │
│ CHAIN.                                                         │
│                                                             │
│ Supporting copy                                             │
│                                                             │
│ [Explore Businesses]                                        │
└─────────────────────────────────────────────────────────────┘
```

The hero should feel more **capability-oriented** than the About hero.

### Imagery

Preferred:

* Manufacturing process
* Facility
* Production environment
* Product in industrial context
* Workforce operating equipment

Avoid generic corporate-office imagery.

---

# 9. Section 02 — Group Capability Introduction

## Objective

Explain the relationship between the individual business units and Asterra as a group.

This section answers:

> **Why are these businesses presented together?**

### Structure

```text
OUR OPERATING MODEL

Large editorial statement

Short explanatory paragraph

Supporting visual
```

### Example content direction

> Asterra brings specialized industrial businesses together through shared standards, infrastructure, expertise, and long-term investment.

This is a conceptual direction only.

It should not become a factual claim until approved.

---

## Layout

Preferred:

```text
5 columns
Large statement

1–2 columns
Whitespace

5–6 columns
Supporting image / diagram
```

The section should remain editorial rather than becoming a conventional information card.

---

# 10. Section 03 — Business Units Overview

This is the **core section of the page**.

## Objective

Allow visitors to quickly scan all major Asterra businesses.

### Recommended presentation

Use an editorial business-unit list rather than a generic card grid.

```text
OUR BUSINESSES

01  BUSINESS UNIT NAME
    Short description
    Key capability
                              →

02  BUSINESS UNIT NAME
    Short description
    Key capability
                              →

03  BUSINESS UNIT NAME
    Short description
    Key capability
                              →

04  BUSINESS UNIT NAME
    Short description
    Key capability
                              →
```

Each row links to the corresponding Business Unit Detail page.

---

# 11. Business Unit Listing Anatomy

Each unit should contain:

### Required

* Business unit name
* One-sentence description
* Primary capability/category
* Link

### Optional

* Representative image
* Short supporting metric
* Location
* Related industry

### Avoid

* Long descriptions
* Multiple paragraphs
* Ten different metadata fields
* Large icon collections
* Decorative badges

The listing page should make comparison easy.

---

# 12. Business Unit Visual Treatment

A business unit can be presented as:

```text
┌─────────────────────────────────────────────────────────────┐
│ 01                                                           │
│                                                              │
│ BUSINESS UNIT NAME                       [IMAGE]             │
│                                                              │
│ Short description                                            │
│                                                              │
│ Primary capability                         Explore →         │
└─────────────────────────────────────────────────────────────┘
```

### Interaction

On desktop:

* Image may subtly reveal/enlarge on hover.
* Row may shift slightly.
* Arrow/link can transition.
* Teal accent may appear.

The interaction should remain restrained.

### Important

The entire row can be clickable if implemented accessibly, but the actual link must still have an understandable accessible name.

---

# 13. Business Unit Ordering

Business units should not be ordered arbitrarily.

Preferred ordering criteria:

1. Strategic importance
2. Group-level prominence
3. Visitor demand
4. Revenue/business significance where appropriate
5. Logical relationship between capabilities
6. Content completeness

If no business hierarchy has been established, use the client's approved organizational structure.

Do not infer hierarchy simply from alphabetical order.

---

# 14. Section 04 — Featured Capability

## Objective

Give one strategically important business area greater visual emphasis.

This prevents the page from feeling like a directory.

### Structure

```text
FEATURED CAPABILITY

Large image

Business Unit Name

Large statement

Short supporting copy

[Explore Business]
```

### Layout

Use an asymmetric split:

```text
6 columns — large image
6 columns — editorial content
```

Or reverse the image/content relationship.

The direction can alternate depending on the page's visual rhythm.

---

# 15. Featured Capability Rules

The featured unit should be selected intentionally.

Possible reasons:

* Most strategically important
* Most recognizable
* Most visually compelling
* Strongest customer relevance
* Most representative of Asterra's current direction

### Do not

* Randomly select the first unit.
* Make the largest business appear more important without approval.
* Create unsupported performance claims.

---

# 16. Section 05 — Capabilities / Expertise

## Objective

Explain the capabilities that connect the business units.

This is different from listing what each business sells.

The section should answer:

> **What capabilities does Asterra bring across its businesses?**

### Possible categories

Only use categories relevant to the actual client.

Potential content directions:

* Manufacturing
* Engineering
* Processing
* Quality management
* Supply chain
* Distribution
* Technical expertise
* Product development
* Industrial operations

These are placeholders for information architecture, not approved Asterra claims.

---

## Preferred composition

Avoid icon-heavy grids.

Use a typographic list:

```text
GROUP CAPABILITIES

01  Manufacturing
    Short explanation

02  Technical Expertise
    Short explanation

03  Quality & Standards
    Short explanation

04  Supply & Distribution
    Short explanation
```

---

# 17. Capability Visual Language

The capability section should use:

* Large numerals
* Strong typography
* Thin dividers
* Small mineral-teal accents
* Minimal iconography

### Avoid

* Generic line-icon grids
* Colorful capability icons
* SaaS-style feature cards
* Circular diagrams without actual information value

Asterra communicates capability through **structure and evidence**, not decorative UI.

---

# 18. Section 06 — Cross-Business Advantage

## Objective

Explain what becomes possible because the businesses belong to one group.

This is an important opportunity to establish **group-level value**.

### Content directions

Possible themes:

* Shared expertise
* Integrated capabilities
* Consistent quality standards
* Operational scale
* Knowledge transfer
* Supply-chain relationships
* Long-term investment

Only approved claims should be used in final content.

---

## Composition

Use a strong editorial statement:

```text
ONE GROUP.
MULTIPLE SPECIALIZATIONS.

Asterra's businesses combine specialized
expertise with the advantages of a connected
industrial group.

                    [Supporting image]
```

The visual should communicate **connection without becoming a diagram-heavy corporate infographic**.

---

# 19. Section 07 — Related Projects / Evidence

## Objective

Show that the listed capabilities exist in practice.

The visitor should move from:

**What Asterra does**

to:

**Evidence of Asterra doing it.**

### Structure

```text
CAPABILITIES IN PRACTICE

[Project image]        [Project image]

Project Name           Project Name
Business Unit          Business Unit

[View All Projects]
```

### Recommended number

2–3 featured projects.

Do not create a complete project archive here.

---

# 20. Project Card Anatomy

```text
IMAGE

PROJECT NAME

Business Unit
Location / category

View Project →
```

### Visual treatment

* Large photography
* Minimal metadata
* Strong project title
* Small business-unit label
* Subtle hover interaction

The project section should remain secondary to the Business Unit listing.

---

# 21. Section 08 — Final CTA

## Objective

Provide a clear next step for users who have identified a relevant business capability.

### Suggested structure

```text
FIND THE RIGHT ASTERRA BUSINESS

Tell us what you need.
We'll connect you with the right team.

[Talk to Asterra]
[Request a Quote]
```

### Visual treatment

Deep evergreen background.

Warm ivory typography.

Mineral teal primary action.

Minimal supporting content.

The CTA should not repeat the exact wording of the About page CTA.

---

# 22. Footer

Use the established Asterra footer.

The Business page should make Business Units particularly easy to access from the footer.

Recommended Business column:

```text
BUSINESS

All Businesses
Business Unit 01
Business Unit 02
Business Unit 03
Capabilities
Projects
```

Only include actual routes that exist.

---

# 23. Responsive Behavior

## Desktop — ≥1100px

Use:

* 12-column conceptual grid
* Large editorial hero
* Asymmetric introduction
* Full-width business-unit listing
* Large featured capability
* Structured capability section
* Project evidence row
* Full-width CTA

### Business units

Prefer horizontal editorial rows.

---

## Tablet — 768–1099px

* Hero transitions toward two-column layout.
* Business rows remain horizontal where practical.
* Featured capability becomes balanced 50/50.
* Capability list remains readable.
* Project evidence may use two columns.

---

## Mobile — <768px

Business units become vertically stacked:

```text
01
BUSINESS UNIT
Description
Explore →

02
BUSINESS UNIT
Description
Explore →

03
BUSINESS UNIT
Description
Explore →
```

### Mobile rules

* Images move above or below content according to hierarchy.
* Business unit names remain prominent.
* Avoid tiny metadata.
* Avoid horizontal scrolling unless there is a compelling interaction reason.
* CTAs become full-width or naturally sized.
* Project cards stack vertically.
* Capability list becomes a simple vertical sequence.

### Principle

**Preserve hierarchy, not desktop geometry.**

---

# 24. Typography

Use the established Asterra typography system.

### IBM Plex Sans

Use for:

* Navigation
* Business-unit names
* Descriptions
* Metadata
* Buttons
* Labels
* Supporting copy

### IBM Plex Serif

Use selectively for:

* Hero headline
* Major group-level statements
* Featured capability statement
* Final editorial CTA statement

Do not use serif typography for every heading.

---

# 25. Color System

Continue using:

| Token          | Use                        |
| -------------- | -------------------------- |
| Deep Evergreen | Authority / major sections |
| Mineral Teal   | Accent / interaction / CTA |
| Warm Ivory     | Main canvas                |
| White          | Content surfaces           |
| Ink            | Primary text               |
| Body Gray      | Supporting copy            |
| Muted Gray     | Metadata                   |

### Recommended balance

Maintain the established Asterra visual ratio:

**Neutral surfaces → dominant**

**Evergreen → structural authority**

**Teal → selective emphasis**

---

# 26. Imagery Direction

The Business page should use imagery to differentiate capabilities.

### Manufacturing

* Machinery
* Production lines
* Technical processes
* Finished products

### Facilities

* Exterior architecture
* Interior production environments
* Warehousing
* Industrial infrastructure

### People

* Operators
* Engineers
* Technical teams
* Management within real operational environments

### Products

* Products in context
* Close technical details
* Packaging / production
* Industrial applications

### Rule

Every image should help answer:

> **What does this business actually do?**

If an image does not communicate capability, it should not occupy valuable visual space.

---

# 27. Image Consistency

Across business units:

* Use consistent image ratios where the same component is repeated.
* Maintain consistent cropping logic.
* Avoid mixing dramatically different photographic styles.
* Do not use unrelated stock photos simply to fill empty spaces.
* Use real client imagery where available.

A business unit should be recognizable from its content and imagery without requiring decorative branding.

---

# 28. Motion

Recommended:

* Business-row hover transitions
* Image scale: subtle
* Arrow movement
* Section reveal
* Featured capability image reveal

### Timing

* Interaction: approximately 250–400ms
* Content reveal: approximately 400–650ms

### Avoid

* Animated business cards
* Constant moving imagery
* Scroll-jacking
* Excessive parallax
* Large animated diagrams

Reduced-motion behavior must remove non-essential motion.

---

# 29. Accessibility

The page must include:

* One H1
* Semantic heading hierarchy
* Keyboard-accessible business-unit links
* Visible focus states
* Descriptive link text
* Appropriate alt text
* Accessible project links
* Sufficient contrast
* Reduced-motion support

### Business-unit links

Avoid generic accessible labels such as:

> “Read more”

Prefer:

> “Explore Asterra Manufacturing”

or equivalent specific labels.

### Images

Business imagery that communicates meaningful information requires descriptive alt text.

Decorative imagery should use empty alt attributes.

---

# 30. SEO

### Recommended URL

`/business`

If the final information architecture establishes plural naming, use the approved route consistently. Do not create multiple URLs for the same page.

### Title direction

**Our Businesses & Capabilities | Asterra Manufacturing Group**

### Meta description direction

Explain:

* Asterra's business areas
* Industrial capabilities
* Group structure
* Route to individual businesses

### Internal linking

Business page should link to:

* About
* Individual Business Units
* Projects
* Contact
* Relevant Resources

Individual Business Unit pages should link back to the Business listing.

---

# 31. Structured Content

Where technically appropriate, structured data may support:

* Organization
* WebSite
* BreadcrumbList
* Individual business entities where the content model supports them

Do not create structured data simply because it is possible.

The implementation must reflect actual content and organizational relationships.

---

# 32. Performance

Priority:

1. Header
2. Hero
3. Business-unit listing
4. Featured capability
5. Remaining imagery
6. Projects
7. CTA

### Requirements

* Responsive image sizes
* Modern image formats where supported
* Lazy loading below-the-fold images
* Explicit image dimensions
* Limited font weights
* No unnecessary animation libraries
* No oversized hero media
* No unnecessary video backgrounds

The Business page may contain many images, so image optimization is particularly important.

---

# 33. Content Integrity

Asterra is the fictional example client.

Therefore, the business-unit names and capabilities used in the design must be treated according to their status.

### If actual content is unavailable

Use clearly marked placeholders such as:

```text
Business Unit 01
Business Unit 02
Business Unit 03
```

or controlled example names explicitly identified as placeholders.

### Never invent as factual

* Business subsidiaries
* Product categories
* Production facilities
* Geographic operations
* Market share
* Revenue
* Production capacity
* Certifications
* Partnerships
* Customers
* Industry claims

The page architecture should demonstrate how the content will work without fabricating corporate information.

---

# 34. Component Mapping

The page should primarily use reusable components.

### Shared components

* `Header`
* `Footer`
* `Button`
* `SectionIntro`
* `PageHero`
* `ImageBlock`
* `ProjectCard`
* `CTASection`

### Business-specific components

* `BusinessUnitList`
* `BusinessUnitItem`
* `FeaturedBusiness`
* `CapabilityList`
* `BusinessEvidence`

### Rule

The Business Unit listing component should be designed so that adding or removing a business unit does not require restructuring the page.

The component should be **content-driven**.

---

# 35. Data Model Consideration

Business-unit content should not be hardcoded directly into page layout components.

Conceptually:

```text
businessUnits
 ├── id
 ├── name
 ├── slug
 ├── shortDescription
 ├── category
 ├── image
 ├── featured
 ├── capabilities[]
 └── detailRoute
```

The exact implementation depends on the established Package 3 architecture and configuration system.

### Architectural principle

The UI should consume structured business-unit data rather than embedding client-specific content throughout the component tree.

---

# 36. AI Design / Implementation Guidance

An AI design or coding agent should:

1. Treat Package 3 as the governing package definition.
2. Treat the Universal Design Analysis as the design-system reference.
3. Treat the Asterra Design Manual as the client-specific visual reference.
4. Treat the Asterra Homepage and About specifications as established page-level references.
5. Preserve the Asterra evergreen / mineral-teal / warm-ivory system.
6. Preserve IBM Plex Sans and IBM Plex Serif usage.
7. Use Template 01 — Corporate Authority.
8. Make the Business page more capability-oriented than the About page.
9. Do not turn the page into a generic card grid.
10. Make business units scannable.
11. Give the featured capability stronger visual emphasis without implying unsupported hierarchy.
12. Connect business units to detailed pages.
13. Use projects as evidence rather than as the main content.
14. Keep the page content-driven.
15. Do not invent Asterra business facts.
16. Preserve responsive editorial composition.
17. Use restrained interaction.
18. Maintain accessibility and performance requirements.
19. Reuse shared components wherever possible.
20. Do not introduce a new visual system for the Business page.

---

# 37. Anti-Patterns

Do not create:

* Generic 3-column service cards
* SaaS-style feature grids
* Icon-heavy capability sections
* Excessive rounded cards
* Color-coded business units
* Different colors for every business
* Huge statistics without evidence
* Fake business-unit names presented as real
* Repetitive stock photography
* Large paragraphs under every business
* Excessive filters
* Complex search functionality for a small business portfolio
* A business-unit carousel when all units should be immediately discoverable
* Construction-specific imagery
* Stonebridge navy/copper styling
* Excessive gradients
* Decorative industrial diagrams
* Overly animated business cards

---

# 38. QA Checklist

## Content

* [ ] Page clearly explains Asterra's businesses.
* [ ] Business units are easy to scan.
* [ ] Each unit has a clear purpose.
* [ ] Each unit links to the appropriate detail page.
* [ ] Group-level capabilities are distinguished from individual businesses.
* [ ] Featured capability has a clear reason for prominence.
* [ ] Projects provide supporting evidence.
* [ ] No unsupported claims are presented as facts.
* [ ] Final CTA provides a clear next action.

## Visual

* [ ] Asterra visual identity is preserved.
* [ ] Business page feels distinct from About without becoming a new design system.
* [ ] Business units are not presented as generic cards.
* [ ] Typography creates hierarchy.
* [ ] Imagery communicates industrial capability.
* [ ] Teal remains an accent.
* [ ] Evergreen provides authority.
* [ ] Editorial spacing is preserved.
* [ ] No Stonebridge visual language appears.

## Responsive

* [ ] Desktop uses the conceptual 12-column grid.
* [ ] Business-unit rows work at tablet width.
* [ ] Mobile business units stack cleanly.
* [ ] Images maintain appropriate proportions.
* [ ] No horizontal overflow exists.
* [ ] CTAs remain usable on mobile.
* [ ] Project evidence adapts correctly.

## Accessibility

* [ ] One H1 exists.
* [ ] Heading hierarchy is correct.
* [ ] Business-unit links are keyboard accessible.
* [ ] Focus states are visible.
* [ ] Link labels are descriptive.
* [ ] Images have appropriate alt text.
* [ ] Contrast is sufficient.
* [ ] Reduced motion is respected.

## Performance

* [ ] Business images are optimized.
* [ ] Images use responsive sizing.
* [ ] Below-fold imagery is deferred appropriately.
* [ ] Font loading is controlled.
* [ ] No unnecessary JavaScript animation dependencies exist.
* [ ] Layout shifts are minimized.

---

# 39. Completion Criteria

This specification is complete when:

* The Business Units page has a clearly defined role within the Asterra IA.
* The page is differentiated from both Homepage and About.
* The business-unit discovery model is defined.
* Individual business-unit presentation is defined.
* Featured capability behavior is defined.
* Group capabilities are distinguished from businesses.
* Project evidence is incorporated appropriately.
* Final conversion path is defined.
* Desktop, tablet, and mobile behavior are defined.
* Accessibility requirements are defined.
* Performance requirements are defined.
* SEO requirements are defined.
* Content integrity rules prevent fabricated corporate claims.
* Component/data considerations are defined.
* AI implementation instructions are explicit.
* Anti-patterns are explicit.
* The page can be implemented without inventing major structural decisions.

---

# 40. Relationship to Previous Asterra Pages

The three pages should create a deliberate progression:

```text
┌─────────────────────────────────────────────────────────────┐
│ HOMEPAGE                                                    │
│                                                             │
│ "Who is Asterra?"                                           │
│                                                             │
│ Corporate introduction                                      │
│ Current capabilities                                        │
│ Proof                                                        │
│ Primary actions                                              │
└──────────────────────────┬──────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ ABOUT / CORPORATE STORY                                     │
│                                                             │
│ "What shaped Asterra?"                                      │
│                                                             │
│ History                                                      │
│ Mission / Vision / Values                                   │
│ Leadership                                                   │
│ Organizational identity                                     │
└──────────────────────────┬──────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ BUSINESS UNITS / CAPABILITIES                               │
│                                                             │
│ "What does Asterra do?"                                     │
│                                                             │
│ Business units                                               │
│ Capabilities                                                 │
│ Group advantage                                              │
│ Evidence                                                     │
└──────────────────────────┬──────────────────────────────────┘
                           ↓
                 BUSINESS UNIT DETAIL
```

The Business page therefore acts as the **bridge between corporate identity and detailed commercial capability**.

---

# 41. Next Page

After this specification, the next document in the Asterra sequence is:

**Asterra Business Unit Detail Page Specification**

That document should define the reusable detail-page template for an individual Asterra business, rather than inventing a separate design for every business unit.
