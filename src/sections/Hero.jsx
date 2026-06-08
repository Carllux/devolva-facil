import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se o vídeo sair da tela, ativa o modo flutuante
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
          DESCOMPLICAMOS A SUA DEVOLUÇÃO.
        </h1>
        
        {/* Botões de Chamada para Ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button 
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto"
            onClick={() => document.getElementById('video-apresentacao').scrollIntoView({ behavior: 'smooth' })}
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

        {/* Container que monitora a visibilidade para o efeito Sticky */}
        <div ref={videoRef} className="w-full aspect-video">
          <div 
            id="video-apresentacao"
            className={`
              transition-all duration-500 ease-in-out bg-black rounded-2xl shadow-2xl border border-gray-200 overflow-hidden
              ${isSticky 
                ? "fixed bottom-24 right-6 w-72 aspect-video z-40 scale-100 shadow-2xl cursor-pointer hover:scale-105" 
                : "w-full aspect-video"}
            `}
          >
            {/* Título que aparece apenas no modo flutuante */}
            {isSticky && (
              <div className="absolute top-0 left-0 w-full bg-black/80 text-white text-[11px] font-bold px-3 py-1 z-50">
                Institucional - DevolvaFácil
              </div>
            )}
            
            <video 
              className="w-full h-full object-cover"
              controls
              muted
              autoPlay
              playsInline
            >
              <source src="/INSTITUCIONAL.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos em HTML5.
            </video>
          </div>
        </div>
        
      </div>
    </section>
  );
}
