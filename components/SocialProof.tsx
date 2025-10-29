import React from 'react';
import { InnovatechLogo, NexusLogo, QuantumLogo, StellarLogo } from './Icons';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-lg font-bold text-slate-300 tracking-tight">
          Parceiros que Confiam na Automação Inteligente
        </p>
        <div className="mt-10 flex justify-center items-center gap-8 sm:gap-12 flex-wrap">
          <InnovatechLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <NexusLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <QuantumLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <StellarLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;