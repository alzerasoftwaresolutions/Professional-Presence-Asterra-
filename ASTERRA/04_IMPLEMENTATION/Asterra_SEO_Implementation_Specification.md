# Asterra — SEO Implementation Specification

**Package:** Package 3 — Professional Presence
**Project:** Asterra
**Phase:** Implementation Blueprint
**Document:** SEO Implementation Specification
**Reference:** SEO Analytics & Optimization Playbook
**Status:** Foundation Specification

---

# 1. Purpose

This document translates the universal **SEO Analytics & Optimization Playbook** into implementation requirements specifically for the Asterra website.

The universal playbook remains the broader SEO reference.

This document defines only what is relevant to the Asterra implementation.

The objective is to ensure that Asterra is:

* Discoverable
* Crawlable
* Indexable
* Semantically understandable
* Technically sound
* Mobile-friendly
* Performance-conscious
* Accessible
* Structured for search
* Prepared for analytics and future optimization

---

# 2. SEO Implementation Principles

Asterra SEO should follow these principles:

1. Build SEO into the architecture rather than adding it after development.
2. Give every important page a clear search purpose.
3. Keep URLs stable and descriptive.
4. Use semantic HTML.
5. Keep metadata unique and meaningful.
6. Connect related content through internal linking.
7. Optimize images and page performance.
8. Treat mobile as a primary experience.
9. Use structured data only where it accurately represents visible content.
10. Measure SEO against business outcomes, not rankings alone.

---

# 3. SEO Architecture

SEO should operate as a shared application capability.

```text id="j5x4vf"
Content
   ↓
Page
   ↓
SEO Configuration
   ↓
Metadata
   ↓
Structured Data
   ↓
Search Engine
```

The SEO implementation should not be duplicated inside individual page components.

---

# 4. SEO Responsibilities

The implementation should separate SEO responsibilities into:

```text id="v0m3fg"
Technical SEO
On-Page SEO
Structured Data
Internal Linking
Performance
Analytics
Indexation
```

---

# 5. URL Architecture

Use stable, descriptive URLs.

```text id="k2x3qf"
/about
/leadership
/leadership/:slug
/business
/business/:slug
/projects
/projects/:slug
/insights
/insights/:slug
/careers
/careers/:slug
/contact
```

URLs should:

* Be lowercase
* Use meaningful words
* Avoid unnecessary parameters
* Avoid internal IDs
* Remain stable after publication

---

# 6. Canonical URLs

Each indexable page should have a canonical URL.

Examples:

```text id="e3w8bg"
/projects/example-project
```

Canonical URLs should point to the preferred version of the page.

Avoid:

* Self-contradictory canonicals
* Canonicals pointing to unrelated content
* Canonical chains
* Multiple competing canonical URLs

---

# 7. Metadata Architecture

Every important indexable page should be able to define:

```text id="ezxk5j"
SEO
├── title
├── description
├── canonical
├── image
├── type
└── noIndex
```

The implementation should generate metadata from this configuration.

---

# 8. Title Tags

Titles should be:

* Unique
* Descriptive
* Relevant to the page
* Written for users
* Consistent with the Asterra brand

Examples:

```text id="k2lqgq"
Asterra | Corporate Overview
Asterra | Business Capabilities
Asterra | Projects
Asterra | Insights
Asterra | Careers
```

Individual pages should describe the actual entity.

Do not mechanically append keywords to every title.

---

# 9. Meta Descriptions

Descriptions should communicate:

* What the page contains
* Why the page is useful
* The relevant topic

Avoid keyword stuffing.

Descriptions should be generated or maintained intentionally rather than relying entirely on arbitrary page text.

---

# 10. Heading Architecture

Each page should have one clear primary topic.

Conceptually:

```text id="7f9flc"
H1
 ├── H2
 │    ├── H3
 │    └── H3
 ├── H2
 └── H2
```

Heading levels should communicate document hierarchy.

Do not use heading elements merely to achieve a desired font size.

---

# 11. Semantic HTML

Use appropriate semantic elements:

```text id="7j4rxy"
<header>
<nav>
<main>
<section>
<article>
<footer>
```

This supports:

* Accessibility
* Content understanding
* Maintainability
* Search interpretation

---

# 12. Structured Data Strategy

Asterra should use structured data where there is a clear and accurate match.

Potential types include:

```text id="q7yqai"
Organization
WebSite
WebPage
BreadcrumbList
Article
Person
LocalBusiness — where applicable
```

Additional types should only be introduced when justified by the actual content.

---

# 13. Organization Schema

The corporate site should provide appropriate organization information.

Conceptually:

```text id="6w0n9a"
Organization
├── name
├── url
├── logo
├── description
├── contactPoint
└── sameAs
```

Only include information that is accurate and publicly supported.

---

# 14. Person Schema

Executive profile pages may use `Person` structured data.

Relevant information may include:

```text id="2e2i2x"
name
jobTitle
image
worksFor
sameAs
```

Only publish appropriate information.

---

# 15. Article Schema

Insight detail pages may use `Article` or an appropriate subtype.

Potential fields:

```text id="w3u1gd"
headline
description
image
author
datePublished
dateModified
publisher
```

The structured data must match visible article content.

---

# 16. Breadcrumb Schema

Detail pages can use:

```text id="n2e4n6"
BreadcrumbList
```

where breadcrumbs are visibly present and useful.

The structured data should reflect the actual navigation hierarchy.

---

# 17. Sitemap Architecture

A sitemap should contain important canonical, indexable URLs.

Potential groups:

```text id="wq6e0h"
/
 /about
 /leadership
 /leadership/*
 /business
 /business/*
 /projects
 /projects/*
 /insights
 /insights/*
 /careers
 /careers/*
 /contact
```

Do not include:

* Redirect URLs
* Error pages
* `noindex` pages
* Duplicate URLs

---

# 18. Robots.txt

The robots configuration should:

* Avoid blocking important public pages
* Prevent accidental exposure of development paths where appropriate
* Reference the sitemap
* Reflect the production architecture

Do not use robots.txt as a substitute for proper indexation controls.

---

# 19. Indexability Rules

Important public pages should normally be:

```text
Crawlable
+
Indexable
+
Canonical
```

Pages that should not appear in search results can use appropriate `noindex` controls.

Examples may include:

* Internal utility pages
* Certain filtered states
* Temporary pages

Do not automatically index every possible URL generated by the application.

---

# 20. Dynamic URL Control

If filters are introduced to Projects or Insights:

```text id="5c1gqy"
/projects?category=infrastructure
```

should not automatically become an indexable SEO page.

The implementation should deliberately decide which filtered states have search value.

---

# 21. Internal Linking Architecture

Internal linking should connect the major Asterra content entities.

```text id="6a4grc"
Business Unit
      ↕
Projects
      ↕
Insights
```

And:

```text id="78q2ik"
Home
 ↓
Business
 ↓
Business Unit
 ↓
Project
 ↓
Contact
```

This creates useful user and crawler pathways.

---

# 22. Contextual Internal Links

Links should occur naturally within content.

Examples:

```text id="cx8w6u"
Business Unit page
→ Related Project

Project page
→ Relevant Business Unit

Insight
→ Relevant Project

Insight
→ Relevant Business Unit
```

Avoid excessive automated linking.

---

# 23. Anchor Text

Anchor text should describe the destination.

Prefer:

```text id="y4h5o0"
Explore our infrastructure capabilities
```

over:

```text id="j1yq79"
Click here
```

The universal SEO playbook's accessibility and internal-linking principles should guide implementation.

---

# 24. Image SEO

All meaningful images should support:

```text id="5c3qad"
src
alt
width
height
loading
```

where technically appropriate.

Use descriptive filenames when managing assets.

Example:

```text id="yq9b5p"
asterra-infrastructure-project.webp
```

rather than:

```text id="k5i4xq"
IMG_4829.jpg
```

---

# 25. Alt Text

Alt text should:

* Describe meaningful image content
* Be concise
* Support accessibility
* Avoid keyword stuffing

Decorative images should not receive unnecessary descriptive alt text.

---

# 26. Image Performance

Images should use appropriate:

* Dimensions
* Compression
* Formats
* Responsive variants
* Loading priorities

Above-the-fold hero images should not be unnecessarily lazy-loaded if doing so delays the main visual content.

---

# 27. Core Web Vitals

The implementation should monitor:

```text id="i6i5fr"
LCP
INP
CLS
```

The design and component architecture should minimize unnecessary causes of poor performance.

---

# 28. Performance Risk Areas

Pay particular attention to:

```text id="l5o0bd"
Hero imagery
Web fonts
Animations
Large galleries
Third-party scripts
Video
JavaScript bundles
```

The goal is a strong real-world experience rather than chasing an arbitrary score.

---

# 29. Mobile SEO

Every page should be designed and tested for mobile.

Check:

* Navigation
* Typography
* Images
* Buttons
* Forms
* Content hierarchy
* Horizontal overflow
* Touch targets
* Loading performance

Mobile and desktop should preserve equivalent important content.

---

# 30. Accessibility and SEO

Accessibility should be treated as part of implementation quality.

Ensure:

* Semantic HTML
* Keyboard navigation
* Visible focus
* Descriptive links
* Form labels
* Appropriate alt text
* Logical heading structure
* Sufficient contrast

This aligns with the universal SEO playbook without treating accessibility as merely an SEO tactic.

---

# 31. Page-Specific SEO Requirements

## Home

Primary purpose:

```text
Corporate discovery
Brand positioning
Business capability discovery
```

Should have:

* Unique title
* Corporate description
* Organization structured data where appropriate
* Links to major site areas

---

## About

Primary purpose:

```text
Corporate identity
Company story
Trust
```

Should have:

* Unique metadata
* Clear H1
* Corporate narrative
* Internal links to Leadership and Business

---

## Leadership

Primary purpose:

```text
Corporate leadership discovery
```

Should have:

* Clear H1
* Individual profile links
* Appropriate Person structured data on profile pages

---

## Business

Primary purpose:

```text
Capability discovery
```

Should connect:

```text
Business
 ↓
Business Units
 ↓
Projects
```

---

## Business Unit Detail

Primary purpose:

```text
Capability explanation
```

Should connect:

```text
Capability
 ↓
Projects
 ↓
Relevant Insights
 ↓
Contact
```

---

## Projects

Primary purpose:

```text
Proof of capability
```

Should expose meaningful project information rather than thin portfolio cards.

---

## Project Detail

Primary purpose:

```text
Demonstrate real work
```

Should include:

* Descriptive title
* Project context
* Business unit relationship
* Relevant metadata
* Image information
* Related content

---

## Insights

Primary purpose:

```text
Knowledge discovery
```

Should support:

* Clear titles
* Categories where useful
* Publication dates
* Author information where appropriate
* Internal relationships

---

## Insight Detail

Primary purpose:

```text
Knowledge consumption
```

Should support:

* Article metadata
* Semantic content
* Article structured data where appropriate
* Related content
* Clear publication information

---

## Careers

Primary purpose:

```text
Employment discovery
```

Should clearly communicate:

* Asterra as employer
* Available opportunities
* Application pathway

---

## Job Detail

Primary purpose:

```text
Specific opportunity discovery
```

Closed positions should not remain presented as active opportunities.

---

## Contact

Primary purpose:

```text
Corporate inquiry
```

Should provide clear:

* Contact information
* Inquiry pathway
* Business context

---

# 32. Local SEO

If Asterra has a meaningful physical location or local service presence, implementation may include appropriate local SEO signals.

Potential elements:

```text id="7h3t4j"
Business address
Phone
Location page
Map
LocalBusiness schema
Consistent contact information
```

Only implement LocalBusiness markup where it accurately represents the organization.

---

# 33. Analytics Architecture

SEO implementation should support measurement.

At minimum, plan for:

```text id="2y4x6m"
Analytics
Search Console
Conversion tracking
```

Important conversions may include:

* Contact form submission
* Inquiry
* Application initiation
* Application completion
* Contact action
* Other business-specific actions

---

# 34. Search Console Readiness

Before launch:

```text id="d8w1fe"
Property configured
↓
Sitemap available
↓
Important URLs inspectable
↓
Indexing monitored
```

The implementation should not assume that sitemap submission guarantees indexing.

---

# 35. Analytics Events

Event naming should be consistent.

Potential examples:

```text id="o1l6hz"
contact_form_submit
career_application_click
project_view
insight_view
business_unit_view
```

Only implement events that have a measurement purpose.

---

# 36. Conversion Architecture

SEO should ultimately connect to business outcomes.

Conceptually:

```text id="v0k9nm"
Search
 ↓
Landing Page
 ↓
Relevant Content
 ↓
Trust / Proof
 ↓
CTA
 ↓
Inquiry / Conversion
```

This should influence internal linking and CTA placement.

---

# 37. Technical SEO Validation

Before launch, verify:

```text id="8l5j1f"
HTTPS
Canonical URLs
Robots
Sitemap
Status codes
Redirects
Broken links
Metadata
Structured data
Mobile behavior
```

---

# 38. SEO QA

Every important page should be checked for:

```text id="9v7x2f"
[ ] Unique title
[ ] Useful meta description
[ ] Correct H1
[ ] Logical heading hierarchy
[ ] Canonical URL
[ ] Indexability
[ ] Descriptive URL
[ ] Internal links
[ ] Image alt text
[ ] Optimized images
[ ] Mobile layout
[ ] Structured data where applicable
```

---

# 39. Pre-Launch SEO Checklist

```text id="u1v5l6"
[ ] HTTPS configured
[ ] Production URLs verified
[ ] Canonicals configured
[ ] Robots configuration reviewed
[ ] Sitemap generated
[ ] Titles implemented
[ ] Meta descriptions implemented
[ ] H1/H2 structure reviewed
[ ] Images optimized
[ ] Alt text reviewed
[ ] Internal links tested
[ ] Structured data validated
[ ] Mobile experience tested
[ ] Core Web Vitals risks reviewed
[ ] Analytics installed
[ ] Search Console prepared
[ ] Staging environment prevented from indexing
[ ] 404 page implemented
```

---

# 40. Post-Launch SEO Checklist

```text id="d6i0s7"
[ ] Search Console receiving data
[ ] Sitemap submitted
[ ] Important pages discovered
[ ] Indexing monitored
[ ] Crawl errors monitored
[ ] Analytics receiving data
[ ] Conversions recorded
[ ] Mobile performance monitored
[ ] Core Web Vitals monitored
[ ] Broken links monitored
[ ] Search visibility monitored
```

---

# 41. Ongoing SEO Process

The Asterra implementation should support:

```text id="a6d2n4"
Analyze
   ↓
Diagnose
   ↓
Prioritize
   ↓
Implement
   ↓
Measure
   ↓
Improve
```

SEO should not be treated as a one-time launch task.

---

# 42. SEO Priority Model

Use:

### P0 — Critical

Issues affecting:

* Accessibility
* Crawling
* Indexing
* Major functionality

### P1 — High

Issues affecting:

* Important visibility
* Performance
* UX
* Conversion

### P2 — Medium

Meaningful optimization opportunities.

### P3 — Low

Minor improvements.

This follows the prioritization principles in the universal SEO playbook.

---

# 43. What This Document Does Not Require

The Asterra implementation does **not** automatically require:

* Hundreds of SEO pages
* Large keyword libraries
* Artificial blog volume
* Large backlink campaigns
* Keyword-stuffed copy
* Excessive structured data
* Automatically indexable filter pages
* Dozens of location pages

SEO should follow actual business value.

---

# 44. Relationship to the Universal SEO Playbook

The hierarchy is:

```text id="8lqv3w"
SEO Analytics & Optimization Playbook
             │
             ▼
Universal SEO principles
             │
             ▼
Asterra SEO Implementation Specification
             │
             ▼
Actual Asterra implementation
```

The universal document remains the **reference framework**.

This Asterra document is the **project-specific implementation layer**.

---

# 45. Final SEO Architecture

```text id="d4m9k7"
Asterra
│
├── Technical SEO
│   ├── URLs
│   ├── Canonicals
│   ├── Sitemap
│   ├── Robots
│   └── Indexability
│
├── On-Page SEO
│   ├── Titles
│   ├── Descriptions
│   ├── Headings
│   └── Content
│
├── Structured Data
│   ├── Organization
│   ├── Person
│   ├── Article
│   ├── Breadcrumb
│   └── Other applicable types
│
├── Internal Linking
│
├── Performance
│
├── Mobile
│
├── Accessibility
│
└── Measurement
    ├── Analytics
    ├── Search Console
    └── Conversions
```

---

# 46. Quality Gate

Before moving forward:

* [ ] SEO is integrated into the architecture.
* [ ] URL structure is defined.
* [ ] Metadata structure is defined.
* [ ] Canonical strategy is defined.
* [ ] Sitemap and robots requirements are defined.
* [ ] Structured-data strategy is defined.
* [ ] Internal-linking strategy is defined.
* [ ] Image SEO requirements are defined.
* [ ] Performance considerations are defined.
* [ ] Mobile requirements are defined.
* [ ] Analytics requirements are defined.
* [ ] Pre-launch and post-launch checks are defined.
* [ ] Universal SEO playbook remains the overarching reference.

---

# 47. Status

```text
Package Definition                  ✓
Information Architecture             ✓
Design System                        ✓
Universal Design Analysis            ✓
Page Specifications                  ✓
SEO Reference Framework              ✓
Implementation Architecture         ✓
Component Architecture              ✓
Content Architecture                ✓
SEO Implementation Specification    ✓
```

## Next document

**`Asterra — Accessibility & Performance Implementation Specification`**

This will complete the core implementation blueprint before we move into the **actual Asterra UI implementation/page construction phase**.
