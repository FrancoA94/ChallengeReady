import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { EPISODES_ID } from "../../episodes/episodesById";
import DetailEpisodeComponent from "../../episodes/detailCard";

export default function DetailEpisode() {
  const router = useRouter();
  const ID = router.query.id
  
  const { loading, data, error } = useQuery(EPISODES_ID(ID));
  console.log(data);
  
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>ERROR</h1>;
  return (
    <div aling="center">
      <h1>Datail page of:</h1>
 
      {data &&
        data.episodesByIds.map((episode, index) => (
          <DetailEpisodeComponent episodes={episode} key={index} />
        ))}
      <Link href="/">
        <a>Volver a la Home</a>
      </Link>
    </div>
  );
}
