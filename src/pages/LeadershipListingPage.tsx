import React, { useState } from 'react';
import { getLeadership } from '../data';
import {
  PageHeader,
  Button,
  PageSeo,
} from '../components';
import { ShieldCheck, Scale, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LeadershipListingPage: React.FC = () => {
  const allLeaders = getLeadership();
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Executive Committee', 'Board of Directors'];

  const filteredLeaders =
    selectedDept === 'All'
      ? allLeaders
      : allLeaders.filter((l) => l.department === selectedDept);

  return (
    <div className="w-full">
      <PageSeo
        title="Corporate Leadership & Board of Directors"
        description="Meet the executive committee and board of directors stewarding industrial scale, engineering precision, and fiduciary governance at Asterra Group."
        ogType="website"
      />

      {/* 1. ARCHITECTURAL PAGE HEADER */}
      <PageHeader
        eyebrow="Corporate Governance & Direction"
        title="Leadership Stewarding Scale, Precision & Integrity."
        description="Our executive committee and board of directors unite world-class metallurgical research, international corporate finance, and decades of African manufacturing execution."
        breadcrumbs={[{ label: 'Leadership', href: '/leadership' }]}
        theme="evergreen"
      />

      {/* 2. GOVERNANCE CHARTER & FILTER TABS */}
      <section className="bg-white border-b border-border py-8">
        <div className="container-corporate space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-border">
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-mineral-teal shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-evergreen">Independent Oversight</h4>
                <p className="text-xs text-charcoal-muted mt-0.5">Audit, Risk & Technical Standards committees operate with independent majority.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-mineral-teal shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-evergreen">Technical Governance</h4>
                <p className="text-xs text-charcoal-muted mt-0.5">Direct executive oversight of EN 1090, ISO 9001, and WPS/PQR certifications.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-mineral-teal shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-evergreen">Zero-Harm Safety</h4>
                <p className="text-xs text-charcoal-muted mt-0.5">Executive KPIs directly tied to ISO 45001 safety and carbon reduction metrics.</p>
              </div>
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                    selectedDept === dept
                      ? 'bg-evergreen text-white border-evergreen font-bold shadow-xs'
                      : 'bg-ivory-canvas/70 text-charcoal-body border-border hover:border-evergreen'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <span className="text-xs font-mono text-charcoal-muted">
              {filteredLeaders.length} Executive Profiles
            </span>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE DOSSIER GRID */}
      <section className="py-16 lg:py-24 bg-ivory-canvas border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLeaders.map((leader) => (
              <div
                key={leader.slug}
                className="bg-white border border-border flex flex-col justify-between group hover:border-evergreen transition-all shadow-xs overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-ivory-canvas overflow-hidden border-b border-border">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-mono text-[9px] bg-evergreen text-white border-mineral-teal">
                        {leader.department}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-evergreen group-hover:text-mineral-teal transition-colors">
                        {leader.name}
                      </h3>
                      <span className="font-mono text-xs text-mineral-teal font-semibold block mt-0.5">
                        {leader.role}
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-body line-clamp-3 leading-relaxed">
                      {leader.bio}
                    </p>

                    {/* Credentials Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {leader.credentials.slice(0, 2).map((c) => (
                        <span key={c} className="text-[10px] font-mono px-2 py-0.5 bg-ivory-canvas border border-border text-charcoal-muted">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="border-t border-border pt-4 flex items-center justify-between text-xs font-mono">
                    <span className="text-charcoal-muted">Tenure: {leader.tenureYears}+ Yrs</span>
                    <Link
                      to={`/leadership/${leader.slug}`}
                      className="inline-flex items-center text-evergreen font-bold group-hover:text-mineral-teal uppercase tracking-wider text-[11px]"
                    >
                      <span>Full Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GOVERNANCE INQUIRIES ACTION */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-corporate flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-mineral-teal uppercase block">
              Institutional Relations
            </span>
            <h3 className="font-serif text-2xl font-bold text-evergreen">
              Require investor relations or board governance disclosures?
            </h3>
          </div>
          <Button
            to="/contact"
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            Contact Secretariat Desk
          </Button>
        </div>
      </section>
    </div>
  );
};
