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
  const whatsappNumber = "5561995196501"; // Seu número de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Automaitize.`;

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

      {/* Botão flutuante do WhatsApp */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C7.34 2 3.58 5.76 3.58 10.46c0 1.54.48 3.06 1.39 4.38L3 21l6.28-1.65c1.22.66 2.58 1.02 3.76 1.02 4.7 0 8.46-3.76 8.46-8.46S16.74 2 12.04 2zm3.58 14.33c-.19.31-.76.39-1.09.21-.32-.19-1.2-.58-1.4-.66-.2-.09-.35-.09-.5.09-.15.19-.58.66-.71.8-.14.14-.29.15-.54.06-.25-.09-.99-.36-1.89-1.16-.7-.61-1.17-1.3-1.31-1.55-.14-.25-.01-.39.08-.48.08-.09.19-.21.28-.32.09-.09.12-.19.19-.31.06-.12.03-.21-.01-.29-.06-.14-.5-.99-.68-1.38-.19-.39-.38-.32-.5-.32h-.48c-.14 0-.35.09-.54.29-.19.19-.71.69-.71 1.69 0 .99.73 1.96.83 2.09.1.14 1.43 2.18 3.47 3.06 1.4.61 1.75.58 2.33.58.58 0 1.17-.21 1.59-.43.41-.21.8-.76 1.02-1.16.21-.41.19-.76.14-.85-.06-.09-.19-.14-.32-.21z"/>
        </svg>
      </a>
    </div>
  );
};

      