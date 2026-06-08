import React from 'react';

export default function PostalGow() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#6156a2] py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold w-max mb-6 backdrop-blur-sm">
            <span>🌱</span> Conectividade e Sustentabilidade
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            A pioneira em Soluções de <br className="hidden md:block"/> Logística Reversa no Brasil
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Única empresa do país com know-how completo em Logística Reversa: Agendamento, Coleta, Refurbish, Destinação de Resíduos e Armazenagem.
          </p>
          <a 
            href="#solucoes" 
            className="inline-block bg-[#9DE23F] hover:bg-[#88ca30] text-[#2D2856] font-bold py-4 px-10 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
          >
            Conheça Nossas Soluções
          </a>
        </div>
      </section>

      {/* NOSSOS NÚMEROS */}
      <section className="py-16 bg-white border-b border-gray-100 relative -mt-8 mx-6 md:mx-auto max-w-6xl rounded-2xl shadow-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          <div className="px-4">
            <h3 className="text-4xl font-black text-[#6156a2] mb-2">300K</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Agendamentos / Mês</p>
          </div>
          <div className="px-4">
            <h3 className="text-4xl font-black text-[#6156a2] mb-2">70K</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Equip. Recondicionados</p>
          </div>
          <div className="px-4">
            <h3 className="text-4xl font-black text-[#6156a2] mb-2">25K</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Posições de Pallets</p>
          </div>
          <div className="px-4">
            <h3 className="text-4xl font-black text-[#6156a2] mb-2">60%</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Crescimento Anual</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES E DIFERENCIAIS */}
      <section id="solucoes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Valor Agregado</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Maximizando a lucratividade do seu negócio</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Muito mais que prover serviços tradicionais, somos uma empresa de Soluções Logísticas "Fora da Caixa". Nossa infraestrutura garante:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Redução de CAPEX', icon: '💰', desc: 'Recuperação inteligente que reduz a necessidade de novas compras.' },
            { title: 'Produtividade', icon: '📈', desc: 'Ganhos reais com uma melhor gestão e monitoramento de ativos.' },
            { title: 'Retenção de Clientes', icon: '🤝', desc: 'Atendimento de excelência que reflete na experiência do seu usuário.' },
            { title: 'Taxa de Recuperação', icon: '🔄', desc: 'Os maiores índices de sucesso no recolhimento de equipamentos.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-[#6156a2] mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFRAESTRUTURA */}
      <section className="py-24 bg-[#6156a2] text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-[#9DE23F] uppercase tracking-widest mb-2">Malha Logística</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Infraestrutura Operacional Nacional</h3>
            <p className="text-indigo-100 mb-8 leading-relaxed text-lg">
              Contamos com mais de <strong>120 bases operacionais</strong> estrategicamente localizadas em todo o território nacional. Através de algoritmos avançados, roteirizamos o melhor perfil de transporte para reduzir custos e maximizar sua performance.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">📍</div>
                <div>
                  <h4 className="font-bold text-lg text-white">CD Barueri - SP</h4>
                  <p className="text-indigo-200 text-sm">Mais de 20.000 m² de capacidade de armazenagem e processamento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">📍</div>
                <div>
                  <h4 className="font-bold text-lg text-white">CD Manaus - AM</h4>
                  <p className="text-indigo-200 text-sm">Mais de 3.000 m² em localização estratégica no norte do país.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">📡</div>
                <div>
                  <h4 className="font-bold text-lg text-white">Torre de Controle</h4>
                  <p className="text-indigo-200 text-sm">Monitoramento em tempo real com mais de 50 PA's de atendimento.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Imagens Placeholder (podem ser substituídas por fotos reais dos CDs) */}
            <div className="bg-black/20 aspect-square rounded-3xl overflow-hidden border border-white/10">
               <img src="/assets/Sustentabilidade.jpg" alt="Sustentabilidade" className="w-full h-full object-cover opacity-80" onError={(e) => e.target.style.display='none'} />
            </div>
            <div className="bg-black/20 aspect-square rounded-3xl overflow-hidden border border-white/10 mt-12">
               <img src="/assets/CD-Barueri.jpg" alt="CD Barueri" className="w-full h-full object-cover opacity-80" onError={(e) => e.target.style.display='none'} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Trabalhe Conosco ou Seja um Parceiro</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:contato@postalgow.com.br" className="bg-[#6156a2] text-white py-3 px-8 rounded-xl font-bold hover:bg-[#4a4282] transition-colors">
            Falar com Comercial
          </a>
          <a href="mailto:vagas@postalgow.com.br" className="bg-gray-200 text-gray-800 py-3 px-8 rounded-xl font-bold hover:bg-gray-300 transition-colors">
            Enviar Currículo
          </a>
        </div>
      </section>

    </main>
  );
}