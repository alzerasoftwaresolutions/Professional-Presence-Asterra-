import React, { useState } from 'react';
import { getCompanyInfo } from '../data';
import {
  PageHeader,
  Heading,
  Text,
  Button,
  PageSeo,
} from '../components';
import {
  ShieldCheck,
  Recycle,
  Sun,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Zap,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const company = getCompanyInfo();

  // Interactive Milestone State
  const [selectedMilestoneYear, setSelectedMilestoneYear] = useState<number>(
    company.milestones[company.milestones.length - 1]?.year || 2024
  );

  const activeMilestone =
    company.milestones.find((m) => m.year === selectedMilestoneYear) ||
    company.milestones[0];

  return (
    <div className="w-full">
      <PageSeo
        title="Corporate Story & 25-Year Heritage"
        description="A quarter-century of disciplined manufacturing growth, automated infrastructure investment, and unwavering adherence to international quality standards."
        ogType="website"
      />

      {/* 1. ARCHITECTURAL PAGE HEADER */}
      <PageHeader
        eyebrow="Corporate Heritage & Mandate"
        title="Building Sovereign Industrial Capability Since 1998."
        description="From a single specialized metallurgy workshop to East Africa's leading heavy industrial manufacturing group, operating across 68,000 m² of automated plant infrastructure."
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
        theme="evergreen"
      />

      {/* 2. CORPORATE PURPOSE & MANIFESTO */}
      <section className="py-16 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-mono">Foundational Purpose</span>
              <Heading as="h2" font="serif" size="display-md" color="evergreen">
                Engineering Scale with Uncompromising Fiduciary Integrity.
              </Heading>

              <div className="space-y-4 text-charcoal-body text-sm leading-relaxed border-l-2 border-mineral-teal pl-4">
                <p className="font-semibold text-evergreen">
                  {company.mission}
                </p>
                <p>
                  {company.vision}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-ivory-canvas border border-border space-y-1">
                  <div className="font-serif text-2xl font-bold text-evergreen">1998</div>
                  <span className="font-mono text-[10px] text-charcoal-muted uppercase">Inception Year</span>
                </div>
                <div className="p-4 bg-ivory-canvas border border-border space-y-1">
                  <div className="font-serif text-2xl font-bold text-evergreen">100%</div>
                  <span className="font-mono text-[10px] text-charcoal-muted uppercase">Sovereign Plant Ownership</span>
                </div>
              </div>
            </div>

            {/* Overlapping Institutional Manifesto Card */}
            <div className="lg:col-span-6 bg-evergreen text-white p-8 sm:p-10 border border-evergreen-hover relative space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="font-mono text-xs text-mineral-teal uppercase font-bold tracking-wider">
                  The Asterra Governance Thesis
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-white/10 text-border">
                  ISO Certified
                </span>
              </div>

              <p className="font-serif text-lg sm:text-xl text-white/95 leading-relaxed italic">
                &ldquo;Industrial sovereignty is not achieved through trading or assembly of imported finished goods. It requires capital investment in heavy CNC profiling, certified welding execution, and computerized precast formulation.&rdquo;
              </p>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-border/80">
                <span>Executive Directorate</span>
                <span className="text-mineral-teal font-bold">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 25-YEAR MILESTONE TIMELINE (1998 – 2024) */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="badge-mono">Historical Evolution</span>
            <Heading as="h2" font="serif" size="display-md" color="evergreen">
              25 Years of Industrial Milestones.
            </Heading>
            <Text variant="lead" color="body">
              Select a milestone year to explore the facility expansions, machine acquisitions, and international certifications that shaped Asterra.
            </Text>
          </div>

          {/* Interactive Year Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-border pb-4">
            {company.milestones.map((m) => {
              const isSelected = selectedMilestoneYear === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestoneYear(m.year)}
                  className={`p-3.5 text-center transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-evergreen text-white border-evergreen shadow-sm'
                      : 'bg-white text-charcoal-body border-border hover:border-evergreen'
                  }`}
                >
                  <div className={`font-mono text-sm font-bold ${isSelected ? 'text-mineral-teal' : 'text-evergreen'}`}>
                    {m.year}
                  </div>
                  <div className="text-[11px] truncate font-sans mt-0.5">
                    {m.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Spotlight Card */}
          {activeMilestone && (
            <div className="bg-white border border-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn shadow-xs">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-evergreen text-white text-xs font-mono font-bold">
                  <Calendar className="w-3.5 h-3.5 text-mineral-teal" />
                  <span>MILESTONE // YEAR {activeMilestone.year}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-evergreen">
                  {activeMilestone.title}
                </h3>

                <p className="text-sm sm:text-base text-charcoal-body leading-relaxed">
                  {activeMilestone.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-mineral-teal font-bold pt-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Operational Standard Formally Institutionalized</span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-ivory-canvas p-6 border border-border space-y-3 text-center">
                <div className="font-mono text-xs uppercase text-charcoal-muted font-semibold">
                  Cumulative Tenure
                </div>
                <div className="font-serif text-4xl font-bold text-evergreen">
                  {activeMilestone.year - 1998} Years
                </div>
                <p className="text-xs text-charcoal-body">
                  From founding workshop to current 68,000 m² operating footprint.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. FOUR OPERATIONAL PILLARS (CORE VALUES) */}
      <section className="py-16 lg:py-24 bg-white border-b border-border">
        <div className="container-corporate space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="badge-mono">Operating Values</span>
            <Heading as="h2" font="serif" size="display-md" color="evergreen">
              The Four Pillars of Production Governance.
            </Heading>
            <Text variant="lead" color="body">
              Non-negotiable operational standards that govern every weld, batch mix, extrusion run, and executive transaction.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="bg-ivory-canvas/60 p-6 sm:p-8 border border-border hover:border-evergreen transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-mineral-teal">
                    PILLAR 0{idx + 1} //
                  </span>
                  <h3 className="font-serif text-xl font-bold text-evergreen group-hover:text-mineral-teal transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-body leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border flex items-center gap-1.5 text-[11px] font-mono text-charcoal-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-mineral-teal" />
                  <span>Audited Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ESG DECARBONIZATION & CIRCULAR METALLURGY */}
      <section id="esg" className="py-16 lg:py-24 bg-evergreen text-white border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-mono bg-white/10 text-mineral-teal border-white/20">
                Sustainability & Circularity
              </span>
              <Heading as="h2" font="serif" size="display-md" color="white">
                Decarbonization & Circular Metallurgy in Practice.
              </Heading>
              <Text variant="lead" color="border" className="text-border/90 text-sm sm:text-base leading-relaxed">
                Industrial manufacturing must be sustainable. Asterra pairs high-throughput steel production with zero-landfill scrap segregation and rooftop renewable energy generation.
              </Text>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-border/85 leading-relaxed">
                <p>
                  • <strong>Scrap Segregation:</strong> 94.2% of structural off-cuts are segregated at CNC profiling beds and recycled into certified secondary steel loops.
                </p>
                <p>
                  • <strong>Solar Micro-Grid:</strong> 3.2 MW rooftop solar arrays in Industrial Zone 4 reduce peak diesel grid reliance.
                </p>
                <p>
                  • <strong>Zero Toxic Runoff:</strong> Automated wastewater treatment at polymer extrusion lines with 100% closed-loop cooling.
                </p>
              </div>
            </div>

            {/* Circularity Dashboard Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 space-y-2">
                <Recycle className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-3xl font-bold text-white">94.2%</div>
                <div className="font-mono text-xs uppercase text-mineral-teal font-bold">Scrap Circularity</div>
                <p className="text-[11px] text-border/75">Closed-loop metallurgy scrap segregation.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 space-y-2">
                <Sun className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-3xl font-bold text-white">3.2 MW</div>
                <div className="font-mono text-xs uppercase text-mineral-teal font-bold">Solar Generation</div>
                <p className="text-[11px] text-border/75">Rooftop industrial photovoltaic capacity.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 space-y-2">
                <ShieldCheck className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-3xl font-bold text-white">ISO 14001</div>
                <div className="font-mono text-xs uppercase text-mineral-teal font-bold">Environmental Cert</div>
                <p className="text-[11px] text-border/75">Third-party audited environmental management.</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 space-y-2">
                <Zap className="w-6 h-6 text-mineral-teal" />
                <div className="font-serif text-3xl font-bold text-white">1.2M Hrs</div>
                <div className="font-mono text-xs uppercase text-mineral-teal font-bold">LTI-Free Safety</div>
                <p className="text-[11px] text-border/75">Zero lost-time injury incident record in 2023–2024.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP DIRECTORY ACTION */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-corporate flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-mineral-teal uppercase block">
              Governance Oversight
            </span>
            <h3 className="font-serif text-2xl font-bold text-evergreen">
              Meet the Executive Committee & Board of Directors.
            </h3>
          </div>
          <Button
            to="/leadership"
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            Explore Leadership Directory
          </Button>
        </div>
      </section>
    </div>
  );
};
