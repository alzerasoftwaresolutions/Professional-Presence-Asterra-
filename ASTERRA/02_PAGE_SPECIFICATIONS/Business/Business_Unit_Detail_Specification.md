# Package 3 — Professional Presence
## Example Client — Asterra Manufacturing Group
### Business Unit Detail Page — Detailed Page Specification

**Version:** 1.0  
**Template:** 01 — Corporate Authority  
**Client:** Asterra Manufacturing Group (fictional example)  
**Route pattern:** `/business/[business-unit-slug]`  
**Status:** Design specification

> This document defines the reusable detail-page structure for an individual Asterra business unit. It follows Package 3, the Universal Design Analysis principles, the Template 01 — Corporate Authority system, the Asterra Design Manual, and the approved Asterra Homepage / About / Business Listing page specifications.

---

# 1. Page Purpose

The Business Unit Detail page is the primary page for understanding **one specific Asterra business in depth**.

The Business Units Listing page answers:

> **What businesses does Asterra operate?**

This page answers:

> **What does this business do, who does it serve, what capabilities does it have, and why should a visitor engage with it?**

The page should move the visitor through:

**Orient → Understand → Evaluate → Verify → Explore → Engage**

It must provide meaningful depth without becoming a full product catalog or replacing the Projects, Resources, or Contact systems.

---

# 2. Page Role Within the Site

```text
Homepage
   ↓
About / Corporate Story
   ↓
Business Units / Capabilities
   ↓
Business Unit Detail
   ↓
Projects / Resources / Contact

The detail page is the bridge between corporate-level identity and specific commercial capability.

It should not duplicate
The complete corporate history
The entire group-level Business listing
Full project archives
Generic corporate leadership content
Full resource/news archives
Contact/location information beyond useful contextual links
3. Primary Audiences
Customers and procurement teams
Business partners and distributors
Technical stakeholders
Institutional buyers
Suppliers
Industry professionals
Prospective employees where relevant
4. Primary User Questions

A visitor should be able to answer:

What is this Asterra business?
What does it provide?
Which markets or industries does it serve?
What capabilities make it relevant?
What evidence demonstrates its capability?
Which projects or applications relate to it?
How can I contact the appropriate team?
5. Primary Conversion
Primary

Request an Inquiry / Quote

Secondary
Contact Business Team
View Related Projects
Explore Other Businesses

The page should support commercial discovery while maintaining the restrained Corporate Authority character.

6. Page Structure Overview
Global Header
      ↓
Breadcrumb
      ↓
01 Hero — Business Identity
      ↓
02 Business Overview
      ↓
03 Core Capabilities
      ↓
04 Products / Services / Solutions
      ↓
05 Markets / Applications
      ↓
06 Facilities / Operations / Process
      ↓
07 Evidence — Projects / Results
      ↓
08 Quality / Standards / Certifications
      ↓
09 Related Business Units
      ↓
10 Final Business CTA
      ↓
Global Footer

Not every business unit must use every optional section.

The final page should be content-driven.

7. Global Header

The header inherits the Asterra site-wide navigation.

[ASTERra LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request a Quote]
Detail-page behavior

The active Business navigation state should remain visible.

A breadcrumb should provide additional local orientation below the header.

8. Breadcrumb
Purpose

Show the visitor where the current business sits within the group.

Recommended:

Home / Business / Business Unit Name
Rules
Keep it visually quiet.
Use readable text.
Ensure each ancestor is clickable where appropriate.
Do not use breadcrumb navigation as the primary page navigation.
It must remain accessible on mobile.
9. Section 01 — Hero / Business Identity
Objective

Immediately identify the business and its primary value.

Content hierarchy

Eyebrow

ASTERRA BUSINESS

H1

Business Unit Name

Lead statement

A concise statement explaining what the business does and its primary market or capability.

Primary CTA

Request an Inquiry

Secondary CTA

Explore Related Projects

Desktop Composition

Preferred:

┌─────────────────────────────────────────────────────────────┐
│ Breadcrumb                                                   │
│                                                             │
│ ASTERRA BUSINESS                         Large business     │
│                                          / facility image   │
│ BUSINESS UNIT NAME                                          │
│                                                             │
│ Short positioning statement                                 │
│                                                             │
│ [Request an Inquiry]  [View Projects]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

The hero should feel specific to the business rather than identical to the corporate homepage.

Image direction

Use an image that immediately communicates:

The business operation
Product or service context
Facility
Production environment
Technical process

Avoid generic corporate-office photography.

10. Hero Content Rules

The hero must communicate the business's identity before detail.

It should not contain:

A long history
Multiple statistics
Full product lists
Several paragraphs
Excessive metadata

The visitor should understand the business within seconds.

11. Section 02 — Business Overview
Objective

Explain the business in enough detail for a visitor to understand its role within Asterra.

Structure
ABOUT THE BUSINESS

Large editorial statement

Supporting paragraph(s)

Key business facts
Preferred layout
5 columns — editorial statement
1 column  — whitespace
6 columns — explanatory content
Content should cover
Business purpose
Primary offering
Position within Asterra
General customer or market relevance
Distinctive capability

Keep the copy concise and structured.

12. Business Facts

Use factual metadata only when verified.

Possible fields:

Established
Location
Primary Market
Business Type
Operating Region

These should not automatically appear for every business.

Rule

Only show metadata when it improves understanding.

Do not manufacture statistics or corporate facts to make the layout appear complete.

13. Section 03 — Core Capabilities
Objective

Explain what the business is technically or operationally capable of doing.

This section should be one of the most useful parts of the page.

Preferred composition

Use a numbered editorial list:

CORE CAPABILITIES

01  Capability Name
    Short explanation

02  Capability Name
    Short explanation

03  Capability Name
    Short explanation

04  Capability Name
    Short explanation
Avoid
Generic icon grids
Equal rounded cards
Long technical paragraphs
Unsupported superlatives
14. Capability Anatomy

Each capability should contain:

Number
Name
Short explanation
Optional supporting image or metric
Example
01

PRECISION MANUFACTURING

Short explanation describing the relevant
production capability and its value.

The number should be a visual navigation device, not the only means of communicating meaning.

15. Section 04 — Products / Services / Solutions
Objective

Present what the business actually provides.

The exact label should follow the business type.

Possible labels:

Products
Services
Solutions
Product Categories
What We Provide
Important

Do not use all labels simultaneously.

Choose the term that matches the actual business model.

Preferred layout
WHAT WE PROVIDE

Product / Service 01
Short description
Explore →

Product / Service 02
Short description
Explore →

Product / Service 03
Short description
Explore →

For a small portfolio, an editorial list is preferred over a card grid.

For a larger catalog, the product/catalog system should be handled separately.

16. Product / Service Detail Rule

The Business Unit Detail page is not automatically the product-detail page.

If a product requires:

Detailed specifications
Variants
Documents
Downloads
Technical tables
Multiple applications
Inquiry forms

then a dedicated product-detail model should be considered.

The business page should provide the appropriate entry point rather than becoming an oversized catalog.

17. Section 05 — Markets / Applications
Objective

Show where the business's capabilities create value.

Structure
MARKETS & APPLICATIONS

01  Market / Industry
    Short explanation

02  Market / Industry
    Short explanation

03  Market / Industry
    Short explanation
Alternative

If the business serves applications rather than industries:

APPLICATIONS

Application 01
Application 02
Application 03

Use the terminology appropriate to the actual business.

18. Visual Treatment for Markets

Avoid a generic icon grid.

Preferred:

Large labels
Short explanations
Strong dividers
Optional contextual photography
Editorial grouping

Example:

────────────────────────────────────────

INDUSTRIAL MANUFACTURING

How this business supports the market.

────────────────────────────────────────

EXPORT & DISTRIBUTION

How this business supports the market.

────────────────────────────────────────
19. Section 06 — Facilities / Operations / Process
Objective

Provide tangible evidence of the business's operational capability.

This section is particularly valuable for a manufacturing organization.

Content options

Use whichever is actually relevant:

Facility
Production process
Equipment
Quality process
Logistics
Workforce
Manufacturing workflow

Do not force all categories onto every business.

20. Facility / Operations Composition

Preferred split layout:

┌───────────────────────────────┬─────────────────────────────┐
│                               │ OPERATIONS                  │
│ Large documentary image      │                             │
│                               │ Short explanation           │
│                               │                             │
│                               │ 01 Process                  │
│                               │ 02 Process                  │
│                               │ 03 Process                  │
└───────────────────────────────┴─────────────────────────────┘
Image rule

Use real facility or process photography where available.

If no approved photography exists, use temporary placeholders during design development rather than fabricated corporate imagery.

21. Section 07 — Evidence: Projects / Results
Objective

Connect the business's claims to evidence.

Structure
SELECTED PROJECTS

[Large featured project]

Project Name
Business / Application
Short description

[Supporting project]   [Supporting project]

[View All Projects]
Recommended
1 featured project
2 supporting projects
If insufficient project content exists

Do not fabricate projects.

The section can be replaced with another approved evidence type or omitted until real content is available.

22. Evidence Hierarchy

Evidence should be prioritized approximately as:

Relevant completed projects
Verified measurable outcomes
Certifications / standards
Facilities / production evidence
Leadership / technical expertise
Testimonials where approved

Do not rely on adjectives such as:

Best
Leading
World-class
Largest
Trusted
Premium

unless the claim can be supported and is approved.

23. Section 08 — Quality / Standards / Certifications
Objective

Provide confidence where formal standards or certifications genuinely matter.

Structure
QUALITY & STANDARDS

Short explanation

Certification / Standard
Certification / Standard
Certification / Standard

[View Credentials]
Rules
Use only approved credentials.
Use real logos where appropriate.
Respect logo usage requirements.
Do not display every corporate credential if only some relate to the business.
Do not invent certification numbers or dates.

If no verified credentials exist for the business, omit the section.

24. Section 09 — Related Business Units
Objective

Help visitors understand the wider Asterra group and discover adjacent capabilities.

Structure
MORE FROM ASTERRA

Business Unit 01
Short description

Business Unit 02
Short description

[Explore All Businesses]
Recommended

2–3 related units.

The selection should be based on genuine organizational relationships or useful visitor pathways.

Do not simply show random businesses.

25. Related Business Visual Treatment

Use a restrained editorial list:

BUSINESS UNIT NAME                          →
Short description

A small image may appear on hover or in a split layout.

Avoid turning the section into another large card grid.

26. Section 10 — Final Business CTA
Objective

Convert business understanding into an appropriate commercial or contact action.

Structure
LET'S TALK ABOUT YOUR REQUIREMENT

Tell us what you need and we'll connect
you with the appropriate Asterra team.

[Request an Inquiry]     [Contact Asterra]
Optional secondary action

Explore Other Businesses

Visual treatment
Deep evergreen background
Warm ivory/white typography
Mineral teal primary CTA
Minimal decoration

The CTA should feel like a natural continuation of the page.

27. Footer

Use the established Asterra footer.

The current business unit can optionally be visually indicated within the Business navigation group.

28. Responsive Composition
Desktop — ≥1100px
12-column conceptual grid
Large hero image
Asymmetric editorial sections
Wide capability lists
Split facility/process sections
Feature-led project evidence
Structured related-business navigation
Tablet — 768–1099px
Hero moves toward a balanced two-column composition.
Capability lists remain readable.
Products/services simplify.
Facility section becomes two-column.
Projects move toward 2-column layout.
Mobile — <768px

Recommended sequence:

Breadcrumb
↓
Hero
↓
Overview
↓
Capabilities
↓
Products / Services
↓
Markets / Applications
↓
Operations
↓
Projects
↓
Quality
↓
Related Businesses
↓
CTA
Mobile rules
Stack major sections.
Maintain strong heading hierarchy.
Do not compress technical content into tiny text.
Keep CTAs accessible.
Preserve image meaning through intentional cropping.
Avoid horizontal scrolling.
Keep business-unit navigation readable.
29. Typography

Use the established Asterra typography system.

IBM Plex Sans

Use for:

Navigation
Body copy
Capability names
Metadata
Product/service labels
Buttons
Supporting content
IBM Plex Serif

Use selectively for:

Hero statement
Major business positioning statement
Important editorial callouts
Final CTA statement

The serif should create emphasis, not dominate the entire page.

30. Color

Continue the Asterra system:

Deep Evergreen — authority and major structural sections
Mineral Teal — actions, accents, active states
Warm Ivory — primary canvas
White — content surfaces
Ink — primary text
Body / Muted — supporting information
Rule

The detail page should not introduce a unique color palette for each business unit unless a real brand architecture requires it.

Asterra should remain visually coherent as one group.

31. Imagery Art Direction

The imagery should become more specific as the page becomes more specific.

Hero

Business identity.

Overview

Business environment.

Capabilities

Technical/process detail.

Operations

Facility/workforce/process.

Projects

Actual evidence.

This creates a visual narrative:

Identity → Capability → Operation → Evidence

32. Motion

Recommended:

Subtle hero image reveal
Capability item hover
Image transitions
Project hover
Link/arrow movement
Section reveal

Avoid:

Scroll-jacking
Constant parallax
Large looping animations
Animated statistics without purpose
Motion-dependent content

Reduced-motion users must receive a fully usable static experience.

33. Accessibility

Required:

One H1
Semantic heading hierarchy
Accessible breadcrumbs
Descriptive links
Visible focus states
Keyboard navigation
Appropriate alt text
Sufficient contrast
Touch-friendly controls
Reduced-motion support
Important

Technical information must remain accessible as text.

Do not put critical capability or specification information only inside imagery.

34. SEO
URL pattern
/business/[business-unit-slug]

Example:

/business/industrial-manufacturing

The exact slug must come from the approved content model.

Title direction

[Business Unit Name] | Asterra Manufacturing Group

Meta description

Should describe:

What the business provides
Relevant market/capability
Asterra relationship
Internal links

Each detail page should link to:

Business listing
Relevant projects
Relevant resources
Related businesses
Contact / inquiry
35. Structured Data

Depending on the actual content model, structured data may support:

Organization
BreadcrumbList
Product
Service
LocalBusiness
Article

Only use a schema type that accurately represents the content.

Do not label a business unit as a separate legal organization unless that relationship is actually established.

36. Performance
Priority
Header
Hero
Primary content
Capability section
Operations imagery
Project imagery
Lower-page media
Requirements
Responsive hero images
Optimized photography
Lazy loading below-the-fold images
Explicit image dimensions
Controlled font weights
Lightweight interaction
No unnecessary video backgrounds
No unnecessary third-party embeds
37. Content Integrity

Asterra remains a fictional example client.

Therefore:

Never invent
Legal business entities
Subsidiaries
Product specifications
Production capacity
Facilities
Employee numbers
Markets
Customers
Certifications
Project results
Revenue
Geographic claims
Placeholder content

During design, use clearly identifiable placeholders.

The page structure must be able to demonstrate the intended experience without presenting invented information as verified corporate content.

38. Content Model

Conceptually, each business unit should provide structured data:

businessUnit
├── id
├── name
├── slug
├── shortDescription
├── positioningStatement
├── overview
├── capabilities[]
├── offerings[]
├── markets[]
├── operations[]
├── projects[]
├── certifications[]
├── relatedBusinessUnits[]
├── heroImage
└── status

The actual implementation should follow the established Package 3 architecture and content model.

Important

The UI should not hardcode business-unit content inside page components.

39. Component Mapping
Shared components
Header
Footer
Breadcrumb
PageHero
SectionIntro
Button
ImageBlock
ProjectCard
CTASection
Detail-page components
BusinessOverview
CapabilityList
OfferingList
MarketList
OperationsFeature
EvidenceProjects
CredentialsList
RelatedBusinesses

The same detail template should support multiple Asterra business units.

40. AI Implementation Guidance

An AI design or coding agent should:

Treat Package 3 as the governing package framework.
Use Universal Design Analysis principles for hierarchy, spacing, evidence, accessibility, and reproducibility.
Use Template 01 — Corporate Authority as the structural template.
Use the Asterra Design Manual as the client-specific visual source of truth.
Preserve the Asterra evergreen / mineral-teal / warm-ivory identity.
Preserve IBM Plex Sans and IBM Plex Serif usage.
Treat this as a reusable business-unit detail template.
Never create a separate visual system for each business.
Make the business identity immediately understandable.
Prioritize evidence over unsupported marketing language.
Keep capability content scannable.
Do not turn every section into cards.
Use projects as evidence rather than filler.
Omit sections that have no real content instead of inventing content.
Recompose intentionally for mobile.
Maintain accessibility and performance.
Use structured content rather than hardcoded client data.
Preserve consistent navigation back to the Business listing.
Keep the page visually related to the Homepage, About, and Business Listing pages.
Do not introduce Stonebridge styling or construction-specific motifs.
41. Anti-Patterns

Do not introduce:

Generic service-card grids
SaaS dashboards
Excessive rounded cards
Icon-heavy capability sections
Giant unsupported statistics
Fake technical specifications
Fake certifications
Fake projects
Generic office stock photography
Product catalogs disguised as business pages
Excessive dark sections
Heavy gradients
Excessive animation
Business-specific colors without brand justification
Construction-specific visual language
Stonebridge navy/copper styling
Long unstructured corporate paragraphs
42. QA Checklist
Content
 Business identity is immediately clear.
 Business overview explains its role within Asterra.
 Capabilities are understandable.
 Products/services/solutions are appropriately labeled.
 Markets/applications are relevant.
 Operations content provides tangible evidence.
 Projects are genuinely related to the business.
 Credentials are verified.
 Related businesses are genuinely relevant.
 CTA is appropriate to the business.
 No fictional claims are presented as facts.
Visual
 Asterra visual identity is preserved.
 Detail page feels more specific than the Business listing.
 Hero clearly establishes business identity.
 Editorial hierarchy is strong.
 Capability sections avoid generic cards.
 Imagery communicates the actual business.
 Evergreen/teal/ivory system remains consistent.
 Typography follows the Asterra system.
 No Stonebridge visual language appears.
Responsive
 Desktop uses the conceptual 12-column grid.
 Tablet compositions simplify correctly.
 Mobile sections stack in logical reading order.
 Images crop intentionally.
 No horizontal overflow exists.
 CTAs remain usable.
 Technical content remains readable.
Accessibility
 One H1 exists.
 Heading hierarchy is semantic.
 Breadcrumbs are accessible.
 All important links have descriptive labels.
 Keyboard navigation works.
 Focus states are visible.
 Images have correct alt treatment.
 Contrast is sufficient.
 Reduced-motion behavior works.
Performance
 Hero media is optimized.
 Images use responsive sizes.
 Lower-page media is deferred appropriately.
 Font weights are controlled.
 Layout shifts are minimized.
 No unnecessary third-party media is loaded.
43. Completion Criteria

The Business Unit Detail specification is complete when:

The reusable detail-page structure is defined.
The relationship to the Business Listing is clear.
Hero identity is defined.
Business overview is defined.
Capabilities are defined.
Products/services/solutions presentation is defined.
Markets/applications are defined.
Operations/facilities evidence is defined.
Projects/evidence are defined.
Quality/credentials behavior is defined.
Related-business navigation is defined.
Final CTA is defined.
Responsive behavior is defined.
Accessibility requirements are defined.
SEO requirements are defined.
Performance requirements are defined.
Content integrity rules are explicit.
Component and data-model considerations are defined.
AI implementation guidance is explicit.
Anti-patterns and QA requirements are explicit.
44. Relationship to Previous Pages

The Asterra commercial-information flow is now:

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
How does it operate?
What evidence supports it?
        ↓
PROJECT DETAIL
Where has this capability been applied?
        ↓
CONTACT / INQUIRY
How can we engage?

This creates a clear progression from corporate orientation → business discovery → capability evaluation → evidence → engagement.

45. Next Page

The next specification should be:

Asterra Projects Listing Page Specification

This page should introduce the project portfolio and demonstrate Asterra's capabilities through evidence, without duplicating the individual Business Unit Detail pages.