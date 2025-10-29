import React from 'react';
import { EfficiencyIcon, ShieldIcon, GrowthIcon, DataIcon } from './Icons';

const benefits = [
  {
    icon: EfficiencyIcon,
    title: 'Eficiência Máxima',
    description: 'Reduza em até 80% o tempo gasto em tarefas manuais e foque sua equipe em atividades que geram receita.'
  },
  {
    icon: ShieldIcon,
    title: 'Redução de Erros',
    description: 'Zere os erros de digitação em conciliações e relatórios. Garanta dados 100% confiáveis para suas decisões.'
  },
  {
    icon: GrowthIcon,
    title: 'Escalabilidade Inteligente',
    description: 'Escale suas vendas e operações sem aumentar a equipe na mesma proporção. Faça mais com o time que você já tem.'
  },
  {
    icon: DataIcon,
    title: 'Decisões Baseadas em Dados',
    description: 'Transforme dados brutos em inteligência de negócio. Tenha dashboards claros para decisões rápidas e assertivas.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-white rounded-3xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Vantagens Incomparáveis. Crescimento Sem Limites.
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Descubra como a Automa impulsiona sua empresa, liberando sua equipe para focar no que realmente importa.
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