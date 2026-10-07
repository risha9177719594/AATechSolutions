import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { company } from '../../data/company';

export default function Footer() {
  return (
    <footer className="bg-text-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/80">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block">
              <img 
                src="/assets/logo/aa-tech-horizontal.svg" 
                alt={company.name} 
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
            
            <div className="text-xs font-bold tracking-widest text-brand-blue-light uppercase">
              {company.tagline}
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {company.description}
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-white">Focus Platforms:</span> SAP • Salesforce • ServiceNow • Cloud Enterprise
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {company.navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hyderabad Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  {company.address.line1},<br />
                  {company.address.line2},<br />
                  {company.address.stateCountry}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                <span>{company.website}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {company.copyrightYear} {company.name}. All rights reserved.
          </div>
          <div className="text-slate-400">
            {company.positioning}
          </div>
        </div>
      </div>
    </footer>
  );
}
