import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import UseCases from './components/UseCases';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased relative overflow-x-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-cyan-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      
      <Header />
      <main>
        <Hero />
        <AnimatedSection>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection>
          <UseCases />
        </AnimatedSection>
        <AnimatedSection>
          <Benefits />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
        <AnimatedSection>
          <CTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;