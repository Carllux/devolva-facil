import React from 'react';
import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-6 border-t border-gray-900 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 pb-8 border-b border-gray-900">
        
        {/* Coluna 1: Branding e Identidade */}
        <div className="flex flex-col space-y-4">
          <AnimatedLogo 
            className="h-16 w-auto self-start opacity-95 hover:opacity-100 transition-opacity" 
            textColor="fill-white" 
          />
          <p className="text-gray-500 font-medium">
            Descomplicamos a devolução para sua empresa vender mais. Uma solução inteligente do Grupo PostalGow.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 bg-green-950/50 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-900/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Ambiente Seguro (SSL)
            </span>
          </div>
        </div>

        {/* Coluna 2: Navegação Institucional */}
        <div className="flex flex-col space-y-2.5">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">
            Navegação
          </h4>
          <a href="#solucao" className="hover:text-white transition-colors font-medium">Por que escolher</a>
          <a href="#napratica" className="hover:text-white transition-colors font-medium">Tecnologia</a>
          <a href="#namidia" className="hover:text-white transition-colors font-medium">Na Mídia</a>
          <a href="http://wa.link/mq496p" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium text-green-400">
            Fale Conosco
          </a>
        </div>

        {/* Coluna 3: Segurança, Privacidade e LGPD */}
        <div className="flex flex-col space-y-2.5">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">
            Conformidade e Segurança
          </h4>
          <a href="/politica-de-privacidade" className="hover:text-white transition-colors font-medium">
            Política de Privacidade (LGPD)
          </a>
          <a href="/termos-de-uso" className="hover:text-white transition-colors font-medium">
            Termos de Uso
          </a>
          <a href="/seguranca-da-informacao" className="hover:text-white transition-colors font-medium">
            Segurança da Informação
          </a>
          <span className="text-xs text-gray-600 font-medium pt-1">
            Data Protection Officer: dpo@postalgow.com.br
          </span>
        </div>

        {/* Coluna 4: Contato e Localização */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">
            Contatos Oficiais
          </h4>
          <address className="not-italic text-gray-500 font-medium space-y-1">
            <p>📍 Av. Barueri Mirim, 730 - Galpão 1</p>
            <p className="pl-5">Jardim Belval, Barueri - SP</p>
            <p className="pl-5">CEP: 06428-120</p>
          </address>
          <div className="pt-2 text-gray-400 font-medium space-y-0.5">
            <p>📞 (11) 2155-9845</p>
            <p>✉️ contato@devolvafacil.com.br</p>
          </div>
        </div>

      </div>

      {/* Faixa de Direitos Autorais e Dados Fiscais Obrigatórios */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500 font-medium gap-4 text-center lg:text-left">
        <div>
          <p>© {currentYear} DevolvaFácil. Todos os direitos reservados.</p>
        </div>
        
        {/* Exibição explícita do CNPJ e Razão Social para máxima transparência em pesquisas */}
        <div className="bg-gray-900/40 border border-gray-900 px-4 py-2 rounded-lg max-w-2xl">
          <p className="leading-relaxed">
            <strong>Razão Social:</strong> DEVOLVA FACIL LTDA | <strong>CNPJ:</strong> 10.426.959/0002-28 
            <span className="hidden lg:inline"> | </span>
            <br className="lg:hidden" />
            <strong>Inscrição Estadual:</strong> Isento
          </p>
        </div>
      </div>
    </footer>
  );
}