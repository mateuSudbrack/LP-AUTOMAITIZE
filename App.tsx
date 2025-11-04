import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CadastroParceiro from './pages/CadastroParceiro';

const MainPage: React.FC = () => {
  return (
    <>
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
    </>
  );
}

const App: React.FC = () => {
  const whatsappNumber = "5561995196501"; // Seu número de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Automaitize.`;

  return (
    <Router>
      <div className="bg-slate-50 min-h-screen text-slate-800 antialiased relative overflow-x-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-cyan-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>

        <Header whatsappLink={whatsappLink} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cadastroparceiro" element={<CadastroParceiro />} />
        </Routes>
        <Footer whatsappLink={whatsappLink} />

        {/* Botão flutuante do WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
        </a>
      </div>
    </Router>
  );
};

export default App;