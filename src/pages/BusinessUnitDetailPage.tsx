import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BusinessUnitDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-12 border-b border-evergreen-hover">
        <div className="container-corporate">
          <Link to="/business" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-border hover:text-white mb-6">
            <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to All Divisions
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="badge-mono bg-evergreen-hover text-white border-mineral-teal">DIV-01</span>
            <span className="text-xs text-border font-mono">ISO 9001:2015 ACCREDITED</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Precision Metals & Heavy Fabrication'}
          </h1>
          <p className="font-sans text-lg text-border max-w-3xl">
            Heavy structural engineering, CNC profiling, and automated welding lines delivering critical components for energy and transport infrastructure.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-evergreen mb-4">Plant & Production Overview</h2>
                <p className="text-charcoal-body text-sm leading-relaxed">
                  Operating 32,000 m² of covered production floors in Industrial Zone 4, this facility houses high-definition CNC plasma/laser cutting tables, heavy plate rolling up to 80mm thickness, and fully automated submerged arc welding columns.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-evergreen mb-6">Core Technical Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-border p-6 bg-white">
                    <h3 className="font-serif font-bold text-evergreen mb-2">CNC Plasma & Laser Profiling</h3>
                    <p className="text-xs text-charcoal-body mb-4">High-speed cutting of carbon & alloy steels with sub-millimeter tolerances.</p>
                    <ul className="text-xs text-charcoal-muted space-y-1">
                      <li>• Dual 12kW Fiber Lasers</li>
                      <li>• Table Size: 4m x 16m</li>
                    </ul>
                  </div>
                  <div className="border border-border p-6 bg-white">
                    <h3 className="font-serif font-bold text-evergreen mb-2">Automated Arc Welding</h3>
                    <p className="text-xs text-charcoal-body mb-4">Heavy box-girder and bridge structural section welding with 100% NDT inspection.</p>
                    <ul className="text-xs text-charcoal-muted space-y-1">
                      <li>• Continuous span to 48m</li>
                      <li>• Ultrasonic weld testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 border border-border">
                <h3 className="font-serif text-lg font-bold text-evergreen mb-4">Division Fast Facts</h3>
                <dl className="space-y-3 text-xs text-charcoal-body">
                  <div>
                    <dt className="text-charcoal-muted uppercase font-mono">Annual Output Capacity</dt>
                    <dd className="font-bold text-evergreen text-sm">85,000 Metric Tons</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-muted uppercase font-mono">Covered Facility Footprint</dt>
                    <dd className="font-bold text-evergreen text-sm">32,000 m²</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-muted uppercase font-mono">Certifications</dt>
                    <dd className="font-bold text-evergreen text-sm">ISO 9001, EN 1090-2, AWS D1.1</dd>
                  </div>
                </dl>
                <div className="mt-6 pt-6 border-t border-border">
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Request Division RFQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
