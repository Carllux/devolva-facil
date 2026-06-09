import React from 'react';

// Cores baseadas no Manual de Marca da PostalGow
const BRAND_DARK_PURPLE = "#322C57";
const BRAND_LIGHT_PURPLE = "#6156A2";
const BRAND_ORANGE = "#F16521";
const BRAND_YELLOW = "#E7A818";
const BRAND_GREEN = "#9BC31C";

// ==========================================
// ÍCONES: SEÇÃO NOSSOS NÚMEROS
// ==========================================

export const IconAgendamentos = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Calendário de Agendamento */}
    <rect x="3" y="4" width="18" height="16" rx="3" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" fill="white" />
    <path d="M3 9h18M9 2v3M15 2v3" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Relógio de Atendimento / PA */}
    <g className="animate-[spin_12s_linear_infinite]" style={{ transformOrigin: '15px 15px' }}>
      <circle cx="15" cy="15" r="5" fill={BRAND_YELLOW} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
      <path d="M15 13v2h2" stroke={BRAND_DARK_PURPLE} strokeWidth="1" strokeLinecap="round" />
    </g>

    {/* Pontos de Agendamentos Concluídos */}
    <circle cx="7" cy="13" r="1" fill={BRAND_ORANGE} />
    <circle cx="11" cy="13" r="1" fill={BRAND_ORANGE} />
    <circle cx="7" cy="17" r="1" fill={BRAND_ORANGE} />
  </svg>
);

export const IconRecondicionados = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Caixa Centralizada */}
    <g className="animate-[pulse_3s_infinite]">
      <rect x="7" y="8" width="10" height="8" rx="1.5" fill="white" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" />
      <path d="M7 11h10M12 8v3" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Setas Giratórias ao redor da caixa */}
    <g className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: '12px 12px' }}>
      {/* Seta Verde (Superior Direita) */}
      <path d="M4 12a8 8 0 0 1 14-4" stroke={BRAND_GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 4v4h-4" stroke={BRAND_GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Seta Laranja (Inferior Esquerda) */}
      <path d="M20 12a8 8 0 0 1-14 4" stroke={BRAND_ORANGE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 20v-4h4" stroke={BRAND_ORANGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export const IconPallets = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Estrutura do Porta-Pallet (Racks de Armazenagem) */}
    <path d="M3 2v20M21 2v20M3 7h18M3 15h18" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Caixa / Pallet Armazenado Superior */}
    <g className="animate-[pulse_3s_infinite]">
      <rect x="5" y="9" width="6" height="5" rx="1" fill={BRAND_YELLOW} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
      <rect x="13" y="9" width="6" height="5" rx="1" fill={BRAND_ORANGE} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
    </g>

    {/* Caixa / Pallet Armazenado Inferior */}
    <g className="animate-[pulse_3s_infinite]" style={{ animationDelay: '0.5s' }}>
      <rect x="5" y="17" width="6" height="4" rx="1" fill={BRAND_GREEN} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
      <rect x="13" y="17" width="6" height="4" rx="1" fill={BRAND_LIGHT_PURPLE} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
    </g>
  </svg>
);

export const IconCrescimento = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Gráfico de Barras Crescente */}
    <rect x="3" y="14" width="3" height="6" rx="0.5" fill={BRAND_LIGHT_PURPLE} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
    <rect x="8" y="11" width="3" height="9" rx="0.5" fill={BRAND_YELLOW} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
    <rect x="13" y="7" width="3" height="13" rx="0.5" fill={BRAND_GREEN} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />
    <rect x="18" y="3" width="3" height="17" rx="0.5" fill={BRAND_ORANGE} stroke={BRAND_DARK_PURPLE} strokeWidth="1" />

    {/* Seta de Gráfico Ascendente Animada */}
    <path 
      d="M3 13l5-4 5 2 5-6" 
      stroke={BRAND_DARK_PURPLE} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="animate-[pulse_1.5s_infinite]"
    />
    <path d="M15 5h3v3" stroke={BRAND_DARK_PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


// ==========================================
// ÍCONES: SEÇÃO VALOR AGREGADO
// ==========================================

export const IconCapex = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Pessoas / Equipe na retaguarda */}
    <g stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" fill="none">
      {/* Pessoa esquerda */}
      <circle cx="7" cy="8" r="3" fill="white" />
      <path d="M2 19c0-3.5 2.5-5 5-5h1" strokeLinecap="round" />
      
      {/* Pessoa direita */}
      <circle cx="17" cy="8" r="3" fill="white" />
      <path d="M22 19c0-3.5-2.5-5-5-5h-1" strokeLinecap="round" />
    </g>

    {/* Dinheiro (Moeda) em destaque animada */}
    <g className="animate-[bounce_2s_infinite]">
      <circle cx="12" cy="16" r="5" fill={BRAND_YELLOW} stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" />
      {/* Cifrão interno da moeda */}
      <path d="M12 13v6M10.5 14.5h3a1 1 0 0 1 0 2h-3a1 1 0 0 0 0 2h3" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const IconProdutividade = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Moldura do Painel / Analytics */}
    <rect x="2" y="4" width="20" height="16" rx="2" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" fill="white" />
    <path d="M2 16h20" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" />

    {/* Linha de Gráfico Dinâmica */}
    <path 
      d="M5 12l4-3 5 4 4-5" 
      stroke={BRAND_LIGHT_PURPLE} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Pontos de Interseção do Dashboard */}
    <circle cx="9" cy="9" r="1.5" fill={BRAND_GREEN} />
    <circle cx="14" cy="13" r="1.5" fill={BRAND_GREEN} />

    {/* Efeito de carregamento / otimização */}
    <circle cx="18" cy="8" r="1.5" fill={BRAND_ORANGE} className="animate-ping" />
  </svg>
);

export const IconRetencao = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Aperto de Mão (Fidelização e Ganha-Ganha) */}
    <g className="animate-[pulse_3s_infinite]">
      <path d="M16 14h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2M8 14H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" fill="white" />
      <path d="M8 12h8v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3z" fill={BRAND_YELLOW} stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" />
    </g>

    {/* Coração de Satisfação do Cliente */}
    <g className="animate-[bounce_2.5s_infinite]" style={{ animationDelay: '0.5s' }}>
      <path 
        d="M12 5.5C11.5 4 9.5 4 8.5 5c-1 1-1 3 3.5 5.5 4.5-2.5 4.5-4.5 3.5-5.5-1-1-3 0-3.5 1.5z" 
        fill={BRAND_ORANGE} 
        stroke={BRAND_DARK_PURPLE} 
        strokeWidth="1" 
      />
    </g>
  </svg>
);

export const IconRecuperacao = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-full h-full"
  >
    {/* Setas Circulares de Reciclagem / Reversa */}
    <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '12px 12px' }}>
      <path 
        d="M12 3a9 9 0 0 1 7.5 4.5M21 4v4h-4M12 21a9 9 0 0 1-7.5-4.5M3 20v-4h4" 
        stroke={BRAND_LIGHT_PURPLE} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </g>

    {/* Escudo Protetor de Ativos */}
    <path d="M12 6l6 2v5c0 3.68-2.56 7.12-6 8-3.44-.88-6-4.32-6-8V8l6-2z" fill="white" stroke={BRAND_DARK_PURPLE} strokeWidth="1.5" />
    
    {/* Ícone de Checkmark interno (Sucesso na homologação) */}
    <path d="M9 12.5l2 2 4-4" stroke={BRAND_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);