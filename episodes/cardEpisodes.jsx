import { useState } from "react";
import Link from "next/Link";

const CardEpisode = ({ episodes, HandlerFavorite }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={"card"}>
      <img src={episodes.image} style={{ width: "100%" }} />
      <Link href="/detail/[id]" as={`/detail/${episodes.id}`}>
        Mas detalles
      </Link>
      <h2>Name: {episodes.name}</h2>
      <h3>Air Date: {episodes.air_date}</h3>
      <h4>{episodes.id}</h4>
      <button
        onClick={() => {
          HandlerFavorite(episodes);
          setVisible(!visible);
        }}
      >
        {visible ? "Agregar a favoritos" : "Eliminar de favoritos"}
      </button>
    </div>
  );
};

export default CardEpisode;
