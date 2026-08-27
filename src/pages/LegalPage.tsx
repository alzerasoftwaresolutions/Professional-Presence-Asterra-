import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  PageHeader,
  Heading,
  Text,
  PageSeo,
} from '../components';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');

  const title = isPrivacy ? 'Privacy & Data Protection Policy' : 'Terms of Corporate Engagement & RFQ';
  const eyebrow = isPrivacy ? 'LEGAL & COMPLIANCE // PRIVACY' : 'LEGAL & COMPLIANCE // TERMS';
  const description = isPrivacy
    ? 'How Asterra Manufacturing Group protects, processes, and safeguards corporate, partner, and tender confidential information.'
    : 'Standard contractual framework, engineering drawings confidentiality, and procurement terms governing Asterra Group engagements.';

  return (
    <div className="w-full">
      <PageSeo
        title={title}
        description={description}
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={[
          { label: 'Legal & Governance', href: isPrivacy ? '/privacy' : '/terms' },
          { label: isPrivacy ? 'Privacy Policy' : 'Terms of Engagement' },
        ]}
        theme="evergreen"
      />

      {/* 2. MAIN LEGAL CONTENT */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate max-w-3xl space-y-12">
          {isPrivacy ? (
            <>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                    1. Corporate Data & RFQ Confidentiality
                  </Heading>
                </div>
                <Text variant="body" color="body" className="leading-relaxed">
                  Asterra Manufacturing Group ("Asterra", "the Group") is committed to safeguarding the confidentiality, integrity, and security of all engineering specifications, tender documents, proprietary CAD/BIM models, and commercial communications submitted via our digital channels or direct executive office correspondence.
                </Text>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                    2. Processing of Technical & Contractual Data
                  </Heading>
                  <Text variant="body" color="body" className="leading-relaxed">
                    Technical drawings, WPS/PQR specifications, and bill-of-quantity documents are processed strictly within Asterra’s secure internal enterprise network. Such documents are accessible only to qualified engineering estimators, quality assurance auditors, and authorized executive committee members.
                  </Text>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                    3. No Third-Party Commercial Exploitation
                  </Heading>
                  <Text variant="body" color="body" className="leading-relaxed">
                    Under no circumstances does Asterra sell, trade, license, or transfer client, tender, or candidate data to external commercial brokers or unauthorized third parties. All employee applicant data is managed in strict compliance with applicable labor statutes and ISO 27001 data governance.
                  </Text>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                    1. Scope of Quotations & Technical Feasibility
                  </Heading>
                </div>
                <Text variant="body" color="body" className="leading-relaxed">
                  All preliminary quotations, capacity allocations, and lead time estimates generated through this website represent commercial indications subject to formal technical review, raw material mill cert availability, and executed contract bilaterally signed by Asterra Group authorized officers.
                </Text>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                    2. Quality Benchmarks & Warranty Terms
                  </Heading>
                  <Text variant="body" color="body" className="leading-relaxed">
                    Every fabricated structural member, precast concrete panel, and polymer piping system is manufactured strictly in conformance with ISO 9001:2015, EN 1090-2 (EXC3), AWS D1.1, and EN 12201 standards. Material Test Certificates (EN 10204 3.1) are issued with all delivered lots.
                  </Text>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
                    3. Intellectual Property
                  </Heading>
                  <Text variant="body" color="body" className="leading-relaxed">
                    All technical whitepapers, architectural case study photographs, brand trademarks, and proprietary mix designs displayed on this website remain the sole intellectual property of Asterra Manufacturing Group S.C.
                  </Text>
                </div>
              </div>
            </>
          )}

          <div className="p-6 bg-ivory-canvas border border-border text-xs font-mono text-charcoal-muted">
            Last Updated: Corporate Legal Directorate, Fiscal Year 2026. Address inquiries to: legal@asterragroup.com.
          </div>
        </div>
      </section>
    </div>
  );
};
