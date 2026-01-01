import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getApi } from "../data/httpClient";
import { GetImages } from "../utils/GetImages";
import carrusel from "./carruselMovie.module.css";
import { StartRate } from "./StartRate";
import { TrailerYoutube } from "./TrailerYoutube";
export function CarruselMovie() {
  const navigation = useNavigate();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getApi("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  // AJUSTE NAVEGACION DETAILS PAGE
  const irDetalle = (id) =>{
    if(document.startViewTransition){
      document.startViewTransition(()=>{
     navigation("/movies/" + id);
   })}; 
      
  }

  return (
    <Swiper
      className={carrusel.swiper}
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1} // Mostrar 3 imágenes al mismo tiempo
      slidesPerGroup={1} // Avanzar 1 imagen por vez
      spaceBetween={8}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      
    >
      {movies.slice(0, 5).map((movie) => (
        <SwiperSlide key={movie.id} className={carrusel.slide}
          onClick={()=> irDetalle(movie.id)}
            >
            <img
              src={GetImages(movie.poster_path, 500)}
              alt={movie.title}
              className={carrusel.img}
            />
      
          <div className={carrusel.containerText}>
            <p>{movie.title}</p>
            <p className={carrusel.text}>{movie.overview}</p>
            <StartRate popularity={movie.popularity} />
          </div>
        </SwiperSlide>
      ))}

      {/* BOTONES NAVEGACION */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
}
