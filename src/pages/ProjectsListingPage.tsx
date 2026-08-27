import React, { useState } from 'react';
import { getProjects } from '../data';
import {
  PageHeader,
  SectionHeader,
  CTABanner,
  ProjectCard,
  Heading,
  Text,
  PageSeo,
} from '../components';
import { ShieldCheck, Award, Layers, FileCheck2 } from 'lucide-react';

export const ProjectsListingPage: React.FC = () => {
  const allProjects = getProjects();
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const sectors = ['All', 'Transport & Rail', 'Industrial Logistics', 'Maritime & Dry Ports', 'Water Infrastructure'];

  const filteredProjects =
    selectedSector === 'All'
      ? allProjects
      : allProjects.filter((p) => p.sector === selectedSector);

  const flagship = allProjects.find((p) => p.isFlagship) || allProjects[0];
  const gridProjects = filteredProjects.filter((p) => p.slug !== flagship.slug || selectedSector !== 'All');

  return (
    <div className="w-full">
      <PageSeo
        title="Industrial Projects & Case Studies Portfolio"
        description="Verified case studies of major rail bridges, dry port precast slabs, and industrial terminals fabricated and erected across regional export corridors."
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="Industrial Portfolio & Case Studies"
        title="Verified Infrastructure & Engineering Deliveries."
        description="A track record of high-yield structural steel, heavy precast elements, and municipal pipeline systems delivered on time and within strict dimensional tolerances."
        breadcrumbs={[{ label: 'Projects', href: '/projects' }]}
        theme="evergreen"
      />

      {/* 2. FLAGSHIP FEATURED PROJECT SHOWCASE (when viewing All) */}
      {selectedSector === 'All' && (
        <section className="py-16 lg:py-20 bg-white border-b border-border">
          <div className="container-corporate space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-evergreen font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-mineral-teal" />
                Featured Flagship Delivery
              </span>
              <span className="text-xs font-mono text-charcoal-muted">Major Infrastructure Contract</span>
            </div>

            <ProjectCard project={flagship} layout="featured" />
          </div>
        </section>
      )}

      {/* 3. PORTFOLIO FILTER & GRID */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Portfolio Directory"
              title="Filter Case Studies by Industrial Sector."
              description="Explore verified case studies, contractual milestones, and non-destructive examination metrics."
            />

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    selectedSector === sec
                      ? 'bg-evergreen text-white border-evergreen font-bold shadow-xs'
                      : 'bg-white text-charcoal-body border-border hover:border-evergreen'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} layout="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE VERIFICATION METRICS */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-ivory-canvas border border-border space-y-2">
              <FileCheck2 className="w-6 h-6 text-mineral-teal" />
              <Heading as="h4" font="serif" size="heading-sm" color="evergreen">
                100% NDT Traceability
              </Heading>
              <Text variant="caption" color="muted">
                Every weld seam and precast batch is cataloged with EN 10204 3.1 material test certificates.
              </Text>
            </div>
            <div className="p-6 bg-ivory-canvas border border-border space-y-2">
              <Layers className="w-6 h-6 text-mineral-teal" />
              <Heading as="h4" font="serif" size="heading-sm" color="evergreen">
                Pre-Assembly Scanning
              </Heading>
              <Text variant="caption" color="muted">
                3D laser coordinate alignment verification conducted in-plant prior to convoy dispatch.
              </Text>
            </div>
            <div className="p-6 bg-ivory-canvas border border-border space-y-2">
              <ShieldCheck className="w-6 h-6 text-mineral-teal" />
              <Heading as="h4" font="serif" size="heading-sm" color="evergreen">
                Zero Defect Handover
              </Heading>
              <Text variant="caption" color="muted">
                Audited by independent international inspection bureaus including TÜV Rheinland & Bureau Veritas.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CTABanner
        eyebrow="Tender & Project Inquiries"
        title="Planning a major structural or infrastructure development?"
        description="Consult with our senior engineering directors on material specifications, plant lead times, and capacity reservations."
        primaryBtnText="Submit Tender Documents"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Operating Divisions"
        secondaryBtnLink="/business"
      />
    </div>
  );
};
