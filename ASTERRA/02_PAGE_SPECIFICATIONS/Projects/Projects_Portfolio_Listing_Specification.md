# Asterra Projects / Portfolio — Listing Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Example Client:** Asterra Manufacturing Group
**Page:** Projects / Portfolio — Listing
**Route:** `/projects`
**Version:** 1.0
**Status:** Design & implementation specification

> This specification follows the established Package 3 architecture, Universal Design Analysis, Template 01 — Corporate Authority, Asterra Design Manual, and the previously defined Asterra page specifications. SEO requirements use the **SEO Analytics & Optimization Playbook** as the universal reference, applying only the requirements relevant to the Projects listing.

---

# 1. Page Purpose

The Projects page demonstrates **what Asterra has actually delivered**.

Unlike the Business Units page, which explains what Asterra does, the Projects page provides evidence through:

* Completed work
* Ongoing work
* Project scale
* Industry experience
* Technical capabilities
* Geographic presence
* Business outcomes

The page should answer:

> **What has Asterra done, where, and in what areas of expertise?**

---

# 2. Page Objectives

The page should:

* Establish credibility through evidence.
* Allow visitors to discover relevant projects quickly.
* Organize projects by meaningful categories.
* Connect projects to capabilities and business units.
* Support prospective-client evaluation.
* Create strong internal-linking relationships.
* Support search visibility for project-related queries.
* Provide a scalable architecture for future project growth.

---

# 3. Page Position in Architecture

```text id="2b7w6q"
Homepage
   ↓
Projects
   ↓
Project Detail
   ↓
Capability
   ↓
Business Unit
   ↓
Contact
```

A second path:

```text id="w8c3m5"
Insights
   ↓
Project
   ↓
Capability
```

Projects therefore function as **proof within the broader corporate architecture**.

---

# 4. Primary Audiences

* Prospective customers
* Procurement teams
* Business decision-makers
* Technical professionals
* Partners
* Investors
* Industry researchers
* Existing clients

---

# 5. Project Information Architecture

Each project should ideally contain:

```text id="6m5k2q"
Project
├── Title
├── Slug
├── Short Description
├── Project Type
├── Industry
├── Location
├── Status
├── Year
├── Client
├── Business Unit
├── Capabilities
├── Hero Image
├── Gallery
├── Project Summary
├── Scope
├── Challenge
├── Approach
├── Outcome
├── Related Projects
├── Related Insights
└── SEO
```

Only fields supported by actual project information should be displayed.

---

# 6. Page Structure

```text id="3f8h9d"
Global Header
      ↓
Breadcrumb
      ↓
01 Projects Hero
      ↓
02 Featured Project
      ↓
03 Project Filters
      ↓
04 Project Listing
      ↓
05 Capability / Industry Navigation
      ↓
06 CTA
      ↓
Global Footer
```

---

# 7. Global Header

Use the existing Asterra global header.

```text id="r8k5v1"
[ASTERra LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request an Inquiry]
```

No project-specific navigation should replace the primary site navigation.

---

# 8. Breadcrumb

Recommended:

```text id="j2m9q7"
Home / Projects
```

If the site uses "Portfolio":

```text id="h5v1z4"
Home / Portfolio
```

The terminology should remain consistent across navigation, URL, page title, and metadata.

---

# 9. Section 01 — Projects Hero

## Objective

Establish the purpose of the portfolio.

### Eyebrow

`PROJECTS`

### H1

Recommended:

> **Work that demonstrates what we can deliver.**

Alternative:

> **Selected projects across our businesses and capabilities.**

### Supporting Copy

A concise statement explaining that the portfolio represents selected Asterra work across relevant industries, locations, and capabilities.

---

# 10. Hero Composition

Preferred structure:

```text id="8v6d4s"
┌──────────────────────────────────────────────────────────────┐
│ PROJECTS                                                     │
│                                                              │
│ WORK THAT DEMONSTRATES       Large project image             │
│ WHAT WE CAN DELIVER.         / editorial visual              │
│                                                              │
│ Supporting copy                                              │
└──────────────────────────────────────────────────────────────┘
```

The hero should establish confidence without becoming overly promotional.

---

# 11. Section 02 — Featured Project

## Objective

Give one strategically important project greater prominence.

```text id="5c9w3p"
FEATURED PROJECT

┌─────────────────────────────┬───────────────────────────────┐
│                             │ FEATURED PROJECT              │
│                             │                               │
│       PROJECT IMAGE         │ Project Name                  │
│                             │                               │
│                             │ Short description             │
│                             │                               │
│                             │ Industry / Location           │
│                             │                               │
│                             │ View Project →                │
└─────────────────────────────┴───────────────────────────────┘
```

---

# 12. Featured Project Selection

The featured project should be chosen based on:

* Strategic relevance
* Quality of available documentation
* Business importance
* Technical significance
* Visual strength
* Relevance to target customers

Do not automatically feature the newest project.

---

# 13. Featured Project Metadata

Recommended:

```text id="x6y7f2"
PROJECT
[Industry]
[Location]
[Year]
```

Optional:

```text id="d7r2s5"
Business Unit
```

Keep metadata concise.

---

# 14. Section 03 — Project Filters

The filters should help users find relevant evidence.

Recommended initial taxonomy:

```text id="0j5g8h"
ALL
BY INDUSTRY
BY CAPABILITY
BY YEAR
```

Depending on actual content volume, more explicit filters can be used.

---

# 15. Industry Filter

Potential examples:

```text id="8h2x4v"
Manufacturing
Engineering
Construction
Infrastructure
Energy
Agriculture
Technology
```

Only use industries actually represented by Asterra's portfolio.

Do not create categories solely for SEO.

---

# 16. Capability Filter

Potential examples:

```text id="v3f6z0"
Engineering
Manufacturing
Processing
Technical Services
Project Management
```

These should correspond to the established Asterra capability taxonomy.

The project listing should therefore reinforce the same vocabulary used elsewhere.

---

# 17. Geographic Filter

A location filter may be useful if Asterra has enough projects across multiple regions.

Possible:

```text id="b7g2n6"
LOCATION
[All Locations ▼]
```

Use meaningful geographic grouping.

Avoid creating dozens of location filters with only one project each.

---

# 18. Year Filter

Useful when the portfolio becomes large.

Example:

```text id="y4c9m3"
YEAR
2026
2025
2024
2023
```

Do not make the year filter prominent if there are only a few projects.

---

# 19. Filter Strategy

The filtering system should be based on **visitor intent**.

A visitor should be able to answer:

> "Show me projects similar to the work I am interested in."

Avoid exposing internal database fields that have no user value.

---

# 20. Mobile Filters

Desktop:

```text id="4j2x8n"
[All] [Industry] [Capability] [Location] [Year]
```

Mobile:

```text id="p3d8w1"
FILTER PROJECTS

Industry     [All ▼]
Capability   [All ▼]
Location     [All ▼]
Year         [All ▼]
```

Filters should remain accessible without occupying excessive screen space.

---

# 21. Section 04 — Project Listing

Recommended:

```text id="5f8z6m"
SELECTED PROJECTS

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Image       │ │ Image       │ │ Image       │
│             │ │             │ │             │
│ Industry    │ │ Industry    │ │ Industry    │
│ Project     │ │ Project     │ │ Project     │
│ Location    │ │ Location    │ │ Location    │
└─────────────┘ └─────────────┘ └─────────────┘
```

The visual system should feel more like a **corporate portfolio** than a standard blog grid.

---

# 22. Project Card Anatomy

### Required

* Project image
* Project title
* Project type/industry
* Link

### Recommended

* Location
* Year
* Short description

### Optional

* Business unit
* Capability

Do not overload the card with project specifications.

---

# 23. Project Card Hierarchy

```text id="m9w2g7"
IMAGE
↓
PROJECT TYPE / INDUSTRY
↓
PROJECT TITLE
↓
LOCATION / YEAR
↓
VIEW PROJECT
```

The project title should remain visually dominant.

---

# 24. Project Image Strategy

Project images are critical evidence.

Prioritize:

1. Actual project photography
2. Actual facilities
3. Construction/implementation photography
4. Technical documentation visuals
5. Approved project diagrams

Avoid generic stock imagery.

If a project has no usable image, use a consistent fallback rather than inventing a project visual.

---

# 25. Image Consistency

Project cards should use consistent:

* Aspect ratio
* Cropping behavior
* Image treatment
* Border radius
* Spacing

This creates a controlled portfolio system.

---

# 26. Project Status

If status is relevant, use clear labels:

```text id="5j3q8x"
COMPLETED
ONGOING
```

Other statuses may include:

```text id="m5r0d8"
PLANNED
```

Only use statuses supported by the project data.

---

# 27. Project Scale

Project scale may be displayed when useful.

Examples:

```text id="x2f5r7"
Project Area
Production Capacity
Contract Value
Duration
```

Do not expose commercially sensitive information.

Do not create fake metrics simply to make projects appear more impressive.

---

# 28. Project Count

A project count can provide context:

```text id="n8h6x3"
24 SELECTED PROJECTS
```

This should represent the actual published portfolio.

Do not use exaggerated or generic claims.

---

# 29. Empty State

If filters produce no results:

```text id="j7f4p0"
NO PROJECTS FOUND

No projects currently match the selected filters.

[View All Projects]
```

---

# 30. Pagination

If the project library grows:

```text id="w3k8p2"
← Previous     1  2  3     Next →
```

Alternatively:

**Load More**

The preferred approach should preserve crawlability.

---

# 31. SEO and Pagination

When pagination is implemented:

* Each page should have a crawlable URL where appropriate.
* Important projects should remain discoverable.
* Do not depend exclusively on JavaScript to expose deeper projects.
* Avoid duplicate URLs.
* Maintain consistent canonicalization.

Example:

```text id="n0q5g7"
/projects?page=2
```

The final implementation should determine the exact URL strategy.

---

# 32. Section 05 — Explore by Capability

Connect the portfolio to Asterra's capability architecture.

```text id="x7b5p3z"
EXPLORE OUR CAPABILITIES

Engineering
Manufacturing
Processing
Technical Services

[Explore Capabilities →]
```

This is an important architectural connection.

---

# 33. Explore by Industry

If useful:

```text id="k4v6y1"
EXPLORE BY INDUSTRY

Manufacturing
Infrastructure
Agriculture
Energy
Engineering
```

Do not duplicate a large filter interface below the projects.

This section should provide **discovery**, not filtering.

---

# 34. Project-to-Capability Relationship

Every project should be able to connect to one or more relevant capabilities.

Example:

```text id="6h0m8w"
Project
 ↓
Industrial Engineering
 ↓
Engineering Capability
 ↓
Engineering Business Unit
```

This strengthens information architecture and internal linking.

---

# 35. Project-to-Insight Relationship

Relevant insights may link to projects.

Example:

```text id="8f2m3q"
Insight
 ↓
Related Project
```

The project detail page can then link back to the relevant insight.

This creates a connected knowledge system rather than isolated pages.

---

# 36. Section 06 — Final CTA

Recommended:

> **Planning a project?**

Supporting text:

> Discuss your requirements with the appropriate Asterra team.

Actions:

**Start a Conversation**

**Explore Capabilities**

The CTA should follow the evidence provided by the portfolio.

---

# 37. Responsive Design

## Desktop

```text id="s8v4f1"
Hero
↓
Featured Project
↓
Horizontal Filters
↓
3-Column Project Grid
↓
Capability / Industry Navigation
↓
CTA
```

## Tablet

```text id="e4m8g2"
Hero
↓
Featured Project
↓
Wrapped Filters
↓
2-Column Grid
↓
Navigation
↓
CTA
```

## Mobile

```text id="q9c7x1"
Hero
↓
Featured Project
↓
Filter Controls
↓
1-Column Project List
↓
Capabilities
↓
CTA
```

---

# 38. Typography

Continue the Asterra design system.

### IBM Plex Serif

Use for:

* Hero heading
* Featured project title where appropriate
* Major editorial statements

### IBM Plex Sans

Use for:

* Project metadata
* Filters
* Navigation
* Card titles
* Descriptions
* Buttons

---

# 39. Color

Continue:

* Deep Evergreen
* Mineral Teal
* Warm Ivory
* White
* Ink
* Supporting neutral tones

Project status labels should not introduce unrelated colors.

---

# 40. Motion

Use restrained portfolio interaction.

Recommended:

* Image scale on hover
* Subtle card elevation
* Arrow movement
* Filter transitions

Avoid:

* Auto-rotating project carousels
* Excessive image animations
* Large scroll effects
* Heavy parallax

---

# 41. Content Model

Recommended:

```text id="9g4n1x"
project
├── id
├── title
├── slug
├── shortDescription
├── projectType
├── industry
├── location
├── year
├── status
├── client
├── businessUnit
├── capabilities[]
├── heroImage
├── gallery[]
├── summary
├── scope
├── challenge
├── approach
├── outcome
├── relatedProjects[]
├── relatedInsights[]
├── seo
└── published
```

Only use fields that are appropriate and approved for public presentation.

---

# 42. Client Privacy

Project information should respect confidentiality.

Do not publicly expose:

* Confidential client information
* Sensitive project values
* Restricted technical information
* Internal documents
* Private contact information

If a client name cannot be publicly disclosed, use an approved description such as:

> Leading industrial manufacturer

Only when that wording has been approved.

---

# 43. Routing

Primary route:

```text id="x3r8h2"
/projects
```

Individual project:

```text id="n6c4q1"
/projects/[project-slug]
```

Example:

```text id="s7d1p8"
/projects/industrial-processing-facility
```

---

# 44. URL Rules

Project slugs should be:

* Descriptive
* Short enough to understand
* Stable
* Lowercase
* Hyphen-separated

Avoid:

```text id="6m2h8v"
/projects/project-17
```

Prefer:

```text id="r9k1c3"
/projects/industrial-processing-facility
```

when accurate.

---

# 45. SEO — Page Intent

The Projects listing primarily serves:

* Commercial investigation
* Informational intent
* Brand/entity research

It should demonstrate relevant experience rather than target a large collection of unrelated keywords.

---

# 46. SEO — Title

Recommended:

```text id="2y5k7q"
Projects & Portfolio | Asterra Manufacturing Group
```

Or:

```text id="p5f8m0"
Projects | Asterra Manufacturing Group
```

Use whichever reflects the approved site terminology.

---

# 47. SEO — Meta Description

Recommended structure:

```text id="w8n3c2"
Explore selected Asterra projects across industries, capabilities, and locations, and see how our teams deliver practical results.
```

The final description should accurately represent the published portfolio.

---

# 48. SEO — Heading Structure

Recommended:

```text id="h6v1p4"
H1
Projects

H2
Featured Project

H2
Selected Projects

H2
Explore Our Capabilities

H2
Planning a Project?
```

Only use headings for actual sections.

---

# 49. SEO — Project Detail Discovery

The listing page must provide crawlable links to individual project pages.

Avoid:

```text id="t7j5x0"
Click card → JavaScript modal
```

Prefer:

```text id="k8f3p6"
Project card
     ↓
Actual URL
     ↓
Project Detail Page
```

This is important for both usability and search discovery.

---

# 50. SEO — Internal Linking

The Projects page should link to:

* Business Units
* Capabilities
* Individual Projects
* Insights
* Contact

Project detail pages should link back to:

* Projects
* Relevant capability
* Business unit
* Relevant insights
* Related projects

---

# 51. SEO — Structured Data

Potentially relevant:

* `CollectionPage`
* `ItemList`
* `BreadcrumbList`

Individual project pages may use:

* `CreativeWork`
* `Article` where the page is actually an editorial case study
* Other appropriate Schema.org types depending on the final content model

Do not use a schema type merely because it sounds relevant.

---

# 52. SEO — Images

Project images should have:

* Descriptive filenames
* Meaningful alt text
* Appropriate dimensions
* Responsive variants
* Compression
* Modern formats where supported

Example alt text:

> Industrial processing facility completed by Asterra

Avoid:

> project image industrial construction company best engineering Ethiopia

The latter is keyword stuffing.

---

# 53. SEO — Performance

Portfolio pages can become image-heavy.

Requirements:

* Responsive images
* Lazy-load below-fold images
* Optimize thumbnails
* Optimize featured image
* Reserve image dimensions
* Avoid unnecessary video backgrounds
* Avoid loading full project galleries on the listing page

The listing page should load only what is needed for discovery.

---

# 54. SEO — Mobile

Check:

* Filter controls
* Project card readability
* Image performance
* Touch targets
* Navigation
* Pagination
* Horizontal overflow
* Content visibility

The mobile experience must preserve meaningful project information.

---

# 55. Accessibility

Required:

* Keyboard-accessible filters
* Visible focus states
* Descriptive project links
* Meaningful image alt text
* Correct heading hierarchy
* Sufficient contrast
* Accessible status indicators
* Screen-reader-friendly filter states

Do not rely solely on image recognition to communicate project information.

---

# 56. AI/Search Accessibility

Project information should be available as semantic text.

Important information should not exist only inside images.

Expose:

```text id="4h7j2x"
Project Name
Industry
Location
Year
Status
Business Unit
Capabilities
Description
```

This makes project evidence more understandable to search engines and AI-driven discovery systems.

---

# 57. Component Architecture

### Shared

```text id="k5v9m2"
Header
Footer
Breadcrumb
Button
PageContainer
CTASection
```

### Projects

```text id="r8f3q6"
ProjectsHero
FeaturedProject
ProjectFilters
ProjectGrid
ProjectCard
ProjectCount
Pagination
CapabilityNavigation
IndustryNavigation
EmptyState
```

Optional:

```text id="v2j7x5"
ProjectSearch
```

Search should only be introduced if the portfolio becomes sufficiently large.

---

# 58. Implementation Rules

The implementation agent should:

1. Follow Package 3.
2. Follow Template 01.
3. Follow the Asterra Design Manual.
4. Reuse the established project taxonomy.
5. Reuse the global design system.
6. Use actual project information only.
7. Make project discovery straightforward.
8. Preserve crawlable project URLs.
9. Connect projects to capabilities.
10. Connect projects to relevant insights.
11. Optimize project imagery.
12. Maintain mobile usability.
13. Maintain accessibility.
14. Apply relevant SEO requirements.
15. Avoid turning the portfolio into a generic gallery.
16. Keep the content model scalable.
17. Respect project confidentiality.

---

# 59. Anti-Patterns

Do not create:

* Generic image galleries
* Fake projects
* Fake project statistics
* Fake client names
* Stock-photo-heavy portfolios
* Excessive filters
* Filters with one-item categories
* JavaScript-only project discovery
* Infinite scroll with no crawlable alternative
* Keyword-stuffed project titles
* Huge project cards that waste screen space
* Excessive animations
* Unrelated project recommendations
* Confidential project information

---

# 60. QA Checklist

## Content

* [ ] Project names are accurate.
* [ ] Project descriptions are accurate.
* [ ] Industries are correctly assigned.
* [ ] Locations are correct.
* [ ] Status values are correct.
* [ ] Client information is approved.
* [ ] Images belong to the project.
* [ ] No confidential information is exposed.

## Design

* [ ] Hero communicates portfolio purpose.
* [ ] Featured project is clearly prioritized.
* [ ] Project cards are consistent.
* [ ] Images maintain consistent proportions.
* [ ] Filters are restrained.
* [ ] Typography follows Asterra.
* [ ] Color follows Asterra.
* [ ] Portfolio feels authoritative rather than generic.

## SEO

* [ ] Unique title.
* [ ] Useful meta description.
* [ ] Correct H1.
* [ ] Logical heading structure.
* [ ] Crawlable project links.
* [ ] Canonical URL.
* [ ] Appropriate structured data.
* [ ] Internal links to capabilities/business units.
* [ ] Descriptive project URLs.
* [ ] Meaningful image alt text.
* [ ] Sitemap strategy supports project discovery.

## Performance

* [ ] Project images are optimized.
* [ ] Responsive image sizes are used.
* [ ] Below-fold images are lazy-loaded.
* [ ] Image dimensions are reserved.
* [ ] No unnecessary project videos load on listing.
* [ ] Mobile performance is tested.

## Accessibility

* [ ] Filters work with keyboard.
* [ ] Focus states are visible.
* [ ] Project links are descriptive.
* [ ] Images have meaningful alt text.
* [ ] Status information is accessible.
* [ ] Heading hierarchy is logical.
* [ ] Contrast is sufficient.

---

# 61. Completion Criteria

The Projects Listing specification is complete when:

* Page purpose is defined.
* Project information architecture is defined.
* Featured project is defined.
* Filters are defined.
* Project cards are defined.
* Project taxonomy is defined.
* Pagination is defined.
* Capability relationships are defined.
* Industry relationships are defined.
* Responsive behavior is defined.
* Project content model is defined.
* Routing is defined.
* SEO requirements are defined.
* Internal linking is defined.
* Structured data is defined.
* Performance requirements are defined.
* Accessibility requirements are defined.
* Confidentiality rules are defined.
* Component architecture is defined.
* QA requirements are defined.

---

# 62. Updated Asterra Architecture

```text
ASTERRA
│
├── HOME
│
├── ABOUT
│   └── Corporate Story
│
├── LEADERSHIP
│   ├── Leadership Listing
│   └── Executive Profile
│
├── BUSINESS
│   ├── Business Units / Capabilities
│   └── Business Unit Detail
│
├── PROJECTS
│   ├── Projects / Portfolio Listing   ← CURRENT
│   └── Project Detail                 ← NEXT
│
├── INSIGHTS
│   ├── Insights / Resources Listing
│   └── Insight / Article Detail
│
├── CAREERS
│
└── CONTACT
```

**Next file: Asterra Project / Case Study — Detailed Page Specification.**
