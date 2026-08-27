import React, { useState } from 'react';
import { getCareers } from '../data';
import {
  PageHeader,
  SectionHeader,
  CTABanner,
  JobCard,
  Heading,
  Text,
  PageSeo,
} from '../components';
import {
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Wrench,
  Zap,
} from 'lucide-react';

export const CareersListingPage: React.FC = () => {
  const allJobs = getCareers();
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Engineering', 'Operations', 'Quality Assurance'];

  const filteredJobs =
    selectedDept === 'All'
      ? allJobs
      : allJobs.filter((j) => j.department === selectedDept);

  return (
    <div className="w-full">
      <PageSeo
        title="Engineering Careers & Apprenticeship Academy"
        description="Explore open engineering, quality assurance, and plant operations vacancies across Asterra Manufacturing Group facilities."
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="Talent & Engineering Careers"
        title="Build Industrial Infrastructure with Africa's Leading Manufacturers."
        description="Join a multidisciplinary team of 1,450+ metallurgical scientists, certified European Welding Engineers, automation specialists, and plant leaders."
        breadcrumbs={[{ label: 'Careers', href: '/careers' }]}
        theme="evergreen"
      />

      {/* 2. WORKING AT ASTERRA CULTURE & VALUES */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-mono">Workplace Excellence</span>
              <Heading as="h2" font="serif" size="display-md" color="evergreen">
                A Culture Founded on Precision & Lifelong Craft Mastery.
              </Heading>
              <Text variant="body" color="body" className="leading-relaxed">
                At Asterra, we believe manufacturing greatness starts with rigorous engineering standards and continuous investment in human capability. Our employees work with modern automated CNC machinery, state-of-the-art laboratory instrumentation, and international execution codes.
              </Text>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-mineral-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-evergreen">Continuous Education</h4>
                    <p className="text-xs text-charcoal-muted mt-0.5">IWE/EWE welding certifications & ISO lead auditor funding.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-mineral-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-evergreen">Zero-Harm Safety</h4>
                    <p className="text-xs text-charcoal-muted mt-0.5">ISO 45001 certified PPE, protocols, and safety culture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-mineral-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-evergreen">Advanced Automation</h4>
                    <p className="text-xs text-charcoal-muted mt-0.5">Operate fiber lasers, 5-axis CNCs & robotic welding cells.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-mineral-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-evergreen">Comprehensive Care</h4>
                    <p className="text-xs text-charcoal-muted mt-0.5">Family health insurance, pension, and company transit.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apprenticeship Academy Feature */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 bg-ivory-canvas border border-border space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-evergreen text-white flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-mineral-teal font-bold block">
                      Institutional Initiative
                    </span>
                    <Heading as="h3" font="serif" size="heading-sm" color="evergreen">
                      The Asterra Technical Apprenticeship Academy
                    </Heading>
                  </div>
                </div>

                <Text variant="sm" color="body">
                  Founded in 2016, our in-house academy has graduated over 800 certified welders, machinists, and NDT technicians through dual vocational-industrial curricula accredited to international DIN/EN qualification benchmarks.
                </Text>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="font-serif text-2xl font-bold text-evergreen">800+</div>
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted">Certified Graduates</span>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-evergreen">100%</div>
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted">Full-Time Placement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS DIRECTORY */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Open Vacancies"
              title="Current Engineering & Operational Opportunities."
              description="Explore open positions across our 4 manufacturing facilities in Industrial Zone 4, Addis Ababa."
            />

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    selectedDept === dept
                      ? 'bg-evergreen text-white border-evergreen font-bold shadow-xs'
                      : 'bg-white text-charcoal-body border-border hover:border-evergreen'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CTABanner
        eyebrow="Spontaneous Applications"
        title="Don't see an exact match for your engineering discipline?"
        description="Our Human Resources & Talent Directorate welcomes expressions of interest from experienced metallurgical scientists and plant leaders."
        primaryBtnText="Submit Spontaneous CV"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Operating Divisions"
        secondaryBtnLink="/business"
      />
    </div>
  );
};
