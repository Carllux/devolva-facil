import React from 'react';

export default function AnimatedLogo({ className = "h-12 w-auto", textColor = "fill-black" }) {
  return (
    <svg 
      viewBox="0 0 460 260" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`group cursor-pointer ${className}`}
      aria-label="Devolva Fácil Logo"
    >
      {/* Grupo das Setas (Com animação de pulso lenta para simular o ciclo contínuo) */}
      <g className="animate-[pulse_4s_ease-in-out_infinite]">
        
        {/* Seta Superior Amarela */}
        <g fill="#F9C021">
          <path 
            d="M 85 60 A 160 75 0 0 1 340 55" 
            stroke="#F9C021" 
            strokeWidth="28" 
            strokeLinecap="round" 
            fill="none"
          />
          <polygon 
            points="320,20 400,60 310,90" 
            stroke="#F9C021" 
            strokeWidth="8" 
            strokeLinejoin="round" 
          />
        </g>

        {/* Seta Inferior Verde */}
        <g fill="#9DE23F">
          <path 
            d="M 355 200 A 160 75 0 0 1 100 205" 
            stroke="#9DE23F" 
            strokeWidth="28" 
            strokeLinecap="round" 
            fill="none"
          />
          <polygon 
            points="120,240 40,200 130,170" 
            stroke="#9DE23F" 
            strokeWidth="8" 
            strokeLinejoin="round" 
          />
        </g>
      </g>

      {/* Tipografia recebendo a cor dinamicamente (textColor) */}
      <g 
        className={textColor} 
        style={{ 
          fontFamily: "'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif", 
          fontWeight: 700,
          letterSpacing: "1.5px"
        }}
      >
        <text 
          x="270" 
          y="108" 
          textAnchor="middle" 
          fontSize="62" 
          transform="scale(0.85, 1.15)"
        >
          DEVOLVA
        </text>
        <text 
          x="317" 
          y="160" 
          textAnchor="middle" 
          fontSize="62" 
          transform="scale(0.85, 1.15)"
        >
          FÁCIL
        </text>
      </g>

      {/* Linhas de Velocidade Vermelhas */}
      <g fill="#D80E15" className="transition-transform duration-500 ease-out group-hover:translate-x-3">
        <path d="M 60 160 C 110 167, 140 170, 195 164 L 195 174 C 140 180, 110 177, 60 160 Z" />
        <path d="M 110 178 C 140 182, 165 184, 195 178 L 195 186 C 165 192, 140 188, 110 178 Z" />
      </g>
    </svg>
  );
}