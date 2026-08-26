# Asterra Insights / Resources — Listing Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Example Client:** Asterra Manufacturing Group
**Page:** Insights / Resources — Listing
**Route:** `/insights`
**Version:** 1.0
**Status:** Design & implementation specification

> This specification follows the established Package 3 architecture, Universal Design Analysis, Template 01 — Corporate Authority, Asterra Design Manual, and the previously defined Asterra page specifications. SEO requirements use the universal **SEO Analytics & Optimization Playbook** as the reference, applying only what is relevant to this page.

---

# 1. Page Purpose

The Insights / Resources page provides a structured destination for Asterra's knowledge, perspectives, updates, and useful corporate resources.

It answers:

> **What does Asterra know, understand, and have to say about its industries and capabilities?**

The page should strengthen:

* Expertise
* Discoverability
* Corporate credibility
* Topical authority
* Customer education
* Internal linking
* Long-term organic search visibility

This should **not** become a generic corporate blog.

---

# 2. Page Objectives

The page should:

* Organize published insights clearly.
* Help visitors discover relevant knowledge.
* Connect content to Asterra's businesses and capabilities.
* Provide useful filtering where content volume justifies it.
* Support search-engine discovery.
* Create pathways from educational content to business evidence.
* Create pathways from content to relevant services/business units.
* Establish a scalable content architecture.

---

# 3. Position in Information Architecture

```text id="p7gq3j"
Homepage
   ↓
Insights / Resources
   ↓
Individual Insight
   ↓
Relevant Capability
   ↓
Business Unit
   ↓
Projects
   ↓
Contact
```

This creates an important content-to-business journey:

```text id="8vl3gp"
Learn
 ↓
Understand
 ↓
Explore
 ↓
Evaluate
 ↓
Engage
```

---

# 4. Primary Audiences

* Prospective customers
* Existing customers
* Industry professionals
* Procurement teams
* Business partners
* Researchers
* Prospective employees
* Search visitors

---

# 5. Content Types

The architecture should support several content types without forcing them all into one visual category.

Possible types:

### Insights

Expert perspectives and industry knowledge.

### News

Asterra company developments and announcements.

### Case Studies

Detailed project evidence.

### Technical Resources

Useful technical or educational materials.

### Reports

Long-form research or organizational publications.

### Announcements

Important company updates.

The initial implementation does not need all of these.

The content model should be flexible enough to support them later.

---

# 6. Page Structure

```text id="y1bqpx"
Global Header
      ↓
Breadcrumb
      ↓
01 Insights Hero
      ↓
02 Featured Insight
      ↓
03 Content Navigation / Filters
      ↓
04 Insights Grid / Listing
      ↓
05 Business / Capability Connection
      ↓
06 Pagination / Load More
      ↓
07 Final CTA
      ↓
Global Footer
```

---

# 7. Global Header

Use the existing Asterra header.

```text id="2y7i7j"
[ASTERra LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request an Inquiry]
```

No special blog header.

---

# 8. Breadcrumb

Recommended:

```text id="zgyc98"
Home / Insights
```

If the section is formally named Resources:

```text id="qjym1o"
Home / Resources
```

The URL and visible naming should remain consistent.

---

# 9. Section 01 — Insights Hero

## Objective

Clearly communicate the purpose of the content hub.

### Eyebrow

`INSIGHTS`

### H1

Recommended direction:

> **Ideas, knowledge, and perspectives from Asterra.**

Alternative:

> **Knowledge across our industries and capabilities.**

### Supporting text

A short introduction explaining what visitors can expect to find.

---

# 10. Hero Composition

Preferred:

```text id="e6r5ak"
┌─────────────────────────────────────────────────────────────┐
│ INSIGHTS                                                     │
│                                                             │
│ KNOWLEDGE, IDEAS, AND       Editorial image /               │
│ PERSPECTIVES.              featured content visual          │
│                                                             │
│ Short supporting copy                                        │
└─────────────────────────────────────────────────────────────┘
```

The hero should remain restrained.

The actual content should provide most of the visual richness.

---

# 11. Section 02 — Featured Insight

## Objective

Give one important piece of content visual priority.

Recommended:

```text id="6msv4j"
FEATURED

┌────────────────────────────┬──────────────────────────────┐
│                            │                              │
│       Featured Image       │ CATEGORY                     │
│                            │                              │
│                            │ Article Title                │
│                            │                              │
│                            │ Short summary                │
│                            │                              │
│                            │ Read Insight →               │
└────────────────────────────┴──────────────────────────────┘
```

The featured item should be selected intentionally.

Possible selection criteria:

* Strategic importance
* Relevance
* Timeliness
* Editorial priority
* Business importance

Do not automatically feature the newest article unless that is the editorial strategy.

---

# 12. Featured Content Rules

The featured item should have:

* Strong title
* Strong image
* Clear category
* Short summary
* Publication information
* Clear link

Avoid:

* Excessive metadata
* Large badges
* Promotional language
* Multiple competing featured articles

One primary featured item is preferred.

---

# 13. Section 03 — Content Navigation

## Objective

Help visitors quickly find relevant material.

Possible filters:

```text id="3xv7jt"
ALL
INSIGHTS
NEWS
CASE STUDIES
RESOURCES
```

Additional filters may include:

```text id="3q4n8x"
Business Unit
Industry
Topic
Year
```

However, filters should only exist when the content volume makes them useful.

---

# 14. Filter Strategy

Do not create filters simply because they are technically possible.

A filter should answer a meaningful visitor question.

Good:

> Show me content related to manufacturing.

Good:

> Show me technical insights.

Weak:

> Filter by arbitrary internal database attributes.

The visible taxonomy should reflect how users understand Asterra's content.

---

# 15. Filter Behavior

Desktop:

```text id="8r6k4a"
[All] [Insights] [News] [Case Studies] [Resources]
```

Mobile:

```text id="8b4g0x"
CONTENT TYPE
[ All ▼ ]
```

Additional filters may use a second control.

Avoid a large multi-row filter interface that dominates the page.

---

# 16. Section 04 — Insights Listing

## Objective

Present content in a highly scannable structure.

Recommended:

```text id="v9un7r"
LATEST / ALL INSIGHTS

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Image       │ │ Image       │ │ Image       │
│             │ │             │ │             │
│ Category    │ │ Category    │ │ Category    │
│ Title       │ │ Title       │ │ Title       │
│ Summary     │ │ Summary     │ │ Summary     │
│ Date        │ │ Date        │ │ Date        │
└─────────────┘ └─────────────┘ └─────────────┘
```

Use the established Asterra card language.

---

# 17. Insight Card Anatomy

### Required

* Image
* Content type/category
* Title
* Link

### Recommended

* Short summary
* Publication date

### Optional

* Reading time
* Business unit
* Topic

Do not overload the card.

---

# 18. Card Hierarchy

The hierarchy should be:

```text id="o0k9z4"
IMAGE
↓
CATEGORY
↓
TITLE
↓
SUMMARY
↓
DATE / METADATA
↓
READ
```

The title should remain the primary textual element.

---

# 19. Image Art Direction

Images should relate directly to the content.

For example:

* Industry photography
* Asterra facilities
* Projects
* Technical details
* People at work
* Relevant diagrams
* Original research visuals

Avoid using the same generic corporate image across multiple articles.

---

# 20. Content Grid

Desktop:

```text id="0u1l4v"
3 columns
```

Tablet:

```text id="3jv9b6"
2 columns
```

Mobile:

```text id="d6h0u1"
1 column
```

Cards should maintain consistent image proportions.

---

# 21. Content Density

The listing should feel substantial without becoming crowded.

Recommended:

* Generous whitespace
* Clear card separation
* Strong typography
* Consistent image ratios
* Limited metadata

The page should prioritize **editorial clarity over content volume**.

---

# 22. Section 05 — Business / Capability Connection

## Objective

Connect insights back to Asterra's core business architecture.

Example:

```text id="1t4f2r"
EXPLORE BY CAPABILITY

Manufacturing
Engineering
Processing
Technical Services
```

Each capability can link to its relevant Business Unit or capability page.

This creates:

```text id="8u6xby"
Insight
 ↓
Topic
 ↓
Capability
 ↓
Business Unit
 ↓
Project
```

---

# 23. Optional Topic Navigation

If the content library becomes large, introduce topic navigation.

Example:

```text id="5v4lqt"
TOPICS

Manufacturing
Engineering
Sustainability
Technology
Operations
Industry Trends
```

Do not introduce a large topic taxonomy at launch unless there is enough content to support it.

---

# 24. Pagination

Use pagination when content becomes sufficiently large.

Recommended:

```text id="5ot8sj"
← Previous     1  2  3  4     Next →
```

Alternative:

**Load More**

Either approach is acceptable.

---

# 25. Pagination SEO

If pagination is used:

* Each page should have a crawlable URL.
* Important content should not be accessible only through JavaScript.
* Pagination should not create duplicate content.
* Canonical handling should be deliberate.
* Internal links should allow discovery of deeper content.

Do not hide the entire content library behind a client-side-only interaction.

---

# 26. Search

Search can be added if the content library becomes large.

Possible interface:

```text id="7o0p1v"
Search insights
[____________________] [Search]
```

Search should be considered a scalable feature, not necessarily a launch requirement.

---

# 27. Empty States

When filters return no content:

```text id="l8w3fd"
NO CONTENT FOUND

No insights currently match these filters.

[View All Insights]
```

Avoid blank spaces or broken layouts.

---

# 28. Section 06 — Final CTA

The CTA should connect content discovery to business engagement.

Recommended:

> **Have a requirement to discuss?**

Supporting text:

Connect with the appropriate Asterra team.

Actions:

**Contact Asterra**

**Explore Our Businesses**

---

# 29. Responsive Design

## Desktop

* Editorial hero
* Large featured article
* Horizontal filters
* Three-column content grid
* Capability navigation
* CTA

## Tablet

* Featured article becomes stacked or balanced two-column
* Filters may wrap
* Two-column content grid

## Mobile

```text id="qf2o7h"
Hero
↓
Featured Insight
↓
Filter
↓
Content List
↓
Capability Navigation
↓
CTA
```

The content card should remain readable without excessive scrolling inside individual cards.

---

# 30. Typography

Continue Asterra's established typography.

### IBM Plex Serif

Use for:

* Hero headline
* Featured insight title where appropriate
* Editorial statements

### IBM Plex Sans

Use for:

* Navigation
* Categories
* Card titles where appropriate
* Summaries
* Dates
* Filters
* Buttons

---

# 31. Color

Continue:

* Deep Evergreen
* Mineral Teal
* Warm Ivory
* White
* Ink
* Supporting grays

Use Mineral Teal primarily for:

* Links
* Active states
* Small accents
* Interactive elements

Avoid creating a different color for every content category.

---

# 32. Motion

Use subtle interaction.

Possible:

* Card image scale on hover
* Arrow movement
* Filter state transitions
* Section reveal

Avoid:

* Auto-rotating article carousels
* Excessive hover animations
* Large content transitions
* Scroll-jacking

---

# 33. Content Model

Conceptually:

```text id="d8d3sj"
insight
├── id
├── title
├── slug
├── type
├── summary
├── content
├── featuredImage
├── author
├── publishedAt
├── updatedAt
├── businessUnit
├── capabilities[]
├── topics[]
├── relatedProjects[]
├── relatedInsights[]
├── seo
└── published
```

---

# 34. Content Type Model

```text id="3jgnr6"
type:
├── insight
├── news
├── case-study
└── resource
```

The exact taxonomy can be adjusted according to the final content strategy.

---

# 35. Component Architecture

### Shared components

```text id="q7fx0w"
Header
Footer
Breadcrumb
Button
PageHero
SectionIntro
CTASection
```

### Insights components

```text id="1l1m1e"
FeaturedInsight
ContentFilters
InsightGrid
InsightCard
Pagination
TopicNavigation
CapabilityNavigation
EmptyState
```

### Optional

```text id="o5bjbn"
SearchInput
SearchResults
```

---

# 36. Routing

Primary route:

```text id="c0m9d6"
/insights
```

Individual content:

```text id="g0d0y8"
/insights/[article-slug]
```

Filtered states should ideally be represented through URL parameters when useful.

Example:

```text id="4x0bjy"
/insights?type=case-study
```

This makes filtered views more shareable and discoverable.

---

# 37. SEO — Universal Reference Application

The **SEO Analytics & Optimization Playbook** should govern the SEO decisions for this page, but only the relevant portions are applied.

---

# 38. Search Intent

The Insights page primarily serves:

* Informational intent
* Commercial investigation
* Brand/entity research

The page should therefore clearly communicate what Asterra publishes and help visitors discover useful material.

It should not be designed around arbitrary keyword density.

---

# 39. Title Tag

Recommended:

```text id="6ck1gq"
Insights & Resources | Asterra Manufacturing Group
```

If the approved brand naming uses only "Insights":

```text id="e3f8j8"
Insights | Asterra Manufacturing Group
```

The final title should accurately represent the visible page.

---

# 40. Meta Description

Describe:

* What the content hub contains
* The industries/capabilities covered
* The value of the content

Example structure:

```text id="h8rj5y"
Explore Asterra's insights, industry perspectives, company updates, and resources across its businesses and capabilities.
```

Avoid keyword stuffing.

---

# 41. Heading Structure

Recommended:

```text id="sl5j7q"
H1
Insights / Resources

H2
Featured

H2
Latest Insights

H2
Explore by Capability

H2
Related / Featured Content
```

Only render sections that actually exist.

---

# 42. Indexability

The main `/insights` page should normally be:

* Crawlable
* Indexable
* Canonical
* Included in the sitemap when appropriate

Important individual insight pages should also be discoverable through internal links.

---

# 43. Internal Linking

This page is an important internal-linking hub.

It should connect:

```text id="8sjm4m"
Insights
 ↓
Capabilities
 ↓
Business Units
 ↓
Projects
 ↓
Contact
```

Individual content pages should also link back to the Insights hub.

This supports both navigation and topical relationships.

---

# 44. Structured Data

Potentially relevant:

* `CollectionPage`
* `WebPage`
* `BreadcrumbList`
* `ItemList`

For individual articles, the detail page may use:

* `Article`
* `NewsArticle`
* `BlogPosting`

depending on the actual content type.

Structured data must accurately represent visible content.

---

# 45. Sitemap

The Insights listing should be represented through the site's sitemap architecture where appropriate.

Individual published insight pages should also be included when they are canonical and indexable.

Draft or unpublished content should not be exposed.

---

# 46. Performance

The page may contain many images.

Requirements:

* Responsive image sizes
* Optimized formats
* Lazy loading for below-fold images
* Reserved image dimensions
* Optimized featured image
* Avoid loading all content images at full resolution
* Avoid heavy third-party embeds

The featured image receives higher loading priority than deeper grid images.

---

# 47. Mobile SEO

Check:

* Filter usability
* Card readability
* Image sizing
* Text hierarchy
* Touch targets
* Navigation
* Pagination
* Search if enabled
* Horizontal overflow
* Loading performance

The mobile version should expose the same meaningful content as desktop.

---

# 48. AI/Search Accessibility

Important article information should be available as actual text:

```text id="p3y3hq"
Title
Content Type
Summary
Author
Publication Date
Topic
Business Unit
```

Do not make article discovery dependent exclusively on:

* Hover
* Image text
* JavaScript-only UI
* Carousel controls

The content relationship should be understandable from the HTML structure and internal links.

---

# 49. AI Implementation Guidance

The implementation agent should:

1. Follow Package 3.
2. Follow Universal Design Analysis.
3. Follow Template 01.
4. Follow Asterra Design Manual.
5. Treat Insights as an organizational knowledge hub.
6. Use structured content data.
7. Keep taxonomy meaningful.
8. Avoid unnecessary filters.
9. Preserve editorial hierarchy.
10. Use relevant internal linking.
11. Apply relevant SEO requirements from the universal SEO playbook.
12. Ensure important content is crawlable.
13. Avoid client-side-only discovery.
14. Optimize content images.
15. Maintain accessibility.
16. Ensure filtered states do not create accidental indexing problems.
17. Keep the architecture scalable for future content growth.
18. Do not turn the page into a generic blog template.

---

# 50. Anti-Patterns

Do not introduce:

* Generic WordPress-style blog appearance
* Huge article card grids
* Excessive categories
* Dozens of filters
* Keyword-stuffed titles
* Generic stock images
* Fake authors
* Fake publication dates
* Fake statistics
* Endless infinite scroll without crawlable alternatives
* JavaScript-only content discovery
* Excessive animations
* Separate visual language from Asterra
* Unrelated content recommendations

---

# 51. QA Checklist

## Content

* [ ] Content types are clear.
* [ ] Featured content is intentional.
* [ ] Titles are accurate.
* [ ] Summaries represent actual content.
* [ ] Publication dates are accurate.
* [ ] Categories are meaningful.
* [ ] Business relationships are correct.
* [ ] No fabricated content exists.

## Design

* [ ] Hero is clear.
* [ ] Featured content has appropriate emphasis.
* [ ] Cards are consistent.
* [ ] Images are relevant.
* [ ] Filters are restrained.
* [ ] Typography follows Asterra.
* [ ] Colors follow Asterra.
* [ ] Page does not resemble a generic blog.

## SEO

* [ ] Unique title.
* [ ] Useful meta description.
* [ ] Correct H1.
* [ ] Logical heading hierarchy.
* [ ] Canonical URL.
* [ ] Crawlable content.
* [ ] Meaningful internal links.
* [ ] Appropriate structured data.
* [ ] Important content discoverable without JavaScript-only interaction.
* [ ] Sitemap architecture is correct.

## Performance

* [ ] Featured image optimized.
* [ ] Grid images optimized.
* [ ] Responsive images used.
* [ ] Below-fold images lazy-loaded.
* [ ] Layout shifts minimized.
* [ ] No unnecessary heavy scripts.

## Accessibility

* [ ] Filters are keyboard accessible.
* [ ] Focus states are visible.
* [ ] Links are descriptive.
* [ ] Images have appropriate alt text.
* [ ] Text contrast is sufficient.
* [ ] Mobile controls are usable.

---

# 52. Completion Criteria

The Insights Listing specification is complete when:

* Content purpose is defined.
* Content types are defined.
* Featured content is defined.
* Filtering is defined.
* Content grid is defined.
* Content model is defined.
* Business/capability relationships are defined.
* Pagination is defined.
* Search strategy is defined.
* Responsive behavior is defined.
* Accessibility is defined.
* SEO requirements are defined using the universal SEO reference.
* Internal linking is defined.
* Structured data is defined.
* Performance requirements are defined.
* Component architecture is defined.
* Routing is defined.
* Content integrity rules are defined.
* QA requirements are defined.

---

# 53. Current Architecture Progress

The Asterra architecture now has:

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
│   ├── Projects Listing
│   └── Project Detail
│
├── INSIGHTS
│   ├── Insights Listing
│   └── Insight Detail        ← NEXT
│
├── CAREERS
│
└── CONTACT
```

The next file should therefore be:

**Asterra Insight / Article — Detailed Page Specification**.
