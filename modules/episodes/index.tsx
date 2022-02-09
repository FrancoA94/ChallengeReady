import { useContext } from "react";
import { cartContext } from "../../context/Fav";
import { Title, Loading, Card, Button } from "../../components";
import { Container } from "../homePage/Home.styled";

import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../apollo/querysEpisodes/querys";

const EpisodeQuery = () => {
  const { HandlerFavorite, keyword, page, setPage } = useContext(cartContext);

  const { loading, error, data } = useQuery(
    GET_EPISODES(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(page + 1);
  const handlerPrevPage = () => setPage(page - 1);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <>
      <Container>
        <main>
          {data &&
            data?.episodes?.results?.map((episode: any, index: number) => (
              <Card
                characters={episode}
                HandlerFavorite={HandlerFavorite}
                key={index}
              />
            ))}
        </main>
      </Container>
      <Title>{page > 1 ? "Page {page}" : "Page 1"}</Title>
      <Button disabled={page === 1} onClick={handlerPrevPage}>
        Previous Page
      </Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </>
  );
};

export default EpisodeQuery;
