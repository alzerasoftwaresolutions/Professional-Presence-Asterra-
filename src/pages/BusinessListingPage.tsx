import React from 'react';
import { getBusinessUnits } from '../data';
import {
  PageHeader,
  SectionHeader,
  CTABanner,
  BusinessUnitCard,
  Heading,
  Text,
  PageSeo,
} from '../components';
import { Factory, ShieldCheck, Cog, Gauge, Award } from 'lucide-react';

export const BusinessListingPage: React.FC = () => {
  const businessUnits = getBusinessUnits();

  return (
    <div className="w-full">
      <PageSeo
        title="Operating Divisions & Industrial Ecosystem"
        description="Four specialized manufacturing divisions covering heavy structural steel, UHPC precast materials, HDPE pressure pipes, and automated contract assemblies."
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="Operating Divisions & Ecosystem"
        title="Four Specialized Industrial Divisions."
        description="From high-yield CNC metal profiling to automated cementitious batching, polymer piping, and contract assemblies, Asterra Group operates integrated production lines designed for scale."
        breadcrumbs={[{ label: 'Business Units', href: '/business' }]}
        theme="evergreen"
      />

      {/* 2. OPERATING MODEL INTRODUCTION */}
      <section className="py-16 lg:py-20 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="badge-mono">Group Synergy</span>
              <Heading as="h2" font="serif" size="display-md" color="evergreen">
                Integrated Manufacturing Across the Industrial Value Chain.
              </Heading>
              <Text variant="body" color="body">
                Rather than operating as fragmented subcontractors, Asterra’s four divisions share capital infrastructure, ISO quality assurance testing labs, centralized raw material procurement, and unified heavy logistics convoys.
              </Text>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 bg-ivory-canvas border border-border space-y-2">
                <Cog className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-xl font-bold text-evergreen">68,000 m²</div>
                <span className="text-xs font-mono text-charcoal-muted uppercase">Covered Plant Floor</span>
              </div>
              <div className="p-6 bg-ivory-canvas border border-border space-y-2">
                <Gauge className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-xl font-bold text-evergreen">120,000 MT</div>
                <span className="text-xs font-mono text-charcoal-muted uppercase">Annual Production</span>
              </div>
              <div className="p-6 bg-ivory-canvas border border-border space-y-2">
                <Award className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-xl font-bold text-evergreen">EXC3 & AWS</div>
                <span className="text-xs font-mono text-charcoal-muted uppercase">Execution Standards</span>
              </div>
              <div className="p-6 bg-ivory-canvas border border-border space-y-2">
                <Factory className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-xl font-bold text-evergreen">4 Plants</div>
                <span className="text-xs font-mono text-charcoal-muted uppercase">Operating Facilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS UNITS FULL SPECIFICATION CARDS */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Division Directory"
            title="Explore Capabilities by Operating Unit."
            description="Select any division below to view technical plant machinery, execution class certifications, capacity specifications, and representative project deliveries."
          />

          <div className="space-y-8">
            {businessUnits.map((unit) => (
              <BusinessUnitCard key={unit.slug} unit={unit} layout="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY COMMITMENT STRIP */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-corporate text-center max-w-3xl mx-auto space-y-4">
          <ShieldCheck className="w-10 h-10 text-mineral-teal mx-auto" />
          <Heading as="h3" font="serif" size="heading-lg" color="evergreen">
            Rigorous Quality Verification on Every Production Run
          </Heading>
          <Text variant="sm" color="body">
            All four operating divisions maintain on-site materials laboratories equipped for ultrasonic weld scanning, universal compressive stress testing, and optical emission chemical spectrometry.
          </Text>
        </div>
      </section>

      {/* 5. FINAL CTA BANNER */}
      <CTABanner
        eyebrow="Division Technical Quotes"
        title="Require specialized engineering specifications or factory capacity allocation?"
        description="Our division directorships provide formal tender proposals, WPS/PQR data, and plant tour scheduling."
        primaryBtnText="Submit Division RFQ"
        primaryBtnLink="/contact"
        secondaryBtnText="View Case Studies"
        secondaryBtnLink="/projects"
      />
    </div>
  );
};
