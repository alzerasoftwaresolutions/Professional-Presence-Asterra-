import React from 'react';
import {
  getCompanyInfo,
  getBusinessUnits,
  getFlagshipProject,
  getLeadership,
  getInsights,
} from '../data';
import {
  Button,
  Badge,
  Heading,
  Text,
  StatCard,
  SectionHeader,
  CTABanner,
  BusinessUnitCard,
  ProjectCard,
  ExecutiveCard,
  ArticleCard,
  PageSeo,
} from '../components';
import { ArrowRight, ShieldCheck, Factory, Globe2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const company = getCompanyInfo();
  const businessUnits = getBusinessUnits();
  const flagshipProject = getFlagshipProject();
  const executiveTeam = getLeadership().filter(
    (l) => l.department === 'Executive Committee'
  ).slice(0, 3);
  const featuredArticles = getInsights().slice(0, 3);

  return (
    <div className="w-full">
      <PageSeo
        title="Industrial Manufacturing & Export Excellence"
        description="Asterra Manufacturing Group operates four specialized production divisions across 68,000 m² of covered plant infrastructure, delivering precision metals, precast materials, and engineering systems."
        ogType="website"
      />
      {/* 1. HERO SECTION */}
      <section className="relative bg-evergreen text-white py-20 lg:py-32 overflow-hidden border-b border-evergreen-hover">
        {/* Background Subtle Grid Texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        <div className="container-corporate relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
              <Badge variant="dark">
                Industrial Manufacturing & Export Excellence
              </Badge>

              <Heading
                as="h1"
                font="serif"
                size="display-xl"
                color="white"
                className="max-w-4xl tracking-tight"
              >
                Precision Engineering at Industrial Scale.
              </Heading>

              <Text
                variant="lead"
                color="border"
                className="max-w-2xl text-reading leading-relaxed"
              >
                Asterra Manufacturing Group operates four specialized production divisions across 68,000 m² of covered plant infrastructure, delivering high-tensile components, advanced precast materials, and engineering infrastructure across 14 export corridors.
              </Text>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/business"
                  variant="white"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Explore Capabilities
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  className="text-white border-white/40 hover:bg-white/10 hover:border-white"
                >
                  Corporate RFQ
                </Button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs font-mono text-border">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-mineral-teal" />
                  ISO 9001 / ISO 14001 / ISO 45001
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-mineral-teal" />
                  68,000 m² Covered Plant Floor
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-mineral-teal" />
                  14 Export Markets
                </span>
              </div>
            </div>

            {/* Hero Image Plane */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative border-4 border-white/10 p-2 bg-white/5">
                <div className="aspect-[4/5] bg-evergreen-active overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                    alt="Asterra Manufacturing Plant Operation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-evergreen via-evergreen/80 to-transparent p-6">
                    <span className="badge-mono bg-evergreen text-white border-mineral-teal mb-2">
                      Plant 1 • Industrial Zone 4
                    </span>
                    <p className="text-xs text-white font-mono">
                      Submerged-Arc Heavy Girder Welding Line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVIDENCE OF SCALE (STAT BAND) */}
      <section className="bg-white border-b border-border py-14">
        <div className="container-corporate">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatCard
              value={company.globalFootprint.annualProductionCapacity}
              label="Annual Output"
              context="High-tensile certified structural and material output"
            />
            <StatCard
              value={`${company.globalFootprint.plantsCount} Divisions`}
              label="Operating Footprint"
              context={`${company.globalFootprint.totalPlantAreaSqM} combined covered plant area`}
            />
            <StatCard
              value={`${company.globalFootprint.exportCountriesCount} Nations`}
              label="Export Corridor"
              context="Active regional distribution across East Africa and the Gulf"
            />
            <StatCard
              value={`${new Date().getFullYear() - company.foundingYear}+ Years`}
              label="Industry Tenure"
              context={`Disciplined manufacturing growth since ${company.foundingYear}`}
            />
          </div>
        </div>
      </section>

      {/* 3. CORPORATE HERITAGE & INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Who We Are"
                title="A Quarter-Century of Industrial Modernization."
                description="Asterra Manufacturing Group unites heavy metallurgical fabrication, engineered precast materials, polymer piping, and automated industrial assemblies under one disciplined governance framework."
              />

              <div className="space-y-4 text-charcoal-body text-sm sm:text-base leading-relaxed">
                <p>
                  From our inception in 1998, we have maintained a single strategic thesis: that sustainable regional development requires dependable, high-precision industrial manufacturing built to international ISO standards.
                </p>
                <p>
                  Today, our multi-facility manufacturing plants operate round-the-clock synchronous shifts, housing fiber laser cutting tables, computerized concrete batching towers, and 5-axis CNC machining centers.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  to="/about"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Read Corporate Story
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] bg-white border border-border p-2">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                      alt="Precision Metal Quality Inspection"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-white p-6 border border-border">
                    <span className="font-mono text-xs text-charcoal-muted uppercase block mb-1">
                      Workforce Scale
                    </span>
                    <div className="font-serif text-2xl font-bold text-evergreen">
                      {company.globalFootprint.workforceTotal}
                    </div>
                    <p className="text-xs text-charcoal-body mt-1">
                      Certified engineers, metallurgists & technicians
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="bg-evergreen text-white p-6 border border-evergreen-hover">
                    <span className="font-mono text-xs text-border uppercase block mb-1">
                      Execution Standards
                    </span>
                    <div className="font-serif text-2xl font-bold text-white">
                      EXC3 Certified
                    </div>
                    <p className="text-xs text-border mt-1">
                      EN 1090-2 execution class for major infrastructure
                    </p>
                  </div>
                  <div className="aspect-[4/5] bg-white border border-border p-2">
                    <img
                      src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"
                      alt="Automated Material Batching"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPERATING DIVISIONS (WHAT WE DO) */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Operating Divisions"
            title="Four Specialized Industrial Capabilities."
            description="Our integrated manufacturing ecosystem delivers end-to-end capabilities from raw plate profiling to turnkey mechanical assemblies."
            actionLink={{ label: 'View All Division Specifications', href: '/business' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessUnits.map((unit) => (
              <BusinessUnitCard key={unit.slug} unit={unit} layout="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECT (EVIDENCE IN PRACTICE) */}
      {flagshipProject && (
        <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
          <div className="container-corporate space-y-12">
            <SectionHeader
              eyebrow="Proven Delivery"
              title="Demonstrated Industrial Performance."
              description="Real-world case studies showcasing sub-millimeter tolerances, on-time delivery, and structural fatigue integrity."
              actionLink={{ label: 'Explore Complete Portfolio', href: '/projects' }}
            />

            <ProjectCard project={flagshipProject} layout="featured" />
          </div>
        </section>
      )}

      {/* 6. LEADERSHIP & GOVERNANCE */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Corporate Governance"
            title="Executive Committee & Industrial Leadership."
            description="Our leadership team pairs global technical credentials with decades of on-the-ground manufacturing execution."
            actionLink={{ label: 'View Full Board & Executives', href: '/leadership' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((exec) => (
              <ExecutiveCard key={exec.slug} executive={exec} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. EVIDENCE WALL: QUALITY ACCREDITATIONS */}
      <section className="py-16 bg-evergreen text-white border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-border font-semibold">
                Quality & Compliance
              </span>
              <Heading as="h3" font="serif" size="heading-lg" color="white">
                International Certifications & Accreditations
              </Heading>
              <Text variant="sm" color="border">
                Every manufacturing process is independently audited by accredited international inspection bureaus.
              </Text>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {company.certifications.map((cert) => (
                  <div
                    key={cert.code}
                    className="p-5 bg-white/5 border border-white/10 hover:border-mineral-teal transition-colors"
                  >
                    <div className="font-mono text-sm font-bold text-white mb-1">
                      {cert.code}
                    </div>
                    <p className="text-xs text-border leading-snug">
                      {cert.title}
                    </p>
                    <span className="text-[10px] font-mono text-charcoal-muted mt-2 block">
                      Auditor: {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KNOWLEDGE & TECHNICAL RESEARCH */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Knowledge Center"
            title="Technical Insights & Research Whitepapers."
            description="Authoritative operational analysis and material science publications from Asterra's engineering directorship."
            actionLink={{ label: 'Explore Knowledge Center', href: '/insights' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA BANNER */}
      <CTABanner
        eyebrow="Direct Procurement & Technical Inquiries"
        title="Require heavy fabrication specifications or contract manufacturing quotes?"
        description="Our directorship teams provide formal technical proposals, plant capacity allocations, and feasibility reviews."
        primaryBtnText="Submit Corporate RFQ"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore All Divisions"
        secondaryBtnLink="/business"
      />
    </div>
  );
};
