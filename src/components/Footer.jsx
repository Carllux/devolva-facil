import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Função para forçar o scroll para o topo de forma suave
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#6156a2] text-gray-200 py-12 px-6 border-t border-[#4a4282] text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 pb-8 border-b border-[#4a4282]/50">
        
        {/* Coluna 1: Branding */}
        <div className="flex flex-col space-y-4">
          <Link to="/" onClick={scrollToTop} className="block self-start">
            <img 
              src="/assets/logo-branco.png" 
              alt="Logo DevolvaFácil" 
              className="h-16 w-auto opacity-95 hover:opacity-100 transition-opacity rounded-lg" 
            />
          </Link>
          <p className="text-gray-100 font-medium">
            Descomplicamos a devolução para sua empresa vender mais. Uma solução inteligente do Grupo PostalGow.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 bg-[#4a4282]/40 text-green-300 text-xs font-bold px-2.5 py-1 rounded-full border border-[#4a4282]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Ambiente Seguro (SSL)
            </span>
          </div>
        </div>

        {/* Coluna 2: Navegação Institucional */}
        <div className="flex flex-col space-y-2.5">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Navegação</h4>
          <a href="/#solucao" className="hover:text-white transition-colors font-medium">Por que escolher</a>
          <a href="/#napratica" className="hover:text-white transition-colors font-medium">Tecnologia</a>
          <a href="/#namidia" className="hover:text-white transition-colors font-medium">Na Mídia</a>
          <a href="http://wa.link/mq496p" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium text-green-300">
            Fale Conosco
          </a>
        </div>

        {/* Coluna 3: Conformidade */}
        <div className="flex flex-col space-y-2.5">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Conformidade e Segurança</h4>
          <Link to="/politica-de-privacidade" onClick={scrollToTop} className="hover:text-white transition-colors font-medium">
            Política de Privacidade (LGPD)
          </Link>
          <Link to="/termos-de-uso" onClick={scrollToTop} className="hover:text-white transition-colors font-medium">
            Termos de Uso
          </Link>
          <Link to="/seguranca-da-informacao" onClick={scrollToTop} className="hover:text-white transition-colors font-medium">
            Segurança da Informação
          </Link>
        </div>

        {/* Coluna 4: Contatos, Redes Sociais e Mapa */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Contatos Oficiais</h4>
            <address className="not-italic text-gray-100 font-medium space-y-1">
              <p>📍 Av. Barueri Mirim, 730 - Galpão 1</p>
              <p className="pl-5">Jardim Belval, Barueri - SP</p>
              <p className="pl-5">CEP: 06422-140</p>
            </address>
            <div className="pt-1 text-gray-100 font-medium space-y-0.5">
              <p>📞 (11) 2155-9845</p>
              <p>✉️ contato@devolvafacil.com.br</p>
            </div>
          </div>

          <div className="pt-1 flex items-center gap-4">
            <a href="https://www.linkedin.com/company/devolva-f%C3%A1cil/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white hover:scale-110 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.065-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://www.instagram.com/devolvafaciloficial/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white hover:scale-110 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
          </div>

          <div className="pt-3">
            <a href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x94cf037a356f4225:0xe6b57d52bfae7e99!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF" target="_blank" rel="noopener noreferrer" className="block relative w-full h-24 rounded-lg overflow-hidden border border-[#4a4282] group">
              <iframe title="Mapa" src="https://maps.google.com/maps?q=Av.%20Barueri%20Mirim,%20730,%20Barueri%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-full pointer-events-none grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" loading="lazy"></iframe>
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior centralizado */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center pt-8 border-t border-[#4a4282]/50 pb-24">
        
        <p className="text-xs text-gray-400 font-medium">
          © {currentYear} DevolvaFácil. Todos os direitos reservados.
        </p>

        <div className="bg-black/20 border border-white/10 px-6 py-3 rounded-xl shadow-inner max-w-2xl backdrop-blur-sm text-center">
          <p className="text-xs text-gray-200 leading-relaxed">
            <span className="font-bold text-white uppercase tracking-wider mr-2">
              Razão Social:
            </span>
            DEVOLVA FACIL LTDA 
            <span className="mx-2 text-white/30">|</span>
            <span className="font-bold text-white uppercase tracking-wider mr-2">
              CNPJ:
            </span>
            10.426.959/0001-47
          </p>
        </div>
      </div>
    </footer>
  );
}