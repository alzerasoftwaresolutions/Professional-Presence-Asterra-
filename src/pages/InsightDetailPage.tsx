import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-12 border-b border-evergreen-hover">
        <div className="container-corporate">
          <Link to="/insights" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-border hover:text-white mb-6">
            <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to Knowledge Center
          </Link>
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-3">
            Technical Analysis • 6 Min Read
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Advanced High-Tensile Steel Adoption in African Infrastructure'}
          </h1>
          <div className="flex items-center gap-6 text-xs text-border">
            <span>By Engineering Directorate</span>
            <span>Published: Q3 2024</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-6 border-l-4 border-mineral-teal border border-border">
                <h3 className="font-serif font-bold text-evergreen text-base mb-2">Executive Summary & Key Takeaways</h3>
                <ul className="text-xs text-charcoal-body space-y-2">
                  <li>• High-tensile steel grades (S355 & S460) decrease overall dead weight by up to 22% in long-span bridge girders.</li>
                  <li>• Radiographic automated submerged arc welding provides verifiable fatigue life enhancements exceeding 50 years.</li>
                </ul>
              </div>

              <div className="prose text-charcoal-body space-y-4 text-sm leading-relaxed">
                <p>
                  Industrial infrastructure requirements across developing corridors demand materials that combine rapid fabrication cycle times with superior yield strength under dynamic freight loads.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 border border-border">
                <h3 className="font-serif text-base font-bold text-evergreen mb-3">Download Full Paper</h3>
                <p className="text-xs text-charcoal-body mb-4">Complete 18-page technical report with stress-strain curves and weld test data (PDF).</p>
                <button className="btn-secondary w-full text-xs">
                  <Download className="w-4 h-4 mr-1" /> Download PDF Report (2.4 MB)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
