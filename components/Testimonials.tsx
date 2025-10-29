import React from 'react';
import { QuoteIcon } from './Icons';

const testimonials = [
  {
    quote: "A automação da Automaitize transformou a Na Hora Digital. Ganhamos agilidade e precisão, liberando nossa equipe para focar no que realmente importa: inovação e crescimento. É um investimento que se paga a cada dia.",
    name: "Leonardo Junior",
    title: "Fundador e Dono, Na Hora Digital",
  },
  {
    quote: "Com a Automaitize, a Whatstime otimizou processos críticos, resultando em um aumento significativo de produtividade e satisfação do cliente. A solução é robusta e o suporte é excepcional. Recomendo fortemente!",
    name: "Nicolly Lagares",
    title: "CEO, Whatstime",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          A Voz do Sucesso: Empresários que Já Sentem a Diferença.
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Não acredite apenas em nós. Veja o que líderes de mercado estão dizendo sobre como a Automação Inteligente da Automaitize revolucionou suas operações e resultados.
        </p>
      </div>
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <QuoteIcon className="w-10 h-10 text-blue-400 mb-6" />
              <blockquote className="text-slate-700 text-lg italic flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
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