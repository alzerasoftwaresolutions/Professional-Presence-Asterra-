# Asterra — Page Implementation & Component Mapping Specification

**Package:** Package 3 — Professional Presence
**Project:** Asterra
**Phase:** Implementation Blueprint
**Document:** Page Implementation & Component Mapping Specification
**Status:** Implementation Reference

---

# 1. Purpose

This document connects the approved Asterra page specifications to the actual component architecture.

It answers:

* What components does each page require?
* Which components are reusable?
* Which data does each section consume?
* Which interactions are required?
* Which components are responsive?
* Which elements belong to the global system?
* Which sections are page-specific?

The objective is to prevent each page from being implemented independently.

---

# 2. Implementation Principle

The implementation should follow:

```text
Page
 ↓
Section Composition
 ↓
Reusable Components
 ↓
Design System Components
 ↓
Content/Data
```

A page should primarily **compose components**, not contain large amounts of presentation logic.

---

# 3. Component Architecture

Use three major component levels.

```text
src/
│
├── components/
│   ├── ui/
│   ├── shared/
│   └── domain/
│
├── pages/
│
├── layouts/
│
└── app/
```

---

# 4. UI Components

These are the smallest reusable visual primitives.

Examples:

```text
Button
Container
Heading
Text
Badge
Divider
Icon
Image
Link
Input
Select
```

They should contain minimal business-specific knowledge.

---

# 5. Shared Components

Shared components represent recurring website patterns.

Examples:

```text
SiteHeader
SiteFooter
PageHero
SectionIntro
CTASection
Breadcrumbs
ImageGallery
ContentCard
Pagination
EmptyState
```

---

# 6. Domain Components

Domain components understand Asterra-specific content concepts.

Examples:

```text
LeaderCard
BusinessUnitCard
ProjectCard
InsightCard
JobCard
ProjectMeta
InsightMeta
LeadershipGrid
BusinessUnitGrid
ProjectGrid
```

These components can consume structured Asterra content.

---

# 7. Layout Components

Layouts control common page structure.

Potential layouts:

```text
CorporateLayout
ContentLayout
DetailLayout
```

For example:

```text
CorporateLayout
├── Header
├── Main
└── Footer
```

---

# 8. Global Header

The Header is shared across the entire site.

Responsibilities:

* Brand/logo
* Primary navigation
* Mobile navigation
* Active route indication
* Primary CTA if defined
* Responsive behavior

The Header should not contain page-specific content.

---

# 9. Global Footer

The Footer should contain reusable corporate information.

Potential areas:

```text
Brand
Navigation
Business links
Contact information
Social links
Legal links
Copyright
```

Contact details should come from the centralized content/configuration layer.

---

# 10. Home Page Mapping

```text
Home
│
├── SiteHeader
├── Hero
├── CorporateIntroduction
├── BusinessUnitsPreview
├── FeaturedProjects
├── LeadershipPreview
├── InsightsPreview
├── CorporateCTA
└── SiteFooter
```

Not every section needs to exist simultaneously if the final approved homepage specification uses a different composition.

---

# 11. Home Hero

Primary components:

```text
Hero
HeroMedia
HeroContent
PrimaryCTA
SecondaryCTA
```

Responsibilities:

* Establish Asterra's positioning
* Introduce the organization
* Provide the primary entry point
* Establish visual tone

The hero should not contain excessive interactive behavior.

---

# 12. Corporate Introduction

Potential structure:

```text
SectionIntro
+
RichText
+
SupportingVisual
+
Link
```

Content should come from company data rather than being embedded directly in the component.

---

# 13. Business Units Preview

```text
BusinessUnitsPreview
        ↓
BusinessUnitGrid
        ↓
BusinessUnitCard
```

Data:

```text
getFeaturedBusinessUnits()
```

The Home page should not manually define every Business Unit card.

---

# 14. Featured Projects

```text
FeaturedProjects
        ↓
ProjectGrid / ProjectFeature
        ↓
ProjectCard
```

Data:

```text
getFeaturedProjects()
```

The selection should be controlled by content metadata.

---

# 15. Leadership Preview

```text
LeadershipPreview
       ↓
LeadershipGrid
       ↓
LeaderCard
```

Only a curated subset should appear on Home.

The full Leadership page remains the authoritative listing.

---

# 16. Insights Preview

```text
InsightsPreview
       ↓
InsightGrid
       ↓
InsightCard
```

The Home page should display selected or recent content rather than duplicating the full Insights archive.

---

# 17. About / Corporate Story

```text
About
│
├── SiteHeader
├── PageHero
├── CorporateStory
├── CompanyFacts
├── MissionVision
├── Values
├── CorporateCapabilities
├── SupportingMedia
├── CTASection
└── SiteFooter
```

Only sections defined by the approved About specification should be implemented.

---

# 18. Leadership Listing

```text
Leadership Listing
│
├── PageHero
├── SectionIntro
├── LeadershipFilters (if required)
├── LeadershipGrid
│   └── LeaderCard
└── CTASection
```

Primary data:

```text
getLeaders()
```

---

# 19. Executive Profile

```text
Executive Profile
│
├── DetailHero
├── ExecutiveIdentity
├── Biography
├── Expertise
├── RelatedBusinessUnits
├── RelatedProjects
└── CTASection
```

Data:

```text
getLeader(slug)
```

The profile should not duplicate information manually.

---

# 20. Business Unit Listing

```text
Business Units
│
├── PageHero
├── SectionIntro
├── BusinessUnitGrid
│   └── BusinessUnitCard
└── CTASection
```

Data:

```text
getBusinessUnits()
```

---

# 21. Business Unit Detail

```text
Business Unit Detail
│
├── DetailHero
├── Overview
├── Capabilities
├── FeaturedProjects
├── RelatedInsights
├── SupportingMedia
└── CTASection
```

Data:

```text
getBusinessUnit(slug)
```

Related content should be resolved through defined relationships.

---

# 22. Projects Listing

```text
Projects
│
├── PageHero
├── SectionIntro
├── ProjectFilters
├── ProjectGrid
│   └── ProjectCard
└── CTASection
```

Filtering should only be implemented to the extent defined in the final page specification.

Do not create unnecessary filtering complexity for Package 3.

---

# 23. Project Detail

```text
Project Detail
│
├── DetailHero
├── ProjectOverview
├── ProjectMeta
├── ProjectGallery
├── ProjectOutcomes
├── BusinessUnitReference
├── RelatedProjects
└── CTASection
```

Data:

```text
getProject(slug)
```

---

# 24. Insights Listing

```text
Insights
│
├── PageHero
├── SectionIntro
├── FeaturedInsight
├── InsightFilters
├── InsightGrid
│   └── InsightCard
└── Pagination / Load More
```

Only include filtering or pagination if required by the approved specification.

---

# 25. Insight Detail

```text
Insight Detail
│
├── ArticleHeader
├── ArticleMeta
├── ArticleContent
├── ArticleMedia
├── RelatedInsights
├── RelatedBusinessUnits
└── CTASection
```

Data:

```text
getInsight(slug)
```

---

# 26. Category Pages

If category pages are approved as optional:

```text
Insight Category
│
├── CategoryHeader
├── InsightGrid
└── Pagination
```

They should not be created automatically for every possible category.

Only meaningful categories should receive dedicated routes.

---

# 27. Careers Listing

```text
Careers
│
├── PageHero
├── CareersIntroduction
├── OpportunitiesList
│   └── JobCard
├── Culture / Employer Content
└── CTASection
```

Data:

```text
getPublishedJobs()
```

---

# 28. Job Detail

If implemented:

```text
Job Detail
│
├── JobHeader
├── JobMeta
├── Description
├── Responsibilities
├── Requirements
├── ApplicationCTA
└── RelatedOpportunities
```

Data:

```text
getJob(slug)
```

---

# 29. Contact Page

```text
Contact
│
├── PageHero
├── ContactIntroduction
├── ContactDetails
├── Locations
├── InquiryForm
└── Map / LocationVisual
```

The final implementation should only include a map if it adds meaningful value and does not create unnecessary performance cost.

---

# 30. Detail Page Pattern

Several Asterra pages share a common detail architecture.

```text
Detail Page
│
├── DetailHero
├── PrimaryContent
├── SupportingContent
├── RelatedContent
└── CTA
```

This pattern should be reusable.

---

# 31. Listing Page Pattern

Likewise:

```text
Listing Page
│
├── PageHero
├── Introduction
├── Optional Filters
├── Content Grid/List
└── CTA
```

This should be treated as a reusable structural pattern, not copied independently for every listing.

---

# 32. Card Architecture

Cards should be domain-specific where necessary.

### ProjectCard

```text
Image
Title
Location / Category
Short Description
Link
```

### BusinessUnitCard

```text
Image / Visual
Name
Description
Capabilities
Link
```

### InsightCard

```text
Image
Category
Title
Date
Excerpt
Link
```

### LeaderCard

```text
Portrait
Name
Role
Link
```

### JobCard

```text
Title
Location
Department
Employment Type
Link
```

---

# 33. CTA Architecture

CTA sections should use a reusable component.

```text
CTASection
├── Eyebrow
├── Heading
├── SupportingText
└── Action
```

The visual presentation can vary through controlled variants.

Avoid creating a unique CTA implementation for every page.

---

# 34. Page Hero Architecture

Use a common hero system with controlled variants.

Potential variants:

```text
Hero
├── Corporate
├── Listing
├── Detail
└── Article
```

The variants should share the same underlying design system.

---

# 35. Breadcrumbs

Breadcrumbs should be available for deeper content pages where they improve orientation.

Example:

```text
Home
 /
Projects
 /
Project Name
```

They should not be forced onto every page if the design does not require them.

---

# 36. Related Content Component

A reusable component can handle:

```text
RelatedContent
```

with domain-specific inputs:

```text
Related Projects
Related Insights
Related Business Units
Related Opportunities
```

The component should receive already-resolved content rather than performing arbitrary business logic internally.

---

# 37. Empty States

Listings should define an empty state.

Example:

```text
No current opportunities are available.
```

The empty state should be visually consistent with the Asterra system.

---

# 38. Error States

Detail routes should handle:

```text
Content found
Content unavailable
Content archived
Invalid route
```

A missing project should not produce a broken component tree.

---

# 39. Responsive Component Behavior

Components should define responsive behavior rather than relying only on page-level overrides.

Example:

```text
ProjectGrid

Desktop → 3 columns
Tablet  → 2 columns
Mobile  → 1 column
```

The exact values should follow the approved design system.

---

# 40. Mobile Navigation Behavior

```text
Desktop
Header → Full Navigation

Mobile
Header → Menu Trigger
             ↓
         Navigation Panel
```

The navigation implementation must follow the accessibility specification already defined.

---

# 41. Image Component

A reusable image component should handle:

* Responsive sizing
* Alt text
* Dimensions
* Loading behavior
* Object positioning
* Appropriate formats

This prevents every page from implementing image behavior independently.

---

# 42. Typography Components

If typography primitives are used, examples include:

```text
DisplayHeading
SectionHeading
BodyText
Eyebrow
Caption
```

These should consume the design-system tokens rather than define their own font values.

---

# 43. Container System

Pages should use a common container system.

Conceptually:

```text
Page
 ↓
Container
 ↓
Section Content
```

This maintains consistent:

* Maximum width
* Horizontal spacing
* Responsive gutters

---

# 44. Section System

Sections should share predictable spacing rules.

Conceptually:

```text
Section
├── Intro
├── Content
└── Optional Footer
```

Avoid arbitrary page-specific spacing values unless the design specification requires them.

---

# 45. Component Ownership

A useful ownership model is:

```text
UI Components
    ↓
Shared Patterns
    ↓
Domain Components
    ↓
Page Sections
    ↓
Pages
```

Lower-level components should not depend on higher-level pages.

---

# 46. Dependency Direction

Preferred:

```text
Design Tokens
      ↓
UI
      ↓
Shared Components
      ↓
Domain Components
      ↓
Page Sections
      ↓
Pages
```

Avoid circular dependencies.

---

# 47. Page Components Should Be Compositional

A page should look conceptually like:

```text
<PageLayout>
  <PageHero />
  <Section>
    <BusinessUnitGrid />
  </Section>
  <CTASection />
</PageLayout>
```

rather than containing hundreds of lines of styling and content logic.

---

# 48. Data Flow

The preferred flow is:

```text
Content Source
      ↓
Content Function
      ↓
Page
      ↓
Domain Component
      ↓
UI Component
```

Example:

```text
getProjects()
      ↓
ProjectsPage
      ↓
ProjectGrid
      ↓
ProjectCard
```

---

# 49. SEO Integration

Page components should receive SEO information from the content/configuration layer.

Conceptually:

```text
Project
├── Content
└── SEO
     ↓
Project Page
     ↓
Document Metadata
```

This connects the implementation to the SEO framework already defined.

---

# 50. Accessibility Integration

Accessibility requirements should be implemented at the component level.

For example:

```text
Button
 → keyboard behavior
 → focus state

Image
 → alt behavior

Modal
 → focus management

Navigation
 → keyboard navigation
```

This prevents accessibility fixes from being repeatedly implemented on individual pages.

---

# 51. Performance Integration

Likewise:

```text
Image Component
 → responsive images
 → loading strategy

Route
 → appropriate code splitting

Animation
 → reduced motion

Content
 → efficient rendering
```

Performance should be distributed through the architecture.

---

# 52. Component Reuse Rule

Before creating a new component, ask:

> Does this represent a genuinely different behavior or only a different visual variation?

If it is only a visual variation, prefer a controlled variant.

---

# 53. Avoid Over-Abstraction

Do not create components simply to make the component count larger.

Bad:

```text
SmallTitleWrapper
TextContainerWrapper
SectionTextWrapper
```

when they provide no meaningful reusable behavior.

The architecture should remain understandable.

---

# 54. Page-to-Component Matrix

| Page               | Primary Components                                                    |
| ------------------ | --------------------------------------------------------------------- |
| Home               | Hero, BusinessUnitGrid, ProjectGrid, LeadershipGrid, InsightGrid, CTA |
| About              | PageHero, CorporateStory, CompanyFacts, Values, CTA                   |
| Leadership Listing | PageHero, LeadershipGrid, LeaderCard                                  |
| Executive Profile  | DetailHero, ExecutiveIdentity, Biography, RelatedContent              |
| Business Listing   | PageHero, BusinessUnitGrid                                            |
| Business Detail    | DetailHero, Capabilities, ProjectGrid, InsightGrid                    |
| Projects Listing   | PageHero, Filters, ProjectGrid                                        |
| Project Detail     | DetailHero, ProjectMeta, Gallery, Outcomes, RelatedProjects           |
| Insights Listing   | PageHero, FeaturedInsight, Filters, InsightGrid                       |
| Insight Detail     | ArticleHeader, ArticleContent, RelatedInsights                        |
| Category           | CategoryHeader, InsightGrid                                           |
| Careers            | PageHero, JobList, CareersContent                                     |
| Job Detail         | JobHeader, JobContent, ApplicationCTA                                 |
| Contact            | PageHero, ContactDetails, Locations, InquiryForm                      |

---

# 55. Implementation Sequence

The actual implementation should proceed in this order:

```text
1. Design Tokens
        ↓
2. UI Primitives
        ↓
3. Global Layout
        ↓
4. Header / Navigation
        ↓
5. Footer
        ↓
6. Shared Patterns
        ↓
7. Domain Components
        ↓
8. Content/Data Layer
        ↓
9. Home
        ↓
10. Listing Pages
        ↓
11. Detail Pages
        ↓
12. Forms / Interactions
        ↓
13. Responsive Refinement
        ↓
14. Accessibility QA
        ↓
15. Performance QA
        ↓
16. SEO QA
```

---

# 56. What This Prevents

This architecture prevents several common problems:

### Problem

Every page has its own Header.

### Solution

One shared Header.

---

### Problem

Project information is duplicated across pages.

### Solution

Central Project data with relationships.

---

### Problem

Every card has different spacing.

### Solution

Shared domain components + design tokens.

---

### Problem

SEO metadata is forgotten on detail pages.

### Solution

SEO fields are part of the content architecture.

---

### Problem

Mobile behavior is fixed separately on every page.

### Solution

Responsive behavior belongs to reusable components.

---

# 57. Implementation Quality Gate

```text
[ ] Global components identified
[ ] UI primitives identified
[ ] Shared patterns identified
[ ] Domain components identified
[ ] Page compositions mapped
[ ] Data sources mapped
[ ] Responsive behavior considered
[ ] Accessibility responsibility assigned
[ ] Performance responsibility assigned
[ ] SEO integration defined
[ ] Component dependency direction defined
[ ] Reuse boundaries defined
[ ] Over-abstraction avoided
```

---

# 58. Current Architecture Status

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
```

## Next document

**`Asterra_Responsive_Behavior & Breakpoint_Specification`**

This should be the next implementation document because we now know **what each page contains and which components build it**. The next step is to define **how those components transform across desktop, tablet, and mobile**, before moving deeper into the final implementation/QA specifications.
