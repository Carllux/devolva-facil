import React from 'react';

export default function PostalGow() {
  return (
    // Aplicando o fundo off-white da marca e definindo Verdana como fonte base
    <main className="bg-[#F4F1E9] min-h-screen" style={{ fontFamily: 'Verdana, sans-serif' }}>
      
      {/* HERO SECTION - Gradiente com os dois tons de Violeta da marca */}
      <section className="relative bg-gradient-to-br from-[#322C57] to-[#6156A2] py-24 px-6 overflow-hidden">
        {/* Elemento decorativo simulando ondas (referência visual) */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border-[40px] border-white/5 rounded-full opacity-50 blur-sm pointer-events-none"></div>
        <div className="absolute top-10 -right-10 w-72 h-72 border-[30px] border-[#9BC31C]/10 rounded-full opacity-50 blur-sm pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E7A818] text-[#322C57] text-sm font-bold w-max mb-8 shadow-lg">
            <span>🌱</span> Conectividade e Sustentabilidade
          </div>
          
          {/* Título simulando o peso da fonte Vag-Rounded_Black */}
          <h1 className="text-4xl md:text-6xl font-black text-[#F4F1E9] tracking-tighter mb-6 leading-tight">
            A pioneira em Soluções de <br className="hidden md:block"/> Logística Reversa no Brasil
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
            Única empresa do país com know-how completo em Logística Reversa: Agendamento, Coleta, Refurbish, Destinação de Resíduos e Armazenagem.
          </p>
          <a 
            href="#solucoes" 
            className="inline-block bg-[#9BC31C] hover:bg-[#8ab316] text-[#322C57] font-black py-4 px-10 rounded-xl shadow-[0_8px_20px_rgba(155,195,28,0.3)] transition-transform hover:-translate-y-1"
          >
            Conheça Nossas Soluções
          </a>
        </div>
      </section>

      {/* NOSSOS NÚMEROS */}
      <section className="py-16 bg-white border-b border-gray-100 relative -mt-8 mx-6 md:mx-auto max-w-6xl rounded-2xl shadow-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#F4F1E9]">
          <div className="px-4">
            <h3 className="text-5xl font-black text-[#F16521] mb-2 tracking-tighter">300K</h3>
            <p className="text-sm text-[#322C57] font-bold uppercase tracking-wide">Agendamentos / Mês</p>
          </div>
          <div className="px-4">
            <h3 className="text-5xl font-black text-[#F16521] mb-2 tracking-tighter">70K</h3>
            <p className="text-sm text-[#322C57] font-bold uppercase tracking-wide">Equip. Recondicionados</p>
          </div>
          <div className="px-4">
            <h3 className="text-5xl font-black text-[#F16521] mb-2 tracking-tighter">25K</h3>
            <p className="text-sm text-[#322C57] font-bold uppercase tracking-wide">Posições de Pallets</p>
          </div>
          <div className="px-4">
            <h3 className="text-5xl font-black text-[#F16521] mb-2 tracking-tighter">60%</h3>
            <p className="text-sm text-[#322C57] font-bold uppercase tracking-wide">Crescimento Anual</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES E DIFERENCIAIS */}
      <section id="solucoes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#F16521] uppercase tracking-widest mb-3">Valor Agregado</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#322C57] mb-6 tracking-tight">Maximizando a lucratividade</h3>
          <p className="text-[#322C57]/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Muito mais que prover serviços tradicionais, somos uma empresa de Soluções Logísticas "Fora da Caixa". Nossa infraestrutura garante:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Redução de CAPEX', icon: '💰', desc: 'Recuperação inteligente que reduz a necessidade de novas compras.' },
            { title: 'Produtividade', icon: '📈', desc: 'Ganhos reais com uma melhor gestão e monitoramento de ativos.' },
            { title: 'Retenção de Clientes', icon: '🤝', desc: 'Atendimento de excelência que reflete na experiência do seu usuário.' },
            { title: 'Taxa de Recuperação', icon: '🔄', desc: 'Os maiores índices de sucesso no recolhimento de equipamentos.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-[#6156A2] hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-4xl mb-6 bg-[#F4F1E9] w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-[#E7A818] transition-colors">{item.icon}</div>
              <h4 className="text-xl font-black text-[#322C57] mb-3">{item.title}</h4>
              <p className="text-[#322C57]/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFRAESTRUTURA - Fundo Escuro */}
      <section className="py-24 bg-[#322C57] text-[#F4F1E9] px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-sm font-bold text-[#9BC31C] uppercase tracking-widest mb-3">Malha Logística</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">Infraestrutura Operacional Nacional</h3>
            <p className="text-[#F4F1E9]/80 mb-10 leading-relaxed text-lg">
              Contamos com mais de <strong>120 bases operacionais</strong> estrategicamente localizadas em todo o território nacional. Através de algoritmos avançados, roteirizamos o melhor perfil de transporte.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#6156A2] text-[#E7A818] text-2xl rounded-2xl flex items-center justify-center shrink-0 shadow-lg">📍</div>
                <div>
                  <h4 className="font-black text-xl text-[#F4F1E9] mb-1">CD Barueri - SP</h4>
                  <p className="text-[#F4F1E9]/70 text-sm leading-relaxed">Mais de 20.000 m² de capacidade de armazenagem e processamento.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#6156A2] text-[#E7A818] text-2xl rounded-2xl flex items-center justify-center shrink-0 shadow-lg">📍</div>
                <div>
                  <h4 className="font-black text-xl text-[#F4F1E9] mb-1">CD Manaus - AM</h4>
                  <p className="text-[#F4F1E9]/70 text-sm leading-relaxed">Mais de 3.000 m² em localização estratégica no norte do país.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#6156A2] text-[#E7A818] text-2xl rounded-2xl flex items-center justify-center shrink-0 shadow-lg">📡</div>
                <div>
                  <h4 className="font-black text-xl text-[#F4F1E9] mb-1">Torre de Controle</h4>
                  <p className="text-[#F4F1E9]/70 text-sm leading-relaxed">Monitoramento em tempo real com mais de 50 PA's de atendimento.</p>
                </div>
              </div>
            </div>
          </div>

          {/* GRID DE IMAGENS COLAGEM (Desnível e Sobreposição) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-10">
            
            {/* 1º Card: Foto Logo PostalGOW (Topo Esquerda) */}
            <div className="col-span-2 md:col-span-1 bg-[#6156A2]/40 rounded-3xl overflow-hidden border-4 border-[#6156A2] shadow-2xl z-10 relative group aspect-[4/3] md:aspect-square">
               <img 
                 src="/assets/POSTALGOW - FEED (11).png" 
                 alt="PostalGOW" 
                 className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                 onError={(e) => e.target.style.display='none'} 
               />
            </div>
            
            {/* 2º Card: Sustentabilidade (Direita com desnível descendo e invadindo a esquerda no Desktop) */}
            <div className="col-span-1 md:col-span-1 bg-[#6156A2]/40 aspect-square rounded-3xl overflow-hidden border-4 border-[#6156A2] mt-12 md:mt-24 shadow-2xl z-20 relative md:-ml-10 group">
               <img 
                 src="/assets/CD-MANAUS.jpg" 
                 alt="Sustentabilidade" 
                 className="w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500" 
                 onError={(e) => e.target.style.display='none'} 
               />
            </div>
            
            {/* 3º Card: CD Barueri (Base Esquerda subindo para sobrepor o Card 1) */}
            <div className="col-span-1 md:col-span-1 bg-[#6156A2]/40 aspect-square rounded-3xl overflow-hidden border-4 border-[#6156A2] -mt-8 md:-mt-20 shadow-2xl z-30 relative md:ml-10 group">
               <img 
                 src="/assets/CD-BARUERI.jpg" 
                 alt="CD Barueri" 
                 className="w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500" 
                 onError={(e) => e.target.style.display='none'} 
               />
            </div>

          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-[#F4F1E9] text-center px-6">
        <h2 className="text-3xl md:text-4xl font-black text-[#322C57] mb-8 tracking-tight">Trabalhe Conosco ou Seja um Parceiro</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:contato@postalgow.com.br" className="bg-[#F16521] text-white py-4 px-10 rounded-xl font-black hover:bg-[#d45619] shadow-[0_8px_20px_rgba(241,101,33,0.3)] transition-all hover:-translate-y-1">
            Falar com Comercial
          </a>
          <a href="mailto:vagas@postalgow.com.br" className="bg-transparent border-2 border-[#322C57] text-[#322C57] py-4 px-10 rounded-xl font-black hover:bg-[#322C57] hover:text-[#F4F1E9] transition-all hover:-translate-y-1">
            Enviar Currículo
          </a>
        </div>
      </section>

    </main>
  );
}