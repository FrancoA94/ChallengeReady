import Link from "next/link";
import { useContext } from "react";
import NavBar from "../../navBar/NavBar";
import { cartContext } from "../../context/Fav";
import EpisodeQuery from "../episodes";
import CharacterQuery from "../characters";
import LocationQuery from "../locations";
import { StyledButton } from "../../components/StyledLink";
import { H1 } from "../../components/StyledTittle";
import Searcher from "../../header/searcher";
import { Title } from "./StyledHome";

export default function HomePage() {
  const { optionSelected } = useContext(cartContext);
  return (
    <div>
      <Title>
        <H1>Welcome to galery of Ricky and Morty!</H1>
      <h2>
        <Link href="/favorites">
          <StyledButton>Favorites</StyledButton>
        </Link>
      </h2>
      <NavBar />
      <Searcher />
      </Title>
      <div>
        {optionSelected === "CHARACTERS" && <CharacterQuery />}
        {optionSelected === "LOCATIONS" && <LocationQuery />}
        {optionSelected === "EPISODES" && <EpisodeQuery />}
      </div>
    </div>
  );
}
