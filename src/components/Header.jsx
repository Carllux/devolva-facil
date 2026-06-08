import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Links de navegação estruturados
  const navLinks = [
    { label: 'Por que escolher', href: '#solucao' },
    { label: 'Tecnologia', href: '#napratica' },
    { label: 'Na Mídia', href: '#namidia' },
    { label: 'Parceiros', href: '#parceiros' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO ESTÁTICA */}
        <div className="shrink-0">
          <a href="/" className="block">
            <img 
              src="/public/assets/logo.jpg" 
              alt="Logo DevolvaFácil" 
              className="h-12 md:h-14 w-auto drop-shadow-sm hover:drop-shadow-md transition-all" 
            />
          </a>
        </div>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-gray-600 hover:text-blue-600 font-semibold text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BOTÕES DE AÇÃO / CTA (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://app.devolvafacil.com.br/" 
            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Acessar Sistema
          </a>
          <a 
            href="http://wa.link/mq496p" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
          >
            Fale Conosco
          </a>
        </div>

        {/* BOTÃO DO MENU HAMBÚRGUER (MOBILE) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU RETRÁTIL (MOBILE) */}
      <div 
        className={`md:hidden bg-white border-b border-gray-200 absolute w-full left-0 transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'top-20 opacity-100 visible' : '-top-96 opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-semibold text-base transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-gray-100 my-2" />
          <a 
            href="https://app.devolvafacil.com.br/"
            className="text-center text-gray-700 font-bold hover:text-blue-600 transition-colors py-2"
          >
            Acessar Sistema
          </a>
          <a 
            href="http://wa.link/mq496p" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 px-5 rounded-lg shadow-sm"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
