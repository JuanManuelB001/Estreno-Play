import { Link } from "react-router-dom";
import style from "./movieCard.module.css";
export function MovieCard({props}){
    const img = "https://image.tmdb.org/t/p/w300"+ props.poster_path;

    return(
        <li className={style.containerCard}>
                 <Link to={"/movies/"+props.id}>
                 <img src={img} alt={props.title} className={style.link} />
                
                 </Link>
                 <div className={style.title}>
                    {props.title}
                 </div> 
        </li>
    );
}