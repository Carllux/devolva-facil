import React, { useEffect, useRef, useState } from 'react';
// ✅ Vídeo importado como módulo – o Vite gerará URL com hash e cache eficiente
import videoWebm from './../assets/INSTITUCIONAL.webm';

export default function Hero() {
  const sentinelRef = useRef(null);
  const videoElementRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPrompt, setShowPrompt] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);

  // Observer para efeito sticky
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  // Timer para autoplay
  useEffect(() => {
    if (!showPrompt) return;
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handlePlayChoice(true);
    }
  }, [timeLeft, showPrompt]);

  const handlePlayChoice = (mute) => {
    setIsMuted(mute);
    setShowPrompt(false);
    if (videoElementRef.current) {
      videoElementRef.current.muted = mute;
      videoElementRef.current.play().catch(error => {
        console.log("A reprodução automática foi evitada pelo navegador:", error);
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
          DESCOMPLICAMOS A SUA DEVOLUÇÃO.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto"
            onClick={() => document.getElementById('video-wrapper').scrollIntoView({ behavior: 'smooth' })}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />

        <div id="video-wrapper" className="w-full aspect-video relative">
          <div
            id="video-apresentacao"
            className={`
              transition-all duration-500 ease-in-out bg-black rounded-2xl overflow-hidden
              ${isSticky
                ? "fixed bottom-6 right-6 w-72 aspect-video z-[9999] shadow-2xl cursor-pointer hover:scale-105 border-2 border-white"
                : "absolute inset-0 w-full h-full shadow-2xl border border-gray-200"}
            `}
          >
            {isSticky && !showPrompt && (
              <div className="absolute top-0 left-0 w-full bg-black/80 text-white text-[11px] font-bold px-3 py-1 z-50 pointer-events-none">
                Institucional - DevolvaFácil
              </div>
            )}

            {showPrompt && (
              <div className="absolute inset-0 z-50 bg-black/80 flex flex-col items-center justify-center text-white p-4 backdrop-blur-sm">
                <h3 className={`${isSticky ? 'text-sm mb-2' : 'text-xl md:text-2xl mb-2'} font-bold text-center`}>
                  Deseja assistir ao vídeo com som?
                </h3>
                <p className={`${isSticky ? 'text-[10px]' : 'text-sm'} text-gray-300 mb-6`}>
                  Iniciando no modo mudo em {timeLeft}s...
                </p>
                <div className={`flex ${isSticky ? 'flex-col gap-2' : 'flex-row gap-4'}`}>
                  <button
                    onClick={() => handlePlayChoice(false)}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base"
                  >
                    <span>🔊</span> Com Som
                  </button>
                  <button
                    onClick={() => handlePlayChoice(true)}
                    className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base"
                  >
                    <span>🔇</span> Mudo
                  </button>
                </div>
              </div>
            )}

            <video
              ref={videoElementRef}
              className="w-full h-full object-cover"
              controls={!showPrompt}
              muted={isMuted}
              playsInline
            >
              {/* ✅ Source usando a variável importada */}
              <source src={videoWebm} type="video/webm" />
              Seu navegador não suporta vídeos em HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}