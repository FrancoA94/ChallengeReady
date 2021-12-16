import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { StyledButton} from "./StyledLink";
import { CardWrapper } from "./StyledCard";

const CardComponent = ({ characters, HandlerFavorite }) => {
  const [visible, setVisible] = useState(true);

  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};

export default CardComponent;
