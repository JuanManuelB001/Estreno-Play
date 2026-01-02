import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdapter } from "axios";
import { getApi } from "../data/httpClient";
import { GetImages } from "../utils/GetImages";
import { StartRate } from "../components/StartRate";
import you from "react-youtube";
import "./detailsPage.css";
import { CarruselActors } from "../components/CarruselActors";
import { Companies } from "../components/Companies";
import { TrailerYoutube } from "../components/TrailerYoutube";
export function DetailsPage() {
  let { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [genero, setGenero] = useState([]);
  const [reparto, setReparto] = useState([]);
 const [showTrailer, setShowTrailer] = useState(false);
  // TRAILER
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movie..." });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // COLOCAR EL SCROLL DE DETAIL PAGE EN 0 
    window.scrollTo(0,0);
    getApi("/movie/" + movieId).then((data) => {
      setMovies(data);
      setGenero(data.genres);
    });
    //OPTENER EL REPARTO DE LA PELICULA
    getApi("/movie/" + movieId + "/credits").then((data) => {
      setReparto(data.cast);
    });
  }, [movieId]);
  let imagen = GetImages(movies.poster_path, 500);
  return (
    <div className="page slide-in">
      <h2 className="title">{movies.title}</h2>
      <div className="detailsContainer">
        <img src={imagen} alt={movies.title} className="imagenPost" />
        <div className={"col movieDetails"}>
          <p className="title-data">popularity</p>
          <StartRate popularity={movies.popularity} />
          
          <p>
            <strong className="title-data">Tittle:</strong> {movies.title}
          </p>
          <p>
            <strong className="title-data">Genero:</strong>
          </p>
          <ul className="lista">
            {genero?.map((gen) => (
              <li key={gen.id}>{gen.name}</li>
            ))}
          </ul>
          <p>
            <strong className="title-data">OverView</strong> {movies.overview}
          </p>

          <p>productor companies</p>
          <div className="companiesContainer">
            {movies.production_companies?.map((companie) => (
              <Companies key={movies.id} props={companie} />
            ))}
          </div>

          <p className="contrie">
            Contrie productor
            {movies.production_countries?.map((contry) => (
              <span key={movies.id}> {contry.name} </span>
            ))}
          </p>
        <button className="trailer" onClick={()=>setShowTrailer(true)} >  Ver Trailer 🎬</button>
         <button className="trailer closeTrailer" onClick={()=> setShowTrailer(false)} >Cerrar 🎬</button>
           {/* VALIDACION PARA MOSTRAR EL TRAILER */}
          {showTrailer && <TrailerYoutube id={movies.id}/>}
        </div>
      </div>
      <div className="reparto">
        <h2 className="title">Reparto</h2>
        <CarruselActors props={reparto} />
      </div>
    </div>
  );
}
