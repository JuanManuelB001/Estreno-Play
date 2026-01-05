import { Casting } from "./casting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// IMPORTANTE: Importar estilos de módulos
import "swiper/css";
import "swiper/css/navigation";
import "./carruselActors.css";

export function CarruselActors({ props }) {
  // 1. Validación de carga
  if (!props || props.length === 0) return <p>Cargando reparto...</p>;

  return (
    <Swiper
      className="carrusel"
      modules={[Autoplay, Navigation]}
      slidesPerView={1} // Valor por defecto inicial
      spaceBetween={8}
      loop={props.length > 3} // Solo hace loop si hay suficientes elementos
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true} // Simplificado para probar
      breakpoints={{
        560: { slidesPerView: 1 },
        808: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {props.map((reparto) => (
        <SwiperSlide className="slide" key={reparto.id}>
          <Casting props={reparto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}