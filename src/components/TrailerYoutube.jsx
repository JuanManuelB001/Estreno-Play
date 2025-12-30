import { useEffect, useState } from "react";
import { getApi } from "../data/httpClient";

export function TrailerYoutube({ id }) {
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    // LIMPIAR ANTES DE VER LOS TRAILERS
    setLoading(true);
    setTrailerKey(null);

    getApi(`/movie/${id}/videos`)
      .then((data) => {
        const videos = data.results;
        if (!videos || videos.length === 0) return;
        const foundTrailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (foundTrailer) {
          // GUARDAR LA KEY DE YOUTUBE
          console.log(foundTrailer.key);
          setTrailerKey(foundTrailer.key);
        }
      })
      .catch((error)=>{
        console.error("Error cargando Trailer:", error)
      })
      .finally(()=>{
        setLoading(false);
      });
      
  }, [id]);
  if(loading) return <p>Cargando Trailer...</p>
  return (
    <div>
      {trailerKey ? (
        <iframe
          width="100%"
          height="400"
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder="0"
          allowFullScreen
        />
      ) : (
        <p>No hay Trailer Disponible</p>
      )}
     
    </div>
  );
}
