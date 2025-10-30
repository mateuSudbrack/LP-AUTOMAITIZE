import React from 'react';


const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-lg font-bold text-slate-300 tracking-tight">
          Empresas que já usam
        </p>
        <div className="mt-10 flex justify-center items-center gap-8 sm:gap-12 flex-wrap">
          <img src="https://pngimg.com/uploads/google/google_PNG19636.png" alt="Google" className="h-12" />
          <img src="https://pngimg.com/uploads/microsoft/microsoft_PNG13.png" alt="Microsoft" className="h-12" />
          <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector-1.png" alt="Amazon" className="h-12" />
          <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-transparent-background-1.png" alt="Apple" className="h-12" />
          <img src="https://pngimg.com/uploads/meta/meta_PNG5.png" alt="Meta" className="h-12" />
          <img src="https://pngimg.com/uploads/netflix/netflix_PNG15.png" alt="Netflix" className="h-12" />
          <img src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png" alt="Tesla" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;