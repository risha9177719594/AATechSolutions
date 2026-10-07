import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark focus:ring-brand-blue shadow-sm hover:shadow active:scale-[0.99]',
    secondary: 'bg-white text-brand-blue border border-brand-blue/30 hover:border-brand-blue hover:bg-surface-light focus:ring-brand-blue active:scale-[0.99]',
    outlineLight: 'bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white focus:ring-white',
    white: 'bg-white text-brand-blue-dark hover:bg-slate-50 focus:ring-white shadow-md active:scale-[0.99]'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={combinedClasses} 
      {...props}
    >
      {children}
    </button>
  );
}
