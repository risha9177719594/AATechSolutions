import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, ChevronDown, Layers, Shield, Calendar, Users } from 'lucide-react';

export default function Navigation({ onTriggerScheduler }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-brand-glassDark shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-cyan-500/10">
              AA
            </div>
            <span className="text-base font-extrabold font-headline tracking-tight text-slate-900 dark:text-white group-hover:text-accent-cyan transition-colors">
              A A Tech Solutions
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Tech Hub Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('tech')}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Technologies <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'tech' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'tech' && (
                <div className="absolute top-full mt-2 w-80 rounded-xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark shadow-xl p-4 grid grid-cols-1 gap-2">
                  <a href="#tech-devops" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <Layers className="w-4 h-4 text-accent-cyan mt-1" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">DevOps & Cloud</div>
                      <div className="text-3xs text-slate-500">Terraform, Kubernetes, IaC Systems</div>
                    </div>
                  </a>
                  <a href="#tech-java" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <Layers className="w-4 h-4 text-accent-purple mt-1" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Java Full-Stack</div>
                      <div className="text-3xs text-slate-500">Microservices, Spring Boot, React</div>
                    </div>
                  </a>
                  <a href="#tech-enterprise" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <Layers className="w-4 h-4 text-accent-emerald mt-1" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">SAP & Salesforce</div>
                      <div className="text-3xs text-slate-500">Enterprise Solutions & CRM Architecture</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Why Us Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('why')}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Why A A Tech <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'why' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'why' && (
                <div className="absolute top-full mt-2 w-72 rounded-xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark shadow-xl p-4 grid grid-cols-1 gap-2">
                  <a href="#vetting-grid" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <Shield className="w-4 h-4 text-accent-emerald mt-1" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Our 4-Stage Vetting</div>
                      <div className="text-3xs text-slate-500">Architect-led sandbox testing</div>
                    </div>
                  </a>
                  <a href="#compliance-grid" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <Shield className="w-4 h-4 text-accent-cyan mt-1" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Trust & Compliance</div>
                      <div className="text-3xs text-slate-500">SOC2, GDPR & IP Protection</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="#estimator-section" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white">Squad Estimator</a>
            <a href="#tech-hubs" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white">Tech Verticals</a>
          </nav>

          {/* Right Area Controls */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Theme switcher toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-brand-glassDark hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-gray-300 transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Calendly Booking CTA button */}
            <button
              onClick={() => onTriggerScheduler({ domain: 'General Tech Discovery', scale: '1-3 Specialist', timeline: 'Immediate' })}
              className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all border border-transparent dark:border-slate-800 cursor-pointer shadow-sm"
            >
              Book Tech Audit
            </button>
          </div>

          {/* Mobile Navigation Toggler & Toggles */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-brand-glassDark hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-slate-200 dark:border-brand-glassDark hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-gray-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Overlay Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white dark:bg-brand-dark border-b border-slate-200 dark:border-brand-glassDark p-4 space-y-4">
          <nav className="flex flex-col gap-3">
            <a 
              href="#tech-hubs" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-gray-200"
            >
              Core Technologies
            </a>
            <a 
              href="#vetting-grid" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-gray-200"
            >
              Our 4-Stage Vetting
            </a>
            <a 
              href="#estimator-section" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-gray-200"
            >
              Squad Estimator
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onTriggerScheduler({ domain: 'General Mobile Discovery', scale: 'Core Team', timeline: 'Immediate' });
              }}
              className="w-full py-3 rounded-xl bg-accent-cyan text-slate-950 text-xs font-bold text-center"
            >
              Book Tech Audit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
