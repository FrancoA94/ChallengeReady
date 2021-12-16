import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import CardComponent from "../components/cardComponent";
import { GET_CHARACTERS } from "./querys";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";
import { Button, ButtonPage } from "../components/Button";
import Loading from "../components/LoadingComponent";
import {H1} from '../components/StyledTittle'

const CharacterQuery = () => {
  const [page, setPage] = useState(1);

  const { listFav, HandlerFavorite, optionSelected, keyword } = useContext(cartContext);


  const { loading, error, data } = useQuery(
    GET_CHARACTERS(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(data.characters.info.next);
  const handlerPrevPage = () => setPage(data.characters.info.prev);
  if (loading) return <Loading/>
  if (error) return <p>Error</p>;

  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {data &&
              data.characters.results.map((character, index) => (
                <CardComponent
                  characters={character}
                  HandlerFavorite={HandlerFavorite}
                  key={index}
                />
              ))}
          </div>
        </main>
      </div>
      <H1>Page {page}</H1>
      <Button onClick={handlerPrevPage}>Previous Page</Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </div>
  );
};

export default CharacterQuery;
