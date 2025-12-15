import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdapter } from "axios";
import { getApi } from "../data/httpClient";
import { GetImages } from "../utils/GetImages";
import { StartRate } from "../components/StartRate";
export function DetailsPage(){
    let {movieId} = useParams();
    const [movies, setMovies] = useState([])
    const [genero, setGenero]= useState([]);
    useEffect(()=>{
        getApi("/movie/"+movieId).then((data)=>{
            setMovies(data);
            setGenero(data.genres);
        });
        
    },[movieId]);
    let imagen = GetImages(movies.poster_path, 500);
    return(
        <div>
            <div>
                <img src={imagen} alt={movies.title}/>
                <p>popularidad</p>
                <StartRate popularity= {movies.popularity}/>
                <p><strong>Popularity</strong> {movies.popularity}</p>
                <p><strong>Tittle:</strong> {movies.title}</p>
                <p><strong>Genero:</strong></p>
                <ul>
                    {genero?.map((gen)=>(
                        <li key={gen.id}>
                            {gen.name}
                        </li>
                    ))}
                </ul>
                <p>
                    <strong>OverView</strong> {movies.overview}
                </p>
            </div>
        </div>
    );
}