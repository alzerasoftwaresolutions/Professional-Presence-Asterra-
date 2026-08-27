# Asterra — Component Architecture

**Package:** Package 3 — Professional Presence
**Project:** Asterra
**Phase:** Implementation Blueprint
**Document:** Component Architecture
**Status:** Foundation Specification

---

# 1. Purpose

This document defines the reusable component system for the Asterra website.

The goal is to ensure that the implementation:

* Remains visually consistent
* Avoids duplicated UI
* Supports all approved pages
* Preserves the Asterra design system
* Works responsively
* Supports accessibility
* Can grow without unnecessary complexity

This document works together with:

* `Asterra — Implementation Architecture`
* `Asterra — Design System`
* `Asterra — Page Specifications`
* `Universal Design Analysis`
* `SEO Analytics & Optimization Playbook`

---

# 2. Component Philosophy

The component system should follow three principles:

### Reuse genuine patterns

If the same structure appears repeatedly, create a reusable component.

### Keep page composition flexible

Reusable components should not prevent pages from having their own compositions.

### Avoid over-abstraction

Do not create a component for every small visual element unless it has reusable behavior or meaning.

---

# 3. Component Hierarchy

The system can be organized into five levels:

```text
FOUNDATIONS
    ↓
PRIMITIVES
    ↓
COMPOSITES
    ↓
SECTIONS
    ↓
PAGE COMPOSITIONS
```

---

# 4. Foundations

Foundations come directly from the design system.

```text
Color
Typography
Spacing
Grid
Breakpoints
Radius
Elevation
Motion
Icons
```

These should be represented through centralized design tokens.

---

# 5. Primitives

Primitives are the smallest reusable interface elements.

```text
Button
Link
Icon
Text
Heading
Image
Container
Divider
Badge
```

They should have predictable behavior and minimal page-specific logic.

---

# 6. Button Architecture

The system should support a limited number of button variants.

```text
PrimaryButton
SecondaryButton
TertiaryButton
```

Potential states:

```text
Default
Hover
Focus
Active
Disabled
Loading
```

Avoid creating page-specific button variants unless genuinely necessary.

---

# 7. Link Architecture

Use semantic links for navigation.

Possible visual variants:

```text
TextLink
ArrowLink
NavigationLink
```

The visual treatment can change depending on context while maintaining the same underlying interaction principles.

---

# 8. Heading Architecture

Heading components should support semantic hierarchy.

```text
DisplayHeading
PageHeading
SectionHeading
SubsectionHeading
```

The visual size should not determine the semantic HTML level automatically.

For example, a visually large `<h2>` remains an `<h2>`.

---

# 9. Container

A global container establishes the site's horizontal alignment.

```text
Container
```

Responsibilities:

* Maximum content width
* Horizontal padding
* Responsive behavior
* Consistent page alignment

Individual sections should not independently invent container widths without a clear reason.

---

# 10. Section Architecture

A reusable section wrapper:

```text
Section
│
├── Optional eyebrow
├── Optional heading
├── Optional description
└── Content
```

This supports consistent vertical rhythm.

---

# 11. Section Header

```text
SectionHeader
│
├── Eyebrow
├── Heading
├── Description
└── Optional action
```

Example:

```text
OUR BUSINESS

Building capability across key sectors.

[Explore all capabilities →]
```

---

# 12. Global Header

```text
Header
├── Logo
├── DesktopNavigation
├── ContactCTA
└── MobileMenuTrigger
```

The header should be implemented once.

---

# 13. Navigation Architecture

```text
PrimaryNavigation
├── About
├── Business
├── Projects
├── Insights
├── Careers
└── Contact
```

The navigation should support:

* Active state
* Hover state
* Keyboard navigation
* Mobile navigation
* Current-page indication

---

# 14. Mobile Navigation

```text
MobileMenu
│
├── Navigation Links
├── Secondary Links
├── Contact CTA
└── Close Control
```

The menu should:

* Trap focus appropriately while open
* Be keyboard accessible
* Clearly indicate the close action
* Prevent confusing background interaction

---

# 15. Footer Architecture

```text
Footer
│
├── Brand
├── Navigation Groups
├── Contact Information
├── Social / Corporate Links
└── Legal
```

Footer links should reflect actual site architecture.

---

# 16. Breadcrumbs

```text
Breadcrumbs
```

Recommended for:

* Executive profiles
* Business unit details
* Project details
* Insight details
* Job details

Not necessary on every page.

---

# 17. Hero Architecture

There should not be one rigid hero component for the entire website.

Instead, use a shared hero foundation with controlled variants.

```text
PageHero
├── Eyebrow
├── Heading
├── Description
├── Primary CTA
├── Secondary CTA
└── Media
```

Variants may include:

```text
EditorialHero
CorporateHero
ImageHero
MinimalHero
```

---

# 18. Hero Principles

Every hero should communicate:

1. Where the user is
2. What the page is about
3. Why the content matters
4. What the next action is, when appropriate

Avoid stuffing heroes with excessive content.

---

# 19. Image Architecture

Shared media components:

```text
ResponsiveImage
ImageFrame
ImageGallery
ImageWithCaption
```

They should support:

* Responsive sizing
* Aspect ratios
* Lazy loading
* Alt text
* Focal positioning

---

# 20. Card Architecture

Cards should be entity-specific where content structure differs.

```text
BusinessUnitCard
ProjectCard
InsightCard
LeaderCard
JobCard
```

They may share underlying primitives.

---

# 21. Business Unit Card

```text
BusinessUnitCard
│
├── Image
├── Name
├── Short Description
└── Explore Link
```

Optional:

```text
Capabilities
```

only when useful.

---

# 22. Project Card

```text
ProjectCard
│
├── Image
├── Project Name
├── Category / Location
├── Short Description
└── View Project
```

The card should prioritize the project itself rather than displaying excessive metadata.

---

# 23. Insight Card

```text
InsightCard
│
├── Image
├── Category
├── Title
├── Date
├── Excerpt
└── Read More
```

The exact metadata should depend on the content model.

---

# 24. Leader Card

```text
LeaderCard
│
├── Portrait
├── Name
├── Role
└── View Profile
```

The design should maintain a consistent professional portrait treatment.

---

# 25. Job Card

```text
JobCard
│
├── Position
├── Department
├── Location
├── Employment Type
└── View Opportunity
```

Do not overload cards with the complete job description.

---

# 26. Collection Architecture

Listings should share a collection foundation.

```text
Collection
├── Items
├── EmptyState
├── LoadingState
└── Pagination / LoadMore
```

Specific pages control the presentation.

---

# 27. Grid Architecture

A reusable grid system should support:

```text
1 column
2 columns
3 columns
4 columns
```

depending on:

* Content type
* Screen width
* Visual hierarchy
* Content density

Do not force every collection into the same grid.

---

# 28. Filter Architecture

Where filters are genuinely necessary:

```text
FilterBar
├── CategoryFilter
├── Search
├── Sort
└── ClearFilters
```

Likely candidates:

* Projects
* Insights
* Careers

But filters should only be implemented when content volume justifies them.

---

# 29. Search Architecture

A site-wide search is **not automatically required** for Package 3.

If introduced later:

```text
Search
├── SearchInput
├── SearchResults
├── ResultCard
└── NoResults
```

Do not add a search system merely because the site contains content collections.

---

# 30. Detail Components

Shared detail components:

```text
DetailHero
DetailMetadata
DetailBody
RelatedContent
DetailCTA
```

These provide common structural behavior while allowing each entity type to remain visually appropriate.

---

# 31. Detail Hero

```text
DetailHero
├── Breadcrumbs
├── Category
├── Title
├── Metadata
├── Description
└── Image
```

Not every detail page needs every element.

---

# 32. Metadata

A reusable metadata component can display information such as:

```text
Location
Date
Category
Role
Department
Business Unit
```

Example:

```text
ADDIS ABABA
INFRASTRUCTURE
2026
```

Metadata should remain visually secondary to the main title.

---

# 33. Related Content

```text
RelatedContent
├── SectionHeading
└── Collection
```

Relationships should be meaningful.

Examples:

```text
Project → Related Insights
Business Unit → Related Projects
Insight → Related Projects
Leader → Leadership
```

---

# 34. CTA Architecture

Asterra should use a small set of CTA patterns.

```text
CTASection
├── Heading
├── Description
├── Primary Action
└── Secondary Action
```

Possible variants:

```text
DarkCTA
LightCTA
ImageCTA
MinimalCTA
```

The actual visual treatment follows the design system.

---

# 35. Form Architecture

Forms should be built from shared components.

```text
Form
├── FormField
├── TextInput
├── EmailInput
├── Select
├── Textarea
├── Checkbox
├── SubmitButton
├── ErrorMessage
└── SuccessMessage
```

---

# 36. Form States

Every important form should support:

```text
Initial
Focused
Invalid
Submitting
Success
Failure
```

The Contact form and any future application form should use the same behavioral foundation.

---

# 37. Contact Components

```text
ContactOverview
ContactMethod
InquiryForm
OfficeLocation
MapEmbed
```

`MapEmbed` remains optional.

---

# 38. Article Components

```text
ArticleHeader
ArticleMeta
ArticleBody
ArticleImage
ArticleQuote
ArticleRelatedContent
```

The article body should support semantic content rather than a collection of arbitrary styled blocks.

---

# 39. Project Components

```text
ProjectHero
ProjectMeta
ProjectOverview
ProjectGallery
ProjectResults
RelatedProjects
```

Only use `ProjectResults` if the project specification includes meaningful outcomes.

---

# 40. Leadership Components

```text
LeadershipGrid
LeaderCard
ExecutiveHeader
Biography
ExpertiseList
```

Avoid creating overly elaborate profile components.

---

# 41. Careers Components

```text
OpportunityList
JobCard
JobHeader
JobMeta
JobDescription
RequirementsList
ApplicationCTA
```

If online application functionality is not included, `ApplicationCTA` should direct users to the approved application channel.

---

# 42. Feedback Components

Shared feedback components:

```text
LoadingState
EmptyState
ErrorState
SuccessState
```

These should have consistent visual and interaction patterns.

---

# 43. Modal / Overlay Architecture

Modals should be used sparingly.

Potential uses:

* Mobile menu
* Image gallery
* Confirmation dialog

Avoid using modal windows for primary content that could exist naturally on the page.

---

# 44. Icon Architecture

Use one consistent icon system.

Icons should:

* Have consistent visual weight
* Have accessible labels when interactive
* Not replace meaningful text
* Support the design system

Decorative icons should not create unnecessary accessibility noise.

---

# 45. Motion Architecture

Reusable motion behaviors:

```text
Reveal
Fade
Slide
Hover
Scale
Accordion
MenuTransition
```

Motion must respect reduced-motion preferences.

---

# 46. Component States

Interactive components should define:

```text
Default
Hover
Focus
Active
Disabled
Loading
Error
Success
```

Not every component needs every state.

---

# 47. Accessibility Rules

Every shared component should define its accessibility requirements before implementation.

Minimum requirements:

```text
Semantic HTML
Keyboard access
Visible focus
Correct labels
Meaningful states
Sufficient contrast
Reduced motion support
```

---

# 48. SEO Component Integration

Components should not independently manipulate SEO metadata.

SEO should be controlled at the page/document level.

For example:

```text
Page
 ↓
SEO Configuration
 ↓
Metadata
```

Cards should provide semantic links but should not attempt to manage page metadata.

---

# 49. Performance Rules

Shared components should avoid:

* Unnecessary JavaScript
* Large dependencies
* Duplicate assets
* Excessive animation
* Oversized images

Components should be lightweight enough to reuse across many pages.

---

# 50. Component Naming

Names should describe purpose rather than appearance.

Prefer:

```text
ProjectCard
InsightCard
ContactForm
SectionHeader
```

Avoid:

```text
BlueBox
LargeCard
LeftSection
DarkBlock
```

This makes the architecture resilient when visual styling changes.

---

# 51. Component Ownership

A component should have one clear responsibility.

For example:

```text
ProjectCard
```

should represent a project preview.

It should not also:

* Fetch unrelated data
* Manage page routing
* Control global navigation
* Handle analytics configuration
* Manage database requests

---

# 52. Data Flow

Preferred:

```text
Page
 ↓
Data
 ↓
Component props
 ↓
UI
```

Avoid:

```text
Card
 ↓
Direct database request
```

This keeps components predictable.

---

# 53. Component vs Page Decision Rule

Create a component when:

* It appears more than once
* It represents a meaningful UI pattern
* It has reusable behavior
* It improves consistency

Keep it page-specific when:

* It only exists once
* Its structure is tightly tied to one page
* Abstracting it would make the code harder to understand

---

# 54. Component Architecture by Site Area

```text
GLOBAL
├── Header
├── Footer
├── Navigation
├── Container
└── Breadcrumbs

CONTENT
├── Cards
├── Metadata
├── RelatedContent
└── ContentBody

INTERACTION
├── Buttons
├── Forms
├── Filters
└── Search

MEDIA
├── Images
├── Gallery
└── Video — only if required

FEEDBACK
├── Loading
├── Empty
├── Error
└── Success
```

---

# 55. Page-to-Component Mapping

| Page              | Primary Components                                                   |
| ----------------- | -------------------------------------------------------------------- |
| Home              | Hero, SectionHeader, BusinessUnitCard, ProjectCard, InsightCard, CTA |
| About             | Hero, Section, StoryContent, CTA                                     |
| Leadership        | Hero, LeaderCard, Collection                                         |
| Executive Profile | DetailHero, Biography, RelatedContent                                |
| Business          | Hero, BusinessUnitCard, Collection                                   |
| Business Detail   | DetailHero, CapabilitySection, ProjectCard, InsightCard, CTA         |
| Projects          | Hero, FilterBar if needed, ProjectCard                               |
| Project Detail    | ProjectHero, Metadata, Gallery, RelatedContent, CTA                  |
| Insights          | Hero, FeaturedInsight, FilterBar if needed, InsightCard              |
| Insight Detail    | ArticleHeader, ArticleBody, RelatedContent, CTA                      |
| Careers           | Hero, JobCard, Collection, CTA                                       |
| Job Detail        | JobHeader, JobDescription, Requirements, ApplicationCTA              |
| Contact           | Hero, ContactOverview, InquiryForm, Location, CTA                    |

---

# 56. Component Dependency Direction

The system should generally flow downward:

```text
Page
 ↓
Section
 ↓
Composite
 ↓
Primitive
```

Avoid circular dependencies.

For example:

```text
ProjectPage
 → ProjectCard
 → Button
```

but:

```text
Button
 → ProjectPage
```

should never happen.

---

# 57. Avoiding Design Drift

Reusable components are important because they prevent each page from independently introducing:

* Different button styles
* Different card spacing
* Different typography
* Different border treatments
* Different interaction behavior

The design system remains the visual authority.

---

# 58. Future Extensibility

The component system should be capable of supporting future additions such as:

```text
Insight Category
Additional Business Unit
Additional Project Type
New Job Type
Additional Corporate Page
```

without restructuring the entire application.

However, future possibilities should not cause unnecessary abstraction today.

---

# 59. Final Component Architecture

The resulting hierarchy is:

```text
Asterra
│
├── Foundations
│
├── Primitives
│   ├── Button
│   ├── Link
│   ├── Heading
│   ├── Image
│   └── Container
│
├── Composites
│   ├── Cards
│   ├── Metadata
│   ├── SectionHeader
│   ├── Forms
│   └── Navigation
│
├── Sections
│   ├── Hero
│   ├── Collection
│   ├── RelatedContent
│   ├── Gallery
│   └── CTA
│
└── Pages
    ├── Home
    ├── About
    ├── Leadership
    ├── Business
    ├── Projects
    ├── Insights
    ├── Careers
    └── Contact
```

---

# 60. Quality Gate

Before implementation:

* [ ] Global components are defined.
* [ ] Page-specific components are separated from shared components.
* [ ] Card types are defined.
* [ ] Form architecture is defined.
* [ ] Detail-page patterns are defined.
* [ ] Responsive behavior is considered.
* [ ] Accessibility requirements are included.
* [ ] SEO remains page-level.
* [ ] Components do not directly access backend/database logic.
* [ ] No unnecessary abstraction has been introduced.

---

# 61. Status

```text
Implementation Architecture     ✓
Component Architecture          ✓
```

### Next document

**`Asterra — Content Architecture`**

This will define the actual content models and relationships for:

```text
Company
Leadership
Business Units
Projects
Insights
Careers
Contact
```

After that, we can define the **SEO Implementation Specification** using your SEO playbook as the universal reference.
