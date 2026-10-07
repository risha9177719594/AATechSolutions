import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TechnologyExpertise from './components/sections/TechnologyExpertise';
import StaffingSolutions from './components/sections/StaffingSolutions';
import WhyAATech from './components/sections/WhyAATech';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-light text-text-dark font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TechnologyExpertise />
        <StaffingSolutions />
        <WhyAATech />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
