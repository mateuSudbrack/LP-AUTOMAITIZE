import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './Icons';

interface HeaderProps {
  whatsappLink: string;
}

const Header: React.FC<HeaderProps> = ({ whatsappLink }) => {
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
          <Link to="/" className="flex items-center gap-2">
            <LogoIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-800">Automaitize</span>
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white font-semibold py-2 px-5 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-px"
          >
            Agendar Consultoria Gratuita
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;