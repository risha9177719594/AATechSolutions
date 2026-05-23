import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import SquadEstimator from './components/SquadEstimator';
import TechHubs from './components/TechHubs';
import CalendlyModal from './components/CalendlyModal';
import { Cpu, ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';

function AppContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeConfig, setActiveConfig] = useState(null);

  const handleTriggerScheduler = (config) => {
    setActiveConfig(config);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-slate-800 dark:text-gray-100 transition-colors duration-300">
      
      {/* 1. Glassmorphic Navigation Menu */}
      <Navigation onTriggerScheduler={handleTriggerScheduler} />

      {/* 2. Hero Section with SVG pooling nodes */}
      <Hero onTriggerScheduler={handleTriggerScheduler} />

      {/* 3. Client Trust Logo Banner */}
      <div className="py-10 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-brand-glassDark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xs uppercase tracking-widest text-slate-400 font-bold mb-6 font-mono">
            Trusted by Engineering Leaders at Scaling Brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-sm md:text-base font-extrabold font-headline tracking-wide text-slate-700 dark:text-slate-300">VECTRA CORE</span>
            <span className="text-sm md:text-base font-extrabold font-headline tracking-wide text-slate-700 dark:text-slate-300">NEXUS CLOUD</span>
            <span className="text-sm md:text-base font-extrabold font-headline tracking-wide text-slate-700 dark:text-slate-300">APEX SYSTEMS</span>
            <span className="text-sm md:text-base font-extrabold font-headline tracking-wide text-slate-700 dark:text-slate-300">KINETIC LABS</span>
            <span className="text-sm md:text-base font-extrabold font-headline tracking-wide text-slate-700 dark:text-slate-300">LOGIC LOOP</span>
          </div>
        </div>
      </div>

      {/* 4. Differentiator Bento Grid */}
      <BentoGrid />

      {/* 5. Interactive Squad Scalability Estimator Widget */}
      <SquadEstimator onTriggerScheduler={handleTriggerScheduler} />

      {/* 6. Deep Tech Hub pages / Tabs */}
      <TechHubs />

      {/* 7. Premium trust testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-brand-glassDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-purple/15 text-accent-purple border border-accent-purple/20">
                Client Success
              </span>
              <h3 className="mt-4 text-3xl font-extrabold font-headline text-slate-900 dark:text-white leading-tight">
                What CTOs say about our resource pooling.
              </h3>
              <p className="mt-4 text-sm text-slate-600 dark:text-gray-400">
                Unlike recruiting agencies that send endless, unvetted portfolios, A A Tech Solutions immediately delivered 3 senior Kubernetes consultants who integrated into our deployment environment in 36 hours.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark shadow-sm">
                <p className="text-xs text-slate-600 dark:text-gray-300 italic">
                  "Our DevOps setup was a bottleneck. The 2 engineers deployed by A A Tech solutions revamped our CI/CD in 2 weeks. Their vetting matches the highest standards."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-xs">MB</div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Marcus Vance</div>
                    <div className="text-[10px] text-slate-500">VP of Platform Engineering, Kinetic Labs</div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark shadow-sm">
                <p className="text-xs text-slate-600 dark:text-gray-300 italic">
                  "Finding pre-vetted SAP architects is notoriously hard. A A Tech Solutions matched us with a certified consultant within 48 hours. Flawless SLA performance."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-xs">SK</div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Sarah Jenkins</div>
                    <div className="text-[10px] text-slate-500">IT Director, Apex Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Conversion Footer */}
      <footer className="bg-slate-900 text-gray-400 py-16 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Brand Block */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <a href="#" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white font-extrabold text-sm">
                  AA
                </div>
                <span className="text-base font-extrabold font-headline tracking-tight text-white">
                  A A Tech Solutions
                </span>
              </a>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                A A Tech Solutions is an enterprise engineering talent partner. We maintain active, pre-vetted resource pools across cloud, core backend, Salesforce, SAP, and artificial intelligence systems.
              </p>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 w-fit">
                <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                <span className="text-3xs text-slate-500 font-mono">SOC2 Type II Audit Approved</span>
              </div>
            </div>

            {/* Tech Verticals Links */}
            <div className="lg:col-span-3 space-y-3 text-left">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Niche Hubs</div>
              <ul className="space-y-2 text-xs">
                <li><a href="#tech-hubs" className="hover:text-white transition-colors">DevOps & Cloud Architectures</a></li>
                <li><a href="#tech-hubs" className="hover:text-white transition-colors">Java Full Stack & APIs</a></li>
                <li><a href="#tech-hubs" className="hover:text-white transition-colors">Salesforce APEX & LWC Integrations</a></li>
                <li><a href="#tech-hubs" className="hover:text-white transition-colors">SAP S/4HANA & ABAP Consultancy</a></li>
                <li><a href="#tech-hubs" className="hover:text-white transition-colors">AI, ML Pipelines & Databricks</a></li>
              </ul>
            </div>

            {/* Differentiators & Legal sitemap */}
            <div className="lg:col-span-2 space-y-3 text-left">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Company</div>
              <ul className="space-y-2 text-xs">
                <li><a href="#vetting-grid" className="hover:text-white transition-colors">4-Stage Vetting</a></li>
                <li><a href="#vetting-grid" className="hover:text-white transition-colors">7-Day Zero-Risk Trial</a></li>
                <li><a href="#vetting-grid" className="hover:text-white transition-colors">Compliance Shield</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Address / Contact details */}
            <div className="lg:col-span-3 space-y-3 text-left">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Global Reach</div>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                  <span>San Francisco, CA • Boston, MA • London, UK</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent-purple flex-shrink-0" />
                  <span>delivery@aatechsolutions.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent-emerald flex-shrink-0" />
                  <span>+1 (800) 555-ATECH</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Core Footer Bottom Bar */}
          <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-3xs text-slate-500 font-mono">
            <div>
              © {new Date().getFullYear()} A A Tech Solutions. All Rights Reserved. Fully Encrypted IP Protection.
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Direct Salesforce CRM Integrations</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. Global Embedded Conversion Modal Hook */}
      <CalendlyModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        selectedConfig={activeConfig}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
