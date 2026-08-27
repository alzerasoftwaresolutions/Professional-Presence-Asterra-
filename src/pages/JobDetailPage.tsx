import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-12 border-b border-evergreen-hover">
        <div className="container-corporate">
          <Link to="/careers" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-border hover:text-white mb-6">
            <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to All Opportunities
          </Link>
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-3">
            DIV-01 • Engineering
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Senior Structural Welding Engineer'}
          </h1>
          <p className="font-sans text-sm text-border">
            Location: Plant 1, Industrial Zone 4 • Type: Full-time Permanent
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-evergreen mb-4">Position Responsibilities</h2>
                <ul className="text-sm text-charcoal-body space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-mineral-teal shrink-0 mt-1" />
                    <span>Establish, qualify, and document WPS/PQR standards under EN 1090-2 (EXC3) and AWS D1.1.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-mineral-teal shrink-0 mt-1" />
                    <span>Oversee automated submerged arc welding columns and inspect radiographic test results.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-evergreen mb-4">Qualifications & Requirements</h2>
                <ul className="text-sm text-charcoal-body space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-mineral-teal shrink-0 mt-1" />
                    <span>B.Sc. in Metallurgical, Materials, or Mechanical Engineering (M.Sc. preferred).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-mineral-teal shrink-0 mt-1" />
                    <span>International Welding Engineer (IWE) or European Welding Engineer (EWE) certification.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white p-6 border border-border space-y-4">
                <h3 className="font-serif font-bold text-evergreen text-lg">Apply for Position</h3>
                <p className="text-xs text-charcoal-body">Submit your technical CV and professional credentials directly to our HR Directorate.</p>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Submit Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
