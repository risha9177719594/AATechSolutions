import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { company } from '../../data/company';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-20 md:py-24 bg-brand-blue-dark text-white relative overflow-hidden">
      
      {/* Letterhead-inspired geometric backdrop */}
      <div className="absolute inset-0 opacity-10 pattern-grid pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-light/20 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/30 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Brand Eyebrow */}
        <p className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue-light uppercase mb-4">
          ENTERPRISE TECH STAFFING
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight mb-6">
          Need the Right Technology Talent?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us what you're building. We'll help you find the people to build it.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button href="#contact" variant="white" size="lg">
            <span>Talk to A A Tech Solutions</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-200">
          <a 
            href={`tel:${company.phone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-blue-light" />
            <span className="font-semibold">{company.phone}</span>
          </a>
          <span className="hidden sm:inline text-white/30">•</span>
          <a 
            href={`mailto:${company.email}`} 
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-brand-blue-light" />
            <span className="font-semibold">{company.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
