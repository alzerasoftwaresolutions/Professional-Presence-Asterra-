import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const BusinessListingPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-16 lg:py-24 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-4">
            Group Capabilities
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Four Specialized Manufacturing Divisions.
          </h1>
          <p className="font-sans text-lg text-border max-w-2xl">
            From precision CNC metal fabrication to industrial polymers and automated assemblies, our multi-facility plants deliver high-volume contract and standardized manufacturing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-corporate p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="badge-mono">DIV-01</span>
                  <span className="text-xs font-mono text-charcoal-muted">85,000 MT/Yr</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-evergreen mb-3">
                  Precision Metals & Heavy Fabrication
                </h3>
                <p className="text-sm text-charcoal-body mb-6 leading-relaxed">
                  High-tolerance CNC profiling, automated submerged-arc welding, and structural steel manufacturing for mega-infrastructure projects.
                </p>
              </div>
              <Link to="/business/precision-metals-fabrication" className="btn-primary w-fit">
                Division Specifications <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="card-corporate p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="badge-mono">DIV-02</span>
                  <span className="text-xs font-mono text-charcoal-muted">45,000 MT/Yr</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-evergreen mb-3">
                  Industrial Materials & Building Products
                </h3>
                <p className="text-sm text-charcoal-body mb-6 leading-relaxed">
                  High-performance cementitious compounds, precast architectural assemblies, and engineered composite reinforcement systems.
                </p>
              </div>
              <Link to="/business/industrial-materials-building-products" className="btn-primary w-fit">
                Division Specifications <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
