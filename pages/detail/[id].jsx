import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { CHARACTERS_ID } from "../../characters/charactersById";
import DetailComponent from "../../components/detailComponent";

export default function Detail() {
  const router = useRouter();
  const ID = router.query.id
  
  const { loading, data, error } = useQuery(CHARACTERS_ID(ID));
  console.log(data);
  
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>ERROR</h1>;
  return (
    <div>
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
