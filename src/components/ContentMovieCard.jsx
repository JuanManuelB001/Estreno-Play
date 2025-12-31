import { useEffect, useState } from "react";
import { getApi } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import { CarruselMovie } from "./CarruselMovie";
import "./contentMovie.css"
import { TrailerYoutube } from "./TrailerYoutube";
export function ContentMovieCard(){
    const [movies, setMovie] = useState([]);
    const [search, setSearch] = useState("");
    // CARGAR PELICULAS
    useEffect(()=>{
        if(search === ""){
            getApi("/discover/movie").then((data)=>{
                setMovie(data.results);
            })
        }else{
            getApi(`/search/movie?query=${search}`).then((data)=>{
                setMovie(data.results);
            })
        }
    }, [search]);
    return(
        <div >
            <div className="buscador">
                <label htmlFor="pelicula" className="pelicula">Buscar Peliculas</label>
                <input type="text" id="pelicula" placeholder="Buscar pelicula"value={search}  onChange={(e)=> setSearch(e.target.value)} className="buscar"/>
            </div>
            {/*MOSTRAR CARRUSEL SI EL INPUT ESTA VACIO */}
            {search === ""  && <CarruselMovie/>}
            <div className="container">
                {movies?.map((mov)=>(
                    <MovieCard key={mov.id} props={mov} />
                ))}
            </div>
                
        </div>
    );
}