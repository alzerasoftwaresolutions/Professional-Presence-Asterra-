# Asterra Careers / Opportunities Listing — Detailed Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Page:** Careers / Opportunities Listing
**Route:** `/careers`
**Status:** Design & implementation specification

This specification focuses only on the Careers listing experience. Global design, SEO, accessibility, and architectural rules are inherited from the established project documents.

---

# 1. Page Purpose

The Careers page introduces Asterra as an organization to potential candidates and provides a clear path to available opportunities.

The page should communicate:

* Why someone might want to work with Asterra.
* What type of people Asterra needs.
* What opportunities are currently available.
* How candidates can explore a position.
* How to apply.

The page should feel like an extension of Asterra's corporate identity, **not a generic recruitment portal**.

---

# 2. Page Structure

```text id="j5wyq6"
Careers
│
├── Careers Hero
│
├── Why Asterra
│
├── Working at Asterra
│
├── Current Opportunities
│   ├── Filters
│   └── Job Cards
│
├── General Application
│
└── Careers CTA
```

The **Why Asterra** and **Working at Asterra** sections can be combined if the available content is limited.

---

# 3. Careers Hero

## Eyebrow

`CAREERS`

## H1

Recommended direction:

> **Build meaningful work with Asterra.**

Alternative:

> **Grow your career with Asterra.**

The final copy should reflect Asterra's actual employment proposition.

## Supporting Copy

Example:

> We are looking for people who bring expertise, curiosity, responsibility, and a commitment to doing meaningful work.

The copy should avoid generic recruitment language unless it reflects the actual organization.

---

# 4. Hero Composition

Preferred:

```text id="0osd9g"
┌──────────────────────────────────────────────────────────────┐
│ CAREERS                                                      │
│                                                              │
│ BUILD MEANINGFUL          Workplace / people image           │
│ WORK WITH ASTERRA.                                           │
│                                                              │
│ Supporting copy                                              │
│                                                              │
│ [View Opportunities]                                         │
└──────────────────────────────────────────────────────────────┘
```

The visual should communicate **people, work, environment, or purpose**, rather than stock-style recruitment imagery.

---

# 5. Hero CTA

Primary:

**View Opportunities**

Destination:

```text id="eb5w7j"
/careers#opportunities
```

If there are no current vacancies, the CTA should instead direct users to the general application mechanism if one exists.

---

# 6. Why Asterra

This section explains the employee proposition.

Recommended heading:

> **Why build your career here?**

Potential content pillars:

```text id="8c0c4r"
Meaningful Work
Work on projects and responsibilities that create real value.

Professional Growth
Develop expertise through practical experience and collaboration.

Collaboration
Work across teams and areas of expertise.

Responsibility
Contribute to work carried out with care and accountability.
```

Only use claims that Asterra can genuinely support.

---

# 7. Working at Asterra

Where appropriate, provide a stronger cultural section.

Possible structure:

```text id="2z7muw"
WORKING AT ASTERRA

[Large image]

Short editorial statement about:
- Collaboration
- Professional standards
- Learning
- Responsibility
- Working environment
```

This section should be concise.

The Careers page should not become a long corporate culture essay.

---

# 8. Employee Experience

If Asterra has genuine employee programs, they can be represented here.

Potential examples:

* Professional development
* Training
* Mentorship
* Team collaboration
* Career progression
* Safety
* Employee wellbeing

Do not invent benefits.

---

# 9. Current Opportunities

This is the primary functional section.

Anchor:

```text id="n0of6a"
#opportunities
```

Heading:

> **Current opportunities**

Supporting text:

> Explore current roles across Asterra.

---

# 10. Job Listing

Desktop:

```text id="dktg0a"
CURRENT OPPORTUNITIES

┌────────────────────────────────────────────────────────────┐
│ Senior Civil Engineer                         Engineering   │
│ Addis Ababa · Full-time                                   │
│                                                        →   │
├────────────────────────────────────────────────────────────┤
│ Project Manager                              Operations     │
│ Addis Ababa · Full-time                                   │
│                                                        →   │
└────────────────────────────────────────────────────────────┘
```

The listing should prioritize clarity over visual complexity.

---

# 11. Job Card Information

Minimum:

```text id="a4t8rv"
Job Title
Department / Business Unit
Location
Employment Type
```

Optional:

```text id="w0n5zq"
Closing Date
Experience Level
Remote / On-site
```

Only display fields that Asterra actually manages.

---

# 12. Job Card Interaction

Each opportunity should lead to a dedicated job detail page.

```text id="k4f8y8"
/careers
   ↓
/careers/[job-slug]
```

Example:

```text id="l1l5yh"
/careers/senior-civil-engineer
```

The whole card may be clickable, but it must remain keyboard accessible.

---

# 13. Job Categories

If Asterra has enough positions, filtering may be provided.

Potential filters:

```text id="nyzj9h"
Department
Location
Employment Type
```

Do not create filters for every possible job attribute.

For a small number of vacancies, filtering should be omitted.

---

# 14. Filter Behavior

Example:

```text id="78ykgm"
Department
[All Departments ▾]

Location
[All Locations ▾]

Employment Type
[All Types ▾]
```

The result count should update clearly.

Example:

> **8 opportunities**

---

# 15. URL State

Where filtering is implemented, preserve filter state in the URL where practical.

Example:

```text id="r6ylsk"
/careers?department=engineering
```

This makes filtered views shareable and easier to restore.

---

# 16. No Open Positions

If there are no vacancies:

```text id="zpx0wu"
NO CURRENT OPENINGS

There are currently no listed opportunities.

If you would like to introduce yourself to the Asterra team,
you can submit a general application.
```

CTA:

**Submit a General Application →**

Only provide this option if Asterra actually accepts general applications.

---

# 17. General Application

This section is optional but valuable when Asterra accepts speculative applications.

Heading:

> **Don't see the right opportunity?**

Supporting copy:

> Tell us about your experience and the kind of work you are interested in.

CTA:

**Submit Your Profile**

Possible destination:

```text id="mbr6pd"
/careers/general-application
```

If no general application process exists, omit this section.

---

# 18. Careers CTA

The final CTA should be understated.

Example:

> **Find your next opportunity at Asterra.**

**View Current Opportunities**

Avoid multiple competing recruitment CTAs.

---

# 19. Job Detail Relationship

The Careers listing should act as the discovery layer.

```text id="w6o8aw"
CAREERS
   │
   ├── Job A
   ├── Job B
   ├── Job C
   │
   └── General Application
```

Individual job specifications will define:

* Responsibilities
* Requirements
* Qualifications
* Location
* Employment type
* Application process
* Closing date
* Contact/application method

---

# 20. Job Data Model

Minimum:

```text id="qpgbqb"
job
├── id
├── title
├── slug
├── department
├── location
├── employmentType
├── status
└── publishedDate
```

Recommended:

```text id="v7q0x5"
experienceLevel
closingDate
businessUnit
summary
```

---

# 21. Job Status

Recommended internal states:

```text id="v2y8c0"
DRAFT
PUBLISHED
CLOSED
ARCHIVED
```

Only active `PUBLISHED` positions should appear in the main listing.

---

# 22. Closing Positions

When a job closes:

```text id="82kqwb"
Published
    ↓
Closing
    ↓
Closed
```

The public listing should remove closed positions from the active opportunities list.

The dedicated job URL should not automatically become a broken page.

Depending on the situation, it can:

* Display that the role is closed.
* Suggest similar opportunities.
* Redirect when appropriate.

---

# 23. Careers Content Strategy

The page should communicate three layers:

```text id="ub9z6w"
WHY ASTERRA
      ↓
WHAT WORKING HERE IS LIKE
      ↓
WHAT OPPORTUNITIES ARE AVAILABLE
```

This prevents the page from feeling like a simple job database.

---

# 24. Photography Direction

Preferred imagery:

* Real Asterra employees
* Real work environments
* Real projects
* Teams collaborating
* Professional environments
* Appropriate workplace details

Avoid generic stock photography whenever possible.

---

# 25. Responsive Design

## Desktop

Use a two-part experience:

```text id="0b3w3j"
Career Story
        ↓
Opportunity Listing
```

The job list should have enough horizontal space to scan information quickly.

## Mobile

```text id="d2q9fq"
Job Title
Department
Location
Employment Type
→
```

Each job should remain easy to scan without opening it first.

---

# 26. SEO — Page Intent

The Careers page serves primarily:

* Branded employment searches
* Job-related searches
* Organization discovery
* Recruitment intent

The main page should not attempt to rank for every individual job query.

Individual job pages provide the more specific search destination.

---

# 27. SEO — Title

Recommended:

```text id="1o4wq6"
Careers at Asterra | Opportunities & Jobs
```

Adjust to the actual organization name and recruitment strategy.

---

# 28. SEO — Meta Description

Recommended structure:

> Explore career opportunities at Asterra and learn about our work, people, and current openings.

---

# 29. SEO — Internal Linking

Relevant links may include:

```text id="1fzjbp"
Careers
├── About
├── Business Units
├── Projects
├── Insights
└── Job Details
```

Project and capability pages can also link to Careers where employee expertise is relevant.

---

# 30. SEO — Job URLs

Job URLs should be descriptive and stable.

Example:

```text id="9ewpbt"
/careers/senior-civil-engineer
```

Avoid:

```text id="6xv9fo"
/careers/job?id=184
```

unless there is a technical reason that cannot be avoided.

---

# 31. SEO — Job Structured Data

For individual job detail pages, `JobPosting` structured data may be appropriate when the page genuinely represents a public job opportunity.

The structured data must match:

* Job title
* Organization
* Location
* Employment type
* Valid dates
* Application information

The listing page itself should not be treated as a `JobPosting`.

---

# 32. SEO — Expired Jobs

When a position closes:

* Update the page state.
* Remove it from active listings.
* Update structured data appropriately.
* Avoid leaving expired job information presented as an active vacancy.

The exact handling should depend on the organization's recruitment workflow.

---

# 33. Accessibility

Careers-specific requirements:

* Filters must be keyboard accessible.
* Job cards must have clear accessible names.
* Job status must not rely only on color.
* Location and employment type must be readable as text.
* Empty states must be accessible.
* Focus should remain logical after filtering.

---

# 34. Performance

The Careers listing should remain lightweight.

Avoid:

* Large video backgrounds.
* Heavy recruitment widgets unless necessary.
* Unoptimized employee galleries.
* Excessive third-party recruitment scripts.

If an external recruitment platform is used, it should not unnecessarily compromise the primary page experience.

---

# 35. Component Architecture

Page-specific components:

```text id="x8fujh"
CareersHero
WhyAsterra
WorkplaceSection
OpportunitySection
OpportunityFilters
OpportunityList
OpportunityCard
EmptyOpportunities
GeneralApplicationCTA
CareersCTA
```

---

# 36. Implementation Rules

The implementation should:

1. Use the established Asterra design system.
2. Keep the career story concise.
3. Make current opportunities easy to scan.
4. Avoid unnecessary filters for small datasets.
5. Keep job URLs stable.
6. Separate active and closed positions.
7. Ensure filtering remains accessible.
8. Avoid hardcoded job data in UI components.
9. Allow the data source to evolve.
10. Keep recruitment functionality proportionate to Package 3.

---

# 37. Anti-Patterns

Do not create:

* Generic recruitment-site aesthetics.
* Fake employee testimonials.
* Invented company benefits.
* Excessive job filters.
* Empty career sections filled with generic text.
* Expired jobs presented as active.
* Unnecessary application complexity.
* Massive employee galleries.
* Recruitment widgets that dominate the page.
* Claims about workplace culture that cannot be supported.

---

# 38. Page-Specific QA

### Content

* [ ] Career proposition is accurate.
* [ ] Employee benefits are verified.
* [ ] Workplace claims are legitimate.
* [ ] Job information is current.
* [ ] Locations are accurate.
* [ ] Employment types are correct.
* [ ] Closing dates are correct.

### Jobs

* [ ] Active positions display correctly.
* [ ] Closed positions are removed from active listings.
* [ ] Job cards link to the correct detail page.
* [ ] Filters return correct results.
* [ ] Empty state works.
* [ ] General application works if enabled.

### SEO

* [ ] Careers title is unique.
* [ ] Meta description is useful.
* [ ] Job URLs are descriptive.
* [ ] Individual jobs have appropriate metadata.
* [ ] JobPosting structured data is considered on detail pages.
* [ ] Expired positions are handled correctly.

### UX

* [ ] Opportunities are easy to scan.
* [ ] Filters are understandable.
* [ ] CTA hierarchy is clear.
* [ ] Mobile experience works.
* [ ] Job cards are keyboard accessible.

---

# 39. Completion Criteria

The Careers Listing page is complete when:

* Career proposition is defined.
* Hero is defined.
* Employee-value content is defined.
* Opportunity listing is defined.
* Job card structure is defined.
* Filtering behavior is defined.
* Empty state is defined.
* General application path is defined where applicable.
* Job data model is defined.
* Job lifecycle is defined.
* SEO requirements are defined.
* Job structured-data direction is defined.
* Responsive behavior is defined.
* Accessibility requirements are defined.
* Component architecture is defined.
* QA requirements are defined.

---

# Updated Architecture

```text id="m5q4w9"
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
│   └── Insight / Article Detail              ✅
│
├── CAREERS
│   ├── Careers / Opportunities Listing       ✅ CURRENT
│   └── Job Detail                            ○ OPTIONAL
│
└── CONTACT
    └── Corporate Inquiry                     ✅
```

### Remaining core page

**Asterra Job Detail — Detailed Page Specification** is optional. If Package 3 is intended to remain a professional corporate presence rather than a recruitment platform, we can stop here and treat individual job detail as an optional extension.
