import { useNavigate } from "react-router-dom";
import style from "./movieCard.module.css";

export function MovieCard({ props }) {
  const navigate = useNavigate();
  const img = "https://image.tmdb.org/t/p/w300" + props.poster_path;

  const irDetalle = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate("/movies/" + props.id);
      });
    } else {
      navigate("/movies/" + props.id);
    }
  };

  return (
    <li className={style.containerCard} onClick={irDetalle}>
      <img src={img} alt={props.title} className={style.link} />
      <div className={style.title}>{props.title}</div>
    </li>
  );
}
