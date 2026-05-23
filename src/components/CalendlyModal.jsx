import React, { useState } from 'react';
import { X, Calendar, Clock, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose, selectedConfig }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'CTO'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  // Pre-configured slots for our premium clients
  const timeSlots = [
    "09:30 AM (EST)", "11:00 AM (EST)", "02:00 PM (EST)", "04:30 PM (EST)"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl glass-card border border-slate-700/50 shadow-2xl bg-brand-cardDark text-gray-100">
        
        {/* Top Glow accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald"></div>

        {/* Modal Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-slate-800/50 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {step === 1 ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/20">
                  Priority Technical Feasibility Discovery
                </span>
                <h3 className="mt-3 text-2xl font-bold font-headline tracking-tight text-white">
                  Schedule Your Technical Audit
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Select a 15-minute diagnostic slot with a Senior Delivery Architect. We will evaluate technical alignment for your squad specifications.
                </p>
              </div>

              {/* Dynamic Specifications Summary Card */}
              {selectedConfig && (
                <div className="p-4 mb-6 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Configured Deployment Profile</div>
                    <div className="mt-1 text-base font-bold text-white">
                      {selectedConfig.scale} Squad • {selectedConfig.domain} experts
                    </div>
                    <div className="text-xs text-accent-cyan font-mono mt-0.5">
                      Delivery Target: {selectedConfig.timeline}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    <Database className="w-4 h-4 text-accent-emerald animate-pulse" />
                    <span className="text-xs text-slate-300 font-medium">Salesforce Queue Active</span>
                  </div>
                </div>
              )}

              {/* Input Form & Calendar Mock */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Work Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enterprise Technologies Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Your Role</label>
                    <select 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    >
                      <option value="CTO">CTO / VP of Engineering</option>
                      <option value="Engineering Manager">Engineering Manager</option>
                      <option value="HR Head / Recruiting">HR Head / Talent Acquisition</option>
                      <option value="Founder / CEO">Startup Founder / CEO</option>
                      <option value="Consultant">Enterprise Architect / PM</option>
                    </select>
                  </div>
                </div>

                {/* Micro Calendly mock slots */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Available Slots (Next business day)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        type="submit"
                        className="py-2.5 px-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-accent-cyan text-xs text-slate-300 hover:text-white text-center font-medium transition-all cursor-pointer hover:bg-slate-800/30"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </form>

              {/* Compliance & Integration Notice footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent-emerald" /> 
                  SOC2-Compliant IP Data Encryption
                </span>
                <span className="hidden sm:inline">
                  Direct Salesforce Lead Routing Active
                </span>
              </div>
            </div>
          ) : (
            /* Success screen */
            <div className="py-12 text-center">
              <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/20">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-white mb-2">
                Discovery Session Confirmed!
              </h3>
              <p className="max-w-md mx-auto text-slate-400 text-sm mb-8">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. A calendar invitation has been sent to <span className="text-white font-semibold">{formData.email}</span>. A Senior Architect will review your custom squad parameters in advance.
              </p>

              {/* Live Salesforce/Pipeline sync visualization */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left space-y-3">
                <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase border-b border-slate-800/80 pb-2 flex justify-between">
                  <span>Backend Integration Audit</span>
                  <span className="text-accent-emerald">Synced</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-mono">Lead ID</span>
                  <span className="text-slate-300 font-mono uppercase">SF-L-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-mono">Account Designation</span>
                  <span className="text-slate-300 font-medium">{formData.company}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-mono">Vetting Allocation</span>
                  <span className="text-slate-300 font-medium">{selectedConfig ? selectedConfig.domain : 'DevOps'} Bench Queue</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-8 px-6 py-2.5 rounded-full bg-slate-800 border border-slate-700/80 hover:bg-slate-700 text-xs text-white font-semibold transition-colors"
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
