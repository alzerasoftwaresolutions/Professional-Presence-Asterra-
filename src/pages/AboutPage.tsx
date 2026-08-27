import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-evergreen text-white py-16 lg:py-24 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-4">
            Corporate Story & Heritage
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Building Industrial Strength Since 1998.
          </h1>
          <p className="font-sans text-lg text-border max-w-2xl">
            A quarter-century of disciplined manufacturing growth, automated infrastructure investment, and unwavering adherence to international quality standards.
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-evergreen">
                Our Institutional Purpose
              </h2>
              <p className="text-charcoal-body leading-relaxed">
                Founded with a singular vision to establish modern, high-precision industrial manufacturing in the Horn of Africa, Asterra Manufacturing Group has expanded from a specialized fabrication shop into a four-division industrial conglomerate.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white p-8 border border-border">
              <h3 className="font-serif text-xl font-bold text-evergreen mb-4">Corporate Facts</h3>
              <ul className="space-y-4 text-sm text-charcoal-body">
                <li><strong>Group Founded:</strong> 1998</li>
                <li><strong>Headquarters:</strong> Industrial Zone 4, Addis Ababa</li>
                <li><strong>Total Workforce:</strong> 1,450+ Engineers & Specialists</li>
                <li><strong>Accreditation:</strong> ISO 9001:2015, ISO 14001, ISO 45001</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
