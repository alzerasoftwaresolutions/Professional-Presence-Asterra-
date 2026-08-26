# Package 3 — Professional Presence
## Example Client — Asterra Manufacturing Group
### Homepage — Detailed Page Specification

**Version:** 1.0  
**Template:** 01 — Corporate Authority  
**Client:** Asterra Manufacturing Group (fictional example)  
**Status:** Design specification  

> This document converts the approved Asterra client-specific design manual into a page-level blueprint for the homepage. It is implementation-ready guidance, not final production copy or code.

---

## 1. Page Purpose

The homepage is the primary **corporate orientation and credibility page**.

It must quickly answer:

> **Who is Asterra, what does the group do, and why is it credible?**

The page should guide users through a deliberate sequence:

**Understand → Verify → Explore → Trust → Engage**

It should not attempt to expose every company detail. Deeper content belongs to the relevant internal page families.

---

## 2. Primary Audiences

- Customers and procurement teams
- Business partners and distributors
- Institutional stakeholders
- Suppliers
- Prospective employees
- Government and industry stakeholders

### Primary homepage actions

1. Explore Business
2. Request a Quote / Make an Inquiry
3. Explore Projects or Capabilities
4. Learn About Asterra

The first action should be business discovery; the primary conversion action should remain easy to reach without dominating the page.

---

## 3. Visual Direction

The homepage must use the approved Asterra identity:

- Deep evergreen as the primary authority color
- Mineral teal as the accent
- Warm ivory and white as the dominant canvas
- IBM Plex Sans for interface and body text
- IBM Plex Serif selectively for major editorial statements
- Industrial/manufacturing photography
- Structured 12-column desktop grid
- Mostly flat surfaces
- Minimal floating cards
- Restrained motion

### Distinctiveness rule

Do **not** introduce Stonebridge-style navy/copper construction cues, blueprint motifs, orange CTAs, or construction-specific visual language. Asterra should read as a diversified manufacturing group rather than a construction company.

---

# 4. Page Structure Overview

```text
Global Header
    ↓
01 Hero — Corporate Positioning
    ↓
02 Group Introduction — Who We Are
    ↓
03 Evidence of Scale — Proof
    ↓
04 Business Units — What We Do
    ↓
05 Featured Projects / Capabilities — Evidence in Practice
    ↓
06 Leadership — Corporate Authority
    ↓
07 Recognition / Certifications — Institutional Proof
    ↓
08 News / Resources — Ongoing Activity
    ↓
09 Final CTA — Business Engagement
    ↓
Global Footer
```

The page rhythm should alternate between **information-rich → visual → evidence → narrative → proof → action**.

---

# 5. Global Header

## Purpose

Provide orientation, expose the primary corporate hierarchy, and keep the main conversion action accessible.

## Desktop composition

```text
[ASTERra LOGO]    About    Business    Projects    Insights    Careers    Contact    [Request a Quote]
```

### Layout rules

- Warm ivory or white header background.
- Logo anchored to the left content edge.
- Navigation aligned centrally/right within the main container.
- Primary CTA uses mineral teal.
- Active navigation uses subtle teal emphasis rather than a heavy filled tab.
- Header height should feel substantial but not oversized.
- A compact sticky state may appear after scroll.

## Mobile composition

```text
[LOGO]                         [MENU]
```

When expanded:

```text
About
Business
Projects
Insights
Careers
Contact

[Request a Quote]
```

The primary CTA should remain easy to reach at the end of the menu or as a persistent high-priority action where appropriate.

---

# 6. Section 01 — Hero

## Objective

Immediately establish Asterra as an established manufacturing group.

## Content hierarchy

**Eyebrow**  
Corporate Manufacturing Group

**Headline**  
Engineering capability. Industrial scale. Regional reach.

**Supporting statement**  
A short two- or three-line explanation of Asterra's role, capabilities, and market presence.

**Actions**  
[Explore Our Business]  [Request a Quote]

## Composition

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  EYEBROW                                                    │
│  Large serif/sans headline              Large industrial    │
│  Supporting statement                   image               │
│  [Primary CTA] [Secondary CTA]                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Visual treatment

- Large documentary manufacturing image.
- Image may occupy approximately 45–55% of the visual field.
- Text should have enough negative space to remain dominant.
- If text overlays imagery, use a deep evergreen overlay only as required for contrast.
- Avoid busy machinery backgrounds directly behind the headline.

### Image direction

Preferred subjects:

- modern manufacturing facility
- production line
- precision machinery
- workers operating equipment
- logistics/export environment
- large-scale facility exterior

Avoid:

- generic office stock imagery
- construction sites
- hard hats as the dominant visual cue
- unrelated industrial stock photos

### Hero motion

- Initial image reveal: subtle
- Text reveal: short and restrained
- CTA hover: subtle color/position change
- No continuous looping motion
- No scroll-jacking

## Mobile

- Stack text and image rather than forcing a split.
- Headline remains the first visual priority.
- Image should follow the text or become a controlled background depending on the selected composition.
- Maintain strong CTA visibility.

---

# 7. Section 02 — Group Introduction

## Objective

Explain what Asterra is before presenting detailed business units.

## Structure

```text
SECTION LABEL
Who We Are

Large statement / short corporate introduction

Supporting paragraph(s)

[Learn About Asterra]

                         Supporting image / group visual
```

### Layout

Use an asymmetric split composition:

- Text: approximately 5 columns
- Image: approximately 6–7 columns
- Remaining space used as deliberate whitespace

### Content rule

Keep the section concise. The homepage should create curiosity and direct users to the About page rather than reproduce the full company history.

### Visual rule

The supporting image should represent **the group**, not one isolated product or facility.

---

# 8. Section 03 — Evidence of Scale

## Objective

Convert corporate claims into visible evidence.

## Composition

Warm ivory or deep evergreen band with four proof metrics.

Example structure:

```text
25+              8                 14                3,500+
Years             Production       Export            Employees
experience        facilities       markets
```

### Rules

- Use only verified values in real projects.
- Each number must have a concise explanatory label.
- Avoid oversized numbers without context.
- Icons are optional and should remain secondary.
- Use thin dividers or spacing rather than heavy card containers.

### Responsive

Desktop: 4 columns  
Tablet: 2 × 2 grid  
Mobile: stacked or 2-column depending on content length

---

# 9. Section 04 — Business Units

## Objective

Make a diversified corporate group easy to understand.

## Structure

```text
BUSINESS

How the Group Operates
Short explanation of the portfolio.

[Business Unit 01]
[Business Unit 02]
[Business Unit 03]
[Business Unit 04]
```

## Recommended presentation

Do **not** create four identical generic cards.

Instead use:

- one dominant featured business unit
- supporting units with smaller editorial treatments
- clear category labels
- one image per major business area where available

### Business unit item anatomy

```text
Category label
Business Unit Name
1–2 sentence summary
[Explore]
Image
```

### Interaction

Hover may introduce:

- subtle image scale
- small teal line/label transition
- slight content shift

Avoid large card lifts or dramatic transforms.

---

# 10. Section 05 — Featured Projects / Capabilities

## Objective

Demonstrate that Asterra's scale and expertise are real through selected work.

## Structure

```text
SELECTED WORK

Featured project / capability
Large image + project information

Supporting project items

[View All Projects]
```

### Preferred composition

One large feature occupies most of the visual attention, followed by two or three supporting items.

This is intentionally different from a repetitive portfolio grid.

### Project metadata

Where applicable:

- sector / industry
- location
- year
- business unit
- capability

Do not show fabricated project values or claims in production.

### Detail link

Use a quiet text link or secondary CTA rather than multiple prominent buttons.

---

# 11. Section 06 — Leadership / Corporate Authority

## Objective

Humanize the organization and strengthen institutional credibility.

## Structure

```text
LEADERSHIP

The people responsible for the group's direction.

[Executive 01]   [Executive 02]   [Executive 03]

[Meet the Leadership Team]
```

### Profile treatment

- Consistent portrait crop
- Role clearly visible
- Name visually dominant
- Short supporting information only
- Neutral, professional portrait direction

### Avoid

- casual social-media-style profile cards
- excessive biography on homepage
- decorative avatar treatments

---

# 12. Section 07 — Recognition & Certifications

## Objective

Provide institutional proof through third-party recognition and formal credentials.

## Recommended composition

Use a restrained horizontal or split arrangement:

```text
RECOGNITION
Selected awards, certifications, memberships, and partnerships.

[Recognition marks / certification names]

[View Corporate Credentials]
```

### Rules

- Use real approved logos in production.
- Respect logo clear space and monochrome treatment where needed.
- Avoid displaying too many logos simultaneously.
- Prioritize the most relevant evidence.

---

# 13. Section 08 — News / Resources

## Objective

Demonstrate that Asterra is active and provide pathways into deeper content.

## Structure

```text
LATEST

Featured news / corporate update       Resource / document

Supporting news item                  Supporting resource

[View All Insights]                   [Explore Resources]
```

### Visual approach

This section should be more editorial than card-heavy.

Use:

- article image
- category label
- title
- date
- concise supporting metadata

### Content freshness

Do not show a news section prominently if the client cannot maintain it. In that situation, prioritize evergreen resources instead.

---

# 14. Section 09 — Final CTA

## Objective

Convert established trust into a clear business action.

## Recommended structure

```text
READY TO WORK WITH ASTERRA?

A concise statement about partnerships, procurement,
projects, or business inquiries.

[Request a Quote]     Contact Corporate Office
```

### Visual treatment

- Deep evergreen background
- Warm ivory or white typography
- Mineral teal primary CTA
- Minimal supporting decoration
- Optional subtle facility image or texture, but not necessary

### CTA rule

The CTA should feel like a natural conclusion to the trust-building narrative, not an aggressive sales interruption.

---

# 15. Footer

## Recommended groups

```text
ASTERra
Short corporate description
Social links

COMPANY
About
Leadership
Careers
News

BUSINESS
Business Units
Projects
Capabilities
Resources

CONTACT
Corporate office
Phone
Email
Locations

LEGAL
Privacy
Terms
Accessibility
```

### Footer rules

- Deep evergreen background.
- Clear hierarchy between corporate information and utility links.
- Avoid excessive link density.
- Include the corporate contact pathway prominently.

---

# 16. Responsive Composition

## Desktop

- 12-column conceptual grid
- Large hero image
- Asymmetric editorial sections
- Four-column proof metrics
- Feature-led project presentation
- Horizontal leadership and recognition layouts where appropriate

## Tablet

- Reduce complex compositions to two-column structures.
- Reduce display sizes.
- Preserve the distinction between primary and secondary content.
- Allow project and business-unit layouts to simplify.

## Mobile

- Header becomes compact navigation.
- Hero becomes a vertical narrative.
- Metrics become 2-column or stacked.
- Business units become a vertical editorial list.
- Featured project becomes one primary feature followed by a simple stack.
- Leadership becomes a readable vertical list/grid.
- Recognition becomes a wrapped logo/list treatment.
- CTAs remain easy to reach without excessive fixed UI.

### Mobile principle

> **Recompose the corporate story; do not shrink the desktop composition.**

---

# 17. Accessibility Requirements

- One clear H1 on the page.
- Heading levels follow semantic order.
- All primary CTAs have descriptive labels.
- Focus states remain visible.
- Text remains readable against the warm ivory and evergreen backgrounds.
- Image alt text describes informative manufacturing imagery.
- Decorative imagery receives appropriate empty alternative treatment.
- Metrics do not rely on color or icons alone to communicate meaning.
- Navigation remains keyboard accessible.
- Reduced-motion users receive a static or simplified presentation.

---

# 18. Performance Requirements

Priority order:

1. Header and hero content
2. Primary typography
3. First evidence section
4. Business-unit and project imagery
5. Lower-page media

### Rules

- Use responsive hero image variants.
- Avoid loading full-resolution source photography at initial display size.
- Load only the required IBM Plex font weights.
- Defer lower-page galleries and non-critical media.
- Avoid unnecessary third-party embeds.
- Reserve image dimensions to prevent layout shifts.

---

# 19. Homepage Anti-Patterns

Do not introduce:

- Construction-specific imagery or motifs
- Navy + copper/orange visual treatment
- Repetitive 3- or 4-column card grids for every section
- Giant statistics without evidence
- Generic SaaS/dashboard styling
- Excessive dark sections
- Excessive rounded cards
- Heavy gradients
- Constant parallax
- Decorative industrial graphics without brand justification
- Too many primary CTAs
- Unverified corporate claims
- Invented statistics, certifications, projects, or executives

---

# 20. Homepage QA Checklist

- [ ] Hero immediately identifies Asterra as a manufacturing group.
- [ ] Hero uses the Asterra evergreen/teal/ivory visual identity.
- [ ] Stonebridge navy/copper construction cues are absent.
- [ ] Homepage establishes credibility before asking for conversion.
- [ ] Evidence section is easy to scan and has context.
- [ ] Business units are understandable without reading long text.
- [ ] Featured work does not become a repetitive portfolio grid.
- [ ] Leadership adds authority rather than decoration.
- [ ] Recognition feels credible and restrained.
- [ ] News/resources section remains useful and maintainable.
- [ ] Final CTA feels like a natural continuation of the page story.
- [ ] Mobile composition preserves the intended narrative.
- [ ] Accessibility and performance rules are preserved.
- [ ] No fictional content is presented as verified corporate information.

---

# 21. AI Implementation Guidance

An AI design or coding agent should:

1. Treat the Asterra client-specific manual and this page specification as the source of truth.
2. Use the defined color and typography tokens rather than inventing replacements.
3. Preserve the Corporate Authority hierarchy while maintaining Asterra's manufacturing-specific identity.
4. Assemble the page from reusable components before creating one-off UI patterns.
5. Use asymmetry and editorial composition where specified instead of turning every section into cards.
6. Recompose sections intentionally for tablet and mobile.
7. Keep motion subtle and removable for reduced-motion users.
8. Use authentic-looking manufacturing imagery only as placeholder art direction until approved assets exist.
9. Never invent company facts, metrics, projects, certifications, or people.
10. Keep the implementation performance-aware and accessible.

---

# 22. Completion Criteria

The homepage specification is complete when:

- The page purpose and primary user journey are clear.
- Every section has a defined objective and content hierarchy.
- Desktop, tablet, and mobile behavior is defined.
- Asterra's visual identity is consistently applied.
- Component usage can be mapped to the Phase 5 Component System.
- The page does not conflict with the Phase 2 IA, Phase 3 Design System, or Phase 4 Page Template Specification.
- The specification is sufficient to create a visual design or AI-generated prototype without inventing major structural decisions.

---

# 23. Next Page

After the homepage, continue with:

**About / Corporate Story**

Then:

**Business Units / Capabilities**  
**Projects Listing**  
**Project Detail**  
**Leadership**  
**Resources / Insights**  
**Careers**  
**Contact / Locations**
