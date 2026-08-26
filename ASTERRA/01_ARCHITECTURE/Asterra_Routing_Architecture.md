# Asterra — Routing Architecture

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Status:** Architecture definition
**Depends on:** `Asterra_Page_Architecture.md` and `Asterra_Content_Data_Architecture.md`

---

## 1. Purpose

This document defines how Asterra's content architecture maps to URLs and application routes.

The routing system should be:

* Predictable
* Human-readable
* SEO-friendly
* Consistent
* Scalable
* Easy to maintain

The routing structure should reflect the information architecture rather than the internal component structure.

---

# 2. Route Hierarchy

The core route structure is:

```text
/
├── /about
├── /leadership
│   └── /leadership/[slug]
├── /business
│   └── /business/[slug]
├── /projects
│   └── /projects/[slug]
├── /insights
│   └── /insights/[slug]
├── /careers
└── /contact
```

Optional routes:

```text
/insights/category/[slug]
/careers/[slug]
```

These remain optional until the corresponding content requirements justify them.

---

# 3. Route-to-Page Mapping

| Route                | Page                            | Type    |
| -------------------- | ------------------------------- | ------- |
| `/`                  | Asterra Homepage                | Static  |
| `/about`             | Corporate Story                 | Static  |
| `/leadership`        | Leadership Listing              | Listing |
| `/leadership/[slug]` | Executive Profile               | Dynamic |
| `/business`          | Business Units / Capabilities   | Listing |
| `/business/[slug]`   | Business Unit Detail            | Dynamic |
| `/projects`          | Projects / Portfolio Listing    | Listing |
| `/projects/[slug]`   | Project / Case Study Detail     | Dynamic |
| `/insights`          | Insights / Knowledge Resources  | Listing |
| `/insights/[slug]`   | Insight / Article Detail        | Dynamic |
| `/careers`           | Careers / Opportunities Listing | Listing |
| `/contact`           | Corporate Inquiry               | Static  |

Optional:

| Route                       | Page             | Status   |
| --------------------------- | ---------------- | -------- |
| `/insights/category/[slug]` | Insight Category | Optional |
| `/careers/[slug]`           | Job Detail       | Optional |

---

# 4. URL Naming Rules

URLs should use:

* Lowercase characters
* Hyphens between words
* Descriptive names
* Stable slugs
* No unnecessary parameters

### Good

```text
/business
/business/engineering-infrastructure
/projects/addis-industrial-development
/insights/sustainable-infrastructure
```

### Avoid

```text
/business?id=4
/page123
/business_unit_01
/Business/Engineering
/project.php?id=17
```

---

# 5. Dynamic Slugs

Dynamic content should use a stable `slug`.

Example:

```text
Business Unit
Name:
Engineering & Infrastructure

Slug:
engineering-infrastructure

URL:
/business/engineering-infrastructure
```

The slug should generally remain stable after publication.

If a slug must change, the previous URL should redirect appropriately.

---

# 6. Route Hierarchy vs Content Relationship

The URL hierarchy does not need to reproduce every content relationship.

For example, even if a project belongs to a business unit:

```text
Business Unit
    ↓
Project
```

the URL does **not** need to become:

```text
/business/engineering/projects/project-name
```

Prefer:

```text
/business/engineering
/projects/project-name
```

This keeps project URLs short, stable, and independent of changing business classifications.

---

# 7. Navigation Structure

Recommended primary navigation:

```text
ABOUT
BUSINESS
PROJECTS
INSIGHTS
CAREERS
CONTACT
```

Home is accessed through the Asterra logo.

Leadership can be accessed through About:

```text
ABOUT
├── Corporate Story
└── Leadership
```

---

# 8. Footer Navigation

The footer can expose the complete site structure more explicitly.

```text
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
```

This provides an additional crawlable navigation layer.

---

# 9. Breadcrumb Architecture

Breadcrumbs should be used where they improve orientation.

### Business

```text
Home
└── Business
    └── Engineering & Infrastructure
```

### Project

```text
Home
└── Projects
    └── Project Name
```

### Insight

```text
Home
└── Insights
    └── Article Title
```

### Executive

```text
Home
└── About
    └── Leadership
        └── Executive Name
```

Breadcrumbs should reflect the user's logical navigation context rather than necessarily duplicating URL segments.

---

# 10. Canonical URL Rules

Each public page should have one preferred canonical URL.

Examples:

```text
/business/engineering-infrastructure
```

not multiple competing versions such as:

```text
/business/engineering-infrastructure/
/business?id=engineering-infrastructure
/business/Engineering-Infrastructure
```

The implementation should establish one canonical URL format.

---

# 11. Trailing Slash Policy

Choose one convention and use it consistently.

Recommended:

```text
/about
/business
/business/engineering-infrastructure
/projects/project-name
```

No trailing slash.

The server should redirect inconsistent versions to the canonical format.

---

# 12. Query Parameters

Query parameters should not be used for the primary identity of content.

For example:

```text
/projects?category=engineering
```

may be appropriate for filtering.

But:

```text
/projects?id=123
```

should not replace:

```text
/projects/project-name
```

Filtering and sorting parameters should also be evaluated carefully for indexability.

---

# 13. Pagination

If listings eventually contain enough content to require pagination:

```text
/insights?page=2
```

can be used for interface behavior.

However, pagination should not automatically create unnecessary indexable pages.

The implementation should determine whether pagination pages provide independent search value.

For the initial Package 3 implementation, pagination may not be necessary.

---

# 14. Filtering

Project or Insight listings may eventually support filtering.

Example:

```text
/projects?sector=infrastructure
```

or:

```text
/insights?category=sustainability
```

These should primarily serve the user experience.

Do not automatically create SEO landing pages for every filter combination.

---

# 15. Optional Insight Categories

If category pages are eventually justified, use:

```text
/insights/category/[slug]
```

Example:

```text
/insights/category/infrastructure
/insights/category/sustainability
```

A category page should only be indexable when it contains meaningful, useful content and a sufficient number of relevant resources.

---

# 16. Optional Job Detail

If the optional Job Detail page is introduced:

```text
/careers/[slug]
```

Example:

```text
/careers/senior-project-engineer
```

The Careers listing remains:

```text
/careers
```

Closed positions should not automatically remain permanently visible as active opportunities.

---

# 17. 404 Architecture

Unknown URLs should resolve to a custom Asterra 404 page.

Example:

```text
/this-page-does-not-exist
        ↓
      404
```

The 404 page should provide:

* Clear explanation
* Link to Home
* Main navigation
* Useful recovery paths
* Optional search if search is later introduced

Do not redirect every invalid URL to Home.

---

# 18. Redirect Architecture

Redirects should be used when a URL genuinely changes.

Example:

```text
OLD
/projects/old-project-name

        ↓ 301

NEW
/projects/new-project-name
```

Avoid chains such as:

```text
Old
 ↓
Intermediate
 ↓
New
```

Prefer:

```text
Old
 ↓
New
```

---

# 19. Indexability by Route

Initial recommendation:

| Route Type                 |    Indexable |
| -------------------------- | -----------: |
| Homepage                   |          Yes |
| About                      |          Yes |
| Leadership Listing         |          Yes |
| Executive Profile          |          Yes |
| Business Listing           |          Yes |
| Business Detail            |          Yes |
| Project Listing            |          Yes |
| Project Detail             |          Yes |
| Insights Listing           |          Yes |
| Insight Detail             |          Yes |
| Careers Listing            |          Yes |
| Contact                    |          Yes |
| Filter combinations        | Generally No |
| Internal utility routes    |           No |
| Development/staging routes |           No |

Indexability should ultimately depend on the actual content and business requirements.

---

# 20. SEO Route Principles

Following the project's SEO reference:

* Important pages must be crawlable.
* Important pages should have stable URLs.
* Canonical URLs should be clear.
* Internal links should point to canonical URLs.
* Dynamic pages should not become isolated.
* Query parameters should not create uncontrolled duplicate pages.
* Optional category pages should only exist when justified.
* Route structure should support topical relationships.

---

# 21. Internal Linking by Route

The routing system should support deliberate internal linking.

Example:

```text
/business
     ↓
/business/engineering-infrastructure
     ↓
/projects/project-name
     ↓
/insights/article-name
     ↓
/contact
```

This creates a useful information and conversion path.

---

# 22. Route Data Model

The implementation should conceptually map routes to content entities:

```text
/business/[slug]
        ↓
BusinessUnit.slug

/projects/[slug]
        ↓
Project.slug

/insights/[slug]
        ↓
Insight.slug

/leadership/[slug]
        ↓
Executive.slug
```

The route should retrieve the appropriate content rather than embedding business information directly into the page component.

---

# 23. Route Architecture and Components

Routes should represent **pages**, not components.

Correct:

```text
/business/engineering
        ↓
BusinessDetailPage
        ↓
BusinessHero
CapabilitySection
ProjectGrid
InsightList
CTASection
```

Incorrect:

```text
/business/BusinessHero
/business/ProjectGrid
/business/CTA
```

Components belong to the UI architecture, not the URL architecture.

---

# 24. Architecture Boundary

The routing layer should not contain:

* Business logic
* Database logic
* Presentation styling
* Hardcoded client content
* SEO content duplicated across components

Its primary responsibility is:

```text
URL
 ↓
Route
 ↓
Page
 ↓
Content
```

---

# 25. Final Route Tree

```text
ASTERRA
│
├── /
│
├── /about
│
├── /leadership
│   └── /leadership/[slug]
│
├── /business
│   └── /business/[slug]
│
├── /projects
│   └── /projects/[slug]
│
├── /insights
│   └── /insights/[slug]
│
├── /careers
│
└── /contact
```

Optional:

```text
/insights/category/[slug]
/careers/[slug]
```

---

# 26. Final Decision

**Status: APPROVED**

The routing architecture is intentionally simple and aligned with the approved page architecture.

It gives us:

* Clean URLs
* Clear information hierarchy
* Stable dynamic routes
* Strong internal linking possibilities
* Appropriate SEO foundations
* Room for future content growth
* No unnecessary enterprise complexity

### Current Architecture Progress

```text
Package Definition
        ↓
Page Architecture                  ✅
        ↓
Content / Data Architecture        ✅
        ↓
Routing Architecture               ✅
        ↓
Design System                      ← NEXT
        ↓
Page Implementation Planning
        ↓
Implementation
        ↓
QA / SEO / Performance
```

**Next file: `Asterra_Design_System.md`** — using the **Universal Design Analysis** as the governing design reference, while keeping the actual Asterra system appropriately scoped to Package 3.
