import React from 'react';
import { Link } from 'react-router-dom';

export const InsightsListingPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-16 lg:py-24 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-4">
            Knowledge & Research Hub
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Industry Insights & Engineering Whitepapers.
          </h1>
          <p className="font-sans text-lg text-border max-w-2xl">
            Authoritative technical analysis, manufacturing trend reports, and operational research published by Asterra Group's engineering specialists.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-corporate p-6 flex flex-col justify-between">
              <div>
                <span className="badge-mono mb-3">Industry Trends</span>
                <h3 className="font-serif text-xl font-bold text-evergreen mb-2">
                  Advanced High-Tensile Steel Adoption in African Infrastructure
                </h3>
                <p className="text-xs text-charcoal-body mb-4">
                  A technical analysis of material yield strengths, carbon footprint reduction, and lifecycle economics in transit bridge construction.
                </p>
              </div>
              <div className="pt-4 border-t border-border flex justify-between items-center text-xs">
                <span className="text-charcoal-muted">6 Min Read</span>
                <Link to="/insights/high-tensile-steel-infrastructure" className="font-semibold text-evergreen hover:text-mineral-teal">
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
