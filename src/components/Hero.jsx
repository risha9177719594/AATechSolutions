import React, { useState } from 'react';
import { ArrowRight, Play, Database, Server, Cpu, Cloud, Settings } from 'lucide-react';

export default function Hero({ onTriggerScheduler }) {
  const [activeNode, setActiveNode] = useState(null);

  const handleCTA = () => {
    onTriggerScheduler({
      domain: 'Cloud / General Tech',
      scale: 'Core Squad',
      timeline: 'Immediate'
    });
  };

  // Node structures for the pooling visualizer
  const nodes = [
    { id: 'core', x: 200, y: 180, label: 'A A Active Pool', color: '#06B6D4', icon: Cpu },
    { id: 'devops', x: 80, y: 80, label: 'DevOps Bench', color: '#8B5CF6', icon: Settings },
    { id: 'java', x: 320, y: 80, label: 'Java Full Stack', color: '#8B5CF6', icon: Server },
    { id: 'sap', x: 60, y: 280, label: 'SAP Enterprise', color: '#10B981', icon: Database },
    { id: 'cloud', x: 340, y: 280, label: 'Cloud Infrastructure', color: '#10B981', icon: Cloud }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-light dark:bg-brand-dark transition-colors duration-300 mesh-backdrop-light dark:mesh-backdrop">
      
      {/* Absolute design background items */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent-cyan/5 dark:bg-accent-cyan/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent-emerald/5 dark:bg-accent-emerald/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Core Value Proposition Copywriting (7 Columns) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-brand-glassDark border border-slate-200 dark:border-brand-glassDark text-xs font-semibold text-slate-800 dark:text-gray-200">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              Modern Talent Infrastructure
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Infrastructure Scales Dynamically. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald">
                Now, Your Teams Can Too.
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-gray-400 font-normal leading-relaxed">
              Deploy pre-vetted, top-tier engineering squads and enterprise consultants in under 48 hours. Secure, SOC2-ready compliance frameworks, integrated directly into your local workflows.
            </p>

            {/* CTA Array */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleCTA}
                className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm tracking-wide uppercase hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-cyan-500/5 dark:hover:shadow-white/5 active:scale-[0.98]"
              >
                Book Feasibility Assessment <ArrowRight className="w-4 h-4 text-accent-cyan" />
              </button>

              <a
                href="#vetting-grid"
                className="px-8 py-4 rounded-xl border border-slate-200 dark:border-brand-glassDark text-slate-700 dark:text-gray-300 font-bold text-sm tracking-wide uppercase hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current text-accent-emerald" /> Explore Vetting Protocol
              </a>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200 dark:border-brand-glassDark">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-headline text-slate-900 dark:text-white">48hr</div>
                <div className="text-3xs sm:text-2xs uppercase tracking-wider text-slate-500 dark:text-gray-400 mt-1 font-semibold">Deployment Bench</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-headline text-slate-900 dark:text-white">98.2%</div>
                <div className="text-3xs sm:text-2xs uppercase tracking-wider text-slate-500 dark:text-gray-400 mt-1 font-semibold">Retention SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-headline text-slate-900 dark:text-white">SOC2</div>
                <div className="text-3xs sm:text-2xs uppercase tracking-wider text-slate-500 dark:text-gray-400 mt-1 font-semibold">Enterprise Ready</div>
              </div>
            </div>

          </div>

          {/* Right Block: Dynamic SVG Pooling Node Visualizer (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient visualizer backdrop */}
            <div className="absolute inset-0 bg-slate-900/5 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-3xs"></div>
            
            <svg 
              viewBox="0 0 400 360" 
              className="w-full max-w-md relative z-10 drop-shadow-2xl"
            >
              {/* Connecting glowing neon paths */}
              {nodes.slice(1).map((node) => (
                <path
                  key={node.id}
                  d={`M ${nodes[0].x} ${nodes[0].y} Q ${(nodes[0].x + node.x) / 2 + 20} ${(nodes[0].y + node.y) / 2 - 20} ${node.x} ${node.y}`}
                  fill="none"
                  stroke={activeNode === node.id ? 'url(#activeGlow)' : 'var(--border-glow)'}
                  strokeWidth={activeNode === node.id ? 2.5 : 1.5}
                  strokeDasharray="4 4"
                  className="transition-all duration-300"
                />
              ))}

              {/* Gradient patterns for paths */}
              <defs>
                <linearGradient id="activeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              {/* Node Circles */}
              {nodes.map((node) => {
                const IconComponent = node.icon;
                const isCore = node.id === 'core';
                return (
                  <g 
                    key={node.id}
                    className="cursor-pointer group"
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={handleCTA}
                  >
                    {/* Ring highlight glows */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isCore ? 34 : 26}
                      fill={theme === 'dark' ? '#111622' : '#FFFFFF'}
                      stroke={activeNode === node.id ? node.color : 'var(--border-subtle)'}
                      strokeWidth={2}
                      className="transition-all duration-300 shadow-lg group-hover:scale-105"
                    />
                    
                    {/* Glowing outer core indicator ring */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isCore ? 30 : 22}
                      fill={node.color}
                      fillOpacity={activeNode === node.id ? 0.2 : 0.08}
                      className="transition-all duration-300 animate-pulse-slow"
                    />

                    {/* Node Mini icon */}
                    <g transform={`translate(${node.x - 9}, ${node.y - 9})`}>
                      <IconComponent className="w-[18px] h-[18px]" style={{ color: node.color }} />
                    </g>

                    {/* Dynamic node tag labels */}
                    <rect
                      x={node.x - 65}
                      y={node.y + (isCore ? 40 : 32)}
                      width={130}
                      height={22}
                      rx={6}
                      fill={theme === 'dark' ? '#171E30' : '#F3F4F6'}
                      stroke="var(--border-subtle)"
                      strokeWidth={1}
                      className="opacity-90 transition-all duration-300 group-hover:stroke-accent-cyan"
                    />
                    <text
                      x={node.x}
                      y={node.y + (isCore ? 54 : 46)}
                      textAnchor="middle"
                      className="text-[10px] font-bold text-slate-800 dark:text-gray-200 pointer-events-none font-mono"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
}
