import { useContext } from "react";
import { cartContext } from "../context/Fav";

const DetailComponent = ({
  characters,
  episodes,
  locations,
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
  } if(optionSelected === "LOCATIONS") {
    return (
      <a className={"card"}>
        <h1>{optionSelected}</h1>
        <h2>{locations.name}</h2>
        <h3>Dimension: {locations.dimension}</h3>
        <h4>Created: {locations.created}</h4>
      </a>
    );
  }
};

export default DetailComponent;
