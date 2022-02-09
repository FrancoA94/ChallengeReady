import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "../context/Fav";
import { CardWrapper, StyledButton } from "../components";

const Favorite = () => {
  const { listFav } = useContext(cartContext);

  return (
    <CardWrapper>
      <h1>Personajes Favoritos</h1>
      <Link href="/">
        <StyledButton>Go back to Home</StyledButton>
      </Link>
      <a>
        {listFav.map((item, index) => (
          <div key={index}>
            <img src={item.image} style={{ width: "100%" }} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </a>
    </CardWrapper>
  );
};

export default Favorite;
