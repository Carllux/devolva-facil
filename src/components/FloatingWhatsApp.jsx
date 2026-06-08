import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "http://wa.link/mq496p";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      // Aumentei o z-index para 100 e garanti que ele fique no canto inferior direito.
      // O z-50 do Header não o afetará.
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#20ba56] hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
        className="w-8 h-8 z-[101]"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.1-115-65.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-104.2 84.8-189 189-189 50.6 0 98.1 19.7 133.8 55.5 35.8 35.8 55.5 83.2 55.5 133.8 0 104.2-84.8 189-189 189zm103.6-139.2c-5.7-2.8-33.6-16.6-38.8-18.5-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.5-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.8-45.7-28.1-16.9-15.1-28.3-33.8-31.6-39.5-3.3-5.7-.3-8.8 2.5-11.6 2.6-2.6 5.7-6.6 8.5-9.9 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-10 1.4-15.2 7.1-5.2 5.7-20 19.4-20 47.4 0 28 20.4 55 23.2 58.8 2.8 3.8 40 61.1 97 85.6 13.6 5.8 24.2 9.3 32.5 11.9 13.7 4.3 26.2 3.7 36 2.3 11.1-1.6 33.6-13.7 38.3-27 4.7-13.3 4.7-24.7 3.3-27-1.4-2.4-5.2-3.8-10.9-6.6z"/>
      </svg>
      
      {/* Efeito de pulso */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity duration-300 -z-10"></span>
    </a>
  );
}
