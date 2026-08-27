import React from 'react';
import { getCompanyInfo } from '../data';
import {
  PageHeader,
  CorporateInquiryForm,
  Heading,
  Text,
  PageSeo,
} from '../components';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Factory,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const company = getCompanyInfo();

  return (
    <div className="w-full">
      <PageSeo
        title="Corporate & Commercial Inquiries Desk"
        description="Submit heavy manufacturing RFQ documents, schedule plant inspections, or contact Asterra Group executive directorates."
        ogType="website"
      />
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="Corporate & Commercial Channels"
        title="Initiate a Technical Inquiry or Procurement RFQ."
        description="Whether requesting a formal tender quotation, scheduling an in-plant facility inspection, or contacting our executive board, our directorship teams are at your disposal."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
        theme="evergreen"
      />

      {/* 2. DIRECTORY & TRANSMISSION GRID */}
      <section className="py-20 lg:py-28 bg-ivory-canvas border-b border-border">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Transmission Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="badge-mono">Direct Dispatch</span>
                <Heading as="h2" font="serif" size="display-md" color="evergreen">
                  Corporate Request Form
                </Heading>
                <Text variant="sm" color="body">
                  Inquiries are routed automatically to the designated division directorate. Response SLA: within one business day.
                </Text>
              </div>

              <CorporateInquiryForm />
            </div>

            {/* Right Col: Operating Locations & Contact Directory */}
            <div className="lg:col-span-5 space-y-8">
              {/* Corporate HQ */}
              <div className="bg-white p-6 sm:p-8 border border-border space-y-4 shadow-xs">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <Building2 className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h3" font="serif" size="heading-sm" color="evergreen">
                    Group Headquarters
                  </Heading>
                </div>

                <div className="space-y-3 text-xs text-charcoal-body font-mono">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-mineral-teal shrink-0 mt-0.5" />
                    <span>{company.headquarters.address}, {company.headquarters.city}, {company.headquarters.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-mineral-teal shrink-0" />
                    <a href={`tel:${company.contact.phonePrimary}`} className="text-evergreen font-bold hover:underline">
                      {company.contact.phonePrimary}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-mineral-teal shrink-0" />
                    <a href={`mailto:${company.contact.generalEmail}`} className="text-evergreen font-bold hover:underline">
                      {company.contact.generalEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-mineral-teal shrink-0" />
                    <span>{company.contact.operatingHours}</span>
                  </div>
                </div>
              </div>

              {/* Plant Locations */}
              <div className="bg-white p-6 sm:p-8 border border-border space-y-4 shadow-xs">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <Factory className="w-5 h-5 text-mineral-teal" />
                  <Heading as="h3" font="serif" size="heading-sm" color="evergreen">
                    Manufacturing Complexes
                  </Heading>
                </div>

                <div className="space-y-4 text-xs text-charcoal-body">
                  <div className="border-l-2 border-mineral-teal pl-3 py-1">
                    <div className="font-mono font-bold text-evergreen">Plants 1 & 2 (Metals & Precast)</div>
                    <span className="text-charcoal-muted">Heavy Fabrication & Automated Batching Complex, Industrial Zone 4, Addis Ababa</span>
                  </div>
                  <div className="border-l-2 border-mineral-teal pl-3 py-1">
                    <div className="font-mono font-bold text-evergreen">Plants 3 & 4 (Polymers & Automation)</div>
                    <span className="text-charcoal-muted">Polymer Extrusion & CNC Integration Campus, Industrial Zone 4, Addis Ababa</span>
                  </div>
                </div>
              </div>

              {/* Directorate Emails */}
              <div className="bg-evergreen text-white p-6 sm:p-8 border border-evergreen-hover space-y-4">
                <Heading as="h3" font="serif" size="heading-sm" color="white">
                  Direct Directorate Desks
                </Heading>
                <div className="space-y-2 text-xs font-mono text-border">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                    <span>Procurement & RFQ:</span>
                    <a href={`mailto:${company.contact.procurementEmail}`} className="text-white hover:underline font-bold">
                      {company.contact.procurementEmail}
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                    <span>Human Resources:</span>
                    <a href={`mailto:${company.contact.careersEmail}`} className="text-white hover:underline font-bold">
                      {company.contact.careersEmail}
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span>Media & Investors:</span>
                    <a href={`mailto:${company.contact.mediaEmail}`} className="text-white hover:underline font-bold">
                      {company.contact.mediaEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
