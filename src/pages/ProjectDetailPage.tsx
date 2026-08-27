import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-12 border-b border-evergreen-hover">
        <div className="container-corporate">
          <Link to="/projects" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-border hover:text-white mb-6">
            <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to All Projects
          </Link>
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-3">
            Case Study • Infrastructure
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Awash Heavy Rail Transit Overpass'}
          </h1>
          <p className="font-sans text-sm text-border">
            Client: National Railway Corporation • Year: 2023 • Location: Awash Corridor
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div className="aspect-[16/9] bg-ivory-canvas border border-border flex items-center justify-center text-charcoal-muted">
                Case Study Media Gallery
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-evergreen mb-4">Engineering Challenge</h2>
                <p className="text-charcoal-body text-sm leading-relaxed">
                  The client required 14,200 metric tons of continuous curved box girders with 100% full-penetration radiographic weld integrity to withstand seismic and heavy freight vibration loads across an active transit line.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-evergreen mb-4">Implemented Engineering Solution</h2>
                <p className="text-charcoal-body text-sm leading-relaxed">
                  Division 01 deployed dual submerged arc welding gantries working in round-the-clock synchronous shifts. Pre-fabrication of 48-meter modular spans in-plant reduced on-site crane positioning time by 60%.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 border border-border">
                <h3 className="font-serif text-lg font-bold text-evergreen mb-4">Verified Project Impact</h3>
                <div className="space-y-4">
                  <div className="border-t border-border pt-3">
                    <span className="font-mono text-xs text-charcoal-muted uppercase">Structural Weight</span>
                    <div className="font-serif text-2xl font-bold text-evergreen">14,200 MT</div>
                  </div>
                  <div className="border-t border-border pt-3">
                    <span className="font-mono text-xs text-charcoal-muted uppercase">Schedule Delivery</span>
                    <div className="font-serif text-2xl font-bold text-evergreen">4 Weeks Early</div>
                  </div>
                  <div className="border-t border-border pt-3">
                    <span className="font-mono text-xs text-charcoal-muted uppercase">Weld Quality Pass</span>
                    <div className="font-serif text-2xl font-bold text-evergreen">99.8% First-Time</div>
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
