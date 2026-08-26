# Asterra — Page Design Architecture

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Status:** Page design architecture
**Depends on:** `Asterra_Page_Architecture.md`, `Asterra_Content_Data_Architecture.md`, `Asterra_Routing_Architecture.md`, `Asterra_Design_System.md`
**Universal Design Reference:** `Universal_Design_Analysis.md`

---

# 1. Purpose

This document translates the approved Asterra design system into **page-level composition rules**.

It defines:

* What each page needs to accomplish
* The hierarchy of its sections
* How content should be arranged
* What components should be reused
* How pages should connect to one another
* Where visual emphasis should be placed

It does **not** define final pixel-level styling or implementation code.

---

# 2. Global Page Composition

Asterra pages should generally follow:

```text
GLOBAL HEADER
      ↓
PAGE-SPECIFIC HERO / INTRODUCTION
      ↓
PRIMARY CONTENT
      ↓
SUPPORTING CONTENT
      ↓
RELATED CONTENT
      ↓
CONVERSION / CTA
      ↓
GLOBAL FOOTER
```

Not every page needs every layer.

The page's purpose determines its composition.

---

# 3. Homepage

## Primary Objective

The homepage should establish Asterra's identity and quickly communicate:

1. Who Asterra is
2. What Asterra does
3. Why Asterra is credible
4. What Asterra has accomplished
5. Where visitors can explore further

## Recommended Composition

```text
HEADER
   ↓
HERO
   ↓
CORPORATE INTRODUCTION
   ↓
BUSINESS / CAPABILITIES
   ↓
FEATURED PROJECTS
   ↓
CORPORATE / EXPERTISE PROOF
   ↓
SELECTED INSIGHTS
   ↓
FINAL CORPORATE CTA
   ↓
FOOTER
```

### Hero

Should communicate the corporate proposition immediately.

Possible structure:

```text
Eyebrow
Primary headline
Supporting statement
Primary CTA
Secondary CTA
Supporting visual
```

### Business Section

Introduce major business areas without attempting to explain everything.

```text
Business Units
├── Unit 01
├── Unit 02
├── Unit 03
└── View All
```

### Projects

Use projects as evidence rather than simply as a gallery.

```text
Featured Project
+
Supporting Projects
```

### Insights

Show only selected/high-value resources.

The homepage should not become a blog archive.

---

# 4. Corporate Story

## Primary Objective

Communicate Asterra's identity, history, values, and organizational character.

## Composition

```text
HEADER
   ↓
ABOUT HERO
   ↓
CORPORATE INTRODUCTION
   ↓
HISTORY / STORY
   ↓
MISSION / VISION / VALUES
   ↓
APPROACH / DIFFERENTIATORS
   ↓
LEADERSHIP INTRODUCTION
   ↓
BUSINESS / CAPABILITIES CTA
   ↓
FOOTER
```

The page should feel editorial rather than like a collection of unrelated corporate cards.

---

# 5. Leadership Listing

## Primary Objective

Demonstrate organizational credibility and introduce Asterra's leadership team.

## Composition

```text
PAGE INTRO
   ↓
LEADERSHIP GRID
   ↓
OPTIONAL LEADERSHIP MESSAGE
   ↓
ABOUT / BUSINESS CTA
```

### Leadership Grid

Each profile should emphasize:

```text
Portrait
Name
Position
Short contextual information
View Profile
```

Avoid long biographies in the listing.

---

# 6. Executive Profile

## Primary Objective

Provide a deeper view of an individual leader while connecting that person to Asterra's broader organization.

## Composition

```text
BREADCRUMB
   ↓
EXECUTIVE HERO
   ├── Portrait
   ├── Name
   └── Role
   ↓
BIOGRAPHY
   ↓
EXPERTISE / RESPONSIBILITIES
   ↓
RELATED BUSINESS AREAS
   ↓
OPTIONAL RELATED CONTENT
   ↓
LEADERSHIP CTA
```

The profile should remain focused on professional credibility.

---

# 7. Business Listing

## Primary Objective

Help visitors understand the breadth of Asterra's capabilities.

## Composition

```text
PAGE INTRO
   ↓
BUSINESS UNITS
   ↓
CAPABILITY OVERVIEW
   ↓
SELECTED PROJECT PROOF
   ↓
CONTACT CTA
```

The listing should provide enough context for users to decide which business area they want to explore.

---

# 8. Business Unit Detail

## Primary Objective

Explain a specific Asterra capability and prove its relevance through evidence.

## Composition

```text
BREADCRUMB
   ↓
BUSINESS HERO
   ↓
OVERVIEW
   ↓
CAPABILITIES
   ↓
APPROACH / EXPERTISE
   ↓
RELATED PROJECTS
   ↓
RELATED INSIGHTS
   ↓
CORPORATE INQUIRY CTA
```

This page should be one of the strongest conversion pages in the architecture.

The relationship should be:

```text
Capability
   ↓
Expertise
   ↓
Evidence
   ↓
Engagement
```

---

# 9. Projects Listing

## Primary Objective

Demonstrate Asterra's experience and portfolio.

## Composition

```text
PAGE INTRO
   ↓
OPTIONAL FILTERS
   ↓
PROJECT GRID / EDITORIAL LIST
   ↓
PROJECT CTA
```

The design should prioritize project imagery and concise project information.

Potential metadata:

```text
Project
Sector
Location
Year
Business Area
```

Do not overload project cards with technical information.

---

# 10. Project Detail

## Primary Objective

Turn a project into a credible case study.

## Composition

```text
BREADCRUMB
   ↓
PROJECT HERO
   ├── Project title
   ├── Location
   ├── Sector
   └── Hero image
   ↓
PROJECT OVERVIEW
   ↓
CHALLENGE / CONTEXT
   ↓
ASTERRA'S ROLE
   ↓
SCOPE / CAPABILITIES
   ↓
PROJECT GALLERY
   ↓
OUTCOME / IMPACT
   ↓
RELATED BUSINESS UNIT
   ↓
RELATED PROJECTS / INSIGHTS
   ↓
CONTACT CTA
```

Not every project needs every section.

The content available for the actual project should determine the final composition.

---

# 11. Insights Listing

## Primary Objective

Present Asterra's knowledge and expertise.

## Composition

```text
PAGE INTRO
   ↓
FEATURED INSIGHT
   ↓
INSIGHT GRID / LIST
   ↓
OPTIONAL CATEGORIES
```

The design should feel editorial.

Avoid making it visually identical to the Projects listing.

---

# 12. Insight Detail

## Primary Objective

Provide a strong reading experience while connecting the article to Asterra's expertise.

## Composition

```text
BREADCRUMB
   ↓
ARTICLE HEADER
   ├── Category
   ├── Title
   ├── Summary
   ├── Date
   └── Hero image
   ↓
ARTICLE CONTENT
   ↓
RELATED BUSINESS AREA
   ↓
RELATED PROJECTS
   ↓
RELATED INSIGHTS
   ↓
CORPORATE CTA
```

The article itself should remain the dominant element.

Avoid excessive sidebar content that distracts from reading.

---

# 13. Careers Listing

## Primary Objective

Present Asterra as an organization people may want to work for and provide access to current opportunities.

## Composition

```text
CAREERS HERO
   ↓
WHY ASTERRA
   ↓
WORKING AT ASTERRA
   ↓
CURRENT OPPORTUNITIES
   ↓
CULTURE / VALUES
   ↓
GENERAL CAREERS CTA
```

If there are no current vacancies:

```text
No current opportunities
        ↓
General careers/contact pathway
```

The page should not look empty.

---

# 14. Optional Job Detail

If later introduced:

```text
JOB HEADER
   ↓
POSITION SUMMARY
   ↓
RESPONSIBILITIES
   ↓
REQUIREMENTS
   ↓
QUALIFICATIONS
   ↓
LOCATION / EMPLOYMENT TYPE
   ↓
APPLICATION CTA
```

This remains outside the current core scope.

---

# 15. Contact / Corporate Inquiry

## Primary Objective

Provide a clear, credible path for corporate communication.

## Composition

```text
CONTACT HERO
   ↓
CORPORATE CONTACT INFORMATION
   ↓
LOCATIONS
   ↓
INQUIRY FORM
   ↓
ADDITIONAL CORPORATE INFORMATION
   ↓
FOOTER
```

The page should not overwhelm visitors with unnecessary fields.

---

# 16. Cross-Page Related Content

The website should use contextual relationships.

### Business Detail

```text
Business Unit
   ↓
Projects
   ↓
Insights
```

### Project Detail

```text
Project
   ↓
Business Unit
   ↓
Related Projects
   ↓
Related Insights
```

### Insight Detail

```text
Insight
   ↓
Business Unit
   ↓
Projects
```

This supports both navigation and SEO.

---

# 17. Page CTA Strategy

Do not use the same CTA blindly on every page.

| Page             | Primary CTA                   |
| ---------------- | ----------------------------- |
| Home             | Explore Asterra / Contact     |
| About            | Explore Leadership / Business |
| Leadership       | Explore Business              |
| Business Listing | Explore Capability            |
| Business Detail  | Discuss a Project / Contact   |
| Projects         | Explore Project               |
| Project Detail   | Contact Asterra               |
| Insights         | Read Insight                  |
| Insight Detail   | Explore Capability / Contact  |
| Careers          | View Opportunities            |
| Contact          | Submit Inquiry                |

---

# 18. Visual Hierarchy Across the Website

Different content types should have different visual personalities.

```text
Corporate Story
→ Editorial

Leadership
→ Human / Professional

Business
→ Structured / Capability-focused

Projects
→ Visual / Evidence-focused

Insights
→ Editorial / Reading-focused

Careers
→ Human / Organizational

Contact
→ Direct / Trust-focused
```

This prevents every page from looking like the same template with different content.

---

# 19. Hero Variation

Do not use one identical hero component everywhere.

Recommended:

```text
Homepage
→ Large visual hero

About
→ Editorial corporate hero

Business
→ Structured capability hero

Project
→ Image-led project hero

Insight
→ Editorial article hero

Careers
→ Human / organizational hero

Contact
→ Minimal corporate hero
```

The underlying design system remains consistent while composition changes according to purpose.

---

# 20. Section Rhythm

Pages should alternate between:

```text
High visual impact
       ↓
Information
       ↓
Evidence
       ↓
Whitespace
       ↓
Next major idea
```

Avoid:

```text
Hero
Card grid
Card grid
Card grid
Card grid
CTA
```

That pattern would make the site feel generic.

---

# 21. Content Density

Not every page should contain the same amount of content.

### High-density

* Business Detail
* Project Detail
* Insight Detail

### Medium-density

* About
* Leadership Profile
* Careers

### Lower-density

* Home sections
* Listing pages
* Contact

Content should determine page length, not an arbitrary requirement that every page be long.

---

# 22. Mobile Composition

On mobile, layouts should be intentionally recomposed.

Example:

Desktop:

```text
Text        Image
Image       Text
```

Mobile:

```text
Text
Image

Image
Text
```

Project grids should become:

```text
2–4 columns desktop
       ↓
2 columns tablet
       ↓
1 column mobile
```

unless a particular composition justifies another approach.

---

# 23. Accessibility Across Page Designs

Every page should maintain:

* Logical heading hierarchy
* Keyboard accessibility
* Visible focus states
* Descriptive links
* Accessible images
* Adequate contrast
* Appropriate touch targets
* Reduced-motion support

Page composition should never sacrifice accessibility for visual impact.

---

# 24. Performance Across Page Designs

Large visual sections should be implemented with performance in mind.

Particularly:

```text
Homepage Hero
Project Galleries
Large Project Images
Insight Hero Images
Video / Motion Sections
```

Use:

* Responsive images
* Appropriate image formats
* Lazy loading where appropriate
* Optimized assets
* Minimal unnecessary JavaScript

Do not lazy-load important above-the-fold content unnecessarily.

---

# 25. SEO Across Page Designs

The page compositions should support:

* One clear primary topic
* Logical heading hierarchy
* Crawlable internal links
* Descriptive link text
* Meaningful image alt text
* Stable content structure
* Mobile usability
* Appropriate structured data
* Contextual relationships

The SEO playbook remains the **universal SEO reference**, but each page only implements the parts relevant to that page.

---

# 26. Page Design Relationship

The overall system now becomes:

```text
DESIGN SYSTEM
      ↓
PAGE DESIGN ARCHITECTURE
      ↓
PAGE-SPECIFIC SPECIFICATION
      ↓
VISUAL DESIGN
      ↓
IMPLEMENTATION
```

For example:

```text
Design System
     ↓
Business Page Design Architecture
     ↓
Business Unit Listing Specification
     ↓
Business Unit Visual Design
     ↓
React Implementation
```

---

# 27. Avoiding Design Duplication

Page specifications should **not redefine global rules** such as:

* Button behavior
* Typography tokens
* General spacing
* Header structure
* Global colors
* Accessibility standards

Those belong to `Asterra_Design_System.md`.

A page specification should only define what is unique to that page.

---

# 28. Final Page Design Matrix

| Page            | Primary Character     | Main Visual Focus            |
| --------------- | --------------------- | ---------------------------- |
| Home            | Corporate / Editorial | Brand + capabilities + proof |
| About           | Editorial             | Story + identity             |
| Leadership      | Professional / Human  | People                       |
| Executive       | Professional / Human  | Individual credibility       |
| Business        | Structured            | Capabilities                 |
| Business Detail | Expertise-focused     | Capability + proof           |
| Projects        | Visual                | Portfolio                    |
| Project Detail  | Case-study            | Evidence                     |
| Insights        | Editorial             | Knowledge                    |
| Insight Detail  | Reading-focused       | Content                      |
| Careers         | Human                 | Organization + opportunities |
| Contact         | Direct                | Trust + inquiry              |

---

# 29. Final Decision

**Status: APPROVED — Page Design Foundation**

The Asterra page system now has a clear relationship between:

```text
Business Strategy
      ↓
Information Architecture
      ↓
Content Architecture
      ↓
Routing
      ↓
Global Design System
      ↓
Page Design Architecture
```

This gives us enough architectural control to begin the next stage without over-engineering the project.

---

# Current Workflow

```text
Package Definition
        ↓
Page Architecture                    ✅
        ↓
Content / Data Architecture          ✅
        ↓
Routing Architecture                 ✅
        ↓
Design System                        ✅
        ↓
Page Design Architecture             ✅
        ↓
Page-Specific Specification Review   ← NEXT
        ↓
Visual Design
        ↓
Implementation Planning
        ↓
Implementation
        ↓
QA / SEO / Performance
```

## Next

Before implementation, the next useful step is **not another generic architecture file**.

We should now review the existing Asterra page-specification files against this architecture and identify:

* Missing sections
* Duplicated sections
* Conflicting requirements
* Inconsistent CTAs
* Missing content relationships
* Design-system violations
* SEO requirements that need page-specific treatment

That review will ensure the specifications we already created remain consistent with the architecture we've now approved.
