import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";

const Favorite = () => {
  const { listFav, HandlerFavorite } = useContext(cartContext);
 
  return (
    <div>
      <h1>Personajes Favoritos</h1>
      <Link href="/">
        <a>Volver a la Home</a>
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
    </div>
  );
};

export default Favorite;
