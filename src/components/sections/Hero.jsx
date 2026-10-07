import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Layers, Users } from 'lucide-react';
import { company } from '../../data/company';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-28 border-b border-surface-border">
      {/* Subtle Letterhead-inspired geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light/5 rounded-full filter blur-2xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Eyebrow / Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-surface-light border border-surface-border text-brand-blue text-xs sm:text-sm font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              {company.tagline}
            </div>

            {/* Exactly ONE H1 for the page */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-text-dark leading-[1.15]">
              Technology Talent That Moves Your Business Forward
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl font-normal">
              A A Tech Solutions provides specialized staffing and talent solutions across SAP, Salesforce, ServiceNow and other enterprise technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#contact" variant="primary" size="lg">
                <span>Find Talent</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Talk to Us
              </Button>
            </div>

            {/* Enterprise Highlights Strip */}
            <div className="pt-6 border-t border-surface-border flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-text-dark/80 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Enterprise Platform Specialists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Pre-Screened Resource Pool</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Flexible Deployment Models</span>
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Abstract Technology Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Framed Visual Container */}
              <div className="relative rounded-2xl bg-surface-light border border-surface-border p-6 sm:p-8 shadow-card overflow-hidden">
                
                {/* Diagonal letterhead aesthetic banner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 letterhead-accent transform rotate-45 opacity-90 rounded-xl"></div>
                
                {/* Visual Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-blue"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-dark">
                      Talent Matrix
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue">
                    Enterprise Ready
                  </span>
                </div>

                {/* Platform Pillars */}
                <div className="space-y-3.5">
                  
                  {/* SAP Card */}
                  <div className="p-3.5 rounded-lg bg-white border border-surface-border flex items-center justify-between shadow-subtle hover:border-brand-blue transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue text-xs">
                        SAP
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-dark">SAP Enterprise Suite</div>
                        <div className="text-xs text-text-muted">S/4HANA • FICO • MM • ABAP</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-brand-blue bg-surface-light px-2 py-1 rounded">
                      Available
                    </div>
                  </div>

                  {/* Salesforce Card */}
                  <div className="p-3.5 rounded-lg bg-white border border-surface-border flex items-center justify-between shadow-subtle hover:border-brand-blue transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-brand-blue-light/10 flex items-center justify-center font-bold text-brand-blue-light text-xs">
                        SF
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-dark">Salesforce Ecosystem</div>
                        <div className="text-xs text-text-muted">Sales • Service • Apex • LWC</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-brand-blue bg-surface-light px-2 py-1 rounded">
                      Available
                    </div>
                  </div>

                  {/* ServiceNow Card */}
                  <div className="p-3.5 rounded-lg bg-white border border-surface-border flex items-center justify-between shadow-subtle hover:border-brand-blue transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-brand-blue-dark/10 flex items-center justify-center font-bold text-brand-blue-dark text-xs">
                        SN
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-dark">ServiceNow Workflows</div>
                        <div className="text-xs text-text-muted">ITSM • ITOM • HRSD • SecOps</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-brand-blue bg-surface-light px-2 py-1 rounded">
                      Available
                    </div>
                  </div>

                  {/* Enterprise Cloud & Emerging Card */}
                  <div className="p-3.5 rounded-lg bg-white border border-surface-border flex items-center justify-between shadow-subtle hover:border-brand-blue transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-brand-gray/10 flex items-center justify-center font-bold text-brand-gray text-xs">
                        ET
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-dark">Emerging Technologies</div>
                        <div className="text-xs text-text-muted">Cloud • Data • AI • Full Stack</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-brand-blue bg-surface-light px-2 py-1 rounded">
                      Available
                    </div>
                  </div>

                </div>

                {/* Bottom Trust Metric Bar */}
                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-brand-blue" />
                    <span>Rigorous Multi-Tier Vetting</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-brand-blue" />
                    <span>Contract & Perm</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
