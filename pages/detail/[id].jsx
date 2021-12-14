import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { CHARACTERS_ID } from "../../characters/charactersById";
import DetailComponent from "../../components/detailComponent";
import { useContext } from "react";
import { cartContext } from "../../context/Fav";
import { EPISODES_ID } from "../../episodes/episodesById";
import { LOCATIONS_ID } from "../../locations/locationsById";

export default function Detail() {
  const router = useRouter();
  const ID = router.query.id;
  const { optionSelected } = useContext(cartContext);

  if (optionSelected === "CHARACTERS") {
    const { data } = useQuery(CHARACTERS_ID(ID));
    return (
      <div aling="center">
        <h1>Datail page of:</h1>

        {data &&
          data.charactersByIds.map((character, index) => (
            <DetailComponent characters={character} key={index} />
          ))}
        <Link href="/">
          <a>Volver a la Home</a>
        </Link>
      </div>
    );
  }
  if (optionSelected === "EPISODES") {
    const { loading, data, error } = useQuery(EPISODES_ID(ID));
    return (
      <div aling="center">
        <h1>Datail page of:</h1>
        {data &&
          data.episodesByIds.map((episode, index) => (
            <DetailComponent episodes={episode} key={index} />
          ))}
        <Link href="/">
          <a>Volver a la Home</a>
        </Link>
      </div>
    );
  } else {
    const {data} = useQuery(LOCATIONS_ID(ID))
    return (
      <div aling="center">
        <h1>Datail page of:</h1>
        {data &&
          data.locationsByIds.map((location, index) => (
            <DetailComponent location={location} key={index} />
          ))}
        <Link href="/">
          <a>Volver a la Home</a>
        </Link>
      </div>
    );

  }
}
