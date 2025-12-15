import { Link } from "react-router-dom";

export function MovieCard({props}){
    const img = "https://image.tmdb.org/t/p/w300"+ props.poster_path;

    return(
        <div className="containerCard">
                 <Link to={"/movies/"+props.id}>
                 <img src={img} alt={props.title}/>
                 </Link>
                 <div className="title">
                    {props.title}
                 </div>
        </div>
    );
}