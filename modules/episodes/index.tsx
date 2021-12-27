import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { cartContext } from "../../context/Fav";
import Loading from "../../components/LoadingComponent";
import { Button } from "../../components/Button";
import { H1 } from "../../components/StyledTittle";
import { GET_EPISODES } from "../../apollo/querysEpisodes/querys";
import CardComponent from "../../components/cardComponent";

const EpisodeQuery = () => {

  const { listFav, HandlerFavorite, keyword, page, setPage } = useContext(cartContext);

  const { loading, error, data } = useQuery(
    GET_EPISODES(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(page + 1);
  const handlerPrevPage = () => setPage(page - 1);
  if (loading) return <Loading/>
  if (error) return <p>Error</p>;

  return (
    <div>
      <div>
        <main>
            {data &&
              data.episodes.results.map((episode, index) => (
                <CardComponent
                  characters={episode}
                  HandlerFavorite={HandlerFavorite}
                  key={index}
                />
              ))}
        </main>
      </div>
      <H1>{page>1?"Page {page}" : "Page 1"}</H1>
      <Button disabled={page===1} onClick={handlerPrevPage}>Previous Page</Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </div>
  );
};

export default EpisodeQuery;
