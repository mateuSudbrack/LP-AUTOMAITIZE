import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Pronto para Revolucionar Sua Produtividade?
        </h2>
        <p className="mt-6 text-xl max-w-3xl mx-auto opacity-90">
          Não deixe sua equipe presa a tarefas manuais. Agende uma consultoria gratuita e descubra o poder da automação inteligente.
        </p>
        <div className="mt-10">
          <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-white/40 transform hover:-translate-y-1 text-lg">
            Agendar Consultoria Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;