import React, { useState } from 'react';
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
  PageSeo,
} from '../components';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  CheckCircle2,
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

  // Interactive States
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState<'solution' | 'challenge' | 'specs'>('solution');
  const [activeCommittee, setActiveCommittee] = useState<'audit' | 'risk' | 'technical'>('audit');

  const selectedUnit = businessUnits[activeDivisionIndex] || businessUnits[0];

  const committeeDetails = {
    audit: {
      title: 'Audit & Fiduciary Compliance Committee',
      charter: 'Ensures quarterly statutory audit integrity, Bureau Veritas independent verification, and uncompromised fiscal stewardship.',
      members: 'Dr. Samuel Bekele (Chair), Sofia Alemayehu',
      frequency: 'Quarterly Synchronous Review',
    },
    risk: {
      title: 'Risk & Supply Chain Resilience Board',
      charter: 'Monitors raw steel billet logistics, energy redundancy via 3.2 MW solar arrays, and volatile foreign exchange mitigations.',
      members: 'Eng. Dawit Haile, Michael Tadesse',
      frequency: 'Bi-Monthly Operational Audit',
    },
    technical: {
      title: 'Technical Standards & Metallurgy Directorate',
      charter: 'Governs EN 1090-2 EXC3 execution class protocols, AWS D1.1 weld inspection records, and DIN 8074 polymer testing benchmarks.',
      members: 'Dr. Samuel Bekele, Berhanu Kebede',
      frequency: 'Continuous Shift-Level Oversight',
    },
  };

  return (
    <div className="w-full">
      <PageSeo
        title="Heavy Industrial Manufacturing & Structural Engineering"
        description="Asterra Manufacturing Group operates four certified production divisions across 68,000 m² of covered plant infrastructure, delivering EN 1090-2 EXC3 heavy structural steel, UHPC precast materials, and engineering systems across 14 export corridors."
        ogType="website"
      />

      {/* =========================================================================
          1. IMMERSIVE ARCHITECTURAL HERO WITH EMBEDDED TELEMETRY
          ========================================================================= */}
      <section className="relative bg-evergreen text-white pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-evergreen-hover">
        {/* Subtle Architectural Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grid-pattern-dark"
          aria-hidden="true"
        />

        <div className="container-corporate relative z-10 space-y-12">
          {/* Top Institutional Identity Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-mono tracking-wider text-mineral-teal uppercase">
              <span className="w-2 h-2 rounded-full bg-mineral-teal animate-pulse" />
              <span>EST. 1998 // SHARE COMPANY REG. NO. 09-412 // ADDIS ABABA INDUSTRIAL ZONE 4</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-xs font-mono text-border/80">
              <span>EN 1090-2 EXC3 CERTIFIED</span>
              <span>•</span>
              <span>120,000 MT ANNUAL CAPACITY</span>
              <span>•</span>
              <span>14 EXPORT CORRIDORS</span>
            </div>
          </div>

          {/* Hero Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Heading
                as="h1"
                font="serif"
                size="display-xl"
                color="white"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight font-bold"
              >
                Heavy Industrial Metallurgy & Precision Engineering at Continental Scale.
              </Heading>

              <Text
                variant="lead"
                color="border"
                className="text-sm sm:text-base text-border/90 leading-relaxed max-w-2xl"
              >
                Asterra Manufacturing Group operates four specialized production divisions across 68,000 m² of covered plant infrastructure—delivering certified structural steel, UHPC transit elements, and polymer pressure piping for sovereign infrastructure across 14 export corridors.
              </Text>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/business"
                  variant="white"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Explore 4 Operating Divisions
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="text-white border-white/30 hover:bg-white/10 hover:border-white"
                >
                  Request Technical RFQ
                </Button>
              </div>
            </div>

            {/* Right: Dynamic Division Quick-View Console */}
            <div className="lg:col-span-5">
              <div className="glass-panel-dark p-6 border border-white/20 space-y-4 relative">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-2">
                    <Factory className="w-4 h-4 text-mineral-teal" />
                    <span className="font-mono text-xs text-mineral-teal uppercase font-bold tracking-wider">
                      Live Plant Infrastructure
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/70 px-2 py-0.5 bg-white/10 border border-white/15">
                    Zone 4 Facility
                  </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden border border-white/10">
                  <img
                    src={selectedUnit.heroImage}
                    alt={selectedUnit.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="badge-mono bg-evergreen text-white border-mineral-teal text-[10px]">
                      {selectedUnit.divisionCode}
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-evergreen via-evergreen/80 to-transparent p-4">
                    <div className="text-sm font-bold font-serif text-white">
                      {selectedUnit.name}
                    </div>
                    <div className="text-xs text-border/80 font-mono">
                      Capacity: {selectedUnit.annualCapacity} • {selectedUnit.facilityLocation}
                    </div>
                  </div>
                </div>

                {/* Division Selector Tabs */}
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  {businessUnits.map((unit, idx) => (
                    <button
                      key={unit.slug}
                      onClick={() => setActiveDivisionIndex(idx)}
                      className={`p-2 text-center text-[10px] font-mono uppercase tracking-wider transition-all border cursor-pointer ${
                        activeDivisionIndex === idx
                          ? 'bg-mineral-teal text-white border-mineral-teal font-bold shadow-xs'
                          : 'bg-white/5 text-border/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {unit.divisionCode}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-border/70 pt-2 border-t border-white/10">
                  <span>Workforce: {selectedUnit.workforceCount}</span>
                  <Link
                    to={`/business/${selectedUnit.slug}`}
                    className="text-mineral-teal hover:underline flex items-center gap-1 font-semibold"
                  >
                    Division Specs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTEGRATED OPERATIONAL CAPABILITY MATRIX (NO OVERSIZED STATS)
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="badge-mono">Sovereign Industrial Footprint</span>
              <Heading as="h2" font="serif" size="display-md" color="evergreen">
                Four Autonomous Divisions. One Synchronous Standard.
              </Heading>
              <Text variant="lead" color="body">
                Our 68,000 m² covered production complex integrates metallurgical plate profiling, heavy girder fabrication, automated UHPC precast batching, and polymer pressure extrusion.
              </Text>
            </div>
            <Link
              to="/business"
              className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-evergreen hover:text-mineral-teal font-bold shrink-0 border border-evergreen/30 px-4 py-2.5 bg-white hover:border-evergreen transition-all"
            >
              <span>Explore All Specifications</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* Interactive Split Capability Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Division Navigation List */}
            <div className="lg:col-span-5 space-y-3">
              {businessUnits.map((unit, idx) => {
                const isActive = activeDivisionIndex === idx;
                return (
                  <div
                    key={unit.slug}
                    onClick={() => setActiveDivisionIndex(idx)}
                    className={`p-5 border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white border-evergreen shadow-sm translate-x-1'
                        : 'bg-white/60 border-border hover:bg-white hover:border-border-strong'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-evergreen' : 'text-charcoal-muted'}`}>
                        {unit.divisionCode}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-ivory-canvas text-charcoal-body border border-border">
                        {unit.annualCapacity}
                      </span>
                    </div>
                    <h3 className={`font-serif text-base font-bold transition-colors ${isActive ? 'text-evergreen' : 'text-charcoal-body'}`}>
                      {unit.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted line-clamp-2 mt-1 leading-relaxed">
                      {unit.tagline}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right: Active Division Showcase Card */}
            <div className="lg:col-span-7 bg-white border border-border p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-mineral-teal uppercase block">
                      {selectedUnit.divisionCode} // SPECIFICATION PROFILE
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-evergreen">
                      {selectedUnit.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-evergreen text-white font-mono text-xs font-bold">
                    {selectedUnit.annualCapacity}
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden border border-border bg-ivory-canvas">
                  <img
                    src={selectedUnit.heroImage}
                    alt={selectedUnit.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-evergreen/90 text-white px-3 py-1 text-xs font-mono">
                    Facility: {selectedUnit.facilityLocation} • {selectedUnit.facilitySizeSqM}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-body leading-relaxed">
                  {selectedUnit.overview}
                </p>

                {/* Technical Capabilities Matrix */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                    Audited Production Tolerances & Equipment:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-body">
                    {selectedUnit.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap.id} className="flex items-start gap-2 bg-ivory-canvas/60 p-2.5 border border-border">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mineral-teal shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-evergreen">{cap.title}</span>
                          <span className="text-[11px] text-charcoal-muted">{cap.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs text-charcoal-muted">
                  Workforce: {selectedUnit.workforceCount}
                </span>
                <Button
                  to={`/business/${selectedUnit.slug}`}
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
                >
                  View Plant Machinery & Standard Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DEMONSTRATED ENGINEERING PERFORMANCE (FLAGSHIP CASE STUDY)
          ========================================================================= */}
      {flagshipProject && (
        <section className="py-16 lg:py-24 bg-white border-b border-border">
          <div className="container-corporate space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
              <div className="space-y-2 max-w-3xl">
                <span className="badge-mono">Infrastructure Delivery Dossier</span>
                <Heading as="h2" font="serif" size="display-md" color="evergreen">
                  Awash Heavy Rail Transit Overpass: 1,420 MT Structural Delivery.
                </Heading>
                <Text variant="lead" color="body">
                  Sub-millimeter welding tolerances and EN 1090-2 EXC3 bridge girders fabricated under a zero-tolerance fatigue testing protocol.
                </Text>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-evergreen hover:text-mineral-teal font-bold shrink-0"
              >
                <span>View Complete Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>

            {/* Case Study Split Feature */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ivory-canvas border border-border p-6 sm:p-10">
              <div className="lg:col-span-6 space-y-6">
                {/* Interactive Challenge / Solution Tabs */}
                <div className="flex border-b border-border">
                  <button
                    onClick={() => setActiveProjectTab('solution')}
                    className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer ${
                      activeProjectTab === 'solution'
                        ? 'border-evergreen text-evergreen bg-white'
                        : 'border-transparent text-charcoal-muted hover:text-evergreen'
                    }`}
                  >
                    Engineering Solution
                  </button>
                  <button
                    onClick={() => setActiveProjectTab('challenge')}
                    className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer ${
                      activeProjectTab === 'challenge'
                        ? 'border-evergreen text-evergreen bg-white'
                        : 'border-transparent text-charcoal-muted hover:text-evergreen'
                    }`}
                  >
                    The Challenge
                  </button>
                  <button
                    onClick={() => setActiveProjectTab('specs')}
                    className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all border-b-2 font-bold cursor-pointer ${
                      activeProjectTab === 'specs'
                        ? 'border-evergreen text-evergreen bg-white'
                        : 'border-transparent text-charcoal-muted hover:text-evergreen'
                    }`}
                  >
                    Execution Specs
                  </button>
                </div>

                <div className="min-h-[140px] text-xs sm:text-sm text-charcoal-body leading-relaxed">
                  {activeProjectTab === 'solution' && (
                    <div className="space-y-3 animate-fadeIn">
                      <p>{flagshipProject.solution}</p>
                      <div className="flex items-center gap-2 text-xs font-mono text-evergreen font-bold">
                        <ShieldCheck className="w-4 h-4 text-mineral-teal" />
                        <span>100% Radiographic & Ultrasonic Weld Inspection</span>
                      </div>
                    </div>
                  )}
                  {activeProjectTab === 'challenge' && (
                    <div className="space-y-3 animate-fadeIn">
                      <p>{flagshipProject.challenge}</p>
                      <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted">
                        <span>Location: {flagshipProject.location} • Sector: {flagshipProject.sector}</span>
                      </div>
                    </div>
                  )}
                  {activeProjectTab === 'specs' && (
                    <div className="space-y-3 animate-fadeIn">
                      <p>{flagshipProject.engineeringExecution}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {flagshipProject.certificationsApplied.map((cert) => (
                          <span key={cert} className="badge-mono text-[10px] bg-white">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 4 Quantitative Result Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border">
                  {flagshipProject.results.map((res) => (
                    <div key={res.label} className="bg-white p-3 border border-border">
                      <div className="font-serif text-lg font-bold text-evergreen">
                        {res.metric}
                      </div>
                      <span className="font-mono text-[10px] text-charcoal-muted uppercase block leading-tight">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <Button
                    to={`/projects/${flagshipProject.slug}`}
                    variant="primary"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
                  >
                    Read Full Case Study Dossier
                  </Button>
                </div>
              </div>

              {/* Right Media Showcase */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative aspect-[16/11] overflow-hidden border border-border bg-white shadow-xs">
                  <img
                    src={flagshipProject.heroImage}
                    alt={flagshipProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-evergreen text-white font-mono text-[10px] px-2.5 py-1">
                    Client: {flagshipProject.client}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          4. BOARD FIDUCIARY STEWARDSHIP & LEADERSHIP DOSSIER
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Governance Charter & Interactive Committee Tabs */}
            <div className="lg:col-span-5 bg-evergreen text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-mineral-teal">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Dual-Tier Governance Charter</span>
                </div>
                <Heading as="h2" font="serif" size="display-md" color="white">
                  Institutional Direction & Fiduciary Stewardship.
                </Heading>
                <Text variant="sm" color="border" className="leading-relaxed text-border/90">
                  Asterra Group operates under strict fiduciary governance with independent board oversight, statutory audits by Bureau Veritas, and specialized sub-committees.
                </Text>

                {/* Committee Selector */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[10px] text-mineral-teal uppercase font-bold tracking-wider block">
                    Select Governance Directorate:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => setActiveCommittee('audit')}
                      className={`p-2 text-[10px] font-mono uppercase tracking-wider text-center transition-all border cursor-pointer ${
                        activeCommittee === 'audit'
                          ? 'bg-mineral-teal text-white border-mineral-teal font-bold'
                          : 'bg-white/5 text-border/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Audit
                    </button>
                    <button
                      onClick={() => setActiveCommittee('risk')}
                      className={`p-2 text-[10px] font-mono uppercase tracking-wider text-center transition-all border cursor-pointer ${
                        activeCommittee === 'risk'
                          ? 'bg-mineral-teal text-white border-mineral-teal font-bold'
                          : 'bg-white/5 text-border/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Risk
                    </button>
                    <button
                      onClick={() => setActiveCommittee('technical')}
                      className={`p-2 text-[10px] font-mono uppercase tracking-wider text-center transition-all border cursor-pointer ${
                        activeCommittee === 'technical'
                          ? 'bg-mineral-teal text-white border-mineral-teal font-bold'
                          : 'bg-white/5 text-border/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Technical
                    </button>
                  </div>
                </div>

                {/* Committee Detail Card */}
                <div className="p-4 bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="font-bold text-white font-serif text-sm">
                    {committeeDetails[activeCommittee].title}
                  </div>
                  <p className="text-border/80 text-[11px] leading-relaxed">
                    {committeeDetails[activeCommittee].charter}
                  </p>
                  <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-mineral-teal">
                    Directorate: {committeeDetails[activeCommittee].members}
                  </div>
                </div>
              </div>

              <Link
                to="/leadership"
                className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-mineral-teal hover:underline font-bold"
              >
                <span>Review Complete Governance Charter & Board</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>

            {/* Right: Executive Committee Dossier */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {executiveTeam.map((exec) => (
                <Link
                  key={exec.slug}
                  to={`/leadership/${exec.slug}`}
                  className="bg-white border border-border p-5 flex flex-col justify-between group hover:border-evergreen transition-all shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="aspect-[4/5] bg-ivory-canvas overflow-hidden border border-border">
                      <img
                        src={exec.photo}
                        alt={exec.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-evergreen group-hover:text-mineral-teal transition-colors">
                        {exec.name}
                      </h4>
                      <p className="font-mono text-[11px] text-charcoal-muted mt-0.5">
                        {exec.role}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-charcoal-muted">
                    <span>{exec.credentials[0] || 'Executive'}</span>
                    <span className="text-evergreen font-bold group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. INTERNATIONAL AUDITED QUALITY & ACCREDITATION STRIP
          ========================================================================= */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="lg:max-w-xs space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-mineral-teal font-bold block">
                Audited Standards
              </span>
              <h3 className="font-serif text-lg font-bold text-evergreen">
                Certified Quality & Execution Classes
              </h3>
              <p className="text-xs text-charcoal-muted">
                Audited by Bureau Veritas & international bureaus.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 flex-1">
              {company.certifications.map((cert) => (
                <div
                  key={cert.code}
                  className="p-3 bg-ivory-canvas/60 border border-border hover:border-evergreen transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-evergreen">
                      {cert.code}
                    </span>
                    <ShieldCheck className="w-3 h-3 text-mineral-teal" />
                  </div>
                  <p className="text-[10px] text-charcoal-body leading-snug truncate" title={cert.title}>
                    {cert.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. APPLIED METALLURGY & TECHNICAL MONOGRAPHS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
            <div className="space-y-2 max-w-3xl">
              <span className="badge-mono">Engineering Whitepapers</span>
              <Heading as="h2" font="serif" size="display-md" color="evergreen">
                Applied Metallurgy & Materials Science Monographs.
              </Heading>
              <Text variant="lead" color="body">
                Authoritative research papers, structural fatigue evaluations, and ESG circularity studies published by Asterra engineering leadership.
              </Text>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-evergreen hover:text-mineral-teal font-bold shrink-0"
            >
              <span>Explore Knowledge Center</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Lead Monograph Feature */}
            {leadArticle && (
              <div className="lg:col-span-7 bg-white border border-border p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
                    <Badge variant="mono">{leadArticle.category}</Badge>
                    <span className="font-mono text-[11px] text-charcoal-muted">
                      {leadArticle.readTimeMinutes} min read • Published {leadArticle.publishedDate}
                    </span>
                  </div>

                  <Link to={`/insights/${leadArticle.slug}`} className="block group">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-evergreen group-hover:text-mineral-teal transition-colors">
                      {leadArticle.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-charcoal-body leading-relaxed">
                    {leadArticle.subtitle}
                  </p>

                  {leadArticle.keyTakeaways && leadArticle.keyTakeaways.length > 0 && (
                    <div className="p-4 bg-ivory-canvas border border-border space-y-1.5">
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
                    className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-evergreen hover:text-mineral-teal font-bold"
                  >
                    <span>Read Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {/* Secondary Monographs */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {secondaryArticles.map((article) => (
                <div
                  key={article.slug}
                  className="bg-white border border-border p-5 flex flex-col justify-between space-y-3 hover:border-evergreen transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-mineral-teal uppercase">
                        {article.category}
                      </span>
                      <span className="font-mono text-[10px] text-charcoal-muted">
                        {article.readTimeMinutes} min read
                      </span>
                    </div>

                    <Link to={`/insights/${article.slug}`} className="block group">
                      <h4 className="font-serif text-base font-bold text-evergreen group-hover:text-mineral-teal transition-colors">
                        {article.title}
                      </h4>
                    </Link>

                    <p className="text-xs text-charcoal-body line-clamp-2">
                      {article.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-charcoal-muted">
                      {article.author.name}
                    </span>
                    <Link
                      to={`/insights/${article.slug}`}
                      className="font-mono text-[11px] font-bold text-evergreen hover:text-mineral-teal uppercase"
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

      {/* =========================================================================
          7. DIRECT COMMERCIAL & RFQ BANNER
          ========================================================================= */}
      <section className="bg-evergreen text-white py-16 border-t border-evergreen-hover">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-mineral-teal font-bold block">
                Direct Procurement & Tender Inquiries
              </span>
              <Heading as="h2" font="serif" size="display-md" color="white">
                Require certified structural steel fabrication or high-volume precast allocations?
              </Heading>
              <Text variant="body" color="border" className="text-border/90 text-sm max-w-2xl">
                Our directorship teams provide formal technical proposals, plant capacity allocations, and feasibility reviews within 48 business hours.
              </Text>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                to="/contact"
                variant="white"
                size="md"
                className="w-full justify-center"
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Submit Commercial RFQ
              </Button>
              <Button
                to="/business"
                variant="secondary"
                size="md"
                className="w-full justify-center text-white border-white/30 hover:bg-white/10 hover:border-white"
              >
                Review Plant Specifications
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
