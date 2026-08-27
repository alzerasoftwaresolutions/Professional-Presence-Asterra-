import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug, getBusinessUnitBySlug } from '../data';
import {
  PageHeader,
  Heading,
  Badge,
  Button,
  PageSeo,
} from '../components';
import {
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  const relatedBusinessUnit = project ? getBusinessUnitBySlug(project.businessUnitSlug) : undefined;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution' | 'execution'>('solution');

  if (!project) {
    return (
      <div className="w-full py-24 container-corporate text-center space-y-6">
        <Badge variant="status" statusType="error">Case Study Not Located</Badge>
        <Heading as="h1" font="serif" size="display-md" color="evergreen">
          Project Case Study Not Found
        </Heading>
        <p className="text-xs text-charcoal-muted">
          The requested project record is unavailable or has been archived.
        </p>
        <Button to="/projects" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 mr-1" />}>
          Return to All Projects
        </Button>
      </div>
    );
  }

  const allMedia = [project.heroImage, ...project.galleryImages];

  return (
    <div className="w-full">
      <PageSeo
        title={`${project.title} — Case Study`}
        description={project.subtitle}
        ogType="article"
      />

      {/* 1. ARCHITECTURAL PAGE HEADER */}
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

      {/* 2. PROJECT METRICS TELEMETRY STRIP */}
      <section className="bg-white border-b border-border py-8">
        <div className="container-corporate">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="p-2 sm:px-4 first:pl-0">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Client Entity</span>
              <span className="font-serif text-sm font-bold text-evergreen truncate block">{project.client}</span>
              <span className="text-[10px] font-mono text-mineral-teal">{project.clientCategory}</span>
            </div>
            <div className="p-2 sm:px-4">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Project Location</span>
              <span className="font-serif text-sm font-bold text-evergreen truncate block">{project.location}</span>
              <span className="text-[10px] font-mono text-charcoal-muted">Corridor Route</span>
            </div>
            <div className="p-2 sm:px-4">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Delivery Year</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{project.year}</span>
              <span className="text-[10px] font-mono text-charcoal-muted">Commissioned</span>
            </div>
            <div className="p-2 sm:px-4 last:pr-0">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Delivering Division</span>
              <span className="font-serif text-sm font-bold text-evergreen truncate block">
                {relatedBusinessUnit?.name || 'Asterra Industrial'}
              </span>
              <span className="text-[10px] font-mono text-mineral-teal">{relatedBusinessUnit?.divisionCode}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HERO MEDIA & MULTI-ANGLE VIEWER */}
      <section className="py-12 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-4">
          <div className="aspect-[21/9] bg-white border border-border overflow-hidden shadow-xs relative">
            <img
              src={allMedia[activeImageIndex] || project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-evergreen/90 text-white text-xs font-mono px-3 py-1">
              Field Erection Photograph // View {activeImageIndex + 1} of {allMedia.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {allMedia.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {allMedia.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-24 h-16 shrink-0 border-2 overflow-hidden transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-evergreen ring-2 ring-evergreen/20' : 'border-border opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. TECHNICAL CASE STUDY BLUEPRINT */}
      <section className="py-16 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Interactive Challenge / Solution Tabs */}
            <div className="lg:col-span-8 space-y-8">
              {/* Tab Selector */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab('solution')}
                  className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer ${
                    activeTab === 'solution'
                      ? 'border-evergreen text-evergreen bg-ivory-canvas/40'
                      : 'border-transparent text-charcoal-muted hover:text-evergreen'
                  }`}
                >
                  01 // Engineering Solution
                </button>
                <button
                  onClick={() => setActiveTab('challenge')}
                  className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer ${
                    activeTab === 'challenge'
                      ? 'border-evergreen text-evergreen bg-ivory-canvas/40'
                      : 'border-transparent text-charcoal-muted hover:text-evergreen'
                  }`}
                >
                  02 // Project Challenge
                </button>
                <button
                  onClick={() => setActiveTab('execution')}
                  className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer ${
                    activeTab === 'execution'
                      ? 'border-evergreen text-evergreen bg-ivory-canvas/40'
                      : 'border-transparent text-charcoal-muted hover:text-evergreen'
                  }`}
                >
                  03 // Fabrication Execution
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-6 min-h-[160px]">
                {activeTab === 'solution' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-serif text-2xl font-bold text-evergreen">
                      Methodology & Pre-Assembly Laser Modeling
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal-body leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
                {activeTab === 'challenge' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-serif text-2xl font-bold text-evergreen">
                      Site Constraints & Engineering Demands
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal-body leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}
                {activeTab === 'execution' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-serif text-2xl font-bold text-evergreen">
                      Tolerances & Non-Destructive Examination (NDE)
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal-body leading-relaxed">
                      {project.engineeringExecution}
                    </p>
                  </div>
                )}
              </div>

              {/* Applied Quality Standards Badges */}
              <div className="p-6 bg-ivory-canvas border border-border space-y-3">
                <span className="font-mono text-xs uppercase font-bold text-evergreen tracking-wider block">
                  Applied Quality Standards on this Delivery:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.certificationsApplied.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 bg-white border border-border text-xs font-mono font-bold text-evergreen flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-mineral-teal" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quantitative Outcome Metrics Dashboard */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-ivory-canvas border border-border p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-border pb-3">
                  <span className="font-mono text-[10px] text-mineral-teal font-bold uppercase block">
                    VERIFIED RESULTS
                  </span>
                  <h4 className="font-serif text-lg font-bold text-evergreen">
                    Contractual Performance Metrics
                  </h4>
                </div>

                <div className="space-y-4">
                  {project.results.map((res) => (
                    <div key={res.label} className="p-4 bg-white border border-border space-y-1">
                      <span className="font-serif text-2xl font-bold text-evergreen block">
                        {res.metric}
                      </span>
                      <span className="font-mono text-xs uppercase font-bold text-charcoal-muted block">
                        {res.label}
                      </span>
                      <p className="text-[11px] text-charcoal-body leading-snug">
                        {res.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {relatedBusinessUnit && (
                <div className="p-6 bg-evergreen text-white border border-evergreen-hover space-y-3">
                  <span className="font-mono text-[10px] text-mineral-teal uppercase font-bold block">
                    Delivered by {relatedBusinessUnit.divisionCode}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {relatedBusinessUnit.name}
                  </h4>
                  <p className="text-xs text-border/80 leading-relaxed">
                    {relatedBusinessUnit.tagline}
                  </p>
                  <Link
                    to={`/business/${relatedBusinessUnit.slug}`}
                    className="inline-flex items-center text-xs font-mono uppercase text-mineral-teal hover:underline font-bold pt-2"
                  >
                    <span>View Division Plant Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BACK TO PROJECTS & RFQ CTA */}
      <section className="py-12 bg-ivory-canvas border-b border-border">
        <div className="container-corporate flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            to="/projects"
            variant="secondary"
            size="sm"
            leftIcon={<ArrowLeft className="w-4 h-4 mr-1" />}
          >
            Back to All Case Studies
          </Button>

          <Button
            to="/contact"
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            Submit RFQ for Similar Scope
          </Button>
        </div>
      </section>
    </div>
  );
};
