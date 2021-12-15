import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { StyledButton, StyledLink } from "./StyledLink";

const CardComponent = ({ characters, HandlerFavorite }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={"card"}>
      <img src={characters.image} style={{ width: "100%" }} />
      <Link href="/detail/[id]" as={`/detail/${characters.id}`}>
        <StyledButton>Más detalles</StyledButton>
      </Link>
      <h2>{characters.name}</h2>
      <p>{characters.species}</p>
      <Button
        onClick={() => {
          HandlerFavorite(characters);
          setVisible(!visible);
        }}
      >
        {visible ? "Agregar a favoritos" : "Eliminar de favoritos"}
      </Button>
    </div>
  );
};

export default CardComponent;
