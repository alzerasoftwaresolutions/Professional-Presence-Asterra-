import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck } from 'lucide-react';

export const LeadershipListingPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-16 lg:py-24 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-4">
            Corporate Governance
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Executive Leadership & Board of Directors.
          </h1>
          <p className="font-sans text-lg text-border max-w-2xl">
            Experienced industrial executives and independent directors providing strategic oversight, operational rigor, and long-term shareholder stewardship.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="border-b border-border pb-4 mb-8 flex justify-between items-center">
            <h2 className="font-serif text-2xl font-bold text-evergreen">Executive Committee</h2>
            <span className="text-xs font-mono uppercase text-charcoal-muted tracking-widest">Active Leadership</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-corporate p-6">
              <div className="aspect-[4/5] bg-ivory-canvas mb-4 flex items-center justify-center text-charcoal-muted">
                <UserCheck className="w-12 h-12 stroke-[1.5]" />
              </div>
              <span className="badge-mono mb-2">Group CEO</span>
              <h3 className="font-serif text-xl font-bold text-evergreen">Dr. Samuel Bekele</h3>
              <p className="text-xs text-charcoal-muted mb-4">14 Years Tenure • MIT Ph.D.</p>
              <Link to="/leadership/dr-samuel-bekele" className="inline-flex items-center text-xs font-semibold text-evergreen hover:text-mineral-teal">
                Read Executive Profile <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
