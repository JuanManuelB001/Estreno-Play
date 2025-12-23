
import { Casting } from "./casting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./carruselActors.css"
export function CarruselActors({props}){
    return(

        <Swiper 
        className="carrusel"
        modules={[Autoplay, Navigation]}  // Usar ambos módulos: Autoplay y Navigation
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={8}
            loop={true}
            autoplay={{
                delay: 3000, // Tiempo de pausa entre slides
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: '.swiper-button-next',  // Clase correcta para el botón siguiente
                prevEl: '.swiper-button-prev',  // Clase correcta para el botón anterior
            }}
        >
            
            {/* RECORER PROPS DE REPARTO */
                props?.map((reparto) =>(
                    <SwiperSlide key={reparto.id}>
                    <Casting  props={reparto}/>
                    </SwiperSlide>
                ))
            }
            {/*FLECHAS DE NAVEGACION */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            
        </Swiper>
    );
}