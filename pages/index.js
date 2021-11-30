import CharacterQuery from "../characters";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to galery of Ricky and Morty!
      </h1>
      <h2>
        {" "}
        <Link href="/favorites">Favorites</Link>
      </h2>
      <CharacterQuery />
      <footer></footer>
    </div>
  );
}
