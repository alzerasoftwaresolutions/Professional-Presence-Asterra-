# Asterra — Careers / Opportunities Listing Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Careers / Opportunities Listing
**Status:** Implementation-ready visual specification

**References:**

* `Asterra Careers / Opportunities Listing — Detailed Page Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Careers page presents Asterra as an organization people may want to work for and provides a clear path to discover current opportunities.

The page should communicate:

* Why someone might work at Asterra
* What kind of people and capabilities the organization needs
* Available opportunities
* How to explore individual roles
* How to apply or make an inquiry

The experience should feel **professional, credible, and human**, rather than like a generic recruitment portal.

---

# 2. Overall Page Structure

```text id="m7q3v8"
CAREERS
│
├── Global Header
│
├── Careers Hero
│
├── Why Asterra / Working Here
│
├── Culture / People
│
├── Opportunities
│   ├── Filters
│   └── Job Cards
│
├── General Application (Optional)
│
├── Careers CTA
│
└── Global Footer
```

Sections are content-dependent.

---

# 3. Careers Hero

The hero should immediately communicate the purpose of the page.

```text id="q8m4x2"
CAREERS

Build meaningful work with Asterra.

Explore opportunities to contribute,
learn, and grow.

[View opportunities ↓]
```

The hero should be more human than the corporate About hero while remaining within the Asterra design system.

---

# 4. Hero Visual Direction

Use authentic imagery when available:

* Asterra team
* Workplace
* Project environment
* Employees collaborating
* Professional working environment

Avoid generic corporate stock imagery where possible.

---

# 5. Careers Positioning

The hero should answer:

> Why should a prospective candidate continue exploring?

The supporting statement should communicate the genuine employment proposition.

Do not make unsupported claims about:

* Company culture
* Benefits
* Career growth
* Work environment
* Diversity
* Compensation

---

# 6. Why Asterra

An introductory section can communicate what working at Asterra represents.

```text id="v5k9p3"
WHY ASTERRA

Large statement

Short explanation.

01  Opportunity
02  Collaboration
03  Development
```

The number of principles should reflect actual company values.

---

# 7. Culture / People Section

Optional.

If authentic photography and content exist:

```text id="j6q3m8"
LIFE AT ASTERRA

Image                  Description
██████████             How teams work
██████████
```

The section should show real organizational culture rather than generic workplace imagery.

---

# 8. Opportunities Section

This is the primary functional section.

```text id="c8n5v2"
CURRENT OPPORTUNITIES

Search / Filters

┌──────────────────────────────────────┐
│ Job Title                            │
│ Department · Location · Type         │
│ Short summary                        │
│ View opportunity →                   │
└──────────────────────────────────────┘
```

The available positions should be immediately scannable.

---

# 9. Job Card Structure

Each opportunity should contain:

```text id="x7m4q8"
Job Title
Department
Location
Employment Type

Short description

View opportunity →
```

Optional:

* Closing date
* Experience level

Only when this information is available and maintained.

---

# 10. Job Card Hierarchy

```text id="p5v8k3"
JOB TITLE
   ↓
DEPARTMENT / LOCATION
   ↓
EMPLOYMENT TYPE
   ↓
SHORT DESCRIPTION
   ↓
VIEW OPPORTUNITY
```

The job title should be the dominant element.

---

# 11. Job Listing Layout

For a small number of roles:

```text id="n6q3m9"
Full-width stacked list
```

For a larger number:

```text id="r4k8v2"
┌───────────────┐ ┌───────────────┐
│ Job           │ │ Job           │
│ Department    │ │ Department    │
│ Location      │ │ Location      │
└───────────────┘ └───────────────┘
```

A stacked list is generally preferable when comparing job information.

---

# 12. Filters

Filters are useful when there are enough positions to make browsing difficult.

Potential filters:

```text id="m8p4c7"
Department
Location
Employment Type
Experience Level
```

Do not create filters with only one or two possible values.

---

# 13. Search

Optional.

Use when the organization has a larger recruitment library.

```text id="q5v7n3"
Search opportunities
[________________________]
```

Search should complement filters rather than replace them.

---

# 14. Mobile Filters

On mobile:

```text id="j7m3x9"
[ Search ]

[ Filter opportunities ]
```

Use a compact filter interface.

Do not allow filtering controls to consume most of the viewport.

---

# 15. No Opportunities State

When there are no current openings:

```text id="v8q4m6"
NO CURRENT OPENINGS

There are currently no listed opportunities.

[Make a general inquiry →]
```

If Asterra accepts speculative applications, this should be clearly explained.

---

# 16. General Application

Optional.

If Asterra accepts general applications:

```text id="x3k8p5"
DON'T SEE THE RIGHT OPPORTUNITY?

Tell us about your experience and
how you could contribute to Asterra.

[Submit your profile →]
```

Only include this if an actual submission workflow exists.

---

# 17. Careers Content Hierarchy

Recommended:

```text id="q6m9v4"
CAREERS
   ↓
WHY ASTERRA
   ↓
LIFE AT ASTERRA
   ↓
CURRENT OPPORTUNITIES
   ↓
GENERAL APPLICATION
```

The actual order can change depending on available content.

---

# 18. Relationship to Job Detail

The architecture should be:

```text id="c4v7m8"
CAREERS LISTING
       ↓
JOB DETAIL
       ↓
JOB REQUIREMENTS
       ↓
APPLICATION
```

The listing page should provide enough information to decide whether to open a position.

---

# 19. Job Detail Link

Use descriptive links:

**View Mechanical Engineer Opportunity →**

rather than:

**Read More →**

This improves clarity and accessibility.

---

# 20. Responsive Design

### Desktop

Use:

* Large careers hero
* Editorial culture section
* Structured opportunity listing
* Optional filter sidebar

### Tablet

Reduce columns and collapse filter layout.

### Mobile

Use:

```text id="k8m3q5"
Hero
 ↓
Why Asterra
 ↓
Culture
 ↓
Filters
 ↓
Job List
 ↓
General Application
```

---

# 21. Mobile Job Cards

```text id="p6v2x8"
┌──────────────────────────┐
│ Job Title                │
│ Department               │
│ Location                 │
│ Employment Type          │
│                          │
│ Short description        │
│                          │
│ View opportunity →       │
└──────────────────────────┘
```

Cards should be easy to scan without excessive visual decoration.

---

# 22. Typography

Recommended hierarchy:

```text id="n4q8m7"
CAREERS
   ↓
Hero statement
   ↓
Section heading
   ↓
Job title
   ↓
Metadata
   ↓
Description
```

Employment metadata should remain visually secondary.

---

# 23. Visual Tone

Compared with Projects and Insights:

```text id="s8m3k5"
Projects → Evidence
Insights → Knowledge
Careers → People
```

The Careers page can therefore use slightly warmer imagery and more human content while maintaining the corporate visual system.

---

# 24. Accessibility

Required:

* Semantic headings
* Accessible filters
* Keyboard navigation
* Visible focus states
* Descriptive job links
* Proper form labels
* Sufficient contrast
* Accessible application controls

Filters must communicate active states to assistive technologies.

---

# 25. SEO Structure

Recommended:

```text id="v7q4m2"
H1
Careers

H2
Why Asterra

H2
Life at Asterra

H2
Current Opportunities

H3
Job Title
```

Individual job pages should use the job title as the primary H1.

---

# 26. Search Intent

The Careers page primarily supports:

* Employment search
* Company research
* Job discovery
* Employer evaluation

Content should therefore provide practical information rather than generic recruitment language.

---

# 27. Metadata

The Careers listing page should have:

* Unique title
* Meta description
* Canonical URL

Individual job pages should have unique metadata.

Job pages should not remain indexed indefinitely after positions are closed without an appropriate content strategy.

---

# 28. Structured Data

For individual job pages, **JobPosting structured data** may be appropriate when the position meets the requirements for that markup.

The data must match the visible job information.

Expired jobs should be handled correctly.

---

# 29. Internal Linking

Recommended:

```text id="m5x8q3"
Careers
  ↓
Job Detail
  ↓
Application

Careers
  ↓
About
  ↓
Leadership

Careers
  ↓
Insights
```

This allows candidates to research the organization before applying.

---

# 30. Performance

Prioritize:

* Optimized employee/workplace photography
* Responsive images
* Lazy loading below-fold imagery
* Minimal scripts
* Efficient filtering

The careers page should remain fast even when many positions exist.

---

# 31. Motion

Keep motion restrained.

Suitable:

```text id="q3v7m8"
Hero entrance
Job card hover
Filter transition
CTA interaction
```

Avoid excessive recruitment-style animation.

---

# 32. Content Integrity

Never invent:

* Job openings
* Salaries
* Benefits
* Company policies
* Culture claims
* Career progression
* Qualifications
* Application deadlines

All recruitment information must come from approved Asterra sources.

---

# 33. Component Map

```text id="r8m5k2"
CareersListingPage
│
├── Header
│
├── CareersHero
│
├── WhyAsterra
│
├── OptionalCultureSection
│
├── OpportunitiesSection
│   ├── OpportunitySearch
│   ├── OpportunityFilters
│   └── OpportunityList
│       └── OpportunityCard
│
├── OptionalGeneralApplication
│
├── CareersCTA
│
└── Footer
```

---

# 34. Relationship to Asterra Architecture

Careers adds the **people layer** to the corporate website:

```text id="x6q3m8"
ABOUT
  ↓
WHO WE ARE

BUSINESS
  ↓
WHAT WE DO

PROJECTS
  ↓
WHAT WE HAVE DONE

INSIGHTS
  ↓
WHAT WE KNOW

CAREERS
  ↓
WHO CAN JOIN US

CONTACT
  ↓
HOW TO ENGAGE
```

This creates a complete corporate narrative.

---

# 35. Quality Gate

Before implementation:

### Employer proposition

* Is the reason to work at Asterra genuine and clear?

### Opportunities

* Are available roles easy to discover?

### Information

* Are job details accurate?

### UX

* Can candidates quickly find relevant roles?

### Mobile

* Is job browsing easy on small screens?

### SEO

* Are job pages structured correctly?

### Accessibility

* Are filters and application controls accessible?

### Content integrity

* Are all recruitment claims verified?

---

# 36. Final Visual Direction

```text id="k4p8m2"
                   CAREERS
                      │
                      ↓
                  ASTERRA
                      │
                      ↓
                    PEOPLE
                      │
                      ↓
                 OPPORTUNITY
                      │
                      ↓
                  DISCOVERY
                      │
                      ↓
                 APPLICATION
```

The visual language should be:

**Human + Professional + Clear + Credible**

The Careers experience should make candidates understand **both the opportunity and the organization behind it**.

---

# 37. Status

**Asterra Careers / Opportunities Listing — Visual Specification: APPROVED**

## Next

**`Asterra Job Detail — Visual Specification`**

