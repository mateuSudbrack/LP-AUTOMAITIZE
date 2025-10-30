import React from 'react';


const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-lg font-bold text-slate-300 tracking-tight">
          Empresas que já usam
        </p>
        <div className="mt-10 flex justify-center items-center gap-8 sm:gap-12 flex-wrap">
          <img src="/google.svg" alt="Google" className="h-12" />
          <img src="/microsoft.svg" alt="Microsoft" className="h-12" />
          <img src="/aws.svg" alt="Amazon" className="h-12" />
          <img src="/apple.svg" alt="Apple" className="h-12" />
          <img src="/meta.svg" alt="Meta" className="h-12" />
          <img src="/netflix.svg" alt="Netflix" className="h-12" />
          <img src="/openai.svg" alt="OpenAI" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;