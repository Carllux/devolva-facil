import React from 'react';
import { Link } from 'react-router-dom'; // Importação essencial para rotas internas

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
    <footer className="bg-[#2D2856] text-gray-300 py-12 px-6 border-t border-indigo-900 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 pb-8 border-b border-indigo-900/50">
        
        {/* Coluna 1: Branding */}
        <div className="flex flex-col space-y-4">
          <Link to="/" onClick={scrollToTop} className="block self-start">
            <img 
              src="/assets/logo-branco.png" 
              alt="Logo DevolvaFácil" 
              className="h-16 w-auto opacity-95 hover:opacity-100 transition-opacity rounded-lg" 
            />
          </Link>
          <p className="text-indigo-200 font-medium">
            Descomplicamos a devolução para sua empresa vender mais. Uma solução inteligente do Grupo PostalGow.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 bg-green-900/40 text-green-300 text-xs font-bold px-2.5 py-1 rounded-full border border-green-800">
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

        {/* Coluna 3: Conformidade (USANDO <Link> + onClick para scroll) */}
        <div className="flex flex-col space-y-2.5">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Conformidade e Segurança</h4>
          <Link 
            to="/politica-de-privacidade" 
            onClick={scrollToTop}
            className="hover:text-white transition-colors font-medium"
          >
            Política de Privacidade (LGPD)
          </Link>
          <Link 
            to="/termos-de-uso" 
            onClick={scrollToTop}
            className="hover:text-white transition-colors font-medium"
          >
            Termos de Uso
          </Link>
          <Link 
            to="/seguranca-da-informacao" 
            onClick={scrollToTop}
            className="hover:text-white transition-colors font-medium"
          >
            Segurança da Informação
          </Link>
        </div>

        {/* Coluna 4: Contatos */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Contatos Oficiais</h4>
          <address className="not-italic text-indigo-200 font-medium space-y-1">
            <p>📍 Av. Barueri Mirim, 730 - Galpão 1</p>
            <p className="pl-5">Jardim Belval, Barueri - SP</p>
            <p className="pl-5">CEP: 06428-120</p>
          </address>
          <div className="pt-2 text-indigo-200 font-medium space-y-0.5">
            <p>📞 (11) 2155-9845</p>
            <p>✉️ contato@devolvafacil.com.br</p>
          </div>
        </div>
      </div>

      {/* Faixa de Direitos Autorais */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-xs text-indigo-300 font-medium gap-4 text-center lg:text-left">
        <p>© {currentYear} DevolvaFácil. Todos os direitos reservados.</p>
        <div className="bg-indigo-950/40 border border-indigo-900/50 px-4 py-2 rounded-lg max-w-2xl">
          <p className="leading-relaxed text-indigo-200">
            <strong>Razão Social:</strong> DEVOLVA FACIL LTDA | <strong>CNPJ:</strong> 10.426.959/0002-28 
          </p>
        </div>
      </div>
    </footer>
  );
}