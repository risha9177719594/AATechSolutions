import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { company } from '../../data/company';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    technology: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.technology.trim()) newErrors.technology = 'Technology / Requirement is required';
    if (!formData.message.trim()) newErrors.message = 'Message details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Frontend-only validated submission state
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-light border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CONTACT US"
          title="Let's Talk About Your Talent Needs"
          description="Connect with our recruitment practice leads to discuss your project requirements or specific hiring timelines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-card">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">
                  Requirement Submitted Successfully
                </h3>
                <p className="text-text-muted max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out to A A Tech Solutions. Our specialized technology recruitment team will review your requirement and get in touch within 24 hours.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="secondary" 
                    size="md" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        technology: '',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Requirement
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-surface-border bg-surface-light/40'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Enterprise Systems Pvt Ltd"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors ${
                        errors.company ? 'border-red-400 bg-red-50/30' : 'border-surface-border bg-surface-light/40'
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rajesh@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-surface-border bg-surface-light/40'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-surface-border bg-surface-light/40 text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Technology / Requirement Field */}
                <div>
                  <label htmlFor="technology" className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">
                    Technology / Requirement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="technology"
                    name="technology"
                    value={formData.technology}
                    onChange={handleChange}
                    placeholder="e.g. SAP S/4HANA FICO Consultant / Salesforce LWC Architect"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors ${
                      errors.technology ? 'border-red-400 bg-red-50/30' : 'border-surface-border bg-surface-light/40'
                    }`}
                  />
                  {errors.technology && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.technology}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your staffing needs, project timeline, experience level, or number of resources..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-surface-border bg-surface-light/40'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    <span>Submit Requirement</span>
                    <Send className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Company Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="bg-white rounded-2xl border border-surface-border p-7 sm:p-8 shadow-card space-y-6">
              
              <div>
                <h3 className="text-xl font-extrabold text-text-dark tracking-tight mb-1">
                  A A TECH SOLUTIONS
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  {company.tagline}
                </div>
              </div>

              <div className="space-y-4 text-sm text-text-dark">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface-light border border-surface-border flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-brand-gray mb-1">Address</div>
                    <div className="leading-relaxed text-text-dark">
                      {company.address.line1},<br />
                      {company.address.line2},<br />
                      {company.address.stateCountry}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface-light border border-surface-border flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-brand-gray mb-1">Phone</div>
                    <a 
                      href={`tel:${company.phone.replace(/\s+/g, '')}`}
                      className="font-semibold text-brand-blue hover:underline"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface-light border border-surface-border flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-brand-gray mb-1">Email</div>
                    <a 
                      href={`mailto:${company.email}`}
                      className="font-semibold text-brand-blue hover:underline break-all"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface-light border border-surface-border flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-brand-gray mb-1">Website</div>
                    <span className="font-semibold text-text-dark">
                      {company.website}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/15 text-xs text-text-dark flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
              <span>We usually respond to talent inquiries within 24 business hours.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
