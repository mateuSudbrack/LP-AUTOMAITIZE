import React from 'react';
import { CheckCircleIcon } from './Icons';

const includedFeatures = [
  'Integração completa com seus sistemas (CRM, ERP, etc.)',
  'Desenvolvimento de fluxos de automação ilimitados',
  'Dashboard de KPIs em tempo real',
  'Suporte técnico e gerente de conta dedicado',
  'Segurança de nível empresarial e conformidade com a LGPD',
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-white to-blue-50 rounded-3xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Investimento Inteligente. Retorno Garantido.
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Nossa abordagem personalizada garante que você pague apenas pelo valor que realmente geramos para o seu negócio.
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
                <p className="font-bold text-blue-800 text-xl">Seu preço é baseado no ROI. Vamos conversar?</p>
                <p className="text-base text-blue-600 mt-2">Nosso compromisso: o valor economizado será sempre superior ao seu investimento.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;