# Asterra — Projects / Portfolio Listing Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Projects / Portfolio Listing
**Status:** Implementation-ready visual specification

**References:**

* `Asterra Projects / Portfolio Listing — Detailed Page Specification`
* `Asterra Business Units / Capabilities — Listing Page Specification`
* `Asterra Business Unit Detail — Visual Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Projects / Portfolio page demonstrates **Asterra's work through evidence**.

The page should allow visitors to:

* Discover completed or relevant projects
* Understand the sectors Asterra operates in
* Connect projects to business capabilities
* Filter or browse projects when necessary
* Open detailed project case studies

The page should communicate:

**Experience → Capability → Evidence → Trust**

It should not feel like a generic image gallery.

---

# 2. Overall Page Structure

```text id="z2p7c4"
PROJECTS / PORTFOLIO
│
├── Global Header
│
├── Projects Hero
│
├── Portfolio Introduction
│
├── Featured Project
│
├── Projects Listing
│   ├── Filters / Categories
│   └── Project Cards
│
├── Capability Connection
│
├── Corporate CTA
│
└── Global Footer
```

Optional sections should only be included when they provide useful information.

---

# 3. Projects Hero

The hero should establish the page as a collection of **real work and evidence**.

```text id="g8k4m2"
┌──────────────────────────────────────────────────────┐
│ PROJECTS                                             │
│                                                      │
│ Selected work demonstrating Asterra's capabilities,  │
│ experience, and impact.                              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

The hero should remain restrained.

The portfolio itself should provide the visual richness.

---

# 4. Hero Visual Direction

Unlike the homepage hero, the Projects hero does not need to make a dramatic visual statement.

The visual priority should be:

```text id="x4n6s8"
PAGE IDENTITY
      ↓
PROJECT DISCOVERY
      ↓
PROJECT EVIDENCE
```

This keeps the visitor focused on the portfolio.

---

# 5. Portfolio Introduction

A short introductory section can explain what the portfolio represents.

```text id="q7m3v1"
OUR WORK

Large statement

Short supporting explanation.
```

Avoid repeating the entire corporate introduction from the About page.

---

# 6. Featured Project

If there is a strategically important project, give it greater visual emphasis.

```text id="j6r9k2"
┌──────────────────────────────────────────────────────┐
│                                                      │
│                  LARGE PROJECT IMAGE                 │
│                                                      │
├──────────────────────────────────────────────────────┤
│ FEATURED PROJECT                                     │
│ Project Name                                         │
│ Sector / Business Unit                               │
│ Short description                                    │
│                                                      │
│ View project →                                       │
└──────────────────────────────────────────────────────┘
```

The featured project should be genuinely significant.

Do not automatically feature the newest project.

---

# 7. Project Listing

The main portfolio should use a structured visual grid.

```text id="c5v8n3"
┌────────────────────┐ ┌────────────────────┐
│                    │ │                    │
│   PROJECT IMAGE    │ │   PROJECT IMAGE    │
│                    │ │                    │
│ Project Name       │ │ Project Name       │
│ Sector             │ │ Sector             │
│ View project →     │ │ View project →     │
└────────────────────┘ └────────────────────┘

┌────────────────────┐ ┌────────────────────┐
│   PROJECT IMAGE    │ │   PROJECT IMAGE    │
│ Project Name       │ │ Project Name       │
│ Sector             │ │ Sector             │
└────────────────────┘ └────────────────────┘
```

A three-column desktop grid may be used when the project imagery and content support it.

---

# 8. Project Card Structure

Each card should prioritize:

```text id="n3x7q5"
Project Image
      ↓
Project Name
      ↓
Sector / Business Unit
      ↓
Short descriptor
      ↓
View Project →
```

Do not overload the card with:

* Long descriptions
* Multiple buttons
* Excessive metadata
* Decorative badges

---

# 9. Project Imagery

Project imagery is the most important visual component of this page.

Prefer:

* Actual project photography
* Construction / facility photography
* Completed work
* Relevant site imagery
* Authentic project documentation

Avoid generic stock photography whenever possible.

---

# 10. Image Composition

Project images should maintain a consistent visual system.

Recommended:

* Consistent aspect ratio
* Controlled cropping
* High image quality
* Clear focal point
* Consistent spacing

Avoid mixing arbitrary image dimensions throughout the grid.

---

# 11. Project Metadata

Useful metadata may include:

```text id="v5c2m8"
PROJECT NAME

Sector
Business Unit

Location — where relevant
```

Only display information that helps users understand the project.

---

# 12. Project Categories

If the portfolio is sufficiently large, introduce categories.

Possible dimensions:

```text id="f8q6m1"
ALL
BUSINESS UNIT
SECTOR
LOCATION
PROJECT TYPE
```

Do not create unnecessary filters.

The number of projects should determine the filtering complexity.

---

# 13. Filtering

For a small portfolio:

**No filter is preferable.**

For a larger portfolio:

```text id="p7m4z9"
ALL     SECTOR     BUSINESS UNIT     LOCATION
```

Filtering should be:

* Easy to understand
* Keyboard accessible
* Responsive
* Fast
* Visually consistent

---

# 14. Mobile Filters

On mobile, avoid occupying the entire screen with filter controls.

Use a compact control such as:

```text id="h8x3v2"
FILTER PROJECTS
[ All ▼ ]
```

or an accessible filter drawer.

The project list should remain the primary content.

---

# 15. Search

A project search field is optional.

It is only justified when the portfolio is large enough that browsing becomes difficult.

Do not add search simply because the component is available.

---

# 16. Project Card Hover

Desktop interaction may include:

```text id="k4j8s7"
Normal
Project image

Hover
Subtle image movement
+
View project →
```

The interaction should remain restrained.

Avoid large image zooms that cause surrounding cards to shift.

---

# 17. Project Detail Transition

The visual system should establish:

```text id="m6c9q2"
Portfolio Listing
       ↓
Project Detail
       ↓
Project Story
       ↓
Evidence / Results
       ↓
Related Capability
```

The project card should clearly communicate that deeper information is available.

---

# 18. Capability Connection

Projects should connect back to the Business architecture.

Example:

```text id="d8p4k1"
Project
   │
   ├── Business Unit
   │
   ├── Capability
   │
   └── Sector
```

This allows users to move from:

**"What has Asterra done?"**

to:

**"What capability enabled that work?"**

---

# 19. Capability CTA

An optional section can connect portfolio evidence back to capabilities.

```text id="s7q5m3"
EXPLORE OUR CAPABILITIES

Business Unit A →
Business Unit B →
Business Unit C →
```

Keep it compact.

---

# 20. Empty States

If filters produce no results:

```text id="w5v7k2"
No projects match the selected criteria.

[View all projects]
```

Do not leave the portfolio area blank.

---

# 21. Pagination / Loading

For a large portfolio, use:

* Pagination
* Load more
* Server-side filtering

Choose one consistent method.

Do not create infinite scrolling if it makes project discovery or URL sharing difficult.

---

# 22. Responsive Layout

### Desktop

```text id="a3k7q8"
3-column project grid
```

or:

```text id="n8v4m2"
2-column editorial grid
```

depending on imagery and content.

### Tablet

```text id="q5k8s1"
2-column grid
```

### Mobile

```text id="r4m6x9"
1-column project list
```

Project images should remain visually prominent on mobile.

---

# 23. Featured Project Responsive Behavior

Desktop:

```text id="x6f2m8"
Image                  Information
██████████████         Project Name
██████████████         Description
██████████████         View Project →
```

Mobile:

```text id="b8n3q7"
Image
████████████

Project Name
Description
View Project →
```

---

# 24. Typography

Recommended hierarchy:

```text id="j4q9m6"
Page label
     ↓
H1 — Projects
     ↓
Section heading
     ↓
Project name
     ↓
Sector / metadata
     ↓
Description
```

Project names should remain easy to scan.

---

# 25. Project Descriptions

Listing descriptions should be short.

The detailed case study should contain:

* Background
* Challenge
* Approach
* Scope
* Outcome
* Additional project information

The listing page should not duplicate the case study.

---

# 26. SEO Structure

Recommended:

```text id="p8z2k5"
H1
Projects / Portfolio

H2
Featured Project

H2
Our Projects

H3
Project Name

H3
Project Name
```

Project cards should use descriptive link text.

Avoid generic:

**Read more**

when the project name itself can be the descriptive link.

---

# 27. Project Detail SEO Relationship

Each project should have a unique detail URL when sufficient content exists.

```text id="v2k7s5"
Projects
│
├── Project A → /projects/project-a
├── Project B → /projects/project-b
└── Project C → /projects/project-c
```

Do not create detail pages for projects that contain insufficient unique information.

---

# 28. Metadata

The listing page should have:

* Unique title
* Useful meta description
* Canonical URL

Each project detail page should have independent metadata based on the actual project.

---

# 29. Structured Data

Where appropriate, project detail pages may use relevant structured data.

The listing page should remain semantically straightforward.

Do not add irrelevant schema types simply to increase markup volume.

---

# 30. Internal Linking

Recommended relationships:

```text id="q3n6v8"
Projects Listing
      ↓
Project Detail
      ↓
Business Unit
      ↓
Related Projects
```

This supports both discovery and contextual navigation.

---

# 31. Performance

Portfolio pages can become image-heavy.

Prioritize:

* Responsive images
* Optimized thumbnails
* Lazy loading
* Correct image dimensions
* Efficient image formats
* Limited animation
* Minimal unnecessary JavaScript

The featured project's primary image should receive appropriate loading priority.

---

# 32. Accessibility

Required:

* Meaningful image alt text
* Semantic headings
* Keyboard-accessible project links
* Visible focus states
* Accessible filters
* Clear filter state
* Sufficient contrast
* No information dependent solely on hover

If filters are used, screen-reader users should be able to understand the active filter and resulting project set.

---

# 33. Content Integrity

Do not invent:

* Project names
* Clients
* Locations
* Project values
* Completion dates
* Results
* Project roles
* Awards
* Metrics

Every portfolio claim should be supported by approved Asterra information.

---

# 34. Project Status

If project status is useful, it can be displayed subtly:

```text id="k6w8r4"
Completed
Ongoing
Selected Work
```

Do not use status labels unless the information is accurate and meaningful.

---

# 35. Component Map

```text id="u7m3p9"
ProjectsListingPage
│
├── Header
│
├── ProjectsHero
│
├── PortfolioIntroduction
│
├── FeaturedProject
│
├── ProjectFilters
│
├── ProjectGrid
│   └── ProjectCard
│
├── CapabilityConnection
│
├── CorporateCTA
│
└── Footer
```

Filtering and featured-project sections remain optional.

---

# 36. Relationship to Asterra Architecture

The Projects section should work as the organization's **evidence layer**:

```text id="e9q4v2"
ABOUT
  ↓
Who Asterra is

BUSINESS
  ↓
What Asterra does

PROJECTS
  ↓
What Asterra has done

PROJECT DETAIL
  ↓
How Asterra delivered it

CONTACT
  ↓
Start a conversation
```

This makes Projects a critical trust-building component of the website.

---

# 37. Quality Gate

Before implementation:

### Discovery

* Can visitors browse projects quickly?

### Evidence

* Does each project communicate genuine work?

### Visual quality

* Are project images consistent and strong?

### Filtering

* Is filtering actually necessary?

### Navigation

* Can visitors reach detailed case studies?

### Business connection

* Can projects be connected to relevant capabilities?

### SEO

* Are projects discoverable through descriptive structure and links?

### Performance

* Are images optimized?

### Accessibility

* Can the complete portfolio be navigated without relying on hover?

---

# 38. Final Visual Direction

```text id="w2q8m5"
                    ASTERRA
                       │
                       ↓
                    PROJECTS
                       │
                       ↓
                  PORTFOLIO
                       │
                       ↓
                 REAL WORK
                       │
                       ↓
                  EVIDENCE
                       │
                       ↓
                 CAPABILITY
                       │
                       ↓
                   CONTACT
```

The design language should be:

**Visual + Credible + Structured + Evidence-driven**

The portfolio should feel like **proof of Asterra's capabilities**, not simply a gallery of attractive images.

---

# 39. Status

**Asterra Projects / Portfolio Listing — Visual Specification: APPROVED**

## Next

**`Asterra Project / Case Study Detail — Visual Specification`**
