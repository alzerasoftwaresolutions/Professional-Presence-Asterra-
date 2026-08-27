import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectBySlug, getBusinessUnitBySlug } from '../data';
import {
  PageHeader,
  SectionHeader,
  Heading,
  Text,
  Badge,
  Button,
  CTABanner,
  BusinessUnitCard,
  PageSeo,
} from '../components';
import {
  ShieldCheck,
  ArrowLeft,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  const relatedBusinessUnit = project ? getBusinessUnitBySlug(project.businessUnitSlug) : undefined;

  if (!project) {
    return (
      <div className="w-full py-24 container-corporate text-center space-y-6">
        <Badge variant="status" statusType="error">Case Study Not Located</Badge>
        <Heading as="h1" font="serif" size="display-md" color="evergreen">
          Project Case Study Not Found
        </Heading>
        <Text variant="body" color="muted">
          The requested project record is unavailable or has been archived.
        </Text>
        <Button to="/projects" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 mr-1" />}>
          Return to All Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PageSeo
        title={`${project.title} — Case Study`}
        description={project.subtitle}
        ogType="article"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow={`${project.sector} // CASE STUDY`}
        title={project.title}
        description={project.subtitle}
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
        theme="evergreen"
      />

      {/* 2. PROJECT METRICS / FAST FACTS STRIP */}
      <section className="bg-white border-b border-border py-8">
        <div className="container-corporate">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Client Entity</span>
              <span className="font-serif text-sm font-bold text-evergreen truncate block">{project.client}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Project Location</span>
              <span className="font-serif text-sm font-bold text-evergreen truncate block">{project.location}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Delivery Year</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{project.year}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Client Sector</span>
              <span className="font-serif text-sm font-bold text-evergreen truncate block">{project.clientCategory}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HERO MEDIA GALLERY */}
      <section className="py-12 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-6">
          <div className="aspect-[21/9] bg-white border border-border overflow-hidden shadow-xs">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {project.galleryImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.galleryImages.map((img, idx) => (
                <div key={idx} className="aspect-[16/10] bg-white border border-border overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} Erection Detail ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. CHALLENGE, SOLUTION & ENGINEERING EXECUTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div className="space-y-4">
                <span className="badge-mono">01 // The Engineering Challenge</span>
                <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                  Project Requirements & Site Constraints
                </Heading>
                <Text variant="body" color="body" className="leading-relaxed">
                  {project.challenge}
                </Text>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <span className="badge-mono">02 // The Technical Solution</span>
                <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                  Fabrication Methodology & Pre-Assembly Scanning
                </Heading>
                <Text variant="body" color="body" className="leading-relaxed">
                  {project.solution}
                </Text>
              </div>

              {/* Execution */}
              <div className="space-y-4">
                <span className="badge-mono">03 // Execution & Quality Assurance</span>
                <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                  Non-Destructive Testing & Schedule Acceleration
                </Heading>
                <Text variant="body" color="body" className="leading-relaxed">
                  {project.engineeringExecution}
                </Text>
              </div>

              {/* Applied Standards */}
              <div className="pt-4 border-t border-border space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted font-bold block">
                  Applicable Execution Standards & Welding Codes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.certificationsApplied.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 bg-ivory-canvas border border-border text-xs font-mono font-semibold text-evergreen flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-mineral-teal" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: Verified Results */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-ivory-canvas p-6 sm:p-8 border border-border space-y-6">
                <div className="border-b border-border pb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-mineral-teal font-bold block">
                    Verified Performance
                  </span>
                  <Heading as="h3" font="serif" size="heading-md" color="evergreen">
                    Contractual Results
                  </Heading>
                </div>

                <div className="space-y-6">
                  {project.results.map((res, i) => (
                    <div key={i} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                      <div className="font-serif text-3xl font-bold text-evergreen">{res.metric}</div>
                      <span className="font-mono text-xs uppercase tracking-wider text-charcoal-ink font-semibold block mt-0.5">
                        {res.label}
                      </span>
                      {res.context && (
                        <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">{res.context}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <Button to="/contact" variant="primary" size="sm" fullWidth>
                    Inquire About Similar Scope
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERING OPERATING DIVISION */}
      {relatedBusinessUnit && (
        <section className="py-20 bg-ivory-canvas border-b border-border">
          <div className="container-corporate space-y-8">
            <SectionHeader
              eyebrow="Delivering Division"
              title="Manufactured by Asterra Operating Facilities."
              description="Learn more about the automated tooling, plant footprint, and engineers responsible for this delivery."
            />

            <BusinessUnitCard unit={relatedBusinessUnit} layout="featured" />
          </div>
        </section>
      )}

      {/* 6. FINAL CTA */}
      <CTABanner
        eyebrow="Infrastructure Project Partnership"
        title="Ready to commission heavy structural or infrastructure manufacturing?"
        description="Our directorship teams provide formal technical proposals, plant capacity allocations, and feasibility reviews."
        primaryBtnText="Submit Project RFQ"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore All Projects"
        secondaryBtnLink="/projects"
      />
    </div>
  );
};
