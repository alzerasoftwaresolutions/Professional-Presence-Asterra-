# Asterra — Page Architecture Review

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Review status:** Core architecture complete

The architecture is strong and, importantly, it is **proportionate to Package 3**. It gives Asterra enough depth to feel like an established organization without turning the website into a large enterprise platform.

---

## 1. Final Architecture

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
│   ├── Insights / Knowledge Resources
│   └── Insight / Article Detail
│
├── CAREERS
│   └── Careers / Opportunities Listing
│
└── CONTACT
    └── Corporate Inquiry
```

### Optional

```text
INSIGHTS
└── Category Pages

CAREERS
└── Job Detail
```

---

# 2. Architecture Quality Assessment

| Area                             | Assessment  |
| -------------------------------- | ----------- |
| Information hierarchy            | Strong      |
| Corporate credibility            | Strong      |
| Content depth                    | Strong      |
| Business capability presentation | Strong      |
| Project proof                    | Strong      |
| Thought leadership               | Strong      |
| Recruitment presence             | Appropriate |
| Conversion paths                 | Strong      |
| SEO structure                    | Strong      |
| Package 3 complexity             | Appropriate |
| Scalability                      | Good        |

The most important point is that the architecture has a logical progression:

```text
WHO WE ARE
     ↓
WHAT WE DO
     ↓
WHAT WE HAVE DONE
     ↓
WHAT WE KNOW
     ↓
WHO LEADS US
     ↓
WHO CAN WORK WITH US
     ↓
HOW TO CONTACT US
```

That gives the website a coherent corporate narrative.

---

# 3. Primary Navigation Review

The navigation should **not expose every page**.

Recommended primary navigation:

```text
ABOUT
BUSINESS
PROJECTS
INSIGHTS
CAREERS
```

Then:

```text
CONTACT
```

as the primary navigation CTA.

The homepage remains accessible through the Asterra logo.

### Leadership

**Leadership should probably not be a primary navigation item.**

Instead:

```text
ABOUT
 ├── Corporate Story
 └── Leadership
      ├── Leadership Listing
      └── Executive Profile
```

This keeps the navigation cleaner while preserving the page.

---

# 4. Recommended Information Architecture

I recommend slightly refining the conceptual hierarchy:

```text
HOME
│
├── ABOUT
│   ├── Corporate Story
│   └── Leadership
│       └── Executive Profile
│
├── BUSINESS
│   ├── Business Units / Capabilities
│   └── Business Unit Detail
│
├── PROJECTS
│   ├── Portfolio Listing
│   └── Project Detail
│
├── INSIGHTS
│   ├── Knowledge Resources
│   └── Article Detail
│
├── CAREERS
│   └── Opportunities
│
└── CONTACT
```

This is cleaner than treating Leadership as completely independent from About.

---

# 5. Content Relationship Architecture

This is one of the strongest parts of the system.

The pages should not exist as isolated destinations.

They should connect:

```text
                 ASTERRA
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     BUSINESS     PROJECTS    LEADERSHIP
        │           │
        ↓           ↓
     INSIGHTS ←─────┘
        │
        ↓
     CONTACT
```

For example:

```text
Business Unit
      ↓
Related Projects
      ↓
Related Insights
      ↓
Contact
```

This creates a meaningful user journey rather than simply providing pages.

---

# 6. Business → Project Relationship

A Business Unit should be able to demonstrate proof.

For example:

```text
Engineering
     ↓
Relevant Projects
     ↓
Project Detail
```

This is important for Asterra because it allows the website to communicate:

> **What we do → Evidence that we do it → How to engage us**

rather than simply listing capabilities.

---

# 7. Project → Business Relationship

The relationship should work in both directions.

```text
Project
├── Business Unit
├── Related Capability
└── Related Insights
```

Therefore, a visitor researching a project can understand which Asterra capability delivered it.

---

# 8. Insights Relationship

Insights should support the business rather than functioning as a disconnected blog.

Recommended:

```text
INSIGHT
   │
   ├── Related Business Unit
   ├── Related Project
   └── Relevant Contact / CTA
```

This follows the SEO/content principle you provided:

> content should contribute to useful business outcomes rather than simply generating traffic.

---

# 9. Leadership Relationship

Leadership profiles should connect naturally to:

* About
* Business areas
* Relevant expertise
* Contact or corporate information

But they should **not be overloaded with unrelated links**.

The purpose is credibility and organizational context.

---

# 10. Careers Relationship

Careers should remain somewhat independent.

Recommended:

```text
CAREERS
│
├── Why Asterra
├── Working at Asterra
└── Opportunities
```

It should not become part of the primary business conversion journey.

However, the footer can connect Careers to the rest of the corporate site.

---

# 11. Contact Architecture

Contact should remain globally accessible.

Recommended:

```text
Header:
[Contact Us]

Footer:
Contact
Corporate Information
Locations
Email
Phone
```

The primary corporate CTA should ultimately lead toward:

```text
CONTACT
   ↓
Corporate Inquiry
```

---

# 12. Conversion Architecture

The website should have **multiple conversion paths**, not one universal CTA.

### Business visitor

```text
Business
   ↓
Capability
   ↓
Project
   ↓
Corporate Inquiry
```

### Research visitor

```text
Insight
   ↓
Capability
   ↓
Project
   ↓
Corporate Inquiry
```

### Executive/reputation visitor

```text
About
   ↓
Leadership
   ↓
Business
```

### Potential employee

```text
Careers
   ↓
Opportunity
```

This is much stronger than placing **"Contact Us"** everywhere without context.

---

# 13. SEO Architecture Review

The hierarchy is also appropriate for SEO:

```text
/
├── /about
├── /leadership
│   └── /leadership/[slug]
├── /business
│   └── /business/[slug]
├── /projects
│   └── /projects/[slug]
├── /insights
│   └── /insights/[slug]
├── /careers
└── /contact
```

This creates clear topical groupings.

The optional category pages should **not** be added simply for SEO. They should only exist if there is enough meaningful content to justify them.

---

# 14. What We Should NOT Add

For Package 3, I would deliberately avoid adding:

* Client portal
* Search system
* Complex recruitment platform
* Job application management system
* Large resource library
* Newsletter platform
* Events system
* Investor relations section
* Multi-language system unless required
* Advanced personalization
* Complex dashboards

Those could belong to a larger package or future project.

---

# 15. One Important Architecture Decision

We should distinguish between **page architecture** and **content architecture**.

The pages are now defined.

The next level is determining the reusable relationships between their content.

For example:

```text
Business Unit
├── title
├── description
├── capabilities
├── projects[]
└── insights[]

Project
├── title
├── businessUnit
├── services[]
├── description
└── relatedInsights[]

Insight
├── title
├── category
├── businessUnit
├── relatedProjects[]
└── relatedInsights[]
```

This should be defined **before implementation**, because it will prevent us from building isolated pages.

---

# 16. Architecture Decision

### Keep

* About / Corporate Story
* Leadership
* Business
* Projects
* Insights
* Careers
* Contact

### Keep optional

* Job Detail
* Insight Category Pages

### Do not add

Additional sections merely to make the site appear larger.

---

# 17. Final Review Result

**Architecture: APPROVED**

The structure is:

* Complete enough for Package 3.
* Corporate rather than generic.
* Scalable without being over-engineered.
* Strong for SEO.
* Strong for content relationships.
* Strong for demonstrating business capability.
* Appropriate for a professional corporate presence.

The most important architectural principle going forward is:

> **Every page should have a purpose and a relationship to another part of the Asterra ecosystem.**

We should now move from **page architecture → content/data architecture → design-system/page implementation planning**, rather than creating more pages.
