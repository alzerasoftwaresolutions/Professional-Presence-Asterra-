import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobBySlug } from '../data';
import {
  PageHeader,
  Heading,
  Text,
  Badge,
  Button,
  Input,
  Textarea,
  PageSeo,
} from '../components';
import {
  CheckCircle2,
  Send,
  ShieldCheck,
  ArrowLeft,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const job = getJobBySlug(slug || '');

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    coverNote: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="w-full py-24 container-corporate text-center space-y-6">
        <Badge variant="status" statusType="error">Vacancy Closed or Relocated</Badge>
        <Heading as="h1" font="serif" size="display-md" color="evergreen">
          Position Not Located
        </Heading>
        <Text variant="body" color="muted">
          The requested career vacancy is no longer accepting submissions.
        </Text>
        <Button to="/careers" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 mr-1" />}>
          Return to Careers Directory
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) {
      setIsSubmitted(true);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full">
      <PageSeo
        title={`${job.title} — Career Opportunity`}
        description={job.summary}
        ogType="website"
        schemaJsonLd={{
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: job.title,
          description: job.summary,
          datePosted: '2024-01-01',
          validThrough: job.closingDate,
          employmentType: 'FULL_TIME',
          hiringOrganization: {
            '@type': 'Organization',
            name: 'Asterra Manufacturing Group',
            sameAs: 'https://asterragroup.com',
          },
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Addis Ababa',
              addressCountry: 'ET',
            },
          },
        }}
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow={`${job.division} // VACANCY`}
        title={job.title}
        description={job.summary}
        breadcrumbs={[
          { label: 'Careers', href: '/careers' },
          { label: job.title, href: `/careers/${job.slug}` },
        ]}
        theme="evergreen"
      />

      {/* 2. FAST FACTS BAR */}
      <section className="bg-white border-b border-border py-6">
        <div className="container-corporate">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Department</span>
              <span className="font-serif text-base font-bold text-evergreen truncate block">{job.department}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Employment Type</span>
              <span className="font-serif text-base font-bold text-evergreen truncate block">{job.employmentType}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Experience Benchmark</span>
              <span className="font-serif text-base font-bold text-evergreen truncate block">{job.experienceLevel}</span>
            </div>
            <div className="border-l-2 border-mineral-teal pl-4 py-1">
              <span className="text-[10px] font-mono uppercase text-charcoal-muted block">Application Deadline</span>
              <span className="font-serif text-base font-bold text-evergreen truncate block">{job.closingDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN JOB DETAILS & APPLICATION FORM */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Responsibilities, Qualifications, Benefits */}
            <div className="lg:col-span-7 space-y-12">
              {/* Responsibilities */}
              <div className="space-y-4">
                <span className="badge-mono">01 // Key Accountabilities</span>
                <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                  Primary Responsibilities
                </Heading>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="p-4 bg-white border border-border text-sm text-charcoal-body flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-mineral-teal shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <span className="badge-mono">02 // Experience & Credentials</span>
                <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                  Required Qualifications
                </Heading>
                <ul className="space-y-3">
                  {job.qualifications.map((qual, idx) => (
                    <li key={idx} className="p-4 bg-white border border-border text-sm text-charcoal-body flex items-start gap-3">
                      <GraduationCap className="w-4 h-4 text-mineral-teal shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <span className="badge-mono">03 // Compensation & Benefits</span>
                <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                  What We Offer
                </Heading>
                <ul className="space-y-3">
                  {job.benefits.map((ben, idx) => (
                    <li key={idx} className="p-4 bg-evergreen text-white border border-evergreen-hover text-sm flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-mineral-teal shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-border">{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: Direct Application Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 border border-border space-y-6 shadow-xs sticky top-24">
                <div className="border-b border-border pb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-mineral-teal font-bold block">
                    Direct Application
                  </span>
                  <Heading as="h3" font="serif" size="heading-md" color="evergreen">
                    Submit Candidate Dossier
                  </Heading>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Direct submission to Asterra Talent Directorate.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-12 h-12 bg-evergreen-subtle text-evergreen flex items-center justify-center mx-auto border border-border">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <Heading as="h4" font="serif" size="heading-sm" color="evergreen">
                      Application Received
                    </Heading>
                    <Text variant="sm" color="body">
                      Thank you for applying for the <strong>{job.title}</strong> position. Our talent committee will review your credentials against the role specification.
                    </Text>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="honeypot"
                        value={formState.honeypot}
                        onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                        tabIndex={-1}
                      />
                    </div>

                    <Input
                      label="Full Legal Name"
                      placeholder="e.g. Bethlehem Yohannes"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      required
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="candidate@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />

                    <Input
                      label="Telephone / Mobile"
                      type="tel"
                      placeholder="+251 ..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      required
                    />

                    <Input
                      label="LinkedIn Profile or Portfolio URL"
                      placeholder="https://linkedin.com/in/..."
                      value={formState.linkedIn}
                      onChange={(e) => setFormState({ ...formState, linkedIn: e.target.value })}
                    />

                    <Textarea
                      label="Summary Cover Note / Relevant Certifications"
                      placeholder="Summarize your key welding qualifications, plant leadership experience, or software proficiency..."
                      rows={4}
                      value={formState.coverNote}
                      onChange={(e) => setFormState({ ...formState, coverNote: e.target.value })}
                      required
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={isSubmitting}
                      fullWidth
                      rightIcon={<Send className="w-4 h-4 ml-1" />}
                    >
                      Transmit Application
                    </Button>

                    <div className="pt-2 flex items-center justify-center gap-1.5 text-[10px] font-mono text-charcoal-muted">
                      <ShieldCheck className="w-3.5 h-3.5 text-mineral-teal" />
                      <span>Data held strictly for recruitment selection</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
