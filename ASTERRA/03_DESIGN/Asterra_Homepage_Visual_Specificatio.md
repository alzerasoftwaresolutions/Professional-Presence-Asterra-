# Asterra — Homepage Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Homepage
**Status:** Implementation-ready visual specification
**Primary references:**

* `Asterra Homepage — Detailed Page Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Homepage Visual Objective

The Asterra homepage should function as the **primary corporate introduction**.

Within the first screen, a visitor should understand:

1. What Asterra is
2. What kind of work/capabilities it represents
3. The level of organization and professionalism
4. Where to explore further

The visual experience should establish **authority before detail**.

---

# 2. Overall Page Composition

```text
┌─────────────────────────────────────────┐
│ GLOBAL HEADER                            │
├─────────────────────────────────────────┤
│                                         │
│ HERO                                    │
│ Corporate statement + strong imagery    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ CORPORATE INTRODUCTION                  │
│ Editorial text + supporting visual      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ BUSINESS UNITS / CAPABILITIES            │
│ Structured capability presentation      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ FEATURED PROJECTS                       │
│ Large visual evidence                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ CORPORATE PROOF / EXPERTISE             │
│ Evidence / selected facts              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ SELECTED INSIGHTS                       │
│ Editorial content                       │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ FINAL CORPORATE CTA                     │
│                                         │
├─────────────────────────────────────────┤
│ GLOBAL FOOTER                            │
└─────────────────────────────────────────┘
```

The page should have clear visual pacing rather than a continuous series of cards.

---

# 3. Header

## 3.1 Desktop

Recommended structure:

```text
┌──────────────────────────────────────────────────────────┐
│ ASTERRA        About  Business  Projects  Insights  ... │
│                                                   Contact│
└──────────────────────────────────────────────────────────┘
```

### Requirements

* Clean horizontal navigation
* Strong brand presence
* Minimal decoration
* Clear active/hover state
* Primary Contact action visually identifiable
* Consistent with the global design system

The header should remain visually quiet enough that the hero remains the primary focus.

---

# 4. Hero

## 4.1 Purpose

The hero establishes Asterra's positioning immediately.

Recommended composition:

```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  CORPORATE / INDUSTRY LABEL          LARGE IMAGE       │
│                                                         │
│  MAIN HEADLINE                                          │
│  Strong statement about                                 │
│  Asterra's purpose                                      │
│                                                         │
│  Supporting statement                                   │
│                                                         │
│  [Primary CTA]  [Secondary CTA]                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4.2 Hero Layout

Use an asymmetric composition.

Approximate relationship:

```text
Text area     40–45%
Image area    55–60%
```

The exact proportions should respond naturally to the content.

The image should feel substantial rather than like a decorative thumbnail.

---

## 4.3 Hero Typography

Hierarchy:

```text
Eyebrow
    ↓
Large H1
    ↓
Supporting statement
    ↓
CTA
```

The H1 should be the strongest typographic element on the page.

Avoid placing multiple competing headlines in the hero.

---

## 4.4 Hero Image

Preferred image hierarchy:

1. Authentic Asterra project
2. Asterra facility / environment
3. Leadership/team imagery where relevant
4. High-quality contextual photography

Avoid generic corporate handshake imagery.

---

## 4.5 Hero Image Treatment

The image should retain enough detail to communicate credibility.

Avoid excessive:

* Blur
* Gradient overlays
* Filters
* Decorative masks
* Artificial effects

If text overlays the image, sufficient contrast must be maintained.

---

## 4.6 Hero CTA

Primary:

**Explore Asterra**

or another approved primary corporate action.

Secondary:

**Explore Capabilities**

The final wording should follow the approved content specification.

---

# 5. Hero Responsive Behavior

### Desktop

```text
Text | Large image
```

### Tablet

```text
Text
     Image
```

or a narrower split where the content remains readable.

### Mobile

```text
Eyebrow
Headline
Supporting text
CTA

Large image
```

The mobile hero should not simply shrink the desktop composition.

---

# 6. Corporate Introduction

## Purpose

Answer:

> Who is Asterra?

The section should be editorial rather than card-based.

Recommended composition:

```text
┌────────────────────────────────────────────────────┐
│ ABOUT ASTERRA                                      │
│                                                    │
│ A strong introductory statement      Supporting    │
│                                      image         │
│ Supporting corporate description                    │
│                                                    │
│ [Discover Asterra →]                               │
└────────────────────────────────────────────────────┘
```

---

## 6.1 Visual Hierarchy

Use:

* Small eyebrow
* Large introductory statement
* Short supporting copy
* One meaningful visual
* One contextual CTA

Do not reproduce the entire About page.

---

# 7. Business Units / Capabilities

## Purpose

Show the breadth of Asterra without overwhelming the visitor.

Recommended composition:

```text
BUSINESS / CAPABILITIES

Introductory statement

┌────────────────────┬────────────────────┐
│ Capability 01      │ Capability 02      │
│ Description        │ Description        │
│ →                  │ →                  │
├────────────────────┼────────────────────┤
│ Capability 03      │ Capability 04      │
│ Description        │ Description        │
│ →                  │ →                  │
└────────────────────┴────────────────────┘

View all capabilities →
```

The number of displayed units should depend on the actual Asterra content model.

Do not force four units if Asterra has fewer or more meaningful categories.

---

# 8. Capability Card Design

Cards should feel editorial rather than like SaaS feature cards.

Each item should prioritize:

```text
01
Capability Name

Short explanation

Explore →
```

Optional imagery may be incorporated where it adds meaningful differentiation.

Avoid excessive:

* Icons
* Shadows
* Pills
* Decorative gradients

---

# 9. Featured Projects

## Purpose

Demonstrate that Asterra's capabilities are backed by real work.

This section should be **image-led**.

Recommended composition:

```text
SELECTED PROJECTS

Introductory text

┌───────────────────────────────────────────────┐
│                                               │
│             FEATURED PROJECT                  │
│               LARGE IMAGE                     │
│                                               │
└───────────────────────────────────────────────┘

Project Name
Sector / Location
Short description

┌──────────────────────┐ ┌────────────────────┐
│ Secondary Project    │ │ Secondary Project  │
│ Image                │ │ Image              │
└──────────────────────┘ └────────────────────┘

View all projects →
```

---

# 10. Project Image Treatment

The primary project should receive substantially more visual weight than secondary projects.

Example:

```text
Primary
████████████████████

Secondary     Secondary
████████      ████████
```

This creates a clear visual hierarchy.

---

# 11. Project Metadata

Keep metadata concise.

Potential information:

```text
Project Name
Sector
Location
Year
Business Unit
```

Only display information that is actually useful.

Do not turn project cards into technical data tables.

---

# 12. Corporate Proof / Expertise

## Purpose

Provide evidence supporting Asterra's credibility.

This section should not rely exclusively on numerical statistics.

Potential evidence:

* Experience
* Areas of expertise
* Geographic reach
* Project scale
* Organizational capability
* Certifications
* Partnerships
* Relevant corporate facts

Use only verified information.

---

# 13. Proof Section Visual Direction

A strong composition could be:

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│  WHY ASTERRA?                                       │
│                                                     │
│  Large statement                                    │
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Evidence │ │ Evidence │ │ Evidence │            │
│  │          │ │          │ │          │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

If statistics are used, they should be visually restrained.

Avoid oversized numbers without meaningful context.

---

# 14. Selected Insights

## Purpose

Demonstrate knowledge and expertise.

The section should visually contrast with Projects.

Projects:

**Visual / evidence-driven**

Insights:

**Editorial / knowledge-driven**

Recommended:

```text
SELECTED INSIGHTS

┌──────────────────────────┐
│ Feature image            │
│                          │
│ Category                 │
│ Article title            │
│ Date                     │
│ Read insight →           │
└──────────────────────────┘

┌──────────────────────────┐
│ Secondary insight        │
└──────────────────────────┘
```

---

# 15. Insight Card Design

Prioritize:

1. Category
2. Title
3. Short contextual information
4. Date
5. Reading action

Avoid long excerpts.

The homepage should encourage exploration rather than reproduce the article.

---

# 16. Final Corporate CTA

The final CTA should provide a strong conclusion.

Recommended visual treatment:

```text
┌───────────────────────────────────────────────┐
│                                               │
│       LET'S BUILD WHAT COMES NEXT.            │
│                                               │
│  Short corporate statement                    │
│                                               │
│          [ Contact Asterra → ]                │
│                                               │
└───────────────────────────────────────────────┘
```

The exact message should use the approved Asterra content rather than invented marketing language.

---

# 17. CTA Visual Treatment

The final CTA may use a contrasting background.

For example:

```text
Light page
   ↓
Dark CTA section
   ↓
Light typography
   ↓
Accent CTA
```

This creates a clear ending without introducing a new visual language.

---

# 18. Footer

The footer should provide:

* Asterra identity
* Main navigation
* Business/navigation links
* Contact information
* Relevant legal links
* Social links where applicable
* Copyright information

Recommended structure:

```text
┌──────────────────────────────────────────────────────┐
│ ASTERRA                                               │
│ Corporate statement                                   │
│                                                      │
│ About       Business       Projects       Insights   │
│ Leadership  Careers       Contact                   │
│                                                      │
│ Contact information                                  │
│                                                      │
│ Legal / Privacy                     © ASTERRA        │
└──────────────────────────────────────────────────────┘
```

---

# 19. Section Spacing

Major sections should have generous vertical separation.

Conceptually:

```text
Hero
        ↓
Large spacing
        ↓
Introduction
        ↓
Large spacing
        ↓
Capabilities
        ↓
Medium spacing
        ↓
Projects
        ↓
Large spacing
        ↓
Proof
        ↓
Medium spacing
        ↓
Insights
        ↓
Large spacing
        ↓
CTA
```

Avoid making every section equally tall.

---

# 20. Visual Rhythm

The page should alternate between different content modes:

```text
VISUAL
  ↓
EDITORIAL
  ↓
STRUCTURED
  ↓
VISUAL
  ↓
EVIDENCE
  ↓
EDITORIAL
  ↓
CONVERSION
```

This prevents visual fatigue.

---

# 21. Grid System

The homepage should use a consistent underlying grid.

Conceptually:

```text
Desktop
12-column grid

Tablet
8-column grid

Mobile
4-column grid
```

Individual sections may span different numbers of columns.

This enables controlled asymmetry while maintaining alignment.

---

# 22. Responsive Grid Behavior

### Desktop

```text
12 columns
```

### Tablet

```text
8 columns
```

### Mobile

```text
4 columns
```

Cards should collapse naturally based on content rather than blindly preserving desktop dimensions.

---

# 23. Mobile Section Order

The mobile page should preserve logical reading order.

Example:

```text
Hero
↓
Corporate Introduction
↓
Capabilities
↓
Projects
↓
Proof
↓
Insights
↓
CTA
↓
Footer
```

Do not allow visual positioning to create confusing semantic order.

---

# 24. Mobile Capability Cards

Desktop:

```text
[01] [02]
[03] [04]
```

Mobile:

```text
[01]
[02]
[03]
[04]
```

Each card should retain enough whitespace to remain easy to scan.

---

# 25. Mobile Projects

The featured project should remain visually dominant.

```text
Featured Project
████████████████

Project information

Secondary Project
████████████████

Secondary Project
████████████████
```

Avoid tiny project thumbnails.

---

# 26. Mobile Typography

Typography should scale proportionally rather than simply using desktop sizes.

Priorities:

1. Headline readability
2. Comfortable body text
3. Clear section hierarchy
4. Appropriate line lengths

Avoid overly large headlines that consume the entire mobile viewport.

---

# 27. Interaction

Recommended interactions:

### Navigation

Clear hover and active states.

### Capability

Subtle title/arrow movement.

### Project

Subtle image or content transition.

### Insight

Subtle link/card emphasis.

### CTA

Clear hover/pressed states.

Animations should remain secondary to content.

---

# 28. Motion

Recommended:

```text
Page load
→ restrained entrance

Hover
→ subtle movement

Image
→ minimal scale/crop transition

Navigation
→ fast state transition
```

Avoid:

* Scroll hijacking
* Excessive parallax
* Long reveal sequences
* Constant animation
* Decorative motion with no purpose

---

# 29. Accessibility

The homepage must maintain:

* Semantic heading hierarchy
* Keyboard navigation
* Visible focus states
* Descriptive links
* Accessible navigation
* Meaningful alt text
* Sufficient contrast
* Accessible buttons
* Reduced-motion support

Visual hierarchy must not depend solely on color.

---

# 30. SEO Structure

The homepage should have:

```text
One primary H1
   ↓
H2 section headings
   ↓
H3 where genuinely required
```

Possible semantic structure:

```text
H1 → Asterra's primary corporate proposition

H2 → About / Corporate Introduction
H2 → Business / Capabilities
H2 → Selected Projects
H2 → Expertise / Proof
H2 → Insights
H2 → Contact / Engagement
```

Exact headings should follow the approved content specification.

---

# 31. Internal Linking

The homepage should establish pathways to major sections.

Recommended:

```text
Hero
 → Primary destination

About
 → Corporate Story

Capabilities
 → Business Listing

Projects
 → Projects Listing

Insights
 → Insights Listing

Final CTA
 → Contact
```

This creates a clear crawlable and user-oriented navigation structure.

---

# 32. Homepage Metadata

The homepage should have:

* Unique title
* Useful meta description
* Correct canonical URL
* Appropriate Organization/WebSite structured data where applicable
* Social sharing metadata
* Correct language metadata

Metadata should accurately represent Asterra rather than simply repeating a keyword target.

---

# 33. Image SEO

Every meaningful homepage image should have:

* Descriptive filename
* Appropriate alt text
* Responsive dimensions
* Optimized format
* Correct intrinsic dimensions

Decorative images should use appropriate empty alternative text where applicable.

---

# 34. Performance Requirements

The homepage is the most important page for performance optimization.

Prioritize:

### Hero image

Do not serve a desktop-sized asset to small mobile screens unnecessarily.

### Fonts

Avoid loading unnecessary font weights.

### Images

Use responsive image delivery.

### Motion

Avoid heavy animation libraries where CSS transitions are sufficient.

### JavaScript

Keep interactive functionality lightweight.

---

# 35. Core Web Vitals Considerations

The homepage design should specifically protect:

### LCP

The primary hero content/image should load efficiently.

### CLS

Reserve image dimensions and avoid late layout shifts.

### INP

Avoid unnecessary JavaScript-heavy interactions.

The objective is a fast, stable experience rather than achieving a perfect laboratory score at the expense of design or functionality.

---

# 36. Content Constraints

The visual design must adapt to actual content.

Do not:

* Invent statistics to fill layouts
* Create fake projects
* Add meaningless capability categories
* Create artificial testimonials
* Add generic corporate claims

If content does not exist, the section should be reconsidered rather than filled with placeholder marketing copy.

---

# 37. Homepage Component Map

The implementation can conceptually map to:

```text
HomePage
│
├── Header
│
├── HeroSection
│
├── CorporateIntroSection
│
├── CapabilitiesSection
│   └── CapabilityPreview
│
├── FeaturedProjectsSection
│   └── ProjectPreview
│
├── ExpertiseProofSection
│
├── FeaturedInsightsSection
│   └── InsightPreview
│
├── CorporateCTASection
│
└── Footer
```

These are conceptual component boundaries, not mandatory implementation names.

---

# 38. Content/Data Dependencies

The homepage should consume structured content where appropriate.

```text
Homepage
├── Corporate introduction
├── Featured capabilities
├── Featured projects
├── Corporate proof
└── Featured insights
```

The homepage should **not directly own duplicated copies** of content that belongs to Business, Projects, or Insights data models.

---

# 39. Design-to-Implementation Rule

The implementation should preserve the visual intent.

Do not simplify the design into:

```text
Hero
↓
Generic Cards
↓
Generic Cards
↓
Generic Cards
↓
CTA
```

The most important implementation requirement is to preserve:

**editorial composition + visual hierarchy + evidence + corporate authority.**

---

# 40. Homepage Quality Gate

Before approving the implemented homepage, verify:

### Brand

* Does it immediately feel like Asterra?
* Is the visual identity consistent?

### Hierarchy

* Is the primary message obvious?
* Can sections be scanned quickly?

### Composition

* Is there sufficient visual variation?
* Are grids aligned?

### Content

* Is every section useful?
* Is there unnecessary duplication?

### Imagery

* Are images credible and relevant?
* Are they appropriately cropped?

### Responsive

* Does the design remain intentional on mobile?

### Accessibility

* Can all content and interactions be accessed?

### Performance

* Is the hero optimized?
* Are images and fonts appropriately loaded?

### SEO

* Is the semantic structure logical?
* Are important pages linked?
* Are metadata and image requirements satisfied?

### Conversion

* Is there a clear path toward Contact?
* Are CTAs appropriate to the visitor's context?

---

# 41. Final Homepage Design Direction

The homepage should ultimately feel like:

```text
        ASTERRA
           │
           ↓
      Strong Identity
           │
           ↓
      Clear Capability
           │
           ↓
      Proven Experience
           │
           ↓
      Demonstrated Expertise
           │
           ↓
       Opportunity
           │
           ↓
        CONTACT
```

The design should communicate **confidence through restraint**.

The strongest visual elements should be:

1. Typography
2. Authentic imagery
3. Layout composition
4. Whitespace
5. Evidence
6. Clear calls to action

—not decorative effects.

---

# 42. Status

**Homepage Visual Specification: APPROVED**

This is now sufficiently detailed to serve as the **visual blueprint for implementing the Asterra homepage**.

The next page-specific visual specification should follow the same approach, but only where it adds information beyond the existing page specification.

## Next

**`Asterra About — Visual Specification`**

That will translate the already-defined **Corporate Story** page into its implementation-ready visual composition without repeating the general Asterra design architecture.
