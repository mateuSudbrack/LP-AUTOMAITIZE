
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[700px] overflow-hidden flex items-center justify-center text-white">
      <video
        src="/grok-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Cansado de Ver Sua Equipe Perdendo Tempo com o Básico?
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          Sua equipe gasta tempo demais com tarefas repetitivas e burocracia? Libere o potencial máximo do seu time para focar em crescimento e inovação, com a inteligência artificial trabalhando por você.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Começar Minha Transformação!
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Descobrir Como Funciona <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;