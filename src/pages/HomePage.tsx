import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-evergreen text-white py-20 lg:py-32 overflow-hidden border-b border-evergreen-hover">
        <div className="container-corporate relative z-10">
          <div className="max-w-3xl">
            <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-6">
              Industrial Manufacturing & Export Excellence
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              Precision Engineering at Industrial Scale.
            </h1>
            <p className="font-sans text-lg sm:text-xl text-border text-reading mb-8 leading-relaxed">
              Asterra Manufacturing Group operates four specialized production divisions, delivering high-tensile components, advanced structural materials, and engineering infrastructure across regional and international markets.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/business" className="btn-primary bg-white text-evergreen hover:bg-ivory-canvas hover:border-white">
                Explore Capabilities <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link to="/contact" className="btn-secondary text-white border-white/40 hover:bg-white/10 hover:border-white">
                Corporate Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE STATS BAND */}
      <section className="bg-white border-b border-border py-12">
        <div className="container-corporate">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-callout">
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted block mb-1">Annual Output</span>
              <div className="font-serif text-3xl md:text-4xl font-bold text-evergreen">120,000 MT</div>
              <p className="font-sans text-xs text-charcoal-body mt-1">High-tensile certified production</p>
            </div>
            <div className="stat-callout">
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted block mb-1">Plant Facilities</span>
              <div className="font-serif text-3xl md:text-4xl font-bold text-evergreen">4 Divisions</div>
              <p className="font-sans text-xs text-charcoal-body mt-1">68,000 m² combined plant footprint</p>
            </div>
            <div className="stat-callout">
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted block mb-1">Export Reach</span>
              <div className="font-serif text-3xl md:text-4xl font-bold text-evergreen">14 Nations</div>
              <p className="font-sans text-xs text-charcoal-body mt-1">Direct regional & global supply chains</p>
            </div>
            <div className="stat-callout">
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted block mb-1">Industry Tenure</span>
              <div className="font-serif text-3xl md:text-4xl font-bold text-evergreen">25+ Years</div>
              <p className="font-sans text-xs text-charcoal-body mt-1">Founded in 1998 with ISO standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
