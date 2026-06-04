import React from 'react';

// Cores baseadas na sua identidade visual
const BRAND_YELLOW = "#F9A000";
const BRAND_PURPLE = "#2D2856";
export const IconFacilidade = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-24 h-24"
  >
    {/* Nó de Integração (Representando a conexão fácil com ERPs) */}
    <path 
      d="M12 22v-4" 
      stroke={BRAND_PURPLE} 
      strokeWidth="1.5" 
      strokeDasharray="2 2" 
      className="animate-[pulse_2s_infinite]" 
    />
    <circle cx="12" cy="22" r="1.5" stroke={BRAND_PURPLE} strokeWidth="1.5" fill="white" />

    {/* Tela da Plataforma (Dashboard do DevolvaFácil) */}
    <rect x="3" y="4" width="18" height="14" rx="2" stroke={BRAND_PURPLE} strokeWidth="1.5" fill="white" />
    <path d="M3 8h18" stroke={BRAND_PURPLE} strokeWidth="1.5" />
    <circle cx="6" cy="6" r="0.75" fill={BRAND_PURPLE} />
    <circle cx="8" cy="6" r="0.75" fill={BRAND_PURPLE} />

    {/* Ícone de Sucesso/Facilidade (Checkmark Mágico) */}
    {/* A animação 'bounce' dá uma sensação de "pop-up" confirmando a facilidade da ação */}
    <g className="animate-[bounce_3s_ease-in-out_infinite]">
      <circle cx="12" cy="14" r="4.5" fill={BRAND_YELLOW} />
      <path 
        d="M9.5 14l1.5 1.5 3-3" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </g>
  </svg>
);

// Certifique-se de que BRAND_YELLOW e BRAND_PURPLE estão sendo importados corretamente no seu arquivo.
// ex: import { BRAND_YELLOW, BRAND_PURPLE } from '@/constants/colors';

export const IconAbrangencia = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-24 h-24" 
    aria-label="Ícone de Malha Logística"
  >
    {/* Malha Logística Giratória (Representa a capilaridade no território nacional) */}
    <g className="animate-[spin_25s_linear_infinite]" style={{ transformOrigin: '12px 12px' }}>
      
      {/* Linhas de conexão (rotas logísticas) saindo do centro */}
      <g stroke={BRAND_PURPLE} strokeWidth="1" strokeDasharray="2 2" className="opacity-70">
        <line x1="12" y1="12" x2="21" y2="6" />
        <line x1="12" y1="12" x2="19" y2="19" />
        <line x1="12" y1="12" x2="5" y2="18" />
        <line x1="12" y1="12" x2="3" y2="8" />
        <line x1="12" y1="12" x2="12" y2="2" />
      </g>
      
      {/* Pontos da malha (Lojas Credenciadas) com animação de pulso */}
      <g fill={BRAND_YELLOW} stroke="none" className="animate-pulse">
        <circle cx="21" cy="6" r="1.5" />
        <circle cx="19" cy="19" r="1.5" />
        <circle cx="5" cy="18" r="1.5" />
        <circle cx="3" cy="8" r="1.5" />
        <circle cx="12" cy="2" r="1.5" />
      </g>
    </g>

    {/* Ponto Central Fixo: Representando a solução "Drop-off" (Pacote) */}
    {/* O translate e o scale reduzem o ícone da caixa para caber perfeitamente no centro */}
    <g stroke={BRAND_YELLOW} transform="translate(5.5, 5.5) scale(0.54)">
      {/* Fundo da caixa usando currentColor para simular preenchimento ou force a cor de fundo do seu site */}
      <path 
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" 
        fill="#FFFFFF" /* Dica: Mude para a mesma cor de fundo da sua section para as linhas roxas de trás não vazarem por dentro do pacote */
      />
      {/* Linhas internas do pacote isomêtrico */}
      <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
      <path d="M12 22.08V12" />
    </g>
  </svg>
);

export const IconPadronizacao = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="w-24 h-24"
  >
    {/* Prancheta de Checklist (Representando o Padrão do CD) */}
    <rect x="10" y="2" width="12" height="18" rx="2" stroke={BRAND_PURPLE} strokeWidth="1.5" fill="white" />
    <rect x="13" y="2" width="6" height="2" rx="1" fill={BRAND_PURPLE} />
    <path d="M14 2V1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V2" stroke={BRAND_PURPLE} strokeWidth="1.5" />

    {/* Linhas do Padrão Operacional */}
    <path d="M16 8h4 M16 12h4 M16 16h4" stroke={BRAND_PURPLE} strokeWidth="1.5" strokeLinecap="round" />

    {/* Checkmarks animados indicando a validação passo a passo */}
    <g className="animate-[pulse_2s_infinite]">
      <path d="M12 7.5l1.5 1.5 2.5-2.5" stroke={BRAND_YELLOW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g className="animate-[pulse_2s_infinite]" style={{ animationDelay: '0.5s' }}>
      <path d="M12 11.5l1.5 1.5 2.5-2.5" stroke={BRAND_YELLOW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g className="animate-[pulse_2s_infinite]" style={{ animationDelay: '1s' }}>
      <path d="M12 15.5l1.5 1.5 2.5-2.5" stroke={BRAND_YELLOW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Caixa Logística (A Devolução Sendo Tratada) */}
    <rect x="2" y="10" width="11" height="12" rx="1.5" stroke={BRAND_PURPLE} strokeWidth="1.5" fill="white" />
    <path d="M2 14h11 M7.5 10v4" stroke={BRAND_PURPLE} strokeWidth="1.5" />

    {/* Selo de Garantia/Padrão aprovado na Caixa */}
    <g className="animate-[bounce_3s_infinite]" style={{ animationDelay: '1.5s' }}>
      <circle cx="7.5" cy="18" r="2.5" fill={BRAND_YELLOW} />
      <path d="M6 18l1 1 2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);