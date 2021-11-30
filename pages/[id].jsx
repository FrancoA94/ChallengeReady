import Link from "next/link";
import { useRouter } from "next/router";

const Detail = ({id}) => {
  const router = useRouter();
  console.log('hola', router)
  const nameDetail = router.query.id
  console.log("Este es el id",id)

  return (
    <div>
      <h1>Página de detalles de: {nameDetail}</h1>
      <Link href="/">
        <a>Volver a la Home</a>
      </Link>
    </div>
  );
};

export default Detail;
