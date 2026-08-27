import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <section className="bg-evergreen text-white py-16 lg:py-24 border-b border-evergreen-hover">
        <div className="container-corporate">
          <div className="badge-mono bg-evergreen-hover text-white border-mineral-teal mb-4">
            Corporate Inquiry Hub
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Direct Stakeholder & Procurement Inquiries.
          </h1>
          <p className="font-sans text-lg text-border max-w-2xl">
            Connect with our division procurement teams, executive leadership, media relations, or human resources directorate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="bg-white p-8 border border-border">
                <h2 className="font-serif text-2xl font-bold text-evergreen mb-6">Corporate Inquiry Form</h2>
                {submitted ? (
                  <div className="p-8 bg-ivory-canvas border border-border text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-evergreen mx-auto" />
                    <h3 className="font-serif text-xl font-bold text-evergreen">Inquiry Transmitted</h3>
                    <p className="text-xs text-charcoal-body">
                      Your submission has been dispatched to the designated department. An executive officer will respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-charcoal-muted mb-1">
                        Department Destination *
                      </label>
                      <select className="w-full border border-border p-3 text-sm bg-white focus:outline-mineral-teal">
                        <option>Procurement & High-Volume Sales</option>
                        <option>Partnerships & Joint Ventures</option>
                        <option>Careers & Talent Directorate</option>
                        <option>Media & Investor Relations</option>
                        <option>General Corporate Inquiry</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-charcoal-muted mb-1">Full Name *</label>
                        <input required type="text" className="w-full border border-border p-3 text-sm focus:outline-mineral-teal" placeholder="e.g. Samuel Yohannes" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-charcoal-muted mb-1">Organization *</label>
                        <input required type="text" className="w-full border border-border p-3 text-sm focus:outline-mineral-teal" placeholder="Company / Agency" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-charcoal-muted mb-1">Corporate Email *</label>
                        <input required type="email" className="w-full border border-border p-3 text-sm focus:outline-mineral-teal" placeholder="name@company.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-charcoal-muted mb-1">Telephone *</label>
                        <input required type="tel" className="w-full border border-border p-3 text-sm focus:outline-mineral-teal" placeholder="+251 ..." />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-charcoal-muted mb-1">Message / RFQ Specifications *</label>
                      <textarea required rows={4} className="w-full border border-border p-3 text-sm focus:outline-mineral-teal" placeholder="Outline your technical requirements, estimated volume, or partnership request..."></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Submit Corporate Inquiry <Send className="w-4 h-4 ml-1" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 border border-border">
                <h3 className="font-serif text-lg font-bold text-evergreen mb-4">Executive Headquarters</h3>
                <div className="space-y-3 text-xs text-charcoal-body">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-mineral-teal shrink-0 mt-0.5" />
                    <span>Asterra Corporate Towers, Industrial Zone 4, P.O. Box 1024, Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-mineral-teal shrink-0" />
                    <span>+251 (0) 11 555 0199</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-mineral-teal shrink-0" />
                    <span>inquiries@asterragroup.com</span>
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
