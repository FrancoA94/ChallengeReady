import { useContext } from "react";
import { cartContext } from "../../context/Fav";
import { Title, Loading, Button, Card } from "../../components";
import { Container } from "../homePage/Home.styled";

import { useGetCharacters } from "../../hooks/useGetCharacters";

const CharacterQuery = () => {
  const { HandlerFavorite, page } = useContext(cartContext);
  const { characters, loading, error, handlerNextPage, handlerPrevPage } =
    useGetCharacters();

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <>
      <Container>
        {characters &&
          characters.map((character, index) => (
            <Card
              characters={character}
              HandlerFavorite={HandlerFavorite}
              key={index}
            />
          ))}
      </Container>
      <Title>Page {page}</Title>
      <Button disabled={page === 1} onClick={handlerPrevPage}>
        Previous Page
      </Button>
      <Button onClick={handlerNextPage}>Next Page</Button>
    </>
  );
};

export default CharacterQuery;
