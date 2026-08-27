import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getInsightBySlug, getInsights } from '../data';
import {
  PageHeader,
  Badge,
  Button,
  PageSeo,
} from '../components';
import {
  Clock,
  Calendar,
  Download,
  ArrowLeft,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getInsightBySlug(slug || '');
  const allArticles = getInsights();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  if (!article) {
    return (
      <div className="w-full py-24 container-corporate text-center space-y-6">
        <Badge variant="status" statusType="error">Article Not Located</Badge>
        <h1 className="font-serif text-2xl font-bold text-evergreen">
          Insight Article Not Found
        </h1>
        <p className="text-xs text-charcoal-muted">
          The requested research paper does not exist or has been relocated.
        </p>
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

      {/* 1. ARCHITECTURAL PAGE HEADER */}
      <PageHeader
        eyebrow={`${article.category} // MONOGRAPH`}
        title={article.title}
        description={article.subtitle}
        breadcrumbs={[
          { label: 'Insights', href: '/insights' },
          { label: article.title, href: `/insights/${article.slug}` },
        ]}
        theme="evergreen"
      />

      {/* 2. PUBLICATION TELEMETRY BAR */}
      <section className="bg-white border-b border-border py-4">
        <div className="container-corporate flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-charcoal-muted">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-evergreen font-bold">
              <Calendar className="w-3.5 h-3.5 text-mineral-teal" />
              Published: {article.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-mineral-teal" />
              Estimated: {article.readTimeMinutes} Min Read
            </span>
            <span className="hidden sm:inline">Author: {article.author.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert(`Technical Report PDF: ${article.title} downloaded.`)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-canvas border border-border text-evergreen hover:border-evergreen transition-colors cursor-pointer text-xs font-bold font-mono"
            >
              <Download className="w-3.5 h-3.5 text-mineral-teal" />
              <span>Download PDF Monograph</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. HERO IMAGE PLANE */}
      <section className="py-10 bg-ivory-canvas border-b border-border">
        <div className="container-corporate max-w-4xl mx-auto">
          <div className="aspect-[21/10] bg-white border border-border overflow-hidden shadow-xs">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL CONTENT & EXECUTIVE TAKEAWAYS */}
      <section className="py-16 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate max-w-4xl mx-auto space-y-12">
          {/* Executive Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 sm:p-8 bg-ivory-canvas border-l-4 border-evergreen space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-mineral-teal" />
                <h3 className="font-serif text-lg font-bold text-evergreen">
                  Executive Engineering Summary & Key Takeaways
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-body leading-relaxed">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-mineral-teal shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Editorial Markdown Sections */}
          <div className="space-y-10 text-charcoal-body leading-relaxed">
            {article.contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-evergreen border-b border-border pb-3">
                  {sec.heading}
                </h2>
                <div className="text-sm sm:text-base leading-relaxed space-y-4 text-charcoal-body">
                  {sec.bodyMarkdown.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Author Citation Card */}
          <div className="p-6 bg-ivory-canvas border border-border flex flex-col sm:flex-row items-center gap-6">
            <img
              src={article.author.photo}
              alt={article.author.name}
              className="w-20 h-20 object-cover border border-border shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-[10px] text-mineral-teal uppercase font-bold tracking-wider block">
                Primary Author & Directorship
              </span>
              <h4 className="font-serif text-lg font-bold text-evergreen">
                {article.author.name}
              </h4>
              <p className="text-xs text-charcoal-muted">
                {article.author.role} • Asterra Manufacturing Group S.C.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELATED RESEARCH MONOGRAPHS */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-ivory-canvas border-b border-border">
          <div className="container-corporate max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-serif text-xl font-bold text-evergreen">
                Related Technical Research
              </h3>
              <Link to="/insights" className="text-xs font-mono uppercase text-evergreen hover:text-mineral-teal font-bold">
                View All Publications &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/insights/${rel.slug}`}
                  className="p-5 bg-white border border-border block group hover:border-evergreen transition-all"
                >
                  <span className="font-mono text-[10px] text-mineral-teal uppercase font-bold block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-evergreen group-hover:text-mineral-teal transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-charcoal-body line-clamp-2 mt-1">
                    {rel.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
