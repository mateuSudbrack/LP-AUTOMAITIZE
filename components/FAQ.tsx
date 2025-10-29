import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './Icons';

const faqData = [
  {
    question: "Quanto tempo leva para implementar a automação?",
    answer: "A implementação inicial pode ser feita em menos de duas semanas. Nossos especialistas trabalham com sua equipe para mapear processos e configurar os fluxos, garantindo uma transição suave e resultados rápidos."
  },
  {
    question: "Meus dados estarão seguros?",
    answer: "Absolutamente. A segurança é nossa prioridade máxima. Utilizamos criptografia de ponta-a-ponta, seguimos as melhores práticas de segurança do mercado e somos totalmente conformes com a LGPD."
  },
  {
    question: "Preciso de conhecimento técnico para usar a plataforma?",
    answer: "Não. Nossa plataforma é projetada para ser intuitiva. Você terá um dashboard claro para monitorar tudo, e nossa equipe cuidará de toda a configuração e manutenção dos fluxos de automação."
  },
  {
    question: "A automação funciona com os sistemas que eu já uso?",
    answer: "Sim. Nossa plataforma possui integrações nativas com centenas de ferramentas populares (CRMs, ERPs, etc.) e uma API flexível para conectar com sistemas customizados."
  }
];

const FaqItem: React.FC<{ item: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0 py-6">
      <dt>
        <button onClick={onClick} className="flex w-full items-center justify-between text-left text-slate-800 group">
          <span className="text-lg font-semibold leading-7 group-hover:text-blue-600 transition-colors">{item.question}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <MinusIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            ) : (
              <PlusIcon className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-4 pr-12 animate-fade-in-down">
          <p className="text-base leading-7 text-slate-600">{item.answer}</p>
        </dd>
      )}
    </div>
  );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="mx-auto max-w-7xl">
            <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Suas Dúvidas, Nossas Respostas.</h2>
                <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">Tudo o que você precisa saber para iniciar sua jornada de automação com confiança.</p>
            </div>
            <dl className="mt-16 space-y-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                {faqData.map((item, index) => (
                    <FaqItem 
                        key={index} 
                        item={item} 
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </dl>
        </div>
    </section>
  );
};

export default FAQ;