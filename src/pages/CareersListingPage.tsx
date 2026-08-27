import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CareersListingPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-16 lg:py-24 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-4">
            Careers & Talent
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Engineer the Future of Industrial Production.
          </h1>
          <p className="font-sans text-lg text-border max-w-2xl">
            Join over 1,450 engineers, metallurgists, automation specialists, and operational leaders driving industrial manufacturing across East Africa.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="border-b border-border pb-4 mb-8 flex justify-between items-center">
            <h2 className="font-serif text-2xl font-bold text-evergreen">Current Open Opportunities</h2>
            <span className="text-xs font-mono uppercase text-charcoal-muted tracking-widest">Addis Ababa & Regional Plants</span>
          </div>

          <div className="space-y-4">
            <div className="card-corporate p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="badge-mono">DIV-01</span>
                  <span className="text-xs text-charcoal-muted">Full-time Permanent • Engineering</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-evergreen">
                  Senior Structural Welding Engineer (IWE/EWE)
                </h3>
                <p className="text-xs text-charcoal-body mt-1">
                  Lead NDT inspection protocols and automated submerged-arc welding procedures for heavy bridge girders.
                </p>
              </div>
              <Link to="/careers/senior-structural-welding-engineer" className="btn-secondary text-xs whitespace-nowrap">
                View Position Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
