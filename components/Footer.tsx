
import React from 'react';
import { LogoIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <LogoIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-slate-800">Automa</span>
        </div>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Automa. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Produto</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Preços</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contato</a>
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-blue-500 transition-colors"><TwitterIcon className="h-6 w-6" /></a>
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-700 transition-colors"><LinkedinIcon className="h-6 w-6" /></a>
            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-blue-800 transition-colors"><FacebookIcon className="h-6 w-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
