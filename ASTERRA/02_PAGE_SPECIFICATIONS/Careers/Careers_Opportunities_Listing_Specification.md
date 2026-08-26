# Asterra Careers — Opportunities Listing Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Example Client:** Asterra Manufacturing Group
**Page:** Careers / Opportunities Listing
**Route:** `/careers`
**Version:** 1.0
**Status:** Design & implementation specification

> This specification follows the established Package 3 architecture, Template 01 — Corporate Authority, Asterra Design Manual, Universal Design Analysis, and the SEO Analytics & Optimization Playbook. SEO requirements are limited to what is relevant to a corporate careers page.

---

# 1. Page Purpose

The Careers page communicates why someone should consider working with Asterra and provides a clear path to discover current opportunities.

The page should answer:

> **Why work at Asterra, what kind of people does Asterra need, and how can I apply?**

It should balance:

* Employer credibility
* Company culture
* Professional development
* Available opportunities
* Clear application paths

This is not intended to become a full recruitment platform unless that functionality is explicitly included in the package.

---

# 2. Page Objectives

The page should:

* Present Asterra as a credible employer.
* Communicate the organization's working environment.
* Explain what employees can expect.
* Highlight relevant career areas.
* Display available opportunities where applicable.
* Provide a clear application process.
* Link careers to the broader Asterra story.
* Support search discovery for legitimate employment queries.
* Avoid making unsupported employer claims.

---

# 3. Page Position in Architecture

```text
Homepage
   ↓
Careers
   ├── Why Asterra
   ├── Career Areas
   ├── Open Opportunities
   └── Application
```

If individual job pages are implemented:

```text
Careers
   ↓
Job Listing
   ↓
Job Detail
   ↓
Application
```

---

# 4. Primary Audiences

* Experienced professionals
* Early-career professionals
* Technical specialists
* Engineers
* Operations professionals
* Administrative professionals
* Potential interns or trainees
* Candidates researching Asterra

---

# 5. Page Structure

```text
Global Header
      ↓
Breadcrumb
      ↓
01 Careers Hero
      ↓
02 Why Asterra
      ↓
03 Working at Asterra
      ↓
04 Career Areas
      ↓
05 Current Opportunities
      ↓
06 How We Hire
      ↓
07 Candidate CTA
      ↓
Global Footer
```

Sections should be removed or simplified if Asterra does not have verified content for them.

---

# 6. Global Header

Use the existing Asterra global header.

```text
[ASTERRA LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request an Inquiry]
```

The Careers navigation item should have a clear active state on this page.

---

# 7. Breadcrumb

Recommended:

```text
Home / Careers
```

For individual opportunities:

```text
Home / Careers / [Job Title]
```

---

# 8. Section 01 — Careers Hero

## Objective

Immediately communicate that this is the organization's career destination.

Recommended:

### Eyebrow

`CAREERS`

### H1

> **Build meaningful work with Asterra.**

Alternative:

> **Careers at Asterra**

### Supporting Copy

A concise statement describing the type of people Asterra is looking for and the kind of work they can contribute to.

The copy should be specific to Asterra rather than generic employer-brand language.

---

# 9. Hero Composition

Preferred:

```text
┌──────────────────────────────────────────────────────────────┐
│ CAREERS                                                       │
│                                                               │
│ BUILD MEANINGFUL WORK        Large workplace/project image    │
│ WITH ASTERRA.                                                │
│                                                               │
│ Supporting copy                                               │
│                                                               │
│ [View Opportunities]                                          │
└──────────────────────────────────────────────────────────────┘
```

The hero should feel consistent with the corporate identity rather than like a separate recruitment website.

---

# 10. Hero CTA

Primary:

**View Opportunities**

Secondary:

**Learn About Asterra**

The primary CTA should scroll or route to current opportunities.

---

# 11. Section 02 — Why Asterra

## Objective

Explain why a qualified candidate should consider Asterra.

Recommended heading:

> **Why build your career here?**

Content can address verified themes such as:

* Meaningful projects
* Professional development
* Technical excellence
* Collaboration
* Responsibility
* Opportunity to contribute
* Industry exposure

Only use themes that reflect the actual organization.

---

# 12. Why Asterra Layout

Recommended editorial layout:

```text
┌──────────────────────────────┬─────────────────────────────┐
│                              │ WHY ASTERRA                  │
│      Workplace Image         │                             │
│                              │ Meaningful Work              │
│                              │ Collaboration                │
│                              │ Development                  │
│                              │ Responsibility               │
└──────────────────────────────┴─────────────────────────────┘
```

Avoid presenting generic corporate values as disconnected icon cards.

---

# 13. Career Value Propositions

If appropriate, use 3–4 focused themes.

Example:

```text
01
Meaningful Work

Contribute to projects that have practical value.

02
Grow Through Experience

Develop your skills through real project environments.

03
Work Across Disciplines

Collaborate with professionals across different capabilities.

04
Take Responsibility

Contribute directly to the quality and success of the work.
```

These are examples of structure, not approved Asterra claims.

---

# 14. Section 03 — Working at Asterra

## Objective

Provide a more human understanding of the organization.

Recommended heading:

> **A workplace built around people and performance.**

Content can discuss:

* Collaboration
* Team structure
* Learning
* Project environments
* Professional standards
* Leadership
* Workplace culture

The page should avoid exaggerated culture language.

---

# 15. Workplace Visual Story

Use actual Asterra imagery where available.

Preferred:

1. Employees working
2. Project teams
3. Technical environments
4. Facilities
5. Meetings
6. Professional interactions

Avoid generic stock-office imagery if real photography is available.

---

# 16. Employee Photography

Images should represent the actual organization.

If employee photography is used:

* Obtain appropriate permission.
* Avoid exposing sensitive information.
* Avoid staged imagery that misrepresents the workplace.
* Use consistent image treatment.

---

# 17. Section 04 — Career Areas

## Objective

Help candidates identify where their skills may fit.

Recommended:

```text
CAREER AREAS

Engineering
Operations
Project Management
Technical Services
Finance & Administration
Sales & Business Development
```

The actual categories must be based on Asterra's organizational structure.

---

# 18. Career Area Card

Each card can contain:

```text
CAREER AREA

Engineering

Short description of the type of work.

Explore Roles →
```

Avoid excessive text.

---

# 19. Career Area Relationship

Career areas should connect logically to Asterra's business structure.

Example:

```text
Career Area
     ↓
Business Unit
     ↓
Projects
```

This helps candidates understand where their potential role sits within the organization.

---

# 20. Section 05 — Current Opportunities

## Objective

Provide a clear view of currently available roles.

Recommended:

```text
CURRENT OPPORTUNITIES

┌───────────────────────────────────────────────────────┐
│ Senior Mechanical Engineer                            │
│ Engineering · Addis Ababa                             │
│ Full-time                                      →      │
├───────────────────────────────────────────────────────┤
│ Project Coordinator                                   │
│ Operations · Addis Ababa                              │
│ Full-time                                      →      │
├───────────────────────────────────────────────────────┤
│ Technical Specialist                                  │
│ Technical Services · [Location]                       │
│ Full-time                                      →      │
└───────────────────────────────────────────────────────┘
```

Only show real, currently available positions.

---

# 21. Opportunity Metadata

Recommended:

```text
JOB TITLE
DEPARTMENT / CAREER AREA
LOCATION
EMPLOYMENT TYPE
POSTED DATE
```

Optional:

```text
EXPERIENCE LEVEL
DEADLINE
```

Only display fields that are actively maintained.

---

# 22. Job Status

Possible:

```text
OPEN
CLOSED
```

Closed jobs should generally be removed from the active opportunities listing.

If archived jobs are valuable for recruitment transparency, place them in a separate archive.

---

# 23. No Current Opportunities

If there are no active vacancies:

```text
NO CURRENT OPENINGS

There are no open positions at this time.

Please check back as new opportunities become available.
```

Optional:

**Send Your CV**

Only offer speculative applications if Asterra actually accepts them.

---

# 24. Job Filtering

For a small number of vacancies, do not over-engineer filtering.

If the number grows, use:

```text
Career Area
Location
Employment Type
```

Avoid:

* Excessive filter combinations
* Complex recruitment dashboards
* Filters with no meaningful results

---

# 25. Job Search

A search field is optional.

Use it only if the number of opportunities makes search useful.

Example:

```text
[ Search roles........................ ] [Search]
```

Do not add search simply because other corporate sites have it.

---

# 26. Individual Job Pages

If recruitment requirements justify them:

```text
/careers/[job-slug]
```

Example:

```text
/careers/senior-mechanical-engineer
```

The individual job page can contain:

* Job title
* Department
* Location
* Employment type
* Overview
* Responsibilities
* Requirements
* Preferred qualifications
* Benefits where approved
* Application instructions
* Deadline

---

# 27. Job Detail Relationship

```text
Careers
   ↓
Job Detail
   ↓
Application
```

The application process should remain simple.

---

# 28. Application Model

For Professional Presence, the preferred implementation is generally a **clear application handoff**, rather than building a complete applicant-tracking system.

Possible options:

* Email application
* External recruitment platform
* Existing application system
* Simple approved form

The actual method depends on Asterra's operational requirements.

---

# 29. Application CTA

Recommended:

**Apply for This Position**

Secondary:

**View All Opportunities**

The CTA should clearly communicate what happens after clicking.

---

# 30. Section 06 — How We Hire

## Objective

Reduce uncertainty around the application process.

Recommended:

```text
HOW WE HIRE

01
Explore an Opportunity

02
Submit Your Application

03
Review & Conversation

04
Selection

05
Join the Team
```

Only include stages that accurately reflect Asterra's process.

---

# 31. Recruitment Process Content

Keep descriptions short.

Example:

### 01 — Explore

Review the role and determine whether your experience matches the requirements.

### 02 — Apply

Submit the requested information through the approved application channel.

### 03 — Review

The relevant team reviews your application and contacts suitable candidates.

Again, this is a structural example and should be replaced with Asterra's actual process.

---

# 32. Section 07 — Candidate CTA

Recommended:

> **Don't see the right opportunity?**

Supporting copy:

> Check back as new roles become available.

If speculative applications are supported:

**Introduce Yourself**

Otherwise:

**View Current Opportunities**

---

# 33. Careers-to-Company Relationship

The page should provide pathways to:

* About Asterra
* Business Units
* Projects
* Insights
* Contact

This allows candidates to understand the organization before applying.

---

# 34. Responsive Design

## Desktop

```text
Hero
↓
Why Asterra
↓
Working at Asterra
↓
Career Areas
↓
Opportunities
↓
How We Hire
↓
CTA
```

## Tablet

Use:

* Two-column editorial layouts
* Responsive opportunity cards
* Wrapped filters
* Reduced image height

## Mobile

```text
Hero
↓
Why Asterra
↓
Working at Asterra
↓
Career Areas
↓
Opportunities
↓
How We Hire
↓
CTA
```

---

# 35. Typography

Continue the established Asterra system.

### IBM Plex Serif

Use for:

* Careers H1
* Major editorial statements
* Section-level emphasis

### IBM Plex Sans

Use for:

* Job titles
* Metadata
* Body copy
* Filters
* Buttons
* Navigation

---

# 36. Color

Continue:

* Deep Evergreen
* Mineral Teal
* Warm Ivory
* White
* Ink
* Supporting neutrals

Avoid introducing a separate "HR/recruitment" color palette.

Careers should clearly belong to Asterra.

---

# 37. Motion

Use restrained motion:

* Hero image reveal
* Card hover
* Arrow transitions
* Section reveal

Avoid:

* Animated employee statistics
* Excessive counters
* Auto-playing workplace videos
* Distracting recruitment animations

---

# 38. Careers Content Model

```text
careers
├── hero
├── introduction
├── values[]
├── workplace
├── careerAreas[]
├── opportunities[]
├── hiringProcess[]
├── candidateCta
└── seo
```

---

# 39. Opportunity Content Model

```text
opportunity
├── id
├── title
├── slug
├── department
├── careerArea
├── location
├── employmentType
├── experienceLevel
├── postedDate
├── deadline
├── summary
├── responsibilities[]
├── requirements[]
├── preferredQualifications[]
├── applicationMethod
├── applicationUrl
├── status
└── seo
```

---

# 40. Content Integrity

Never fabricate:

* Open positions
* Salaries
* Benefits
* Employment conditions
* Hiring stages
* Remote-work policies
* Training programs
* Career progression promises
* Workplace claims

All recruitment information must reflect actual Asterra policy.

---

# 41. SEO — Page Intent

The Careers page primarily targets:

* Navigational intent
* Employment-related informational intent
* Branded recruitment searches

Examples:

```text
Asterra careers
Asterra jobs
careers at Asterra
Asterra employment opportunities
```

Do not keyword-stuff the page around generic job terms.

---

# 42. SEO — Title

Recommended:

```text
Careers at Asterra | Asterra Manufacturing Group
```

---

# 43. SEO — Meta Description

Recommended structure:

```text
Explore career opportunities at Asterra, learn about our working environment, and discover how you can contribute to our projects and capabilities.
```

It should be adjusted to match the actual page content.

---

# 44. SEO — Heading Structure

Recommended:

```text
H1
Careers at Asterra

H2
Why Asterra

H2
Working at Asterra

H2
Career Areas

H2
Current Opportunities

H2
How We Hire

H2
Start Your Career
```

---

# 45. SEO — Job Pages

If individual job pages exist, each should have:

* Unique URL
* Unique title
* Unique description
* Clear job title
* Location
* Employment type
* Requirements
* Application information

Avoid generating hundreds of thin job URLs.

---

# 46. SEO — JobPosting Structured Data

For genuine public job-detail pages, `JobPosting` structured data may be appropriate.

It should accurately reflect:

* Job title
* Organization
* Location
* Employment type
* Date posted
* Valid through date where applicable
* Application information

It should not be used for the general Careers landing page simply because the page contains job listings.

---

# 47. SEO — Job Expiration

When a position closes:

* Remove it from active listings.
* Update the job page appropriately.
* Ensure structured data no longer incorrectly represents it as an active position.
* Redirect or archive according to the site's content strategy.

Do not leave expired jobs appearing as active opportunities.

---

# 48. SEO — Internal Linking

Careers should link to:

```text
Careers
 ↓
Business Units
 ↓
Projects
 ↓
About
 ↓
Insights
```

Individual job pages should link back to:

```text
Careers
```

and where relevant:

```text
Business Unit
```

---

# 49. SEO — Content Quality

The Careers page should provide genuine information.

Strong content includes:

* Actual workplace information
* Actual career areas
* Actual opportunities
* Clear hiring process
* Authentic organizational context

Avoid:

> Join our dynamic team and unlock limitless opportunities in a world-class environment.

Generic employer language adds little value.

---

# 50. SEO — Images

Use meaningful alt text.

Example:

> Asterra engineering team collaborating on a project.

Avoid:

> Asterra jobs careers engineering jobs Ethiopia.

---

# 51. SEO — Performance

Careers pages may contain large workplace photography.

Requirements:

* Optimize hero imagery.
* Use responsive image sizes.
* Lazy-load below-fold images.
* Avoid unnecessary background video.
* Reserve image dimensions.
* Minimize third-party recruitment scripts.

---

# 52. SEO — Mobile

Check:

* Job listing readability
* Filter controls
* Application buttons
* Job metadata
* Long requirement lists
* Form usability
* Navigation
* Image loading

A candidate should be able to find and understand a vacancy comfortably on mobile.

---

# 53. AI/Search Accessibility

Important recruitment information should exist as semantic text.

Expose:

```text
Job Title
Department
Location
Employment Type
Description
Responsibilities
Requirements
Application Method
Deadline
```

Do not hide critical job information exclusively behind visual components.

---

# 54. Accessibility

Required:

* Keyboard-accessible job listings
* Descriptive links
* Visible focus states
* Correct heading hierarchy
* Accessible filters
* Accessible forms
* Sufficient contrast
* Clear error messages
* Accessible application controls

---

# 55. Application Accessibility

If an application form is built:

* Every field requires a visible label.
* Required fields are clearly identified.
* Validation errors are understandable.
* Keyboard navigation works.
* File upload controls are accessible.
* Submission state is communicated.
* Success/error feedback is clear.

---

# 56. Component Architecture

### Shared

```text
Header
Footer
Breadcrumb
Button
PageContainer
CTASection
```

### Careers

```text
CareersHero
WhyAsterra
WorkplaceSection
CareerAreaGrid
OpportunityList
OpportunityCard
OpportunityFilters
HiringProcess
CandidateCTA
```

Optional:

```text
OpportunitySearch
```

### Job Detail

```text
JobHero
JobMeta
JobOverview
JobResponsibilities
JobRequirements
ApplicationSection
RelatedOpportunities
```

---

# 57. Implementation Rules

The implementation agent should:

1. Follow Package 3.
2. Follow Template 01.
3. Follow the Asterra Design Manual.
4. Reuse the global design system.
5. Use authentic employer information.
6. Keep the recruitment experience simple.
7. Avoid building unnecessary ATS functionality.
8. Ensure active opportunities are accurate.
9. Make application paths obvious.
10. Maintain crawlable job URLs where applicable.
11. Use relevant structured data.
12. Optimize workplace imagery.
13. Maintain accessibility.
14. Respect applicant privacy.
15. Avoid unsupported employer claims.
16. Keep the architecture scalable.

---

# 58. Privacy & Candidate Data

If an application form collects personal information:

* Collect only necessary information.
* Explain how submitted information is used.
* Protect uploaded files.
* Avoid exposing applicant data.
* Do not store candidate information unnecessarily.
* Follow the applicable privacy requirements.

The Professional Presence package should avoid unnecessary applicant-data infrastructure unless explicitly required.

---

# 59. Anti-Patterns

Do not create:

* Fake job openings
* Fake employee testimonials
* Fake benefits
* Fake workplace statistics
* Generic recruitment copy
* Stock-photo-heavy employer branding
* Complex ATS functionality unnecessarily
* Unclear application paths
* Expired jobs presented as active
* Keyword-stuffed job pages
* Inaccessible application forms
* Excessive recruitment animations

---

# 60. QA Checklist

## Content

* [ ] Careers messaging is accurate.
* [ ] Career areas reflect the actual organization.
* [ ] Open opportunities are current.
* [ ] Job requirements are accurate.
* [ ] Application process is correct.
* [ ] Workplace claims are supported.
* [ ] Benefits are approved before publication.
* [ ] Employee images have appropriate permission.

## Design

* [ ] Careers feels consistent with Asterra.
* [ ] Hero communicates employer purpose.
* [ ] Career areas are easy to scan.
* [ ] Opportunities are prominent.
* [ ] Job metadata is readable.
* [ ] Application CTA is obvious.
* [ ] Page avoids generic recruitment aesthetics.

## SEO

* [ ] Unique page title.
* [ ] Useful meta description.
* [ ] Correct H1.
* [ ] Logical heading hierarchy.
* [ ] Crawlable opportunity links.
* [ ] Appropriate JobPosting schema where applicable.
* [ ] Expired positions handled correctly.
* [ ] Internal links are meaningful.
* [ ] Images have descriptive alt text.
* [ ] Job URLs are stable and descriptive.

## Performance

* [ ] Hero image optimized.
* [ ] Workplace imagery optimized.
* [ ] Below-fold images lazy-loaded.
* [ ] Third-party recruitment scripts minimized.
* [ ] Mobile performance tested.

## Accessibility

* [ ] Job cards are keyboard accessible.
* [ ] Filters are accessible.
* [ ] Application controls are accessible.
* [ ] Forms have labels.
* [ ] Error messages are clear.
* [ ] Focus states are visible.
* [ ] Contrast is sufficient.
* [ ] Heading hierarchy is correct.

---

# 61. Completion Criteria

The Careers specification is complete when:

* Careers purpose is defined.
* Employer-value content is defined.
* Workplace section is defined.
* Career areas are defined.
* Opportunity listing is defined.
* Opportunity filtering is defined.
* Job detail architecture is defined.
* Application path is defined.
* Hiring process is defined.
* Candidate CTA is defined.
* Content model is defined.
* Privacy considerations are defined.
* Routing is defined.
* SEO requirements are defined.
* JobPosting structured data is defined.
* Internal linking is defined.
* Performance requirements are defined.
* Accessibility requirements are defined.
* Component architecture is defined.
* QA requirements are defined.

---

# 62. Updated Asterra Architecture

```text
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
│   ├── Projects / Portfolio Listing
│   └── Project / Case Study Detail
│
├── INSIGHTS
│   ├── Insights / Resources Listing
│   └── Insight / Article Detail
│
├── CAREERS
│   ├── Careers / Opportunities Listing     ← CURRENT
│   └── Job Detail                          ← OPTIONAL
│
└── CONTACT
```

### Next file

**Asterra Contact / Corporate Inquiry — Detailed Page Specification**
