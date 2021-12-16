import { useContext } from "react";
import { cartContext } from "../context/Fav";
import { CardDetail } from "./DetailCard";

const DetailComponent = ({
  characters,
  episodes,
  locations,
  optionSelected,
}) => {
  const { optionSelected } = useContext(cartContext);

  if (optionSelected === "EPISODES") {
    return (
      <CardDetail>
        <h2>{episodes.name}</h2>
        <h3>Status: {episodes.id}</h3>
        <h4>Gender: {episodes.air_date}</h4>
      </CardDetail>
    );
  } 
  if (optionSelected === "CHARACTERS") {
    return (
      <CardDetail>
        <h2>{characters.name}</h2>
        <img src={characters.image} style={{ width: "100%" }} />
        <h3>Status: {characters.status}</h3>
        <h4>Gender: {characters.gender}</h4>
      </CardDetail>
    );
  } if(optionSelected === "LOCATIONS") {
    return (
      <CardDetail>
        <h1>{optionSelected}</h1>
        <h2>{locations.name}</h2>
        <h3>Dimension: {locations.dimension}</h3>
        <h4>Created: {locations.created}</h4>
      </CardDetail>
    );
  }
};

export default DetailComponent;
