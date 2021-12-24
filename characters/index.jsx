import { useContext } from "react";
import { useQuery } from "@apollo/client";
import CardComponent from "../components/cardComponent";
import { GET_CHARACTERS } from "./querys";
import { cartContext } from "../context/Fav";
import { Button} from "../components/Button";
import Loading from "../components/LoadingComponent";
import { H1 } from "../components/StyledTittle";

const CharacterQuery = () => {
  const { listFav, HandlerFavorite, optionSelected, keyword, page, setPage } =
    useContext(cartContext);

  const { loading, error, data } = useQuery(
    GET_CHARACTERS(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(data.characters.info.next);
  const handlerPrevPage = () => setPage(data.characters.info.prev);
  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div>
        <main>
          <div>
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
      <Button disabled={page === 1} onClick={handlerPrevPage}>
        Previous Page
      </Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </div>
  );
};

export default CharacterQuery;
