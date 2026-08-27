import React from 'react';
import { getCompanyInfo, getLeadership } from '../data';
import {
  PageHeader,
  SectionHeader,
  Heading,
  Text,
  Badge,
  CTABanner,
  ExecutiveCard,
  PageSeo,
} from '../components';
import {
  ShieldCheck,
  Recycle,
  Sun,
  Users,
  Target,
  Compass,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const company = getCompanyInfo();
  const boardAndExecs = getLeadership().slice(0, 3);

  return (
    <div className="w-full">
      <PageSeo
        title="Corporate Story & 25-Year Heritage"
        description="A quarter-century of disciplined manufacturing growth, automated infrastructure investment, and unwavering adherence to international quality standards."
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="Corporate Story & Heritage"
        title="Building Industrial Capability Since 1998."
        description="A quarter-century of disciplined manufacturing growth, automated infrastructure investment, and unwavering adherence to international quality standards."
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
        theme="evergreen"
      />

      {/* 2. CORPORATE PURPOSE: MISSION & VISION */}
      <section className="py-20 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-mono">Institutional Mandate</span>
              <Heading as="h2" font="serif" size="display-md" color="evergreen">
                Engineering Scale with Fiduciary Integrity.
              </Heading>
              <Text variant="lead" color="body">
                {company.mission}
              </Text>
              <Text variant="body" color="body">
                {company.vision}
              </Text>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-ivory-canvas border border-border space-y-4">
                <div className="w-12 h-12 bg-evergreen text-white flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <Heading as="h3" font="serif" size="heading-md" color="evergreen">
                  Our Mission
                </Heading>
                <Text variant="sm" color="body">
                  {company.mission}
                </Text>
              </div>

              <div className="p-8 bg-evergreen text-white border border-evergreen-hover space-y-4">
                <div className="w-12 h-12 bg-mineral-teal text-white flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <Heading as="h3" font="serif" size="heading-md" color="white">
                  Our Vision
                </Heading>
                <Text variant="sm" color="border">
                  {company.vision}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (4 PILLARS) */}
      <section className="py-20 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Core Values"
            title="The Principles That Guide Every Production Cycle."
            description="Four foundational commitments that define our workplace culture, quality benchmarks, and long-term client relationships."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="card-corporate p-6 sm:p-8 bg-white border border-border flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-mineral-teal">
                    0{idx + 1} //
                  </span>
                  <Heading as="h3" font="serif" size="heading-md" color="evergreen">
                    {val.title}
                  </Heading>
                  <Text variant="sm" color="body" className="leading-relaxed">
                    {val.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HERITAGE TIMELINE (1998 – 2024) */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate space-y-16">
          <SectionHeader
            eyebrow="Our Journey"
            title="Key Milestones in Asterra's Evolution."
            description="From a specialized metal fabrication shop to East Africa's leading diversified industrial manufacturer."
          />

          <div className="relative border-l-2 border-border ml-4 sm:ml-8 lg:ml-32 space-y-12 pb-4">
            {company.milestones.map((m) => (
              <div key={m.year} className="relative pl-8 sm:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-evergreen group-hover:bg-evergreen transition-colors" />

                <div className="bg-ivory-canvas/60 p-6 sm:p-8 border border-border max-w-3xl space-y-2 hover:border-evergreen/40 transition-colors">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-evergreen text-white">
                      {m.year}
                    </span>
                    <Heading as="h3" font="serif" size="heading-md" color="evergreen">
                      {m.title}
                    </Heading>
                  </div>
                  <Text variant="body" color="body">
                    {m.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUSTAINABILITY & ESG CIRCULARITY */}
      <section id="esg" className="py-20 lg:py-28 bg-evergreen text-white border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="dark">Sustainability & ESG</Badge>
              <Heading as="h2" font="serif" size="display-md" color="white">
                Decarbonization & Circular Metallurgy in Action.
              </Heading>
              <Text variant="lead" color="border">
                We believe true industrial excellence includes verifiable environmental stewardship and transparent health and safety governance.
              </Text>
              <div className="space-y-4 pt-2 text-sm text-border leading-relaxed">
                <p>
                  Asterra operates dedicated scrap metal segregation lines at every CNC profiling center, recycling 94.2% of steel off-cuts directly back into certified secondary manufacturing loops.
                </p>
                <p>
                  Our 3.2 MW industrial rooftop solar arrays in Industrial Zone 4 reduce grid electricity dependence and lower embedded carbon across all fabricated structural members.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 space-y-3">
                <Recycle className="w-8 h-8 text-mineral-teal" />
                <div className="font-serif text-2xl font-bold text-white">94.2%</div>
                <div className="font-mono text-xs uppercase text-border">Scrap Circularity</div>
                <p className="text-xs text-border">Closed-loop alloy recycling and zero-landfill scrap segregation.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 space-y-3">
                <Sun className="w-8 h-8 text-mineral-teal" />
                <div className="font-serif text-2xl font-bold text-white">3.2 MW</div>
                <div className="font-mono text-xs uppercase text-border">Solar Generation</div>
                <p className="text-xs text-border">Rooftop solar photovoltaic capacity offsetting peak plant loads.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 space-y-3">
                <ShieldCheck className="w-8 h-8 text-mineral-teal" />
                <div className="font-serif text-2xl font-bold text-white">ISO 14001</div>
                <div className="font-mono text-xs uppercase text-border">Environmental Standard</div>
                <p className="text-xs text-border">Third-party audited environmental management governance.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 space-y-3">
                <Users className="w-8 h-8 text-mineral-teal" />
                <div className="font-serif text-2xl font-bold text-white">Zero Harm</div>
                <div className="font-mono text-xs uppercase text-border">Safety Standard</div>
                <p className="text-xs text-border">ISO 45001 certified workplace health & safety culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP PREVIEW */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Leadership"
            title="Stewards of Scale & Strategy."
            description="Meet the executive leadership and independent directors guiding Asterra's industrial growth."
            actionLink={{ label: 'Explore Full Leadership Profiles', href: '/leadership' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardAndExecs.map((exec) => (
              <ExecutiveCard key={exec.slug} executive={exec} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <CTABanner
        eyebrow="Corporate & Institutional Engagement"
        title="Partner with East Africa's leading manufacturing group."
        description="Whether you require structural steel fabrication, high-volume building components, or joint venture collaboration, our executive teams are ready."
        primaryBtnText="Contact Corporate HQ"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Operating Divisions"
        secondaryBtnLink="/business"
      />
    </div>
  );
};
