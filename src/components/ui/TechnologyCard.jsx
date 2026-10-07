import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function TechnologyCard({ tech }) {
  return (
    <div className="group bg-white rounded-xl border border-surface-border p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:border-brand-blue-light/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Header with Tech Badge / Logo */}
        <div className="flex items-center justify-between mb-5">
          <div className="h-12 w-28 flex items-center justify-start">
            {tech.logo ? (
              <img 
                src={tech.logo} 
                alt={`${tech.title} logo`}
                className="max-h-10 max-w-full object-contain"
                loading="lazy"
              />
            ) : (
              <span className="text-xl font-extrabold text-brand-blue">{tech.title}</span>
            )}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-blue/10 text-brand-blue">
            Enterprise Core
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-2.5 group-hover:text-brand-blue transition-colors">
          {tech.title}
        </h3>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
          {tech.description}
        </p>
      </div>

      {/* Skills Pill Grid */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-brand-gray mb-3">
          Specialized Competencies
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.skills.map((skill, index) => (
            <span 
              key={index} 
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-surface-light text-text-dark border border-surface-border group-hover:border-brand-blue/20 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
              <span>{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
