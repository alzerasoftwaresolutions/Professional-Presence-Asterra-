import React from 'react';
import { useParams } from 'react-router-dom';
import { getInsightBySlug, getInsights } from '../data';
import {
  PageHeader,
  SectionHeader,
  Heading,
  Text,
  Badge,
  Button,
  CTABanner,
  ArticleCard,
  PageSeo,
} from '../components';
import {
  Clock,
  Calendar,
  Download,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getInsightBySlug(slug || '');
  const allArticles = getInsights();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug && (article?.relatedArticleSlugs?.includes(a.slug) || true))
    .slice(0, 2);

  if (!article) {
    return (
      <div className="w-full py-24 container-corporate text-center space-y-6">
        <Badge variant="status" statusType="error">Article Not Located</Badge>
        <Heading as="h1" font="serif" size="display-md" color="evergreen">
          Insight Article Not Found
        </Heading>
        <Text variant="body" color="muted">
          The requested research paper does not exist or has been relocated.
        </Text>
        <Button to="/insights" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 mr-1" />}>
          Return to Knowledge Center
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PageSeo
        title={`${article.title} — Technical Report`}
        description={article.subtitle}
        ogType="article"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow={`${article.category} // WHITEPAPER`}
        title={article.title}
        description={article.subtitle}
        breadcrumbs={[
          { label: 'Insights', href: '/insights' },
          { label: article.title, href: `/insights/${article.slug}` },
        ]}
        theme="evergreen"
      />

      {/* 2. ARTICLE META & DOWNLOAD STRIP */}
      <section className="bg-white border-b border-border py-6">
        <div className="container-corporate flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={article.author.photo}
              alt={article.author.name}
              className="w-12 h-12 rounded-none object-cover border border-border"
            />
            <div>
              <span className="font-serif font-bold text-sm text-evergreen block">{article.author.name}</span>
              <span className="text-xs text-charcoal-muted block">{article.author.role}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-mineral-teal" />
              {article.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-mineral-teal" />
              {article.readTimeMinutes} Min Read
            </span>
            {article.downloadablePdfUrl && (
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<Download className="w-3.5 h-3.5 mr-1" />}
                onClick={() => alert(`Downloading ${article.title} (PDF)`)}
              >
                PDF Report
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* 3. HERO IMAGE & KEY TAKEAWAYS */}
      <section className="py-12 bg-ivory-canvas border-b border-border">
        <div className="container-corporate max-w-4xl space-y-8">
          <div className="aspect-[16/9] bg-white border border-border overflow-hidden shadow-xs">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 bg-white border-l-4 border-mineral-teal border-t border-r border-b border-border space-y-4 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-mineral-teal font-bold block">
              Executive Key Takeaways & Findings:
            </span>
            <ul className="space-y-3">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-charcoal-body leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-mineral-teal shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. MAIN ARTICLE EDITORIAL SECTIONS */}
      <article className="py-16 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate max-w-3xl space-y-12">
          {article.contentSections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                {section.heading}
              </Heading>
              <div className="text-charcoal-body text-base leading-relaxed space-y-4 font-sans whitespace-pre-line">
                {section.bodyMarkdown}
              </div>
            </section>
          ))}

          {/* Author Box */}
          <div className="p-8 bg-ivory-canvas border border-border flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-16">
            <img
              src={article.author.photo}
              alt={article.author.name}
              className="w-20 h-20 object-cover border border-border shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-mineral-teal font-bold block">
                Authored by
              </span>
              <Heading as="h3" font="serif" size="heading-sm" color="evergreen">
                {article.author.name}
              </Heading>
              <Text variant="sm" color="body">
                {article.author.role}. Leading metallurgical research and high-yield structural certification for Asterra Manufacturing Group.
              </Text>
            </div>
          </div>
        </div>
      </article>

      {/* 5. RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-ivory-canvas border-b border-border">
          <div className="container-corporate space-y-12">
            <SectionHeader
              eyebrow="Related Research"
              title="More Publications from Asterra Knowledge Center."
              actionLink={{ label: 'View All Whitepapers', href: '/insights' }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.slug} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CTA BANNER */}
      <CTABanner
        eyebrow="Direct Engineering Engagement"
        title="Interested in applying these engineering specifications to your project?"
        description="Connect directly with our technical laboratory directors for detailed material qualification reports."
        primaryBtnText="Submit Technical Inquiry"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore All Insights"
        secondaryBtnLink="/insights"
      />
    </div>
  );
};
