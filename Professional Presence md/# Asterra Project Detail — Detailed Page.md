# Asterra Project Detail — Detailed Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Example Client:** Asterra Manufacturing Group
**Page:** Project Detail
**Route:** `/projects/[project-slug]`
**Version:** 1.0
**Status:** Design & implementation specification

> This document defines the reusable Project Detail page for Asterra. It follows Package 3 — Professional Presence, the Information Architecture and Routing, Universal Design Analysis, Template 01 — Corporate Authority, the Asterra Design Manual, and the previously defined Asterra Homepage, About / Corporate Story, Business Units / Capabilities, Business Unit Detail, and Projects Listing specifications.

---

# 1. Page Purpose

The Project Detail page is the **deep evidence layer** of the Asterra website.

The Projects Listing page answers:

> **Where has Asterra applied its capabilities?**

The Project Detail page answers:

> **What was this project, what was required, what did Asterra do, and what was achieved?**

Its primary purpose is to transform a project from a portfolio thumbnail into a credible, structured story.

The experience should move the visitor through:

**Context → Challenge → Approach → Capability → Outcome → Confidence → Engagement**

---

# 2. Page Objectives

The page should:

* Explain the project clearly.
* Establish the project context quickly.
* Identify Asterra's role.
* Explain the relevant capability.
* Present meaningful evidence.
* Show the work visually.
* Connect the project to the responsible business unit.
* Provide a clear next action.

The page should **not** become a generic long-form case study unless the project genuinely requires that level of detail.

---

# 3. Primary Audiences

* Prospective customers
* Procurement teams
* Technical decision-makers
* Business partners
* Institutional stakeholders
* Industry professionals
* Existing customers
* Prospective employees

---

# 4. Primary User Questions

The page should answer:

1. What is this project?
2. Who or what was it for?
3. Where did it take place?
4. What was the objective?
5. What challenge or requirement existed?
6. What role did Asterra play?
7. Which capabilities were involved?
8. What was delivered?
9. What evidence demonstrates the result?
10. Which Asterra business handled the work?
11. How can I discuss a similar requirement?

---

# 5. Page Structure

```text
Global Header
      ↓
Breadcrumb
      ↓
01 Project Hero
      ↓
02 Project Overview / Facts
      ↓
03 Context / Challenge
      ↓
04 Asterra's Approach
      ↓
05 Capabilities / Scope
      ↓
06 Project Gallery / Visual Evidence
      ↓
07 Outcome / Results
      ↓
08 Responsible Business Unit
      ↓
09 Related Projects
      ↓
10 Final CTA
      ↓
Global Footer
```

Sections should be conditional.

If a project has no verified challenge, measurable outcome, or dedicated process story, that section should be simplified or omitted rather than filled with invented content.

---

# 6. Global Header

Use the established Asterra global header.

```text
[ASTERra LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request a Quote]
```

The active navigation state should remain associated with **Projects**.

No separate project-specific navigation bar is required.

---

# 7. Breadcrumb

Recommended:

```text
Home / Projects / Project Name
```

If the project is strongly connected to a specific business:

```text
Home / Business / Business Unit / Projects / Project Name
```

Use the shorter version by default.

The breadcrumb should remain secondary navigation.

---

# 8. Section 01 — Project Hero

## Objective

Immediately establish the project's identity and importance.

### Content hierarchy

**Eyebrow**

`PROJECT`

**H1**

Project Name

**Supporting information**

```text
Business Unit
Industry / Application
Location
Year
```

Only display information that is verified and relevant.

### Introductory statement

One concise sentence explaining the project's purpose or significance.

---

# 9. Hero Composition

Preferred desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ Breadcrumb                                                   │
│                                                             │
│ PROJECT                                                     │
│                                                             │
│ PROJECT NAME                     Large project image        │
│                                                             │
│ Short project statement                                      │
│                                                             │
│ Business Unit · Industry · Location                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

The hero should feel **editorial and authoritative**, not like a marketing landing page.

---

# 10. Hero Image

The hero image should represent the project itself.

Preferred:

* Completed project
* Finished installation
* Product/application in context
* Facility
* Real operational environment

If several strong images exist, select the one that provides the clearest immediate understanding.

Avoid generic images that merely suggest the industry.

---

# 11. Hero Metadata

Possible fields:

```text
Business Unit
Industry
Location
Year
Project Type
Status
```

Only use fields supported by the actual content model.

### Example

```text
Industrial Manufacturing
Asterra Manufacturing
Addis Ababa
2026
```

Do not display empty labels.

---

# 12. Section 02 — Project Overview

## Objective

Give the visitor a concise understanding of the project before introducing deeper detail.

### Recommended structure

```text
PROJECT OVERVIEW

Large editorial statement

Supporting explanation
```

Then:

```text
PROJECT FACTS

Business Unit       Asterra Business
Industry            Manufacturing
Location            Location
Year                Year
Project Type        Type
```

---

# 13. Project Facts

Project facts should function as **orientation**, not decoration.

Possible facts:

* Client
* Location
* Year
* Business Unit
* Industry
* Project Type
* Scope
* Status

### Privacy rule

Do not expose a client name if the client has not approved public attribution.

Use an appropriate generic description where necessary.

---

# 14. Section 03 — Context / Challenge

## Objective

Explain why the project existed.

This is the first major storytelling section.

### Heading

Possible:

**The Requirement**

or

**The Challenge**

or

**The Context**

The wording should match the actual project.

### Content

Explain:

* Initial situation
* Business requirement
* Technical requirement
* Operational requirement
* Environmental or market context where relevant

Keep the writing factual.

---

# 15. Challenge Composition

Preferred:

```text
THE REQUIREMENT

Large statement                    Supporting detail

The project required...            Paragraph explaining the
                                    relevant context.

                                    Key considerations:
                                    — Requirement
                                    — Constraint
                                    — Objective
```

This should feel like a structured technical/business narrative rather than a dramatic storytelling device.

---

# 16. Section 04 — Asterra's Approach

## Objective

Explain how Asterra addressed the requirement.

### Structure

```text
OUR APPROACH

01  Planning
    Short explanation

02  Execution
    Short explanation

03  Quality / Delivery
    Short explanation
```

The exact stages depend on the actual project.

Possible stages:

* Consultation
* Design
* Engineering
* Manufacturing
* Procurement
* Installation
* Testing
* Delivery
* Support

Only include stages that genuinely occurred.

---

# 17. Approach Visual Treatment

Use an editorial numbered sequence rather than a standard card grid.

```text
01
PLAN

Explanation

────────────────────────

02
DELIVER

Explanation

────────────────────────

03
VERIFY

Explanation
```

This keeps the page aligned with the Asterra Corporate Authority system.

---

# 18. Section 05 — Capabilities / Scope

## Objective

Connect the project to Asterra's actual capabilities.

### Structure

```text
CAPABILITIES APPLIED

Capability 01
Short explanation

Capability 02
Short explanation

Capability 03
Short explanation
```

Possible categories:

* Manufacturing
* Engineering
* Processing
* Logistics
* Installation
* Quality Management
* Technical Support

The labels should come from the approved Asterra capability model.

---

# 19. Business Unit Connection

Each project should identify its responsible Asterra business.

Example:

```text
DELIVERED BY

BUSINESS UNIT NAME

Short description of the business.

[Explore Business Unit]
```

This creates a direct relationship:

```text
Project
   ↓
Business Unit
   ↓
Capabilities
   ↓
Other Projects
```

---

# 20. Section 06 — Project Gallery

## Objective

Allow the visitor to visually understand the project.

This should be one of the strongest sections on the page.

### Recommended gallery structure

```text
┌───────────────────────────────┐
│                               │
│       Large project image     │
│                               │
└───────────────────────────────┘

┌──────────────┐  ┌──────────────┐
│ Image        │  │ Image        │
└──────────────┘  └──────────────┘
```

Use different image scales to create hierarchy.

---

# 21. Gallery Rules

The gallery should tell a visual story.

Recommended sequence:

```text
01 — Overall project
02 — Process / implementation
03 — Technical detail
04 — Finished result
```

Do not simply place images in arbitrary order.

If only one or two strong images exist, use a simpler composition.

---

# 22. Image Captions

Captions should be used when they add context.

Examples:

```text
Production line during installation
```

```text
Completed processing facility
```

```text
Final equipment configuration
```

Do not caption every image if the caption adds no information.

---

# 23. Image Lightbox

A lightbox may be used for project photography.

Requirements:

* Keyboard accessible
* Clear close control
* Appropriate focus management
* Descriptive image information where available
* Swipe support on touch devices
* Escape key support
* No content loss when closed

The gallery must remain useful without the lightbox.

---

# 24. Section 07 — Outcome / Results

## Objective

Explain what the project achieved.

This section should be used when verified outcomes exist.

### Structure

```text
THE RESULT

Large outcome statement

Supporting explanation

[Evidence]      [Evidence]      [Evidence]
```

Possible evidence:

* Delivered scope
* Completion status
* Production improvement
* Operational result
* Deployment scale
* Verified technical result

---

# 25. Results Without Numbers

Not every project will have approved quantitative data.

In that situation, use a qualitative outcome:

```text
DELIVERY

The completed solution provides the required
production capability and operational environment.
```

Only state what is supported by the project record.

---

# 26. Statistics

Statistics should only be displayed when verified.

Possible format:

```text
01
PROJECT YEAR

2026

02
LOCATION

Addis Ababa

03
SCOPE

Verified project scope
```

Do not create large statistics simply to fill visual space.

---

# 27. Section 08 — Responsible Business Unit

## Objective

Make the relationship between the project and Asterra's organization explicit.

### Structure

```text
DELIVERED BY

BUSINESS UNIT NAME

Short business description.

[Explore Business]
```

Optional:

```text
CAPABILITIES

Manufacturing
Engineering
Technical Support
```

This section should be relatively compact.

---

# 28. Section 09 — Related Projects

## Objective

Keep the visitor exploring relevant evidence.

### Recommended

Show 2–3 related projects.

Relationship priority:

1. Same business unit
2. Same capability
3. Same industry
4. Same project type

### Structure

```text
RELATED PROJECTS

Project 01        Project 02        Project 03

[View Project]    [View Project]    [View Project]
```

Avoid random project recommendations.

---

# 29. Related Projects Card

Use the established project-card component.

Required:

* Image
* Project name
* Business unit / category
* Link

Optional:

* Industry
* Location

Do not add unnecessary metadata.

---

# 30. Section 10 — Final CTA

The CTA should transition from evidence to engagement.

### Recommended direction

**Working on a similar requirement?**

Supporting text:

Tell us what you are looking to achieve and we'll connect you with the appropriate Asterra team.

### Actions

**Request an Inquiry**

**Contact Asterra**

Optional:

**Explore More Projects**

---

# 31. CTA Design

Use the established Asterra CTA treatment:

* Deep Evergreen background
* Warm Ivory / white typography
* Mineral Teal action
* Generous whitespace
* Minimal decorative elements

The CTA should feel like part of the Asterra system rather than a promotional banner.

---

# 32. Responsive Composition

## Desktop — ≥1100px

* 12-column conceptual grid
* Large hero image
* Editorial project metadata
* Asymmetric content sections
* Large gallery
* Structured evidence
* Related projects in 3-column arrangement where appropriate

## Tablet — 768–1099px

* Hero becomes two-column or stacked.
* Project metadata simplifies.
* Approach sequence remains readable.
* Gallery uses two-column composition.
* Related projects use two columns.

## Mobile — <768px

Recommended:

```text
Breadcrumb
↓
Hero
↓
Overview
↓
Facts
↓
Challenge
↓
Approach
↓
Capabilities
↓
Gallery
↓
Results
↓
Business Unit
↓
Related Projects
↓
CTA
```

### Mobile rules

* No tiny metadata.
* No compressed multi-column galleries.
* Images remain large enough to understand.
* Long paragraphs should be broken into short sections.
* CTA remains prominent.
* Lightbox remains touch-friendly.

---

# 33. Typography

Continue the Asterra system.

### IBM Plex Sans

Use for:

* Metadata
* Body text
* Labels
* Navigation
* Project facts
* Capability names
* Buttons

### IBM Plex Serif

Use selectively for:

* Hero statement
* Major project narrative
* Challenge/approach editorial statements
* Final CTA heading

Do not use serif for every heading.

---

# 34. Color

Maintain:

* Deep Evergreen
* Mineral Teal
* Warm Ivory
* White
* Ink
* Supporting grays

### Recommended use

**Warm Ivory**

Main editorial canvas.

**White**

Content and gallery surfaces.

**Deep Evergreen**

Major structural sections and CTA.

**Mineral Teal**

Links, actions, active states, small accents.

The project itself should provide most of the visual richness through photography.

---

# 35. Imagery Art Direction

Project photography should be **documentary and credible**.

### Prioritize

* Actual completed work
* Real installation
* Production environment
* Technical process
* Finished outcome
* Human interaction with the project where useful

### Avoid

* Generic stock imagery
* AI-generated fake project photography presented as real
* Unrelated industrial imagery
* Overly staged corporate photography
* Repeated images with no additional information

---

# 36. Content Integrity

Because Asterra is a fictional example client, the implementation specification must not invent real-world claims.

Never fabricate:

* Client names
* Project values
* Contract values
* Locations
* Completion dates
* Certifications
* Production numbers
* Technical specifications
* Outcomes
* Awards
* Testimonials

During design development, placeholders must be clearly identifiable.

---

# 37. Content Model

Conceptually:

```text
project
├── id
├── title
├── slug
├── summary
├── description
├── featuredImage
├── gallery[]
├── client
├── industry
├── location
├── year
├── projectType
├── businessUnit
├── challenge
├── approach[]
├── capabilities[]
├── outcomes[]
├── relatedProjects[]
└── status
```

Optional fields should not create empty visual sections.

---

# 38. Client Attribution

Client information requires special handling.

Possible states:

### Public

```text
Client Name
```

### Restricted

```text
Leading industrial manufacturer
```

### Confidential

Do not display client identification.

The UI should accommodate these states without breaking the design.

---

# 39. Component Mapping

### Shared components

* Header
* Footer
* Breadcrumb
* Button
* PageHero
* SectionIntro
* CTASection

### Project components

* ProjectHero
* ProjectFacts
* ProjectContext
* ProjectApproach
* CapabilityList
* ProjectGallery
* ProjectOutcome
* BusinessUnitReference
* RelatedProjects

### Gallery components

* ProjectGallery
* GalleryImage
* ImageLightbox

Components should be reusable across all project details.

---

# 40. Routing

Recommended:

```text
/projects
/projects/[project-slug]
```

Example:

```text
/projects/industrial-processing-facility
```

The project slug should be generated from structured project data.

Do not hardcode route-specific project content into the page component.

---

# 41. Internal Linking

Project Detail should link to:

* Projects Listing
* Responsible Business Unit
* Relevant capabilities
* Related projects
* Contact / Inquiry

### Example flow

```text
Project Detail
      ↓
Business Unit
      ↓
Capabilities
      ↓
Other Projects
      ↓
Inquiry
```

This reinforces the entire site architecture.

---

# 42. SEO

### Page title

```text
[Project Name] | Asterra Manufacturing Group
```

### Meta description

Summarize:

* Project
* Asterra role
* Relevant capability
* Industry/application

### Canonical URL

Use the project's primary canonical route.

### Open Graph

Project pages should provide:

* Project title
* Short description
* Strong project image
* Asterra identity

The project hero image should normally be the social sharing image unless a dedicated approved asset exists.

---

# 43. Structured Data

Potential structured data:

* BreadcrumbList
* Organization
* CreativeWork
* ImageObject

Use only schemas that accurately represent the page.

Do not claim a formal `Product`, `Service`, or `LocalBusiness` relationship when the project does not represent one.

---

# 44. Performance

Project Detail pages can contain many high-resolution images.

### Requirements

* Use responsive image sizes.
* Optimize all gallery images.
* Lazy-load images below the fold.
* Preload only the most important hero image where appropriate.
* Reserve image dimensions to prevent layout shift.
* Avoid loading every gallery image at full resolution initially.
* Use lightweight lightbox behavior.
* Avoid unnecessary video.

### Priority

```text
Hero
↓
Overview
↓
First content image
↓
Remaining content
↓
Gallery
↓
Related projects
```

---

# 45. Accessibility

Required:

* One H1
* Semantic heading hierarchy
* Accessible breadcrumb
* Keyboard-accessible gallery
* Keyboard-accessible lightbox
* Visible focus states
* Descriptive image alt text
* Accessible metadata
* Sufficient color contrast
* Reduced-motion support

### Gallery

Users must be able to:

* Open an image
* Close it
* Navigate between images
* Use keyboard controls
* Understand the current image

without relying exclusively on a mouse.

---

# 46. Motion

Recommended:

* Hero image reveal
* Gallery hover
* Link/arrow movement
* Subtle section reveal
* Lightbox transition

Avoid:

* Scroll-jacking
* Auto-playing galleries
* Excessive parallax
* Constant image movement
* Decorative animation that competes with project evidence

---

# 47. AI Implementation Guidance

An AI design or coding agent should:

1. Treat Package 3 as the governing package framework.
2. Follow Universal Design Analysis principles.
3. Use Template 01 — Corporate Authority.
4. Use the Asterra Design Manual as the visual source of truth.
5. Maintain the established Asterra color system.
6. Maintain IBM Plex Sans and IBM Plex Serif.
7. Treat each project as an evidence story.
8. Keep the project identity immediately visible.
9. Use structured metadata rather than hardcoded facts.
10. Explain the project context before presenting technical detail.
11. Connect the project to its responsible business unit.
12. Use project imagery as evidence.
13. Never fabricate project information.
14. Use measurable outcomes only when verified.
15. Keep the page scannable even when detailed.
16. Recompose the gallery intentionally for mobile.
17. Make the lightbox accessible.
18. Reuse project components across the site.
19. Keep related projects genuinely relevant.
20. Preserve the same Asterra visual language as the other pages.
21. Do not introduce Stonebridge styling.
22. Do not turn the page into a generic SaaS case-study layout.

---

# 48. Anti-Patterns

Do not introduce:

* Generic case-study templates
* Excessive cards
* Fake statistics
* Fake testimonials
* Fake client logos
* Fake project outcomes
* Overly dramatic storytelling
* Huge blocks of uninterrupted text
* Generic stock photography
* Unrelated project images
* Auto-playing galleries
* Excessive dark sections
* Heavy gradients
* Excessive animation
* Decorative industrial graphics
* Stonebridge navy/copper palette
* Construction-specific design language
* Separate visual identity for each project

---

# 49. QA Checklist

## Content

* [ ] Project identity is immediately clear.
* [ ] Project context is understandable.
* [ ] Client attribution is handled correctly.
* [ ] Asterra's role is explicit.
* [ ] Capabilities are identified.
* [ ] Approach is accurate.
* [ ] Gallery represents the actual project.
* [ ] Outcomes are verified.
* [ ] Responsible business unit is linked.
* [ ] Related projects are relevant.
* [ ] CTA is appropriate.
* [ ] No fabricated information appears.

## Visual

* [ ] Asterra visual identity is preserved.
* [ ] Project imagery is the primary visual evidence.
* [ ] Hero has clear hierarchy.
* [ ] Editorial sections have adequate whitespace.
* [ ] Gallery has intentional composition.
* [ ] Typography follows Asterra system.
* [ ] Mineral Teal remains an accent.
* [ ] Deep Evergreen is used structurally.
* [ ] No Stonebridge visual language appears.

## Responsive

* [ ] Hero works on desktop.
* [ ] Hero works on mobile.
* [ ] Metadata remains readable.
* [ ] Gallery adapts correctly.
* [ ] Long-form content remains scannable.
* [ ] Related projects remain useful.
* [ ] CTA remains accessible.
* [ ] No horizontal overflow exists.

## Accessibility

* [ ] One H1 exists.
* [ ] Heading hierarchy is correct.
* [ ] Breadcrumb is accessible.
* [ ] Gallery is keyboard accessible.
* [ ] Lightbox is keyboard accessible.
* [ ] Focus states are visible.
* [ ] Images have appropriate alt text.
* [ ] Contrast is sufficient.
* [ ] Reduced motion is supported.

## Performance

* [ ] Hero image is optimized.
* [ ] Gallery images are optimized.
* [ ] Responsive image sizes are used.
* [ ] Below-fold images are lazy-loaded.
* [ ] Layout shifts are minimized.
* [ ] Lightbox does not load unnecessary full-resolution assets prematurely.
* [ ] No unnecessary third-party embeds are present.

---

# 50. Completion Criteria

The Project Detail specification is complete when:

* Project identity is defined.
* Project context is defined.
* Project facts are defined.
* Challenge/context section is defined.
* Approach section is defined.
* Capability relationship is defined.
* Gallery behavior is defined.
* Outcome/evidence behavior is defined.
* Business Unit relationship is defined.
* Related projects are defined.
* Final CTA is defined.
* Responsive behavior is defined.
* Accessibility requirements are defined.
* SEO requirements are defined.
* Performance requirements are defined.
* Content integrity rules are explicit.
* Client attribution rules are defined.
* Content model is defined.
* Component structure is defined.
* Routing is defined.
* AI implementation guidance is explicit.
* Anti-patterns are explicit.
* QA requirements are explicit.

---

# 51. Relationship to the Previous Pages

The Asterra experience now progresses as:

```text
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
What does this specific business provide?
        ↓
PROJECTS LISTING
Where has Asterra applied its capabilities?
        ↓
PROJECT DETAIL
How was this specific project delivered?
What evidence demonstrates the result?
        ↓
CONTACT / INQUIRY
How can we engage?
```

The Project Detail page therefore serves as the **deepest evidence layer** before conversion.

---

# 52. Next Page

The next specification should be:

**Asterra Leadership / Management Team — Listing Page Specification**

This will introduce the people behind the organization while maintaining the same Corporate Authority system and avoiding a generic profile-card layout.
