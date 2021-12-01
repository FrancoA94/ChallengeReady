import { useState } from "react";
import Link from "next/link";
import {Detail} from "../pages"

const CardComponent = ({ characters, HandlerFavorite }) => {
  const [visible, setVisible] = useState(true);

  return (
    <a className={"card"}>
      <img src={characters.image} style={{ width: "100%" }} />
      <Link href="/detail/[id]" as={`/detail/${characters.id}`}>
        <a>Mas detalles</a>
      </Link>
      <h2>{characters.name}</h2>
      <p>{characters.species}</p>
      <button
        onClick={(id) => {
          HandlerFavorite(characters);
          setVisible(!visible);
          <Detail id={id}/>
        }}
      >
        {visible ? "Agregar a favoritos" : "Eliminar de favoritos"}
      </button>
    </a>
  );
};

export default CardComponent;
