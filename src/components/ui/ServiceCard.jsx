import React from 'react';
import { Users, UserCheck, Clock, Briefcase } from 'lucide-react';

const iconMap = {
  Users,
  UserCheck,
  Clock,
  Briefcase
};

export default function ServiceCard({ service, index }) {
  const IconComponent = iconMap[service.icon] || Briefcase;

  return (
    <div className="bg-white rounded-xl border border-surface-border p-7 shadow-card hover:shadow-card-hover hover:border-brand-blue-light/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Icon Badge */}
        <div className="w-12 h-12 rounded-lg bg-surface-light border border-surface-border flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-200 mb-6">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Heading */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-text-dark mb-3 group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Value Proposition Note */}
      {service.highlight && (
        <div className="pt-4 border-t border-surface-border/80 text-xs text-brand-gray font-medium">
          {service.highlight}
        </div>
      )}
    </div>
  );
}
