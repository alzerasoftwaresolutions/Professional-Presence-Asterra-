# Asterra — Leadership Listing Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Leadership Listing
**Status:** Implementation-ready visual specification
**References:**

* `Asterra Leadership Listing — Detailed Page Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Leadership page should establish **the people behind Asterra's organization, expertise, and direction**.

The visual experience should communicate:

* Authority
* Professionalism
* Human credibility
* Organizational structure
* Accessibility to deeper executive profiles

This should feel like a **corporate leadership directory**, not a social-media-style team page.

---

# 2. Overall Page Structure

```text
LEADERSHIP
│
├── Global Header
│
├── Leadership Hero
│
├── Leadership Introduction
│
├── Executive Leadership
│
├── Leadership / Management Team
│
├── Organizational Perspective
│
└── Global Footer
```

Only sections supported by actual Asterra data should be included.

---

# 3. Leadership Hero

The hero should be restrained and authoritative.

```text
┌──────────────────────────────────────────────────────┐
│                                                      │
│ LEADERSHIP                                           │
│                                                      │
│ The people guiding Asterra's direction,              │
│ capabilities, and long-term growth.                  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Unlike the homepage, a large promotional image is not required.

A strong typographic hero may be more appropriate.

---

# 4. Hero Visual Treatment

Recommended:

* Generous whitespace
* Strong page title
* Short introduction
* Minimal decoration
* Optional subtle institutional image

The page should immediately feel like part of the same corporate system as About.

---

# 5. Leadership Introduction

A short introduction should establish why leadership matters.

Recommended:

```text
┌─────────────────────────────────────────────────────┐
│ OUR LEADERSHIP                                      │
│                                                     │
│ Large statement                                     │
│                                                     │
│ Supporting corporate description.                   │
└─────────────────────────────────────────────────────┘
```

Keep this concise.

The main content should remain the people.

---

# 6. Executive Leadership

This is the primary section.

Recommended desktop composition:

```text
EXECUTIVE LEADERSHIP

┌──────────────────────┐ ┌──────────────────────┐
│                      │ │                      │
│      Portrait        │ │      Portrait        │
│                      │ │                      │
│ Name                 │ │ Name                 │
│ Executive Role       │ │ Executive Role       │
│ Short introduction   │ │ Short introduction   │
│ View profile →       │ │ View profile →       │
└──────────────────────┘ └──────────────────────┘
```

If there is one principal executive, that person may receive greater visual emphasis.

---

# 7. Principal Executive Treatment

For a CEO, Managing Director, Founder, or equivalent principal leader:

```text
┌──────────────────────────────────────────────────────┐
│                                                      │
│ Large portrait                  Name                 │
│                                  Role                 │
│                                  Short biography      │
│                                  View profile →       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

This establishes hierarchy without making the page feel hierarchical in a rigid or ceremonial way.

---

# 8. Leadership Cards

Cards should remain editorial.

Each profile preview should contain:

```text
Portrait

Full Name
Position / Title

One concise description

View profile →
```

Avoid displaying excessive information on the listing page.

Detailed biography belongs on the Executive Profile page.

---

# 9. Photography

Leadership photography is one of the most important visual elements on this page.

Maintain consistency in:

* Crop
* Aspect ratio
* Background treatment
* Image quality
* Lighting style

Prefer authentic professional portraits.

Avoid mixing:

* Casual selfies
* Different aspect ratios
* Highly edited portraits
* Low-resolution photographs

---

# 10. Portrait Treatment

Recommended:

```text
Portrait
████████████
████████████
████████████

Name
Role
```

The portrait should dominate the card more than decorative UI elements.

Rounded corners are optional but should follow the established design system.

---

# 11. Leadership Grid

Desktop:

```text
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   Portrait   │ │   Portrait   │ │   Portrait   │
│   Name       │ │   Name       │ │   Name       │
│   Role       │ │   Role       │ │   Role       │
└──────────────┘ └──────────────┘ └──────────────┘
```

Tablet:

```text
┌────────────────┐ ┌────────────────┐
│    Portrait    │ │    Portrait    │
│    Name        │ │    Name        │
└────────────────┘ └────────────────┘
```

Mobile:

```text
┌────────────────────────┐
│        Portrait        │
│        Name            │
│        Role            │
└────────────────────────┘

┌────────────────────────┐
│        Portrait        │
│        Name            │
│        Role            │
└────────────────────────┘
```

---

# 12. Team Grouping

If Asterra has different leadership levels, grouping can clarify the organization.

Example:

```text
Executive Leadership
        ↓
Senior Leadership
        ↓
Functional / Business Leadership
```

Do not create categories unless they reflect the actual organizational structure.

---

# 13. Visual Hierarchy Between Groups

Executive leadership should receive greater visual weight.

Example:

```text
EXECUTIVE LEADERSHIP

████████████████████
████████████████████

SENIOR LEADERSHIP

████████  ████████  ████████
```

This communicates organizational hierarchy through scale rather than decorative labels.

---

# 14. Biography Preview

Keep preview biographies short.

Recommended:

**Name**
**Role**

One or two concise sentences.

Avoid placing complete executive biographies inside the listing.

This improves:

* Scanability
* Page length
* Mobile usability
* Content hierarchy

---

# 15. Executive Profile Navigation

Each leadership preview should provide a clear path:

```text
Leadership Listing
        ↓
Executive Profile
```

The interaction can use:

**View profile →**

or another approved label.

Avoid vague actions such as:

**Learn more**

when a more descriptive link is possible.

---

# 16. Hover Interaction

Desktop profile interaction can use subtle motion.

Example:

```text
Normal
Portrait

Hover
Portrait
   ↓
Subtle image movement
Name/link emphasis
```

Keep the effect restrained.

No dramatic zoom or overlay animation is required.

---

# 17. Mobile Interaction

On mobile, the entire profile card can function as a clear interactive region where appropriate.

Ensure:

* Sufficient touch target size
* Clear link state
* No hover-dependent information
* No hidden essential content

---

# 18. Organizational Perspective

An optional section can explain how leadership connects to Asterra's broader organization.

Possible structure:

```text
HOW WE LEAD

Large statement

Short supporting explanation

[Explore Business]
[Explore Capabilities]
```

This should only be included if it contributes meaningful content.

It should not become another generic marketing section.

---

# 19. CTA

A leadership page does not necessarily need a large conversion CTA.

A simple transition is preferable:

```text
Explore Asterra's capabilities →
```

or:

```text
Discover our business units →
```

The Contact CTA remains available through the global navigation.

---

# 20. Footer

Use the global Asterra footer without modification to the underlying system.

Leadership should not introduce a special footer design.

---

# 21. Typography

Hierarchy:

```text
Eyebrow
    ↓
H1 — Leadership
    ↓
Section heading
    ↓
Executive name
    ↓
Role
    ↓
Biography
```

Names should be visually stronger than job titles.

The job title should remain clearly associated with the person.

---

# 22. Grid & Alignment

All profile cards should align to the site's primary grid.

Avoid:

```text
Card     Card
    Card       Card
Card
```

unless intentionally using an editorial composition.

For a corporate directory, consistent alignment is more valuable.

---

# 23. Whitespace

Leadership profiles should have enough breathing room.

Avoid compressing many executives into a dense grid simply to reduce page length.

The page should communicate:

**confidence + clarity + professionalism**

through space.

---

# 24. Responsive Behavior

### Desktop

Use a multi-column grid.

### Tablet

Reduce the number of columns while maintaining comfortable card dimensions.

### Mobile

Stack profiles vertically.

The profile image should remain large enough to recognize the person immediately.

---

# 25. Accessibility

Every profile should provide:

* Meaningful image alt text
* Semantic heading/name structure
* Keyboard-accessible profile links
* Visible focus state
* Adequate contrast
* Accessible link labels

Do not rely on portrait imagery alone to communicate identity.

---

# 26. SEO Structure

Recommended structure:

```text
H1
Leadership

H2
Executive Leadership

H3
Executive Name

H3
Executive Name

H2
Senior Leadership

H3
Executive Name
```

The exact heading structure should adapt to the actual organization.

Each profile link should have descriptive anchor text.

---

# 27. Executive Profile SEO Connection

The listing page should provide meaningful internal links to individual profiles.

```text
Leadership
│
├── Executive A
│     ↓
│   Executive Profile A
│
├── Executive B
│     ↓
│   Executive Profile B
│
└── Executive C
      ↓
    Executive Profile C
```

This creates a logical information architecture.

---

# 28. Structured Data

Where appropriate, individual executive profile pages may support relevant person/organization structured data.

The listing page itself should not be overloaded with unnecessary structured-data types.

All structured data must accurately represent visible and verified information.

---

# 29. Image Performance

Leadership pages can contain many portraits.

Use:

* Responsive image sizes
* Proper image dimensions
* Efficient image formats
* Lazy loading for below-fold portraits
* Optimized thumbnails

The first visible portrait(s) should not be unnecessarily delayed.

---

# 30. Content Integrity

Do not create or infer:

* Executive titles
* Degrees
* Years of experience
* Certifications
* Previous employers
* Awards
* Professional achievements

unless verified in the approved Asterra content.

Leadership information is particularly important to keep factually accurate.

---

# 31. Component Map

Conceptually:

```text
LeadershipPage
│
├── Header
│
├── LeadershipHero
│
├── LeadershipIntro
│
├── ExecutiveLeadership
│   └── ExecutiveProfilePreview
│
├── SeniorLeadership
│   └── ExecutiveProfilePreview
│
├── OrganizationalPerspective
│
└── Footer
```

Only required sections should be implemented.

---

# 32. Design Relationship

The Leadership page should visually connect:

```text
ABOUT
  ↓
Who Asterra is

LEADERSHIP
  ↓
Who guides Asterra

BUSINESS
  ↓
What Asterra does

PROJECTS
  ↓
What Asterra has delivered
```

This creates a coherent corporate narrative across the website.

---

# 33. Quality Gate

Before implementation approval:

### People

* Are all portraits consistent?
* Are names and roles accurate?

### Hierarchy

* Is executive leadership clearly prioritized?

### Usability

* Can visitors quickly identify and open a profile?

### Visual quality

* Does the page feel institutional rather than generic?

### Responsive

* Are portraits large and readable on mobile?

### Accessibility

* Are profiles fully keyboard accessible?

### SEO

* Are profile pages properly linked?
* Is the heading structure logical?

### Performance

* Are multiple portrait images efficiently delivered?

---

# 34. Final Visual Direction

The leadership page should communicate:

```text
                    ASTERRA
                       │
                       ↓
                  LEADERSHIP
                       │
                       ↓
              PEOPLE + EXPERTISE
                       │
                       ↓
                 ORGANIZATION
                       │
                       ↓
                 CORPORATE
                  DIRECTION
```

Its design language should be:

**Human + Institutional + Precise + Restrained**

rather than:

**Social + Casual + Decorative + Card-heavy**

---

# 35. Status

**Asterra Leadership Listing — Visual Specification: APPROVED**

### Next

**`Asterra Executive Profile — Visual Specification`**
