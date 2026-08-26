# Package 3 — Professional Presence
## Template 01 — Corporate Authority
### Detailed Design Manual — Version 1.0

> **Purpose:** Implementation-ready design guidance for the Corporate Authority template.
>
> **Reference:** Universal Design Analysis framework.
>
> **Status:** Template-level manual. Client-specific brand values, content, imagery, and exact token values are applied after an example client is selected.

---

## 1. Template Definition

**Template name:** Corporate Authority  
**Core idea:** Authority / Scale / Trust  
**Primary objective:** Present an established organization as credible, capable, mature, and institutionally strong.

### Best-fit clients

- Large manufacturing companies
- Corporate groups
- Export and import companies
- Engineering firms
- Financial and professional service companies
- Real estate developers
- Established healthcare or educational organizations with strong institutional positioning

### Primary user question

> **Who is this organization, how capable are they, and why should I trust them?**

### Design personality

Structured, confident, established, restrained, evidence-led, and professional.

The design should communicate authority through **scale, hierarchy, evidence, photography, typography, and composition**, not through excessive decoration.

---

# 2. Design Character

Corporate Authority uses a strong editorial-corporate system with a disciplined grid and clear visual hierarchy.

### Visual identity

- Deep, restrained base colors with one controlled accent.
- Strong display typography for major corporate statements.
- Neutral, highly readable body typography.
- Large but intentional section spacing.
- Strong alignment and grid discipline.
- High-quality corporate photography.
- Limited elevation and restrained borders.
- Minimal decorative graphics unless justified by the brand.
- Motion is subtle and primarily supports orientation and continuity.

### Visual density

**Medium.** The website can contain substantial information, but information should be grouped into clear visual chapters rather than presented as dense blocks.

### Shape language

Prefer:

- Rectangular editorial frames
- Subtle or minimal radius
- Strong horizontal/vertical alignment
- Clean dividers
- Large image planes

Avoid:

- Excessive pill-shaped UI
- Random rounded cards
- Many competing border styles
- Decorative shapes with no information purpose

---

# 3. Design Tokens

These are the template-level roles. Exact client values are defined in the example-client design system.

## 3.1 Color tokens

```yaml
colors:
  primary: "<client-primary>"
  primary-hover: "<derived-or-client-hover>"
  primary-active: "<derived-or-client-active>"
  primary-disabled: "<accessible-muted-primary>"
  secondary: "<client-secondary>"
  accent: "<controlled-accent>"
  ink: "<primary-text>"
  body: "<body-text>"
  muted: "<muted-text>"
  canvas: "<main-background>"
  surface: "<surface-background>"
  elevated: "<elevated-surface-if-needed>"
  border: "<subtle-border>"
  strong-border: "<strong-border>"
  success: "<semantic-success>"
  warning: "<semantic-warning>"
  error: "<semantic-error>"
  info: "<semantic-info>"
  overlay: "<image-overlay>"
```

### Color rules

- Use the primary color where brand recognition or hierarchy matters.
- Do not use the accent color in every section.
- Keep body text neutral and readable.
- Use dark/light section changes intentionally to create rhythm.
- Preserve readable text over photography through controlled overlays or alternate placement.
- Do not invent additional accent colors without a clear brand or functional reason.

---

# 4. Typography System

## 4.1 Roles

| Role | Recommended desktop starting point | Weight | Purpose |
|---|---:|---:|---|
| Display XL | 64–80px | 500–700 | Main hero statement |
| Display LG | 48–64px | 500–700 | Major page heading |
| Heading LG | 36–48px | 500–700 | Major section heading |
| Heading MD | 26–34px | 500–700 | Content group heading |
| Heading SM | 20–26px | 500–600 | Small subsection heading |
| Body LG | 18–20px | 400–500 | Lead paragraph |
| Body MD | 16–18px | 400–500 | Standard body copy |
| Body SM | 14–16px | 400–500 | Supporting copy |
| Caption | 12–14px | 400–500 | Metadata / supporting information |
| UI | 14–16px | 500–600 | Navigation, buttons, controls |

These are starting ranges, not immutable client values.

## 4.2 Typography rules

- Use one primary body/interface family.
- Add a display/editorial family only when it strengthens the approved brand direction.
- Keep heading hierarchy visually obvious.
- Maintain controlled line length, especially for long-form content.
- Avoid unnecessary uppercase body copy.
- Use uppercase primarily for short navigation labels, eyebrows, or metadata where the brand supports it.
- Do not allow large headings to dominate every section; reserve the highest scale for major narrative moments.

---

# 5. Spacing & Rhythm

Use a consistent spacing scale rather than arbitrary values.

```yaml
spacing:
  xs: 8px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  2xl: 64px
  section: 96–128px
```

These values are a starting system and may be adjusted for the chosen client.

### Rules

- Tight spacing connects related content.
- Medium spacing separates related groups.
- Large spacing separates narrative groups.
- Section spacing creates the visual rhythm of the page.
- Use more whitespace around major statements, leadership, milestones, and visual transitions.
- Do not use large whitespace simply to make a page look premium; it must support hierarchy.

---

# 6. Container & Grid

### Desktop baseline

- Conceptual 12-column grid.
- Wide but controlled content container.
- Consistent horizontal gutters.
- Large images may break outside the text container.

### Layout patterns

1. Full-width hero
2. Contained editorial section
3. 50/50 or asymmetric media split
4. 8/4 or 7/5 content split
5. Large statistics row
6. Project feature grid
7. Leadership grid/list
8. Timeline
9. Recognition/logo row
10. Final CTA band

### Grid rule

The grid should create **structure without making every section look the same**.

---

# 7. Navigation

## Desktop

Recommended structure:

```text
[Logo]   About   Business   Projects   Insights   Company   Contact
```

The final items are determined by the approved IA.

### Navigation behavior

- Logo links to homepage.
- Active section is visually clear.
- Dropdown/mega-navigation is used only when section depth requires it.
- Contact or primary inquiry action may receive distinct emphasis.
- Header should not consume excessive vertical space.
- Sticky behavior is optional and should be justified by long-page usability.

## Mobile

- Compact header.
- Menu trigger with visible state.
- Expandable navigation groups when needed.
- Primary inquiry/contact action remains easy to access.
- Do not create a separate mobile information architecture.

---

# 8. Hero System

The hero is the first statement of corporate authority.

## Standard Corporate Hero

```text
Eyebrow / category
Large corporate positioning statement
Short supporting statement
Primary CTA + optional secondary action
Hero image / environmental image / branded visual
```

### Rules

- One primary message.
- Do not overload with multiple unrelated claims.
- Use one dominant visual focal point.
- Hero height should feel substantial but not consume the entire page by default.
- Important proof may appear near the bottom of the hero as a compact statistic or trust signal.

## Hero variants

### A. Image-led

Use for organizations with strong photography and a visually powerful corporate identity.

### B. Statement-led

Use when the company positioning itself is the strongest asset.

### C. Split hero

Use when the hero needs to establish both a message and a supporting visual without full-bleed imagery.

---

# 9. Button & CTA System

## Primary button

Used for the main business action.

Examples:

- Discuss a Project
- Request a Quote
- Contact Us
- Explore Our Capabilities

## Secondary button

Used for supporting exploration.

Examples:

- View Projects
- About the Company
- Explore Business Units

## Text link

Used for low-emphasis navigation inside editorial content.

### Rules

- Use one clear primary CTA per section where an action is needed.
- Do not place three visually equal buttons together.
- Button labels should describe the destination or action.
- Provide hover and keyboard-focus states.
- Mobile buttons should remain comfortable to tap.

---

# 10. Content Components

## 10.1 Section Introduction

```text
Eyebrow
Section heading
1–3 sentence supporting statement
Optional CTA
```

Use to establish the purpose of a section before the main content.

## 10.2 Editorial Feature

```text
Large image
Eyebrow / category
Heading
Supporting copy
CTA
```

Use for corporate stories, major capabilities, featured projects, or important achievements.

## 10.3 Statistic Group

```text
Large value
Short label
Optional context/source
```

Examples:

- 30+ Years
- 12 Regions
- 240+ Projects

Statistics must be real and sourced from approved client information.

## 10.4 Quote / Testimonial

Use fewer, stronger testimonials instead of a repetitive carousel where possible.

## 10.5 Logo Group

Used for clients, partners, memberships, certifications, or affiliations.

Rules:

- Preserve aspect ratios.
- Maintain consistent visual treatment.
- Avoid overly large logos that compete with the company brand.

---

# 11. Projects & Case Studies

Projects are an important credibility mechanism for Corporate Authority.

## Project Listing

Recommended pattern:

```text
Section intro
Featured project
Project collection
Filters (only if needed)
Related capability CTA
```

Each item should expose enough information to answer:

- What was done?
- For whom?
- Where?
- What type of work?
- What outcome or scale?

## Project Detail

```text
Project context
Project title
Hero image
Summary
Key facts
Challenge / context
Approach / capability
Result / impact
Gallery or supporting media
Related services
Related projects
CTA
```

Avoid turning every project into an identical card-heavy case study.

---

# 12. Leadership System

Leadership is a major credibility signal in this template.

## Listing

Use consistent portrait proportions, title hierarchy, and spacing.

## Profile

```text
Portrait
Name
Role
Short introduction
Experience / responsibility
Selected expertise or achievements
Optional message
Related company content
```

### Rules

- Use professional, consistent photography.
- Keep biographies scannable.
- Do not create overly long executive profiles unless the content requires it.
- Maintain a consistent structure across all leadership profiles.

---

# 13. Corporate Timeline

Use for meaningful history, growth, expansion, or transformation.

```text
Year / period
Milestone title
Short explanation
Optional supporting media
```

### Rules

- Only include meaningful milestones.
- Avoid turning the timeline into a complete company history book.
- Use visual emphasis for major turning points.
- Support the timeline with real dates and approved facts.

---

# 14. Recognition & Proof

Recommended proof patterns:

- Awards
- Certifications
- Major milestones
- Client/partner logos
- Industry memberships
- Testimonials
- Corporate statistics

### Rule

Proof should appear **where it strengthens the relevant claim**.

Do not create a recognition wall simply because the template supports one.

---

# 15. Resource Center

The Corporate Authority version should feel structured and trustworthy rather than like a generic blog.

## Resource listing

Each resource should expose:

- Type
- Title
- Short description
- Date/version where useful
- Category
- Download/view action

## Resource detail

Where appropriate:

```text
Resource title
Metadata
Summary
Preview / description
Download
Related resources
Contact CTA
```

---

# 16. News / Insights

Corporate news should establish organizational activity and credibility.

### Listing

Use a clear editorial stream with:

- Featured story
- Secondary stories
- Categories where useful
- Date metadata

### Article

```text
Category
Title
Date / metadata
Hero image
Intro
Article body
Supporting media
Related content
CTA
```

Avoid aggressive blog-card density.

---

# 17. Forms

## Contact Form

Recommended baseline fields:

- Name
- Company / organization
- Email
- Phone (if required)
- Inquiry type
- Message

Only collect information required for the business purpose.

## RFQ

Use only for organizations where quotation requests are an actual business workflow.

### Form rules

- Clear labels.
- Inline validation.
- Visible focus state.
- Useful error messages.
- Clear success confirmation.
- Do not make every field mandatory.

---

# 18. Footer

The Corporate Authority footer should reinforce corporate completeness.

Recommended structure:

```text
Brand statement
Primary section links
Business / capability links
Resources
Contact details
Locations
Social links
Legal links
Copyright
```

The footer should be useful, not overloaded with every possible link.

---

# 19. Homepage Blueprint

## Recommended Corporate Authority homepage

### 01 — Hero
Corporate positioning + primary action.

### 02 — Corporate introduction
Concise explanation of the organization and its role.

### 03 — Evidence / scale
Years, reach, projects, capacity, locations, impact, or other verified proof.

### 04 — Business capabilities
Business units, services, industries, or core capabilities.

### 05 — Featured work
Selected projects, achievements, or case studies.

### 06 — Leadership / institutional authority
Leadership or organizational credibility.

### 07 — Recognition
Awards, certifications, partnerships, major clients, or memberships.

### 08 — Insights / resources
Selected news, reports, publications, or resources.

### 09 — Final CTA
Clear invitation to contact, request a quote, explore capabilities, or start a relationship.

### 10 — Footer
Complete corporate navigation and contact information.

---

# 20. About Page Blueprint

```text
Hero / page introduction
Company overview
History / timeline
Mission, Vision & Values
Leadership
Business units / organizational structure
Major achievements
Recognition / certifications
Related projects
CTA
```

Sections should be selected based on content volume; not every organization needs every section.

---

# 21. Listing Page Blueprint

Use for:

- Services
- Business units
- Projects
- News
- Resources
- Careers

```text
Page intro
Optional featured content
Filters (if justified)
Primary collection
Pagination / controlled load more
Related content
CTA
```

---

# 22. Detail Page Blueprint

Use for:

- Projects
- Case studies
- Services
- Publications
- News
- Leadership

```text
Breadcrumb / context
Title + metadata
Hero / opening visual
Summary
Main content
Evidence / supporting facts
Media / downloads
Related content
Primary CTA
```

---

# 23. Responsive Rules

## Desktop

- Full grid.
- Large visual compositions.
- Expanded navigation.
- Strong asymmetry where useful.

## Tablet

- Reduce column count.
- Preserve hierarchy.
- Reduce oversized typography.
- Rebalance image/text relationships.

## Mobile

- Stack narrative sections.
- Preserve content priority.
- Simplify navigation.
- Keep buttons touch-friendly.
- Maintain readable line length.
- Protect image focal points.
- Avoid horizontal overflow.

### Mobile principle

> **Do not shrink the desktop composition. Recompose the story.**

---

# 24. Accessibility Rules

- Use semantic heading order.
- Maintain sufficient text/control contrast.
- Keep keyboard focus visible.
- Use meaningful labels for forms and interactive controls.
- Do not communicate status through color alone.
- Provide appropriate alt text for informative imagery.
- Support reduced-motion preferences.
- Maintain usable touch targets.
- Ensure navigation and forms remain understandable without animation.

---

# 25. Motion Rules

Corporate Authority should use **quiet, confident motion**.

Approved patterns:

- Fade/reveal on section entry.
- Small image movement.
- Navigation transitions.
- Button hover feedback.
- Controlled gallery transitions.

Avoid:

- Constant parallax.
- Repeating background animation.
- Large scroll-jacking effects.
- Excessive text movement.
- Motion that delays content access.

---

# 26. Imagery Rules

### Preferred imagery

- Corporate facilities
- Manufacturing environments
- Architecture
- Leadership portraits
- Employees in authentic working contexts
- Major projects
- Products in professional context
- Geographic reach
- Documentary business photography

### Avoid

- Generic corporate stock imagery used everywhere.
- Low-resolution photos.
- Inconsistent photography styles.
- Excessive filters.
- Images that have no relationship to the content.

---

# 27. Anti-Patterns

Do not use the following as the default Corporate Authority approach:

- Hero + three cards + three cards repeated across every page.
- Excessive rounded cards.
- Giant statistics with no context.
- Every section using a different background color.
- Multiple competing CTA buttons.
- Decorative gradients with no brand basis.
- Random animations.
- Huge navigation menus with weak grouping.
- Extremely dense corporate text walls.
- Fake testimonials, invented statistics, or placeholder awards.
- Generic imagery that makes the organization look interchangeable.

---

# 28. AI Implementation Guidance

An AI coding/design agent using this manual should follow these rules:

1. Preserve the Corporate Authority visual hierarchy before adding decorative styling.
2. Use the defined token roles instead of inventing one-off colors, spacing, or shadows.
3. Prefer existing component patterns from the Component System before creating a new pattern.
4. Do not convert every content group into cards.
5. Keep desktop and mobile compositions intentionally different where required by content hierarchy.
6. Use the approved page blueprint as the section order baseline.
7. Treat supplied client assets and brand rules as authoritative.
8. Never invent corporate facts, statistics, awards, clients, certifications, or leadership information.
9. Keep animations restrained and removable through reduced-motion behavior.
10. Optimize imagery and avoid unnecessary dependencies or effects.
11. When uncertain, preserve hierarchy, readability, accessibility, and content intent rather than adding visual decoration.

---

# 29. Client-Specific Design System Layer

When an example client is selected, create the client-specific layer from this manual.

### Client-specific values to lock

- Logo usage
- Brand colors
- Exact typography
- Display/body font pairing
- Exact type scale
- Exact spacing scale
- Radius values
- Border treatment
- Shadow/elevation
- Button styling
- Navigation behavior
- Image art direction
- Photography style
- Motion intensity
- Icon style
- CTA wording

### Rule

The client-specific system may override template details when the approved brand requires it, but it should not break the core Corporate Authority character.

---

# 30. Manual Completion Criteria

This manual is complete when a designer or AI implementation agent can:

- Identify the Corporate Authority visual character.
- Apply the template token roles.
- Build the main page families using the defined blueprints.
- Select the appropriate hero, content, proof, profile, project, resource, form, and footer patterns.
- Implement desktop, tablet, and mobile compositions consistently.
- Apply accessibility and motion requirements.
- Avoid the documented anti-patterns.
- Apply client-specific brand values without losing the template's strategic identity.

---

## 31. Next Step

The next design task is **Example Client Selection for Template 01 — Corporate Authority**.

Once the example client is selected, this template manual becomes the foundation for the **client-specific Design Manual**, where actual colors, fonts, measurements, imagery direction, page-by-page specifications, and final implementation values are documented.
