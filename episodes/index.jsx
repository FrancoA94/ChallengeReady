import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";
import { GET_EPISODES } from "./querys";
import CardComponent from "../components/cardComponent";
import Loading from "../components/LoadingComponent";
import { Button } from "../components/Button";
import { H1 } from "../components/StyledTittle";

const EpisodeQuery = () => {
  const [page, setPage] = useState(1);

  const { listFav, HandlerFavorite, keyword } = useContext(cartContext);

  const { loading, error, data } = useQuery(
    GET_EPISODES(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(page + 1);
  const handlerPrevPage = () => setPage(page - 1);
  if (loading) return <Loading/>
  if (error) return <p>Error</p>;

  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {data &&
              data.episodes.results.map((episode, index) => (
                <CardComponent
                  characters={episode}
                  HandlerFavorite={HandlerFavorite}
                  key={index}
                />
              ))}
          </div>
        </main>
      </div>
      <H1>{page>1?"Page {page}" : "Page 1"}</H1>
      <Button onClick={handlerPrevPage}>Previous Page</Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </div>
  );
};

export default EpisodeQuery;
