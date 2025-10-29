import React, { useState, useEffect } from 'react';
import { LogoIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-sm shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">Automaitize</span>
          </div>
          <button className="bg-slate-900 text-white font-semibold py-2 px-5 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-px">
            Agendar Consultoria Gratuita
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;