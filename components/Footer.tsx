
import React from 'react';
import { LogoIcon } from './Icons';

interface FooterProps {
  whatsappLink: string;
}

const Footer: React.FC<FooterProps> = ({ whatsappLink }) => {
  return (
    <footer className="py-12 border-t border-slate-200 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <LogoIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-slate-800">Automaitize</span>
        </div>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Automaitize. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Produto</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Preços</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contato</a>
            <a href={whatsappLink} aria-label="WhatsApp" className="text-slate-400 hover:text-green-500 transition-colors"><img src="/whatsapp.svg" alt="WhatsApp" className="h-16 w-16" /></a> {/* Novo link do WhatsApp */}



        </div>
      </div>
    </footer>
  );
};

export default Footer;
