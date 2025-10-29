import React from 'react';
import { GoogleLogo, MicrosoftLogo, AmazonLogo, AppleLogo, MetaLogo, NetflixLogo, TeslaLogo, SamsungLogo } from './Icons';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-lg font-bold text-slate-300 tracking-tight">
          Empresas que já usam
        </p>
        <div className="mt-10 flex justify-center items-center gap-8 sm:gap-12 flex-wrap">
          <GoogleLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <MicrosoftLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <AmazonLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <AppleLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <MetaLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <NetflixLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <TeslaLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
          <SamsungLogo className="h-12 text-slate-400 hover:text-white transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;