# Asterra Insight / Article — Detailed Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Example Client:** Asterra Manufacturing Group
**Page:** Individual Insight / Article Detail
**Route:** `/insights/[article-slug]`
**Version:** 1.0
**Status:** Design & implementation specification

> This specification follows the established Package 3 architecture, Universal Design Analysis, Template 01 — Corporate Authority, Asterra Design Manual, and the Asterra Insights / Resources Listing specification. SEO requirements use the **SEO Analytics & Optimization Playbook** as the universal reference, applying only the requirements relevant to an individual content page.

---

# 1. Page Purpose

The Insight Detail page provides the complete version of an individual Asterra publication.

It should transform a visitor's initial interest into:

* Understanding
* Trust
* Expertise recognition
* Exploration of related Asterra capabilities
* Exploration of relevant projects
* Potential business engagement

The page should feel like an **editorial knowledge experience**, not a generic blog post.

---

# 2. Page Objectives

The page should:

* Clearly communicate what the article is about.
* Establish the article's authority and context.
* Provide an excellent reading experience.
* Make long-form content easy to scan.
* Connect the topic to Asterra's expertise.
* Support organic search visibility.
* Create meaningful internal links.
* Encourage exploration without interrupting reading.
* Provide a clear next step after the article.

---

# 3. Page Relationship

```text id="3q3c3e"
Insights Listing
       ↓
Insight Detail
       ↓
Topic
       ↓
Capability
       ↓
Business Unit
       ↓
Project / Case Study
       ↓
Contact
```

Related content may also create:

```text id="u4e1kz"
Insight
 ↓
Related Insight
 ↓
Related Insight
```

The article should therefore function as part of the wider information architecture.

---

# 4. Primary Audiences

* Prospective customers
* Existing customers
* Industry professionals
* Technical audiences
* Business decision-makers
* Researchers
* Partners
* Search visitors

---

# 5. User Questions

The page should help visitors answer:

1. What is this article about?
2. Why is this topic relevant?
3. Who produced the information?
4. When was it published?
5. What does Asterra know about this subject?
6. What evidence or examples support the discussion?
7. What related Asterra capability is relevant?
8. Where can I explore further?

---

# 6. Page Structure

```text id="x2qz8m"
Global Header
      ↓
Breadcrumb
      ↓
01 Article Header
      ↓
02 Hero / Cover Image
      ↓
03 Article Introduction
      ↓
04 Article Body
      ↓
05 Supporting Media / Data
      ↓
06 Asterra Expertise Connection
      ↓
07 Related Content
      ↓
08 Article Navigation
      ↓
09 Final CTA
      ↓
Global Footer
```

Not every article requires every section.

The content determines the page.

---

# 7. Global Header

Use the established Asterra global navigation.

```text id="6d4m3w"
[ASTERra LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request an Inquiry]
```

The header should remain consistent with the rest of the site.

---

# 8. Breadcrumb

Recommended:

```text id="n5h5wm"
Home / Insights / [Article Title]
```

If the article has a meaningful content category:

```text id="9y4t3r"
Home / Insights / [Category] / [Article Title]
```

Keep breadcrumb depth reasonable.

---

# 9. Section 01 — Article Header

## Objective

Immediately establish:

* Content type
* Topic
* Title
* Publication information

Recommended structure:

```text id="a6lq5y"
INSIGHT

ARTICLE TITLE
A clear editorial headline that communicates
the subject of the article.

Short introduction / deck.

Published 25 August 2026
Updated 25 August 2026
```

---

# 10. Article Metadata

Recommended:

```text id="4j7f0f"
INSIGHT
25 AUGUST 2026
8 MIN READ
```

Optional:

```text id="6r9j8w"
AUTHOR
Asterra Editorial Team
```

Only show reading time if it is calculated consistently.

Do not add metadata simply to fill space.

---

# 11. Article Title

The title should:

* Clearly describe the subject.
* Reflect actual article content.
* Match search intent.
* Be useful to humans.
* Avoid keyword stuffing.
* Avoid vague corporate language.

The title is the primary H1.

---

# 12. Article Deck / Introduction

A short introductory statement should explain:

* What the article covers.
* Why the subject matters.
* What the reader will gain.

Recommended length:

**1–3 sentences.**

It should not simply repeat the title.

---

# 13. Hero Image

The article may use a large editorial hero image.

Recommended:

```text id="n1z2q6"
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                     ARTICLE IMAGE                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The image should support the article's subject.

---

# 14. Hero Image Rules

Use:

* Original Asterra photography
* Relevant project photography
* Industry imagery
* Technical visuals
* Original diagrams
* Approved editorial imagery

Avoid:

* Generic stock photography
* Unrelated decorative images
* Images chosen only for visual appeal
* Repeated use of the same hero image

---

# 15. Image Caption

A caption should be included when the image requires contextual explanation.

Example:

```text id="9h1r2n"
Asterra's manufacturing operations in [location].
```

Do not caption every image unnecessarily.

---

# 16. Section 02 — Article Reading Layout

The reading experience should prioritize readability.

Preferred desktop layout:

```text id="w8y5me"
┌─────────────────────┬───────────────────────────────┬─────────────┐
│                     │                               │             │
│ Article navigation  │       ARTICLE CONTENT         │             │
│                     │                               │ Related     │
│                     │                               │ content     │
│                     │                               │             │
└─────────────────────┴───────────────────────────────┴─────────────┘
```

The article content should remain the dominant element.

---

# 17. Article Width

The primary reading column should be relatively narrow.

Recommended target:

**Approximately 680–780px maximum content width.**

This supports comfortable reading.

Do not stretch body text across the entire desktop viewport.

---

# 18. Article Body

The article body should support:

* Paragraphs
* H2 headings
* H3 headings
* Lists
* Quotes
* Images
* Tables
* Figures
* Links
* Callout blocks

The CMS/content model should allow these elements without requiring custom page development for every article.

---

# 19. Article Heading Hierarchy

Recommended:

```text id="v9b8yb"
H1
Article Title

H2
Major Section

H3
Supporting Section

H3
Supporting Section

H2
Major Section
```

Avoid jumping from H1 directly to H4.

Headings should describe actual content.

---

# 20. Paragraph Design

Body copy should use:

* Comfortable line height
* Moderate paragraph width
* Clear paragraph spacing
* Strong contrast
* Consistent font sizing

Avoid:

* Extremely small body text
* Dense walls of text
* Excessive bolding
* Excessive capitalization

---

# 21. Section 03 — Article Introduction

The opening section should establish the article's central idea quickly.

Recommended structure:

```text id="3f3h7g"
INTRODUCTION

2–5 paragraphs establishing:
• Context
• Problem / opportunity
• Main question
• Why the subject matters
```

The reader should understand the purpose of the article without reading half the page.

---

# 22. Table of Contents

A table of contents is optional.

Use it when:

* The article is long.
* There are multiple substantial sections.
* Navigation materially improves usability.

Example:

```text id="r0m2m4"
IN THIS ARTICLE

01 Introduction
02 The Challenge
03 Asterra's Approach
04 Key Considerations
05 Conclusion
```

On mobile, it can become a collapsible control.

---

# 23. Sticky Article Navigation

For long articles, a desktop-side navigation can be used.

Example:

```text id="h0n6zv"
ON THIS PAGE

Introduction
The Challenge
Approach
Key Findings
Conclusion
```

The navigation should not obscure content.

It should disappear or collapse on smaller screens.

---

# 24. Section 04 — Article Content

The article body is the primary value of the page.

The content should prioritize:

* Accuracy
* Relevance
* Originality
* Clarity
* Useful detail
* Evidence
* First-hand expertise where appropriate

This directly follows the content-quality principles of the universal SEO reference.

---

# 25. Content Quality

Avoid producing articles solely for search traffic.

Each article should have a clear reason for existing.

Strong content may provide:

* A new perspective
* Practical guidance
* Industry analysis
* Technical explanation
* Lessons from projects
* Organizational knowledge
* Research findings
* Commentary on relevant developments

---

# 26. Evidence & Sources

Where claims require support, use appropriate evidence.

Possible:

* Internal project data
* Technical documentation
* Research
* Industry reports
* Public standards
* Government sources
* Credible external publications

External sources should be linked naturally.

Do not create a large references section when simple contextual links are sufficient.

---

# 27. Quotes

Quotes can be used for:

* Executive perspectives
* Technical experts
* Project stakeholders
* External authorities

Example:

```text id="p4u4zt"
“Short approved quotation.”

— [Name], [Position]
```

Only use approved quotations.

Never invent executive quotes.

---

# 28. Data Visualization

For data-heavy articles, use:

* Charts
* Diagrams
* Tables
* Infographics

Visualizations should clarify the information.

Avoid decorative charts with no analytical purpose.

---

# 29. Technical Diagrams

Where relevant, diagrams can explain:

* Processes
* Systems
* Manufacturing flows
* Engineering concepts
* Business models
* Project methodologies

The diagram should have an accessible textual explanation.

---

# 30. Section 05 — Supporting Media

Additional media can be placed throughout the article.

Examples:

```text id="2z4k8c"
Full-width image
```

```text id="3o7g0k"
Image + caption
```

```text id="1w3l4v"
Two supporting images
```

```text id="h3l8ye"
Technical diagram
```

Media placement should support the narrative.

---

# 31. Pull Quotes / Callouts

Use sparingly.

Example:

```text id="q0j7x9"
KEY TAKEAWAY

A concise statement summarizing an important
point from the article.
```

Callouts should highlight information already supported by the article.

They should not introduce unsupported claims.

---

# 32. Section 06 — Asterra Expertise Connection

This section is strategically important.

After the reader gains knowledge, connect the topic to Asterra's capabilities where appropriate.

Example:

```text id="2q6b0k"
HOW ASTERRA APPROACHES THIS

Short explanation of the company's relevant
capability or approach.

[Explore the Capability]
```

This should feel like a natural continuation of the article.

It should not become an advertisement.

---

# 33. Related Business Unit

Where applicable:

```text id="x5t0ny"
RELATED BUSINESS

[Business Unit Name]

Short description.

[Explore Business]
```

This creates a direct architecture:

```text
Article
 ↓
Business Unit
```

---

# 34. Related Projects

If the topic relates to an Asterra project:

```text id="3f4l0x"
RELATED PROJECT

[Project Name]

Short project description.

[View Project]
```

This provides evidence for the ideas discussed in the article.

---

# 35. Section 07 — Related Content

Recommended:

```text id="f6j9zz"
CONTINUE READING

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Image       │ │ Image       │ │ Image       │
│ Title       │ │ Title       │ │ Title       │
│ Category    │ │ Category    │ │ Category    │
└─────────────┘ └─────────────┘ └─────────────┘
```

Recommendations should be based on meaningful relationships:

* Same topic
* Same capability
* Same business unit
* Related project
* Editorial relevance

Do not recommend unrelated articles merely because they are recent.

---

# 36. Article Navigation

For chronological or editorial collections:

```text id="5v1g9n"
← Previous Article              Next Article →
```

This is optional.

If the content is not naturally sequential, prioritize **Related Content** instead.

---

# 37. Section 08 — Final CTA

The CTA should reflect the reader's journey.

Example:

> **Explore how Asterra can support your requirements.**

Actions:

**Explore Capabilities**

**Contact Asterra**

For technical articles:

> **Discuss a technical requirement with our team.**

The CTA should be contextually relevant.

---

# 38. Author Information

If articles have identifiable authors, an author block can be included.

Example:

```text id="8s4f1v"
ABOUT THE AUTHOR

[Portrait]

[Name]
[Position]

Short professional description.

[View Profile →]
```

This should link to the Executive Profile page when applicable.

Architecture:

```text id="v4x4v7"
Article
 ↓
Author
 ↓
Executive Profile
```

If content is genuinely produced by a collective editorial team, use an appropriate organization/editorial identity rather than inventing a person.

---

# 39. Publication & Update Dates

Where applicable:

```text id="u2f0w7"
Published: 25 August 2026
Updated: 25 August 2026
```

Only display an updated date when meaningful changes have actually occurred.

Do not manipulate dates simply to appear fresh.

---

# 40. Social Sharing

Social sharing may be included, but it should not dominate the design.

Possible:

```text id="z2r7k5"
Share
LinkedIn
X
Email
Copy Link
```

The controls should remain secondary to reading.

---

# 41. Mobile Behavior

On mobile:

```text id="y6h8pi"
Breadcrumb
↓
Category
↓
Title
↓
Introduction
↓
Metadata
↓
Hero Image
↓
Article
↓
Author
↓
Asterra Connection
↓
Related Content
↓
CTA
```

Sticky navigation should become a compact expandable control if needed.

---

# 42. Typography

Continue Asterra typography.

### IBM Plex Serif

Use for:

* Article title
* Major editorial statements
* Pull quotes
* Major section emphasis

### IBM Plex Sans

Use for:

* Metadata
* Body text if established by the design system
* Navigation
* Labels
* Links
* Supporting information

Body typography must prioritize readability over stylistic expression.

---

# 43. Color

Use the existing Asterra palette.

Recommended:

* Warm Ivory for editorial surfaces
* White for content areas
* Deep Evergreen for major structural elements
* Mineral Teal for links and interactive states
* Ink for body text

Do not use category-specific colors unless the broader design system establishes them.

---

# 44. Motion

Motion should support reading.

Appropriate:

* Image entrance
* Subtle section reveal
* Link transitions
* Progress indicators if genuinely useful

Avoid:

* Animated paragraphs
* Excessive scroll effects
* Content movement while reading
* Autoplay video
* Aggressive sticky elements

---

# 45. Video

Video can be embedded when it contributes meaningful information.

Requirements:

* Accessible controls
* Poster image
* Appropriate loading strategy
* Captions where applicable
* No autoplay with sound

Avoid loading large video assets before they are needed.

---

# 46. Content Model

```text id="2j8d5v"
insight
├── id
├── title
├── slug
├── type
├── summary
├── content
├── heroImage
├── author
├── publishedAt
├── updatedAt
├── readingTime
├── topics[]
├── businessUnit
├── capabilities[]
├── relatedProjects[]
├── relatedInsights[]
├── seo
└── published
```

---

# 47. SEO Data Model

Recommended:

```text id="f0u3jf"
seo
├── title
├── description
├── canonicalUrl
├── ogImage
├── noIndex
└── structuredDataType
```

The CMS should not require custom SEO data for every field when sensible defaults can be generated.

---

# 48. Routing

Primary pattern:

```text id="n3y4lq"
/insights/[article-slug]
```

Example:

```text id="6s5t2n"
/insights/future-of-industrial-manufacturing
```

The slug should be:

* Descriptive
* Stable
* Human-readable
* Consistent

Avoid unnecessary parameters.

---

# 49. SEO — Title

Recommended pattern:

```text id="3x8q9v"
[Article Title] | Asterra Manufacturing Group
```

The article title should naturally communicate the topic.

Do not append a large number of keywords.

---

# 50. SEO — Meta Description

Generate from the article's actual summary where appropriate.

It should:

* Describe the article accurately.
* Communicate value.
* Reflect search intent.
* Encourage qualified clicks.

Do not simply duplicate the title.

---

# 51. SEO — Heading Structure

Required:

```text id="f1n8w8"
H1
Article Title
```

Then:

```text id="6q1w4e"
H2
Major Article Sections

H3
Supporting Sections
```

The heading structure should reflect the actual article.

---

# 52. SEO — Article Structured Data

Where applicable, use the appropriate Schema.org article type.

Potential types:

* `Article`
* `BlogPosting`
* `NewsArticle`

The choice should reflect the actual content.

Potential properties:

```text id="y9j1z6"
headline
description
image
author
datePublished
dateModified
publisher
mainEntityOfPage
```

Only use accurate information.

---

# 53. SEO — Breadcrumb Structured Data

Use:

```text id="6o8f2y"
Home
 ↓
Insights
 ↓
Article
```

Structured data should match the visible breadcrumb.

---

# 54. SEO — Canonicalization

Each article should normally have a self-referencing canonical URL unless there is a legitimate alternative canonical strategy.

Avoid duplicate URLs representing the same article.

---

# 55. SEO — Internal Linking

Internal links should connect the article to relevant:

* Insights
* Capabilities
* Business Units
* Projects
* Leadership
* Contact

Use descriptive anchor text.

Example:

```text id="3h7z2m"
Explore Asterra's industrial manufacturing capabilities
```

rather than:

```text
Click here
```

---

# 56. SEO — Search Intent

Before publishing, determine the article's primary intent:

```text id="8n0s2c"
Informational
Commercial Investigation
Navigational
Local
```

The content should satisfy the intended query rather than simply mentioning relevant keywords.

---

# 57. SEO — Content Quality

Every article should be evaluated for:

* Accuracy
* Originality
* Usefulness
* Relevance
* Clarity
* Depth
* Readability
* Evidence
* First-hand expertise where relevant
* Appropriate authorship

Do not establish an arbitrary publishing quota.

---

# 58. SEO — Images

For article images:

* Descriptive filenames
* Meaningful alt text
* Appropriate dimensions
* Responsive images
* Compression
* Modern formats where appropriate
* Lazy loading below the fold
* No unnecessary image duplication

Alt text should describe the meaningful content of the image.

---

# 59. SEO — Performance

Important considerations:

* Hero image optimization
* Responsive image delivery
* Font loading
* Embedded media
* Third-party scripts
* JavaScript execution
* Layout stability

If the article contains large diagrams or videos, optimize them independently.

---

# 60. SEO — AI/Search Accessibility

Important article facts should be directly available in the page content.

The page should expose:

```text id="8b5v2y"
Title
Author
Organization
Publication Date
Topic
Main Content
Related Business
Related Capability
```

The article should not depend on visual interpretation alone.

Clear semantic structure improves discoverability by search engines and AI-driven search systems.

---

# 61. Accessibility

Required:

* Semantic article structure
* One H1
* Logical heading hierarchy
* Keyboard navigation
* Visible focus states
* Descriptive links
* Meaningful alt text
* Accessible tables
* Accessible video controls
* Sufficient contrast
* Reduced-motion support

Long-form content must remain usable for assistive technology.

---

# 62. Content Integrity

Never fabricate:

* Statistics
* Quotes
* Sources
* Authors
* Project results
* Client statements
* Technical claims
* Research findings
* Publication dates

If information cannot be verified, it should not be presented as fact.

---

# 63. Component Architecture

### Shared

```text id="z3u8kn"
Header
Footer
Breadcrumb
Button
PageContainer
CTASection
```

### Article

```text id="9m8r3t"
ArticleHeader
ArticleMeta
ArticleHero
ArticleBody
ArticleTableOfContents
ArticleMedia
ArticleQuote
ArticleCallout
AuthorBlock
RelatedBusiness
RelatedProjects
RelatedInsights
ArticleNavigation
```

Optional:

```text id="0v9r7x"
ShareControls
ReadingProgress
```

---

# 64. Reading Progress

A reading-progress indicator is optional.

If implemented:

* Keep it subtle.
* Do not interfere with navigation.
* Do not create layout shift.
* Ensure it is accessible.
* Do not treat it as essential functionality.

---

# 65. Implementation Rules

The implementation agent should:

1. Reuse the established Asterra design system.
2. Reuse the Insights content model.
3. Reuse the global header and footer.
4. Use structured article content.
5. Maintain a readable content width.
6. Preserve the editorial visual language.
7. Avoid generic blog aesthetics.
8. Apply relevant SEO requirements.
9. Use appropriate article structured data.
10. Maintain canonical URLs.
11. Implement meaningful internal links.
12. Optimize article media.
13. Maintain mobile usability.
14. Maintain accessibility.
15. Avoid fabricated content.
16. Connect the article to relevant Asterra entities where appropriate.
17. Keep the architecture reusable for future articles.

---

# 66. Anti-Patterns

Do not create:

* Generic blog templates
* Extremely wide text columns
* Keyword-stuffed articles
* Fake statistics
* Fake citations
* Fake authors
* Excessive popups
* Aggressive newsletter interruptions
* Autoplay video
* Excessive social-sharing UI
* Unrelated recommendations
* Decorative callouts everywhere
* Excessive animation
* Article content hidden behind interactions
* Duplicate content across articles

---

# 67. QA Checklist

## Content

* [ ] Title accurately represents the article.
* [ ] Introduction clearly establishes context.
* [ ] Content is factually accurate.
* [ ] Sources are appropriate.
* [ ] Quotes are approved.
* [ ] Author is correct.
* [ ] Publication date is correct.
* [ ] Related business is accurate.
* [ ] Related projects are relevant.

## Design

* [ ] Article title has clear prominence.
* [ ] Reading width is comfortable.
* [ ] Typography follows Asterra.
* [ ] Images support the narrative.
* [ ] Editorial hierarchy is clear.
* [ ] Related content is secondary.
* [ ] CTA does not interrupt reading.

## SEO

* [ ] Unique title tag.
* [ ] Useful meta description.
* [ ] Correct H1.
* [ ] Logical heading hierarchy.
* [ ] Canonical URL.
* [ ] Article structured data where appropriate.
* [ ] Breadcrumb structured data where appropriate.
* [ ] Meaningful internal links.
* [ ] Images have appropriate alt text.
* [ ] Page is indexable when intended.
* [ ] Search intent is satisfied.

## Performance

* [ ] Hero image optimized.
* [ ] Body images optimized.
* [ ] Responsive images used.
* [ ] Below-fold images lazy-loaded.
* [ ] Video is efficiently loaded.
* [ ] Layout shift is minimized.
* [ ] Third-party scripts are controlled.

## Accessibility

* [ ] Semantic article structure.
* [ ] Keyboard navigation works.
* [ ] Focus states are visible.
* [ ] Links are descriptive.
* [ ] Images have useful alt text.
* [ ] Tables are accessible.
* [ ] Video captions are available where needed.
* [ ] Reduced motion is supported.

---

# 68. Completion Criteria

The Insight Detail specification is complete when:

* Article purpose is defined.
* Article header is defined.
* Hero image behavior is defined.
* Reading layout is defined.
* Content structure is defined.
* Table of contents behavior is defined.
* Supporting media is defined.
* Author structure is defined.
* Business/capability connection is defined.
* Related content is defined.
* CTA is defined.
* Content model is defined.
* Routing is defined.
* SEO metadata is defined.
* Structured data is defined.
* Internal linking is defined.
* Performance requirements are defined.
* Accessibility requirements are defined.
* Content integrity rules are defined.
* Component architecture is defined.
* QA requirements are defined.

---

# 69. Updated Asterra Architecture

```text id="m8r7sx"
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
│   ├── Insights / Resources Listing
│   └── Insight / Article Detail
│
├── CAREERS
│
└── CONTACT
```

The **Insights system is now structurally complete** at the listing + detail level.

### Next page

**Asterra Projects / Portfolio — Listing Page Specification**
