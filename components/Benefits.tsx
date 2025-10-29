import React from 'react';
import { EfficiencyIcon, ShieldIcon, GrowthIcon, DataIcon } from './Icons';

const benefits = [
  {
    icon: EfficiencyIcon,
    title: 'Eficiência Máxima',
    description: 'Libere sua equipe de até 80% das tarefas manuais repetitivas. Direcione o foco e a energia para o que realmente impulsiona sua receita e inovação.'
  },
  {
    icon: ShieldIcon,
    title: 'Redução de Erros',
    description: 'Elimine de vez os erros humanos em conciliações e relatórios. Tenha a certeza de dados 100% precisos para decisões estratégicas e seguras.'
  },
  {
    icon: GrowthIcon,
    title: 'Escalabilidade Inteligente',
    description: 'Expanda suas vendas e operações sem a necessidade de contratar mais. Sua equipe atual fará muito mais, com a inteligência da automação ao seu lado.'
  },
  {
    icon: DataIcon,
    title: 'Decisões Baseadas em Dados',
    description: 'Converta dados complexos em insights claros e acionáveis. Tenha dashboards intuitivos que guiam suas decisões para um futuro mais lucrativo.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-white rounded-3xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Resultados Reais que Transformam Seu Negócio.
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Pare de sonhar com o crescimento e comece a vivê-lo. Veja como a Automação Inteligente da Automa libera o potencial máximo da sua equipe e do seu negócio.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white shadow-md">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="mt-6 font-bold text-slate-900 text-xl">{benefit.title}</h3>
                <p className="mt-3 text-slate-600 text-base">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;