import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
          DESCOMPLICAMOS A SUA DEVOLUÇÃO.
        </h1>
        
        {/* Botões de Chamada para Ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button 
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('video-apresentacao');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Assista
          </button>

          <a 
            href="http://wa.link/mq496p" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto"
          >
            Agendar Reunião
          </a>
        </div>

        {/* Container do Vídeo - O ID deve estar exatamente aqui */}
        <div 
          id="video-apresentacao"
          className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black"
        >
          <video 
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            {/* O caminho deve ser apenas /NomeDoArquivo.mp4 se ele estiver na raiz da pasta public */}
            <source src="/INSTITUCIONAL.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos em HTML5.
          </video>
        </div>
        
      </div>
    </section>
  );
}
