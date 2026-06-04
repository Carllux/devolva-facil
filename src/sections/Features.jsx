import React from 'react';

export default function Features() {
  const features = [
    {
      title: "+ Facilidade",
      description: "No processo de devolução do cliente com uma plataforma simples, rápida e com fácil integração com qualquer ERP.",
      icon: "/assets/ico1.jpg" // Lembre-se de ajustar a extensão caso baixe como PNG/WebP
    },
    {
      title: "+ Abrangência",
      description: "Capilaridade de Malha Logística em todo território nacional, sendo uma solução “Drop Off” já integrada com os Correios e Lojas Credenciadas.",
      icon: "/assets/ico2.jpg"
    },
    {
      title: "+ Padronização",
      description: "Manuseio das devoluções de acordo com padrão do Centro de Distribuição de nossos clientes.",
      icon: "/assets/ico3.jpg"
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
              className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-28 h-28 object-contain mb-6 mix-blend-multiply" 
              />
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
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