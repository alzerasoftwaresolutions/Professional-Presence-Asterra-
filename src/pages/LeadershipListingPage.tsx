import React from 'react';
import { getLeadership } from '../data';
import {
  PageHeader,
  SectionHeader,
  CTABanner,
  ExecutiveCard,
  Heading,
  Text,
  PageSeo,
} from '../components';
import { ShieldCheck, Scale, Users } from 'lucide-react';

export const LeadershipListingPage: React.FC = () => {
  const allLeaders = getLeadership();
  const executiveCommittee = allLeaders.filter((l) => l.department === 'Executive Committee');
  const boardOfDirectors = allLeaders.filter((l) => l.department === 'Board of Directors');

  return (
    <div className="w-full">
      <PageSeo
        title="Corporate Leadership & Board of Directors"
        description="Meet the executive committee and board of directors stewarding industrial scale, engineering precision, and fiduciary governance at Asterra Group."
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="Corporate Governance & Direction"
        title="Leadership Stewarding Scale, Precision & Integrity."
        description="Our executive committee and board of directors unite world-class metallurgical research, international corporate finance, and decades of African manufacturing execution."
        breadcrumbs={[{ label: 'Leadership', href: '/leadership' }]}
        theme="evergreen"
      />

      {/* 2. GOVERNANCE PRINCIPLES BAND */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-ivory-canvas border border-border space-y-2">
              <Scale className="w-6 h-6 text-mineral-teal" />
              <Heading as="h3" font="serif" size="heading-sm" color="evergreen">
                Independent Board Oversight
              </Heading>
              <Text variant="caption" color="muted">
                Audit, Risk, and ESG committees led by independent distinguished industrial directors.
              </Text>
            </div>
            <div className="p-6 bg-ivory-canvas border border-border space-y-2">
              <ShieldCheck className="w-6 h-6 text-mineral-teal" />
              <Heading as="h3" font="serif" size="heading-sm" color="evergreen">
                Technical Governance
              </Heading>
              <Text variant="caption" color="muted">
                Direct oversight of EN 1090, ISO 9001, and WPS/PQR quality assurance accreditations.
              </Text>
            </div>
            <div className="p-6 bg-ivory-canvas border border-border space-y-2">
              <Users className="w-6 h-6 text-mineral-teal" />
              <Heading as="h3" font="serif" size="heading-sm" color="evergreen">
                Zero Harm Culture
              </Heading>
              <Text variant="caption" color="muted">
                Executive compensation directly aligned with ISO 45001 safety and carbon reduction metrics.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE COMMITTEE (EXCO) */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Operational Directorship"
            title="The Executive Committee (ExCo)."
            description="Responsible for day-to-day manufacturing operations, engineering research, financial stewardship, and strategic capital allocation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((exec) => (
              <ExecutiveCard key={exec.slug} executive={exec} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOARD OF DIRECTORS */}
      {boardOfDirectors.length > 0 && (
        <section className="py-20 lg:py-28 bg-white border-b border-border">
          <div className="container-corporate space-y-12">
            <SectionHeader
              eyebrow="Fiduciary Stewardship"
              title="Board of Directors."
              description="Providing strategic guidance, institutional risk management, and alignment with national and continental industrial priorities."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardOfDirectors.map((director) => (
                <ExecutiveCard key={director.slug} executive={director} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CTA BANNER */}
      <CTABanner
        eyebrow="Investor & Institutional Engagement"
        title="Connect with Asterra Corporate Affairs & Governance."
        description="For stakeholder relations, institutional partnership tenders, and corporate communications."
        primaryBtnText="Contact Corporate Affairs"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Corporate Story"
        secondaryBtnLink="/about"
      />
    </div>
  );
};
