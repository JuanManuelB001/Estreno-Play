import { useEffect, useState } from "react";
import { getApi } from "../data/httpClient";
import { MovieCard } from "./MovieCard";

export function ContentMovieCard(){
    const [movies, setMovie] = useState([]);
    // CARGAR PELICULAS
    useEffect((data)=>{
        getApi("/discover/movie").then((data)=>{
            setMovie(data.results);
            console.log(data.results);
        });
    }, []);
    return(
        <div>
            <ul>
                {movies?.map((mov)=>(
                    <MovieCard key={mov.id} props={mov} />
                ))}
            </ul>
        </div>
    );
}