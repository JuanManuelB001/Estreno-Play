import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdapter } from "axios";
import { getApi } from "../data/httpClient";
import { GetImages } from "../utils/GetImages";

export function DetailsPage(){
    let {movieId} = useParams();
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getApi("/movie/"+movieId).then((data)=>{
            setMovies(data);
        });
        
    },[movieId]);
    let imagen = GetImages(movies.poster_path, 500);
    return(
        <div>
            <div>
                <img src={imagen} alt={movies.title}/>
                <p><strong>Tittle:</strong> {movies.title}</p>
            </div>
        </div>
    );
}