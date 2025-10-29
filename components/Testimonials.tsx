import React from 'react';
import { QuoteIcon, InnovatechLogo, NexusLogo } from './Icons';

const testimonials = [
  {
    quote: "A automação de relatórios financeiros nos economizou 40 horas por mês. O ROI foi quase imediato. É uma ferramenta indispensável para nossa operação.",
    name: "Juliana Silva",
    title: "CFO, Innovatech",
    logo: InnovatechLogo,
  },
  {
    quote: "Conectamos nosso CRM e ERP em questão de horas. O processo de qualificação de leads agora é 90% mais rápido e nossos vendedores podem focar em fechar negócios.",
    name: "Ricardo Mendes",
    title: "Diretor de Vendas, Nexus Corp",
    logo: NexusLogo,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Quem já Transformou com a Automa.
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Histórias de sucesso de empresas que alcançaram novos patamares de eficiência e crescimento.
        </p>
      </div>
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => {
          const Logo = testimonial.logo;
          return (
            <div key={index} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <QuoteIcon className="w-10 h-10 text-blue-400 mb-6" />
              <blockquote className="text-slate-700 text-lg italic flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                <div className="w-16 h-10 flex items-center justify-start">
                    <Logo className="h-8 text-slate-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                </div>
              </footer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;