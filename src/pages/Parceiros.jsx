import React from 'react';
import CalculadoraFrete from './CalculadoraFrete'; // Importando a calculadora

export default function Parceiros() {
  
  // Função para rolagem suave até a calculadora
  const scrollToCalculadora = (e) => {
    e.preventDefault();
    const element = document.getElementById('calculadora-frete');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="parceiros" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            Nossos Parceiros
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] tracking-tight mb-4">
            Orange Envios: Logística de verdade
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fretes inteligentes para quem vende online. Compare transportadoras, emita etiquetas e poste perto de você — sem filas. Uma solução do Grupo PostalGow.
          </p>
        </div>

        {/* HERO / DESTAQUE DO PARCEIRO */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold w-max mb-6">
                <span>🚀</span> Frete menor e suporte real
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Comece hoje a aumentar a margem do seu e-commerce com a plataforma certa.
              </h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Compare transportadoras, reduza custos e conte com suporte humano de verdade. Sem burocracia e sem travar a operação.
              </p>
              
              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a 
                  href="https://painel.orangeenvios.com.br/cadastro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold py-3 px-6 rounded-xl shadow-sm transition-colors text-center"
                >
                  Criar conta grátis
                </a>
                <a 
                  href="#calculadora-frete"
                  onClick={scrollToCalculadora}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-xl transition-colors text-center cursor-pointer"
                >
                  Calcular Menor Frete
                </a>

              </div>
            </div>
            
            {/* Imagem Hero Parceiro com Efeito de Sobreposição */}
            <div className="bg-orange-50/50 flex items-center justify-center p-10 md:p-16 relative">
              {/* Container Relativo para prender a foto sobreposta */}
              <div className="relative">
                {/* Imagem Principal */}
                <img 
                  src="/assets/tabelabanner.png" 
                  alt="Tabela de cotações Orange Envios" 
                  className="relative z-10 w-full max-w-md rounded-2xl shadow-xl border border-gray-200/50"
                  onError={(e) => e.target.style.display = 'none'} 
                />
                
                {/* Ícone Orange Envios Sobreposto (Desalinhado) */}
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 z-20 w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/assets/icone-orange.png" 
                    alt="Ícone Orange Envios" 
                    className="w-full h-full object-contain p-2"
                    onError={(e) => e.target.style.display = 'none'} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA (GRID DE CARDS) */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold text-center text-gray-900 mb-10">Como a Orange Envios funciona</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Passo 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-black text-xl mb-6">1</div>
              <h5 className="text-xl font-bold text-[#2D2856] mb-3">Cadastre-se grátis</h5>
              <p className="text-gray-600 leading-relaxed">
                Crie sua conta em minutos, sem burocracia, e tenha acesso imediato a uma rede de transportadoras homologadas.
              </p>
            </div>
            {/* Passo 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-black text-xl mb-6">2</div>
              <h5 className="text-xl font-bold text-[#2D2856] mb-3">Compare e emita</h5>
              <p className="text-gray-600 leading-relaxed">
                Veja custo, prazo e nível de serviço (SLA), escolha a melhor opção usando regras automáticas e gere a etiqueta.
              </p>
            </div>
            {/* Passo 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-black text-xl mb-6">3</div>
              <h5 className="text-xl font-bold text-[#2D2856] mb-3">Poste perto de você</h5>
              <p className="text-gray-600 leading-relaxed">
                Despache em milhares de pontos sem filas ou utilize a coleta no seu endereço para escalar sua operação.
              </p>
            </div>
          </div>
        </div>

        {/* INJEÇÃO DA CALCULADORA DE FRETES AQUI */}
        {/* Adicionado o ID para a rolagem funcionar e scroll-mt-24 para não colar no topo devido ao Header fixo */}
        <div id="calculadora-frete" className="mb-20 scroll-mt-24">
           <CalculadoraFrete />
        </div>

        {/* INTEGRAÇÕES E TRANSPORTADORAS */}
        <div className="bg-[#6156a2] rounded-3xl p-10 md:p-14 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold mb-4">Integrações Inteligentes e Escala</h4>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Sincronização automática de pedidos e códigos de rastreio com Bling, Nuvemshop, Shopify, Tray, Loja Integrada e muito mais. Nossa IA (Órion) prevê e reduz seus custos logísticos por região.
              </p>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-center gap-2">
                  <span className="text-[#9DE23F]">✓</span> Pedidos importados automaticamente
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9DE23F]">✓</span> Atualização de status em tempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9DE23F]">✓</span> Acesso a Correios, JadLog, Loggi e J&T
                </li>
              </ul>
              
              {/* Botões de Ação com o Instagram adicionado */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a 
                  href="https://painel.orangeenvios.com.br/cadastro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#E7A818] hover:opacity-90 text-gray-900 font-bold py-3 px-8 rounded-xl shadow transition-opacity"
                >
                  Conheça a Plataforma
                </a>
                <a 
                  href="https://www.instagram.com/orangeenvios/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-colors text-center backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  @orangeenvios
                </a>
              </div>
            </div>
            
            {/* Elemento Visual Placeholder para as logos das transportadoras/integrações */}
            <div className="grid grid-cols-2 gap-4 opacity-90">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-center hover:bg-white/20 transition-colors">
                Múltiplas Transportadoras
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-center hover:bg-white/20 transition-colors">
                Principais ERPs
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-center hover:bg-white/20 transition-colors">
                Plataformas de E-commerce
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-center hover:bg-white/20 transition-colors">
                Rastreio em Tempo Real
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}