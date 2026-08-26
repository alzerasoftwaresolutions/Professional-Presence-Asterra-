# Asterra Insight / Article Detail — Detailed Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Page:** Insight / Article Detail
**Route:** `/insights/[slug]`
**Status:** Design & implementation specification

This page builds on the existing Asterra architecture and universal SEO/design documents. It defines only the requirements specific to an individual insight page.

---

## 1. Page Purpose

The Insight Detail page is the destination for a specific piece of Asterra knowledge.

Its primary goals are to:

* Deliver useful, readable content.
* Demonstrate Asterra's expertise.
* Establish the context and credibility of the information.
* Connect the topic to Asterra's relevant capabilities or projects.
* Provide natural paths to related content.
* Create an appropriate conversion path without interrupting the reading experience.

The page should feel more like an **editorial knowledge resource** than a conventional corporate blog post.

---

# 2. Page Structure

```text
Insight Detail
│
├── Breadcrumb
│
├── Article Header
│   ├── Category
│   ├── Title
│   ├── Summary
│   ├── Date
│   ├── Author / Asterra
│   └── Featured Image
│
├── Article Content
│
├── Related Capability
│
├── Related Project / Evidence
│
├── Related Insights
│
└── Relevant CTA
```

---

# 3. Article Header

The header should immediately communicate:

1. What the article is about.
2. Why it matters.
3. Who published it.
4. When it was published.

Recommended hierarchy:

```text
INSIGHT

Designing resilient infrastructure
for changing environments

A practical perspective on how infrastructure
planning can improve long-term resilience.

Asterra
August 2026 · 7 min read
```

---

# 4. Category

Display a small editorial label above the title.

Example:

```text
ENGINEERING
```

Possible categories depend on the established content model.

Do not display a long list of tags.

---

# 5. Article Title

The title is the primary visual and semantic element.

Requirements:

* Clear.
* Specific.
* Descriptive.
* Useful to the intended reader.
* Naturally aligned with the article's search intent.

Avoid titles such as:

> **Asterra's Innovative Approach to Excellence**

Prefer:

> **Designing resilient infrastructure for changing environments**

The second communicates an actual subject.

---

# 6. Article Summary

A short introduction should explain what the reader will gain.

Recommended length:

**1–3 sentences.**

It should not simply repeat the title.

Example:

> Infrastructure projects increasingly need to account for changing environmental and operational conditions. This article explores practical considerations for designing systems that remain reliable over time.

---

# 7. Article Metadata

Recommended:

```text
Asterra
August 25, 2026
7 min read
```

Where an individual author exists:

```text
By [Name]
[Role]
```

If the organization is the actual publisher, use Asterra rather than inventing an individual author.

---

# 8. Updated Date

If an article has been substantially updated:

```text
Published: March 12, 2026
Updated: August 25, 2026
```

Only display an updated date when meaningful changes have actually been made.

---

# 9. Featured Image

The article should have one primary visual.

Preferred placement:

```text
┌──────────────────────────────────────────────┐
│                                              │
│             FEATURED IMAGE                   │
│                                              │
└──────────────────────────────────────────────┘
```

The image should reinforce the subject rather than simply decorate the page.

---

# 10. Article Content Layout

The reading experience should be deliberately simple.

Recommended:

```text
┌──────────────────────────────────────────────┐
│                                              │
│              Article Content                 │
│                                              │
│   H2                                         │
│   Paragraph                                  │
│                                              │
│   H2                                         │
│   Paragraph                                  │
│                                              │
│   Image / Figure                             │
│                                              │
│   H2                                         │
│   Paragraph                                  │
│                                              │
└──────────────────────────────────────────────┘
```

Avoid excessive columns inside the article body.

---

# 11. Reading Width

The article body should use a narrower reading measure than the overall website.

Recommended target:

**approximately 650–760px maximum content width**

This improves long-form readability.

The hero and related-content sections can use the wider site grid.

---

# 12. Article Typography

Use the established Asterra typography system.

### Headings

Use the established serif display typeface for major article headings where appropriate.

### Body

Use the established sans-serif typeface for paragraphs and supporting content.

Body text should prioritize:

* Readability
* Comfortable line height
* Adequate paragraph spacing
* Strong contrast

---

# 13. Article Body Hierarchy

Recommended:

```text
H1
Article title

Introduction

H2
Major section

Paragraphs

H3
Supporting point

Paragraphs

H2
Major section

Paragraphs
```

Do not skip heading levels purely for visual appearance.

---

# 14. Rich Content

Where useful, articles may contain:

* Images
* Diagrams
* Tables
* Pull quotes
* Lists
* Captions
* Data visualizations
* Embedded media

These should only be used when they improve understanding.

---

# 15. Pull Quotes

Pull quotes may be used for important ideas.

Example:

> Resilient infrastructure begins with decisions made before construction starts.

The quote should come from the article or clearly represent an editorial statement.

Do not manufacture quotations attributed to people who did not say them.

---

# 16. Images Within Articles

Inline images should:

* Support the surrounding content.
* Have appropriate dimensions.
* Include meaningful alt text.
* Include captions when context is necessary.

Example:

```text
[Image]

Infrastructure planning during the early design stage.

Source: Asterra Project Team
```

Only use source attribution when the source actually needs attribution.

---

# 17. Tables and Data

When the article contains structured information, use real semantic tables rather than screenshots of tables.

Example:

| Consideration | Typical Question                           |
| ------------- | ------------------------------------------ |
| Environment   | What conditions must the system withstand? |
| Operations    | How will the system be maintained?         |
| Lifecycle     | How will performance change over time?     |

Tables must remain usable on mobile.

---

# 18. Article Navigation

For longer articles, an optional table of contents can be used.

Example:

```text
CONTENTS

01 — Understanding the Challenge
02 — Planning Considerations
03 — Design Approach
04 — Long-Term Performance
```

Use this only when the article is long enough to benefit from navigation.

---

# 19. Sticky Article Navigation

A desktop article may optionally include a small sticky contents panel.

```text
┌────────────────────┬──────────────────────────┐
│ CONTENTS           │                          │
│                    │ Article                  │
│ 01 Introduction    │                          │
│ 02 Planning       │                          │
│ 03 Design         │                          │
│ 04 Conclusion     │                          │
└────────────────────┴──────────────────────────┘
```

Do not allow the navigation to dominate the reading experience.

---

# 20. Article Conclusion

End the article with a clear conclusion.

The conclusion should:

* Summarize the main insight.
* Reinforce the practical implication.
* Transition naturally to relevant Asterra expertise where appropriate.

Avoid abruptly ending with a sales pitch.

---

# 21. Related Capability

After the article, connect the subject to a relevant Asterra capability.

Example:

```text
RELATED CAPABILITY

Engineering & Infrastructure

Explore how Asterra approaches complex
engineering and infrastructure requirements.

[Explore Capability →]
```

This is one of the primary bridges between content and business value.

---

# 22. Related Project

Where the article relates to a documented project:

```text
RELATED PROJECT

[Project Image]

[Project Name]

See how this approach was applied
in a real Asterra project.

[View Project →]
```

Do not force a project relationship when one does not exist.

---

# 23. Related Insights

Display a small selection rather than the entire archive.

Recommended:

```text
RELATED INSIGHTS

[Insight] [Insight] [Insight]
```

Select content based on:

* Topic
* Category
* Capability
* Project relationship
* Editorial relevance

Do not simply select the three newest articles.

---

# 24. Article CTA

The CTA should correspond to the article's subject.

Example:

> **Have a similar challenge?**

> Talk to the Asterra team about your requirements.

**Discuss Your Requirement →**

For informational articles where a direct sales CTA would feel inappropriate, use a softer capability CTA.

---

# 25. Social Sharing

Social sharing is optional.

If implemented, use a small unobtrusive control near the article metadata or conclusion.

Potential actions:

```text
Share
LinkedIn
Copy Link
```

Avoid large social-media button groups that distract from reading.

---

# 26. Back Navigation

Provide a subtle route back to the Insights listing.

Example:

```text
← Back to Insights
```

This is especially useful after reading an individual article.

---

# 27. SEO — Search Intent

Each article must have a clearly identified primary search intent before publication.

The content should answer:

```text
What is the user trying to understand?
        ↓
Does this article satisfy that need?
        ↓
What unique knowledge does Asterra provide?
```

Do not create an article simply because a keyword exists.

---

# 28. SEO — Title

The article title should normally become the primary page title.

Recommended structure:

```text
[Article Topic] | Asterra
```

The actual SEO title should remain natural and avoid unnecessary keyword repetition.

---

# 29. SEO — Meta Description

Each article should have a unique description summarizing its actual content.

Example:

> Explore practical considerations for designing resilient infrastructure and improving long-term project performance.

Avoid using the same description across all articles.

---

# 30. SEO — URL

Use a stable descriptive slug.

Example:

```text
/insights/designing-resilient-infrastructure
```

Avoid:

```text
/insights/post-17
```

or unnecessarily complex URLs.

---

# 31. SEO — Internal Linking

Internal links should connect the article to relevant Asterra content.

Preferred relationship:

```text
Insight
├── Related Insight
├── Capability
├── Project
└── Contact
```

Anchor text should describe the destination.

Prefer:

> Explore Asterra's engineering capabilities

over:

> Click here

---

# 32. SEO — Canonical URL

Each article should have one canonical URL.

Avoid duplicate accessible versions such as:

```text
/article-name
/article-name/
/article-name?source=newsletter
```

The canonical configuration should identify the intended public URL.

---

# 33. SEO — Structured Data

Where appropriate, implement structured data representing the article.

Potential types depend on the actual content:

```text
Article
BlogPosting
NewsArticle
```

Do not use `NewsArticle` simply because the page is inside an Insights section.

The structured data must accurately represent the content.

---

# 34. SEO — Author

Where applicable, the article should expose legitimate author information.

If the article represents corporate editorial content:

```text
Asterra
```

If authored by an expert:

```text
[Name]
[Professional Role]
```

The author representation should match the actual publishing process.

---

# 35. SEO — Content Quality

Before publication, evaluate:

* Does the article provide original value?
* Is the information accurate?
* Is the topic clearly defined?
* Does it satisfy its intended search intent?
* Is the content sufficiently differentiated?
* Does it demonstrate genuine expertise?
* Does it provide useful evidence or examples where appropriate?

---

# 36. SEO — Search Snippet

The title and description should work together as a useful search result.

Example:

```text
Designing Resilient Infrastructure | Asterra
Explore practical considerations for designing infrastructure that remains reliable under changing environmental and operational conditions.
```

Do not write metadata only for keyword density.

---

# 37. SEO — Indexability

Published articles should normally be indexable.

Draft and unpublished articles should not be publicly discoverable.

If an article is permanently removed:

* Handle the URL appropriately.
* Avoid leaving broken internal links.
* Consider a relevant redirect where appropriate.

---

# 38. SEO — Article Lifecycle

Recommended states:

```text
Draft
   ↓
Review
   ↓
Published
   ↓
Updated
   ↓
Archived / Removed
```

SEO metadata and internal links should be reviewed when articles are substantially changed or removed.

---

# 39. Performance

The article page should prioritize content rendering.

Important considerations:

* Optimize featured images.
* Use responsive image sizes.
* Lazy-load non-critical inline images.
* Avoid unnecessary embedded media.
* Minimize third-party scripts.
* Prevent layout shifts from media.

---

# 40. Mobile Reading Experience

Mobile should prioritize uninterrupted reading.

Requirements:

* Comfortable body text.
* Adequate margins.
* No horizontal scrolling.
* Proper image scaling.
* Accessible table behavior.
* Easy article navigation.
* Easy-to-use links and CTAs.

Avoid placing a large sticky UI over the reading area.

---

# 41. Accessibility

The article must support:

* Semantic headings.
* Keyboard navigation.
* Screen readers.
* Descriptive links.
* Image alt text.
* Accessible tables.
* Visible focus states.
* Sufficient contrast.
* Proper heading hierarchy.

The table of contents, if present, must also be keyboard accessible.

---

# 42. Component Architecture

Page-specific components:

```text
InsightArticle
├── ArticleHeader
├── ArticleMeta
├── FeaturedImage
├── ArticleBody
├── ArticleTableOfContents
├── ArticleShare
├── ArticleConclusion
├── RelatedCapability
├── RelatedProject
├── RelatedInsights
└── ArticleCTA
```

Not every article requires every component.

The composition should respond to the content.

---

# 43. Data Requirements

Minimum article data:

```text
title
slug
excerpt
content
category
featuredImage
publishedDate
status
```

Recommended:

```text
author
updatedDate
readingTime
businessUnit
relatedProjects
relatedInsights
seoTitle
seoDescription
```

Optional:

```text
tableOfContents
socialImage
```

---

# 44. Content Rendering

Article content should be rendered from structured content rather than one large HTML string where practical.

Preferred content blocks:

```text
paragraph
heading
image
quote
list
table
embed
```

This makes future editing and content management easier.

---

# 45. Implementation Rules

The implementation should:

1. Preserve the established Asterra visual system.
2. Prioritize reading over decoration.
3. Use semantic article markup.
4. Keep the reading column controlled.
5. Support structured content.
6. Generate stable slugs.
7. Generate unique metadata.
8. Connect articles to relevant Asterra capabilities.
9. Support related content.
10. Optimize article media.
11. Maintain accessibility.
12. Avoid unnecessary functionality.

---

# 46. Anti-Patterns

Do not create:

* Generic blog layouts.
* Extremely narrow text columns.
* Excessively wide text columns.
* Huge blocks of uninterrupted text.
* Keyword-stuffed headings.
* Fake authors.
* Fake citations.
* Unrelated project links.
* Excessive social-sharing controls.
* Aggressive sales CTAs inside the article.
* Heavy animations.
* Full-resolution images loaded into the page unnecessarily.

---

# 47. Page-Specific QA

### Content

* [ ] Title accurately represents article.
* [ ] Summary is useful.
* [ ] Author is legitimate.
* [ ] Publication date is correct.
* [ ] Content has a clear structure.
* [ ] Images support the content.
* [ ] Related capability is genuinely relevant.
* [ ] Related project is genuinely relevant.

### SEO

* [ ] Unique title.
* [ ] Unique meta description.
* [ ] Stable descriptive URL.
* [ ] Correct H1.
* [ ] Logical H2/H3 structure.
* [ ] Canonical URL.
* [ ] Relevant structured data.
* [ ] Internal links.
* [ ] Appropriate indexability.
* [ ] Optimized images.

### UX

* [ ] Reading width is comfortable.
* [ ] Article navigation works.
* [ ] Related content is useful.
* [ ] CTA is contextual.
* [ ] Mobile reading experience is good.

### Accessibility

* [ ] Semantic article structure.
* [ ] Keyboard navigation works.
* [ ] Images have appropriate alt text.
* [ ] Tables are accessible.
* [ ] Links are descriptive.
* [ ] Focus states are visible.

### Performance

* [ ] Featured image is optimized.
* [ ] Inline images are optimized.
* [ ] Media dimensions are reserved.
* [ ] Third-party embeds are controlled.
* [ ] Mobile performance is tested.

---

# 48. Completion Criteria

The Insight Detail page is complete when:

* The article reading experience is defined.
* Article metadata is defined.
* Content structure is defined.
* Media handling is defined.
* Related capability relationship is defined.
* Related project relationship is defined.
* Related insights are defined.
* Article CTA is defined.
* SEO implementation is defined.
* Structured data direction is defined.
* Content data model is defined.
* Accessibility requirements are defined.
* Performance requirements are defined.
* Page-specific QA is defined.

---

## Updated Architecture

```text
ASTERRA
│
├── HOME                                      ✅
│
├── ABOUT
│   └── Corporate Story                       ✅
│
├── LEADERSHIP
│   ├── Leadership Listing                    ✅
│   └── Executive Profile                     ✅
│
├── BUSINESS
│   ├── Business Units / Capabilities         ✅
│   └── Business Unit Detail                  ✅
│
├── PROJECTS
│   ├── Projects / Portfolio Listing          ✅
│   └── Project / Case Study Detail           ✅
│
├── INSIGHTS
│   ├── Insights / Knowledge Resources        ✅
│   └── Insight / Article Detail              ✅ CURRENT
│
├── CAREERS
│   ├── Careers / Opportunities Listing       ⏳ NEXT
│   └── Job Detail                            ○ OPTIONAL
│
└── CONTACT
    └── Corporate Inquiry                     ✅
```

**Next required page: Asterra Careers / Opportunities Listing — Detailed Page Specification.**
