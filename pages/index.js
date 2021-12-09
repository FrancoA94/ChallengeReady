import CharacterQuery from "../characters";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../navBar/NavBar";
import Searcher from "../characters/searcher";
import { useContext } from "react";
import { cartContext } from "../context/Fav";

export default function Home() {
  const { optionSelected } = useContext(cartContext);
  console.log("optionSelected", optionSelected);
  return (
    <div>
      <h1 className={styles.title}>Welcome to galery of Ricky and Morty!</h1>
      <h2>
        <Link href="/favorites">Favorites</Link>
      </h2>
      <NavBar />
      <Searcher />
      {optionSelected === "CHARACTERS" && <CharacterQuery />}
      {optionSelected === "LOCATIONS" && <CharacterQuery />}
      {optionSelected === "EPISODES" && <CharacterQuery />}
      <footer></footer>
    </div>
  );
}
