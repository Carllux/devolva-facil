import React from 'react';

export default function Technology() {
  return (
    <section className="py-20 px-6 bg-blue-50" id="napratica">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Bloco de Texto */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h5 className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Tecnologia DevolvaFácil
          </h5>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            É fácil de usar o DevolvaFácil para sua Gestão de Devoluções.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A plataforma é <strong>intuitiva</strong> e leva alguns segundos para consultar os melhores <strong>postos autorizados</strong> para devolução de <strong>forma automática.</strong>
          </p>
          <div className="pt-4">
            <a 
              href="http://wa.link/mq496p" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors"
            >
              Ver na Prática
            </a>
          </div>
        </div>

        {/* Bloco de Imagens / Mockup */}
        <div className="w-full lg:w-1/2 relative">
          {/* A imagem principal do dashboard do seu Elementor */}
          <img 
            src="/assets/tela_login.png" 
            alt="Interface do Sistema Devolva Fácil" 
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-200 relative z-10"
          />
          {/* Elemento visual decorativo de fundo usando Tailwind */}
          <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-200 rounded-xl z-0 opacity-50"></div>
        </div>
        
      </div>
    </section>
  );
} 