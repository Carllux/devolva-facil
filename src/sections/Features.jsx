import React from 'react';
import { IconFacilidade, IconAbrangencia, IconPadronizacao } from '../components/AnimatedIcons';

export default function Features() {
  const features = [
    {
      title: "+ Facilidade",
      description: "No processo de devolução do cliente com uma plataforma simples, rápida e com fácil integração com qualquer ERP.",
      // Injetamos o componente React diretamente aqui
      icon: <IconFacilidade />
    },
    {
      title: "+ Abrangência",
      description: "Capilaridade de Malha Logística em todo território nacional, sendo uma solução “Drop Off” já integrada com os Correios e Lojas Credenciadas.",
      icon: <IconAbrangencia />
    },
    {
      title: "+ Padronização",
      description: "Manuseio das devoluções de acordo com padrão do Centro de Distribuição de nossos clientes.",
      icon: <IconPadronizacao />
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="solucao">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-gray-900 tracking-tight">
          Por que escolher o DevolvaFácil?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-gray-100/50"
            >
              {/* O ícone renderiza nativamente sem fundo, animado e leve */}
              <div className="mb-8 p-4 bg-indigo-50/50 rounded-full">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#2D2856] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}