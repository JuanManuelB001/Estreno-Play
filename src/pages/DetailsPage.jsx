import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdapter } from "axios";
import { getApi } from "../data/httpClient";
import { GetImages } from "../utils/GetImages";
import { StartRate } from "../components/StartRate";
import you from "react-youtube";
import "./detailsPage.css"
import { CarruselActors } from "../components/CarruselActors";
export function DetailsPage(){
    let {movieId} = useParams();
    const [movies, setMovies] = useState([])
    const [genero, setGenero]= useState([]);
    const [reparto, setReparto] = useState([]);

    // TRAILER
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({title: "Loading Movie..."})
    const [playing, setPlaying] = useState(false);

    useEffect(()=>{
        getApi("/movie/"+movieId).then((data)=>{
            setMovies(data);
            
        });
        //OPTENER EL REPARTO DE LA PELICULA
        getApi("/movie/"+movieId+"/credits").then((data)=>{
            setReparto(data.cast);
            
        })
        
    },[movieId]);
    let imagen = GetImages(movies.poster_path, 500);
    return(
        <div>
            <h2 className="title">{movies.title}</h2>
            <div className="detailsContainer" >
                
                <img src={imagen} alt={movies.title} className="imagenPost" />
                <div className={"col movieDetails"}>
                    <p>popularidad</p>
                <StartRate popularity= {movies.popularity}/>
                <p><strong>Popularity</strong> {movies.popularity}</p>
                <p><strong>Tittle:</strong> {movies.title}</p>
                <p><strong>Genero:</strong></p>
                <ul className="lista">
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
            <div className="reparto">
                <h2 className="title">Reparto</h2>
                <CarruselActors props={reparto}/>
            </div>
        </div>
    );
}