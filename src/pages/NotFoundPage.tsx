import React from 'react';
import {
  PageHeader,
  Heading,
  Text,
  Button,
  PageSeo,
} from '../components';
import { Home, Factory, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full">
      <PageSeo
        title="404 — Page Not Found"
        description="The requested page could not be located in our corporate directory."
        ogType="website"
      />
      <PageHeader
        eyebrow="404 // RESOURCE NOT FOUND"
        title="The Requested Corporate Record Does Not Exist."
        description="The document, division specification, or case study you requested could not be located in our active directory."
        breadcrumbs={[{ label: '404 Error' }]}
        theme="evergreen"
      />

      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container-corporate max-w-2xl text-center space-y-8">
          <div className="w-16 h-16 bg-evergreen-subtle text-evergreen flex items-center justify-center mx-auto border border-border">
            <span className="font-mono font-bold text-xl">404</span>
          </div>

          <div className="space-y-3">
            <Heading as="h2" font="serif" size="heading-lg" color="evergreen">
              Navigate to Verified Operating Portals
            </Heading>
            <Text variant="body" color="body">
              Please use the links below to return to the core Asterra Manufacturing Group corporate modules:
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <Link
              to="/business"
              className="p-5 bg-ivory-canvas border border-border hover:border-evergreen transition-colors space-y-1 block"
            >
              <Factory className="w-5 h-5 text-mineral-teal" />
              <div className="font-serif font-bold text-sm text-evergreen">Operating Divisions</div>
              <span className="text-[11px] text-charcoal-muted block">4 Plant Specifications</span>
            </Link>

            <Link
              to="/projects"
              className="p-5 bg-ivory-canvas border border-border hover:border-evergreen transition-colors space-y-1 block"
            >
              <FileText className="w-5 h-5 text-mineral-teal" />
              <div className="font-serif font-bold text-sm text-evergreen">Case Studies</div>
              <span className="text-[11px] text-charcoal-muted block">Delivered Infrastructure</span>
            </Link>

            <Link
              to="/contact"
              className="p-5 bg-ivory-canvas border border-border hover:border-evergreen transition-colors space-y-1 block"
            >
              <Phone className="w-5 h-5 text-mineral-teal" />
              <div className="font-serif font-bold text-sm text-evergreen">Contact Desk</div>
              <span className="text-[11px] text-charcoal-muted block">Procurement Inquiries</span>
            </Link>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <Button to="/" variant="primary" leftIcon={<Home className="w-4 h-4 mr-1" />}>
              Return to Homepage
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
