import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { cartContext } from "../../context/Fav";
import { EPISODES_ID } from "../../apollo/querysEpisodes/episodesById";
import { StyledButton } from "../../components/StyledLink";
import {H1} from '../../components/StyledTittle';
import { CHARACTERS_ID } from "../../apollo/querysCharacters/charactersById";
import { LOCATIONS_ID } from "../../apollo/querysLocations/locationsById";
import DetailComponent from "../../components/styleComponents/detailComponent";

export default function Detail() {
  const router = useRouter();
  const ID = router.query.id;
  const { optionSelected } = useContext(cartContext);

  if (optionSelected === "CHARACTERS") {
    const { data } = useQuery(CHARACTERS_ID(ID));
    return (
      <div aling="center">
        <H1>Datail page of:</H1>

        {data &&
          data.charactersByIds.map((character, index) => (
            <DetailComponent characters={character} key={index} />
          ))}
        <Link href="/">
          <StyledButton>Go back to Home</StyledButton>
        </Link>
      </div>
    );
  }
  if (optionSelected === "EPISODES") {
    const { loading, data, error } = useQuery(EPISODES_ID(ID));
    return (
      <div aling="center">
        <H1>Datail page of:</H1>
        {data &&
          data.episodesByIds.map((episode, index) => (
            <DetailComponent episodes={episode} key={index} />
          ))}
        <Link href="/">
          <a>Volver a la Home</a>
        </Link>
      </div>
    );
  } if (optionSelected === "LOCATIONS") {
    const { loading, data, error } = useQuery(LOCATIONS_ID(ID));
    return (
      <div aling="center">
        <h1>Datail page of:</h1>
        {data &&
          data.locationsByIds.map((location, index) => (
            <DetailComponent locations={location} key={index} />
          ))}
        <Link href="/">
          <StyledButton>Volver a la Home</StyledButton>
        </Link>
      </div>
    );
  }
}
