import Link from "next/link";
import NavBar from "../navBar/NavBar";
import { useContext } from "react";
import { cartContext } from "../context/Fav";
import EpisodeQuery from "../modules/episodes";
import Searcher from "../header/searcher";
import { H1 } from "../components/StyledTittle";
import { StyledButton } from "../components/StyledLink";
import CharacterQuery from "../modules/characters";
import LocationQuery from "../modules/locations";

export default function Home() {
  const { optionSelected } = useContext(cartContext);
  console.log("optionSelected", optionSelected);
  return (
    <div>
      <H1>Welcome to galery of Ricky and Morty!</H1>
      <h2>
        <Link href="/favorites">
          <StyledButton>Favorites</StyledButton>
          </Link>
      </h2>
      <NavBar />
      <Searcher/>
      {optionSelected === "CHARACTERS" && <CharacterQuery />}
      {optionSelected === "LOCATIONS" && <LocationQuery />}
      {optionSelected === "EPISODES" && <EpisodeQuery />}
      <footer></footer>
    </div>
  );
}
