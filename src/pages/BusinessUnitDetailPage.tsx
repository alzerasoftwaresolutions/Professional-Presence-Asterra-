import React from 'react';
import { useParams } from 'react-router-dom';
import { getBusinessUnitBySlug, getProjects } from '../data';
import {
  PageHeader,
  SectionHeader,
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
  Download,
  ArrowLeft,
} from 'lucide-react';

export const BusinessUnitDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const unit = getBusinessUnitBySlug(slug || '');
  const allProjects = getProjects();
  const relatedProjects = allProjects.filter((p) =>
    unit?.featuredProjectSlugs.includes(p.slug)
  );

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
      {/* 1. PAGE HEADER */}
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

      {/* 2. PLANT & FACILITY FAST FACTS BAND */}
      <section className="bg-white border-b border-border py-8">
        <div className="container-corporate">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Annual Production</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{unit.annualCapacity}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Covered Footprint</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{unit.facilitySizeSqM}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Division Workforce</span>
              <span className="font-serif text-2xl font-bold text-evergreen">{unit.workforceCount.split(' ')[0]} Staff</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Facility Location</span>
              <span className="font-serif text-sm font-bold text-evergreen truncate block">{unit.facilityLocation.split(',')[0]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIVISION OVERVIEW & MACHINERY INFRASTRUCTURE */}
      <section className="py-20 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="Plant Profile"
                title="Industrial Infrastructure & Facility Capabilities."
              />
              <Text variant="body" color="body" className="leading-relaxed">
                {unit.overview}
              </Text>

              {/* Accreditations list */}
              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted font-bold block mb-3">
                  Division Standards & Accreditations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {unit.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 bg-white border border-border text-xs font-mono font-semibold text-evergreen"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {unit.downloadableBrochureUrl && (
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<Download className="w-4 h-4 mr-1" />}
                    onClick={() => alert(`Downloading technical brochure for ${unit.name}`)}
                  >
                    Download Division Specifications (PDF)
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] bg-white border border-border p-2 shadow-xs overflow-hidden">
                <img
                  src={unit.facilityImage}
                  alt={`${unit.name} Production Floor`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILED TECHNICAL CAPABILITIES */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Technical Specifications"
            title="Core Machinery & Process Capabilities."
            description="High-precision tooling, automated production lines, and quality verification methods operating in this division."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {unit.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="card-corporate p-8 border border-border bg-ivory-canvas/40 space-y-4 hover:border-evergreen/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs font-bold text-mineral-teal uppercase">
                    {cap.id.toUpperCase()} //
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-muted uppercase">Verified Capability</span>
                </div>

                <Heading as="h3" font="serif" size="heading-md" color="evergreen">
                  {cap.title}
                </Heading>

                <Text variant="sm" color="body">
                  {cap.description}
                </Text>

                <div className="pt-2 space-y-2">
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-charcoal-muted font-bold">
                    Technical Specifications:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-charcoal-body font-mono">
                    {cap.technicalSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mineral-teal shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY PRODUCT LINES */}
      <section className="py-20 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-8">
          <SectionHeader
            eyebrow="Standard Outputs"
            title="Key Products & Component Categories."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {unit.keyProducts.map((prod) => (
              <div
                key={prod.name}
                className="bg-white p-6 border border-border space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="badge-mono mb-2">{prod.category}</span>
                  <Heading as="h4" font="serif" size="heading-sm" color="evergreen">
                    {prod.name}
                  </Heading>
                </div>
                <p className="text-xs text-charcoal-muted pt-3 border-t border-border font-mono">
                  {prod.specification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED CASE STUDIES */}
      {relatedProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-white border-b border-border">
          <div className="container-corporate space-y-12">
            <SectionHeader
              eyebrow="Representative Projects"
              title={`Demonstrated Delivery by ${unit.divisionCode}.`}
              description="Review representative project deliveries, verified tolerances, and performance data from this facility."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} layout="grid" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. DIRECT DIVISION RFQ FORM */}
      <section className="py-20 lg:py-28 bg-evergreen text-white border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="dark">{unit.divisionCode} // DIRECT RFQ</Badge>
              <Heading as="h2" font="serif" size="display-md" color="white">
                Request Specifications or Tender Quotes for {unit.name}
              </Heading>
              <Text variant="lead" color="border">
                Submit your engineering scope or material schedule directly to the division sales and engineering team.
              </Text>
            </div>

            <CorporateInquiryForm
              initialDepartment="Procurement & Sales"
              initialDivision={unit.divisionCode}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
