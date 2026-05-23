import React, { useRef, useEffect } from 'react';
import { ShieldAlert, Award, RefreshCw, BadgePercent, Lock } from 'lucide-react';

export default function BentoGrid() {
  const containerRef = useRef(null);

  // Implement mouse coordination hover tracker for Vercel/Linear glow card effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = containerRef.current.querySelectorAll('.bento-glow-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="vetting-grid" className="py-24 bg-slate-50 dark:bg-[#080B11] border-y border-slate-200 dark:border-brand-glassDark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-emerald/15 dark:bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20">
              The Sovereign SLA Standard
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold font-headline tracking-tight text-slate-900 dark:text-white">
              We audit execution, not CVs.
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-gray-400">
              Traditional staffing relies on keyword matching. A A Tech Solutions uses custom coding sandboxes and architect review boards to vet every engineer.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800">
            <Lock className="w-4 h-4 text-accent-cyan" />
            <span className="text-xs text-slate-500 font-mono">SOC2 Type II Protected</span>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Card 1: 4-Stage Vetting Protocol (Double Width, Tall) */}
          <div className="md:col-span-2 md:row-span-2 bento-glow-card rounded-3xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark p-8 flex flex-col justify-between shadow-sm relative z-10 group overflow-hidden">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-headline text-slate-900 dark:text-white">
                  The 4-Stage Vetting Protocol
                </h3>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Every engineer in our resource pool undergoes a thorough evaluation process designed by veteran enterprise architects:
              </p>
              
              {/* Stages List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs font-extrabold text-accent-cyan font-mono bg-accent-cyan/10 px-2 py-0.5 rounded">01</span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">Algorithmic Sandbox Challenge</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs font-extrabold text-accent-cyan font-mono bg-accent-cyan/10 px-2 py-0.5 rounded">02</span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">Live System Architecture Auditing</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs font-extrabold text-accent-cyan font-mono bg-accent-cyan/10 px-2 py-0.5 rounded">03</span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">Security & SDLC Compliance Vetting</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs font-extrabold text-accent-cyan font-mono bg-accent-cyan/10 px-2 py-0.5 rounded">04</span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">Architect Review Board Interview</span>
                </div>
              </div>
            </div>
            <div className="text-3xs text-slate-500 font-mono border-t border-slate-100 dark:border-slate-800/80 pt-4">
              Passing rate: &lt; 2.5% of applicants. Only elite technicians enter the pool.
            </div>
          </div>

          {/* Card 2: 7-Day Flawless Match Guarantee (Tall) */}
          <div className="md:row-span-2 bento-glow-card rounded-3xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark p-8 flex flex-col justify-between shadow-sm relative z-10 group overflow-hidden">
            <div>
              <div className="p-2.5 rounded-xl bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 w-fit">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-headline mt-6 text-slate-900 dark:text-white">
                7-Day Zero-Risk Trial
              </h3>
              <p className="mt-3 text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                We guarantee a seamless onboarding fit. If an engineer or consultant does not seamlessly align with your repository workflow, technical tooling, or team cadence in the first 7 days, you pay absolutely nothing. 
              </p>
              <div className="mt-6 p-3 rounded-xl bg-accent-emerald/5 border border-accent-emerald/10 text-2xs text-accent-emerald font-semibold">
                SLA Guarantee: Instant Engineer Replacement.
              </div>
            </div>
            <div className="text-3xs text-slate-500 font-mono">
              Applies to all technology hires.
            </div>
          </div>

          {/* Card 3: 98.2% Retention Metrics (Standard Grid Card) */}
          <div className="bento-glow-card rounded-3xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark p-6 flex items-center justify-between shadow-sm relative z-10 overflow-hidden">
            <div className="space-y-2">
              <div className="text-3xs text-slate-400 font-semibold uppercase tracking-wider">Talent Stability</div>
              <h4 className="text-base font-bold font-headline text-slate-900 dark:text-white">Retention Ratio</h4>
              <p className="text-2xs text-slate-500 dark:text-gray-400">98.2% on-contract duration retention.</p>
            </div>
            
            {/* Emerald Radial Glow Matrix element */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100 dark:text-slate-800"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-accent-emerald"
                  strokeDasharray="98.2, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-xs font-extrabold font-mono text-accent-emerald">98.2%</span>
            </div>
          </div>

          {/* Card 4: Compliance Shield (Double Width, Standard Height) */}
          <div className="md:col-span-2 bento-glow-card rounded-3xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm relative z-10 overflow-hidden">
            <div className="space-y-1 max-w-md">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent-purple" />
                <span className="text-3xs text-slate-400 font-bold uppercase tracking-wider">Enterprise-Grade Architecture</span>
              </div>
              <h4 className="text-base font-bold font-headline text-slate-900 dark:text-white">Compliance & Sovereignty</h4>
              <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                Full intellectual property assignment, SOC2 compliance protocols, secure isolated workspaces, and complete local payroll coverage.
              </p>
            </div>
            
            {/* Grayscale trust certificates */}
            <div className="flex gap-2 flex-shrink-0">
              <span className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-950">SOC 2 TYPE II</span>
              <span className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-950">GDPR READY</span>
              <span className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-950">ISO 27001</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
