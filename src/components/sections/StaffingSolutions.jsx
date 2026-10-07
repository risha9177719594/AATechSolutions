import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

export default function StaffingSolutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="STAFFING SOLUTIONS"
          title="Flexible Talent Solutions for Changing Business Needs"
          description="Whether you need rapid team scaling, permanent tech leadership, or specialized recruiters, we adapt to your organization's staffing model."
        />

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
