import React, { useState } from 'react';
import { CorporateInquiry } from '../../types';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { CheckCircle2, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

export interface CorporateInquiryFormProps {
  initialDepartment?: CorporateInquiry['department'];
  initialDivision?: string;
  className?: string;
}

export const CorporateInquiryForm: React.FC<CorporateInquiryFormProps> = ({
  initialDepartment = 'Procurement & Sales',
  initialDivision = '',
  className = '',
}) => {
  const [formData, setFormData] = useState<Partial<CorporateInquiry> & { honeypot?: string; estimatedVolume?: string; timeline?: string; preferredDivision?: string }>({
    department: initialDepartment,
    fullName: '',
    organization: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: 'Ethiopia',
    subject: '',
    message: '',
    preferredDivision: initialDivision,
    estimatedVolume: '',
    timeline: 'Within 3 Months',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceNumber, setReferenceNumber] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Honeypot spam check: If filled, quietly pretend success without sending
    if (formData.honeypot) {
      setIsSubmitted(true);
      return;
    }

    if (!formData.fullName || !formData.email || !formData.organization || !formData.message) {
      setErrorMessage('Please fill in all mandatory corporate contact fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate enterprise backend dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `AST-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceNumber(generatedRef);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white p-8 sm:p-12 border border-border text-center space-y-6 shadow-xs ${className}`}>
        <div className="w-16 h-16 bg-evergreen-subtle text-evergreen flex items-center justify-center mx-auto border border-border">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-mineral-teal font-semibold">
            Inquiry Ref: {referenceNumber || 'AST-RFQ-849102'}
          </span>
          <Heading as="h3" font="serif" size="heading-lg" color="evergreen">
            Corporate Inquiry Transmitted
          </Heading>
          <Text variant="body" color="body" className="max-w-md mx-auto">
            Your technical request has been routed to the <strong>{formData.department}</strong> directorate. A designated engineering or procurement officer will respond within one business day.
          </Text>
        </div>

        <div className="pt-4 border-t border-border max-w-sm mx-auto flex items-center justify-center gap-2 text-xs font-mono text-charcoal-muted">
          <ShieldCheck className="w-4 h-4 text-mineral-teal" />
          <span>Encrypted Industrial Data Transmission</span>
        </div>

        <div className="pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                department: initialDepartment,
                fullName: '',
                organization: '',
                jobTitle: '',
                email: '',
                phone: '',
                country: 'Ethiopia',
                subject: '',
                message: '',
                preferredDivision: '',
                estimatedVolume: '',
                timeline: 'Within 3 Months',
                honeypot: '',
              });
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  const isProcurement = formData.department === 'Procurement & Sales';

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white p-6 sm:p-10 border border-border space-y-6 shadow-xs ${className}`}
      noValidate={false}
    >
      {/* Hidden Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-50 border-l-4 border-state-error text-state-error text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 1. Department Routing Selector */}
      <div>
        <Select
          label="Designated Department Directorate"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          options={[
            { value: 'Procurement & Sales', label: 'Procurement & High-Volume Supply Sales' },
            { value: 'Partnerships & Joint Ventures', label: 'Partnerships, Distribution & Joint Ventures' },
            { value: 'Careers & Talent', label: 'Human Resources & Engineering Talent' },
            { value: 'Media & Investor Relations', label: 'Media, Press & Institutional Stakeholders' },
            { value: 'General Inquiries', label: 'General Corporate Management' },
          ]}
        />
      </div>

      {/* 2. Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          name="fullName"
          placeholder="e.g. Samuel Yohannes"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          label="Corporate Organization / Agency"
          name="organization"
          placeholder="e.g. National Transport Authority"
          value={formData.organization}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input
          label="Official Email"
          name="email"
          type="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Telephone / Mobile"
          name="phone"
          type="tel"
          placeholder="+251 ..."
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          label="Country / Operating Region"
          name="country"
          placeholder="Ethiopia"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>

      {/* 3. Conditional RFQ Fields for Procurement */}
      {isProcurement && (
        <div className="p-4 sm:p-5 bg-ivory-canvas/60 border border-border space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-evergreen font-bold">
              RFQ Technical Parameters (Optional)
            </span>
            <span className="text-[10px] font-mono text-charcoal-muted">Faster Technical Quoting</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Primary Division Target"
              name="preferredDivision"
              value={formData.preferredDivision}
              onChange={handleChange}
              options={[
                { value: '', label: 'Select Operating Division...' },
                { value: 'DIV-01', label: 'DIV-01: Precision Metals & Structural' },
                { value: 'DIV-02', label: 'DIV-02: Industrial Materials & Precast' },
                { value: 'DIV-03', label: 'DIV-03: Polymers & HDPE Piping' },
                { value: 'DIV-04', label: 'DIV-04: Automated Equipment Assemblies' },
              ]}
            />
            <Input
              label="Estimated Volume / Tonnage"
              name="estimatedVolume"
              placeholder="e.g. 2,500 MT or 15 km"
              value={formData.estimatedVolume}
              onChange={handleChange}
            />
            <Select
              label="Project Schedule / Timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              options={[
                { value: 'Immediate (< 30 Days)', label: 'Immediate (< 30 Days)' },
                { value: 'Within 3 Months', label: 'Within 3 Months' },
                { value: '3 - 6 Months', label: '3 - 6 Months' },
                { value: 'Long-term Strategic Framework', label: 'Long-term Strategic Framework' },
              ]}
            />
          </div>
        </div>
      )}

      {/* 4. Subject & Message */}
      <Input
        label="Inquiry Subject"
        name="subject"
        placeholder="e.g. Heavy Plate Girder Fabrication RFQ — Lot 2"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Technical Scope & Specifications"
        name="message"
        placeholder="Provide key engineering parameters, required delivery timeline, destination port/site, or questions for our technical directorship..."
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
      />

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4 ml-1" />}
          className="w-full sm:w-auto"
        >
          Submit Corporate RFQ
        </Button>

        <span className="text-[11px] font-mono text-charcoal-muted flex items-center gap-1.5 text-center sm:text-left">
          <ShieldCheck className="w-4 h-4 text-mineral-teal shrink-0" />
          <span>Protected under Asterra Corporate Confidentiality Protocols</span>
        </span>
      </div>
    </form>
  );
};
