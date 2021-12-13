import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";
import { GET_EPISODES } from "./querys";
import CardEpisode from "./cardEpisodes";

const EpisodeQuery = () => {
  const [page, setPage] = useState(1);

  const { listFav, HandlerFavorite, keyword } = useContext(cartContext);

  const { loading, error, data } = useQuery(
    GET_EPISODES(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(data.episodes.next);
  const handlerPrevPage = () => setPage(data.episodes.prev);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {data &&
              data.episodes.results.map((episode, index) => (
                <CardEpisode
                  episodes={episode}
                  HandlerFavorite={HandlerFavorite}
                  key={index}
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

export default EpisodeQuery;
