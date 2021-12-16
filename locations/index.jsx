import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import CardComponent from "../components/cardComponent";
import { cartContext } from "../context/Fav";
import styles from "../styles/Home.module.css";
import { GET_LOCATIONS } from "./querys";
import Loading from "../components/LoadingComponent";
import { Button } from "../components/Button";
import { H1 } from "../components/StyledTittle";

const LocationQuery = () => {
  const [page, setPage] = useState(1);

  const { HandlerFavorite, keyword } = useContext(cartContext);

  const { loading, error, data } = useQuery(
    GET_LOCATIONS(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(page + 1);
  const handlerPrevPage = () => setPage(page - 1);
  if (loading) return <Loading />;
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
      <H1>Page {page}</H1>
      <Button onClick={handlerPrevPage}>Previous Page</Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </div>
  );
};

export default LocationQuery;
