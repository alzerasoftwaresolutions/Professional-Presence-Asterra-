import React, { useState } from 'react';
import { getInsights } from '../data';
import {
  PageHeader,
  SectionHeader,
  CTABanner,
  ArticleCard,
  Heading,
  Text,
  Badge,
  Button,
  PageSeo,
} from '../components';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';

export const InsightsListingPage: React.FC = () => {
  const allArticles = getInsights();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Engineering & Technical', 'Sustainability & ESG', 'Market Reports'];

  const filteredArticles =
    selectedCategory === 'All'
      ? allArticles
      : allArticles.filter((a) => a.category === selectedCategory);

  const featuredArticle = allArticles[0];
  const gridArticles = filteredArticles.filter((a) => a.slug !== featuredArticle.slug || selectedCategory !== 'All');

  return (
    <div className="w-full">
      <PageSeo
        title="Knowledge Center & Engineering Insights"
        description="Authoritative technical research whitepapers, material performance evaluations, and ESG circularity studies from Asterra Group."
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="Knowledge & Technical Publications"
        title="Engineering Insights, Metallurgy & Industry Analysis."
        description="Authoritative research whitepapers, material performance studies, and circular industrial strategy reports authored by Asterra's engineering directorship."
        breadcrumbs={[{ label: 'Insights', href: '/insights' }]}
        theme="evergreen"
      />

      {/* 2. FEATURED RESEARCH WHITEPAPER (when viewing All) */}
      {selectedCategory === 'All' && featuredArticle && (
        <section className="py-16 lg:py-20 bg-white border-b border-border">
          <div className="container-corporate space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-evergreen font-bold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-mineral-teal" />
                Featured Technical Paper
              </span>
              <span className="text-xs font-mono text-charcoal-muted">Published Directorship Research</span>
            </div>

            <div className="card-corporate overflow-hidden border border-border bg-ivory-canvas/60">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-ivory-canvas">
                  <img
                    src={featuredArticle.heroImage}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="mono">{featuredArticle.category}</Badge>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs font-mono text-charcoal-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-mineral-teal" />
                        {featuredArticle.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-mineral-teal" />
                        {featuredArticle.readTimeMinutes} Min Read
                      </span>
                    </div>

                    <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                      {featuredArticle.title}
                    </Heading>

                    <Text variant="body" color="body">
                      {featuredArticle.subtitle}
                    </Text>

                    <div className="p-4 bg-white border border-border space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-mineral-teal font-bold block">
                        Executive Key Takeaways:
                      </span>
                      <ul className="space-y-1 text-xs text-charcoal-body font-mono">
                        {featuredArticle.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-mineral-teal">•</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-charcoal-muted">Author: {featuredArticle.author.name}</span>
                    <Button to={`/insights/${featuredArticle.slug}`} variant="primary" size="sm">
                      Read Technical Paper <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CATEGORY FILTER & ARTICLES GRID */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Research Archive"
              title="Filter by Engineering Discipline."
              description="Explore technical papers, life cycle cost models, and structural fatigue evaluations."
            />

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-evergreen text-white border-evergreen font-bold shadow-xs'
                      : 'bg-white text-charcoal-body border-border hover:border-evergreen'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CTABanner
        eyebrow="Technical Engineering Collaboration"
        title="Require tailored metallurgical testing or structural consultation?"
        description="Our technical directors collaborate directly with consulting engineering firms, government authorities, and industrial developers."
        primaryBtnText="Consult Engineering Directorate"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Operating Divisions"
        secondaryBtnLink="/business"
      />
    </div>
  );
};
