import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBusinessUnitBySlug, getProjects } from '../data';
import {
  PageHeader,
  Heading,
  Text,
  Badge,
  Button,
  ProjectCard,
  CorporateInquiryForm,
  PageSeo,
} from '../components';
import {
  CheckCircle2,
  ArrowLeft,
  Cog,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export const BusinessUnitDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const unit = getBusinessUnitBySlug(slug || '');
  const allProjects = getProjects();
  const relatedProjects = allProjects.filter((p) =>
    unit?.featuredProjectSlugs.includes(p.slug)
  );

  const [activeTab, setActiveTab] = useState<'capabilities' | 'products' | 'qa'>('capabilities');

  if (!unit) {
    return (
      <div className="w-full py-24 container-corporate text-center space-y-6">
        <Badge variant="status" statusType="error">Division Not Located</Badge>
        <Heading as="h1" font="serif" size="display-md" color="evergreen">
          Operating Division Not Found
        </Heading>
        <Text variant="body" color="muted">
          The requested manufacturing unit does not exist in our corporate directory.
        </Text>
        <Button to="/business" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 mr-1" />}>
          Return to All Business Units
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PageSeo
        title={`${unit.name} (${unit.divisionCode})`}
        description={unit.tagline}
        ogType="website"
      />

      {/* 1. ARCHITECTURAL PAGE HEADER */}
      <PageHeader
        eyebrow={`${unit.divisionCode} // OPERATING DIVISION`}
        title={unit.name}
        description={unit.tagline}
        breadcrumbs={[
          { label: 'Business Units', href: '/business' },
          { label: unit.name, href: `/business/${unit.slug}` },
        ]}
        theme="evergreen"
      />

      {/* 2. DIVISION TELEMETRY STRIP */}
      <section className="bg-white border-b border-border py-8">
        <div className="container-corporate">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="p-2 sm:px-4 first:pl-0">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Annual Capacity</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{unit.annualCapacity}</span>
            </div>
            <div className="p-2 sm:px-4">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Covered Plant Area</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{unit.facilitySizeSqM}</span>
            </div>
            <div className="p-2 sm:px-4">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Division Personnel</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{unit.workforceCount}</span>
            </div>
            <div className="p-2 sm:px-4 last:pr-0">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold block">Facility Location</span>
              <span className="font-serif text-base font-bold text-evergreen truncate block">{unit.facilityLocation}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIVISION BLUEPRINT: OVERVIEW & SPECIFICATION TABS */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          {/* Overview & Facility Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="badge-mono">{unit.divisionCode} Infrastructure</span>
                <Heading as="h2" font="serif" size="display-md" color="evergreen">
                  Production Capabilities & Machine Infrastructure.
                </Heading>
                <Text variant="lead" color="body">
                  {unit.overview}
                </Text>
              </div>

              {/* Accreditations list */}
              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted font-bold block mb-2.5">
                  Division Standards & Certified Execution Classes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {unit.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 bg-white border border-border text-xs font-mono font-bold text-evergreen"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] bg-white border border-border p-2 shadow-xs overflow-hidden">
                <img
                  src={unit.facilityImage}
                  alt={`${unit.name} Production Floor`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Interactive Specification Tabs */}
          <div className="bg-white border border-border p-6 sm:p-10 space-y-8 shadow-xs">
            {/* Tab Selector */}
            <div className="flex border-b border-border">
              <button
                onClick={() => setActiveTab('capabilities')}
                className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer flex items-center gap-2 ${
                  activeTab === 'capabilities'
                    ? 'border-evergreen text-evergreen bg-ivory-canvas/40'
                    : 'border-transparent text-charcoal-muted hover:text-evergreen'
                }`}
              >
                <Cog className="w-4 h-4" />
                <span>Primary Plant Capabilities ({unit.capabilities.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer flex items-center gap-2 ${
                  activeTab === 'products'
                    ? 'border-evergreen text-evergreen bg-ivory-canvas/40'
                    : 'border-transparent text-charcoal-muted hover:text-evergreen'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Standard Products ({unit.keyProducts.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('qa')}
                className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer flex items-center gap-2 ${
                  activeTab === 'qa'
                    ? 'border-evergreen text-evergreen bg-ivory-canvas/40'
                    : 'border-transparent text-charcoal-muted hover:text-evergreen'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Quality & Compliance</span>
              </button>
            </div>

            {/* Tab 1: Capabilities */}
            {activeTab === 'capabilities' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn">
                {unit.capabilities.map((cap, idx) => (
                  <div key={cap.id} className="p-4 bg-ivory-canvas/60 border border-border space-y-2">
                    <span className="font-mono text-[10px] text-mineral-teal font-bold block">
                      CAPABILITY 0{idx + 1}
                    </span>
                    <h4 className="font-serif text-base font-bold text-evergreen">{cap.title}</h4>
                    <p className="text-xs text-charcoal-body leading-relaxed">{cap.description}</p>
                    {cap.technicalSpecs && (
                      <div className="pt-2 border-t border-border/80 flex flex-wrap gap-1">
                        {cap.technicalSpecs.map((spec) => (
                          <span key={spec} className="text-[10px] font-mono px-1.5 py-0.5 bg-white border border-border text-charcoal-muted">
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Key Products */}
            {activeTab === 'products' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn">
                {unit.keyProducts.map((prod) => (
                  <div key={prod.name} className="p-4 bg-ivory-canvas/60 border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-mineral-teal uppercase font-bold">{prod.category}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-mineral-teal" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-evergreen">{prod.name}</h4>
                    <p className="text-xs text-charcoal-body font-mono bg-white p-2 border border-border">{prod.specification}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: QA & Compliance */}
            {activeTab === 'qa' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-ivory-canvas/60 border border-border space-y-1">
                    <span className="font-mono text-[10px] text-mineral-teal font-bold">WELDING & MIX INSPECTION</span>
                    <div className="font-serif text-base font-bold text-evergreen">100% NDT & Batch Lab</div>
                    <p className="text-xs text-charcoal-body">Ultrasonic, radiographic, and compressive strength testing before corridor dispatch.</p>
                  </div>
                  <div className="p-4 bg-ivory-canvas/60 border border-border space-y-1">
                    <span className="font-mono text-[10px] text-mineral-teal font-bold">MATERIAL TRACEABILITY</span>
                    <div className="font-serif text-base font-bold text-evergreen">Heat Number Tracking</div>
                    <p className="text-xs text-charcoal-body">Full chemical & tensile mill test certs provided with every delivery.</p>
                  </div>
                  <div className="p-4 bg-ivory-canvas/60 border border-border space-y-1">
                    <span className="font-mono text-[10px] text-mineral-teal font-bold">DEFLECTION TOLERANCES</span>
                    <div className="font-serif text-base font-bold text-evergreen">Sub-Millimeter CNC</div>
                    <p className="text-xs text-charcoal-body">Continuous calibration on all high-torque plasma, fiber laser, and extrusion tooling.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. DELIVERED INFRASTRUCTURE CASE STUDIES */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-24 bg-white border-b border-border">
          <div className="container-corporate space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
              <div className="space-y-1">
                <span className="badge-mono">Delivered Projects</span>
                <Heading as="h2" font="serif" size="display-md" color="evergreen">
                  Representative Deliveries by {unit.name}.
                </Heading>
              </div>
              <Link
                to="/projects"
                className="text-xs font-mono uppercase tracking-wider text-evergreen hover:text-mineral-teal font-bold"
              >
                View Full Project Archive &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectCard key={proj.slug} project={proj} layout="grid" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. DIRECT DIVISION RFQ FORM */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="badge-mono">Tender & Procurement Channel</span>
            <Heading as="h2" font="serif" size="display-md" color="evergreen">
              Request Technical Allocation for {unit.name}
            </Heading>
            <Text variant="body" color="body">
              Submit your engineering drawings, bill of quantities (BOQ), or annual supply volume requirements directly to this division.
            </Text>
          </div>

          <CorporateInquiryForm
            initialDepartment="Procurement & Sales"
            initialDivision={unit.name}
          />
        </div>
      </section>
    </div>
  );
};
