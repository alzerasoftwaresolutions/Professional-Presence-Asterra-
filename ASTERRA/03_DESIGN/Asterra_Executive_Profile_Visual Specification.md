# Asterra — Executive Profile Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Executive Profile
**Status:** Implementation-ready visual specification

**References:**

* `Asterra Executive Profile — Detailed Page Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Executive Profile page provides a deeper presentation of an individual Asterra leader.

The page should communicate:

* Identity
* Leadership position
* Professional background
* Expertise
* Responsibilities
* Contribution to Asterra

The page should feel **personal but corporate**.

It should not resemble a résumé or social-media profile.

---

# 2. Overall Page Structure

```text
EXECUTIVE PROFILE
│
├── Global Header
│
├── Executive Hero
│
├── Executive Introduction
│
├── Professional Background
│
├── Areas of Expertise
│
├── Leadership Perspective / Statement
│
├── Related Business Areas
│
├── Other Leadership
│
└── Global Footer
```

Sections should only appear when supported by real content.

---

# 3. Executive Hero

The hero is the defining visual element of the page.

Recommended composition:

```text id="a8y9fq"
┌──────────────────────────────────────────────────────┐
│                                                      │
│  EXECUTIVE PROFILE                                   │
│                                                      │
│  ┌───────────────────┐       FULL NAME               │
│  │                   │       Executive Position      │
│  │     PORTRAIT      │                               │
│  │                   │       Short introduction      │
│  └───────────────────┘                               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

The portrait and identity should immediately establish the person.

---

# 4. Hero Portrait

The portrait should be substantially larger than profile-listing thumbnails.

Recommended:

* High-resolution professional portrait
* Consistent organizational photography
* Strong crop
* Natural presentation
* Minimal visual effects

Avoid excessive circular cropping if the overall design language favors editorial rectangular imagery.

---

# 5. Hero Identity

Recommended hierarchy:

```text id="9o5h5x"
Small label
EXECUTIVE PROFILE

Full Name
Large display typography

Position
Secondary typography

Short introduction
Readable body text
```

The person's **name is the primary visual element** after the page context.

---

# 6. Executive Hero Variations

For a principal executive:

```text id="m7k7n8"
Large portrait
+
Large identity statement
```

For a senior executive:

```text id="sl8l7b"
Moderate portrait
+
Clear professional identity
```

The same underlying component system should support both.

---

# 7. Introduction

Immediately below the hero, provide a concise professional introduction.

Example structure:

```text id="b74zqa"
ABOUT [NAME]

Large introductory statement.

Supporting biography.
```

This should answer:

> What is this person's role and significance within Asterra?

---

# 8. Professional Background

This section provides depth without turning into a résumé.

Recommended composition:

```text id="e5ajx7"
PROFESSIONAL BACKGROUND

Large heading

Biography / career narrative
──────────────────────────

Selected professional information
```

Use paragraphs rather than long bullet lists where the information is narrative.

---

# 9. Career Timeline

A timeline may be used if the executive has meaningful milestones.

```text id="h5j8z4"
2012
Professional milestone
        │
2017
Leadership milestone
        │
2021
Asterra role
        │
2026
Current position
```

Use only verified milestones.

If the biography is short, omit the timeline.

---

# 10. Areas of Expertise

Expertise should be presented as meaningful professional areas.

Example:

```text id="d9xjvz"
AREAS OF EXPERTISE

01  Strategic Leadership
02  Industry Expertise
03  Project Management
04  Business Development
```

Avoid turning expertise into a collection of generic skill badges.

---

# 11. Expertise Visual Treatment

Recommended:

```text id="5nq7d9"
01
EXPERTISE TITLE
Short explanation

02
EXPERTISE TITLE
Short explanation
```

A two-column editorial layout works well on desktop.

Mobile should stack the entries.

---

# 12. Leadership Perspective

If an approved quote or leadership statement exists, it can become a major visual moment.

```text id="7s8qv2"
┌──────────────────────────────────────────────────────┐
│                                                      │
│ “Approved leadership statement.”                     │
│                                                      │
│ — Full Name                                          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

This should be used only when the quote is authentic and approved.

Do not generate fictional executive quotations.

---

# 13. Quote Styling

The quote should have:

* Large typography
* Generous whitespace
* Minimal attribution
* Strong contrast
* No excessive quotation graphics

The quote should feel like part of the editorial page rather than a testimonial card.

---

# 14. Related Business Areas

Connect the executive to the relevant Asterra business areas.

```text id="w2v6sm"
AREAS OF RESPONSIBILITY

┌──────────────────────┐
│ Business Unit        │
│ Short description    │
│ Explore →            │
└──────────────────────┘

┌──────────────────────┐
│ Business Unit        │
│ Short description    │
│ Explore →            │
└──────────────────────┘
```

Only include genuine relationships.

This creates useful internal linking between:

**Executive → Business Unit**

---

# 15. Related Projects

Optional.

If the executive is directly associated with specific projects and that relationship is meaningful, a small selected-project section can be used.

```text id="k4e1qv"
SELECTED PROJECTS

Project A
Project B
```

Do not create artificial associations simply to fill the page.

---

# 16. Other Leadership

A compact navigation section can appear near the end.

```text id="0zj8tq"
OTHER LEADERSHIP

← Previous Executive

Leadership Listing

Next Executive →
```

This improves profile-to-profile navigation.

---

# 17. Profile Navigation

Recommended flow:

```text id="kgv0xl"
Leadership Listing
       ↓
Executive Profile
       ↓
Related Business
       ↓
Other Executive
```

The user should never feel trapped inside an individual profile.

---

# 18. Final CTA

A large conversion CTA is not necessary.

A contextual transition is preferable:

```text id="xj98gf"
Explore Asterra's capabilities →

or

Meet the full leadership team →
```

The appropriate CTA should depend on the executive's role and page context.

---

# 19. Typography

Recommended hierarchy:

```text id="kq5k5g"
Page label
    ↓
Executive Name
    ↓
Executive Position
    ↓
Section heading
    ↓
Biography
    ↓
Supporting metadata
```

The name should receive the strongest typography.

---

# 20. Content Width

Biographical text should remain within a comfortable reading width.

Avoid:

```text id="34sl6y"
████████████████████████████████████████████
Very long text line
```

Prefer:

```text id="42n5y6"
████████████████████
Readable paragraph width
```

This is particularly important for long executive biographies.

---

# 21. Image Strategy

The page should use imagery intentionally.

Primary:

**Executive portrait**

Optional secondary imagery:

* Workplace
* Project environment
* Corporate event
* Industry context

The portrait should remain the dominant image.

---

# 22. Responsive Behavior

### Desktop

```text id="7b8g2m"
Portrait       Identity
████████       █████████████
████████       █████████████
████████       █████████████
```

### Tablet

Maintain a two-column layout if comfortable.

### Mobile

```text id="2v6c9s"
Portrait
████████████

Name
Position

Introduction
```

The portrait should appear before the identity so the user establishes the person's visual identity first.

---

# 23. Mobile Biography

Long biographies should not be compressed into narrow columns.

Use:

```text id="7s8c1x"
Section heading

Paragraph
Paragraph
Paragraph
```

with comfortable vertical spacing.

---

# 24. Accessibility

Required:

* Meaningful portrait alt text
* Logical heading hierarchy
* Keyboard-accessible links
* Visible focus states
* Accessible navigation
* Readable contrast
* Proper semantic text structure

If a quote is presented visually, its text must remain accessible to assistive technologies.

---

# 25. SEO Structure

Recommended:

```text id="h7m2xv"
H1
Executive Full Name

H2
About / Introduction

H2
Professional Background

H2
Areas of Expertise

H2
Leadership Perspective

H2
Related Business Areas
```

The individual's name and professional role should be clearly represented in page content and metadata.

---

# 26. Metadata

Each profile should have its own:

* Unique title
* Useful meta description
* Canonical URL
* Appropriate social metadata

Avoid generating identical metadata across executive profiles.

---

# 27. Structured Data

Where appropriate, a profile can represent the executive as a `Person` associated with the organization.

Only verified information should be included.

Do not add:

* Unverified qualifications
* Invented social profiles
* Unsupported job history
* False awards

---

# 28. Internal Linking

The page should provide meaningful links to:

```text id="c2c2kj"
Executive Profile
│
├── Leadership Listing
├── Relevant Business Unit
├── Relevant Projects
└── Other Executive Profiles
```

This strengthens the relationship between Asterra's corporate entities.

---

# 29. Image Performance

The large executive portrait should be optimized without visibly reducing quality.

Use:

* Responsive image sizes
* Efficient formats
* Correct dimensions
* Lazy loading for secondary images
* Immediate loading priority for the primary portrait when it contributes to above-the-fold content

---

# 30. Motion

Motion should remain minimal.

Possible:

```text id="4kfl4t"
Hero portrait
→ subtle entrance

Profile links
→ small interaction

Related business
→ restrained hover
```

Avoid dramatic portrait animations.

The page is about the person, not the animation.

---

# 31. Content Integrity

Executive pages require particularly strong factual discipline.

Only use verified:

* Name
* Role
* Biography
* Experience
* Education
* Certifications
* Responsibilities
* Achievements
* Quotes

If a field is unavailable, omit it.

Do not use filler content.

---

# 32. Component Map

Conceptually:

```text id="0w9n7g"
ExecutiveProfilePage
│
├── Header
│
├── ExecutiveHero
│
├── ExecutiveIntroduction
│
├── ProfessionalBackground
│
├── ExpertiseSection
│
├── LeadershipPerspective
│
├── RelatedBusinessAreas
│
├── OtherLeadershipNavigation
│
└── Footer
```

Optional sections should be conditionally rendered based on available content.

---

# 33. Relationship to Leadership Listing

The two pages should form one system:

```text id="j3f9zz"
Leadership Listing
        │
        ├── Executive A ──→ Profile A
        │
        ├── Executive B ──→ Profile B
        │
        └── Executive C ──→ Profile C
                              │
                              ↓
                       Business / Projects
```

The listing provides **discovery**.

The profile provides **depth**.

---

# 34. Quality Gate

Before implementation approval:

### Identity

* Is the executive immediately identifiable?

### Hierarchy

* Is name and role dominant?

### Content

* Is the biography useful without becoming excessive?

### Authenticity

* Is every professional claim verified?

### Navigation

* Can users return to Leadership and explore related areas?

### Responsive

* Does the profile remain editorial on mobile?

### Accessibility

* Is all content accessible without relying on visual layout?

### SEO

* Is the profile independently discoverable and internally linked?

### Performance

* Is the primary portrait optimized?

---

# 35. Final Visual Direction

The page should communicate:

```text id="t8k1cc"
                 EXECUTIVE
                     │
                     ↓
                IDENTITY
                     │
                     ↓
                EXPERIENCE
                     │
                     ↓
                EXPERTISE
                     │
                     ↓
               LEADERSHIP
                     │
                     ↓
              ASTERRA'S WORK
```

The design language should be:

**Personal + Editorial + Professional + Institutional**

while remaining consistent with the broader Asterra corporate system.

---

# 36. Status

**Asterra Executive Profile — Visual Specification: APPROVED**

## Next Page

**`Asterra Business Units / Capabilities — Visual Specification`**
