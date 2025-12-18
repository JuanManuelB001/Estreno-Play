import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { getApi } from "../data/httpClient";
import { GetImages } from "../utils/GetImages";
import carrusel from "./carruselMovie.module.css";
import {StartRate} from "./StartRate";
export function CarruselMovie() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getApi("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <Swiper
      className={carrusel.swiper}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}        // Mostrar 3 imágenes al mismo tiempo
      slidesPerGroup={1}       // Avanzar 1 imagen por vez
      spaceBetween={8}
      loop={true}
    >
      {movies.slice(0, 5).map((movie) => (
        <SwiperSlide key={movie.id} className={carrusel.slide}>
          <img
            src={GetImages(movie.poster_path, 500)}
            alt={movie.title}
            className={carrusel.img}
          />
          <div >
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <StartRate popularity={movie.popularity}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
