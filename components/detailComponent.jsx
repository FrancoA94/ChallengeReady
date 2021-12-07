const DetailComponent = ({characters}) => {
    return (
      <a className={"card"}>
        <h2>{characters.name}</h2>
        <img src={characters.image} style={{ width: "30%" }} />
        <h3>Status: {characters.status}</h3>
        <h4>Gender: {characters.gender}</h4>
      </a>
    );
  };
  
  export default DetailComponent