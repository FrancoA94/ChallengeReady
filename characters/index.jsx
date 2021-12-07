import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import CardComponent from "../components/cardComponent";
import { GET_CHARACTERS } from "./querys";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";

const CharacterQuery = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const { listFav, HandlerFavorite } = useContext(cartContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const { loading, error, data } = useQuery(
    GET_CHARACTERS(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(data.characters.info.next);
  const handlerPrevPage = () => setPage(data.characters.info.prev);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  console.log("Lista", listFav);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Search a character"
          type="text"
          value={keyword}
        />
      </form>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {data &&
              data.characters.results.map((character) => (
                <CardComponent
                  characters={character}
                  HandlerFavorite={HandlerFavorite}
                />
              ))}
          </div>
        </main>
      </div>
      <h1>Page {page}</h1>
      <button onClick={handlerPrevPage}>Previous</button>
      <button onClick={handlerNextPage}>Next Page</button>
    </div>
  );
};

export default CharacterQuery;
