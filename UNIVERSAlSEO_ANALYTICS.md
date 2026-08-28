# SEO Analytics & Optimization Playbook

## 1. Purpose

This resource provides a reusable framework for analyzing and improving a website's SEO performance.

It is designed to help a team evaluate a website from multiple perspectives:

- Search visibility
- Technical SEO
- On-page SEO
- Content quality and search intent
- Website performance
- UX and design
- Local SEO
- Internal linking
- Backlinks and authority
- Analytics and conversions
- Search engine and AI-search accessibility

The goal is not simply to collect SEO scores. The goal is to identify problems, understand their impact, prioritize them, and turn the findings into practical recommendations.

---

## 2. SEO Analysis Workflow

A useful SEO analysis should follow this sequence:

1. Understand the business and its target audience.
2. Identify the website's main goals and conversions.
3. Understand the target locations and search intent.
4. Crawl and inspect the website.
5. Analyze technical SEO.
6. Analyze page structure and on-page SEO.
7. Evaluate content quality and topical coverage.
8. Analyze performance and mobile experience.
9. Evaluate design and UX factors that affect search performance.
10. Review local SEO when location-based visibility matters.
11. Review internal links and backlinks.
12. Analyze search and visitor data when access is available.
13. Identify issues and opportunities.
14. Prioritize recommendations by impact and effort.
15. Produce a clear action plan.

---

# 3. Search Engine Discovery & Indexing

Search engines need to be able to discover, crawl, understand, and index a website before its pages can appear in search results.

## What to Analyze

### Google Search Console

Check:

- Domain/property verification
- Indexing status
- Indexed and non-indexed pages
- Search queries
- Search impressions
- Clicks
- Average position
- Click-through rate (CTR)
- URL inspection results
- Sitemap status
- Manual actions and security issues

### Sitemap

Check that:

- `sitemap.xml` exists where appropriate.
- It contains canonical, indexable URLs.
- It does not contain unnecessary redirects, errors, or blocked URLs.
- Important pages are represented.
- The sitemap is submitted to relevant webmaster tools.

### Robots.txt

Check that:

- The file exists when appropriate.
- Important pages are not accidentally blocked.
- The sitemap location is declared where useful.
- Development or staging paths are not unintentionally exposed.

### Indexability

For important pages, check:

- HTTP status code
- `noindex` directives
- Canonical URL
- Robots directives
- Crawl accessibility
- Duplicate versions of the page
- Redirect chains

### Important Principle

Sitemap submission can help search engines discover URLs, but it does not guarantee crawling, indexing, or rankings.

---

# 4. Technical SEO

Technical SEO ensures that search engines and users can access and understand the website efficiently.

## Analyze

### Crawlability

Check:

- Broken links
- Redirect chains
- 4xx and 5xx errors
- Incorrect robots directives
- Orphan pages
- Crawlable navigation
- JavaScript-dependent content

### URL Structure

Good URLs should generally be:

- Descriptive
- Short enough to understand
- Consistent
- Human-readable
- Stable
- Free from unnecessary parameters when possible

Avoid unnecessarily complex URLs and inconsistent URL patterns.

### Canonicalization

Check whether:

- Each important page has the correct canonical URL.
- Duplicate URL versions are consolidated.
- Canonicals do not point to unrelated pages.
- HTTP/HTTPS and www/non-www versions are handled consistently.

### HTTPS & Security

Check:

- HTTPS is enabled.
- HTTP redirects correctly to HTTPS.
- There are no obvious mixed-content problems.
- Security-related configuration is appropriate for the website.

### Structured Data

Identify relevant Schema.org opportunities, such as:

- Organization
- LocalBusiness
- WebSite
- WebPage
- Article
- BreadcrumbList
- Product
- Service
- FAQ where appropriate and supported

Structured data should accurately represent visible page content. It should not be added simply to manipulate search results.

---

# 5. On-Page SEO

On-page SEO evaluates how clearly each page communicates its topic, purpose, and relevance.

## Title Tags

Check:

- Every important page has a unique title.
- The title accurately describes the page.
- The primary topic is clear.
- Titles are written for users rather than keyword stuffing.

## Meta Descriptions

Check:

- Important pages have useful descriptions.
- The description accurately reflects the page.
- It communicates a reason to click.
- Keywords are used naturally when relevant.

Meta descriptions can influence how a search result is presented, but they are not a direct ranking guarantee.

## Heading Structure

Check:

- One clear primary page topic.
- Logical H1/H2/H3 hierarchy.
- Headings describe the content that follows.
- Headings are not used only for visual styling.

## Image SEO

Check:

- Descriptive filenames
- Useful alt text
- Appropriate image dimensions
- Modern formats where supported
- Compression
- Responsive images
- Lazy loading where appropriate
- Important above-the-fold images are not unnecessarily delayed

Alt text should describe meaningful image content and should not be stuffed with keywords.

---

# 6. Content & Search Intent

SEO content should satisfy the reason a person searched for something.

## Analyze Search Intent

Identify whether the query is primarily:

- Informational
- Navigational
- Commercial investigation
- Transactional
- Local

Then check whether the page actually satisfies that intent.

## Content Quality

Evaluate:

- Accuracy
- Originality
- Usefulness
- Relevance
- Clarity
- Depth
- Readability
- Evidence and sources where appropriate
- First-hand expertise where relevant
- Clear authorship when useful
- Updated information where the subject changes over time

Avoid producing content simply to increase page count.

## Topical Coverage

Look for relationships between:

- Core service/product pages
- Supporting articles
- FAQs
- Location pages
- Comparison pages
- Educational content

A strong content structure helps users and search engines understand the site's areas of expertise.

---

# 7. Internal Linking

Internal links help users navigate the website and help search engines understand relationships between pages.

## Analyze

Check:

- Important pages receive internal links.
- Related pages link to one another.
- Navigation supports the site's hierarchy.
- Anchor text describes the destination naturally.
- There are no excessive or irrelevant internal links.
- Important pages are not isolated or orphaned.

### Example

A web development company could connect:

`Web Development` → `E-commerce Development` → `E-commerce Case Study` → `Contact`

This creates a logical path from information to service to proof to conversion.

---

# 8. Performance & Core Web Vitals

Website performance affects usability and can contribute to search performance.

## Analyze

Important areas include:

- Largest Contentful Paint (LCP)
- Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- First response/server performance
- JavaScript execution
- CSS delivery
- Image loading
- Font loading
- Caching
- Unnecessary third-party scripts

Use tools such as Lighthouse and PageSpeed Insights to identify performance opportunities.

## Design Connection

Design decisions can directly affect performance.

Examples:

- Large hero images → slower loading
- Excessive animations → more browser work
- Too many web fonts → additional requests
- Video backgrounds → potentially heavy page loads
- Large UI libraries → unnecessary JavaScript
- Poor responsive image handling → excessive mobile downloads

The goal is not simply to chase a perfect tool score. Prioritize improvements that meaningfully improve the real user experience.

---

# 9. Mobile SEO & Responsive Design

Search and user behavior are heavily mobile-oriented, so mobile experience must be part of SEO analysis.

## Check

- Responsive layouts
- Text readability
- Touch target sizes
- Navigation usability
- Horizontal overflow
- Content visibility
- Form usability
- Button placement
- Image scaling
- Page speed on mobile connections
- Consistency between mobile and desktop content

### Design → SEO Example

A beautiful desktop design that becomes difficult to navigate on mobile can create a poor user experience and reduce engagement.

Therefore, SEO analysis should evaluate the actual mobile experience rather than only checking whether the page technically responds to screen size.

---

# 10. UX, Accessibility & SEO

SEO and UX are not identical, but many good UX practices also support discoverability and usability.

## Analyze

- Clear navigation
- Logical information hierarchy
- Readable typography
- Sufficient contrast
- Keyboard accessibility
- Descriptive links
- Form labels
- Meaningful button text
- Alt text
- Consistent interaction patterns
- Clear error messages
- Avoidance of intrusive elements

### Example

Instead of:

`Click here`

Prefer:

`View our web development services`

The second link communicates more meaning to both users and assistive technologies.

---

# 11. Local SEO

Local SEO should be analyzed when a business serves a specific geographic area.

## Google Business Profile

Check:

- Business ownership/verification
- Business name
- Primary category
- Relevant additional categories
- Address/service area
- Phone number
- Website
- Opening hours
- Photos
- Business description
- Reviews
- Review responses
- Business updates/posts where appropriate

## NAP Consistency

Compare:

- Name
- Address
- Phone

Across the website and important external business listings.

Do not change a legitimate business name or address simply to insert keywords.

## Local Website Signals

Check for:

- Location information
- Contact details
- Embedded maps where useful
- Directions where relevant
- LocalBusiness structured data when appropriate
- Service-area information
- Genuine location-specific content

Location pages should provide useful, unique information rather than creating large numbers of nearly identical pages.

---

# 12. Backlinks & Authority

External links can help establish reputation and authority, but quality matters more than simply increasing link counts.

## Analyze

- Number and quality of referring domains
- Relevance of linking websites
- Context of links
- Natural anchor text
- Competitor backlink opportunities
- Lost links
- Suspicious/spam patterns

## Link Building Principles

Prefer:

- Relevant industry publications
- Genuine partnerships
- Digital PR
- Original research
- Useful resources
- Community or professional organizations
- High-quality editorial mentions

Avoid:

- Link farms
- Paid spam networks
- Automated mass submissions
- Manipulative anchor-text schemes
- Low-quality directories created only for links

There is no universal monthly backlink target. Requirements depend on the market, competition, website authority, and available opportunities.

---

# 13. Analytics & Measurement

SEO analysis becomes much more useful when technical findings are combined with actual search and visitor data.

## Key Metrics

### Search Performance

Track:

- Impressions
- Clicks
- CTR
- Average position
- Queries
- Landing pages
- Search visibility
- Branded vs non-branded searches

### Website Behavior

Where analytics data is available, examine:

- Organic sessions/users
- Engagement
- Landing-page performance
- Conversion rate
- Leads
- Purchases
- Form submissions
- Phone/contact actions
- Other business-specific conversions

### Conversion Analysis

Do not optimize SEO only for traffic.

Ask:

> Are the visitors arriving through organic search actually completing valuable actions?

A page with fewer visitors but a much higher conversion rate may be more valuable than a high-traffic page with no business outcome.

---

# 14. SEO Performance Diagnosis

When analyzing data, look for patterns rather than isolated numbers.

## Example 1: High Impressions + Low CTR

Possible causes:

- Weak title
- Weak search-result description
- Search intent mismatch
- Strong competition
- SERP features taking attention

Possible action:

- Improve the page title and description.
- Compare the page with competing search results.
- Reassess search intent.

## Example 2: High Traffic + Low Conversions

Possible causes:

- Wrong audience
- Weak CTA
- Poor landing-page experience
- Search intent mismatch
- Slow or confusing page

Possible action:

- Review the conversion path.
- Improve CTA clarity.
- Compare the landing page with the actual intent behind the query.

## Example 3: Good Content + Poor Rankings

Possible causes:

- Weak internal linking
- Low authority
- Technical/indexing problems
- Search intent mismatch
- Strong competition

Possible action:

- Perform a technical audit.
- Review internal links.
- Analyze competitors.
- Evaluate authority and content gaps.

## Example 4: Good Desktop Experience + Poor Mobile Experience

Possible causes:

- Navigation problems
- Oversized elements
- Slow mobile loading
- Horizontal overflow
- Difficult forms or CTAs

Possible action:

- Audit the mobile experience independently.
- Test real pages on multiple screen sizes.
- Prioritize usability and performance problems.

---

# 15. SEO Issue Prioritization

Not every SEO problem deserves the same priority.

Use three main factors:

### Impact

How strongly could fixing this issue affect:

- Visibility
- Traffic
- Conversions
- User experience

### Effort

How difficult is the fix?

- Low
- Medium
- High

### Urgency

Does the issue prevent:

- Crawling?
- Indexing?
- Conversions?
- Website usability?
- A major launch?

## Suggested Priority

### P0 — Critical

Problems that prevent important pages from being crawled, indexed, accessed, or used.

### P1 — High

Problems with significant visibility, performance, UX, or conversion impact.

### P2 — Medium

Meaningful improvements that should be scheduled after higher-impact problems.

### P3 — Low

Minor improvements with limited immediate impact.

---

# 16. SEO Audit Reporting Format

A useful SEO report should be easy for a client or developer to understand.

## Executive Summary

Include:

- Overall SEO condition
- Biggest strengths
- Biggest problems
- Highest-priority actions
- Business impact

## Findings

For every major issue, provide:

**Issue:**  
What is wrong?

**Evidence:**  
What data or page demonstrates the problem?

**Impact:**  
Why does it matter?

**Recommendation:**  
What should be changed?

**Priority:**  
P0 / P1 / P2 / P3

**Effort:**  
Low / Medium / High

## Example

> **Issue:** Hero image is unnecessarily large on mobile.  
> **Evidence:** The primary above-the-fold image is significantly larger than the displayed mobile dimensions.  
> **Impact:** Additional image bytes can delay loading and negatively affect the user experience.  
> **Recommendation:** Serve responsive image sizes and use an appropriate modern format.  
> **Priority:** P1  
> **Effort:** Medium

---

# 17. Recommended SEO Tool Categories

Tools can change over time, so the workflow should focus on capabilities rather than depending on one product.

| Category | Example Tools | Main Purpose |
|---|---|---|
| Search performance | Google Search Console, Bing Webmaster Tools | Queries, indexing, search visibility |
| Analytics | Google Analytics | Traffic, behavior, conversions |
| Performance | PageSpeed Insights, Lighthouse | Performance and Core Web Vitals |
| Crawling | Screaming Frog and similar crawlers | Technical site analysis |
| Keyword research | SE Ranking, Semrush, Ahrefs and similar tools | Search demand and competition |
| Backlinks | Ahrefs, Semrush, Moz and similar tools | Link and authority analysis |
| Local SEO | Google Business Profile and local SEO platforms | Local visibility |
| Structured data | Schema.org tools and validators | Schema implementation |
| Accessibility | Lighthouse, browser tools, accessibility checkers | Accessibility issues |
| AI/search visibility | Relevant AI-search and citation tracking tools | AI search presence and citations |

Tool choice should depend on the project's requirements, budget, scale, and available data.

---

# 18. Pre-Launch SEO Checklist

Before launch, check:

- [ ] Important pages are accessible.
- [ ] HTTPS is configured.
- [ ] Canonical URLs are correct.
- [ ] Robots directives do not block important pages.
- [ ] Sitemap is available.
- [ ] Titles and meta descriptions are prepared.
- [ ] Heading hierarchy is logical.
- [ ] Images are optimized.
- [ ] Mobile layout is tested.
- [ ] Important links work.
- [ ] Forms and conversion paths work.
- [ ] Analytics tracking is installed and tested.
- [ ] Search Console is configured.
- [ ] Structured data is validated where applicable.
- [ ] Staging/test URLs are not unintentionally indexable.

---

# 19. Post-Launch SEO Checklist

After launch, check:

- [ ] Search Console is receiving data.
- [ ] Sitemap has been submitted.
- [ ] Important pages are being discovered/indexed.
- [ ] No unexpected crawl errors are appearing.
- [ ] Analytics data is being collected correctly.
- [ ] Conversions are being recorded.
- [ ] Core Web Vitals are monitored.
- [ ] Mobile experience is tested.
- [ ] 404/500 errors are monitored.
- [ ] Search visibility is monitored over time.
- [ ] Important local listings are accurate when applicable.
- [ ] SEO issues are prioritized and tracked.

Indexing and ranking changes may take time after launch. Do not interpret a short period of limited search visibility as proof that SEO has failed.

---

# 20. Ongoing SEO Monitoring

SEO is not a one-time task.

Establish a recurring monitoring process.

## Weekly

Review:

- Major indexing problems
- Search Console anomalies
- Important ranking/visibility changes
- Critical website errors
- Major performance regressions

## Monthly

Review:

- Organic traffic
- Search queries
- Landing pages
- CTR
- Conversions
- Content performance
- Backlink changes
- Technical issues
- Local visibility where relevant

## Quarterly

Review:

- Competitor changes
- Content gaps
- Technical architecture
- Backlink opportunities
- Search intent changes
- Site structure
- SEO strategy
- Business outcomes

---

# 21. Core Principles

1. **SEO is not just keywords.** It combines technical accessibility, useful content, user experience, authority, and search intent.

2. **Do not optimize for metrics alone.** Traffic, rankings, and tool scores matter only when they contribute to useful business outcomes.

3. **Fix critical technical problems first.** A page cannot benefit from great content if it cannot be properly accessed or indexed.

4. **Design and SEO should work together.** Visual decisions can influence performance, accessibility, navigation, readability, and conversion.

5. **Mobile must be treated as a primary experience.**

6. **Quality matters more than arbitrary publishing targets.** There is no universal number of articles or backlinks every website needs.

7. **Use evidence.** Recommendations should be based on crawl data, search data, analytics, page inspection, competitor research, or another identifiable source.

8. **Prioritize impact over volume.** A small number of high-impact fixes can be more valuable than a long list of minor recommendations.

9. **Avoid manipulative SEO tactics.** Sustainable SEO should focus on helping users and making websites easier for search engines to understand.

10. **SEO is iterative.** Analyze → prioritize → implement → measure → improve.

---

# 22. Final Analysis Framework

When completing an SEO analysis, answer these questions:

### Visibility
- Can search engines discover the website?
- Are important pages indexed?
- What queries generate visibility?

### Technical SEO
- Can important pages be crawled?
- Are there errors, duplicates, redirects, or canonical problems?

### Content
- Does each important page satisfy its search intent?
- Is the content useful, accurate, and sufficiently differentiated?

### Design & UX
- Is the site easy to navigate?
- Is the information hierarchy clear?
- Does the mobile experience work well?
- Do design choices create performance or accessibility problems?

### Performance
- Are important pages fast and stable?
- What is affecting LCP, INP, and CLS?

### Local SEO
- Is the business information accurate and consistent?
- Is the local presence complete where applicable?

### Authority
- Does the website have relevant external mentions and backlinks?
- What legitimate authority-building opportunities exist?

### Analytics
- Is SEO generating useful visitors?
- Are organic visitors converting?
- Which pages and queries create the most value?

### Action Plan
- What are the most important problems?
- What evidence supports them?
- What should be fixed first?
- Who should fix them?
- How will success be measured?

---

## Conclusion

A strong SEO analysis does more than identify SEO errors.

It connects **search visibility, technical quality, content, design, UX, performance, authority, and business results**.

The final objective is to turn data into decisions:

**Analyze → Diagnose → Prioritize → Implement → Measure → Improve**
