import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ✅ Imagens importadas como módulos (otimização automática no build)
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

export default function Media() {
  const mediaItems = [
    {
      title: "Logística reversa",
      text: "Carlos Tanaka, CEO da PostalGow, detalha como a inovação facilita a devolução de equipamentos e melhora a gestão nos Centros de Distribuição (CDs).",
      image: img1,
      link: "https://www.cartadelogistica.com.br/plataforma-devolvafacil-otimiza-logistica-reversa-nas-telecomunicacoes/"
    },
    {
      title: "Eficiência",
      text: "Plataforma DevolvaFácil torna mais eficiente a logística reversa nas telecomunicações.",
      image: img3,
      link: "https://jornalempresasenegocios.com.br/outras-colunas/news-ti/newsti-18-09-2024/"
    },
    {
      title: "Brasil Sustentável",
      text: "De acordo com a UNITAR, em 2022, o mundo gerou 62 milhões de toneladas de resíduos eletrônicos.",
      image: img2,
      link: "https://www.brasil247.com/brasil-sustentavel/plataforma-devolvafacil-torna-mais-eficiente-a-logistica-reversa-nas-telecomunicacoes"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="namidia">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
          DevolvaFácil na mídia
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="pb-12"
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="flex flex-col h-full bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <img 
                    src={item.image} 
                    alt={`Matéria sobre ${item.title}`} 
                    className="w-full h-64 object-cover object-center" 
                    loading="lazy"            // ✅ Carrega sob demanda
                    decoding="async"         // ✅ Decodificação assíncrona
                  />
                </a>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-blue-700 mb-3 hover:underline">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium flex-grow">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #2563eb;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
        }
      `}</style>
    </section>
  );
}