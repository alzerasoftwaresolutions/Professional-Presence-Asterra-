# Asterra — Design System

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Status:** Design-system definition
**Depends on:** `Asterra_Page_Architecture.md`, `Asterra_Content_Data_Architecture.md`, `Asterra_Routing_Architecture.md`
**Universal Design Reference:** `Universal_Design_Analysis.md`

---

# 1. Purpose

The Asterra Design System defines the reusable visual and interaction rules that will govern the website.

It should establish a consistent corporate identity across:

* Homepage
* Corporate Story
* Leadership
* Business
* Projects
* Insights
* Careers
* Contact

The system should be **professional and distinctive without becoming unnecessarily complex**.

---

# 2. Design Direction

Asterra should communicate:

* Corporate credibility
* Expertise
* Stability
* Capability
* Institutional maturity
* Precision
* Confidence
* Modern professionalism

The visual language should avoid looking like a generic corporate template.

The design should feel:

> **Established, capable, modern, and deliberate.**

---

# 3. Design Principles

### 3.1 Clarity Before Decoration

Every visual element should help the visitor:

* Understand information
* Navigate
* Evaluate credibility
* Discover capabilities
* Understand evidence
* Take action

Avoid decoration that does not contribute to the experience.

---

### 3.2 Strong Information Hierarchy

Pages should communicate importance through:

```text
Primary message
      ↓
Supporting message
      ↓
Evidence
      ↓
Details
      ↓
Action
```

Typography, spacing, scale, and layout should reinforce this hierarchy.

---

### 3.3 Editorial Corporate Character

Asterra should use an editorial approach where appropriate:

* Strong typography
* Generous whitespace
* Large imagery
* Structured grids
* Carefully composed sections
* Clear content hierarchy

The website should feel closer to a **high-quality corporate publication** than a collection of generic SaaS sections.

---

# 4. Visual Identity

The design system should use a restrained visual language.

Core visual ingredients:

```text
Typography
    +
Whitespace
    +
Grid
    +
Photography
    +
Controlled Color
    +
Subtle Interaction
```

No single element should dominate the entire experience.

---

# 5. Color System

The final palette should be established from the approved Asterra brand identity if official brand guidelines/assets are available.

Until those are confirmed, use semantic roles rather than scattering raw colors throughout the design.

```text
Primary
Secondary
Accent
Background
Surface
Text Primary
Text Secondary
Border
Success
Warning
Error
```

### Example token structure

```text
--color-primary
--color-secondary
--color-accent

--color-background
--color-surface

--color-text-primary
--color-text-secondary

--color-border

--color-success
--color-warning
--color-error
```

Do not hardcode individual color values throughout components.

---

# 6. Typography

Typography should create a clear distinction between:

```text
Display
Heading
Body
Label
Navigation
Metadata
```

### Recommended hierarchy

```text
Display
↓
H1
↓
H2
↓
H3
↓
Body
↓
Small / Metadata
```

Typography should prioritize:

* Readability
* Corporate character
* Strong hierarchy
* Consistency
* Responsive behavior

Avoid generic typography choices that make the website visually indistinguishable from standard corporate templates.

---

# 7. Font Strategy

The final typeface selection should be made during visual design exploration.

The system should ideally use:

```text
Primary typeface
+
Optional display/editorial typeface
```

However, introducing multiple fonts should have a clear purpose.

Do not use several typefaces simply to create visual variety.

---

# 8. Spacing System

Use a consistent spacing scale.

Conceptually:

```text
XS
SM
MD
LG
XL
2XL
3XL
4XL
```

The exact numerical values should be established during implementation.

Spacing should control:

* Section separation
* Card padding
* Text spacing
* Grid gaps
* Navigation spacing
* Form spacing

Avoid arbitrary spacing values throughout the project.

---

# 9. Layout Grid

Asterra should use a consistent responsive grid.

Desktop:

```text
┌─────────────────────────────────────────────┐
│                  Container                  │
│                                             │
│  Column   Column   Column   Column   Column │
│                                             │
└─────────────────────────────────────────────┘
```

The grid should support:

* Editorial layouts
* Two-column sections
* Project grids
* Business capability cards
* Leadership profiles
* Insight cards

The grid should remain flexible rather than forcing every page into the same composition.

---

# 10. Container System

Use a central content container with responsive horizontal padding.

Conceptually:

```text
Desktop
[       Maximum Content Width       ]

Tablet
[     Responsive Content Width     ]

Mobile
[   Full Width + Safe Padding      ]
```

The container should prevent excessively wide text lines and maintain visual rhythm.

---

# 11. Responsive Design

The website should be designed as a responsive system rather than a desktop design that is later compressed.

Primary states:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
   ↓
Large Desktop
```

Responsive behavior should address:

* Navigation
* Grid columns
* Typography
* Hero compositions
* Image crops
* Section spacing
* Tables where applicable
* Forms
* Cards

---

# 12. Header

The global header should communicate corporate confidence without consuming unnecessary screen space.

Recommended structure:

```text
┌──────────────────────────────────────────────┐
│ ASTERRA   About Business Projects Insights   │
│                               Careers Contact │
└──────────────────────────────────────────────┘
```

The exact visual treatment should be established during page design.

Potential behavior:

```text
Top of page
    ↓
Standard header

Scroll
    ↓
Condensed/sticky header where useful
```

Avoid excessive header animation.

---

# 13. Footer

The footer should provide a comprehensive corporate navigation layer.

Recommended structure:

```text
ASTERRA

Company
├── About
├── Leadership
└── Careers

Business
└── Business Units

Projects
└── Portfolio

Insights
└── Knowledge Resources

Contact
└── Corporate Inquiry

Corporate information
Social links
Legal links
Copyright
```

The footer should function as both:

* Navigation
* Corporate information area

---

# 14. Button System

Buttons should use a small number of semantic variants.

### Primary

For the most important action:

```text
Contact Asterra
Explore Projects
```

### Secondary

For supporting actions:

```text
View Business Units
Read More
```

### Text / Link

For low-emphasis navigation:

```text
View Project →
```

Avoid creating many button styles.

---

# 15. Link System

Links should be visually identifiable.

Use descriptive labels.

Prefer:

```text
View Engineering Capabilities
```

over:

```text
Click Here
```

This supports both usability and accessibility.

---

# 16. Card System

Cards should be used selectively.

Potential card types:

```text
Business Card
Project Card
Insight Card
Leadership Card
Career Card
```

Cards should not become the default container for every piece of content.

Use editorial layouts when content benefits from stronger visual hierarchy.

---

# 17. Business Card

Business cards should communicate:

```text
Business Unit
Short description
Key capability
CTA
```

Example structure:

```text
ENGINEERING & INFRASTRUCTURE

Short explanation of the business capability.

[Explore Capability →]
```

---

# 18. Project Card

Project cards should emphasize visual evidence.

```text
┌─────────────────────┐
│                     │
│       PROJECT       │
│       IMAGE         │
│                     │
└─────────────────────┘

Project Name
Sector / Location

View Project →
```

The image should remain visually important.

---

# 19. Insight Card

Insight cards should communicate:

* Category
* Title
* Short description
* Date
* Optional reading time

Example:

```text
INDUSTRY INSIGHT

The Future of Sustainable Infrastructure

A short editorial summary...

Read Insight →
```

---

# 20. Leadership Card

Leadership cards should prioritize:

* Portrait
* Name
* Role
* Optional business area

Avoid overloading the card with biography text.

```text
[ Portrait ]

Executive Name
Chief Executive Officer

View Profile →
```

---

# 21. Image System

Photography should play an important role in Asterra's corporate credibility.

Preferred characteristics:

* High quality
* Authentic
* Relevant
* Professionally composed
* Contextual
* Consistent visual treatment

Avoid excessive use of generic stock imagery.

---

# 22. Image Treatment

Images may use:

* Full-bleed photography
* Editorial crops
* Structured card ratios
* Controlled overlays
* Subtle borders

The treatment should depend on context.

Do not apply the same image treatment to every page.

---

# 23. Hero System

Heroes should be flexible rather than one universal component.

Possible variants:

```text
Full Image Hero
Split Hero
Editorial Hero
Minimal Hero
Project Hero
Article Hero
```

The hero variant should depend on the page's purpose.

---

# 24. Page Header System

Internal pages should have a consistent introduction pattern.

Example:

```text
BUSINESS

Capabilities built around expertise,
experience, and execution.

Supporting introduction.
```

The page header should establish:

1. Where the visitor is.
2. What the page is about.
3. Why the content matters.

---

# 25. Section System

Sections should generally follow a clear rhythm:

```text
Section Label
Headline
Supporting Copy
Content
CTA
```

Not every section needs every element.

---

# 26. Editorial Layouts

Important pages should be able to break away from rigid card grids.

Useful compositions include:

```text
Text        Image
Image       Text
Large Text
        Supporting Content
Image Grid
Asymmetric Grid
Full-Width Feature
```

This prevents the website from feeling mechanically templated.

---

# 27. Motion System

Motion should be subtle and purposeful.

Appropriate uses:

* Navigation transitions
* Image reveals
* Hover states
* Section entrance
* Button feedback
* Page transitions where appropriate

Avoid:

* Excessive parallax
* Constant movement
* Long animations
* Animation that delays content
* Motion that harms accessibility

---

# 28. Accessibility

The design system should support:

* Sufficient color contrast
* Keyboard navigation
* Visible focus states
* Descriptive links
* Accessible form labels
* Meaningful alt text
* Logical heading hierarchy
* Appropriate touch target sizes
* Reduced-motion preferences

Accessibility should be incorporated during design rather than added after implementation.

---

# 29. Forms

Corporate inquiry forms should remain concise.

Potential fields:

```text
Name
Organization
Email
Phone
Inquiry Type
Message
```

Only collect information necessary for the inquiry.

The form should provide:

```text
Default
   ↓
Focused
   ↓
Validation
   ↓
Error / Success
```

states.

---

# 30. Empty States

Dynamic listings need deliberate empty states.

Example:

```text
No current opportunities are available.

Explore Asterra's business areas or return to the
main Careers page.
```

Do not leave blank spaces where content is unavailable.

---

# 31. Loading States

Dynamic content should have appropriate loading behavior.

Avoid displaying large blank regions while data loads.

Where loading states are necessary:

* Skeletons may be used for cards/lists.
* Layout dimensions should remain stable.
* Loading should not cause significant layout shift.

This connects directly to the project's performance requirements.

---

# 32. Error States

Errors should be understandable and actionable.

Avoid:

```text
Error 500
```

Prefer:

```text
We couldn't load this content.

Please try again or return to the previous page.
```

---

# 33. Design → Performance Rules

Design decisions must consider performance.

Avoid unnecessary:

* Large background videos
* Oversized images
* Multiple font families
* Excessive animation
* Heavy third-party libraries
* Unnecessary client-side JavaScript

Important visual assets should be optimized according to their actual display size.

---

# 34. Design → SEO Rules

The design system should support:

* Clear heading hierarchy
* Crawlable navigation
* Descriptive links
* Meaningful content structure
* Accessible images
* Mobile usability
* Fast page loading
* Internal linking
* Stable content layouts

Visual hierarchy should never require hiding important content from search engines or users.

---

# 35. Design → Content Rules

Components should adapt to content.

Do not design cards assuming:

```text
Every title = 30 characters
```

or:

```text
Every description = 2 lines
```

The system should handle realistic content variation without breaking layout.

---

# 36. Component Categories

The initial component system should remain focused.

```text
Global
├── Header
├── Footer
├── Navigation
└── Container

Typography
├── Display
├── Heading
├── Body
└── Label

Actions
├── Button
└── Link

Content
├── Business Card
├── Project Card
├── Insight Card
└── Leadership Card

Layout
├── Section
├── Grid
├── Split Layout
└── Feature Layout

Feedback
├── Loading
├── Empty State
└── Error State

Forms
├── Input
├── Select
├── Textarea
└── Form Message
```

---

# 37. Avoid Over-Componentization

Do not create a component for every visual fragment.

For example, this is unnecessary:

```text
TinyTitle
TinySubtitle
TinyArrow
TinyText
TinyLabel
```

Components should represent meaningful reusable patterns.

---

# 38. Design Token Architecture

The implementation should eventually centralize:

```text
Tokens
├── Colors
├── Typography
├── Spacing
├── Radius
├── Shadows
├── Borders
├── Breakpoints
└── Motion
```

The exact values should be established during visual design and implementation.

---

# 39. Design System Scope

For Package 3, the system should provide enough consistency for the full website without becoming a standalone enterprise design system.

The goal is:

```text
Reusable
     +
Consistent
     +
Distinctive
     +
Maintainable
```

not:

```text
Maximum number of components
```

---

# 40. Final Design-System Direction

The Asterra design system should feel:

**Corporate + Editorial + Precise + Modern**

rather than:

**Generic + Corporate + Template-like**

The strongest visual differentiation should come from the combination of:

```text
Typography
+
Grid
+
Photography
+
Whitespace
+
Information hierarchy
+
Controlled motion
```

rather than excessive decorative effects.

---

# 41. Design Architecture Decision

**Status: APPROVED — Foundation**

The design system establishes the foundation for all Asterra pages while intentionally leaving the final visual details—exact colors, typography selections, spacing values, and component styling—to the visual design stage.

This prevents the design system from prematurely locking the visual direction before the actual page compositions are explored.

---

## Current Workflow

```text
Package Definition
        ↓
Page Architecture                 ✅
        ↓
Content / Data Architecture       ✅
        ↓
Routing Architecture              ✅
        ↓
Design System                     ✅
        ↓
Page-Specific Design Architecture ← NEXT
        ↓
Implementation Planning
        ↓
Implementation
        ↓
QA / SEO / Performance
```

### Next file

**`Asterra_Page_Design_Architecture.md`**

That document will translate the design system into the actual **page composition rules for Home, About, Leadership, Business, Projects, Insights, Careers, and Contact**, without prematurely writing implementation code.
