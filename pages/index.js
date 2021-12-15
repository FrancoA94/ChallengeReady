import CharacterQuery from "../characters";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../navBar/NavBar";
import { useContext } from "react";
import { cartContext } from "../context/Fav";
import EpisodeQuery from "../episodes";
import LocationQuery from "../locations";
import Searcher from "../header/searcher";
import { H1 } from "../components/StyledTittle";
import { StyledButton } from "../components/StyledLink";

export default function Home() {
  const { optionSelected } = useContext(cartContext);
  console.log("optionSelected", optionSelected);
  return (
    <div>
      <H1 className={styles.title}>Welcome to galery of Ricky and Morty!</H1>
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
