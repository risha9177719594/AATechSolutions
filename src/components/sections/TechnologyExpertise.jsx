import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TechnologyCard from '../ui/TechnologyCard';
import { technologies } from '../../data/technologies';

export default function TechnologyExpertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-surface-light border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR TECHNOLOGY EXPERTISE"
          title="Specialized Talent Across Leading Enterprise Platforms"
          description="Connect with experienced professionals across the technologies that power modern businesses."
        />

        {/* 4 Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.id} tech={tech} />
          ))}
        </div>

      </div>
    </section>
  );
}
