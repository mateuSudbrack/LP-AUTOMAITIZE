import React, { useState } from 'react';
// FIX: Imported `CheckCircleIcon` which was missing.
import { SheetsIcon, EmailIcon, LogoIcon, SlackIcon, CalendarIcon, DatabaseIcon, FolderIcon, CheckCircleIcon } from './Icons';

type Department = 'sales' | 'finance' | 'ops';

const useCases: Record<Department, { title: string; challenge: string; solution: string; result: string; workflow: React.ReactNode; }> = {
  sales: {
    title: 'Acabe com a “Planilha de Leads”',
    challenge: 'Seus leads chegam por e-mail e formulários, mas acabam em um limbo de planilhas complexas. Sua equipe de vendas gasta um tempo precioso copiando e colando dados, em vez de focar no que realmente importa: converter esses leads em clientes.',
    solution: 'Nossa IA atua como um assistente incansável: ela centraliza todos os leads automaticamente, lê e-mails e formulários, extrai informações de contato, organiza tudo em uma planilha inteligente e notifica o vendedor responsável instantaneamente. Zero esforço manual.',
    result: 'Nenhum lead será esquecido. Aumento de 40% nas respostas em menos de 1 hora, transformando oportunidades perdidas em vendas concretas.',
    workflow: (
      <div className="flex items-center justify-center space-x-2 sm:space-x-4">
        <div className="flex flex-col items-center gap-1">
          <EmailIcon className="w-10 h-10 text-slate-500" />
          <span className="text-xs font-semibold">Novo Lead</span>
        </div>
        <div className="w-8 h-px bg-slate-300"></div>
        <div className="flex flex-col items-center gap-1">
          <LogoIcon className="w-12 h-12 text-blue-600" />
          <span className="text-xs font-semibold">IA Centraliza</span>
        </div>
        <div className="w-8 h-px bg-slate-300"></div>
        <div className="flex flex-col items-center gap-1">
          <SheetsIcon className="w-10 h-10 text-slate-500" />
          <span className="text-xs font-semibold">Organiza Planilha</span>
        </div>
         <div className="w-8 h-px bg-slate-300"></div>
        <div className="flex flex-col items-center gap-1">
          <SlackIcon className="w-10 h-10" />
          <span className="text-xs font-semibold">Notifica Vendedor</span>
        </div>
      </div>
    ),
  },
  finance: {
    title: 'Conciliação Financeira sem Erros',
    challenge: 'Todo mês, a conciliação financeira se torna uma maratona exaustiva. Juntar extratos bancários, PDFs de notas fiscais e planilhas de despesas manualmente abre margem para erros caros e perda de tempo valioso.',
    solution: 'Basta enviar seus documentos (extratos, notas, etc.) para a IA. Ela lê, extrai valores, datas e fornecedores, e preenche sua planilha de conciliação ou fluxo de caixa de forma 100% automática e à prova de erros. Sua paz de espírito financeira garantida.',
    result: 'Fechamento financeiro 5x mais rápido, com 100% de precisão nos dados e total conformidade. Mais tempo para análise estratégica, menos para retrabalho.',
    workflow: (
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
            <div className="flex flex-col items-center gap-1">
                <DatabaseIcon className="w-10 h-10 text-slate-500" />
                <span className="text-xs font-semibold">Extratos/PDFs</span>
            </div>
            <div className="w-8 h-px bg-slate-300"></div>
            <div className="flex flex-col items-center gap-1">
                <LogoIcon className="w-12 h-12 text-blue-600" />
                <span className="text-xs font-semibold">IA Extrai Dados</span>
            </div>
            <div className="w-8 h-px bg-slate-300"></div>
            <div className="flex flex-col items-center gap-1">
                <SheetsIcon className="w-10 h-10 text-slate-500" />
                <span className="text-xs font-semibold">Preenche Planilha</span>
            </div>
            <div className="w-8 h-px bg-slate-300"></div>
            <div className="flex flex-col items-center gap-1">
                <CheckCircleIcon className="w-10 h-10 text-green-500" />
                <span className="text-xs font-semibold">Conciliado!</span>
            </div>
        </div>
    ),
  },
  ops: {
    title: 'Onboarding de Clientes Padronizado',
    challenge: 'A chegada de um novo cliente deveria ser motivo de celebração, mas muitas vezes se transforma em um caos de e-mails e checklists manuais. Tarefas são esquecidas, a comunicação falha e a primeira impressão do cliente, tão crucial, fica seriamente comprometida.',
    solution: 'Com um simples e-mail de “venda fechada”, nossa IA orquestra todo o processo. Ela cria automaticamente a pasta do cliente, envia e-mails de boas-vindas personalizados e gera todas as tarefas iniciais na sua ferramenta de gestão de projetos. Tudo padronizado e sem falhas.',
    result: 'Onboarding impecável e sem falhas. Clientes encantados desde o primeiro contato, construindo uma relação de confiança e lealdade duradoura.',
    workflow: (
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
            <div className="flex flex-col items-center gap-1">
                <EmailIcon className="w-10 h-10 text-slate-500" />
                <span className="text-xs font-semibold">Venda Fechada</span>
            </div>
            <div className="w-8 h-px bg-slate-300"></div>
            <div className="flex flex-col items-center gap-1">
                <LogoIcon className="w-12 h-12 text-blue-600" />
                <span className="text-xs font-semibold">IA Inicia</span>
            </div>
            <div className="w-8 h-px bg-slate-300"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center space-x-2">
                <FolderIcon className="w-8 h-8 text-slate-500" />
                <EmailIcon className="w-8 h-8 text-slate-500" />
                <SheetsIcon className="w-8 h-8 text-slate-500" />
              </div>
              <span className="text-xs font-semibold">Cria Ativos</span>
            </div>
             <div className="w-8 h-px bg-slate-300"></div>
             <div className="flex flex-col items-center gap-1">
                <CheckCircleIcon className="w-10 h-10 text-green-500" />
                <span className="text-xs font-semibold">Processo OK</span>
            </div>
        </div>
    ),
  },
};

const TabButton: React.FC<{ title: string; isActive: boolean; onClick: () => void }> = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative z-10 px-5 sm:px-7 py-2.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-700 hover:text-blue-600'
    }`}
  >
    {title}
  </button>
);

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Department>('sales');
  const activeCase = useCases[activeTab];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Problemas Reais de Negócio. Soluções Inteligentes com IA.
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Chega de perder tempo e dinheiro com processos ineficientes. Veja como a Automação Inteligente resolve os desafios mais urgentes da sua empresa, entregando resultados que você pode medir.
        </p>
      </div>
      
      <div className="mt-16 flex justify-center items-center gap-3 sm:gap-4 bg-slate-100/70 rounded-full p-2 shadow-inner">
        <TabButton title="Vendas" isActive={activeTab === 'sales'} onClick={() => setActiveTab('sales')} />
        <TabButton title="Financeiro" isActive={activeTab === 'finance'} onClick={() => setActiveTab('finance')} />
        <TabButton title="Operações" isActive={activeTab === 'ops'} onClick={() => setActiveTab('ops')} />
      </div>

      <div className="mt-12 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 sm:p-12 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold text-red-500 text-sm uppercase tracking-wider mb-2">O Desafio</h4>
              <p className="text-slate-700 text-base">{activeCase.challenge}</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 text-sm uppercase tracking-wider mb-2">A Solução</h4>
              <p className="text-slate-700 text-base">{activeCase.solution}</p>
            </div>
            <div>
              <h4 className="font-bold text-green-600 text-sm uppercase tracking-wider mb-2">O Resultado</h4>
              <p className="text-slate-700 text-base font-semibold">{activeCase.result}</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h4 className="text-center font-semibold text-slate-600 text-lg mb-8">Fluxo de Automação Visualizado:</h4>
            {activeCase.workflow}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;