import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { processSteps } from '../../data/services';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="A Simple Approach to Finding the Right Talent"
          description="A structured, transparent 4-stage talent lifecycle designed to deliver vetted technology professionals efficiently and reliably."
        />

        {/* Process Timeline Grid */}
        <div className="relative mt-12">
          
          {/* Subtle Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-surface-border -translate-y-6 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((item, index) => (
              <div 
                key={item.step} 
                className="bg-white rounded-xl border border-surface-border p-6 shadow-card hover:shadow-card-hover hover:border-brand-blue-light transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-extrabold text-sm shadow-sm ring-4 ring-brand-blue/10">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-gray">
                      Stage 0{index + 1}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold tracking-tight text-text-dark mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/60 text-xs font-semibold text-brand-blue">
                  Step {item.step} of 04
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
