Asterra Projects Listing — Detailed Page Specification

**Package:** Package 3 — Professional Presence  
**Template:** Template 01 — Corporate Authority  
**Example Client:** Asterra Manufacturing Group (fictional)  
**Page:** Projects Listing  
**Route:** `/projects`  
**Version:** 1.0  
**Status:** Design & implementation specification

> This document defines the reusable Projects Listing page for Asterra. It follows Package 3 — Professional Presence, the Information Architecture and Routing, Universal Design Analysis, Template 01 — Corporate Authority, the Asterra Design Manual, and the approved Asterra Homepage, About / Corporate Story, Business Units / Capabilities, and Business Unit Detail specifications.

---

# 1. Page Purpose

The Projects Listing page is the primary **evidence-discovery page** for Asterra.

The Business Units page answers:

> **What does Asterra do?**

The Business Unit Detail page answers:

> **What does this specific business provide?**

The Projects page answers:

> **Where has Asterra applied its capabilities?**

Its primary role is to turn capability claims into visible evidence through projects, applications, facilities, products, or other approved work examples.

The page should communicate:

**Capability → Application → Evidence → Confidence → Engagement**

---

# 2. Page Objectives

The page should:

- Present Asterra's project portfolio clearly.
- Allow visitors to understand the range of work.
- Connect projects to relevant business units or capabilities.
- Make individual projects easy to discover.
- Provide enough context to evaluate a project before opening its detail page.
- Support credibility without relying on unsupported claims.
- Create clear pathways from project evidence to business inquiry.

The page should **not** become an archive of every project ever completed.

Only projects with useful content and approved assets should be presented.

---

# 3. Primary Audiences

- Prospective customers
- Procurement teams
- Business partners
- Technical stakeholders
- Institutional stakeholders
- Industry professionals
- Prospective employees
- Existing customers researching related capabilities

---

# 4. Primary User Questions

A visitor should be able to answer:

1. What types of projects has Asterra worked on?
2. Which industries or applications are represented?
3. Which Asterra business was responsible?
4. What was the project about?
5. Where was it carried out, when relevant?
6. What capabilities were involved?
7. Where can I see more detail?
8. How can I contact the appropriate team?

---

# 5. Page Role in the Information Architecture

```text
Homepage
    ↓
About / Corporate Story
    ↓
Business Units / Capabilities
    ↓
Business Unit Detail
    ↓
Projects Listing
    ↓
Project Detail
    ↓
Contact / Inquiry

Projects should be discoverable from:

Main navigation
Homepage proof sections
Business Unit Detail pages
Relevant Resources / Insights
Internal related-content links
6. Page Structure

Recommended structure:

Global Header
      ↓
01 Breadcrumb / Hero
      ↓
02 Project Portfolio Introduction
      ↓
03 Featured Project
      ↓
04 Project Portfolio
      ↓
05 Capability / Business Filters
      ↓
06 Project Evidence / Selected Results
      ↓
07 Final CTA
      ↓
Global Footer

The exact section count may change based on content volume.

7. Global Header

Use the established Asterra header.

[ASTERra LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request a Quote]
Active state

Projects should receive the established active-state treatment.

Do not redesign the header for the Projects page.

8. Breadcrumb

Recommended:

Home / Projects

For project detail pages:

Home / Projects / Project Name

The listing breadcrumb should remain visually quiet.

9. Section 01 — Hero
Objective

Introduce the project portfolio as evidence of Asterra's capability.

Eyebrow

OUR PROJECTS

H1 direction

Capabilities put into practice.

Alternative direction:

Selected work across our businesses.

The final headline should be based on approved Asterra content.

Supporting copy

One concise paragraph explaining that the portfolio demonstrates selected work across Asterra's businesses, industries, or applications.

Primary action

Explore Projects

Optional secondary action:

Explore Our Businesses

10. Hero Composition

Preferred desktop:

┌─────────────────────────────────────────────────────────────┐
│ OUR PROJECTS                                                 │
│                                                             │
│ CAPABILITIES PUT INTO      Large project / industrial       │
│ PRACTICE.                  image                             │
│                                                             │
│ Supporting introduction                                      │
│                                                             │
│ [Explore Projects]                                          │
└─────────────────────────────────────────────────────────────┘

The hero should feel evidence-led, not sales-heavy.

Imagery

Use:

Strong completed project image
Industrial application
Facility
Product in context
Operational environment

Avoid generic corporate imagery.

11. Section 02 — Portfolio Introduction
Objective

Provide context before presenting the project collection.

Structure
OUR WORK

Large editorial statement

Short supporting explanation

This section should establish the idea that projects represent real applications of Asterra's capabilities.

Visual treatment
Warm ivory or white surface
Large editorial typography
Minimal supporting imagery
Strong whitespace

Do not repeat the hero copy.

12. Section 03 — Featured Project
Objective

Give the strongest or most representative project immediate prominence.

Composition
FEATURED PROJECT

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    Large project image                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

PROJECT NAME

Business Unit / Industry / Location

Short description

[View Project]
Selection criteria

A featured project should be selected based on:

Strategic importance
Content quality
Visual quality
Relevance to target customers
Ability to demonstrate an important capability

Do not feature a project simply because it is the newest.

13. Featured Project Image

The image should communicate the project immediately.

Preferred:

Completed environment
Production outcome
Installation
Industrial application
Finished product
People using or operating the result where appropriate

Avoid:

Generic machinery close-ups with no context
Office meetings
Generic handshakes
Unrelated stock photography
14. Section 04 — Project Portfolio

This is the primary discovery section.

Recommended structure

Use an editorial project grid/list rather than a generic equal-card gallery.

Example:

PROJECTS

[Large Project]       [Project]

Project Name           Project Name
Business Unit          Business Unit
Industry               Industry

[Project]              [Large Project]

Project Name           Project Name
Business Unit          Business Unit
Industry               Industry

The exact arrangement should be content-driven.

15. Project Card Anatomy

Every project item should communicate:

Required
Project image
Project name
Business unit or capability
Short category / industry
Link to project detail
Optional
Location
Year
Project type
Short outcome
Avoid
Long descriptions
Too many metadata fields
Decorative badges
Unnecessary icons
16. Project Card Interaction

Desktop hover may include:

Slight image scale
Arrow movement
Teal accent
Small overlay transition

The interaction should remain subtle.

Accessibility

The project link must remain understandable without hover.

Do not hide the project title or destination information exclusively inside a hover state.

17. Section 05 — Filters / Discovery Controls

Filters should be introduced only if the project portfolio is large enough to justify them.

Do not create complex filtering for a small portfolio.

Potential filters
Business Unit
Industry
Project Type
Location
Year

Only use filters that correspond to real structured project data.

18. Filter Design

Preferred:

FILTER BY

[All] [Business] [Industry] [Location]

or a compact select/dropdown system.

Visual language
Minimal borders
Clear active state
Mineral teal accent
Strong keyboard focus
No excessive pills

Avoid turning the filter area into a colorful category system.

19. Filtering Behavior

If filters are implemented:

Results should update clearly.
The current filter should be obvious.
Empty results require an informative state.
Reset controls should be available.
Filtering must work with keyboard navigation.
URLs may reflect filter state when useful.
The experience should remain usable without JavaScript where practical.
Empty state

Example:

NO PROJECTS FOUND

No projects match the selected filters.

[Clear Filters]

Do not leave an empty grid with no explanation.

20. Section 06 — Project Evidence / Selected Results
Objective

Provide a second layer of credibility beyond the project thumbnails.

This section should be used only when verified project outcomes or meaningful evidence exists.

Possible evidence
Verified project scale
Completion year
Production/application result
Geographic reach
Client-approved outcome
Relevant certification
Technical achievement
Example structure
PROJECT IMPACT

[Evidence]       [Evidence]       [Evidence]

Short label      Short label      Short label
Supporting text  Supporting text  Supporting text
Important

Never invent statistics.

If reliable project metrics are unavailable, omit this section.

21. Alternative Evidence Treatment

If statistics are unavailable, use a qualitative evidence statement:

WHAT THE PROJECTS SHOW

Technical capability
Operational discipline
Industry experience
Long-term partnership

Only include qualities supported by approved project content.

22. Project Listing Pagination

Pagination should be used only when the number of projects makes it necessary.

Preferred options
Load more
Pagination
Structured archive

The choice should follow the content model and technical architecture.

Avoid

Infinite scrolling when it makes:

URL sharing difficult
Footer access difficult
Navigation unclear
Accessibility worse
23. Project Detail Relationship

Every listed project should lead to:

/projects/[project-slug]

The project detail page should provide deeper information such as:

Project overview
Challenge / objective
Asterra role
Capabilities used
Process
Results
Gallery
Related business
Related projects
CTA

The listing page should remain a discovery layer, not a replacement for the detail page.

24. Business Unit Relationship

Each project should identify the relevant Asterra business where appropriate.

Example:

PROJECT NAME

Industrial Manufacturing
Business Unit Name

[View Project]

The Business Unit label should link back to the relevant business detail page where useful.

This creates a strong information loop:

Business Unit
     ↓
Projects
     ↓
Project Detail
     ↓
Business Unit
25. Section 07 — Final CTA
Objective

Turn project evidence into a relevant next action.

Recommended copy direction

Have a requirement in mind?

Supporting text:

Tell us what you are working on and we'll connect you with the appropriate Asterra team.

Actions

Request an Inquiry

Contact Asterra

Optional:

Explore Our Businesses

26. Footer

Use the established Asterra footer.

Projects should remain easy to access through the footer.

Recommended project-related links:

PROJECTS

All Projects
Business Units
Capabilities
Contact

Only include actual routes.

27. Responsive Composition
Desktop — ≥1100px
12-column conceptual grid
Large editorial hero
Featured project with strong visual dominance
Editorial project portfolio
Optional filter bar
Evidence section
Full-width CTA
Tablet — 768–1099px
Hero becomes balanced two-column or stacked composition.
Featured project remains visually dominant.
Project portfolio moves toward two columns.
Filters simplify.
Evidence items move toward two columns.
Mobile — <768px
Hero
↓
Portfolio Introduction
↓
Featured Project
↓
Filters
↓
Project List
↓
Evidence
↓
CTA
Mobile project presentation

Use a readable vertical list:

[IMAGE]

PROJECT NAME
Business Unit
Industry

Short description

View Project →

Do not create tiny multi-column cards.

28. Typography

Continue the Asterra typography system.

IBM Plex Sans

Use for:

Navigation
Project names where appropriate
Metadata
Labels
Descriptions
Filters
Buttons
IBM Plex Serif

Use selectively for:

Hero headline
Major portfolio statement
Featured project editorial statement
CTA statement

Typography should create the hierarchy instead of decorative card styling.

29. Color

Maintain:

Deep Evergreen
Mineral Teal
Warm Ivory
White
Ink
Body Gray
Muted Gray
Recommended application

Warm Ivory / White

Primary project canvas.

Deep Evergreen

Hero accents, CTA, footer, major structural moments.

Mineral Teal

Links, active filters, buttons, interaction states, small emphasis.

Avoid using a different color for every project category.

30. Imagery Art Direction

Projects are the strongest visual storytelling opportunity on this page.

Prioritize
Completed work
Real environments
Industrial applications
Products in context
People interacting with the work
Process images where useful
Image hierarchy

The featured project receives the strongest image.

Supporting projects use consistent but slightly smaller image treatments.

Avoid
Generic office scenes
Unrelated stock photos
Repeated hero imagery
Artificially dramatic industrial imagery
Images that do not clearly relate to the project
31. Image Metadata

Each project image should have:

Meaningful filename
Appropriate alt text
Correct dimensions
Optimized file size
Approved usage rights
Alt text

Describe the meaningful visual content.

Do not use:

"Project image"

Prefer a concise description such as:

"Asterra production facility during installation"

only if that accurately describes the image.

32. Motion

Recommended:

Project image hover
Arrow/link transition
Filter state transition
Section reveal
Featured project image reveal
Avoid
Large project carousels by default
Auto-playing project videos
Constant parallax
Scroll-jacking
Decorative motion
Motion that obscures project information

Reduced-motion users must receive the same content and functionality.

33. Accessibility

Required:

One clear H1
Semantic headings
Accessible filters
Keyboard-accessible project links
Visible focus states
Descriptive link labels
Appropriate image alt text
Sufficient contrast
Accessible empty states
Reduced-motion support
Filter accessibility

Filters must:

Have an accessible label.
Clearly expose the current state.
Be keyboard usable.
Announce meaningful result changes where appropriate.
Provide a way to clear active filters.
34. SEO
URL

/projects

Title direction

Projects | Asterra Manufacturing Group

Meta description

Describe the portfolio as selected projects demonstrating Asterra's industrial capabilities and applications.

Internal linking

Projects Listing should link to:

Business Units
Business Unit Detail
Project Detail
Relevant Resources
Contact

Project Detail should link back to:

Projects
Relevant Business Unit
Related Projects
35. Structured Data

Potentially appropriate:

CollectionPage
BreadcrumbList
CreativeWork or Project-like structured representation where supported by the chosen implementation
Organization relationship

Do not use an inappropriate schema simply to increase the number of structured-data types.

The structured representation must match the actual content.

36. Performance

Projects pages can become media-heavy.

Priority
Header
Hero
Featured project
First visible project results
Remaining portfolio images
Lower-page evidence
CTA
Requirements
Responsive image variants
Optimized thumbnails
Lazy loading for below-fold images
Explicit image dimensions
Appropriate image formats
Limited font weights
Lightweight filters
No unnecessary third-party embeds

The initial viewport should not wait for the entire project archive.

37. Content Integrity

Asterra remains a fictional example client.

Never invent
Project names
Clients
Project locations
Completion dates
Project values
Production quantities
Results
Certifications
Awards
Technical outcomes
Placeholder content

During design development, clearly identify placeholders.

A visual mockup can demonstrate:

PROJECT NAME
Business Unit
Industry
Location
Year

without presenting fabricated values as verified facts.

38. Content Model

Conceptually:

project
├── id
├── title
├── slug
├── summary
├── description
├── featured
├── heroImage
├── gallery[]
├── businessUnit
├── industry
├── projectType
├── location
├── year
├── capabilities[]
├── outcomes[]
├── status
└── relatedProjects[]

Not every field is mandatory.

Important

The listing page should consume structured project data.

Do not hardcode individual projects into the page layout.

39. Component Mapping
Shared
Header
Footer
Breadcrumb
PageHero
SectionIntro
Button
CTASection
Project components
FeaturedProject
ProjectGrid / ProjectList
ProjectCard
ProjectFilters
ProjectEvidence
EmptyProjectState
Pagination / LoadMore

The same project-card component should be reusable in:

Homepage
Business Unit Detail
Projects Listing
Related Projects
Project Detail
40. AI Implementation Guidance

An AI design or coding agent should:

Treat Package 3 as the governing package framework.
Use Universal Design Analysis for hierarchy, responsive composition, accessibility, and interaction decisions.
Use Template 01 — Corporate Authority.
Use the Asterra Design Manual as the visual source of truth.
Preserve the established evergreen / mineral-teal / warm-ivory system.
Preserve IBM Plex Sans and IBM Plex Serif.
Treat projects as evidence, not decoration.
Make the featured project visually dominant without inventing importance.
Keep the project listing content-driven.
Add filtering only when the portfolio size justifies it.
Keep project metadata concise.
Link every project to its detail page when detail content exists.
Connect projects to their relevant business units.
Never invent project facts.
Recompose the portfolio intentionally for mobile.
Keep interactions restrained.
Preserve accessibility for filters, links, and images.
Optimize project photography aggressively.
Reuse project components throughout the site.
Do not create a new visual system for the Projects section.
41. Anti-Patterns

Do not introduce:

Generic image galleries
Pinterest-style masonry without purpose
Excessive project cards
Heavy filter interfaces
Filter systems for tiny portfolios
Auto-playing carousels
Generic case-study SaaS layouts
Fake project statistics
Fake client logos
Fake project outcomes
Generic stock photography
Excessive dark sections
Excessive gradients
Excessive animation
Stonebridge navy/copper styling
Construction-specific visual language
Decorative industrial graphics without informational purpose
42. QA Checklist
Content
 Page clearly communicates that projects are evidence of Asterra's capabilities.
 Featured project is intentional.
 Project cards contain sufficient identifying information.
 Business-unit relationships are clear.
 Project links resolve correctly.
 Filters correspond to real structured data.
 Empty states are handled.
 Project evidence is verified.
 No fictional project claims appear as facts.
 CTA is clear.
Visual
 Asterra visual identity is preserved.
 Projects are visually dominant without becoming a gallery-only page.
 Editorial hierarchy is clear.
 Featured project is appropriately emphasized.
 Project imagery is authentic and relevant.
 Teal remains an accent.
 Evergreen provides authority.
 Typography follows the established system.
 No Stonebridge styling appears.
Responsive
 Desktop uses the conceptual 12-column structure.
 Featured project adapts correctly.
 Project grid/list works on tablet.
 Mobile projects are readable as a vertical list.
 Filters remain usable on mobile.
 No horizontal overflow exists.
 CTA remains accessible.
Accessibility
 One H1 exists.
 Heading hierarchy is semantic.
 Filters have accessible labels.
 Filter state is understandable.
 Project links are keyboard accessible.
 Focus states are visible.
 Images have meaningful alt treatment.
 Empty states are understandable.
 Reduced motion is respected.
Performance
 Hero and featured images are optimized.
 Project thumbnails use responsive sizes.
 Below-fold images are deferred.
 Image dimensions prevent layout shifts.
 Filters do not add unnecessary JavaScript overhead.
 No unnecessary third-party embeds are loaded.
43. Completion Criteria

The Projects Listing specification is complete when:

The page's evidence role is clearly defined.
Its relationship to Business Units and Project Detail is clear.
Hero structure is defined.
Featured project behavior is defined.
Portfolio presentation is defined.
Project metadata is defined.
Filtering behavior is defined where justified.
Evidence treatment is defined.
Pagination/loading behavior is defined.
Responsive behavior is defined.
Accessibility requirements are defined.
SEO requirements are defined.
Performance requirements are defined.
Content integrity rules are explicit.
Component and data-model considerations are defined.
AI implementation guidance is explicit.
Anti-patterns are explicit.
QA requirements are explicit.
44. Relationship to Previous Asterra Pages

The current information flow is:

HOMEPAGE
Who is Asterra?
        ↓
ABOUT / CORPORATE STORY
What shaped Asterra?
        ↓
BUSINESS UNITS / CAPABILITIES
What does Asterra do?
        ↓
BUSINESS UNIT DETAIL
What does this business provide?
        ↓
PROJECTS LISTING
Where has Asterra applied its capabilities?
        ↓
PROJECT DETAIL
What happened on this specific project?
        ↓
CONTACT / INQUIRY
How can we engage?

This creates an evidence-driven progression:

Corporate identity → Capability → Specific business → Evidence → Engagement

45. Next Page

The next document should be:

Asterra Project Detail Page Specification

That document should define the reusable case-study/project-detail template used by individual projects.