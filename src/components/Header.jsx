import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Por que escolher', href: '#solucao' },
    { label: 'Tecnologia', href: '#napratica' },
    { label: 'Na Mídia', href: '#namidia' },
    { label: 'Parceiros', href: '#parceiros' },
  ];

  // Função inteligente de navegação
  const handleNav = (hash) => {
    setIsMenuOpen(false); // Fecha menu mobile
    
    if (location.pathname !== '/') {
      // Se não está na home, navega para home
      navigate('/');
      // Aguarda o carregamento da Home para rolar até a seção
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Se já está na home, rola direto
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="shrink-0">
          <button onClick={() => { navigate('/'); window.scrollTo(0, 0); }} className="block">
            <img 
              src="/assets/logo.png" 
              alt="Logo DevolvaFácil" 
              className="h-12 md:h-14 w-auto drop-shadow-sm hover:drop-shadow-md transition-all" 
            />
          </button>
        </div>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <button 
              key={index} 
              onClick={() => handleNav(link.href)}
              className="text-gray-600 hover:text-blue-600 font-semibold text-sm transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.devolvafacil.com.br/" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
            Acessar Sistema
          </a>
          <a href="http://wa.link/mq496p" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-5 rounded-lg shadow-sm hover:shadow transition-all duration-200">
            Fale Conosco
          </a>
        </div>

        {/* MENU MOBILE TOGGLE */}
        <div className="flex md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`md:hidden bg-white border-b border-gray-200 absolute w-full left-0 transition-all duration-300 ${isMenuOpen ? 'top-20' : '-top-96'}`}>
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {navLinks.map((link, index) => (
            <button key={index} onClick={() => handleNav(link.href)} className="text-left text-gray-700 hover:text-blue-600 font-semibold">
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}