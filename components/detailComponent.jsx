const DetailComponent = ({characters}) => {
    return (
      <a className={"card"}>
        <img src={characters.image} style={{ width: "10%" }} />
        <h2>{characters.name}</h2>
        <h3>{characters.status}</h3>
        <h4>{characters.gender}</h4>
      </a>
    );
  };
  
  export default DetailComponent