import React, { useState } from 'react';
import { Sliders, Cpu, Activity, Zap, CheckCircle } from 'lucide-react';

export default function SquadEstimator({ onTriggerScheduler }) {
  const [domain, setDomain] = useState('DevOps');
  const [scale, setScale] = useState(4); // default 4 engineers
  const [timeline, setTimeline] = useState('Immediate (Under 48hr)');

  const domains = [
    { id: 'DevOps', label: 'DevOps & Cloud', desc: 'Kubernetes, Terraform, AWS/GCP' },
    { id: 'Java Full Stack', label: 'Java Full-Stack', desc: 'Spring Boot, React, Kafka' },
    { id: 'Salesforce', label: 'Salesforce', desc: 'Apex, LWC, Cloud Custom' },
    { id: 'SAP', label: 'SAP & ERP', desc: 'S/4HANA, ABAP, Fiori Core' },
    { id: 'AI/ML', label: 'AI, ML & Data', desc: 'PyTorch, Python pipelines' },
  ];

  const handleBook = () => {
    const config = {
      domain,
      scale: scale >= 10 ? 'Enterprise Initiative (10+)' : scale >= 4 ? `Core Team (${scale} Eng)` : `Specialist (${scale} Eng)`,
      timeline
    };
    onTriggerScheduler(config);
  };

  // Helper dynamic computations based on choices
  const getMatchSpeed = () => {
    if (timeline.includes('48hr')) return '99.2% Match in 36 Hours';
    if (timeline.includes('2 Weeks')) return 'Immediate Vetting matching (5 Days)';
    return 'Optimized Cohort delivery (12 Days)';
  };

  const getRetentionShield = () => {
    if (domain === 'Salesforce' || domain === 'SAP') return '98.5% Client Alignment Retention';
    return '98.1% Senior Engineer Retention';
  };

  return (
    <section id="estimator-section" className="py-20 bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-cyan/15 dark:bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
            Interactive Scaling Sandbox
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold font-headline tracking-tight text-slate-900 dark:text-white">
            Model Your Elastic Squad
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-gray-400">
            Configure your technical domain, scale size, and speed. Our real-time diagnostic engine models your talent pool match rate.
          </p>
        </div>

        {/* Modular Grid Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Configuration sliders (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark shadow-md">
            <div className="space-y-8">
              
              {/* Option 1: Select Tech Domain */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  1. Core Engineering Domain
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {domains.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setDomain(item.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        domain === item.id 
                          ? 'border-accent-cyan bg-accent-cyan/5 dark:bg-accent-cyan/10 ring-1 ring-accent-cyan' 
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30'
                      }`}
                    >
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</div>
                      <div className="text-xs text-slate-500 dark:text-gray-400 mt-1">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Choose Scale Size */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    2. Required Bench Strength (Squad Scale)
                  </label>
                  <span className="text-sm font-extrabold text-accent-cyan font-mono">
                    {scale >= 10 ? '10+ (Enterprise Initiative)' : `${scale} Senior Engineers`}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={scale} 
                  onChange={(e) => setScale(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-200 dark:bg-slate-800 appearance-none cursor-pointer accent-accent-cyan"
                />
                <div className="flex justify-between text-2xs text-slate-400 mt-2 font-mono">
                  <span>1 Specialist</span>
                  <span>4-6 Core Squad</span>
                  <span>10+ Enterprise Scale</span>
                </div>
              </div>

              {/* Option 3: Timeline Speed */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  3. Deployment Timeline
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Immediate (Under 48hr)', 'Next 2 Weeks', 'Standard Roadmap'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeline(time)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        timeline === time
                          ? 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-gray-400 bg-transparent hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Panel: Dynamic Diagnostic Output console (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-slate-900 text-gray-100 border border-slate-800 relative overflow-hidden shadow-xl">
            
            {/* Top aesthetic corner gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-accent-cyan animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400 font-mono">Scaling Diagnostics</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono uppercase">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Pool Connected
                </div>
              </div>

              {/* Diagnostic data specs */}
              <div className="space-y-4 font-mono text-xs">
                
                <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-slate-500">Selected Stack</span>
                  <span className="text-white font-bold">{domain} Specialists</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-slate-500">Estimated Match Time</span>
                  <span className="text-accent-cyan font-bold">{getMatchSpeed()}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-slate-500">Security / IP Protection</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-emerald" /> Fully Sandboxed
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-slate-500">Target Retention Ratio</span>
                  <span className="text-accent-purple font-semibold">{getRetentionShield()}</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                  <div className="text-accent-cyan font-semibold flex items-center gap-1 mb-1">
                    <Zap className="w-3.5 h-3.5" /> A A Solutions Guarantee
                  </div>
                  <div>Includes full IP assignments, SOC2 compliance coverage, and localized payroll management. Zero hiring risk.</div>
                </div>

              </div>
            </div>

            {/* Target Conversion CTA */}
            <div className="mt-8">
              <button
                onClick={handleBook}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan/85 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] cursor-pointer"
              >
                Secure Technical Feasibility Audit
              </button>
              <div className="mt-3 text-center text-[10px] text-slate-500 flex items-center justify-center gap-1.5 font-mono">
                <span>Frictionless Calendly Scheduler</span>
                <span>•</span>
                <span>Salesforce CRM Queue</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
