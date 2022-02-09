import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { cartContext } from "../../context/Fav";
import { Title, Loading, Card, Button } from "../../components";
import { GET_LOCATIONS } from "../../apollo/querysLocations/querys";
import { Container } from "../homePage/Home.styled";

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
      <Container>
        <main>
          <div>
            {data &&
              data.locations.results.map((location, index) => (
                <Card
                  characters={location}
                  HandlerFavorite={HandlerFavorite}
                  key={index}
                />
              ))}
          </div>
        </main>
      </Container>
      <Title>Page {page}</Title>
      <Button disabled={page === 1} onClick={handlerPrevPage}>
        Previous Page
      </Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </div>
  );
};

export default LocationQuery;
