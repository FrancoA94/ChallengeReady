import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";
import { StyledButton } from "../components/StyledLink";
import { CardWrapper } from "../components/StyledCard";

const Favorite = () => {
  const { listFav, HandlerFavorite } = useContext(cartContext);

  return (
    <CardWrapper>
      <h1>Personajes Favoritos</h1>
      <Link href="/">
        <StyledButton>Volver a la Home</StyledButton>
      </Link>
      <a className={"card"}>
        {listFav.map((item) => {
          return (
            <div className={styles.container}>
              <main className={styles.main}>
                <div className={styles.grid}>
                  <img src={item.image} style={{ width: "100%" }} />
                  <h2>{item.name}</h2>
                </div>
              </main>
            </div>
          );
        })}
      </a>
    </CardWrapper>
  );
};

export default Favorite;
