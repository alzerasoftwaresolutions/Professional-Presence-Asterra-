import React from 'react';
import { useParams } from 'react-router-dom';
import { getExecutiveBySlug, getLeadership } from '../data';
import {
  PageHeader,
  SectionHeader,
  Heading,
  Text,
  Badge,
  Button,
  CTABanner,
  ExecutiveCard,
  PageSeo,
} from '../components';
import {
  GraduationCap,
  Award,
  Briefcase,
  Quote,
  Linkedin,
  ArrowLeft,
} from 'lucide-react';

export const ExecutiveProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const executive = getExecutiveBySlug(slug || '');
  const allLeaders = getLeadership();
  const otherLeaders = allLeaders.filter((l) => l.slug !== slug).slice(0, 3);

  if (!executive) {
    return (
      <div className="w-full py-24 container-corporate text-center space-y-6">
        <Badge variant="status" statusType="error">Profile Not Located</Badge>
        <Heading as="h1" font="serif" size="display-md" color="evergreen">
          Executive Profile Not Found
        </Heading>
        <Text variant="body" color="muted">
          The requested leadership profile does not exist or has been updated.
        </Text>
        <Button to="/leadership" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 mr-1" />}>
          Return to Leadership Directory
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PageSeo
        title={`${executive.name} — ${executive.role}`}
        description={executive.bio}
        ogType="profile"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow={`${executive.department} // PROFILE`}
        title={executive.name}
        description={executive.role}
        breadcrumbs={[
          { label: 'Leadership', href: '/leadership' },
          { label: executive.name, href: `/leadership/${executive.slug}` },
        ]}
        theme="evergreen"
      />

      {/* 2. MAIN PROFILE CONTENT */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Photo & Credentials */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/5] bg-ivory-canvas border border-border overflow-hidden shadow-xs">
                <img
                  src={executive.photo}
                  alt={executive.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-ivory-canvas border border-border space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs text-charcoal-muted uppercase">Tenure with Asterra</span>
                  <span className="font-serif text-lg font-bold text-evergreen">{executive.tenureYears} Years</span>
                </div>

                {executive.directorships && executive.directorships.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-charcoal-muted font-bold block">
                      Directorships & Boards:
                    </span>
                    <ul className="space-y-1 text-xs text-charcoal-body font-mono">
                      {executive.directorships.map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-mineral-teal shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {executive.linkedInUrl && (
                  <div className="pt-3 border-t border-border">
                    <a
                      href={executive.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-evergreen hover:text-mineral-teal transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span>Official LinkedIn Profile</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right Col: Biography, Governance Statement & Career Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Bio */}
              <div className="space-y-4">
                <span className="badge-mono">Executive Overview</span>
                <Heading as="h2" font="serif" size="display-md" color="evergreen">
                  Professional Biography
                </Heading>
                <Text variant="body" color="body" className="leading-relaxed text-base sm:text-lg">
                  {executive.bio}
                </Text>
              </div>

              {/* Governance Quote */}
              <div className="p-8 bg-evergreen text-white border border-evergreen-hover space-y-4 relative">
                <Quote className="w-8 h-8 text-mineral-teal/50" />
                <p className="font-serif text-lg sm:text-xl italic leading-relaxed text-white">
                  "{executive.governanceQuote}"
                </p>
                <span className="font-mono text-xs text-border block uppercase tracking-wider">
                  — {executive.name}, {executive.role}
                </span>
              </div>

              {/* Career Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h3" font="serif" size="heading-md" color="evergreen">
                    Career & Modernization Highlights
                  </Heading>
                </div>
                <ul className="space-y-3">
                  {executive.careerHighlights.map((h, i) => (
                    <li key={i} className="p-4 bg-ivory-canvas/60 border border-border text-sm text-charcoal-body flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-mineral-teal shrink-0 mt-0.5">
                        0{i + 1} //
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education & Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-mineral-teal" />
                    <Heading as="h4" font="serif" size="heading-sm" color="evergreen">
                      Academic Credentials
                    </Heading>
                  </div>
                  <ul className="space-y-2 text-xs text-charcoal-body font-mono">
                    {executive.education.map((edu, i) => (
                      <li key={i} className="border-l-2 border-border pl-3 py-1">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-mineral-teal" />
                    <Heading as="h4" font="serif" size="heading-sm" color="evergreen">
                      Professional Fellowships
                    </Heading>
                  </div>
                  <ul className="space-y-2 text-xs text-charcoal-body font-mono">
                    {executive.credentials.map((cred, i) => (
                      <li key={i} className="border-l-2 border-mineral-teal pl-3 py-1">
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OTHER LEADERSHIP MEMBERS */}
      <section className="py-20 bg-ivory-canvas border-b border-border">
        <div className="container-corporate space-y-12">
          <SectionHeader
            eyebrow="Governance Team"
            title="Other Members of Asterra Leadership."
            actionLink={{ label: 'View All Directors', href: '/leadership' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherLeaders.map((other) => (
              <ExecutiveCard key={other.slug} executive={other} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CTABanner
        eyebrow="Direct Institutional Engagement"
        title="Connect with Executive Leadership."
        description="For joint venture inquiries, government infrastructure tenders, and institutional procurement."
        primaryBtnText="Submit Executive Inquiry"
        primaryBtnLink="/contact"
      />
    </div>
  );
};
