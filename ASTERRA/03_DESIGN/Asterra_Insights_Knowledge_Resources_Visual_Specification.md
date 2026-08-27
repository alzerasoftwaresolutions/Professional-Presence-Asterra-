# Asterra — Insights / Knowledge Resources Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Insights / Knowledge Resources
**Status:** Implementation-ready visual specification

**References:**

* `Asterra Insights / Knowledge Resources — Detailed Page Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Insights page is Asterra's **knowledge and thought-leadership layer**.

It should help visitors discover useful content such as:

* Articles
* Company insights
* Industry perspectives
* Reports
* News
* Project insights
* Technical resources
* Announcements

The page should establish Asterra as a knowledgeable organization without becoming a conventional blog template.

---

# 2. Page Structure

```text
INSIGHTS
│
├── Global Header
│
├── Insights Hero
│
├── Featured Insight
│
├── Latest / All Insights
│   ├── Category Navigation
│   └── Insight Cards
│
├── Optional Resource Section
│
├── Newsletter / Update CTA (Optional)
│
├── Corporate CTA
│
└── Global Footer
```

Only include resource types that Asterra actually produces.

---

# 3. Insights Hero

The hero should be editorial and restrained.

```text id="q8m4v2"
┌──────────────────────────────────────────────────────┐
│ INSIGHTS                                             │
│                                                      │
│ Ideas, perspectives, and knowledge from Asterra.     │
│                                                      │
│ Explore our latest thinking and resources.           │
└──────────────────────────────────────────────────────┘
```

The hero should not consume excessive vertical space.

The content listing is the primary purpose of the page.

---

# 4. Featured Insight

One important piece of content can receive visual priority.

```text id="j5k8p3"
┌──────────────────────────────────────────────────────┐
│                                                      │
│                  FEATURED IMAGE                      │
│                                                      │
├───────────────────────────────┬──────────────────────┤
│ FEATURED INSIGHT              │ Category             │
│                               │ Date                 │
│ Insight Title                 │                      │
│                               │ Short description    │
│                               │                      │
│                               │ Read insight →       │
└───────────────────────────────┴──────────────────────┘
```

The featured item should be selected intentionally.

Possible criteria:

* Strategic importance
* Relevance
* Recency
* Strong content quality
* Business significance

---

# 5. Category Navigation

If Asterra has multiple content types, use a simple category system.

```text id="n7c3q9"
ALL
INSIGHTS
INDUSTRY
PROJECTS
NEWS
REPORTS
```

The exact categories should come from the actual content model.

Do not create categories before there is enough content to support them.

---

# 6. Category Design

Categories should remain secondary to the content.

Use:

```text id="v6m2k8"
ALL     INDUSTRY     PROJECTS     NEWS
```

rather than oversized category cards.

---

# 7. Insight Listing

The primary listing should use an editorial card grid.

```text id="p4x8m5"
┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐
│                    │ │                    │ │                    │
│      IMAGE         │ │      IMAGE         │ │      IMAGE         │
│                    │ │                    │ │                    │
├────────────────────┤ ├────────────────────┤ ├────────────────────┤
│ CATEGORY           │ │ CATEGORY           │ │ CATEGORY           │
│ Insight title      │ │ Insight title      │ │ Insight title      │
│ Short description  │ │ Short description  │ │ Short description  │
│ Date · Read →      │ │ Date · Read →      │ │ Date · Read →      │
└────────────────────┘ └────────────────────┘ └────────────────────┘
```

Two-column or three-column layouts may be used depending on content length.

---

# 8. Insight Card Hierarchy

Each card should follow:

```text id="c9q5v7"
Image
 ↓
Category
 ↓
Title
 ↓
Short description
 ↓
Date / metadata
 ↓
Read →
```

The title should be the strongest textual element.

---

# 9. Card Content

Keep cards concise.

Avoid:

* Full article excerpts
* Excessive metadata
* Multiple CTA buttons
* Decorative tags
* Large blocks of text

The purpose is **discovery**, not reading the article.

---

# 10. Featured vs Standard Content

The visual hierarchy should clearly distinguish:

```text id="h7m4p2"
FEATURED
Large

STANDARD
Compact
```

Do not make every article visually equal if there is a meaningful editorial priority.

---

# 11. Article Imagery

Prefer imagery connected to the actual content:

* Asterra projects
* Industry environments
* Company activities
* Original diagrams
* Approved photography

Generic stock imagery should not dominate the Insights experience.

---

# 12. Content Types

The system should support multiple content types when required.

Example:

```text id="x5v8n3"
ARTICLE
REPORT
NEWS
PROJECT INSIGHT
RESOURCE
```

However, the visual system should remain consistent across types.

---

# 13. Content Type Indicators

Use restrained labels:

```text id="m8q3k6"
ARTICLE
REPORT
NEWS
```

Avoid bright or oversized badges.

Typography and spacing should do most of the work.

---

# 14. Sorting

Default ordering should generally prioritize:

**Most relevant / recent content**

Depending on the content strategy, the listing may support:

* Latest
* Featured
* Category

Do not introduce complex sorting unless the content volume requires it.

---

# 15. Pagination

For a moderate content library:

```text id="r7k2v5"
1  2  3  4  → 
```

or:

```text id="s4m8q1"
Load more
```

Choose one approach.

The URL and browsing behavior should remain understandable.

---

# 16. Empty States

When a category contains no content:

```text id="z6p4c8"
No insights are currently available in this category.

[View all insights]
```

Avoid displaying an empty grid.

---

# 17. Search

Search is optional.

It becomes useful when the Insights library becomes sufficiently large.

If included:

```text id="j8v5m3"
Search insights
[________________________]
```

The search interface should remain secondary to browsing.

---

# 18. Responsive Layout

### Desktop

Use:

* Large featured item
* 2–3 column content grid
* Horizontal category navigation

### Tablet

Use:

* Reduced grid columns
* Wrapping category navigation

### Mobile

Use:

```text id="f3n7q9"
Hero
 ↓
Featured Insight
 ↓
Category Filter
 ↓
Insight List
 ↓
CTA
```

Cards become single-column.

---

# 19. Mobile Card Design

On mobile:

```text id="k5m2x8"
┌─────────────────────────┐
│                         │
│        IMAGE            │
│                         │
├─────────────────────────┤
│ CATEGORY                │
│ Insight title           │
│ Short description       │
│ Date · Read →           │
└─────────────────────────┘
```

Images should remain prominent enough to create visual distinction between articles.

---

# 20. Typography

Recommended hierarchy:

```text id="q8v4m6"
INSIGHTS
    ↓
Insight title
    ↓
Category / metadata
    ↓
Description
```

Article titles should be readable at a glance.

Avoid overly small metadata typography.

---

# 21. Editorial Layout

The page should use deliberate visual rhythm:

```text id="c6m9p2"
Hero
 ↓
Featured Story
 ↓
Content Grid
 ↓
Supporting Resources
 ↓
CTA
```

Large whitespace can separate editorial sections.

---

# 22. Optional Resource Section

If Asterra has downloadable or evergreen resources, a separate section can be used.

```text id="v4k7s8"
RESOURCES

Reports
Guides
Publications
Downloads
```

This should only exist if these resources genuinely exist.

---

# 23. Newsletter / Updates

Optional.

If Asterra has a legitimate mailing list:

```text id="p7m3q5"
STAY INFORMED

Receive Asterra insights and updates.

[Email address____________]

[Subscribe]
```

Do not include this section if there is no real subscription workflow behind it.

---

# 24. Corporate CTA

The final CTA should be relevant to the wider website.

```text id="n8c4x2"
LEARN MORE ABOUT ASTERRA

Explore our capabilities and projects.

[Explore capabilities →]
```

Alternatively, use Contact when the content is strongly business-oriented.

---

# 25. Insight Detail Relationship

The architecture should be:

```text id="m5q8k3"
INSIGHTS LISTING
      ↓
INSIGHT DETAIL
      ↓
RELATED INSIGHTS
      ↓
RELATED CAPABILITY
      ↓
CONTACT
```

The listing page introduces.

The detail page explains.

---

# 26. Internal Linking

Each insight should link naturally to relevant areas of the site.

Possible relationships:

```text id="x7v3n6"
Insight
  ↓
Business Unit

Insight
  ↓
Project

Insight
  ↓
Related Insight

Insight
  ↓
Contact
```

Links should be contextual rather than forced.

---

# 27. SEO Structure

Recommended:

```text id="j3p8m5"
H1
Insights

H2
Featured Insight

H2
Latest Insights

H3
Insight Title
```

Each article/detail page should have its own clear H1.

---

# 28. Search Intent

The Insights listing primarily supports:

* Informational discovery
* Industry research
* Brand research
* Thought leadership
* Commercial research

The page should make content easy to discover and understand.

---

# 29. Metadata

The listing page should have:

* Unique title
* Meta description
* Canonical URL

Each insight detail page requires unique metadata.

Titles should accurately describe the content.

---

# 30. Structured Data

For individual insight pages, structured data may be appropriate depending on content type.

Possible examples include:

* Article
* NewsArticle
* WebPage
* BreadcrumbList

Only use the type that accurately reflects the actual content.

---

# 31. Performance

Insights pages can become image-heavy as the library grows.

Prioritize:

* Optimized thumbnails
* Responsive images
* Lazy loading below-fold content
* Efficient image formats
* Limited animation

Avoid loading every full-resolution article image on the initial page.

---

# 32. Accessibility

Required:

* Semantic headings
* Descriptive article links
* Meaningful image alt text
* Keyboard-accessible filters
* Visible focus states
* Sufficient contrast
* Accessible pagination
* No content hidden exclusively behind hover

Category controls should communicate their current state clearly.

---

# 33. Content Integrity

Do not invent:

* Authors
* Publication dates
* Research findings
* Industry statistics
* Reports
* Client statements
* Downloadable resources

The Insights section should contain genuine Asterra-approved content.

---

# 34. Component Map

```text id="r6m4v8"
InsightsListingPage
│
├── Header
│
├── InsightsHero
│
├── FeaturedInsight
│
├── InsightCategories
│
├── InsightGrid
│   └── InsightCard
│
├── OptionalResources
│
├── OptionalNewsletter
│
├── CorporateCTA
│
└── Footer
```

---

# 35. Relationship to the Asterra Architecture

The Insights section serves as the site's **knowledge layer**:

```text id="k7p3x9"
ABOUT
  ↓
WHO ASTERRA IS

BUSINESS
  ↓
WHAT ASTERRA DOES

PROJECTS
  ↓
WHAT ASTERRA HAS DONE

INSIGHTS
  ↓
WHAT ASTERRA KNOWS / SHARES

CAREERS
  ↓
WHO JOINS ASTERRA

CONTACT
  ↓
HOW TO ENGAGE
```

This makes Insights complementary rather than redundant with Projects.

---

# 36. Quality Gate

Before implementation:

### Content

* Is there enough genuine content to justify the section?

### Discovery

* Can visitors quickly find relevant insights?

### Editorial hierarchy

* Is featured content meaningfully distinguished?

### Navigation

* Can visitors move naturally from insights to capabilities/projects?

### SEO

* Does every important article have a clear topic and unique metadata?

### Performance

* Are thumbnails optimized?

### Accessibility

* Can filters and pagination be operated without a mouse?

### Authenticity

* Is every article/resource based on approved Asterra material?

---

# 37. Final Visual Direction

```text id="b4q8m6"
                    INSIGHTS
                       │
                       ↓
                  DISCOVERY
                       │
                       ↓
                   KNOWLEDGE
                       │
                       ↓
                   PERSPECTIVE
                       │
                       ↓
                  CAPABILITY
                       │
                       ↓
                    TRUST
                       │
                       ↓
                   CONTACT
```

The visual language should be:

**Editorial + Intelligent + Restrained + Credible**

The Insights page should make Asterra appear knowledgeable through the **quality and organization of its content**, not through excessive visual decoration.

---

# 38. Status

**Asterra Insights / Knowledge Resources — Visual Specification: APPROVED**

## Next Page

**`Asterra Insight / Article Detail — Visual Specification`**
