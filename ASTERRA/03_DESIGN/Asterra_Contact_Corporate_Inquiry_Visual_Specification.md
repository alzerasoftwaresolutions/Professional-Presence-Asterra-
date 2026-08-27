# Asterra — Contact / Corporate Inquiry Visual Specification

**Package:** Package 3 — Professional Presence
**Template:** Corporate Authority
**Page:** Contact / Corporate Inquiry
**Status:** Implementation-ready visual specification

**References:**

* `Asterra Contact / Corporate Inquiry — Detailed Page Specification`
* `Asterra_Design_System.md`
* `Asterra_Page_Design_Architecture.md`
* `Asterra_Visual_Design_Specification.md`
* `Universal_Design_Analysis.md`
* `SEO Analytics & Optimization Playbook`

---

# 1. Purpose

The Contact page is the primary **business engagement endpoint** of the Asterra website.

Its purpose is to make it easy for:

* Prospective clients
* Business partners
* Investors or stakeholders, where relevant
* Job candidates
* General corporate contacts

to reach the appropriate Asterra team.

The page should feel **direct, trustworthy, and professional**.

It should not feel like a generic contact form.

---

# 2. Overall Page Structure

```text
CONTACT
│
├── Global Header
│
├── Contact Hero
│
├── Corporate Contact Information
│
├── Inquiry Form
│
├── Offices / Locations (Optional)
│
├── Additional Contact Channels
│
├── Map (Optional)
│
└── Global Footer
```

Only include location or contact information that is genuine and maintained.

---

# 3. Contact Hero

The hero should immediately communicate the purpose of the page.

```text
CONTACT

Let's discuss your next opportunity.

Connect with Asterra regarding projects,
partnerships, services, or other corporate inquiries.
```

The language should remain professional rather than sales-heavy.

---

# 4. Hero CTA

The primary action should naturally lead into the inquiry form.

```text
[Send an inquiry ↓]
```

The button can scroll to the form.

---

# 5. Contact Information

A concise information block should appear before or beside the form.

```text
CORPORATE CONTACT

Email
contact@asterra.example

Phone
+251 ...

Office
Addis Ababa, Ethiopia
```

Only display verified information.

---

# 6. Contact Channels

Possible channels:

```text
Email
Phone
Office
LinkedIn
Other approved corporate channel
```

Do not include social channels merely to fill the section.

---

# 7. Main Inquiry Layout

Desktop:

```text
┌──────────────────────────────┬──────────────────────────────┐
│                              │                              │
│ CONTACT ASTERRA              │ SEND AN INQUIRY              │
│                              │                              │
│ Corporate information        │ Name                         │
│ Email                        │ Email                        │
│ Phone                        │ Company                      │
│ Location                     │ Inquiry Type                 │
│                              │ Message                      │
│                              │                              │
│                              │ [Submit inquiry]             │
└──────────────────────────────┴──────────────────────────────┘
```

This creates a clear separation between:

**How to contact Asterra**

and

**How to submit an inquiry.**

---

# 8. Inquiry Form

Recommended fields:

```text
Full Name *
[________________________]

Email Address *
[________________________]

Company / Organization
[________________________]

Inquiry Type *
[ Select ]

Message *
[________________________
 ________________________]

[Send inquiry]
```

Additional fields should only be introduced when there is a genuine business requirement.

---

# 9. Inquiry Type

A useful category selector can route inquiries.

Possible options:

```text
General Inquiry
Business / Project Inquiry
Partnership
Media / Communications
Careers
Other
```

The exact categories should reflect Asterra's actual internal routing.

---

# 10. Form UX

The form should provide:

* Clear labels
* Required-field indicators
* Input validation
* Useful error messages
* Submission feedback
* Protection against accidental duplicate submissions

Example error:

```text
Please enter a valid email address.
```

Avoid vague errors such as:

```text
Invalid input.
```

---

# 11. Success State

After successful submission:

```text
INQUIRY RECEIVED

Thank you for contacting Asterra.

Your message has been submitted successfully.
Our team will review your inquiry.
```

Do not promise a specific response time unless Asterra has established one.

---

# 12. Error State

If submission fails:

```text
WE COULDN'T SEND YOUR INQUIRY

Please check your information and try again.

If the problem continues, contact us directly at:
[verified email]
```

The entered form information should not unnecessarily disappear.

---

# 13. Privacy Notice

A short privacy explanation should appear near the form if personal information is collected.

Example:

```text
By submitting this form, you agree that Asterra may
use the information provided to respond to your inquiry.
```

The final wording should correspond to Asterra's actual privacy policy and legal requirements.

---

# 14. Privacy Policy Link

If Asterra has a privacy policy:

```text
Privacy Policy →
```

This should be accessible from the form.

Do not invent a privacy policy page if one does not exist.

---

# 15. Office Locations

Optional.

If Asterra operates from multiple locations:

```text
OUR LOCATIONS

Addis Ababa
Address
Phone

Other Location
Address
Phone
```

For a single office, this can remain a simple contact information block.

---

# 16. Location Cards

If multiple offices exist:

```text
┌─────────────────────┐
│ ADDIS ABABA         │
│                     │
│ Address             │
│ Phone               │
│ Email               │
│                     │
│ View location →     │
└─────────────────────┘
```

Do not create elaborate location cards for a small number of offices.

---

# 17. Map

Optional.

A map can help visitors locate a physical office.

```text
┌──────────────────────────────────────────────┐
│                                              │
│                   MAP                        │
│                                              │
└──────────────────────────────────────────────┘
```

Use a map only when physical location is relevant.

A map should not replace written address information.

---

# 18. Accessibility of Location

Always provide the address as text.

Do not rely exclusively on:

* Map pins
* Images
* Interactive maps

Users should be able to understand the location without interacting with a map.

---

# 19. Careers Relationship

The Contact page should not replace the Careers system.

For employment inquiries:

```text
Looking for opportunities?

[Explore careers →]
```

This keeps:

```text
CAREERS
   ↓
JOB OPPORTUNITIES
   ↓
APPLICATION
```

separate from:

```text
CONTACT
   ↓
CORPORATE INQUIRY
```

---

# 20. Business Inquiry Relationship

A business inquiry can connect to relevant capabilities.

For example:

```text
Need to discuss a project?

[Explore capabilities →]
```

This allows users to understand Asterra before submitting an inquiry.

---

# 21. Mobile Layout

On mobile:

```text
CONTACT
   ↓
Hero
   ↓
Contact Information
   ↓
Inquiry Form
   ↓
Locations
   ↓
Map
   ↓
Careers / Supporting CTA
```

The form should remain the primary interaction.

---

# 22. Mobile Form

Use a single-column layout.

```text
Full Name
[____________]

Email
[____________]

Company
[____________]

Inquiry Type
[____________]

Message
[____________]

[Send inquiry]
```

Avoid multi-column fields on small screens.

---

# 23. CTA Hierarchy

The page should have one dominant action:

**Send an inquiry**

Secondary actions:

* Call
* Email
* View capabilities
* Explore careers

Do not give all actions equal visual weight.

---

# 24. Typography

Recommended hierarchy:

```text
CONTACT
   ↓
Hero statement
   ↓
Section heading
   ↓
Form labels / contact information
   ↓
Supporting text
```

Form labels should be clearly readable and never depend solely on placeholder text.

---

# 25. Visual Tone

The Contact page should be:

**Direct + Calm + Trustworthy + Professional**

Avoid:

* Overly decorative forms
* Excessive animation
* Aggressive sales copy
* Large promotional graphics
* Unnecessary form complexity

---

# 26. Accessibility

Required:

* Proper form labels
* Keyboard-accessible controls
* Visible focus states
* Accessible select controls
* Accessible error messages
* Accessible success messages
* Sufficient contrast
* Descriptive link text

Error messages should be associated with the relevant form field.

---

# 27. SEO Structure

Recommended:

```text
H1
Contact Asterra

H2
Corporate Contact

H2
Send an Inquiry

H2
Our Locations
```

The exact H2 structure depends on the final content.

---

# 28. Local SEO

If Asterra serves a defined geographic market, the Contact page can reinforce legitimate local signals through:

* Business name
* Physical address
* Phone
* Location information
* Opening hours where relevant
* LocalBusiness structured data when appropriate

Do not insert location keywords unnaturally.

---

# 29. Structured Data

Depending on the actual organization and location model, appropriate structured data may include:

```text
Organization
LocalBusiness
ContactPoint
PostalAddress
```

Only use structured data that accurately represents visible and verified information.

---

# 30. Metadata

The page should have:

* Unique title
* Useful meta description
* Canonical URL
* Appropriate Open Graph metadata

Example title pattern:

```text
Contact Asterra | [Relevant Descriptor]
```

The actual title should reflect Asterra's positioning.

---

# 31. Internal Linking

Useful relationships:

```text
Contact
 ├── About
 ├── Business Units
 ├── Projects
 ├── Insights
 └── Careers
```

The Contact page is the final destination of many user journeys.

---

# 32. Conversion Tracking

Where analytics infrastructure exists, consider tracking:

* Form started
* Form submitted
* Email click
* Phone click
* Location interaction
* Primary CTA click

The objective is to understand **meaningful engagement**, not simply page visits.

---

# 33. Performance

Avoid unnecessary third-party services.

Potential performance considerations:

* Map embeds
* CAPTCHA
* Analytics
* External fonts
* Large office photography

Load heavy elements only when they provide real value.

---

# 34. Security

The inquiry system should include appropriate protection against:

* Spam
* Automated submissions
* Malicious input
* Invalid file uploads, if files are accepted

Never expose private backend credentials or service keys in the frontend.

---

# 35. Form Data

Only collect information required to process the inquiry.

Avoid unnecessarily requesting:

* Date of birth
* Residential address
* Sensitive personal information
* Unrelated demographic information

The form should remain focused on the business purpose.

---

# 36. Component Map

```text
ContactPage
│
├── Header
│
├── ContactHero
│
├── ContactOverview
│   ├── Email
│   ├── Phone
│   └── Office
│
├── InquirySection
│   ├── ContactInformation
│   └── InquiryForm
│       ├── NameField
│       ├── EmailField
│       ├── CompanyField
│       ├── InquiryTypeField
│       ├── MessageField
│       └── SubmitButton
│
├── OptionalLocations
│
├── OptionalMap
│
├── OptionalCareersCTA
│
└── Footer
```

---

# 37. Relationship to Complete Asterra Architecture

The Contact page completes the primary corporate journey:

```text
HOME
 ↓
ABOUT
 ↓
BUSINESS
 ↓
PROJECTS
 ↓
INSIGHTS
 ↓
CONTACT
```

Alternative paths include:

```text
HOME → BUSINESS → PROJECT → CONTACT
```

```text
INSIGHTS → BUSINESS → CONTACT
```

```text
CAREERS → JOB DETAIL → APPLICATION
```

The Contact system therefore remains focused on **corporate inquiries**, while recruitment remains separate.

---

# 38. Complete Asterra Page Architecture

With this page completed:

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
│   └── Job Detail                      ✓
│
└── CONTACT
    └── Corporate Inquiry              ✓
```

---

# 39. Quality Gate

Before implementation:

### Contact

* Is the purpose of the page immediately clear?

### Form

* Are only necessary fields collected?

### Routing

* Can inquiries be directed appropriately?

### UX

* Can the form be completed quickly?

### Accessibility

* Are all fields and feedback states accessible?

### SEO

* Is legitimate location information represented where relevant?

### Security

* Is the submission endpoint protected?

### Conversion

* Is the primary inquiry action obvious?

### Integrity

* Are all contact details verified?

---

# 40. Final Visual Direction

```text
                 CONTACT
                    │
                    ↓
              TRUST / CLARITY
                    │
                    ↓
              SEND INQUIRY
                    │
                    ↓
              ASTERRA TEAM
                    │
                    ↓
               ENGAGEMENT
```

The page should feel like a **professional corporate reception desk translated into a digital experience**: clear destination, clear contact channels, minimal friction, and no unnecessary decoration.

---

# 41. Status

**Asterra Contact / Corporate Inquiry — Visual Specification: APPROVED**

## Asterra Core Page Specification Set

The core page architecture is now complete:

**Home → About → Leadership → Business → Projects → Insights → Careers → Contact**

The only item remaining in the architecture is the **optional Insights Category Pages**.
