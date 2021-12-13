const DetailEpisodeComponent = ({episodes}) => {
    return (
      <a className={"card"}>
        <h2>{episodes.name}</h2>
        <h3>Status: {episodes.id}</h3>
        <h4>Gender: {episodes.air_date}</h4>
      </a>
    );
  };
  
  export default DetailEpisodeComponent