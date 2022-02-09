import React, { useContext } from "react";
import Link from "next/link";
import { cartContext } from "../../context/Fav";
import { default as Episode } from "../episodes";
import { default as Characters } from "../characters";
import { default as Locations } from "../locations";
import { TitleContainer } from "./Home.styled";
import { NavBar, Searcher, StyledButton, Title } from "../../components";

export default function HomePage() {
  const { optionSelected } = useContext(cartContext);
  return (
    <div>
      <TitleContainer>
        <Title>Welcome to galery of Ricky and Morty!</Title>
        <h2>
          <Link href="/favorites">
            <StyledButton>Favorites</StyledButton>
          </Link>
        </h2>
        <NavBar />
        <Searcher />
      </TitleContainer>
      <div>
        {optionSelected === "CHARACTERS" && <Characters />}
        {optionSelected === "LOCATIONS" && <Locations />}
        {optionSelected === "EPISODES" && <Episode />}
      </div>
    </div>
  );
}
