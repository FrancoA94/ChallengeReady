import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import CardComponent from "../components/cardComponent";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";
import { GET_LOCATIONS } from "./querys";

const LocationQuery = () => {
  const [page, setPage] = useState(1);

  const { HandlerFavorite, keyword } = useContext(cartContext);

  const { loading, error, data } = useQuery(
    GET_LOCATIONS(page, keyword.length >2? keyword : "")
  );

  const handlerNextPage = () => setPage(page + 1);
  const handlerPrevPage = () => setPage(page - 1);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {data &&
              data.locations.results.map((location, index) => (
                <CardComponent
                  characters={location}
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

export default LocationQuery;
