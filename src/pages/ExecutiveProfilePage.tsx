import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ExecutiveProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-12 border-b border-evergreen-hover">
        <div className="container-corporate">
          <Link to="/leadership" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-border hover:text-white mb-6">
            <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to Leadership
          </Link>
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-3">
            Executive Profile
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Executive Profile: {slug?.replace(/-/g, ' ').toUpperCase() || 'Dr. Samuel Bekele'}
          </h1>
          <p className="font-sans text-sm text-border">
            Group Chief Executive Officer • Executive Committee
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="card-corporate p-6 space-y-6">
                <div className="aspect-[4/5] bg-ivory-canvas flex items-center justify-center text-charcoal-muted">
                  Portrait Placeholder
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-evergreen mb-2">Education & Credentials</h3>
                  <ul className="text-xs text-charcoal-body space-y-2">
                    <li>• Ph.D. in Industrial Engineering — MIT</li>
                    <li>• M.Sc. in Operations Research — Stanford</li>
                    <li>• B.Sc. in Mechanical Engineering — AAU</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <blockquote className="border-l-4 border-mineral-teal pl-6 py-2 text-xl font-serif italic text-evergreen">
                "Sustainable industrialization requires disciplined capital allocation, relentless operational precision, and an uncompromising commitment to international standards."
              </blockquote>
              <div className="prose text-charcoal-body space-y-4 text-sm leading-relaxed">
                <p>
                  As Group Chief Executive Officer, Dr. Samuel Bekele oversees Asterra's four manufacturing divisions, regional export strategies, and multi-facility capital expansion initiatives across East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
