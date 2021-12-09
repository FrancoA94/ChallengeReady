import { useState } from "react";
import Link from "next/link";
import { Detail } from "../pages";

const CardComponent = ({ characters, HandlerFavorite }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={"card"}>
      <img src={characters.image} style={{ width: "100%" }} />
      <Link href="/detail/[id]" as={`/detail/${characters.id}`}>
        Mas detalles
      </Link>
      <h2>{characters.name}</h2>
      <p>{characters.species}</p>
      <button
        onClick={() => {
          HandlerFavorite(characters);
          setVisible(!visible);
        }}
      >
        {visible ? "Agregar a favoritos" : "Eliminar de favoritos"}
      </button>
    </div>
  );
};

export default CardComponent;
