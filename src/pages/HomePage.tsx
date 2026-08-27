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
  PageSeo,
} from '../components';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Globe2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const company = getCompanyInfo();
  const businessUnits = getBusinessUnits();
  const flagshipProject = getFlagshipProject();
  const executiveTeam = getLeadership()
    .filter((l) => l.department === 'Executive Committee')
    .slice(0, 3);
  const featuredArticles = getInsights().slice(0, 3);
  const leadArticle = featuredArticles[0];
  const secondaryArticles = featuredArticles.slice(1, 3);

  return (
    <div className="w-full">
      <PageSeo
        title="Heavy Industrial Manufacturing & Structural Engineering"
        description="Asterra Manufacturing Group operates four certified production divisions across 68,000 m² of covered plant infrastructure, delivering EN 1090-2 EXC3 heavy structural steel, UHPC precast materials, and engineering systems across 14 export corridors."
        ogType="website"
      />

      {/* 1. HERO SECTION — BESPOKE INDUSTRIAL AUTHORITY */}
      <section className="relative bg-evergreen text-white py-16 lg:py-28 overflow-hidden border-b border-evergreen-hover">
        {/* Subtle Architectural Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]"
          aria-hidden="true"
        />

        <div className="container-corporate relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-mineral-teal text-[11px] font-mono uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-mineral-teal animate-pulse" />
                <span>EST. 1998 // SHARE COMPANY REG. NO. 09-412 // ADDIS ABABA ZONE 4</span>
              </div>

              <Heading
                as="h1"
                font="serif"
                size="display-xl"
                color="white"
                className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight"
              >
                Heavy Industrial Metallurgy & Precision Engineering at Scale.
              </Heading>

              <Text
                variant="lead"
                color="border"
                className="max-w-2xl text-sm sm:text-base text-border/90 leading-relaxed"
              >
                Asterra Manufacturing Group unites four autonomous production divisions across 68,000 m² of covered plant floor—fabricating certified structural metals, high-durability precast infrastructure, and industrial polymer systems for sovereign infrastructure across 14 regional export corridors.
              </Text>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/business"
                  variant="white"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Explore Operating Divisions
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="text-white border-white/30 hover:bg-white/10 hover:border-white"
                >
                  Submit Corporate RFQ
                </Button>
              </div>

              {/* Technical Telemetry Ribbon */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-border/90">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-mineral-teal shrink-0" />
                  <span className="truncate">EN 1090-2 EXC3 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-mineral-teal shrink-0" />
                  <span className="truncate">68,000 m² Plant Floor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-mineral-teal shrink-0" />
                  <span className="truncate">14 Export Corridors</span>
                </div>
              </div>
            </div>

            {/* Industrial Plant Viewfinder Graphic */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative border border-white/20 p-2 bg-white/5 backdrop-blur-xs">
                <div className="aspect-[4/5] bg-evergreen-active overflow-hidden relative border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                    alt="Asterra Heavy Metallurgy Submerged-Arc Welding Line"
                    className="w-full h-full object-cover"
                  />
                  {/* Viewfinder Coordinates & Live Telemetry Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-evergreen/90 border border-white/20 text-[9px] font-mono text-mineral-teal uppercase">
                    PLANT 1 // LINE 04 [ACTIVE]
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-evergreen via-evergreen/85 to-transparent p-5 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-mineral-teal font-semibold block">
                      Submerged-Arc Heavy Girder Line
                    </span>
                    <p className="text-xs text-white/90 font-sans leading-snug">
                      Automated tandem-wire submerged-arc welding capable of 120mm structural flange penetration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVIDENCE OF SCALE (REFINED INDUSTRIAL TELEMETRY STRIP) */}
      <section className="bg-white border-b border-border py-8 lg:py-10">
        <div className="container-corporate">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="p-4 sm:px-6 sm:py-2 first:pl-0">
              <StatCard
                index="01"
                value="120,000 MT"
                label="Annual Output"
                context="Certified structural steel & precast material volume"
                size="md"
              />
            </div>
            <div className="p-4 sm:px-6 sm:py-2">
              <StatCard
                index="02"
                value="68,000 m²"
                label="Covered Plant Area"
                context="Four integrated facilities in Industrial Zone 4"
                size="md"
              />
            </div>
            <div className="p-4 sm:px-6 sm:py-2">
              <StatCard
                index="03"
                value="14 Nations"
                label="Export Footprint"
                context="Active corridors across East Africa & the Gulf"
                size="md"
              />
            </div>
            <div className="p-4 sm:px-6 sm:py-2 last:pr-0">
              <StatCard
                index="04"
                value="26+ Years"
                label="Operational Tenure"
                context="Continuous manufacturing operations since 1998"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE HERITAGE & INDUSTRIAL MANDATE */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <Badge variant="mono">Foundational Mandate // 1998–2024</Badge>
                <Heading as="h2" font="serif" size="display-md" color="evergreen">
                  A Quarter-Century of Sovereign Industrial Modernization.
                </Heading>
                <Text variant="lead" color="body" className="text-reading">
                  Asterra Manufacturing Group unites heavy metallurgical fabrication, engineered UHPC precast materials, polymer pressure piping, and automated industrial assemblies under one disciplined governance framework.
                </Text>
              </div>

              <div className="space-y-3.5 text-charcoal-body text-sm leading-relaxed border-l-2 border-mineral-teal pl-4">
                <p>
                  From our inception in 1998, we have maintained a single strategic thesis: that sustainable regional development requires dependable, high-precision industrial manufacturing built to international ISO and EN standards.
                </p>
                <p>
                  Today, our multi-facility manufacturing complexes operate round-the-clock synchronous shifts, housing 12 kW fiber laser cutting tables, computerized concrete batching towers, and 5-axis CNC heavy machining centers.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Button
                  to="/about"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Read Corporate Story & Heritage
                </Button>
              </div>
            </div>

            {/* Asymmetrical Spec Box */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-border p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-evergreen text-white flex items-center justify-center font-mono text-xs font-bold">
                      AMG
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-evergreen">
                        Manufacturing Capability Spec
                      </h4>
                      <span className="font-mono text-[10px] text-charcoal-muted uppercase">
                        Audited Infrastructure Registry
                      </span>
                    </div>
                  </div>
                  <span className="badge-mono text-[10px] bg-ivory-canvas text-evergreen border-border">
                    Audit Grade A
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 bg-ivory-canvas border border-border space-y-1">
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted font-bold block">
                      Heavy Plate Processing
                    </span>
                    <div className="font-serif text-lg font-bold text-evergreen">
                      12 kW CNC Fiber Laser
                    </div>
                    <p className="text-[11px] text-charcoal-body">
                      Sub-millimeter cutting up to 30mm structural plate
                    </p>
                  </div>

                  <div className="p-3.5 bg-ivory-canvas border border-border space-y-1">
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted font-bold block">
                      Automated Precast Batching
                    </span>
                    <div className="font-serif text-lg font-bold text-evergreen">
                      180 m³/hr Tower
                    </div>
                    <p className="text-[11px] text-charcoal-body">
                      Ultra-High Performance Concrete (UHPC) formulation
                    </p>
                  </div>

                  <div className="p-3.5 bg-ivory-canvas border border-border space-y-1">
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted font-bold block">
                      Engineering Human Capital
                    </span>
                    <div className="font-serif text-lg font-bold text-evergreen">
                      1,840 Personnel
                    </div>
                    <p className="text-[11px] text-charcoal-body">
                      Certified metallurgists, welders, and NDT specialists
                    </p>
                  </div>

                  <div className="p-3.5 bg-ivory-canvas border border-border space-y-1">
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted font-bold block">
                      Structural Execution
                    </span>
                    <div className="font-serif text-lg font-bold text-evergreen">
                      EN 1090-2 EXC3
                    </div>
                    <p className="text-[11px] text-charcoal-body">
                      Certified for major transport & rail bridge structures
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-charcoal-muted border-t border-border">
                  <span>Inspection Agency: Bureau Veritas</span>
                  <span className="text-evergreen font-bold">100% Traceability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED OPERATING DIVISIONS SHOWCASE */}
      <section className="py-16 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Integrated Production Ecosystem"
            title="Four Specialized Industrial Divisions."
            description="Our integrated manufacturing footprint spans heavy steel fabrication, precast transit components, pressure piping systems, and mechanical assemblies."
            actionLink={{ label: 'Review Division Specifications', href: '/business' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessUnits.map((unit) => (
              <BusinessUnitCard key={unit.slug} unit={unit} layout="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEMONSTRATED PERFORMANCE IN PRACTICE (FLAGSHIP CASE STUDY) */}
      {flagshipProject && (
        <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
          <div className="container-corporate space-y-10">
            <SectionHeader
              eyebrow="Infrastructure Delivery Dossier"
              title="Demonstrated Engineering Performance."
              description="Verifiable case studies showcasing sub-millimeter tolerances, on-time corridor delivery, and structural fatigue integrity under heavy transport conditions."
              actionLink={{ label: 'Explore Complete Project Archive', href: '/projects' }}
            />

            <ProjectCard project={flagshipProject} layout="featured" />
          </div>
        </section>
      )}

      {/* 6. FIDUCIARY STEWARDSHIP & EXECUTIVE DIRECTORS */}
      <section className="py-16 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between border-b border-border pb-8">
            <div className="lg:col-span-8 space-y-3">
              <Badge variant="mono">Board Oversight & Fiduciary Stewardship</Badge>
              <Heading as="h2" font="serif" size="display-md" color="evergreen">
                Executive Leadership & Fiduciary Governance.
              </Heading>
              <Text variant="lead" color="body">
                Asterra Group operates under a dual-tier governance charter with independent board oversight, an active Risk & Technical Audit Committee, and seasoned executive directors.
              </Text>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/leadership"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-evergreen hover:text-mineral-teal transition-colors"
              >
                <span>View Full Executive Directory</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((exec) => (
              <ExecutiveCard key={exec.slug} executive={exec} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERNATIONAL QUALITY ACCREDITATIONS REGISTRY */}
      <section className="py-16 bg-evergreen text-white border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-mineral-teal font-bold block">
                Audited Standards
              </span>
              <Heading as="h3" font="serif" size="heading-lg" color="white">
                International Quality & Safety Accreditations
              </Heading>
              <Text variant="sm" color="border" className="leading-relaxed text-border/90">
                Every manufacturing process, raw plate melt, and welding joint is independently tested and certified by accredited international inspection bureaus.
              </Text>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {company.certifications.map((cert) => (
                  <div
                    key={cert.code}
                    className="p-4 bg-white/5 border border-white/10 hover:border-mineral-teal transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-white">
                        {cert.code}
                      </span>
                      <ShieldCheck className="w-3.5 h-3.5 text-mineral-teal" />
                    </div>
                    <p className="text-xs text-border/90 leading-snug line-clamp-2">
                      {cert.title}
                    </p>
                    <span className="text-[10px] font-mono text-border/60 mt-2 block">
                      Auditor: {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPLIED RESEARCH & ENGINEERING MONOGRAPHS */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Engineering Monographs & Applied Metallurgy"
            title="Technical Insights & Research Publications."
            description="Authoritative material science analyses, structural fatigue evaluations, and ESG circularity studies published by Asterra's engineering directorship."
            actionLink={{ label: 'Explore Knowledge Center', href: '/insights' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Left Monograph */}
            {leadArticle && (
              <div className="lg:col-span-7 bg-white border border-border p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                    <Badge variant="mono">{leadArticle.category}</Badge>
                    <span className="font-mono text-[11px] text-charcoal-muted">
                      {leadArticle.readTimeMinutes} min read • Published {leadArticle.publishedDate}
                    </span>
                  </div>

                  <Link to={`/insights/${leadArticle.slug}`} className="block group">
                    <Heading
                      as="h3"
                      font="serif"
                      size="heading-lg"
                      color="evergreen"
                      className="group-hover:text-mineral-teal transition-colors"
                    >
                      {leadArticle.title}
                    </Heading>
                  </Link>

                  <Text variant="body" color="body" className="leading-relaxed">
                    {leadArticle.subtitle}
                  </Text>

                  {/* Key Takeaways Callout */}
                  {leadArticle.keyTakeaways && leadArticle.keyTakeaways.length > 0 && (
                    <div className="p-4 bg-ivory-canvas border border-border space-y-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-evergreen tracking-wider block">
                        Executive Engineering Takeaway:
                      </span>
                      <p className="text-xs text-charcoal-body leading-relaxed">
                        {leadArticle.keyTakeaways[0]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-bold text-evergreen block">
                      {leadArticle.author.name}
                    </span>
                    <span className="text-charcoal-muted text-[11px]">
                      {leadArticle.author.role}
                    </span>
                  </div>
                  <Link
                    to={`/insights/${leadArticle.slug}`}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-evergreen hover:text-mineral-teal transition-colors"
                  >
                    <span>Read Monograph</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {/* Secondary Right Monographs */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondaryArticles.map((article) => (
                <div
                  key={article.slug}
                  className="bg-white border border-border p-6 flex flex-col justify-between space-y-4 hover:border-evergreen/40 transition-all"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold text-mineral-teal uppercase">
                        {article.category}
                      </span>
                      <span className="font-mono text-[10px] text-charcoal-muted">
                        {article.readTimeMinutes} min read
                      </span>
                    </div>

                    <Link to={`/insights/${article.slug}`} className="block group">
                      <Heading
                        as="h4"
                        font="serif"
                        size="heading-sm"
                        color="evergreen"
                        className="group-hover:text-mineral-teal transition-colors"
                      >
                        {article.title}
                      </Heading>
                    </Link>

                    <Text variant="sm" color="body" className="line-clamp-2 text-xs">
                      {article.subtitle}
                    </Text>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-charcoal-muted">
                      By {article.author.name}
                    </span>
                    <Link
                      to={`/insights/${article.slug}`}
                      className="font-semibold text-evergreen hover:text-mineral-teal uppercase tracking-wider text-[11px]"
                    >
                      Read &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. DIRECT COMMERCIAL DESK & TENDER CTA BANNER */}
      <CTABanner
        eyebrow="Tender Directorship & Commercial Inquiries"
        title="Require structural fabrication tolerances or contract manufacturing allocations?"
        description="Our directorship teams provide formal engineering proposals, facility production scheduling, and technical feasibility reviews."
        primaryBtnText="Submit Technical RFQ"
        primaryBtnLink="/contact"
        secondaryBtnText="Review Operating Divisions"
        secondaryBtnLink="/business"
      />
    </div>
  );
};
