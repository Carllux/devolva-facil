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
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
          DESCOMPLICAMOS A SUA DEVOLUÇÃO.
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button 
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto"
            onClick={() => document.getElementById('video-apresentacao').scrollIntoView({ behavior: 'smooth' })}
          >
            Assista
          </button>
          <a href="http://wa.link/mq496p" className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50">
            Agendar Reunião
          </a>
        </div>

        {/* Container que monitora a visibilidade */}
        <div ref={videoRef} className="w-full aspect-video">
          <div 
            id="video-apresentacao"
            className={`
              transition-all duration-500 ease-in-out bg-black rounded-2xl shadow-2xl border border-gray-200 overflow-hidden
              ${isSticky 
                ? "fixed bottom-6 right-6 w-72 aspect-video z-[9999] scale-100 shadow-xl" 
                : "w-full aspect-video"}
            `}
          >
            {isSticky && (
              <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
                Institucional - DevolvaFácil
              </div>
            )}
            
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay // Autoplay ativado
              muted // Necessário para autoplay funcionar nos navegadores
              playsInline
            >
              <source src="/INSTITUCIONAL.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
