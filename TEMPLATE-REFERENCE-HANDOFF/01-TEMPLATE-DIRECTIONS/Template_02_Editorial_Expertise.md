# Professional Presence — Template 02: Editorial Expertise
## Detailed Design Manual
### Version 1.0

## 1. Purpose

This manual defines the reusable design logic for **Template 02 — Editorial Expertise** within the Professional Presence package.

The template is designed for organizations whose credibility is strongly connected to **knowledge, expertise, research, professional capability, institutional impact, and published work**.

This is a reusable template manual, not a client-specific design manual. Exact brand colors, fonts, imagery, token values, and final page measurements are established when an example client is selected.

Reference framework: Universal Design Analysis. The objective is to describe the reusable design system behind the template so it can be reproduced consistently by a designer or AI implementation agent.

---

## 2. Template Positioning

### Core idea

**Knowledge → Expertise → Impact**

The website should make the organization feel:

- Intelligent
- Authoritative
- Experienced
- Informed
- Credible
- Relevant
- Human

The design should feel closer to a **premium editorial publication combined with an institutional website** than to a conventional marketing site.

### Primary user question

> “What does this organization know, what has it accomplished, and what value can its expertise provide?”

### Best-fit organizations

- Engineering and consulting firms
- Universities and private colleges
- Healthcare organizations
- NGOs and international organizations
- Research-oriented institutions
- Professional service organizations
- Technical and knowledge-driven companies

---

## 3. Design Character

The template uses a refined editorial visual language built around strong typography, readable content widths, deliberate whitespace, carefully selected imagery, structured metadata, and varied page rhythm. Visual emphasis comes primarily from **typographic scale, content hierarchy, editorial composition, photography, and whitespace**, rather than heavy decoration, gradients, excessive shadows, or repetitive card grids.

### Visual personality

**Intelligent. Editorial. Authoritative. Human. Considered.**

### Density

Moderate to high for content discovery, but balanced with quiet visual sections. Long-form pages should never become uniformly dense.

### Shape language

Mostly restrained and structural. Use subtle radius only where it supports the client brand. Editorial content may use flatter surfaces than the other templates.

### Depth

Primarily created through whitespace, typography, image scale, borders, and composition. Elevation should remain limited.

### Motion

Quiet and supportive. Motion should help users understand transitions, image relationships, and navigation without interrupting reading.

### Avoid vague styling decisions

Do not describe the template only as “modern,” “clean,” or “professional.” The intended character is created by the actual mechanisms above.

---

## 4. Design Tokens

Exact values are intentionally left open until the example client is selected. Use semantic tokens so client-specific values can be introduced without changing component logic.

### 4.1 Color roles

```text
colors:
  primary
  primary-hover
  primary-active
  primary-disabled
  secondary
  accent
  ink
  body
  muted
  canvas
  secondary-canvas
  surface
  elevated-surface
  border
  strong-border
  success
  warning
  error
  info
  overlay
```

### Color rules

- Use one dominant primary brand color or visual anchor.
- Keep reading surfaces calm enough for long-form content.
- Accent color should identify actions, categories, highlights, or selected states rather than appearing everywhere.
- Do not add extra accent colors without a clear content or brand reason.
- Dark editorial sections may be used as strong visual chapters, but they should remain purposeful.
- Color must never be the only indicator of status or category.

---

## 5. Typography System

Typography is one of the strongest defining characteristics of Editorial Expertise.

### 5.1 Recommended roles

| Style | Purpose |
|---|---|
| Display XL | Major hero or institutional statement |
| Display LG | Page title |
| Display MD | Major content chapter |
| Heading LG | Section heading |
| Heading MD | Component heading |
| Heading SM | Small content heading |
| Body LG | Lead text / introductory paragraph |
| Body MD | Standard content |
| Body SM | Supporting text |
| Label / Eyebrow | Categories, section labels, metadata |
| Caption | Dates, authorship, image credits |
| Button | Actions |

### 5.2 Typeface strategy

Use a strong display/editorial family paired with a readable interface/body family when the brand supports it.

The final combination must be evaluated for:

- Brand character
- Readability
- Licensing
- Performance
- Multilingual support
- Weight availability

### 5.3 Typography rules

- Maintain a strong difference between display, heading, body, and metadata styles.
- Long-form body text should use a comfortable readable line length.
- Avoid excessive uppercase usage in editorial copy.
- Use italic or special weights sparingly for emphasis.
- Keep heading wrapping intentional at all supported widths.
- Do not substitute a distinctive approved font with arbitrary system defaults during implementation.

---

## 6. Spacing & Rhythm

Editorial Expertise relies heavily on rhythm.

Use a reusable spacing scale built around:

```text
Tight → Small → Medium → Large → Section → Editorial Chapter
```

### Rules

- Tight spacing groups related metadata and controls.
- Medium spacing separates content blocks inside a section.
- Large spacing separates major ideas.
- Editorial Chapter spacing creates a visual reset before a significant story, publication, or image section.
- Content-heavy pages should alternate dense and quiet areas.
- Do not use large whitespace merely to make a page look premium; it should create meaningful hierarchy.

---

## 7. Layout & Grid

### Core layout

Use a flexible multi-column desktop grid, typically based on a conceptual 12-column structure.

### Preferred compositions

- Editorial two-column layout
- Text + image split
- Large feature story
- Narrow reading column + supporting metadata
- Multi-column resource grid
- Asymmetric project feature
- Full-width visual chapter
- Quote / pull-quote composition
- Publication feed
- Expert/profile composition

### Key rule

**Content determines composition.**

Do not convert every collection into identical rectangular cards.

### Reading width

Long-form text should use a narrower content column than the overall site container. Images and supporting metadata may extend beyond the reading column.

---

## 8. Navigation

### Desktop

Primary navigation should usually expose approximately 4–7 high-level sections, depending on the client's information architecture.

Likely groupings include:

- About
- Expertise
- Insights
- Projects / Work
- Resources
- Careers
- Contact

### Navigation behavior

- Use contextual or mega-navigation only when content depth justifies it.
- Group related content rather than exposing every page.
- Make active states visually clear.
- Preserve stable section context on deep pages.
- Use breadcrumbs where users may enter deep editorial content from search or shared links.

### Mobile

- Preserve the same hierarchy as desktop.
- Use predictable expandable groups.
- Keep Search and Contact accessible when they are important user tasks.
- Do not bury high-value conversion or recruitment actions unnecessarily.

---

## 9. Hero System

Editorial Expertise should not rely on one hero pattern.

### Hero variants

#### Editorial Statement Hero

Best for institutional positioning.

Structure:

```text
Eyebrow
Large headline
Supporting statement
Primary action / optional secondary action
Supporting image or restrained background
```

#### Feature Story Hero

Best for an insight, publication, or case-study-led homepage.

Structure:

```text
Category / metadata
Large feature title
Short summary
Hero media
Read / explore action
```

#### Split Expertise Hero

Best for professional service and technical organizations.

Structure:

```text
Text block | image / proof / supporting visual
```

### Hero rules

- The hero must establish the editorial character immediately.
- Avoid multiple equally strong CTAs.
- Do not overload the hero with every corporate statistic.
- The hero image should have a clear subject and focal point.

---

## 10. Core Content Patterns

### 10.1 Section Intro

Use for introducing a major content chapter.

Anatomy:

```text
Eyebrow
Heading
Short supporting copy
Optional link
```

### 10.2 Feature Story

Use for a major project, article, report, or institutional story.

Anatomy:

```text
Category / metadata
Large title
Summary
Primary image
Action
```

### 10.3 Insight Item

Use for articles, research, news, publications, or expert content.

Minimum:

- Category
- Title
- Date or authorship where relevant
- Short summary
- Action

### 10.4 Expert Profile

Use for leadership or subject-matter experts.

Minimum:

- Portrait
- Name
- Role
- Expertise
- Short biography or summary
- Optional related content

### 10.5 Case Study

Use to demonstrate applied expertise.

Recommended structure:

```text
Context
Challenge
Approach
Outcome
Evidence
Related expertise
```

### 10.6 Publication / Resource Item

Minimum:

- Type
- Title
- Date / year
- Author or organization where relevant
- Summary
- Read / download action

---

## 11. Cards & Content Collections

Cards should be used selectively.

### Preferred use cases

- Repeated resources
- Articles
- Projects
- Publications
- Profiles
- Related content

### Avoid

- Turning every section into a 3-column card grid
- Using card shadows to create hierarchy that typography could create
- Adding icons or badges without information value
- Repeating the same card pattern across the entire homepage

### Editorial collection options

Prefer variation between:

- Featured item
- Two-column editorial list
- Text-led list
- Image-led feature
- Compact resource row
- Curated grid

---

## 12. Projects & Case Studies

Projects should communicate capability, not simply display a portfolio thumbnail.

### Listing page

Recommended sequence:

```text
Intro
Featured project
Project collection
Optional filters
Related expertise / industries
CTA
```

### Detail page

```text
Project context
Title + metadata
Opening visual
Overview
Challenge / opportunity
Approach
Result / impact
Evidence / statistics
Gallery / supporting media
Related expertise
CTA
```

### Visual rule

Use strong project imagery and concise metadata. Let the project story carry the hierarchy.

---

## 13. Insights & Resource Center

This is one of the defining experiences of the template.

### Resource hub structure

```text
Page introduction
Featured content
Search / filters where justified
Content categories
Resource stream
Related topics
```

### Search/filter rules

Add filtering only when content volume warrants it.

Possible filters:

- Topic
- Industry
- Content type
- Year
- Author / expert

Avoid complex filtering on small collections.

### Detail pages

Editorial pages should prioritize reading comfort over excessive interface chrome.

Use:

- Clear metadata
- Narrow reading width
- Strong headings
- Supporting images
- Pull quotes when meaningful
- Related resources
- Contextual CTA

---

## 14. Leadership & Experts

Leadership and experts should reinforce authority through people, not only statements.

### Listing

Use consistent profile presentation with:

- Portrait
- Name
- Role
- Expertise / responsibility
- Optional short introduction

### Detail profile

```text
Portrait / identity
Role
Summary
Biography
Expertise
Selected work / publications
Related content
```

Avoid creating profiles that are mostly empty metadata.

---

## 15. Statistics & Evidence

Statistics should demonstrate real organizational scale or impact.

Examples:

- Years of experience
- Projects completed
- Research output
- Geographic reach
- People served
- Facilities
- Certifications
- Industry sectors

### Rule

Every major number should have context. Avoid using large numbers only as decoration.

---

## 16. Forms & Conversion

Editorial Expertise is not primarily a hard-selling template. Conversion should usually happen **after trust and expertise have been established**.

### Primary conversion types

- Contact inquiry
- Consultation request
- RFQ
- Partnership inquiry
- Download
- Career action
- Appointment / engagement where relevant

### Form principles

- Ask only necessary questions.
- Use explicit labels.
- Keep the form visually calm.
- Show clear validation and submission feedback.
- Avoid unnecessarily long multi-step forms unless justified by the actual business process.

---

## 17. CTA Strategy

### Primary CTA

Should represent the strongest desired action for the page.

### Secondary CTA

Used for lower-commitment exploration.

### Editorial CTA examples

- Explore our expertise
- Read the case study
- View publication
- Download report
- Meet our experts
- Discuss a project
- Contact our team

### Rule

CTA language should describe the next useful action rather than generic labels such as “Click Here.”

---

## 18. Imagery

### Preferred imagery

- Experts in real environments
- Field/documentary imagery
- Projects and facilities
- Research or technical contexts
- Institutional environments
- Human impact
- Carefully art-directed portraits

### Imagery rules

- Favor authentic imagery over generic stock when possible.
- Preserve a documentary/editorial quality.
- Avoid repeated stock-image visual language across unrelated sections.
- Use image ratios consistently within repeated patterns.
- Use captions and credits where required.
- Preserve meaningful focal points at responsive breakpoints.

---

## 19. Iconography

Use one coherent icon family.

### Rules

- Icons should support comprehension, not replace headings.
- Use a restrained stroke or filled style consistently.
- Avoid mixing outlined and illustrated icon families without a documented reason.
- Do not use icons merely to decorate every feature or service.

---

## 20. Borders, Radius & Elevation

### Default approach

- Prefer flat or lightly separated surfaces.
- Use borders for structure when appropriate.
- Use radius consistently within the client brand.
- Keep shadows subtle.
- Avoid floating-card-heavy compositions.

### Editorial preference

Typography, image scale, spacing, and alignment should carry most of the hierarchy.

---

## 21. Motion

Motion should support reading and navigation.

### Recommended patterns

- Fade / reveal
- Gentle image transition
- Navigation transition
- Small hover response
- Section reveal

### Avoid

- Constant parallax
- Large continuous motion
- Autoplay effects that compete with reading
- Long entrance delays
- Animation-only communication

Respect reduced-motion preferences.

---

## 22. Responsive Behavior

### Desktop

- Full editorial grid
- Multi-column features
- Large imagery
- Expanded navigation

### Tablet

- Reduce column complexity
- Rebalance text/image relationships
- Preserve editorial hierarchy
- Simplify navigation groups when necessary

### Mobile

- Stack editorial stories intentionally
- Maintain readable body line length
- Reduce hero complexity
- Preserve focal points in images
- Keep metadata readable
- Keep CTAs touch-friendly
- Avoid horizontal overflow

### Important rule

Mobile should feel like an intentionally designed editorial experience, not a compressed desktop page.

---

## 23. Accessibility

### Required behavior

- Logical heading hierarchy
- Visible keyboard focus
- Sufficient contrast
- Accessible form labels and errors
- Meaningful alternative text
- Correct decorative-image treatment
- Touch-friendly interactive targets
- Reduced-motion support
- No information conveyed by color alone

### Editorial-specific requirement

Long-form content must remain comfortable to read with appropriate line length, text size, spacing, and heading structure.

---

## 24. Performance

Editorial Expertise can become media-heavy, so performance must remain part of the design.

### Rules

- Optimize feature images and responsive variants.
- Avoid loading every image at full resolution.
- Defer non-critical imagery where appropriate.
- Limit font families and weights.
- Avoid heavy animated backgrounds.
- Keep third-party embeds limited to justified use cases.
- Reserve predictable image dimensions to reduce layout shifts.

The goal is premium editorial presentation **without sacrificing usability or speed**.

---

## 25. Page Template Rules

### Homepage

Primary purpose: position expertise and guide users toward important knowledge, work, and engagement.

Recommended sequence:

1. Editorial/institutional hero
2. Expertise or impact themes
3. Featured insight, project, or publication
4. Selected work / case studies
5. Experts / leadership
6. Resources / publications
7. News / insights
8. Careers or impact where relevant
9. Contact / engagement CTA

### About / Story

Recommended sequence:

1. Intro
2. Institutional story
3. Purpose / values
4. Timeline or milestones
5. People / leadership
6. Expertise / impact
7. Recognition
8. CTA

### Expertise Listing

1. Intro
2. Expertise categories
3. Featured capability
4. Related experts
5. Related projects / case studies
6. Contact CTA

### Expertise Detail

1. Context
2. Title
3. Overview
4. Capabilities / approach
5. Evidence
6. Related projects
7. Related experts
8. Resources
9. CTA

### Insights / News Listing

1. Intro
2. Featured story
3. Filter/search where justified
4. Editorial listing
5. Related topics

### Article / Publication Detail

1. Metadata
2. Title
3. Summary
4. Hero media
5. Content
6. Supporting media / quote
7. Related content
8. CTA

### Projects Listing

1. Intro
2. Featured project
3. Project collection
4. Optional filters
5. Related expertise

### Project Detail

1. Project identity
2. Overview
3. Challenge
4. Approach
5. Outcome
6. Evidence
7. Gallery
8. Related expertise
9. CTA

### Careers

1. Employer proposition
2. Culture
3. Opportunities
4. Roles / recruitment information
5. Application CTA

### Contact

1. Contact statement
2. Primary routes
3. Departments
4. Locations
5. Form
6. Map / supporting information

---

## 26. Reusable Component Guidance

The following Phase 5 component families are particularly important for this template:

- Editorial hero
- Section intro
- Feature story
- Insight item
- Publication item
- Project card
- Case study block
- Expert profile
- Statistics
- Timeline
- Quote / pull quote
- Resource item
- Filter controls
- Related content
- Contact block
- CTA group
- Footer

Use the existing Component System rather than creating one-off patterns when a reusable pattern already exists.

---

## 27. Template Anti-Patterns

Avoid:

- Generic SaaS-style card grids
- Excessive gradients
- Heavy shadow systems
- Too many floating cards
- Large decorative icon collections
- Multiple unrelated fonts
- Weak reading width on long-form pages
- Oversized metadata that competes with titles
- Too many primary CTAs
- Excessive animation
- Stock photography with no editorial relevance
- Repeating identical sections on every page
- Turning the resource center into a simple download list with no discovery logic

---

## 28. AI Implementation Guidance

An AI coding agent should interpret this template as a **content-led editorial system**, not as a generic corporate card layout.

### Implementation priorities

1. Establish the typography hierarchy first.
2. Establish the grid, container, and spacing rhythm.
3. Implement navigation and hero patterns.
4. Build reusable editorial content patterns.
5. Implement responsive recomposition.
6. Add states and accessibility.
7. Add imagery and motion conservatively.
8. Validate page rhythm against this manual before introducing new visual patterns.

### Rules for AI-generated UI

- Reuse existing components before inventing new ones.
- Do not add decorative elements merely to fill whitespace.
- Do not introduce new colors or typography styles without an explicit reason.
- Do not convert narrative sections into card grids automatically.
- Do not create a new component variant unless existing variants cannot support the content.
- Preserve the editorial character across all pages.
- Maintain a clear distinction between content hierarchy and decorative styling.

---

## 29. Shared / Template / Client Rules

### Shared Professional Presence rules

Apply to all three templates:

- Accessibility baseline
- Responsive behavior
- Performance awareness
- Semantic hierarchy
- Component state completeness
- Content-led composition

### Editorial Expertise rules

Apply specifically to this template:

- Editorial typography
- Reading-focused layouts
- Expertise and resource prominence
- Publication/insight patterns
- Strong content relationships
- Moderate content density

### Client-specific rules

Defined after selecting the example client:

- Exact colors
- Exact fonts
- Exact token values
- Logo treatment
- Image direction
- Content voice
- Brand-specific components
- Specific page compositions

---

## 30. Evidence & Confidence

When the client-specific manual is created, exact values should be based on observable reference material, approved brand assets, or measured design decisions. Estimated values should be marked as estimates until validated.

Repeated patterns should be trusted more than isolated observations. Do not create a universal token from a single visual occurrence.

---

## 31. Template Acceptance Criteria

Template 02 is ready for client-specific use when:

- The editorial design character is preserved across all page families.
- Typography hierarchy is clearly defined.
- Reading-focused layouts are available for long-form content.
- Expertise, insights, resources, and projects have appropriate patterns.
- Components have consistent states and responsive behavior.
- Accessibility expectations are clear.
- Performance constraints are considered.
- Anti-patterns are documented.
- The template remains clearly distinguishable from Corporate Authority and Premium Experience.

---

## 32. Next Step

After the three template manuals are complete, select an example client and identify the most appropriate template.

For a client mapped to **Editorial Expertise**, use this manual as the base and create the client-specific design manual with actual brand assets, typography, colors, measured tokens, page compositions, content, imagery, and implementation guidance.
