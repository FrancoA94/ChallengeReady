import { useContext } from "react";
import { cartContext } from "../context/Fav";

const DetailComponent = ({
  characters,
  episodes,
  location,
  optionSelected,
}) => {
  const { optionSelected } = useContext(cartContext);

  if (optionSelected === "EPISODES") {
    return (
      <a className={"card"}>
        <h2>{episodes.name}</h2>
        <h3>Status: {episodes.id}</h3>
        <h4>Gender: {episodes.air_date}</h4>
      </a>
    );
  }
  if (optionSelected === "CHARACTERS") {
    return (
      <a className={"card"}>
        <h2>{characters.name}</h2>
        <img src={characters.image} style={{ width: "30%" }} />
        <h3>Status: {characters.status}</h3>
        <h4>Gender: {characters.gender}</h4>
      </a>
    );
  } else {
    return (
      <a className={"card"}>
        <h2>{location.name}</h2>
        <h3>Dimension: {location.dimension}</h3>
        <h4>Created: {location.created}</h4>
      </a>
    );
  }
};

export default DetailComponent;
