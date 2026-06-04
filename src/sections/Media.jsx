import React from 'react';
// Importações essenciais do Swiper para React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importações dos estilos base do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Media() {
  const mediaItems = [
    {
      title: "Logística reversa",
      text: "Carlos Tanaka, CEO da PostalGow, detalha como a inovação facilita a devolução de equipamentos e melhora a gestão nos Centros de Distribuição (CDs).",
      image: "/assets/1.png", // Certifique-se de salvar a imagem do site antigo
      link: "https://www.cartadelogistica.com.br/plataforma-devolvafacil-otimiza-logistica-reversa-nas-telecomunicacoes/"
    },
    {
      title: "Eficiência",
      text: "Plataforma DevolvaFácil torna mais eficiente a logística reversa nas telecomunicações.",
      image: "/assets/3.png",
      link: "https://jornalempresasenegocios.com.br/outras-colunas/news-ti/newsti-18-09-2024/"
    },
    {
      title: "Brasil Sustentável",
      text: "De acordo com a UNITAR, em 2022, o mundo gerou 62 milhões de toneladas de resíduos eletrônicos.",
      image: "/assets/2.png",
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
            // Quando a tela for >= 768px (Tablet/Desktop), exibe 2 slides
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
          className="pb-12" // Espaçamento extra inferior para os "bullets" da paginação
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="flex flex-col h-full bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <img 
                    src={item.image} 
                    alt={`Matéria sobre ${item.title}`} 
                    className="w-full h-64 object-cover object-center" 
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

      {/* Ajustes finos nos estilos dos botões do Swiper usando Tailwind Arbitrary Values */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #2563eb; /* text-blue-600 */
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
        }
      `}</style>
    </section>
  );
}