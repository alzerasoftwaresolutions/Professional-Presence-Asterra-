# Asterra — Content Architecture

**Package:** Package 3 — Professional Presence
**Project:** Asterra
**Phase:** Implementation Blueprint
**Document:** Content Architecture
**Status:** Foundation Specification

---

# 1. Purpose

This document defines how Asterra's content should be structured, organized, related, and presented across the website.

The objective is to keep **content separate from UI implementation** so that the website can grow without requiring page components to be rewritten every time content changes.

This document covers:

* Content entities
* Content fields
* Relationships
* Content hierarchy
* Content ownership
* Reusable content
* SEO-related content fields
* Listing and detail relationships
* Optional content structures

It does **not** define the visual design of these pages.

---

# 2. Content Architecture Principles

### 2.1 Content is separate from presentation

Page components should determine **how content is displayed**.

Content data should determine **what is displayed**.

```text
Content
   ↓
Page
   ↓
Component
   ↓
Visual presentation
```

---

### 2.2 One source of truth

A piece of information should not be manually duplicated across multiple pages when it can be referenced from a single source.

For example:

```text
Business Unit
     ↓
Referenced by
     ├── Business Listing
     ├── Business Detail
     ├── Project
     └── Insight
```

If the business unit name changes, dependent content should not require manual replacement everywhere.

---

### 2.3 Relationships should be meaningful

Content relationships should represent actual business relationships.

For example:

```text
Project
   ↓
Business Unit
```

is meaningful.

Creating arbitrary relationships merely to populate "Related Content" is not.

---

# 3. Asterra Content Model

The primary content entities are:

```text
ASTER​RA
│
├── Company
│
├── Leadership
│
├── Business Units
│
├── Projects
│
├── Insights
│
├── Careers
│
└── Contact
```

---

# 4. Company

The Company entity represents Asterra's corporate identity and foundational information.

```text
Company
├── Name
├── Legal Name — if required
├── Short Description
├── Corporate Story
├── Mission / Purpose
├── Vision — if applicable
├── Values
├── Key Facts
├── Contact Information
├── Locations
├── Social Links
└── Brand Assets
```

Not every field must appear publicly.

---

# 5. Company Content Usage

Company information can appear across:

```text
Home
About
Footer
Contact
Leadership
Business
```

However, each page should use only the amount of corporate information appropriate to its purpose.

The About page remains the primary location for the complete corporate story.

---

# 6. Corporate Story

The corporate story should be structured rather than stored as one large text block.

Conceptually:

```text
Corporate Story
├── Introduction
├── Background
├── Evolution
├── Current Position
└── Future Direction
```

Only include sections that are supported by real Asterra information.

Do not fabricate company history to fill a template.

---

# 7. Company Values

If Asterra has defined values:

```text
Value
├── Name
├── Short Description
└── Supporting Content
```

Example structure:

```text
Integrity
    ↓
What it means
    ↓
How it influences the company
```

Avoid generic corporate statements without supporting meaning.

---

# 8. Leadership Entity

Each executive should be represented as a structured record.

```text
Leader
├── id
├── slug
├── name
├── role
├── portrait
├── shortBio
├── biography
├── expertise
├── education — optional
├── experience — optional
├── LinkedIn — optional
└── seo
```

Only publish personal information that Asterra has approved.

---

# 9. Leadership Relationships

Leadership is related primarily to the company.

Potential relationships:

```text
Company
   ↓
Leadership
```

A leader may optionally be associated with:

```text
Business Unit
```

when that relationship is relevant and publicly supported.

---

# 10. Business Unit Entity

Business Units represent Asterra's major areas of capability.

```text
BusinessUnit
├── id
├── slug
├── name
├── shortDescription
├── overview
├── capabilities
├── image
├── featured
├── projects
├── insights
└── seo
```

---

# 11. Capabilities

Capabilities should be structured where useful.

```text
Capability
├── name
├── description
└── optionalSupportingContent
```

Example:

```text
Business Unit
   ↓
Capability
   ├── Capability A
   ├── Capability B
   └── Capability C
```

Avoid treating every small service as a separate business unit.

---

# 12. Business Unit Relationships

```text
Business Unit
│
├── Projects
│
└── Insights
```

This creates a useful corporate content network:

```text
Business Unit
      ↓
Projects
      ↓
Insights
```

---

# 13. Project Entity

Projects are a major proof-of-capability content type.

```text
Project
├── id
├── slug
├── title
├── shortDescription
├── description
├── location
├── category
├── status — optional
├── date — optional
├── businessUnit
├── client — optional
├── images
├── outcomes — optional
└── seo
```

Only include information that can legitimately be published.

---

# 14. Project Categories

Projects may be categorized according to meaningful business distinctions.

Possible dimensions:

```text
Sector
Location
Business Unit
Project Type
```

Do not create excessive categories.

The category structure should remain manageable.

---

# 15. Project Gallery

A project may contain multiple media items.

```text
ProjectGallery
├── image
├── alt
├── caption — optional
├── order
└── focalPoint — optional
```

The gallery should support meaningful storytelling rather than simply displaying a large number of images.

---

# 16. Project Outcomes

If reliable information is available, projects may include measurable outcomes.

```text
Outcome
├── label
├── value
└── description
```

For example:

```text
Project Duration
18 Months
```

Do not invent statistics.

---

# 17. Insight Entity

Insights represent Asterra's knowledge and thought-leadership content.

```text
Insight
├── id
├── slug
├── title
├── excerpt
├── content
├── featuredImage
├── author
├── publishedDate
├── updatedDate — optional
├── category
├── tags — optional
├── relatedBusinessUnits
├── relatedProjects
└── seo
```

---

# 18. Insight Types

Insights may eventually support different content types:

```text
Article
Research
Report
News
Case Study
Perspective
```

However, only introduce separate types if the business actually needs them.

For Package 3, a simple Insight model is sufficient initially.

---

# 19. Insight Categories

Categories can organize the knowledge library.

Example:

```text
Insights
├── Industry
├── Projects
├── Sustainability
├── Corporate
└── Expertise
```

These are examples only.

Actual categories should be derived from Asterra's content strategy.

---

# 20. Optional Insight Category Pages

Category pages can exist as:

```text
/insights/category/:slug
```

but they remain optional.

They should only be implemented when:

* There is enough content
* Categories provide useful navigation
* They have distinct search intent
* They add genuine user value

Do not create empty or thin category pages.

---

# 21. Insight Relationships

Insights can connect to:

```text
Business Unit
Project
Author
Category
```

Example:

```text
Insight
   │
   ├── Business Unit
   └── Project
```

This makes related-content recommendations meaningful.

---

# 22. Careers Entity

```text
Job
├── id
├── slug
├── title
├── department
├── location
├── employmentType
├── summary
├── description
├── responsibilities
├── requirements
├── preferredQualifications — optional
├── closingDate — optional
├── status
└── seo
```

---

# 23. Job Status

A job should have a clear lifecycle.

```text
Draft
   ↓
Published
   ↓
Closed
```

Optionally:

```text
Archived
```

Closed opportunities should not continue appearing as active openings.

---

# 24. Careers Content

The Careers page may also contain corporate employer content:

```text
Careers
├── Introduction
├── Culture
├── Working at Asterra
├── Opportunities
└── Contact / Application Information
```

These are page-level content sections rather than individual Job entities.

---

# 25. Contact Content

Contact information should be centrally maintained.

```text
Contact
├── General Email
├── Phone
├── Address
├── Office Hours — if applicable
├── Locations
└── Inquiry Types
```

---

# 26. Location Entity

If Asterra operates multiple locations:

```text
Location
├── name
├── address
├── city
├── country
├── phone
├── email
├── coordinates — optional
├── openingHours — optional
└── mapLink — optional
```

This allows contact and local SEO information to remain consistent.

---

# 27. Contact Inquiry Types

The inquiry form may use structured categories.

Example:

```text
General Inquiry
Business Partnership
Project Inquiry
Media
Careers
Other
```

Actual options should be determined by Asterra's business requirements.

---

# 28. Navigation Content

Navigation should not be duplicated across every page.

Conceptually:

```text
Navigation
├── Primary Navigation
├── Secondary Navigation
└── Footer Navigation
```

The router and navigation configuration should remain aligned.

---

# 29. Content Relationships

The core relationship graph is:

```text
                         ┌─────────────┐
                         │   COMPANY   │
                         └──────┬──────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        LEADERSHIP        BUSINESS UNITS      CAREERS
                                │
                         ┌──────┴──────┐
                         │             │
                         ▼             ▼
                      PROJECTS      INSIGHTS
                         │             │
                         └──────┬──────┘
                                │
                                ▼
                         RELATED CONTENT
```

This is the primary content network.

---

# 30. Cross-Content Relationships

### Business Unit → Projects

Shows evidence of capability.

### Business Unit → Insights

Shows knowledge and expertise.

### Project → Business Unit

Shows which capability delivered the project.

### Project → Insights

Provides additional context around the work.

### Insight → Business Unit

Connects knowledge to corporate capability.

### Insight → Project

Connects thought leadership to real-world work.

---

# 31. Content Reuse

A single Project record may appear as:

```text
Projects Listing
       ↓
Project Detail
       ↓
Business Unit Page
       ↓
Home Featured Projects
       ↓
Related Insights
```

The content should come from one source rather than being copied into each page.

---

# 32. Featured Content

Some entities may have a `featured` property.

For example:

```text
Project
├── featured: true
```

This can allow the Home page to display selected projects.

However, featured content should be explicitly controlled rather than automatically selecting arbitrary records.

---

# 33. Ordering

Where editorial order matters, use explicit ordering.

Example:

```text
displayOrder
```

rather than relying on:

```text
database creation date
```

This gives the content owner control over presentation.

---

# 34. Publishing Lifecycle

Content should conceptually support:

```text
Draft
   ↓
Review
   ↓
Published
   ↓
Updated
   ↓
Archived
```

This is particularly useful for:

* Insights
* Projects
* Jobs

---

# 35. Content Validation

Required content should be validated before publishing.

Examples:

### Project

```text
Title
Description
Business Unit
Primary Image
```

### Insight

```text
Title
Excerpt
Body
Author
Publication Date
```

### Job

```text
Title
Description
Requirements
Status
```

---

# 36. Content Quality Rules

Content should be:

* Accurate
* Specific
* Consistent
* Approved
* Useful
* Appropriate to the page
* Free from unnecessary duplication

Do not use placeholder corporate claims in production.

---

# 37. SEO Content Fields

Each indexable content entity should support SEO information.

```text
seo
├── title
├── description
├── canonical
├── image
└── noIndex
```

Structured data should be generated from the content model where appropriate.

The detailed implementation will be defined in the **SEO Implementation Specification**.

---

# 38. URL Architecture

Content entities should have stable slugs.

```text
/about

/leadership

/leadership/executive-name

/business

/business/business-unit-name

/projects

/projects/project-name

/insights

/insights/article-name

/careers

/careers/job-name

/contact
```

URLs should describe the content rather than expose internal database identifiers.

---

# 39. Content Ownership

The architecture should make ownership clear.

```text
Corporate Information
→ Company

Executives
→ Leadership

Capabilities
→ Business Units

Completed Work
→ Projects

Knowledge
→ Insights

Open Positions
→ Careers

Inquiries
→ Contact
```

---

# 40. What Should Not Be Stored as Independent Entities

Do not create separate database/content entities for every visual section.

For example, these normally remain page content:

```text
Hero heading
Section introduction
CTA copy
Decorative labels
```

They do not automatically need their own content models.

---

# 41. Avoiding Over-Modeling

Do not turn every piece of text into structured data.

The purpose of the content architecture is to structure **meaningful reusable information**, not every sentence.

---

# 42. Content Architecture and Components

The relationship is:

```text
CONTENT MODEL
      ↓
PAGE DATA
      ↓
COMPONENT PROPS
      ↓
COMPONENT
      ↓
UI
```

Example:

```text
Project
  ↓
ProjectCard
  ↓
Project Listing
```

The `ProjectCard` should not need to know where the project data originated.

---

# 43. Content Architecture and SEO

Your universal SEO reference should influence this layer where appropriate.

For example, the content model should make it possible to maintain:

* Unique titles
* Useful descriptions
* Stable URLs
* Author information
* Publication dates
* Updated dates
* Image metadata
* Meaningful relationships
* Indexability controls

The full SEO workflow will be handled separately rather than duplicating the entire SEO playbook here.

---

# 44. Minimum Viable Content Model

For the first implementation, Asterra does not need an enormous CMS structure.

The minimum useful model is:

```text
Company
Leadership
BusinessUnit
Project
Insight
Job
Location
ContactInquiry
```

This is sufficient to support the approved architecture.

---

# 45. Future Expansion

The architecture can later support:

```text
Awards
Certifications
Partners
News
Publications
Reports
Events
Sustainability Initiatives
Case Studies
```

These should only be introduced when there is a real content requirement.

---

# 46. Final Content Architecture

```text
ASTER​RA CONTENT
│
├── COMPANY
│   ├── Story
│   ├── Purpose
│   ├── Values
│   └── Facts
│
├── LEADERSHIP
│   └── Executive Profiles
│
├── BUSINESS
│   └── Business Units
│       └── Capabilities
│
├── PROJECTS
│   └── Project Records
│       ├── Gallery
│       ├── Outcomes
│       └── Business Unit
│
├── INSIGHTS
│   └── Insight Records
│       ├── Categories
│       ├── Authors
│       ├── Projects
│       └── Business Units
│
├── CAREERS
│   └── Job Records
│
└── CONTACT
    ├── Locations
    └── Inquiries
```

---

# 47. Quality Gate

Before moving into implementation:

* [ ] All major content entities are defined.
* [ ] Relationships are meaningful.
* [ ] Content is separated from UI.
* [ ] Stable slugs are defined.
* [ ] Reusable content has a single source of truth.
* [ ] Featured content can be controlled.
* [ ] Publishing states are considered.
* [ ] SEO fields are available where appropriate.
* [ ] No unnecessary content entities have been created.
* [ ] The model supports the approved page architecture.

---

# 48. Status

```text
Package Definition                  ✓
Information Architecture             ✓
Design System                        ✓
Universal Design Analysis            ✓
Page Specifications                  ✓
SEO Reference Framework              ✓
Implementation Architecture         ✓
Component Architecture              ✓
Content Architecture                 ✓
```

## Next

**`Asterra — SEO Implementation Specification`**

This is the appropriate next document because we now have the **architecture, components, and content model** needed to specify exactly how SEO should be implemented across Asterra without copying the entire universal SEO playbook.
