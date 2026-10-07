import React from 'react';
import { Users2, Cpu, TrendingUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { whyItems } from '../../data/services';

const iconMap = {
  Users2,
  Cpu,
  TrendingUp
};

export default function WhyAATech() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface-light border-b border-surface-border relative overflow-hidden">
      
      {/* Background Subtle Letterhead Line Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-blue-light/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="WHY A A TECH SOLUTIONS"
          title="People. Technology. Growth."
          description="Our core philosophy defines how we partner with enterprises: connecting exceptional people with high-impact technology to accelerate organizational growth."
        />

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyItems.map((item, index) => {
            const Icon = iconMap[item.icon] || Users2;
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-surface-border p-8 shadow-card hover:shadow-card-hover hover:border-brand-blue transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Pillar Accent Top Strip */}
                <div className="w-12 h-1.5 rounded-full bg-brand-blue mb-6 group-hover:w-20 transition-all duration-300"></div>

                <div>
                  {/* Tagline Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-brand-blue uppercase px-2.5 py-1 rounded bg-brand-blue/10">
                      {item.tagline}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-surface-light border border-surface-border flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-extrabold text-text-dark mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-base text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Visual Footer */}
                <div className="pt-6 mt-6 border-t border-surface-border/60 text-xs text-brand-gray font-semibold flex items-center justify-between">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-brand-blue group-hover:translate-x-1 transition-transform">
                    {item.tagline} &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
