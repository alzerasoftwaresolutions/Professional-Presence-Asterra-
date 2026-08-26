# Package 3 — Professional Presence
## Example Client — Asterra Manufacturing Group
### Client-Specific Design Manual — Corporate Authority
**Version:** 1.1  
**Template:** 01 — Corporate Authority  
**Status:** Fictional example client for design-system development

> **Important:** Asterra Manufacturing Group is a fictional example organization created for this package workflow. All brand values, content, statistics, names, locations, and imagery directions in this document are design assumptions, not facts about a real company.

---

## 1. Client Profile

### Organization
**Asterra Manufacturing Group**

### Sector
Industrial manufacturing and export.

### Positioning
A diversified manufacturing group serving regional and international markets through multiple production businesses.

### Primary audiences
- Customers and procurement teams
- Business partners and distributors
- Investors and institutional stakeholders
- Suppliers
- Employees and job applicants
- Government and industry stakeholders

### Primary website goals
1. Establish strong corporate credibility.
2. Present the organization as established and capable.
3. Make business units and capabilities easy to understand.
4. Demonstrate scale through projects, facilities, certifications, and measurable evidence.
5. Support inquiries, partnership opportunities, and recruitment.
6. Provide a scalable platform for corporate news and resources.

### Core communication question
> **Who is Asterra, what does the group do, and why is it a credible organization to work with?**

---

# 2. Brand & Design Character

Asterra should feel **industrial, established, precise, confident, and forward-looking**. The design uses a deep evergreen foundation, mineral-teal secondary tones, a warm ivory canvas, distinctive editorial typography, large documentary photography, and disciplined grid alignment. It intentionally avoids the navy-and-copper construction aesthetic used by the Stonebridge example. Authority comes from scale, evidence, production imagery, leadership, and clear information hierarchy rather than visual decoration.

### Visual personality

- Established
- Precise
- Confident
- Industrial
- Responsible
- Forward-looking

### Visual density
**Medium.** The site can communicate substantial information, but sections should remain visually separated and readable.

### Distinctiveness from Stonebridge
Asterra must not visually inherit Stonebridge's navy/copper construction language. Shared Corporate Authority principles apply at the structural level only: hierarchy, proof, leadership, projects, and corporate trust remain shared, while Asterra uses evergreen, mineral teal, warm ivory, technical/editorial typography, manufacturing/process imagery, and more restrained corporate-group compositions.

### Shape language

- Mostly rectangular and editorial.
- Subtle corner rounding only where useful.
- Strong horizontal rules and aligned edges.
- Minimal floating cards.
- Large image planes and structured content blocks.

### Depth
Mostly flat with restrained elevation. Shadows should be subtle and used only where they improve separation or interaction clarity.

---

# 3. Brand Color System

These values are fictional and are intended to create a credible industrial-corporate identity.

```yaml
colors:
  primary: "#173A35"          # Deep evergreen
  primary-hover: "#22564F"
  primary-active: "#102A27"
  primary-disabled: "#7E8E8B"
  secondary: "#3E5A58"         # Mineral green-gray
  accent: "#4F7C84"             # Mineral teal
  accent-hover: "#3E666D"
  ink: "#202B29"
  body: "#46514F"
  muted: "#76807D"
  canvas: "#F3F0E8"             # Warm ivory
  surface: "#FFFFFF"
  elevated: "#FFFFFF"
  border: "#D9DDD8"
  strong-border: "#B8C2BD"
  success: "#2F6B4F"
  warning: "#A66A2B"
  error: "#A63D32"
  info: "#3F6877"
  overlay: "rgba(23,58,53,0.62)"
```

### Color usage ratio

Approximate visual balance:

- **70%** warm neutral / white surfaces
- **20%** evergreen and dark structural sections
- **10%** mineral-teal accent and supporting emphasis

### Rules

- Evergreen is the main authority color.
- Mineral teal is an accent, not a second dominant color.
- Teal should identify important actions, highlights, selected states, and small emphasis.
- Do not place saturated teal behind large amounts of body text.
- Use warm ivory backgrounds to give the group a more distinctive editorial identity.
- Deep evergreen sections should be used as deliberate visual chapters.
- Avoid drifting back toward navy/copper combinations associated with construction-focused references.

---

# 4. Typography System

## Primary interface font
**IBM Plex Sans** — chosen for a technical, institutional interface with strong readability across dense corporate information.

## Display font
**IBM Plex Serif** — used selectively for major corporate statements, heritage moments, and large editorial headings.

> These font choices are fictional project selections for demonstration and should be replaced if the client provides an existing approved brand typography system.

### Type scale

| Style | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Display XL | 72px | 700 | 0.98 | Main homepage hero |
| Display LG | 56px | 700 | 1.00 | Major page headings |
| Display MD | 44px | 650 | 1.05 | Large section statements |
| Heading LG | 34px | 650 | 1.10 | Major sections |
| Heading MD | 26px | 650 | 1.15 | Content groups |
| Heading SM | 20px | 600 | 1.20 | Small sections/cards |
| Body LG | 19px | 400 | 1.55 | Lead copy |
| Body MD | 16px | 400 | 1.60 | Standard copy |
| Body SM | 14px | 400 | 1.50 | Supporting copy |
| Caption | 12px | 500 | 1.40 | Metadata |
| UI | 14px | 600 | 1.20 | Navigation/buttons |

### Typography rules

- Hero headlines should normally stay within 2–3 lines on desktop.
- Major headings should not fill the entire viewport width.
- Body copy should generally remain between 55–75 characters per line for long-form reading.
- Use title case for headings.
- Use uppercase only for short eyebrows, navigation labels, or metadata.
- Avoid using the display font for dense paragraphs.

---

# 5. Spacing & Layout Tokens

```yaml
spacing:
  xs: 8px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 96px
  section: 112px
  section-lg: 144px

layout:
  max-width: 1280px
  text-max-width: 720px
  reading-max-width: 760px
  desktop-gutter: 48px
  tablet-gutter: 32px
  mobile-gutter: 20px
```

### Grid

Desktop: conceptual 12-column grid.

- Standard gap: 24px.
- Large editorial gap: 32px.
- Full-bleed image sections may break the grid.
- Text should remain aligned to the primary content grid.

### Responsive thresholds

```yaml
breakpoints:
  mobile: < 768px
  tablet: 768px–1099px
  desktop: >= 1100px
```

These are design targets; implementation may adjust exact breakpoints if required by the technical stack.

---

# 6. Radius, Borders & Elevation

```yaml
radius:
  none: 0px
  subtle: 2px
  medium: 6px
  large: 10px
  pill: 999px   # Only for compact status/control cases

borders:
  standard: 1px solid #D9DDE0
  strong: 1px solid #B7C0C6

shadows:
  subtle: 0 6px 20px rgba(11,31,51,0.08)
```

### Rules

- Default content sections are flat.
- Use subtle elevation for floating navigation, menus, or interactive surfaces.
- Do not use shadows to make every content block look like a card.
- Rounded corners should remain secondary to grid and typography.

---

# 7. Navigation System

## Desktop structure

```text
Logo
About
Business
Projects
Insights
Careers
Contact
Primary CTA: Request a Quote
```

### Navigation behavior

- White or warm-neutral background for the standard header.
- Evergreen text.
- Mineral teal used for active/primary action emphasis.
- Header may become compact on scroll.
- Dropdowns should group related information rather than list every page.

### Business mega-navigation

When applicable:

```text
Business
├── Manufacturing
├── Export & Distribution
├── Industries Served
└── Facilities
```

### Mobile

- Compact logo.
- Menu trigger with clear open/close state.
- Expandable Business and About groups.
- Request a Quote remains easy to reach.

---

# 8. Hero System

## Homepage hero

### Structure

```text
CORPORATE MANUFACTURING GROUP
Engineering capability. Industrial scale. Regional reach.
Short supporting statement.
[Explore Our Business] [Request a Quote]
Large manufacturing / facility image
```

### Visual direction

- Image-led hero.
- Deep evergreen overlay if text sits on image.
- Mineral-teal eyebrow or CTA accent.
- Large typography.
- Image should show authentic industrial scale: factory floor, facility, machinery, logistics, or team in production context.

### Hero rule

The hero communicates **positioning**, not a complete list of services.

---

# 9. Homepage Page Specification

## 01 — Hero
Corporate positioning and primary CTA.

## 02 — Company Introduction
Short statement explaining who Asterra is, with one supporting image or business-group visual.

## 03 — Evidence of Scale
Fictional demo values can be shown during design exploration, but the production site must use verified client information.

Example pattern:

```text
25+
Years of industrial experience

8
Production facilities

14
Export markets

3,500+
Employees
```

## 04 — Business Units
Three or four major business areas with strong visual differentiation.

## 05 — Featured Projects / Capabilities
One large feature followed by supporting items.

## 06 — Leadership / Corporate Authority
Short introduction to leadership and a path to full profiles.

## 07 — Recognition & Certifications
Selected awards, certifications, memberships, or major partnerships.

## 08 — News / Resources
Featured corporate update plus selected resources.

## 09 — Final CTA
Business inquiry, partnership, or RFQ pathway.

## 10 — Footer
Full corporate navigation.

### Homepage rhythm

The page should alternate between:

**Information-rich → visual → evidence → narrative → proof → action**

This prevents a repetitive grid of cards.

---

# 10. About Page

### Structure

```text
Hero
Company overview
Our story / history
Mission, Vision & Values
Corporate milestones
Leadership
Business units
Recognition / certifications
CTA
```

### Design direction

- History uses a horizontal/vertical timeline treatment.
- Mission, Vision & Values should use strong typography rather than equal cards by default.
- Leadership uses a consistent portrait grid.
- Milestones can be integrated into the story instead of becoming a separate visual module if content is limited.

---

# 11. Business / Business Unit Pages

## Business listing

```text
Page introduction
Featured business unit
Business-unit collection
Industries served
Capabilities / facilities
CTA
```

## Business detail

```text
Context / category
Business unit title
Hero visual
Overview
Capabilities
Markets / industries
Facilities or footprint
Selected projects
Certifications / proof
Related resources
CTA
```

### Rule

The Business structure should communicate the organization's **capability ecosystem**, not merely provide a list of services.

---

# 12. Projects System

## Project listing

Use:

- One featured project.
- Editorial project grid.
- Optional filters by sector/year/location.

## Project detail

```text
Project category
Project title
Hero image
Project summary
Key facts
Scope / challenge
Asterra capability
Outcome / impact
Gallery
Related business unit
Related projects
CTA
```

### Project metadata

Recommended:

- Client
- Location
- Sector
- Completion year
- Scope
- Services/capabilities

Only display fields that have real approved information.

---

# 13. Leadership System

### Listing

Portrait + name + role + short expertise.

### Detail

```text
Portrait
Name
Role
Executive statement
Biography
Responsibility / expertise
Selected achievements
Related business units
```

### Visual rule

Use consistent portrait crop, lighting style, and background treatment. Avoid mixing casual employee photography with formal executive portraits within the same leadership system.

---

# 14. Recognition System

Use a restrained evidence wall.

### Supported proof

- Certifications
- Awards
- Major partnerships
- Industry memberships
- Quality standards
- Corporate milestones

### Presentation

Use logo rows or compact evidence groups instead of dozens of equal-size cards.

---

# 15. Resource Center

### Resource types

- Company profile
- Product catalogs
- Technical documents
- Sustainability/annual reports
- Brochures
- Media kit

### Listing

```text
Resource center intro
Featured resource
Category/filter row if needed
Resource listing
Related corporate content
CTA
```

### Resource card

```text
Type
Title
Short description
Date/version
Download / View
```

---

# 16. News & Insights

### Listing

- Featured story.
- Editorial stream.
- Category filters only when content volume justifies them.

### Article

```text
Category
Title
Date
Hero image
Intro
Article body
Supporting media
Related content
CTA
```

The article should feel like corporate journalism, not a generic blog template.

---

# 17. Careers

### Structure

```text
Career hero
Why Asterra
Culture / values
People and workplace imagery
Open opportunities
Benefits / employee proposition
Application CTA
```

Use the Careers page to reinforce the corporate brand rather than turning it into a generic recruitment portal.

---

# 18. Contact & RFQ

### Contact structure

```text
Contact introduction
Primary contact methods
Departments
Office locations
Map
Contact form
Request for Quote CTA
```

### RFQ form

Only include fields required by the actual sales process. Example fields:

- Name
- Organization
- Email
- Phone
- Project/product category
- Estimated requirement
- Message
- Attachment where genuinely useful

---

# 19. Button & CTA Tokens

```yaml
button:
  primary:
    background: "#4F7C84"
    text: "#FFFFFF"
    hover: "#3E666D"
    height: 48px
    horizontal-padding: 20px
    radius: 2px
  secondary:
    background: "transparent"
    text: "#173A35"
    border: "#173A35"
    hover-background: "#173A35"
    hover-text: "#FFFFFF"
```

### CTA hierarchy

1. Primary: Request a Quote / Contact / Discuss a Partnership
2. Secondary: Explore Business / View Projects / About Us
3. Text: Read More / View Details / Download

Avoid multiple primary CTAs competing within one section.

---

# 20. Imagery Art Direction

## Primary photography style

Authentic, documentary, architectural, technical, and human.

### Preferred scenes

- Production lines
- Facilities
- Machinery
- Logistics
- Skilled employees at work
- Executive leadership
- Products in industrial context
- Warehouses / ports / logistics
- Regional and international operations

### Composition

- Strong leading lines.
- Architectural symmetry where appropriate.
- Human scale against large industrial environments.
- Natural or realistic lighting.
- Wide images for hero and feature sections.

### Avoid

- Generic handshake stock photos.
- Overly staged office scenes.
- Heavy filters.
- Low-resolution phone images in major hero positions.
- Repeated use of the same photograph across pages.

---

# 21. Iconography

Use one simple outlined icon family with consistent stroke weight.

### Appropriate uses

- Business categories
- Contact methods
- Location
- Download
- Arrow/navigation
- Small capability indicators

Icons should support meaning, not replace clear labels.

---

# 22. Motion

### Motion character
**Quiet, confident, industrial precision.**

### Recommended

- 250–400ms standard UI transitions.
- 400–650ms content reveals.
- Subtle image scale on hover.
- Small navigation/header transitions.
- Controlled hero image reveal.

### Avoid

- Scroll-jacking.
- Constant parallax.
- Large looping animations.
- Decorative motion behind body copy.

Reduced-motion behavior must remove non-essential motion.

---

# 23. Responsive Composition

## Desktop

- Strong 12-column structure.
- Large photography.
- Asymmetric sections.
- Expanded navigation.

## Tablet

- Reduce column count.
- Move complex grids toward two-column compositions.
- Reduce hero type scale.
- Preserve evidence hierarchy.

## Mobile

- Stack narrative sections.
- Statistics become 2-column or single-column groups depending on content.
- Business units become vertical editorial items.
- Project grids become a readable list/stack.
- Hero image and text remain intentional rather than simply compressed.
- Primary CTA remains prominent.

### Mobile rule

> **Recompose the corporate story, do not shrink the desktop page.**

---

# 24. Accessibility

- Semantic heading sequence.
- Visible focus states.
- Minimum comfortable touch targets.
- Sufficient text/control contrast.
- Meaningful form labels.
- Error and success messages that do not rely only on color.
- Appropriate alt text for industrial imagery.
- Reduced-motion support.
- Clear link destinations.

---

# 25. Performance

### Priority order

1. Hero/above-the-fold content.
2. Main typography and layout.
3. First important evidence block.
4. Remaining media and lower-priority content.

### Rules

- Hero images should use responsive variants.
- Do not load original photography at unnecessary dimensions.
- Use only required font weights.
- Keep animation lightweight.
- Defer lower-priority galleries and media where appropriate.
- Avoid third-party embeds in prominent areas unless they have clear business value.

---

# 26. SEO & Content Rules

### Important indexable page types

- Home
- About
- Business units
- Projects
- Services/capabilities
- Resources
- News
- Careers
- Locations

### Page-level requirements

Each important page should have:

- Intentional page title.
- Useful meta description.
- One clear primary heading.
- Descriptive URL.
- Internal links to relevant content.
- Appropriate image alt treatment.
- Structured data opportunities where justified.

Do not create SEO pages that contain thin or duplicate corporate content.

---

# 27. Analytics Events

Use only events corresponding to actual site behavior.

```text
contact_form_submit
rfq_submit
phone_click
email_click
document_download
project_view
resource_view
career_action
key_cta_click
location_action
```

### Key conversion path

```text
Landing page
→ Understand company
→ Verify credibility
→ Explore capability
→ View proof
→ Contact / RFQ
```

---

# 28. Design Anti-Patterns for Asterra

Do not introduce:

- Generic SaaS-style dashboards.
- Overly rounded consumer UI.
- Bright multi-color palettes.
- Huge statistics without evidence.
- Repetitive 3-column card sections.
- Stock-photo office clichés.
- Unnecessary gradients.
- Excessive dark sections.
- Excessive animation.
- Invented business claims.
- Invented statistics or certifications.
- Decorative industrial motifs that have no relationship to the brand.

---

# 29. AI Implementation Guidance

An AI design or coding agent should:

1. Treat the Asterra client values in this document as the current source of truth for the fictional example.
2. Use the token system instead of inventing arbitrary colors, spacing, or typography.
3. Preserve the Corporate Authority hierarchy from the Template 01 manual.
4. Use the page blueprints as the baseline section order.
5. Do not convert every section into a card grid.
6. Recompose layouts intentionally for mobile.
7. Never invent additional company facts, projects, executives, certifications, or statistics.
8. Use authentic-looking manufacturing imagery only as placeholder art direction; final assets must be approved.
9. Keep motion restrained and removable for reduced-motion users.
10. Prefer reusable components from the Component System before creating new patterns.
11. Treat accessibility and performance as part of the visual implementation, not post-design corrections.

---

# 30. Client-Specific Component Priorities

The first implementation should prioritize:

### Highest priority
- Header/navigation
- Hero
- Section introduction
- CTA buttons
- Statistics
- Business-unit feature
- Project card/list
- Leadership profile
- Recognition/logo group
- Contact form
- Footer

### Second priority
- Timeline
- Resource item
- News card/article header
- Location/office block
- Gallery

### Lower priority
Only create additional components when the approved content requires them.

---

# 31. Client-Specific Design Validation Checklist

Before approving the visual system:

- [ ] Evergreen, mineral teal, and warm ivory create a clearly distinct corporate identity from construction-oriented references.
- [ ] Typography feels corporate and distinctive without becoming decorative.
- [ ] The homepage communicates scale within the first few sections.
- [ ] Evidence is visually stronger than unsupported marketing claims.
- [ ] Business units are easy to understand.
- [ ] Projects demonstrate capability without becoming a generic portfolio grid.
- [ ] Leadership adds institutional credibility.
- [ ] Mobile layouts preserve the intended story.
- [ ] Forms and CTAs are obvious but not aggressive.
- [ ] Imagery feels authentic to manufacturing and industrial work.
- [ ] Motion remains restrained.
- [ ] Accessibility and performance rules remain intact.
- [ ] No invented company facts have entered the design or content.

---

# 32. Relationship to the Template Manual

This document inherits the strategic rules of **Template 01 — Corporate Authority** and adds the client-specific layer for the fictional Asterra example.

```text
Template 01 — Corporate Authority
        ↓
Asterra Manufacturing Group
        ↓
Client-specific visual tokens
        ↓
Client-specific page composition
        ↓
Client-specific content + assets
        ↓
Final design / implementation
```

The template remains reusable. The client layer is what makes this design specific to Asterra.

---

# 33. Next Step

The next detailed design task is to use this client-specific manual to define the **actual page-by-page specifications and visual compositions for Asterra Manufacturing Group**, beginning with the homepage and then the major page families.
