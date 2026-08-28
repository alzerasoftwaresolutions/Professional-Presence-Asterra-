# Asterra — Responsive Behavior & Breakpoint Specification

**Package:** Package 3 — Professional Presence
**Project:** Asterra
**Phase:** Implementation Blueprint
**Document:** Responsive Behavior & Breakpoint Specification
**Status:** Implementation Reference

---

# 1. Purpose

This document defines how the Asterra interface should adapt across different screen sizes.

The objective is not to create separate desktop, tablet, and mobile designs.

The objective is to establish a **single responsive system** in which:

```text
Content
   ↓
Flexible Layout
   ↓
Desktop / Tablet / Mobile
```

The design should preserve hierarchy, usability, readability, and visual character across all supported devices.

---

# 2. Responsive Principles

Asterra should follow these principles:

1. Mobile is a primary experience, not an afterthought.
2. Content hierarchy must remain consistent across breakpoints.
3. Layouts should adapt naturally rather than simply shrink.
4. Typography should scale deliberately.
5. Navigation should simplify on smaller screens.
6. Images should adapt to their available space.
7. Complex desktop compositions should be simplified when necessary.
8. Touch interaction must be considered.
9. Horizontal scrolling should be avoided unless intentionally designed.
10. Responsive behavior should be defined at the component level whenever possible.

---

# 3. Breakpoint Strategy

Do not design around a large number of arbitrary breakpoints.

Use a small number of meaningful layout states.

Conceptually:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
   ↓
Large Desktop
```

The exact pixel values should be determined by the implementation environment and actual layout behavior rather than forcing every component to change at identical widths.

---

# 4. Recommended Breakpoint Model

A practical starting structure is:

| Mode          | Approximate Range | Primary Purpose         |
| ------------- | ----------------: | ----------------------- |
| Mobile        |         `< 640px` | Phones                  |
| Tablet        |      `640–1023px` | Tablets / small laptops |
| Desktop       |     `1024–1439px` | Standard desktop        |
| Large Desktop |        `≥ 1440px` | Wide displays           |

These are implementation starting points, not rigid design requirements.

A component may require a breakpoint transition earlier or later if its content demands it.

---

# 5. Container Behavior

The main content container should remain centered.

Conceptually:

```text
Large viewport
│
├── outer space
│
├── max-width container
│
└── outer space
```

On smaller screens:

```text
Viewport
│
├── mobile gutter
├── content
└── mobile gutter
```

The container should not become excessively wide on large displays.

---

# 6. Horizontal Gutters

Horizontal spacing should decrease progressively.

Conceptually:

```text
Desktop
Large gutters

Tablet
Medium gutters

Mobile
Compact gutters
```

However, mobile content should retain sufficient breathing room.

Do not allow text or controls to sit directly against the viewport edge.

---

# 7. Header — Desktop

Desktop navigation may use:

```text
Logo
        Navigation
                 Primary Action
```

The header should provide clear separation between:

* Brand
* Navigation
* Action

The exact alignment follows the established Asterra design system.

---

# 8. Header — Tablet

Tablet may require slightly more compact navigation.

Potential behavior:

```text
Logo
   ↓
Reduced navigation
   ↓
Primary action
```

If the complete navigation becomes crowded, transition to the mobile navigation pattern rather than allowing items to overlap or wrap unpredictably.

---

# 9. Header — Mobile

Mobile should prioritize:

```text
Logo       Menu
```

The full navigation should move into an accessible menu.

The mobile header should remain visually lightweight and easy to operate.

---

# 10. Mobile Navigation

Recommended structure:

```text
Menu Trigger
      ↓
Navigation Panel
      ↓
Primary Links
      ↓
Optional CTA
```

The panel should:

* Have clear focus behavior
* Be easy to close
* Prevent confusing background interaction where appropriate
* Preserve navigation hierarchy

---

# 11. Hero Behavior

Asterra's large editorial/corporate hero compositions should not simply scale down.

Instead:

```text
Desktop
Large visual composition
        ↓
Tablet
Reduced composition
        ↓
Mobile
Simplified composition
```

The primary message should always remain prominent.

---

# 12. Hero Typography

Hero typography should use responsive scaling.

Conceptually:

```text
Desktop
Display heading

Tablet
Reduced display heading

Mobile
Compact display heading
```

Do not allow the heading to become so large that it consumes the entire mobile viewport.

---

# 13. Hero Image Behavior

Desktop:

```text
Wide image / visual composition
```

Mobile:

```text
Portrait or cropped visual
```

The image should preserve its subject and visual meaning when possible.

If a desktop composition becomes unsuitable on mobile, use an intentional crop or alternate asset rather than accepting a poor automatic crop.

---

# 14. Hero CTA Behavior

Desktop may support:

```text
[Primary Action] [Secondary Action]
```

Mobile may use:

```text
[Primary Action]

[Secondary Action]
```

or another layout defined by the design.

Buttons should remain comfortably tappable.

---

# 15. Section Layout

A common desktop structure may be:

```text
Text              Visual
```

On mobile:

```text
Text
↓
Visual
```

The stacking order must follow content priority.

---

# 16. Alternating Content Sections

If the desktop design uses:

```text
Section 1
Text | Image

Section 2
Image | Text
```

Mobile should generally become:

```text
Section 1
Text
Image

Section 2
Text
Image
```

The implementation should avoid unintentionally producing inconsistent reading order.

---

# 17. Grid Behavior

Asterra's content grids should progressively reduce columns.

Example:

```text
Desktop
3 columns

Tablet
2 columns

Mobile
1 column
```

This applies where appropriate to:

* Projects
* Business Units
* Insights
* Leadership
* Careers

---

# 18. Project Grid

Recommended behavior:

```text
Desktop → 3
Tablet  → 2
Mobile  → 1
```

The exact number can change according to card width and content density.

---

# 19. Business Unit Grid

Business Unit cards may require more visual space.

Possible behavior:

```text
Desktop → 3
Tablet  → 2
Mobile  → 1
```

If the approved design uses a featured unit, that featured presentation should transition independently from the regular grid.

---

# 20. Leadership Grid

Leadership cards should remain readable.

Possible behavior:

```text
Desktop → 3 or 4
Tablet  → 2
Mobile  → 1 or 2
```

The final choice should be based on portrait proportions and card width.

---

# 21. Insights Grid

Insight cards may support:

```text
Desktop → 3
Tablet  → 2
Mobile  → 1
```

Metadata should remain readable without creating excessive vertical density.

---

# 22. Project Cards on Mobile

Project cards should prioritize:

1. Image
2. Project name
3. Essential metadata
4. Short description if appropriate
5. Navigation action

Do not force every desktop card element onto mobile.

---

# 23. Business Unit Cards on Mobile

The mobile version should preserve:

* Unit name
* Core description
* Primary visual
* Navigation action

Secondary information can be reduced when necessary.

---

# 24. Leadership Cards on Mobile

Portraits should remain large enough to identify the individual.

Recommended structure:

```text
Portrait
Name
Role
Profile Link
```

Avoid tiny portrait cards with dense text.

---

# 25. Insight Cards on Mobile

Prioritize:

```text
Category
Title
Date / Metadata
Excerpt
```

The card should remain scannable.

---

# 26. Project Detail Layout

Desktop may use:

```text
Project Hero
      ↓
Overview + Metadata
      ↓
Gallery
      ↓
Outcomes
      ↓
Related Content
```

Mobile should preserve this sequence while allowing metadata and gallery controls to stack naturally.

---

# 27. Project Metadata

Desktop:

```text
Location | Category | Business Unit | Status
```

Mobile:

```text
Location
Category
Business Unit
Status
```

Do not allow metadata to become horizontally cramped.

---

# 28. Project Gallery

Desktop may use a large editorial gallery.

Mobile should prioritize:

* One clear primary image
* Simple navigation
* Adequate image height
* Touch-friendly controls

Avoid unnecessarily complicated gallery interactions on mobile.

---

# 29. Executive Profile

Desktop may use:

```text
Portrait | Executive Information
```

Mobile:

```text
Portrait
↓
Name / Role
↓
Biography
↓
Expertise
```

The executive identity should remain immediately visible.

---

# 30. Business Unit Detail

Desktop may support:

```text
Hero
↓
Overview
↓
Capabilities
↓
Projects
```

Mobile should preserve this hierarchy without excessive side-by-side layouts.

---

# 31. Article Detail

Desktop:

```text
Article Header
      ↓
Main Reading Column
      +
Supporting Information
```

Mobile:

```text
Article Header
      ↓
Article Content
      ↓
Related Content
```

The reading experience should take priority.

---

# 32. Article Reading Width

Long-form content should not stretch across the entire desktop viewport.

Use a controlled reading width.

This improves:

* Readability
* Line length
* Visual hierarchy

On mobile, the content naturally expands to the available width while retaining appropriate gutters.

---

# 33. Careers Listing

Desktop may use:

```text
Filters | Opportunities
```

Mobile should generally use:

```text
Filter
   ↓
Opportunities
```

Filters should not consume excessive vertical space.

---

# 34. Job Detail

Desktop:

```text
Job Information | Application Action
```

Mobile:

```text
Job Information
↓
Application Action
```

The application CTA should remain easy to find.

---

# 35. Contact Page

Desktop may use:

```text
Contact Information | Inquiry Form
```

Mobile:

```text
Contact Information
↓
Inquiry Form
```

If a map is included:

```text
Contact Information
↓
Map
↓
Form
```

or according to the approved page hierarchy.

---

# 36. Forms on Mobile

Inputs should generally occupy the available content width.

Avoid:

```text
First Name | Last Name
```

if the resulting fields become too narrow.

Prefer:

```text
First Name
Last Name
```

when necessary.

---

# 37. Footer — Desktop

The footer may use multiple columns:

```text
Brand
│
Company
Business
Resources
Contact
```

---

# 38. Footer — Mobile

The footer should collapse into a simpler vertical structure.

Potential structure:

```text
Brand
↓
Navigation
↓
Contact
↓
Social
↓
Legal
```

Avoid forcing a multi-column desktop footer onto mobile.

---

# 39. Typography Responsiveness

Typography should use controlled responsive values.

Consider:

```text
Display
H1
H2
H3
Body
Small text
```

Not every text style needs its own breakpoint.

---

# 40. Paragraph Width

Long paragraphs should maintain a readable measure.

On desktop:

```text
Controlled reading width
```

On mobile:

```text
Nearly full available width
+
Mobile gutters
```

---

# 41. Spacing Responsiveness

Vertical spacing should scale according to viewport size.

Conceptually:

```text
Desktop
Large section spacing

Tablet
Medium section spacing

Mobile
Compact section spacing
```

Do not simply preserve large desktop spacing on mobile.

---

# 42. Section Padding

A section should not become excessively tall on mobile because desktop padding values were preserved unchanged.

Example:

```text
Desktop:
Large top/bottom spacing

Mobile:
Reduced top/bottom spacing
```

The exact values should come from the design system.

---

# 43. Navigation and Sticky Elements

If the header becomes sticky:

* Ensure it does not consume excessive mobile space.
* Ensure it does not cover focused content.
* Ensure transitions remain performant.
* Ensure keyboard users can understand the current state.

---

# 44. Large Decorative Elements

Large decorative lines, shapes, and background elements should be reviewed on mobile.

Possible behavior:

```text
Desktop
Large decorative element

Mobile
Reduced / repositioned / removed
```

Decorative elements should never create horizontal overflow.

---

# 45. Horizontal Overflow

The final site should not require horizontal scrolling on standard mobile screens.

Check for:

* Oversized headings
* Wide images
* Fixed-width components
* Tables
* Long URLs
* Decorative elements
* Animation
* Navigation panels

---

# 46. Tables

If a future Asterra page requires a table:

Desktop:

```text
Full table
```

Mobile:

```text
Responsive table strategy
```

Possible approaches:

* Horizontal scrolling container
* Stacked rows
* Card transformation

The chosen approach should preserve accessibility.

---

# 47. Breakpoint Independence

Do not assume that every component must change at the same breakpoint.

Example:

```text
Header → mobile mode at one width
Grid → two-column mode at another
Typography → scale continuously
```

This produces a more robust responsive system.

---

# 48. Fluid vs Breakpoint-Based Design

Use fluid behavior where possible.

Good candidates:

* Container width
* Typography scaling
* Image sizing
* Spacing

Use explicit breakpoints when structural changes are necessary.

---

# 49. Responsive Images

Images should adapt to:

```text
Available width
Aspect ratio
Device density
Content importance
```

The implementation should avoid downloading a large desktop asset when a much smaller mobile asset is sufficient.

---

# 50. Responsive Motion

Motion should also adapt.

Desktop may allow subtle:

```text
Hover
Reveal
Transition
```

Mobile should not depend on hover.

Where hover behavior exists:

```text
Desktop → hover enhancement
Mobile → tap/navigation behavior
```

---

# 51. Touch Interaction

Interactive controls should accommodate touch input.

Pay particular attention to:

* Menu controls
* Carousel controls
* Filter controls
* Buttons
* Links
* Gallery controls
* Close buttons

---

# 52. Mobile Content Priority

When space becomes constrained, use this hierarchy:

```text
1. Primary message
2. Primary content
3. Primary action
4. Supporting information
5. Decorative content
```

Do not hide critical information simply to preserve a desktop composition.

---

# 53. Responsive Component Variants

Use controlled variants when desktop and mobile require meaningful structural differences.

Example:

```text
Hero
├── desktop layout
└── mobile layout
```

But both should consume the same underlying content.

Do not maintain separate duplicated content.

---

# 54. Responsive QA

Every major page should be checked at:

```text
Mobile
Tablet
Desktop
Large Desktop
```

And at intermediate widths where layouts are likely to transition.

---

# 55. Responsive QA Checklist

```text
[ ] No horizontal overflow
[ ] Navigation works
[ ] Mobile menu works
[ ] Typography remains readable
[ ] Headings do not overflow
[ ] Images crop correctly
[ ] Cards remain usable
[ ] Forms remain usable
[ ] Buttons remain tappable
[ ] Focus remains visible
[ ] Footer adapts correctly
[ ] Detail pages remain readable
[ ] Galleries remain usable
[ ] Filters remain usable
[ ] No important content disappears
```

---

# 56. Page-Level Responsive Matrix

| Page             | Desktop                           | Tablet                    | Mobile                     |
| ---------------- | --------------------------------- | ------------------------- | -------------------------- |
| Home             | Editorial multi-section           | Reduced grid/composition  | Stacked priority content   |
| About            | Split/editorial sections          | Reduced splits            | Mostly stacked             |
| Leadership       | Multi-column grid                 | 2-column grid             | 1-column/compact grid      |
| Executive        | Split profile                     | Reduced split             | Stacked                    |
| Business Listing | Multi-column                      | 2-column                  | 1-column                   |
| Business Detail  | Editorial sections                | Reduced split             | Stacked                    |
| Projects         | Multi-column/filter layout        | Reduced grid              | Single-column              |
| Project Detail   | Editorial/gallery layout          | Reduced layout            | Stacked/gallery simplified |
| Insights         | Multi-column                      | 2-column                  | Single-column              |
| Insight Detail   | Reading column + supporting areas | Reduced supporting layout | Focused reading layout     |
| Careers          | List/filter layout                | Reduced layout            | Stacked                    |
| Job Detail       | Information + CTA split           | Reduced split             | Stacked                    |
| Contact          | Information + form split          | Reduced split             | Stacked                    |

---

# 57. Implementation Rule

Responsive behavior should be implemented **after the base component structure is stable**, but it must be considered during component creation.

The sequence should be:

```text
Component structure
       ↓
Desktop composition
       ↓
Responsive rules
       ↓
Mobile refinement
       ↓
Cross-device QA
```

Not:

```text
Desktop finished
       ↓
"Make it responsive"
```

---

# 58. Relationship to Previous Documents

The implementation chain is now:

```text
Package Definition
        ↓
Information Architecture
        ↓
Design System
        ↓
Universal Design Analysis
        ↓
Page Specifications
        ↓
Content Architecture
        ↓
SEO
        ↓
Accessibility & Performance
        ↓
Content & Data
        ↓
Component Mapping
        ↓
Responsive Behavior
        ↓
Actual Implementation
```

This gives the development phase a defined structure instead of making responsive decisions independently during coding.

---

# 59. Quality Gate

```text
[ ] Breakpoint strategy defined
[ ] Container behavior defined
[ ] Header behavior defined
[ ] Mobile navigation defined
[ ] Hero behavior defined
[ ] Grid behavior defined
[ ] Detail-page behavior defined
[ ] Form behavior defined
[ ] Footer behavior defined
[ ] Typography scaling considered
[ ] Image behavior considered
[ ] Motion behavior considered
[ ] Touch behavior considered
[ ] Overflow risks identified
[ ] Responsive QA defined
```

---

# 60. Status

```text
Package Definition                         ✓
Information Architecture                    ✓
Design System                               ✓
Universal Design Analysis                   ✓
Page Specifications                         ✓
SEO Reference Framework                     ✓
Implementation Architecture                ✓
Component Architecture                     ✓
Content Architecture                       ✓
SEO Implementation Specification            ✓
Accessibility & Performance Specification   ✓
Content & Data Implementation Specification ✓
Page & Component Mapping                    ✓
Responsive Behavior Specification           ✓
```

## Next document

**`Asterra — Interaction & Motion Specification`**

This is the logical next step before final implementation because the structural, content, responsive, accessibility, and performance foundations are now defined. The next document will specify **hover states, transitions, scroll reveals, navigation interactions, galleries, filters, forms, and reduced-motion behavior** without turning the Professional Presence package into an unnecessarily complex interactive experience.
