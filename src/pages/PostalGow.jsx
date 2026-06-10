import React from 'react';
import {
  IconAgendamentos,
  IconRecondicionados,
  IconPallets,
  IconCrescimento,
  IconCapex,
  IconProdutividade,
  IconRetencao,
  IconRecuperacao
} from '../components/AnimatedIconsPostalGow';

// ✅ Imagens importadas como módulos (serão comprimidas e convertidas para WebP no build)
import feedImg from '../assets/POSTALGOW - FEED (11).png';
import cdManausImg from '../assets/CD-MANAUS.jpg';
import cdBarueriImg from '../assets/CD-BARUERI.jpg';

export default function PostalGow() {
  return (
    <main className="bg-[#F4F1E9] min-h-screen" style={{ fontFamily: 'Verdana, sans-serif' }}>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#322C57] to-[#6156A2] pt-20 pb-24 px-6 overflow-hidden border-b border-gray-100">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border-[40px] border-white/5 rounded-full opacity-50 blur-sm pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left">
            <h2 className="text-sm font-bold text-[#E7A818] uppercase tracking-widest mb-2">
              Nossos Parceiros
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F4F1E9] tracking-tighter mb-6 leading-tight">
              PostalGOW, a pioneira em Soluções de Logística Reversa no Brasil
            </h1>
            <p className="text-lg text-indigo-100 max-w-xl mb-8 leading-relaxed font-medium">
              Única empresa do país com know-how completo em Logística Reversa: Agendamento, Coleta, Refurbish, Destinação de Resíduos e Armazenagem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solucoes"
                className="inline-block bg-[#9BC31C] hover:bg-[#8ab316] text-[#322C57] text-center font-black py-3.5 px-8 rounded-xl shadow-md transition-transform hover:-translate-y-1"
              >
                Conheça Nossas Soluções
              </a>
              <a
                href="mailto:contato@postalgow.com.br"
                className="inline-block bg-white/10 hover:bg-white/20 text-[#F4F1E9] text-center font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-colors"
              >
                Falar com Comercial
              </a>
            </div>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/postalgow/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-100 hover:text-[#E7A818] font-bold transition-colors group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Siga-nos no Instagram
              </a>
            </div>
          </div>

          {/* Coluna de Imagens */}
          <div className="grid grid-cols-2 gap-4 pt-6 md:pt-0">
            <div className="col-span-2 bg-[#6156A2]/40 h-44 md:h-56 rounded-3xl overflow-hidden border-4 border-[#6156A2] shadow-2xl z-10 relative group">
              <img
                src={feedImg}
                alt="PostalGOW"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                onError={(e) => e.target.style.display='none'}
              />
            </div>

            <div className="bg-[#6156A2]/40 aspect-square rounded-3xl overflow-hidden border-4 border-[#6156A2] mt-6 md:mt-12 shadow-2xl z-20 relative group">
              <img
                src={cdManausImg}
                alt="Sustentabilidade"
                className="w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500"
                loading="lazy"
                decoding="async"
                onError={(e) => e.target.style.display='none'}
              />
            </div>

            <div className="bg-[#6156A2]/40 aspect-square rounded-3xl overflow-hidden border-4 border-[#6156A2] -mt-6 md:-mt-12 shadow-2xl z-20 relative md:ml-6 group">
              <img
                src={cdBarueriImg}
                alt="CD Barueri"
                className="w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500"
                loading="lazy"
                decoding="async"
                onError={(e) => e.target.style.display='none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NOSSOS NÚMEROS - Cards Flutuantes */}
      <section className="relative -mt-16 mx-6 md:mx-auto max-w-7xl z-30 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { num: '300K', label: 'Agendamentos / Mês', icon: <IconAgendamentos /> },
            { num: '70K', label: 'Equip. Recondicionados', icon: <IconRecondicionados /> },
            { num: '25K', label: 'Posições de Pallets', icon: <IconPallets /> },
            { num: '60%', label: 'Crescimento Anual', icon: <IconCrescimento /> },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(50,44,87,0.06)] border-b-[6px] border-[#6156A2] hover:-translate-y-2 transition-transform duration-300 group flex flex-col items-start text-left h-full">
              <div className="mb-6 bg-[#F4F1E9] w-20 h-20 p-4 flex items-center justify-center rounded-2xl group-hover:bg-[#E7A818] transition-colors">
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-5xl font-black text-[#F16521] mb-2 tracking-tighter">{item.num}</h3>
              <p className="text-[#322C57]/80 font-bold uppercase tracking-wide text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUÇÕES E DIFERENCIAIS (VALOR AGREGADO) */}
      <section id="solucoes" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#F16521] uppercase tracking-widest mb-3">Valor Agregado</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#322C57] mb-6 tracking-tight">Maximizando a lucratividade</h3>
          <p className="text-[#322C57]/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Muito mais que prover serviços tradicionais, somos uma empresa de Soluções Logísticas "Fora da Caixa". Nossa infraestrutura garante:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { title: 'Redução de CAPEX', icon: <IconCapex />, desc: 'Recuperação inteligente que reduz a necessidade de novas compras.' },
            { title: 'Produtividade', icon: <IconProdutividade />, desc: 'Ganhos reais com uma melhor gestão e monitoramento de ativos.' },
            { title: 'Retenção de Clientes', icon: <IconRetencao />, desc: 'Atendimento de excelência que reflete na experiência do seu usuário.' },
            { title: 'Taxa de Recuperação', icon: <IconRecuperacao />, desc: 'Os maiores índices de sucesso no recolhimento de equipamentos.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(50,44,87,0.06)] border-b-[6px] border-[#6156A2] hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full">
              <div className="mb-6 bg-[#F4F1E9] w-20 h-20 p-4 flex items-center justify-center rounded-2xl group-hover:bg-[#E7A818] transition-colors">
                 <div className="w-12 h-12 flex items-center justify-center">
                   {item.icon}
                 </div>
              </div>
              <h4 className="text-2xl font-black text-[#322C57] mb-3 leading-tight">{item.title}</h4>
              <p className="text-[#322C57]/70 text-sm leading-relaxed flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MALHA LOGÍSTICA - Infraestrutura Operacional */}
      <section className="py-20 bg-white border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-sm font-bold text-[#F16521] uppercase tracking-widest mb-3">Malha Logística</h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#322C57] mb-8 tracking-tight">Infraestrutura Operacional Nacional</h3>
            <p className="text-[#322C57]/80 mb-10 leading-relaxed text-lg">
              Contamos com mais de <strong>120 bases operacionais</strong> estrategicamente localizadas em todo o território nacional. Através de algoritmos avançados, roteirizamos o melhor perfil de transporte.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-5 bg-[#F4F1E9]/40 p-5 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-[#6156A2] text-[#E7A818] text-xl rounded-xl flex items-center justify-center shrink-0 shadow-md">📍</div>
                <div>
                  <h4 className="font-black text-lg text-[#322C57] mb-1">CD Barueri - SP</h4>
                  <p className="text-[#322C57]/70 text-sm leading-relaxed">Mais de 20.000 m² de capacidade de armazenagem e processamento.</p>
                </div>
              </div>
              <div className="flex gap-5 bg-[#F4F1E9]/40 p-5 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-[#6156A2] text-[#E7A818] text-xl rounded-xl flex items-center justify-center shrink-0 shadow-md">📍</div>
                <div>
                  <h4 className="font-black text-lg text-[#322C57] mb-1">CD Manaus - AM</h4>
                  <p className="text-[#322C57]/70 text-sm leading-relaxed">Mais de 3.000 m² em localização estratégica no norte do país.</p>
                </div>
              </div>
              <div className="flex gap-5 bg-[#F4F1E9]/40 p-5 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-[#6156A2] text-[#E7A818] text-xl rounded-xl flex items-center justify-center shrink-0 shadow-md">📡</div>
                <div>
                  <h4 className="font-black text-lg text-[#322C57] mb-1">Torre de Controle</h4>
                  <p className="text-[#322C57]/70 text-sm leading-relaxed">Monitoramento em tempo real com mais de 50 PA's de atendimento.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloco de Informações de Suporte Lateral estilo Orange */}
          <div className="bg-[#322C57] rounded-3xl p-10 md:p-14 text-white text-left relative overflow-hidden shadow-xl">
            <h4 className="text-3xl font-black mb-4">Sustentabilidade Integrada</h4>
            <p className="text-indigo-100 mb-8 leading-relaxed">
              Fazemos o serviço completo de recondicionamento e reciclagem em conformidade com as diretrizes ESG e crédito de carbono, reduzindo drasticamente o lixo eletrônico no mercado de telecomunicações.
            </p>
            <ul className="space-y-4 mb-8 text-white/90">
              <li className="flex items-center gap-3 font-medium">
                <span className="text-[#9BC31C] font-bold text-lg">✓</span> Certificações ambientais completas
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="text-[#9BC31C] font-bold text-lg">✓</span> Triagem e reaproveitamento internacional de ativos
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="text-[#9BC31C] font-bold text-lg">✓</span> Mitigação total de riscos e compliance com a LGPD
              </li>
            </ul>
            <a 
              href="mailto:vagas@postalgow.com.br" 
              className="inline-block bg-[#F16521] hover:bg-[#d45619] text-white font-black py-3.5 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Envie Seu Currículo
            </a>
            
            {/* Link adicional para Instagram na seção de sustentabilidade */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <a 
                href="https://www.instagram.com/postalgow/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-100 hover:text-[#E7A818] font-bold transition-colors group text-sm"
              >
                <svg 
                  className="w-5 h-5 group-hover:scale-110 transition-transform" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Siga @postalgow no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}