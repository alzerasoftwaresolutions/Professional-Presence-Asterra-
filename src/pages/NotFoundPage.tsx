import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="container-corporate max-w-lg text-center bg-white p-12 border border-border">
        <Compass className="w-16 h-16 text-mineral-teal mx-auto mb-4" />
        <span className="badge-mono mb-3">Error 404 • Resource Not Located</span>
        <h1 className="font-serif text-3xl font-bold text-evergreen mb-3">
          Page or Division Not Found
        </h1>
        <p className="text-sm text-charcoal-body mb-8">
          The requested corporate document, division specification, or publication is unavailable or has been archived.
        </p>
        <Link to="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" /> Return to Asterra Gateway
        </Link>
      </div>
    </div>
  );
};
