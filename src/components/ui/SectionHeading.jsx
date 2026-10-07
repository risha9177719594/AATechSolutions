import React from 'react';

export default function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  align = 'center',
  light = false,
  className = ''
}) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {eyebrow && (
        <p className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 ${
          light ? 'text-brand-blue-light' : 'text-brand-blue'
        }`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 ${
        light ? 'text-white' : 'text-text-dark'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-200' : 'text-text-muted'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
