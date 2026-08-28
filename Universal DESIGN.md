---
version: alpha
name: universal-design-analysis
description: Reusable design-analysis specification for converting visual references into implementation-ready design tokens, component rules, layout guidance, responsive behavior, accessibility requirements, and AI coding instructions.
---

# Universal Design Analysis

## Purpose

This document defines a reusable method for turning a design reference—website, screenshot, video, mockup, or visual resource—into a complete implementation-ready design specification.

The objective is to describe the **design system behind the reference**, not merely describe what it looks like.

A completed analysis should identify:

- Visual identity and design character
- Color system
- Typography hierarchy
- Spacing and sizing rhythm
- Layout and grid behavior
- Navigation
- Hero sections
- Buttons and interactive controls
- Cards and content patterns
- Forms and states
- Imagery and iconography
- Borders, radius, and elevation
- Motion and interaction
- Responsive behavior
- Accessibility requirements
- Reusable patterns
- Design-specific anti-patterns
- Implementation guidance for AI coding agents

---

# 1. Design Character

Describe the visual identity in one concise paragraph.

Cover:

- Overall mood
- Brand personality
- Visual density
- Whitespace
- Color behavior
- Typography personality
- Shape language
- Imagery style
- Depth/elevation
- Motion style

Avoid vague statements such as “modern”, “clean”, or “beautiful” without explaining what creates that impression.

A useful description explains the actual visual mechanisms:

> The interface uses a restrained neutral background, one dominant accent color, strong typographic hierarchy, generous section spacing, rounded media surfaces, and minimal elevation. Visual emphasis comes primarily from scale, contrast, and imagery rather than decorative effects.

---

# 2. Design Tokens

Extract repeated values into reusable tokens. Do not create a token simply to fill a section. Values should come from observable evidence or clearly marked estimates.

## 2.1 Colors

Document:

- Primary
- Primary hover
- Primary active
- Primary disabled
- Secondary
- Secondary hover
- Secondary active
- Primary text
- Body text
- Muted text
- Background
- Secondary background
- Surface
- Elevated surface
- Border
- Strong border
- Success
- Warning
- Error
- Information
- Overlay/scrim

Recommended structure:

```yaml
colors:
  primary: "#000000"
  primary-hover: "#000000"
  primary-active: "#000000"
  primary-disabled: "#000000"
  secondary: "#000000"
  ink: "#000000"
  body: "#000000"
  muted: "#000000"
  canvas: "#000000"
  surface: "#000000"
  border: "#000000"
  success: "#000000"
  warning: "#000000"
  error: "#000000"
  info: "#000000"
```

### Color Rules

- Use the primary color intentionally rather than everywhere.
- Keep neutral colors visually distinct from brand colors.
- Preserve sufficient contrast.
- Interaction states should remain visually related to the base component.
- Do not introduce additional accent colors without evidence.

---

## 2.2 Typography

Document the actual hierarchy instead of only naming the font.

Include:

- Display font
- Heading font
- Body font
- Monospace font where applicable
- Font sizes
- Weights
- Line heights
- Letter spacing
- Maximum readable line length
- Text alignment
- Uppercase usage

Recommended hierarchy:

| Style | Size | Weight | Line Height | Purpose |
|---|---:|---:|---:|---|
| Display XL | | | | Hero / major statement |
| Display LG | | | | Page heading |
| Display MD | | | | Major section heading |
| Heading LG | | | | Section heading |
| Heading MD | | | | Component heading |
| Heading SM | | | | Small heading |
| Body LG | | | | Lead text |
| Body MD | | | | Standard text |
| Body SM | | | | Supporting text |
| Caption | | | | Metadata |
| Button | | | | Actions |

### Typography Rules

- Preserve the hierarchy between display, heading, body, and metadata text.
- Avoid unnecessary font families.
- Match heading wrapping behavior.
- Maintain readable line lengths.
- Do not substitute typography with arbitrary system defaults when the reference clearly establishes a distinctive type system.

---

## 2.3 Spacing

Identify the repeated spacing rhythm used by the design.

Document:

- Inline spacing
- Component padding
- Card padding
- Content-group spacing
- Section spacing
- Page gutters
- Hero spacing
- Grid gaps

A spacing system may resemble:

```yaml
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "80px"
```

Do not force the reference into these values if the actual design uses another rhythm.

---

## 2.4 Radius

Document the geometry used throughout the interface:

- None
- Small
- Medium
- Large
- Extra large
- Pill/full
- Circular

Similar components should use consistent radius values.

---

## 2.5 Borders and Elevation

Determine whether the reference relies primarily on:

- Flat surfaces
- Borders
- Shadows
- Layered surfaces
- Glass/transparency
- A combination

Document:

- Border width
- Border color
- Shadow strength
- Surface hierarchy
- Hover elevation

Do not add shadows to a design that achieves separation through whitespace and borders.

---

# 3. Layout System

## 3.1 Container

Document:

- Maximum content width
- Desktop gutters
- Tablet gutters
- Mobile gutters
- Full-width sections
- Constrained sections

## 3.2 Grid

Document:

- Desktop column count
- Tablet column count
- Mobile column count
- Column gaps
- Row gaps
- Alignment
- Card widths
- Image ratios

## 3.3 Visual Hierarchy

Explain what controls attention:

1. Scale
2. Position
3. Color
4. Contrast
5. Typography
6. Imagery
7. Whitespace
8. Motion

Rank these according to the actual reference.

## 3.4 Section Composition

Identify recurring structures such as:

- Centered hero
- Text/image split
- Alternating editorial sections
- Feature grids
- Product grids
- Full-width media
- Testimonials
- Logo strips
- Pricing blocks
- FAQ sections
- CTA sections

Describe when each pattern should be reused.

---

# 4. Navigation

## Desktop

Document:

- Header height
- Logo position
- Navigation alignment
- CTA position
- Background
- Border/shadow
- Active state
- Scroll behavior

## Mobile

Document:

- Menu trigger
- Drawer/overlay behavior
- Logo behavior
- CTA behavior
- Navigation stacking
- Closing behavior

### Navigation Rules

- Active navigation must be visually distinguishable.
- Focus states must remain visible.
- Navigation must not create horizontal overflow.
- Mobile navigation should preserve the desktop information hierarchy.

---

# 5. Hero

Document:

- Hero height
- Content width
- Heading scale
- Supporting text
- CTA arrangement
- Image/video treatment
- Alignment
- Background
- Decorative elements
- Responsive transformation

The hero should establish the design language immediately.

Do not add gradients, decorative shapes, additional CTAs, or animations unless they are supported by the reference.

---

# 6. Buttons

For every button variant document:

- Background
- Text color
- Typography
- Height
- Padding
- Radius
- Icon treatment
- Hover
- Active
- Focus
- Disabled
- Loading

Common variants:

- Primary
- Secondary
- Outline
- Ghost
- Text/link
- Icon-only

### Button Rules

- Primary actions receive the strongest appropriate emphasis.
- Labels remain concise.
- All states must be distinguishable.
- Avoid unnecessary variants.

---

# 7. Cards

Analyze cards by purpose rather than treating every bordered area as a card.

Possible types:

- Feature
- Product
- Service
- Pricing
- Testimonial
- Blog/article
- Profile
- Dashboard
- Image-led

For each recurring type document:

- Surface
- Border
- Radius
- Padding
- Image ratio
- Typography
- CTA
- Hover behavior
- Elevation

Do not turn every section into a card if the reference uses open editorial layouts.

---

# 8. Forms

Document:

- Labels
- Inputs
- Textareas
- Selects
- Placeholder text
- Helper text
- Required state
- Focus state
- Error state
- Success state
- Disabled state
- Loading state

### Form Rules

- Labels must remain available to users.
- Placeholder text should not replace labels.
- Focus must be obvious.
- Errors should explain how to correct the problem.
- Controls must be usable on touch devices.

---

# 9. Imagery

## Image Role

Identify whether imagery is:

- Decorative
- Informational
- Editorial
- Product-led
- Brand-led
- Background media
- Content media

## Image Treatment

Document:

- Aspect ratio
- Cropping
- Object position
- Border radius
- Overlay
- Caption
- Loading behavior

### Image Rules

- Preserve important subjects when cropping.
- Maintain consistent aspect ratios where the design uses them.
- Do not introduce imagery that changes the visual identity.

---

# 10. Iconography

Document:

- Icon family/style
- Outline vs filled
- Stroke width
- Icon sizes
- Optical alignment
- Container shape
- Icon-to-text spacing

Do not mix unrelated icon systems.

---

# 11. Interaction and Motion

Document only motion that contributes to the experience.

Include:

- Hover transitions
- Focus transitions
- Menu animation
- Modal animation
- Scroll animation
- Image animation
- Loading animation
- Page transitions

### Motion Rules

- Motion should communicate state or hierarchy.
- Use consistent timing and easing.
- Avoid excessive animation.
- Respect `prefers-reduced-motion`.

---

# 12. Responsive Behavior

Responsive behavior is part of the design system and must not be treated as an afterthought.

## Desktop

Document:

- Container
- Columns
- Navigation
- Typography
- Image treatment
- Section spacing

## Tablet

Document:

- Grid changes
- Navigation changes
- Typography changes
- Padding changes

## Mobile

Document:

- Navigation transformation
- Column collapse
- Text alignment
- Image ratio
- Button stacking
- Section spacing
- Touch targets

### Responsive Rules

- Never allow unintended horizontal scrolling.
- Preserve hierarchy when layouts collapse.
- Do not simply shrink desktop layouts.
- Recompose layouts when required.
- Preserve image focal points.
- Maintain usable touch targets.

---

# 13. Accessibility

The implementation must preserve:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Color contrast
- Accessible labels
- Meaningful alt text
- Reduced-motion support
- Touch-friendly controls
- Clear form errors

Accessibility is part of the design specification.

---

# 14. Component States

Every interactive component should be considered for:

- Default
- Hover
- Focus
- Active
- Selected
- Disabled
- Loading
- Error
- Success

If a state is not visible, derive it conservatively from the base component rather than inventing an unrelated style.

---

# 15. Content Density

Classify the reference as:

- Minimal
- Balanced
- Dense
- Data-heavy
- Editorial
- Image-heavy

This influences:

- Line length
- Number of cards per section
- Section spacing
- Navigation density
- Information hierarchy

Do not make a dense interface artificially spacious or a minimalist interface unnecessarily crowded.

---

# 16. Reusable Patterns

Identify patterns that should become reusable components.

Examples:

- Navigation
- Hero
- CTA group
- Feature section
- Card grid
- Testimonial
- Logo strip
- Pricing block
- FAQ
- Footer
- Form section

For each pattern document:

- Purpose
- Structure
- Visual treatment
- Responsive behavior
- Reuse conditions
- Exceptions

---

# 17. Brand-Specific vs Reusable

Separate the visual rules that belong to the reference from the rules that can be reused elsewhere.

## Brand-Specific

Examples:

- Logo
- Brand colors
- Custom typeface
- Proprietary illustration
- Brand photography
- Custom iconography

## Reusable

Examples:

- Spacing rhythm
- Component construction
- Grid behavior
- Form states
- Responsive rules
- Typography hierarchy
- Accessibility patterns

When adapting a reference, preserve the design logic while replacing brand-specific assets when appropriate.

---

# 18. Evidence and Confidence

Every analysis should distinguish observation from inference.

## High Confidence

Use when:

- A color can be directly sampled.
- A font is confirmed.
- A component appears repeatedly.
- A layout pattern appears across multiple references.
- Responsive behavior is visibly demonstrated.

## Medium Confidence

Use when:

- A value is estimated from screenshots.
- A spacing rhythm is inferred.
- A font is likely but not confirmed.
- A state is inferred from limited evidence.

## Low Confidence

Use when:

- The reference does not provide enough evidence.
- A value must be guessed.
- Behavior is inferred without a visible example.

Do not present low-confidence assumptions as facts.

---

# 19. Measurement Rules

When analyzing screenshots or videos:

1. Prefer repeated measurements over single measurements.
2. Use relationships when exact pixel values cannot be determined.
3. Compare multiple components before defining a token.
4. Sample colors from flat areas instead of shadows or anti-aliased edges.
5. Identify font characteristics before naming a font.
6. Consider screenshot scaling as a measurement error source.
7. Clearly mark approximations.

---

# 20. Anti-Patterns

Document implementation choices that would cause the final result to diverge from the reference.

Common examples:

- Arbitrary colors
- Excessive shadows
- Inconsistent radius
- Too many fonts
- Random spacing
- Unnecessary gradients
- Excessive animations
- Making every section a card
- Poor mobile stacking
- Weak visual hierarchy
- Oversized navigation
- Inconsistent icons
- Ignoring component states

---

# 21. Do's

- Treat the reference as a complete visual system.
- Reuse documented tokens.
- Preserve hierarchy.
- Preserve spacing rhythm.
- Reuse established components.
- Match typography before decorative details.
- Match layout before micro-interactions.
- Implement responsive behavior intentionally.
- Keep imagery consistent.
- Preserve accessibility.
- Base decisions on observable evidence.
- Mark estimates clearly.

# 22. Don'ts

- Do not redesign the reference into a different visual language.
- Do not introduce arbitrary colors.
- Do not add unnecessary gradients.
- Do not add shadows everywhere.
- Do not use unrelated font families.
- Do not change hierarchy without reason.
- Do not create unnecessary one-off components.
- Do not ignore mobile behavior.
- Do not copy brand-specific assets blindly into another project.
- Do not claim estimated values are exact.
- Do not mix unrelated content or SEO strategy into the design specification.

---

# 23. AI Coding Agent Instructions

When an AI coding agent uses this DESIGN.md, treat the document as the visual source of truth.

The agent should:

1. Inspect the existing project before editing it.
2. Reuse existing components when they match the documented system.
3. Reuse documented design tokens.
4. Preserve typography hierarchy.
5. Preserve spacing rhythm.
6. Preserve component states.
7. Implement responsive behavior intentionally.
8. Preserve accessibility.
9. Avoid redesigning unrelated areas.
10. Avoid introducing new visual patterns without evidence.
11. Resolve ambiguous values by maintaining consistency with existing tokens.
12. Separate brand-specific assets from reusable patterns.
13. Validate desktop and mobile layouts.
14. Prioritize structural fidelity before decorative polish.

## Implementation Priority

When implementation time is limited, use this order:

1. Overall layout
2. Container and grid
3. Typography
4. Color system
5. Navigation
6. Primary CTA
7. Major components
8. Spacing
9. Imagery
10. Borders and elevation
11. Interaction states
12. Motion
13. Micro-details

---

# 24. Analysis Workflow

Use this workflow whenever a new design resource is provided.

## Step 1 — Identify Design Language

Determine mood, personality, density, visual style, and dominant visual medium.

## Step 2 — Extract Tokens

Identify colors, typography, radius, spacing, borders, and elevation.

## Step 3 — Identify Components

Find recurring navigation, buttons, cards, forms, inputs, badges, tabs, modals, and footer patterns.

## Step 4 — Analyze Layout

Determine container width, grid, alignment, section spacing, content density, and responsive structure.

## Step 5 — Analyze Interaction

Identify hover, focus, active, selected, loading, error, success, and motion behavior.

## Step 6 — Analyze Responsive Behavior

Compare desktop, tablet, and mobile references. If only one viewport is available, clearly label inferred behavior.

## Step 7 — Validate Consistency

Check that tokens match repeated patterns, components share geometry, typography is coherent, spacing is consistent, and responsive rules preserve hierarchy.

## Step 8 — Produce Implementation Guidance

Convert the analysis into explicit rules a designer or coding agent can follow.

---

# 25. Final Validation Checklist

Before considering a design analysis complete:

- [ ] Frontmatter is valid.
- [ ] Colors are documented.
- [ ] Typography is documented.
- [ ] Spacing is documented.
- [ ] Radius is documented.
- [ ] Borders/elevation are documented.
- [ ] Components are documented.
- [ ] Component states are documented.
- [ ] Navigation is documented.
- [ ] Hero is documented.
- [ ] Cards are documented.
- [ ] Forms are documented.
- [ ] Imagery is documented.
- [ ] Iconography is documented.
- [ ] Layout is documented.
- [ ] Responsive behavior is documented.
- [ ] Accessibility is documented.
- [ ] Motion is documented.
- [ ] Reusable patterns are documented.
- [ ] Brand-specific elements are separated from reusable rules.
- [ ] Evidence/confidence is documented where needed.
- [ ] Do's and Don'ts are documented.
- [ ] AI implementation guidance is documented.
- [ ] No unrelated SEO/content strategy is included.
- [ ] The document can stand alone without the original conversation.

# Output Standard

A completed DESIGN.md should be:

- Specific
- Evidence-based
- Reusable
- Implementation-ready
- Consistent
- Detailed where necessary
- Concise where possible

The purpose is not to make the design sound sophisticated.

The purpose is to make the design **reproducible**.
