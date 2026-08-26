# Asterra — Content & Data Architecture

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Status:** Architecture definition
**Depends on:** `Asterra_Page_Architecture.md`

This document defines how Asterra's content entities relate to one another. It does **not** define database implementation yet. The purpose is to establish a clean content model before implementation begins.

---

## 1. Purpose

The page architecture defines **where information appears**.

The content/data architecture defines **what information exists and how it connects**.

```text
Page Architecture
       ↓
Content / Data Architecture
       ↓
Design
       ↓
Implementation
```

The objective is to prevent every page from becoming an isolated collection of hardcoded content.

---

# 2. Core Content Model

The Asterra website should be organized around these primary content entities:

```text
Asterra
│
├── Corporate Story
├── Leadership
│   └── Executive
│
├── Business
│   └── Business Unit / Capability
│
├── Projects
│   └── Project / Case Study
│
├── Insights
│   └── Insight / Article
│
├── Careers
│   └── Opportunity
│
└── Contact
```

---

# 3. Entity Relationship Overview

The important relationships are:

```text
                 ASTERRA
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
   BUSINESS      LEADERSHIP    PROJECTS
       │                         │
       │                         │
       └────────────┬────────────┘
                    ↓
                 INSIGHTS
                    │
                    ↓
                 CONTACT
```

More specifically:

```text
Business Unit
    ↕
Project
    ↕
Insight

Leadership
    ↓
Business Unit

Career Opportunity
    ↓
Business / Department
```

---

# 4. Corporate Entity

The corporate entity represents Asterra itself.

### Core fields

```text
organization
├── name
├── legalName
├── shortDescription
├── longDescription
├── logo
├── contactInformation
├── locations
├── socialLinks
└── seo
```

Not every field needs to appear on the same page.

The organization information should be reusable across:

* Header
* Footer
* About
* Contact
* Structured data
* SEO metadata

---

# 5. Corporate Story

The Corporate Story is primarily editorial content rather than a highly dynamic entity.

Possible content structure:

```text
Corporate Story
├── Introduction
├── History
├── Mission
├── Vision
├── Values
├── Approach
└── Corporate Milestones
```

Only include sections that are supported by actual Asterra information.

---

# 6. Leadership Entity

Each executive should be represented as an individual content entity.

```text
Executive
├── id
├── name
├── slug
├── role
├── biography
├── portrait
├── expertise
├── businessUnits[]
└── socialLinks[]
```

Optional:

```text
education
professionalExperience
credentials
```

Do not create fields simply because they could theoretically be useful.

---

# 7. Leadership Relationships

An executive may be associated with one or more business areas.

```text
Executive
     ↓
Business Unit
```

Example:

```text
Executive
└── Engineering & Infrastructure
```

This allows a profile to connect naturally to the organization's capabilities.

---

# 8. Business Unit Entity

The Business Unit is one of the most important entities in the architecture.

```text
Business Unit
├── id
├── name
├── slug
├── shortDescription
├── description
├── capabilities[]
├── featuredImage
├── projects[]
├── insights[]
└── seo
```

---

# 9. Capability

A capability may be represented as a section inside a Business Unit rather than a completely separate entity.

Example:

```text
Business Unit
└── Engineering
    ├── Infrastructure Planning
    ├── Civil Engineering
    └── Project Management
```

This keeps the architecture appropriately simple for Package 3.

A separate Capability entity should only be introduced if Asterra needs capabilities to exist independently across multiple business units.

---

# 10. Project Entity

Projects provide evidence of Asterra's capabilities.

```text
Project
├── id
├── title
├── slug
├── summary
├── description
├── location
├── year
├── status
├── featuredImage
├── gallery[]
├── businessUnits[]
├── capabilities[]
├── insights[]
└── seo
```

Optional fields:

```text
client
sector
projectType
scope
services
```

Only expose client information when it can legitimately be published.

---

# 11. Project Relationships

Projects should connect back to the business structure.

```text
Business Unit
       ↓
    Project
       ↓
    Insight
```

A project may belong to multiple business areas where appropriate.

---

# 12. Insight Entity

Insights represent Asterra's knowledge and editorial content.

```text
Insight
├── id
├── title
├── slug
├── excerpt
├── content
├── category
├── featuredImage
├── author
├── publishedDate
├── updatedDate
├── readingTime
├── businessUnits[]
├── projects[]
├── relatedInsights[]
└── seo
```

---

# 13. Insight Categories

Categories should remain lightweight.

Potential categories could include:

```text
Engineering
Infrastructure
Sustainability
Project Insights
Industry Perspectives
Corporate
```

The actual categories should be based on Asterra's content strategy.

Do not create dozens of categories.

---

# 14. Insight Relationships

An Insight can connect to:

```text
Insight
├── Business Unit
├── Project
└── Other Insights
```

This enables the journey:

```text
Insight
   ↓
Business Capability
   ↓
Project Evidence
   ↓
Corporate Inquiry
```

---

# 15. Career Opportunity Entity

Career opportunities are temporary content records.

```text
Opportunity
├── id
├── title
├── slug
├── department
├── businessUnit
├── location
├── employmentType
├── experienceLevel
├── summary
├── status
├── publishedDate
└── closingDate
```

Optional:

```text
responsibilities
requirements
qualifications
applicationMethod
```

These become more important if the optional Job Detail page is later introduced.

---

# 16. Opportunity Lifecycle

```text
DRAFT
  ↓
PUBLISHED
  ↓
CLOSED
  ↓
ARCHIVED
```

Only `PUBLISHED` opportunities appear on the Careers listing.

---

# 17. Contact Entity

The Contact page does not need to become a large data entity.

Reusable corporate contact information can include:

```text
Contact Information
├── email
├── phone
├── address
├── locations[]
├── officeHours
└── inquiryTypes[]
```

If an actual inquiry submission system is later implemented, that becomes a separate functional system.

For Package 3, the page can remain primarily informational.

---

# 18. SEO Metadata Model

SEO should be associated with entities that generate public pages.

A reusable structure:

```text
SEO
├── title
├── description
├── canonicalUrl
├── robots
└── socialImage
```

Applicable to:

* Business Units
* Projects
* Insights
* Executives
* Careers where needed

The homepage, About, and Contact pages can have their own page-level metadata.

---

# 19. Media Model

Media should be treated as reusable content rather than duplicated page fields.

```text
Media
├── id
├── url
├── altText
├── caption
├── width
├── height
└── credit
```

Potential relationships:

```text
Business Unit → Media
Project → Media[]
Insight → Media[]
Executive → Media
```

This supports consistent image handling and accessibility.

---

# 20. Content Relationship Matrix

| Entity    | Business | Project  | Insight  | Executive | Career |
| --------- | -------- | -------- | -------- | --------- | ------ |
| Business  | —        | ✓        | ✓        | ✓         | ✓      |
| Project   | ✓        | —        | ✓        | —         | —      |
| Insight   | ✓        | ✓        | ✓        | Optional  | —      |
| Executive | ✓        | Optional | Optional | —         | —      |
| Career    | ✓        | —        | —        | —         | —      |

The relationships should only exist when they are meaningful.

---

# 21. Example Content Flow

A realistic Asterra visitor journey could be:

```text
Homepage
   ↓
Business
   ↓
Engineering & Infrastructure
   ↓
Project
   ↓
Related Insight
   ↓
Corporate Inquiry
```

Another:

```text
Insight
   ↓
Related Business Unit
   ↓
Related Projects
   ↓
Contact
```

Another:

```text
About
   ↓
Leadership
   ↓
Executive Profile
   ↓
Relevant Business Unit
```

---

# 22. Content Reuse

The same content should be reusable in different contexts.

For example, a Business Unit may appear:

```text
Business Listing
       ↓
Business Detail
       ↓
Project Detail
       ↓
Insight Detail
       ↓
Footer / Related Content
```

The implementation should reference the same underlying business entity rather than creating separate copies.

---

# 23. Avoiding Hardcoded Relationships

Do not build relationships like:

```text
if page === "engineering":
    show project X
```

Instead, relationships should be represented in the content model:

```text
BusinessUnit.projects[]
```

This allows the content to change without modifying UI code.

---

# 24. Content Ownership

Each entity should have a clear source of truth.

```text
Organization
    → Corporate information

Executive
    → Leadership information

Business Unit
    → Capability information

Project
    → Project information

Insight
    → Editorial information

Opportunity
    → Recruitment information
```

A page should consume these entities rather than become the source of truth itself.

---

# 25. Package 3 Complexity Boundary

The content model should remain intentionally simple.

We do **not** need:

* Complex CMS workflows
* Multi-level taxonomies
* Enterprise DAM
* Advanced personalization
* Customer accounts
* Complex permissions
* Recruitment management
* Marketing automation

The goal is:

> **Enough structure to create a professional, maintainable corporate website without turning Package 3 into an enterprise content platform.**

---

# 26. Implementation Direction

The eventual implementation should separate:

```text
Content
   ↓
Data
   ↓
Page Composition
   ↓
UI Components
```

For example:

```text
Business data
     ↓
Business Detail Page
     ↓
BusinessHeader
BusinessOverview
CapabilityList
RelatedProjects
RelatedInsights
BusinessCTA
```

This maintains the architectural separation already established for Package 3.

---

# 27. Final Content Architecture

```text
ASTERRA
│
├── Organization
│
├── Corporate Story
│
├── Leadership
│   └── Executive[]
│
├── Business
│   └── BusinessUnit[]
│       ├── Capability[]
│       ├── Project[]
│       └── Insight[]
│
├── Projects
│   └── Project[]
│       ├── BusinessUnit[]
│       └── Insight[]
│
├── Insights
│   └── Insight[]
│       ├── BusinessUnit[]
│       ├── Project[]
│       └── RelatedInsight[]
│
├── Careers
│   └── Opportunity[]
│       └── BusinessUnit
│
└── Contact
```

---

# 28. Architecture Decision

**Status: APPROVED — Initial Content Model**

The model is intentionally:

* Structured
* Reusable
* Relational
* SEO-friendly
* Scalable
* Proportionate to Package 3

The most important rule is:

> **Content relationships belong in the content/data model, not inside individual page components.**

---

## Next Document

The next logical architecture document is:

**`Asterra_Routing_Architecture.md`**

It will define:

* URL structure
* Route hierarchy
* Dynamic routes
* Page-to-route mapping
* Navigation relationships
* Breadcrumb structure
* 404 behavior
* Canonical route rules

After that, we can move into the **design/implementation planning layer** rather than continuing to create page specifications.
