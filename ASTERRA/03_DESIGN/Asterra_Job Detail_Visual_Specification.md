# Asterra — Job Detail Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Job Detail / Opportunity
**Status:** Implementation-ready visual specification

**References:**

* `Asterra Careers / Opportunities Listing — Visual Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Job Detail page provides the complete information a candidate needs to determine whether a position is appropriate and decide whether to apply.

The page should answer:

* What is the role?
* What does the person do?
* What are the requirements?
* Where is the role based?
* What type of employment is it?
* How does the candidate apply?

The page should prioritize **clarity, trust, and action**.

---

# 2. Overall Page Structure

```text
JOB DETAIL
│
├── Global Header
│
├── Job Header
│   ├── Job Title
│   ├── Department
│   ├── Location
│   └── Employment Type
│
├── Job Overview
│
├── Responsibilities
│
├── Requirements
│
├── Preferred Qualifications (Optional)
│
├── About Asterra
│
├── Application
│
├── Related Opportunities
│
└── Global Footer
```

Only include sections for which verified content exists.

---

# 3. Job Header

The header should immediately establish the position.

```text
CAREERS

Mechanical Engineer

Engineering
Addis Ababa · Full-time

[Apply for this position]
```

The title should be the strongest element.

---

# 4. Job Metadata

Display important information in a compact structured area:

```text
Department
Engineering

Location
Addis Ababa

Employment Type
Full-time
```

Optional:

* Experience level
* Closing date
* Job reference

Only display fields actually maintained by Asterra.

---

# 5. Apply CTA

The primary action should be visible near the beginning.

```text
[Apply for this position]
```

On desktop, this may appear beside the job metadata.

On mobile, it should remain easy to access without dominating the screen.

---

# 6. Job Overview

A short introduction should explain the role.

```text
ABOUT THE ROLE

Asterra is seeking a Mechanical Engineer
to contribute to...
```

This should provide context before the detailed requirements.

---

# 7. Responsibilities

Use a clear list.

```text
KEY RESPONSIBILITIES

• Responsibility
• Responsibility
• Responsibility
• Responsibility
```

Avoid large paragraphs when information can be scanned as individual responsibilities.

---

# 8. Requirements

Separate required qualifications from general responsibilities.

```text
REQUIREMENTS

• Bachelor's degree in ...
• Relevant professional experience
• Knowledge of ...
• Strong communication skills
```

Only list qualifications genuinely required for the role.

---

# 9. Preferred Qualifications

Optional.

```text
PREFERRED

• Experience with ...
• Professional certification
• Industry-specific knowledge
```

Do not present optional qualifications as mandatory.

---

# 10. Experience Level

If relevant:

```text
EXPERIENCE

3+ years
```

or:

```text
Entry Level
Mid Level
Senior Level
```

Use consistent terminology across all Asterra job listings.

---

# 11. Education

If required:

```text
EDUCATION

Bachelor's degree in Engineering
or related field.
```

Avoid unnecessary educational requirements.

---

# 12. Skills

Where appropriate, skills can be grouped:

```text
CORE SKILLS

Engineering analysis
Project coordination
Technical documentation
Communication
```

Keep the section concise.

---

# 13. About Asterra

A short corporate context section can help candidates understand the organization.

```text
ABOUT ASTERRA

Asterra is a [verified company description].

Learn more about Asterra →
```

Do not repeat the entire About page.

---

# 14. Application Section

The application section should provide the actual next step.

```text
READY TO APPLY?

Submit your application through
Asterra's application process.

[Apply now]
```

The CTA must lead to a functioning application route.

---

# 15. Application Method

Depending on the actual implementation, the application may use:

```text
Internal application form
```

or:

```text
External application platform
```

or:

```text
Email application
```

The design specification should not assume an implementation method before it has been decided.

---

# 16. Application Form

If applications are handled directly on the website, a possible structure is:

```text
APPLICATION

Full Name
[________________]

Email
[________________]

Phone
[________________]

CV / Resume
[Choose file]

Cover Letter
[________________]

[Submit application]
```

Only collect information genuinely required for recruitment.

---

# 17. Form UX

The application form should:

* Clearly label every field
* Show required fields
* Validate input
* Explain errors
* Confirm successful submission
* Prevent accidental duplicate submission

Do not create unnecessarily long forms.

---

# 18. Application Confirmation

After successful submission:

```text
APPLICATION RECEIVED

Thank you for applying to Asterra.

Your application has been successfully submitted.
```

Provide next-step information when appropriate.

---

# 19. Sidebar / Desktop Layout

For longer positions, a two-column layout can improve navigation.

```text
┌──────────────────────────────┬────────────────────┐
│                              │                    │
│ JOB CONTENT                  │ JOB SUMMARY        │
│                              │                    │
│ About the role               │ Location           │
│ Responsibilities             │ Department         │
│ Requirements                │ Employment type    │
│ Qualifications               │                    │
│                              │ [Apply]            │
└──────────────────────────────┴────────────────────┘
```

The sidebar should remain compact.

---

# 20. Sticky Apply Panel

Optional on desktop.

```text
┌────────────────────┐
│ JOB SUMMARY        │
│                    │
│ Location           │
│ Department         │
│ Type               │
│                    │
│ [Apply]            │
└────────────────────┘
```

Do not use sticky positioning if it interferes with reading.

---

# 21. Mobile Layout

On mobile:

```text
Job Title
   ↓
Metadata
   ↓
Apply CTA
   ↓
Overview
   ↓
Responsibilities
   ↓
Requirements
   ↓
About Asterra
   ↓
Apply CTA
```

The CTA should appear both near the beginning and at the end when the page is long.

---

# 22. Mobile Application

If the application is on-page, the form should use a single-column layout.

```text
Full Name
[____________]

Email
[____________]

Phone
[____________]

CV
[Upload]

Cover Letter
[____________]

[Submit application]
```

Avoid multi-column forms on mobile.

---

# 23. Related Opportunities

Optional.

At the end:

```text
OTHER OPPORTUNITIES

Software Engineer
Engineering Manager
Project Coordinator
```

Only show genuinely relevant open positions.

Closed positions should not appear as active opportunities.

---

# 24. Back to Careers

Provide a clear route back:

**← View all opportunities**

This should be placed near the end of the article or near the header.

---

# 25. Job Expiration

When a role closes, the page should clearly communicate its status.

```text
POSITION CLOSED

This opportunity is no longer accepting applications.

[View current opportunities]
```

Do not leave a closed position appearing as active.

---

# 26. SEO Structure

Recommended:

```text
H1
Mechanical Engineer

H2
About the Role

H2
Key Responsibilities

H2
Requirements

H2
About Asterra

H2
How to Apply
```

The exact headings depend on the content.

---

# 27. JobPosting Structured Data

Where technically appropriate, use `JobPosting` structured data.

The structured data must accurately match the visible information, including:

* Job title
* Description
* Employer
* Location
* Employment type
* Date information
* Application information

Do not mark up fictional or unavailable jobs.

---

# 28. Canonical & Indexing Considerations

Each active job page should have a stable canonical URL.

When a position closes, the implementation should follow a defined policy:

```text
Closed
  ↓
Keep page temporarily useful
  ↓
Clearly mark closed
  ↓
Link to current opportunities
```

Do not automatically delete useful pages without considering their search and user value.

---

# 29. Internal Linking

Useful links include:

```text
Job Detail
   ↓
Careers
   ↓
About
   ↓
Leadership
   ↓
Business Units
```

This allows candidates to understand the broader organization.

---

# 30. Accessibility

Required:

* Semantic headings
* Accessible form labels
* Keyboard navigation
* Visible focus states
* Accessible file upload
* Clear validation errors
* Accessible success messages
* Sufficient contrast
* Descriptive CTA labels

Do not rely on color alone to communicate form errors.

---

# 31. Performance

The job page should remain lightweight.

Avoid unnecessary:

* Video backgrounds
* Large decorative imagery
* Heavy animation
* Third-party scripts

The candidate's primary task is reading and applying.

---

# 32. Motion

Use minimal motion:

```text
Button hover
Form feedback
Section transitions
```

Do not animate the job content aggressively.

---

# 33. Content Integrity

Never invent:

* Job positions
* Salary information
* Requirements
* Benefits
* Application deadlines
* Company policies
* Employment claims

All job information must come from approved recruitment content.

---

# 34. Component Map

```text
JobDetailPage
│
├── Header
│
├── JobHeader
│   ├── JobTitle
│   ├── JobMetadata
│   └── ApplyCTA
│
├── JobContent
│   ├── JobOverview
│   ├── Responsibilities
│   ├── Requirements
│   ├── OptionalPreferredQualifications
│   └── OptionalSkills
│
├── AboutAsterra
│
├── ApplicationSection
│   └── ApplicationForm
│
├── OptionalRelatedOpportunities
│
└── Footer
```

---

# 35. Relationship to Careers Architecture

```text
CAREERS
   │
   ├── Opportunities Listing
   │        ↓
   │    Job Detail
   │        ↓
   │    Application
   │
   └── General Application
```

The Job Detail page is the bridge between **opportunity discovery and candidate conversion**.

---

# 36. User Journey

```text
Discover opportunity
        ↓
Open job detail
        ↓
Understand role
        ↓
Evaluate qualifications
        ↓
Research Asterra
        ↓
Apply
        ↓
Confirmation
```

The page should minimize unnecessary steps between these stages.

---

# 37. Quality Gate

Before implementation:

### Clarity

* Can a candidate understand the role quickly?

### Requirements

* Are mandatory and preferred qualifications clearly separated?

### CTA

* Is the application action obvious?

### Application

* Does the application process actually work?

### Mobile

* Is the entire job readable and usable on mobile?

### SEO

* Is the job page correctly structured?

### Accessibility

* Can the candidate navigate and apply without a mouse?

### Integrity

* Is every recruitment claim verified?

---

# 38. Final Visual Direction

```text
                 JOB
                  │
                  ↓
             UNDERSTAND
                  │
                  ↓
              EVALUATE
                  │
                  ↓
              TRUST
                  │
                  ↓
               APPLY
```

The visual language should be:

**Clear + Professional + Human + Action-oriented**

The page should never feel like an advertisement. Its job is to give candidates enough trustworthy information to make an informed decision.

---

# 39. Status

**Asterra Job Detail — Visual Specification: APPROVED**

### Asterra Architecture Status

```text
ASTERRA
│
├── HOME                              ✓
│
├── ABOUT
│   └── Corporate Story               ✓
│
├── LEADERSHIP
│   ├── Leadership Listing            ✓
│   └── Executive Profile             ✓
│
├── BUSINESS
│   ├── Business Units / Capabilities ✓
│   └── Business Unit Detail          ✓
│
├── PROJECTS
│   ├── Projects / Portfolio Listing  ✓
│   └── Project / Case Study Detail   ✓
│
├── INSIGHTS
│   ├── Insights / Knowledge Resources ✓
│   ├── Insight / Article Detail       ✓
│   └── Category Pages                 ○ Optional
│
├── CAREERS
│   ├── Careers / Opportunities Listing ✓
│   └── Job Detail                     ✓
│
└── CONTACT
    └── Corporate Inquiry              → Next
```

**Next page: `Asterra Contact / Corporate Inquiry — Visual Specification`**
