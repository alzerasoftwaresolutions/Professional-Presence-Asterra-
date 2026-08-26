# Asterra Contact / Corporate Inquiry — Detailed Page Specification

**Package:** Package 3 — Professional Presence
**Template:** Template 01 — Corporate Authority
**Example Client:** Asterra Manufacturing Group
**Page:** Contact / Corporate Inquiry
**Route:** `/contact`
**Version:** 1.0
**Status:** Design & implementation specification

> This specification follows the established Package 3 architecture, Template 01 — Corporate Authority, Asterra Design Manual, Universal Design Analysis, and the SEO Analytics & Optimization Playbook. Only relevant SEO requirements are applied.

---

# 1. Page Purpose

The Contact page is the primary **conversion endpoint** of the Asterra website.

Its purpose is to help visitors:

* Start a business conversation
* Request information
* Ask about capabilities
* Discuss a project
* Reach the appropriate Asterra team
* Find legitimate corporate contact information

The page should answer:

> **How can I reach the right Asterra team about my requirement?**

---

# 2. Page Objectives

The page should:

* Make contacting Asterra easy.
* Clearly distinguish inquiry types.
* Reduce unnecessary form friction.
* Provide verified contact information.
* Establish trust.
* Support mobile users.
* Provide clear confirmation after submission.
* Support conversion measurement.
* Avoid collecting unnecessary personal information.

---

# 3. Page Position in Architecture

```text id="contactarch"
Any Page
   ↓
Contact
   ├── General Inquiry
   ├── Project Inquiry
   ├── Business Inquiry
   ├── Partnership
   └── Other
```

Primary conversion paths:

```text id="contactpaths"
Project
   ↓
Contact

Business Unit
   ↓
Contact

Careers
   ↓
Application / Careers

Homepage
   ↓
Contact
```

---

# 4. Primary Audiences

* Prospective customers
* Existing customers
* Business partners
* Suppliers
* Investors or corporate stakeholders
* Media contacts where applicable
* General visitors

---

# 5. Page Structure

```text id="contactstructure"
Global Header
      ↓
Breadcrumb
      ↓
01 Contact Hero
      ↓
02 Contact Information
      ↓
03 Inquiry Form
      ↓
04 Locations / Offices
      ↓
05 Additional Contact Channels
      ↓
06 Final Corporate CTA
      ↓
Global Footer
```

The exact sections depend on Asterra's actual contact infrastructure.

---

# 6. Global Header

Use the established Asterra global header.

```text
[ASTERRA LOGO]

About   Business   Projects   Insights   Careers   Contact

[Request an Inquiry]
```

On the Contact page, the primary header CTA should not duplicate the page's primary form unnecessarily.

---

# 7. Breadcrumb

Recommended:

```text
Home / Contact
```

---

# 8. Section 01 — Contact Hero

## Objective

Immediately communicate that the visitor has reached Asterra's corporate inquiry point.

### Eyebrow

`CONTACT`

### H1

> **Let's discuss what you need to achieve.**

Alternative:

> **Talk to the Asterra team.**

### Supporting Copy

A concise explanation of what visitors can contact Asterra about.

Example structure:

> Whether you are exploring a new project, looking for a capability, or interested in working with Asterra, send us your requirements and we will direct your inquiry to the appropriate team.

---

# 9. Hero Composition

Preferred:

```text
┌──────────────────────────────────────────────────────────────┐
│ CONTACT                                                      │
│                                                              │
│ LET'S DISCUSS WHAT        Contact information /              │
│ YOU NEED TO ACHIEVE.      corporate image                   │
│                                                              │
│ Supporting copy                                              │
└──────────────────────────────────────────────────────────────┘
```

The hero should be calm and direct.

This page does not require a visually complicated hero.

---

# 10. Section 02 — Contact Information

## Objective

Give visitors direct alternatives to the form.

Recommended:

```text
CONTACT INFORMATION

General Inquiries
[email / phone]

Business Inquiries
[email / phone]

Office
[Address]

Hours
[Business Hours]
```

Only display verified information.

---

# 11. Contact Information Hierarchy

Recommended priority:

1. Primary inquiry channel
2. Phone
3. Email
4. Physical address
5. Business hours
6. Other channels

Do not bury the primary contact method below decorative content.

---

# 12. Contact Methods

Potential methods:

```text
Email
Phone
Office
WhatsApp
LinkedIn
Map / Directions
```

Only include channels actively monitored by Asterra.

Do not list a social platform merely for completeness.

---

# 13. Section 03 — Corporate Inquiry Form

## Objective

Capture enough information to route the inquiry without creating unnecessary friction.

Recommended heading:

> **Tell us about your requirement.**

---

# 14. Form Structure

Recommended initial fields:

```text
Full Name *
Company *
Email *
Phone
Inquiry Type *
Message *
```

Optional:

```text
Project / Service
Location
Preferred Contact Method
```

The form should remain intentionally compact.

---

# 15. Inquiry Type

Recommended select:

```text
What can we help you with?

[ Select an inquiry type ]

Project / Service Inquiry
Business Partnership
Supplier / Vendor Inquiry
General Inquiry
Other
```

The exact categories should reflect Asterra's actual workflow.

---

# 16. Conditional Fields

If operationally useful, additional fields can appear based on inquiry type.

Example:

```text
Project / Service Inquiry
        ↓
Project Type
Estimated Location
Brief Project Description
```

Avoid showing every field to every visitor.

---

# 17. Message Field

Recommended label:

> **How can we help?**

Placeholder:

> Tell us briefly about your requirement, project, or question.

Do not make the placeholder overly long.

---

# 18. File Upload

Optional.

If project inquiries require documentation:

```text
Attach supporting files
Optional
```

Supported formats should be clearly stated.

Example:

```text
PDF, DOCX, XLSX, JPG, PNG
```

File-size limits must be defined by the implementation.

---

# 19. File Upload Rules

If enabled:

* Validate file type.
* Validate file size.
* Prevent executable uploads.
* Store files securely.
* Do not expose uploaded files publicly.
* Restrict access to authorized staff.
* Delete files according to the organization's retention policy.

If file uploads are not operationally necessary, omit them.

---

# 20. Privacy Notice

The form should include a concise privacy statement.

Example:

> By submitting this form, you agree that Asterra may use the information provided to respond to your inquiry.

A link to the applicable privacy policy should be provided if one exists.

Do not create a false privacy-policy link.

---

# 21. Required Fields

Use the minimum required information.

Recommended:

```text
Full Name *
Email *
Inquiry Type *
Message *
```

Company can be required for B2B inquiries if appropriate.

Avoid requiring:

* Address
* Date of birth
* Job title
* Country
* Phone

unless there is a legitimate operational reason.

---

# 22. Validation

Client-side validation should check:

* Required fields
* Valid email format
* Reasonable field lengths
* File type/size where applicable

Server-side validation must also be implemented.

Client-side validation alone is insufficient.

---

# 23. Form Error States

Errors should be clear.

Example:

```text
Email address
Please enter a valid email address.
```

Avoid:

```text
Invalid input.
```

Errors should appear near the relevant field.

---

# 24. Submission State

While submitting:

```text
[Sending...]
```

Prevent duplicate submissions.

The button should become temporarily disabled.

---

# 25. Success State

After successful submission:

```text
MESSAGE RECEIVED

Thank you. Your inquiry has been submitted successfully.

The appropriate Asterra team will review your message and respond through the contact information provided.

[Return to Home]
```

Do not promise a specific response time unless Asterra has established one.

---

# 26. Failure State

If submission fails:

```text
WE COULDN'T SEND YOUR MESSAGE

Something went wrong while submitting your inquiry.

Please try again or contact us directly using the information on this page.

[Try Again]
```

Provide a direct fallback contact method.

---

# 27. Anti-Spam Protection

The contact form should include appropriate protection against spam.

Possible techniques:

* Server-side rate limiting
* Honeypot fields
* CAPTCHA or equivalent where necessary
* Input validation
* Abuse monitoring

Do not make CAPTCHA unnecessarily difficult for legitimate users.

---

# 28. Section 04 — Locations / Offices

Only include this section if Asterra has multiple legitimate offices or meaningful physical locations.

Recommended:

```text
OUR LOCATIONS

Addis Ababa
[Address]
[Phone]
[Directions]

[Additional Office]
[Address]
[Phone]
```

---

# 29. Single Location

If Asterra has one primary location, keep the section simple.

```text
VISIT US

[Address]

[Map]
```

Do not create a large office directory for one location.

---

# 30. Map

An embedded map can help visitors locate the office.

Requirements:

* Correct location
* Accessible alternative address
* Avoid loading a heavy map before it is needed if performance is affected

A "Get Directions" link can be provided as an alternative.

---

# 31. Location Structured Data

If the business has a physical public location, relevant `Organization` or `LocalBusiness` structured data may be appropriate depending on the actual business type.

Do not automatically use `LocalBusiness` simply because an address exists.

The schema should accurately represent the organization.

---

# 32. Section 05 — Additional Contact Channels

Potential:

```text
GENERAL INQUIRIES
[email]

PHONE
[number]

BUSINESS DEVELOPMENT
[email]

CAREERS
[email / careers page]

PARTNERSHIPS
[email]
```

Only create separate channels when Asterra actually operates them.

---

# 33. Contact Routing

The architecture should support inquiry routing.

```text
Inquiry Type
      ↓
Routing Logic
      ↓
Relevant Asterra Team
```

Example:

```text
Project Inquiry
      ↓
Business Development
```

```text
Supplier Inquiry
      ↓
Procurement
```

```text
Career Inquiry
      ↓
Careers / HR
```

The exact routing must be defined operationally.

---

# 34. Form Data Model

Recommended:

```text
inquiry
├── id
├── name
├── company
├── email
├── phone
├── inquiryType
├── projectType
├── location
├── message
├── attachment
├── consent
├── createdAt
└── status
```

---

# 35. Inquiry Status

Possible internal states:

```text
NEW
IN_REVIEW
ROUTED
RESPONDED
CLOSED
```

This is an implementation consideration rather than something shown publicly.

---

# 36. Data Storage

If a backend is used:

* Store only required data.
* Secure stored inquiries.
* Restrict administrative access.
* Protect uploaded files.
* Use HTTPS.
* Follow appropriate retention rules.

If the Professional Presence package does not require persistent inquiry management, a secure email-based workflow may be simpler.

---

# 37. Email Notification

A new inquiry may trigger an internal notification.

Example:

```text
New Website Inquiry

Type: Project Inquiry
Name: [Name]
Company: [Company]
Email: [Email]

Message:
[Message]

View / Manage Inquiry →
```

Do not expose sensitive form information unnecessarily in email notifications.

---

# 38. Confirmation Email

If implemented, the visitor may receive a confirmation.

Keep it concise:

```text
Subject:
We received your inquiry — Asterra

Your message has been received successfully.

Thank you for contacting Asterra.
```

Do not promise a response time unless one is actually guaranteed.

---

# 39. Section 06 — Corporate CTA

The Contact page is already a conversion page, so the final CTA should not create another competing action.

A simple statement is sufficient:

> **Ready to start a conversation?**

**Send an Inquiry**

---

# 40. Responsive Design

## Desktop

```text
Hero
↓
Contact Information + Inquiry Form
↓
Locations
↓
Additional Channels
↓
CTA
```

Preferred main layout:

```text
┌───────────────────────┬──────────────────────────────┐
│ Contact Information   │ Inquiry Form                 │
│                       │                              │
│ Email                 │ Name                         │
│ Phone                 │ Company                      │
│ Address               │ Email                        │
│ Hours                 │ Inquiry Type                 │
│                       │ Message                      │
│                       │ [Send Inquiry]               │
└───────────────────────┴──────────────────────────────┘
```

## Mobile

```text
Hero
↓
Contact Information
↓
Inquiry Form
↓
Location
↓
Additional Channels
↓
CTA
```

The form should not become difficult to use on small screens.

---

# 41. Typography

Continue the established Asterra typography system.

### IBM Plex Serif

Use for:

* H1
* Major contact statement

### IBM Plex Sans

Use for:

* Form labels
* Inputs
* Contact details
* Body copy
* Buttons
* Navigation

---

# 42. Color

Continue:

* Deep Evergreen
* Mineral Teal
* Warm Ivory
* White
* Ink
* Supporting neutrals

Form states should remain consistent with the design system.

---

# 43. Motion

Keep motion minimal.

Appropriate:

* Input focus transitions
* Button hover
* Success-state transition
* Subtle section reveal

Avoid:

* Animated form fields
* Distracting background animations
* Auto-playing video

The user's primary task is completing the inquiry.

---

# 44. SEO — Page Intent

The Contact page primarily serves:

* Navigational intent
* Branded intent
* Local intent where relevant
* Commercial conversion intent

The goal is not to rank for broad generic keywords.

---

# 45. SEO — Title

Recommended:

```text
Contact Asterra | Asterra Manufacturing Group
```

---

# 46. SEO — Meta Description

Recommended structure:

```text
Contact Asterra for project, business, partnership, and general inquiries. Find our contact information and send a message to the appropriate team.
```

Adjust to actual contact options.

---

# 47. SEO — Heading Structure

Recommended:

```text
H1
Contact Asterra

H2
Contact Information

H2
Tell Us About Your Requirement

H2
Our Location

H2
Other Ways to Reach Us
```

Do not use headings purely for visual styling.

---

# 48. SEO — Organization Signals

The Contact page should provide consistent:

* Organization name
* Address where public
* Phone
* Email
* Business hours where relevant
* Social profiles where officially maintained

These details should align with other legitimate business listings.

---

# 49. SEO — Local SEO

Where local visibility matters, verify consistency between:

* Website
* Google Business Profile
* Important business directories
* Other legitimate business profiles

Name, address, and phone information should remain consistent.

Do not insert keywords into the official business name.

---

# 50. SEO — Structured Data

Potentially relevant:

```text
Organization
PostalAddress
ContactPoint
BreadcrumbList
```

Where applicable.

The implementation should use the schema properties appropriate to the actual organization.

---

# 51. SEO — Internal Linking

The Contact page should be reachable from:

* Header
* Footer
* Homepage CTA
* Business Unit pages
* Project pages
* Relevant Insights
* Careers where appropriate

Project pages can use contextual CTAs:

> Discuss a similar project → Contact

Business pages:

> Discuss your requirements → Contact

---

# 52. SEO — Indexability

The Contact page should normally remain indexable.

Do not accidentally add:

```text
noindex
```

unless there is a specific reason.

---

# 53. SEO — Performance

Contact pages should be lightweight.

Requirements:

* Optimize any hero image.
* Avoid unnecessary video.
* Defer heavy map resources where possible.
* Minimize third-party scripts.
* Avoid loading unnecessary tracking libraries before consent where required.

---

# 54. SEO — Mobile

Test:

* Form usability
* Input sizing
* Keyboard behavior
* Error states
* Contact buttons
* Phone links
* Email links
* Map interaction
* CTA placement

The contact experience should work without requiring a desktop.

---

# 55. AI/Search Accessibility

Important corporate contact information should exist as readable text.

Expose:

```text
Organization
Email
Phone
Address
Hours
Inquiry Types
```

Do not place essential contact information only inside an image or map.

---

# 56. Accessibility

Required:

* Labels for all fields
* Keyboard navigation
* Visible focus states
* Clear required-field indicators
* Accessible error messages
* Accessible success state
* Accessible file upload if used
* Sufficient contrast
* Descriptive link text

---

# 57. Security

The implementation should protect the contact system against:

* Spam
* Automated abuse
* Injection attempts
* Malicious file uploads
* Excessive request rates
* Unauthorized inquiry access

Never expose internal API keys or email credentials in frontend code.

---

# 58. Privacy

Collect only information necessary for the stated purpose.

Potentially sensitive information should not be requested unless genuinely required.

If personal information is stored:

* Define retention.
* Restrict access.
* Protect transmission.
* Protect storage.
* Provide appropriate privacy information.

---

# 59. Component Architecture

### Shared

```text
Header
Footer
Breadcrumb
Button
PageContainer
```

### Contact

```text
ContactHero
ContactInformation
InquiryForm
InquiryTypeSelect
ContactField
FileUpload
FormStatus
OfficeLocation
ContactChannels
ContactCTA
```

Optional:

```text
OfficeMap
```

---

# 60. Implementation Rules

The implementation agent should:

1. Follow Package 3.
2. Follow Template 01.
3. Follow the Asterra Design Manual.
4. Reuse the global design system.
5. Keep the form concise.
6. Use only verified contact information.
7. Implement server-side validation.
8. Protect inquiry data.
9. Provide clear success/failure states.
10. Maintain accessibility.
11. Optimize mobile usability.
12. Apply relevant SEO requirements.
13. Ensure the page remains crawlable.
14. Use appropriate organization/contact structured data.
15. Avoid unnecessary backend complexity.
16. Provide a reliable fallback contact method.

---

# 61. Anti-Patterns

Do not create:

* Long unnecessary forms
* Fake contact information
* Unmonitored email addresses
* Decorative contact sections that obscure the form
* Required fields without operational justification
* Unnecessary CAPTCHA friction
* Public inquiry records
* Insecure file uploads
* Heavy map embeds by default
* Keyword-stuffed contact copy
* Fake response-time promises
* Multiple competing CTAs

---

# 62. QA Checklist

## Content

* [ ] Organization name is correct.
* [ ] Email addresses are verified.
* [ ] Phone numbers are verified.
* [ ] Physical address is correct.
* [ ] Business hours are accurate.
* [ ] Inquiry categories reflect actual routing.
* [ ] Privacy wording is approved.
* [ ] Map location is correct.

## Form

* [ ] Required fields work.
* [ ] Email validation works.
* [ ] Server-side validation exists.
* [ ] Spam protection exists.
* [ ] Duplicate submission is prevented.
* [ ] Success state works.
* [ ] Failure state works.
* [ ] Fallback contact method is available.
* [ ] File uploads are secure if enabled.

## Design

* [ ] Hero is clear.
* [ ] Contact details are easy to find.
* [ ] Form is visually prominent.
* [ ] Form is not unnecessarily long.
* [ ] CTA hierarchy is clear.
* [ ] Asterra design system is maintained.
* [ ] Mobile layout is comfortable.

## SEO

* [ ] Unique title.
* [ ] Useful meta description.
* [ ] Correct H1.
* [ ] Logical headings.
* [ ] Organization information is consistent.
* [ ] Relevant structured data is implemented.
* [ ] Page is indexable.
* [ ] Internal links are present.
* [ ] Local SEO information is consistent where applicable.

## Accessibility

* [ ] Every field has a label.
* [ ] Keyboard navigation works.
* [ ] Focus states are visible.
* [ ] Errors are understandable.
* [ ] Success state is accessible.
* [ ] Buttons have descriptive names.
* [ ] Contrast is sufficient.
* [ ] File upload is accessible if used.

---

# 63. Completion Criteria

The Contact specification is complete when:

* Contact purpose is defined.
* Contact information architecture is defined.
* Hero is defined.
* Inquiry form is defined.
* Inquiry types are defined.
* Validation is defined.
* Success/failure states are defined.
* Spam protection is defined.
* File-upload rules are defined.
* Privacy considerations are defined.
* Contact routing is defined.
* Location section is defined.
* Responsive behavior is defined.
* SEO requirements are defined.
* Local SEO requirements are defined.
* Structured data is defined.
* Accessibility requirements are defined.
* Security requirements are defined.
* Component architecture is defined.
* QA requirements are defined.

---

# 64. Updated Asterra Architecture

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
│   ├── Careers / Opportunities Listing
│   └── Job Detail (Optional)
│
└── CONTACT
    └── Corporate Inquiry              ← CURRENT
```

### Next logical file

**Asterra Insights / Knowledge Resources — Listing Page Specification**
