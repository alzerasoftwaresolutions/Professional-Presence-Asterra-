# Asterra — Content & Data Implementation Specification

**Package:** Package 3 — Professional Presence
**Project:** Asterra
**Phase:** Implementation Blueprint
**Document:** Content & Data Implementation Specification
**Status:** Foundation Specification

---

# 1. Purpose

This document translates the previously defined **Content Architecture** into an implementation-ready content and data structure.

The objective is to ensure that:

* Asterra content is separated from UI components.
* Client information is not hardcoded into presentation components.
* Reusable content can appear across multiple pages.
* Content can be updated without restructuring the interface.
* Relationships between Business Units, Projects, Insights, and Leadership remain consistent.
* The implementation remains compatible with the Package 3 architecture.

This document defines the **data organization approach**, not the final visual presentation.

---

# 2. Core Principle

The implementation should follow:

```text
CONTENT DATA
     ↓
PAGE COMPOSITION
     ↓
REUSABLE COMPONENTS
     ↓
DESIGN SYSTEM
```

Not:

```text
COMPONENT
   ↓
Hardcoded Asterra content
```

---

# 3. Data Architecture

For the initial Asterra implementation, content should be represented through structured configuration/data files rather than being embedded directly inside page components.

Conceptually:

```text
configuration/
│
├── site.config
├── navigation.config
├── company.config
│
├── leadership/
│
├── business/
│
├── projects/
│
├── insights/
│
├── careers/
│
└── seo/
```

The exact filesystem implementation should follow the previously established project architecture.

---

# 4. Configuration vs Content

Not everything should be treated the same way.

### Configuration

Controls how the application behaves.

Examples:

```text
Navigation
Feature flags
Site settings
SEO defaults
Display settings
```

### Content

Represents Asterra's actual information.

Examples:

```text
Executive
Business Unit
Project
Insight
Job
Location
```

This distinction should remain clear.

---

# 5. Site Configuration

The site-level configuration may contain:

```text
site
├── name
├── shortName
├── description
├── url
├── logo
├── favicon
├── defaultLanguage
└── socialLinks
```

The actual values should come from approved Asterra brand/content materials.

---

# 6. Navigation Configuration

Navigation should be represented centrally.

Conceptually:

```text
navigation
├── primary
├── secondary
└── footer
```

Example structure:

```text
primary:
  - Home
  - About
  - Leadership
  - Business
  - Projects
  - Insights
  - Careers
  - Contact
```

The actual implementation should reference route definitions rather than duplicating URLs throughout components.

---

# 7. Company Data

Company information should have one authoritative source.

```text
company
├── name
├── description
├── story
├── mission
├── vision
├── values
├── facts
├── locations
└── contact
```

Optional fields should only be included when Asterra has actual information for them.

---

# 8. Leadership Data

Each executive should be represented as an independent record.

```text
leadership/
│
├── executive-01
├── executive-02
└── executive-03
```

Each record conceptually contains:

```text
id
slug
name
role
portrait
shortBio
biography
expertise
socialLinks
seo
```

---

# 9. Leadership Listing Data

The leadership listing page should not manually define every executive.

Instead:

```text
Leadership Data
       ↓
Filter / Sort
       ↓
Leadership Cards
       ↓
Leadership Listing
```

This allows the number of executives to change without redesigning the page.

---

# 10. Executive Profile Data

An executive profile should retrieve the appropriate record using the slug.

Conceptually:

```text
/leadership/john-doe
          ↓
find leader by slug
          ↓
Leader data
          ↓
Executive Profile
```

Do not create a separate hardcoded page for every executive.

---

# 11. Business Unit Data

Each business unit should have its own structured record.

```text
business/
│
├── unit-01
├── unit-02
└── unit-03
```

Each record may contain:

```text
id
slug
name
shortDescription
overview
capabilities
image
featured
projectIds
insightIds
seo
```

---

# 12. Capability Data

Capabilities should belong to the appropriate Business Unit.

Conceptually:

```text
Business Unit
│
├── Capability
├── Capability
└── Capability
```

Avoid maintaining capability names separately in multiple pages.

---

# 13. Business Unit Listing

The listing page should retrieve Business Units from the content layer.

```text
Business Units
      ↓
Business Unit Cards
      ↓
Business Listing
```

Featured units can be controlled through structured metadata rather than manually selecting them in JSX.

---

# 14. Business Unit Detail

The detail route should resolve the Business Unit by slug.

```text
/business/:slug
```

The page then uses:

```text
Business Unit
├── Overview
├── Capabilities
├── Related Projects
├── Related Insights
└── CTA
```

---

# 15. Project Data

Projects should be independent content records.

```text
projects/
│
├── project-01
├── project-02
├── project-03
└── ...
```

Each project may contain:

```text
id
slug
title
shortDescription
description
location
category
status
date
businessUnitId
client
images
outcomes
featured
seo
```

---

# 16. Project Relationships

Projects should reference Business Units rather than duplicating Business Unit information.

```text
project.businessUnitId
        ↓
businessUnit
```

This creates a single source of truth.

If the Business Unit name changes, project pages do not need manual updates.

---

# 17. Project Listing

The Projects page should support structured filtering if required.

Potential dimensions:

```text
Business Unit
Category
Location
Status
```

However, filtering should only be introduced when it provides meaningful user value.

The initial Package 3 implementation should remain simple unless the project requirements require advanced filtering.

---

# 18. Project Detail

The project detail page should assemble information from the project record.

```text
Project
│
├── Header
├── Overview
├── Project Information
├── Gallery
├── Outcomes
├── Business Unit
├── Related Projects
└── CTA
```

---

# 19. Insight Data

Insights should use structured records.

```text
insights/
│
├── article-01
├── article-02
└── article-03
```

Each record may contain:

```text
id
slug
title
excerpt
content
featuredImage
authorId
publishedDate
updatedDate
category
tags
businessUnitIds
projectIds
featured
seo
```

---

# 20. Insight Author Relationship

If Asterra publishes named authors:

```text
Insight
   ↓
authorId
   ↓
Leader / Author
```

The author's information should not be copied into every article.

If articles are instead published under the corporate brand, the author relationship can be omitted.

---

# 21. Insight Category Data

Categories should be centralized.

Conceptually:

```text
insights/categories/
├── category-01
├── category-02
└── category-03
```

An insight references its category.

```text
insight.categoryId
```

Do not create a separate category page for every category automatically.

---

# 22. Insight Relationships

Insights may reference:

```text
businessUnitIds
projectIds
```

This enables meaningful related content.

Example:

```text
Insight
   │
   ├── Business Unit
   │
   └── Project
```

---

# 23. Careers Data

Jobs should be represented independently.

```text
careers/
│
├── job-01
├── job-02
└── job-03
```

Each record may contain:

```text
id
slug
title
department
location
employmentType
summary
description
responsibilities
requirements
preferredQualifications
status
closingDate
seo
```

---

# 24. Job Lifecycle

Jobs should have explicit states.

```text
draft
published
closed
archived
```

Only published jobs should appear in the active opportunities listing.

---

# 25. Job Detail

The job detail page should retrieve the record dynamically.

```text
/careers/:slug
```

If a job is closed:

```text
Job
 ↓
status = closed
 ↓
Closed opportunity state
```

The page should not falsely present it as an active opportunity.

---

# 26. Location Data

Locations should be reusable.

```text
locations/
│
├── location-01
└── location-02
```

A location may contain:

```text
id
name
address
city
country
phone
email
coordinates
mapLink
```

---

# 27. Contact Data

Contact information should reference the central location/company data where possible.

Avoid:

```text
Contact Page → hardcoded phone
Footer → different hardcoded phone
About → another hardcoded phone
```

Instead:

```text
Company / Location Data
        ↓
Contact
Footer
About
```

---

# 28. SEO Data

Each indexable entity should be capable of providing SEO metadata.

Conceptually:

```text
seo
├── title
├── description
├── canonical
├── image
└── noIndex
```

If custom metadata is not provided, controlled defaults may be used.

---

# 29. SEO Defaults

A site-level fallback can provide:

```text
Default Title
Default Description
Default Social Image
```

But important pages should have page-specific metadata.

The fallback should not replace intentional SEO configuration.

---

# 30. Image Data

Images should not be represented only by a raw URL where additional metadata is useful.

Conceptually:

```text
image
├── src
├── alt
├── width
├── height
├── caption
└── focalPoint
```

Not every field is required for every image.

---

# 31. Content IDs

Every structured entity should have a stable internal identifier.

Example:

```text
businessUnitId
projectId
insightId
leaderId
jobId
```

IDs should not be exposed in URLs unless there is a specific reason.

Slugs should be used for public routing.

---

# 32. Slugs

Slugs should be:

* Unique within their content type
* Human-readable
* Stable
* Lowercase
* URL-safe

Example:

```text
/business/infrastructure-development
/projects/addis-industrial-park
/insights/future-of-urban-development
```

---

# 33. Relationship Integrity

The implementation should prevent broken references.

Example:

```text
Project
businessUnitId = BU-001
```

must reference an existing Business Unit.

If a related entity is removed, the implementation should identify dependent content rather than silently rendering broken references.

---

# 34. Missing Content Handling

The UI should gracefully handle incomplete optional content.

For example:

```text
Project
├── outcomes → unavailable
```

should result in:

```text
Outcome section omitted
```

rather than:

```text
Outcome
No data
No data
No data
```

Optional content should not produce broken layouts.

---

# 35. Content Validation

Content should be validated before rendering.

Example:

```text
Project
├── title → required
├── slug → required
├── description → required
├── businessUnit → required
└── image → recommended
```

Validation rules should distinguish between:

* Required fields
* Recommended fields
* Optional fields

---

# 36. Content Ordering

Where editorial order matters, use explicit ordering.

Example:

```text
displayOrder: 1
displayOrder: 2
displayOrder: 3
```

This applies to:

* Business Units
* Leadership
* Projects
* Insights
* Careers

where appropriate.

---

# 37. Featured Content

Featured content should be explicitly controlled.

Example:

```text
featured: true
```

This allows:

```text
Home
   ↓
Featured Projects
```

without hardcoding project IDs into the Home page component.

---

# 38. Page-Level Content

Not every page section needs to become a database entity.

Page-level content can remain structured within page configuration.

Example:

```text
Home
├── hero
├── introduction
├── capabilityIntro
└── CTA
```

The principle is:

> Structure reusable business content; do not over-engineer decorative content.

---

# 39. Content vs UI

The following belongs to content:

```text
Project title
Project description
Executive name
Business Unit name
Insight title
Job description
```

The following belongs to UI:

```text
Card spacing
Typography
Border radius
Grid columns
Animation
Button styling
```

Neither should be responsible for the other.

---

# 40. Content vs Design Tokens

Content should not contain arbitrary design values.

Avoid:

```text
project.cardColor = "#123456"
```

Instead:

```text
project.featured = true
```

The design system determines how featured content appears.

---

# 41. Data Fetching Boundary

The UI should not directly access a database.

The architecture remains:

```text
Data Source
     ↓
Data / Content Layer
     ↓
Page
     ↓
Component
```

This preserves the architectural invariant already established for Package 3.

---

# 42. Static vs Dynamic Data

For the initial Professional Presence implementation, content may be represented as local structured data if a backend/CMS is not required.

```text
Static structured content
        ↓
Application
```

This is appropriate when:

* Content volume is manageable
* Frequent editing is not required
* No authentication is required
* No complex content workflow is required

The architecture should still make future migration possible.

---

# 43. Future CMS Compatibility

The data model should not be designed specifically around local files.

A future system could replace:

```text
Local Content
```

with:

```text
CMS/API
```

while preserving:

```text
Page
 ↓
Content Interface
 ↓
Components
```

This reduces future migration effort.

---

# 44. Content Interface Concept

The implementation should conceptually work with content interfaces such as:

```text
getBusinessUnits()
getBusinessUnit(slug)

getProjects()
getProject(slug)

getInsights()
getInsight(slug)

getLeaders()
getLeader(slug)

getJobs()
getJob(slug)
```

The exact implementation may vary according to the final project stack.

The important principle is that pages should not know where the content originates.

---

# 45. Content Query Responsibility

A page should request the content it needs.

Example:

```text
Project Detail
      ↓
getProject(slug)
      ↓
Project
      ↓
Render
```

It should not load the entire content library unnecessarily.

---

# 46. Related Content

Related content should be determined by meaningful relationships.

Priority order:

```text
1. Explicit relationship
2. Same Business Unit
3. Same category
4. Editorial selection
```

Do not randomly select content simply to fill a section.

---

# 47. Search and Filtering

If search or filtering is introduced later, it should operate on structured content.

For example:

```text
Projects
 ↓
Filter by Business Unit
 ↓
Filtered Project List
```

The underlying project records remain unchanged.

---

# 48. Data Security

Public content should contain only information intended for public display.

Never place:

* Passwords
* Private contact information
* Internal notes
* Authentication tokens
* Sensitive operational data

inside public content configuration.

---

# 49. Draft Content

If drafts are stored locally, the implementation should distinguish them from published content.

Conceptually:

```text
status: draft
```

Draft content must not accidentally appear in production routes or sitemap generation.

---

# 50. Content Publishing Rules

For production:

```text
Published
   ↓
Visible
   ↓
Indexable if intended
```

Draft or archived records should not automatically enter public listings.

---

# 51. Sitemap Integration

The sitemap should be generated from published, indexable content.

Conceptually:

```text
Published Projects
       ↓
Indexable Projects
       ↓
Sitemap
```

This avoids manually maintaining every URL.

---

# 52. Metadata Integration

Likewise:

```text
Content Record
      ↓
SEO Metadata
      ↓
Page Metadata
```

This keeps SEO connected to the content architecture.

---

# 53. Content Architecture Example

A project record conceptually flows as:

```text
Project Data
     ↓
Project Resolver
     ↓
Project Page
     ↓
┌──────────────────────┐
│ Project Hero         │
│ Project Overview     │
│ Project Details      │
│ Gallery              │
│ Outcomes             │
│ Business Unit Link   │
│ Related Projects     │
│ CTA                  │
└──────────────────────┘
```

The page composition controls presentation.

The project data controls information.

---

# 54. Recommended Initial Data Set

For implementation testing, create realistic **placeholder/demo records** for:

```text
3–5 Leadership profiles
3–5 Business Units
6–10 Projects
4–6 Insights
2–4 Careers opportunities
1–3 Locations
```

These numbers are for development/testing only.

They are not recommendations for Asterra's actual business content volume.

---

# 55. Content Quality Requirement

Placeholder data must be clearly distinguishable from approved client content.

Do not allow fictional implementation content to be mistaken for real Asterra claims.

---

# 56. Final Data Architecture

```text
CONTENT
│
├── Company
│
├── Leadership
│   └── Leaders
│
├── Business
│   └── Business Units
│       └── Capabilities
│
├── Projects
│   ├── Project
│   ├── Gallery
│   └── Outcomes
│
├── Insights
│   ├── Insight
│   ├── Category
│   └── Author
│
├── Careers
│   └── Job
│
├── Locations
│
└── SEO
    ├── Metadata
    ├── Canonicals
    └── Indexability
```

---

# 57. Implementation Rules

The implementation should follow these invariants:

```text
1. No hardcoded Asterra content inside reusable UI components.

2. No duplicated source-of-truth content.

3. No direct database access from UI components.

4. No arbitrary design tokens inside content records.

5. No automatically indexable unpublished content.

6. No broken relationships between content entities.

7. No unnecessary content models.

8. No fictional client claims presented as production content.
```

---

# 58. Quality Gate

```text
[ ] Content entities defined
[ ] Data relationships defined
[ ] Stable IDs defined
[ ] Slug strategy defined
[ ] SEO fields defined
[ ] Image metadata defined
[ ] Publishing states defined
[ ] Featured content strategy defined
[ ] Content validation defined
[ ] Related-content strategy defined
[ ] Static-data approach defined
[ ] Future CMS compatibility considered
[ ] Data/UI separation preserved
[ ] No hardcoded client content in components
```

---

# 59. Status

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
```

## Next document

**`Asterra — Page Implementation & Component Mapping Specification`**

This is the next important bridge between the blueprint and actual development. It will map each Asterra page to its **sections, components, data sources, interactions, responsive behavior, and implementation responsibilities** so that the design can be built systematically rather than page-by-page without a consistent architecture.
