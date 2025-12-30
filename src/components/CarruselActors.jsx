import { Casting } from "./casting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./carruselActors.css";
export function CarruselActors({ props }) {
  return (
    <Swiper
      className="carrusel"
      modules={[Autoplay, Navigation]}
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={8}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        220:{
          slidesPerView: 1,
        },
        560: {
          slidesPerView: 1,
          
        },
        808: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {
        /* RECORER PROPS DE REPARTO */
        
        props?.map((reparto) => (
          <SwiperSlide className="slide" key={reparto.id}>
            <Casting props={reparto} />
          </SwiperSlide>
        ))
        
      }
      {/*FLECHAS DE NAVEGACION */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
}
