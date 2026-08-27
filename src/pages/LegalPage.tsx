import React from 'react';
import { useLocation } from 'react-router-dom';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');

  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-12 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-3">
            Corporate Governance & Compliance
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-2">
            {isPrivacy ? 'Privacy & Data Governance Policy' : 'Terms of Corporate Engagement'}
          </h1>
          <p className="font-sans text-xs text-border">
            Last Updated: August 2026 • Asterra Manufacturing Group Legal Affairs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate max-w-reading">
          <div className="prose text-charcoal-body text-sm space-y-6 bg-white p-8 border border-border">
            <h2 className="font-serif text-xl font-bold text-evergreen">1. Regulatory Compliance Framework</h2>
            <p>
              Asterra Manufacturing Group adheres to applicable Ethiopian commercial laws, international trade export standards, and industrial safety regulations across all operating entities.
            </p>
            <h2 className="font-serif text-xl font-bold text-evergreen">2. Data Security & Confidentiality</h2>
            <p>
              Corporate inquiries, technical drawings, RFQ documentation, and recruitment applications submitted through this platform are protected under strict industrial confidentiality protocols.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
