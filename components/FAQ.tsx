import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './Icons';

const faqData = [
  {
    question: "Quanto tempo leva para implementar a automação?",
    answer: "Nossa meta é agilidade. A implementação inicial pode ser concluída em menos de duas semanas. Nossos especialistas mergulham nos seus processos, configuram tudo e garantem uma transição tão suave que você mal perceberá, apenas os resultados rápidos."
  },
  {
    question: "Meus dados estarão seguros?",
    answer: "Absolutamente! A segurança dos seus dados é a nossa obsessão. Utilizamos criptografia de ponta-a-ponta, seguimos rigorosamente as melhores práticas globais e somos 100% conformes com a LGPD. Seus dados estão em um cofre digital."
  },
  {
    question: "Preciso de conhecimento técnico para usar a plataforma?",
    answer: "De forma alguma! Nossa plataforma foi desenhada para ser incrivelmente intuitiva. Você terá um dashboard claro para acompanhar tudo, e o melhor: nossa equipe de especialistas cuida de toda a configuração, manutenção e otimização dos seus fluxos de automação. Você foca no negócio, nós cuidamos da tecnologia."
  },
  {
    question: "A automação funciona com os sistemas que eu já uso?",
    answer: "Com certeza! Nossa plataforma é uma verdadeira camaleoa. Possuímos integrações nativas com centenas de ferramentas populares (CRMs, ERPs, etc.) e uma API flexível que nos permite conectar com praticamente qualquer sistema customizado que você já utilize. Sem dores de cabeça na compatibilidade."
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
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Perguntas Frequentes: Clareza para Sua Decisão.</h2>
                <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">Entenda cada detalhe e sinta-se totalmente seguro para dar o próximo passo rumo à automação inteligente do seu negócio.</p>
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