import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para o dropdown de parceiros
  const navigate = useNavigate();
  const location = useLocation();

  // Fecha o menu mobile se a rota mudar
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Por que escolher', href: '/#solucao', isHash: true },
    { label: 'Tecnologia', href: '/#napratica', isHash: true },
    { label: 'Na Mídia', href: '/#namidia', isHash: true },
  ];

  const handleNav = (path) => {
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      const hash = path.replace('/', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="shrink-0">
          <button onClick={() => handleNav('/')} className="block">
            <img 
              src="/assets/logo.png" 
              alt="Logo DevolvaFácil" 
              className="h-16 md:h-20 w-auto drop-shadow-sm hover:drop-shadow-md transition-all" 
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

          {/* DROPDOWN PARCEIROS (Desktop) */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-semibold text-sm transition-colors py-2">
              Parceiros
              <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Menu Suspenso */}
            <div className={`absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-2 transition-all duration-200 origin-top ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <Link 
                to="/parceiros/orange-envios" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium"
              >
                Orange Envios
              </Link>
              <Link 
                to="/parceiros/postalgow" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-[#6156a2] font-medium"
              >
                PostalGOW
              </Link>
            </div>
          </div>
        </nav>

        {/* CTAs DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.devolvafacil.com.br/" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
            Acessar Sistema
          </a>
          <a href="https://wa.me/5511969176483?text=Fale%20conosco!" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-5 rounded-lg shadow-sm hover:shadow transition-all duration-200">
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
      <div className={`md:hidden bg-white border-b border-gray-200 absolute w-full left-0 transition-all duration-300 ${isMenuOpen ? 'top-20' : '-top-[500px]'}`}>
        <div className="px-6 py-6 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <button key={index} onClick={() => handleNav(link.href)} className="text-left text-gray-700 hover:text-blue-600 font-semibold">
              {link.label}
            </button>
          ))}
          
          {/* DROPDOWN PARCEIROS (Mobile) */}
          <div className="border-t border-gray-100 pt-4 pb-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Parceiros</p>
            <Link to="/parceiros/orange-envios" className="block text-gray-700 hover:text-orange-600 font-semibold mb-3 pl-2">
              Orange Envios
            </Link>
            <Link to="/parceiros/postalgow" className="block text-gray-700 hover:text-[#6156a2] font-semibold pl-2">
              PostalGOW
            </Link>
          </div>
          
          <hr className="border-gray-100 my-2" />
          <a href="https://app.devolvafacil.com.br/" className="text-center text-gray-700 font-bold py-2">
            Acessar Sistema
          </a>
          <a href="https://wa.me/5511969176483?text=Fale%20conosco!" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white text-center font-bold py-3 px-5 rounded-lg">
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}