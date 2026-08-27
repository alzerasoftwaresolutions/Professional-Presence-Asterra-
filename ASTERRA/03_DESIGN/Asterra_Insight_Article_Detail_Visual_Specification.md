# Asterra — Insight / Article Detail Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Insight / Article Detail
**Status:** Implementation-ready visual specification

**References:**

* `Asterra Insights / Knowledge Resources — Visual Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Insight / Article Detail page provides the complete reading experience for an individual Asterra publication.

Its primary goals are:

* Deliver the article clearly
* Establish Asterra's expertise
* Make long-form content comfortable to read
* Connect the article to relevant capabilities and projects
* Encourage further exploration
* Support organic search discovery

This page should prioritize **reading quality over visual complexity**.

---

# 2. Overall Page Structure

```text id="q6m3v8"
ARTICLE DETAIL
│
├── Global Header
│
├── Article Header
│   ├── Category
│   ├── Title
│   ├── Summary
│   ├── Date / Metadata
│   └── Hero Image
│
├── Article Content
│
├── Optional Key Takeaways
│
├── Optional Related Capability
│
├── Related Insights
│
├── Corporate CTA
│
└── Global Footer
```

Optional sections should only appear when they provide real value.

---

# 3. Article Header

The article header establishes the editorial identity.

```text id="v8k2p5"
CATEGORY

Article Title

Short summary explaining
what the reader will learn.

Published Date · Reading Time

┌──────────────────────────────────────┐
│                                      │
│             HERO IMAGE               │
│                                      │
└──────────────────────────────────────┘
```

---

# 4. Article Title

The title is the primary visual element.

It should be:

* Specific
* Understandable
* Relevant to the article
* Naturally written

Avoid unnecessarily long titles designed primarily for keywords.

---

# 5. Article Summary

A short introduction beneath the title can communicate the article's purpose.

It should answer:

> Why should someone read this?

Keep it concise.

---

# 6. Article Metadata

Possible metadata:

```text id="m7q4x9"
CATEGORY
Published date
Updated date — if applicable
Reading time — if calculated reliably
Author — if applicable
```

Only display metadata that is accurate.

Do not invent an author or reading time.

---

# 7. Hero Image

The hero image should visually establish the article topic.

Preferred sources:

* Original Asterra photography
* Project imagery
* Relevant diagrams
* Approved editorial imagery

The image should not distract from the title.

---

# 8. Article Content Layout

The reading experience should use a focused content column.

```text id="c5n8v2"
┌──────────────────────────────────────┐
│                                      │
│          ARTICLE CONTENT             │
│                                      │
│  Paragraph                           │
│                                      │
│  Paragraph                           │
│                                      │
│  H2                                  │
│                                      │
│  Paragraph                           │
│                                      │
└──────────────────────────────────────┘
```

Avoid full-width text blocks.

---

# 9. Reading Width

The main article text should remain within a comfortable reading width.

Use wider containers for:

* Images
* Diagrams
* Tables
* Pull quotes

Use narrower containers for:

* Paragraphs
* Lists
* Long-form prose

---

# 10. Article Typography

Recommended hierarchy:

```text id="x8m4q6"
H1
Article Title

Lead
Article Summary

H2
Major Section

H3
Subsection

Body
Article text

Caption
Image explanation
```

Body text should prioritize readability over density.

---

# 11. Paragraph Spacing

Use generous vertical rhythm.

```text id="p3k7v9"
Paragraph
       ↓
comfortable spacing
       ↓
Paragraph
       ↓
comfortable spacing
       ↓
Heading
```

Avoid compressed editorial layouts.

---

# 12. Key Takeaways

Optional.

For longer articles, a short summary can appear near the beginning:

```text id="j6v2m8"
KEY TAKEAWAYS

• Key point
• Key point
• Key point
```

This is useful for readers who need a quick overview.

It should not replace the actual article.

---

# 13. Article Sections

Long articles should use meaningful sections.

Example:

```text id="r8q4n3"
Introduction

The Industry Context

The Challenge

Asterra's Perspective

Practical Considerations

Conclusion
```

The actual structure should reflect the article.

Do not impose generic headings on every article.

---

# 14. Images Within Articles

Inline images may break up long-form content.

Recommended:

```text id="m5k8p2"
Text
 ↓
Image
 ↓
Caption
 ↓
Text
```

Images should support the narrative.

Avoid adding images purely to fill empty space.

---

# 15. Diagrams / Data Visualizations

Where an article contains complex information, use:

* Diagrams
* Charts
* Tables
* Process illustrations

These should simplify the subject rather than create additional visual complexity.

---

# 16. Pull Quotes

Optional.

A significant statement may receive editorial emphasis:

```text id="q7v3m9"
“Important approved statement
from the article.”
```

Use sparingly.

Do not fabricate quotes or pull statements out of context.

---

# 17. Links Within Articles

Links should be contextual.

Example:

```text id="c8n5v4"
Asterra's engineering capabilities
                ↓
Business Unit Detail
```

Avoid excessive links.

Anchor text should describe the destination.

---

# 18. Related Capability

When the article relates directly to an Asterra capability:

```text id="x4m8k2"
RELATED CAPABILITY

Capability Name

Short description.

Explore capability →
```

This creates a natural bridge from **knowledge to service**.

---

# 19. Related Project

Where relevant:

```text id="n6q3v8"
RELATED PROJECT

Project Name

View project →
```

This allows an article to support evidence elsewhere on the site.

---

# 20. Related Insights

Near the end:

```text id="p8v5m3"
RELATED INSIGHTS

Insight A
Insight B
Insight C
```

Choose content based on genuine topical relevance.

Do not simply show the newest three articles.

---

# 21. Article Navigation

For a larger knowledge library:

```text id="k5q8m2"
← Previous Insight

Back to Insights

Next Insight →
```

This is optional.

It should not interfere with the main reading experience.

---

# 22. Corporate CTA

The final CTA should be contextually appropriate.

Example:

```text id="v7m3c9"
EXPLORE ASTERRA'S CAPABILITIES

Learn more about how Asterra approaches
the challenges discussed in this article.

[Explore capabilities →]
```

For commercially oriented articles, Contact may be the better CTA.

---

# 23. Mobile Reading Experience

Mobile should prioritize:

1. Title
2. Summary
3. Metadata
4. Hero image
5. Article content
6. Related resources
7. CTA

The article should not be interrupted by excessive UI elements.

---

# 24. Mobile Typography

Maintain readable:

* Font size
* Line height
* Paragraph width
* Heading spacing

Avoid reducing article text excessively to fit more content on screen.

---

# 25. Sticky Elements

A persistent sticky sidebar is optional on desktop.

If used, it may contain:

```text id="s6q9m4"
CONTENTS

Introduction
Section 1
Section 2
Section 3
Conclusion
```

Do not use a sticky sidebar if the article is too short to justify it.

---

# 26. Table of Contents

Recommended for long-form articles.

```text id="f8m2v7"
CONTENTS

01 Section
02 Section
03 Section
04 Section
```

It should link to the corresponding sections.

On mobile, use a collapsible accessible control if necessary.

---

# 27. Accessibility

Required:

* Semantic article structure
* Correct heading hierarchy
* Accessible table of contents
* Meaningful image alt text
* Accessible links
* Keyboard navigation
* Visible focus states
* Sufficient contrast

Do not communicate important information through typography or color alone.

---

# 28. SEO Structure

Recommended:

```text id="j4k8p5"
H1
Article Title

H2
Article Section

H2
Article Section

H3
Article Subsection
```

The page should have one clear primary topic.

---

# 29. Article Metadata SEO

Each article should have:

* Unique title
* Unique meta description
* Canonical URL
* Open Graph metadata
* Appropriate publication/update metadata

Where appropriate, article structured data can represent the publication.

---

# 30. Search Intent

Article content should clearly satisfy its intended search purpose.

Possible intent:

* Informational
* Industry research
* Technical education
* Commercial investigation
* Corporate perspective

The article should answer the reader's actual question rather than simply target keywords.

---

# 31. Internal Linking Strategy

A strong article may connect:

```text id="q8n4m6"
ARTICLE
 │
 ├── Related Article
 │
 ├── Business Capability
 │
 ├── Relevant Project
 │
 └── Contact
```

This strengthens the relationship between Asterra's:

**Knowledge → Capability → Evidence → Engagement**

---

# 32. Content Quality

Articles should prioritize:

* Accuracy
* Originality
* Relevance
* Clarity
* Useful expertise
* Appropriate evidence
* Proper attribution
* Updated information when necessary

Avoid publishing content solely to increase article count.

---

# 33. Author Information

Optional.

If Asterra publishes content under named authors:

```text id="m3v7q8"
Written by

Author Name
Role / Position
```

Only include this if the author identity and role are approved.

---

# 34. Publication Dates

Display dates when useful.

For updated content:

```text id="x5q8n2"
Published: August 2026
Updated: October 2026
```

Only show an updated date when the article was genuinely revised.

---

# 35. Performance

Long-form pages should remain lightweight.

Prioritize:

* Optimized hero image
* Responsive inline images
* Lazy loading below-fold images
* Efficient fonts
* Limited third-party scripts
* Minimal unnecessary animation

Do not allow editorial richness to compromise page performance.

---

# 36. Motion

Use subtle transitions only:

```text id="p6m3v9"
Page entrance
Image transition
Link hover
```

Avoid animated paragraphs or aggressive scroll effects.

The reading experience must remain calm.

---

# 37. Content Integrity

Never invent:

* Research
* Statistics
* Expert quotes
* Authors
* Sources
* Client claims
* Project results
* Industry findings

Where external facts are presented, use appropriate evidence and attribution.

---

# 38. Component Map

```text id="v8q4m5"
InsightDetailPage
│
├── Header
│
├── ArticleHeader
│   ├── Category
│   ├── Title
│   ├── Summary
│   ├── Metadata
│   └── HeroImage
│
├── OptionalTableOfContents
│
├── ArticleContent
│
├── OptionalKeyTakeaways
│
├── OptionalRelatedCapability
│
├── OptionalRelatedProject
│
├── RelatedInsights
│
├── OptionalArticleNavigation
│
├── CorporateCTA
│
└── Footer
```

---

# 39. Relationship to Insights Architecture

```text id="k7m2x8"
INSIGHTS LISTING
       │
       ↓
ARTICLE DETAIL
       │
       ├── Knowledge
       │
       ├── Capability
       │
       ├── Project
       │
       └── Related Knowledge
       │
       ↓
     CONTACT
```

The listing page is for **discovery**.

The article page is for **understanding**.

---

# 40. Quality Gate

Before implementation:

### Reading

* Is the article comfortable to read?

### Hierarchy

* Is the content structure immediately understandable?

### Content

* Does the article genuinely provide useful knowledge?

### Visuals

* Do images support the content?

### SEO

* Is the article's topic clearly represented?

### Linking

* Are relevant Asterra capabilities and projects connected?

### Performance

* Are images and scripts optimized?

### Accessibility

* Can the complete article be navigated with keyboard and assistive technology?

### Integrity

* Are claims, authorship, dates, and sources verified?

---

# 41. Final Visual Direction

```text id="r5k9v3"
                  ARTICLE
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
                  EVIDENCE
                     │
                     ↓
                 ENGAGEMENT
```

The visual language should be:

**Editorial + Focused + Intelligent + Highly readable**

The article page should feel closer to a **high-quality corporate publication** than a generic blog template.

---

# 42. Status

**Asterra Insight / Article Detail — Visual Specification: APPROVED**

## Next

**`Asterra Careers / Opportunities Listing — Visual Specification`**
