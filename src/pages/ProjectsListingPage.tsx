import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export const ProjectsListingPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-16 lg:py-24 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-4">
            Industrial Portfolio
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Flagship Engineering & Infrastructure Projects.
          </h1>
          <p className="font-sans text-lg text-border max-w-2xl">
            Demonstrated delivery of critical industrial assets, transit rail overpasses, and energy distribution structural systems across regional corridors.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-corporate overflow-hidden flex flex-col justify-between">
              <div className="aspect-[16/10] bg-ivory-canvas flex items-center justify-center text-charcoal-muted">
                Project Image
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted mb-2">
                  <MapPin className="w-3.5 h-3.5" /> Awash Corridor • 2023
                </div>
                <h3 className="font-serif text-xl font-bold text-evergreen mb-2">
                  Awash Heavy Rail Transit Overpass
                </h3>
                <p className="text-xs text-charcoal-body mb-4">
                  Fabrication and site erection of 14,200 metric tons of custom high-tensile structural girders.
                </p>
                <Link to="/projects/awash-heavy-rail-overpass" className="inline-flex items-center text-xs font-semibold text-evergreen hover:text-mineral-teal">
                  View Project Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
