
import { useEffect, useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { getApi } from "../data/httpClient";
import { GetImages } from "../utils/GetImages";
import  carrusel from  "./carruselMovie.css"
export function CarruselMovie(){
    const [movies, setMovies] = useState([])
    
    useEffect(()=>{
        getApi("/discover/movie").then((data)=>{
            setMovies(data.results);
            
        });
    }, []);
    return(
        <Swiper className={carrusel.swiper}
        spaceBetween={50}
        slidesPerView={3}
        >
            {movies.slice(0,5).map((movie)=>(
                <SwiperSlide>
                    <div>
                    <img src={GetImages(movie.poster_path,300 )} alt={movie.title} />
                    <h4>{movie.title}</h4>
                </div>
                </SwiperSlide>
            ))}
            <p>fin CarruselMovie</p>
        </Swiper>
    );
}