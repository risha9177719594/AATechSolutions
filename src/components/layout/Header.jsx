import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { company } from '../../data/company';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled 
          ? 'py-2.5 shadow-header border-b border-surface-border' 
          : 'py-4 border-b border-surface-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a 
            href="#" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-md"
            aria-label="A A Tech Solutions Home"
          >
            <img 
              src="/assets/logo/aa-tech-horizontal.svg" 
              alt={company.name} 
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-9 sm:h-11' : 'h-11 sm:h-13'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {company.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-dark/80 hover:text-brand-blue transition-colors focus:outline-none focus:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-4">
            <Button href="#contact" variant="primary" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-dark hover:bg-surface-light focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-text-dark" />
              ) : (
                <Menu className="w-6 h-6 text-text-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 border-t border-surface-border animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {company.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-3 py-2 text-base font-medium text-text-dark hover:bg-surface-light rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-brand-gray" />
                </a>
              ))}
              <div className="pt-3 px-3">
                <Button 
                  href="#contact" 
                  variant="primary" 
                  size="md" 
                  className="w-full justify-center"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
