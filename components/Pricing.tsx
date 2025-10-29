import React from 'react';
import { CheckCircleIcon } from './Icons';

const includedFeatures = [
  'Integração completa com seus sistemas (CRM, ERP, etc.)',
  'Desenvolvimento de fluxos de automação ilimitados',
  'Dashboards de KPIs em tempo real, para decisões rápidas e inteligentes.',
  'Suporte técnico especializado e um gerente de conta dedicado, sempre à sua disposição.',
  'Segurança de nível empresarial e total conformidade com a LGPD, para sua tranquilidade.',
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-white to-blue-50 rounded-3xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Invista no Futuro. Colha Resultados Exponenciais.
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Chega de custos ocultos ou investimentos sem clareza. Com a Automa, você investe em uma parceria estratégica onde o valor gerado para o seu negócio é sempre superior ao seu investimento.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 text-center">Plano de Automação Personalizado</h3>
            <ul className="mt-8 space-y-5 text-slate-700 text-lg">
                {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-10 text-center bg-blue-50 p-8 rounded-2xl border border-blue-200">
                <p className="font-bold text-blue-800 text-xl">Seu investimento é diretamente ligado ao ROI que geramos. Pronto para ver o impacto real?</p>
                <p className="text-base text-blue-600 mt-2">Nosso compromisso é simples: o valor que você economiza e ganha será *sempre* maior que o seu investimento. Garantido.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;