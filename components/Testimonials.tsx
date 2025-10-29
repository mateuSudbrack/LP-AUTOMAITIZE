import React from 'react';
import { QuoteIcon, InnovatechLogo, NexusLogo } from './Icons';

const testimonials = [
  {
    quote: "Antes da Automaitize, perdíamos 40 horas mensais em relatórios financeiros. Agora, com a automação, o ROI foi instantâneo. É mais que uma ferramenta, é um parceiro estratégico que nos dá tempo para pensar no futuro.",
    name: "Juliana Silva",
    title: "CFO, Innovatech",
    logo: InnovatechLogo,
  },
  {
    quote: "A integração do nosso CRM e ERP com a Automaitize foi surpreendentemente rápida. Nossos vendedores, antes sobrecarregados, agora qualificam leads 90% mais rápido e dedicam seu tempo a fechar negócios, não a tarefas manuais. O impacto nas vendas é visível.",
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
          A Voz do Sucesso: Empresários que Já Sentem a Diferença.
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Não acredite apenas em nós. Veja o que líderes de mercado estão dizendo sobre como a Automação Inteligente da Automaitize revolucionou suas operações e resultados.
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