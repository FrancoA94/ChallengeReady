import Link from "next/link";
import { useRouter } from "next/router";

export default function Detail ({characters}) {
  const router = useRouter();

  return (
    <div>
      <h1>Página de detalles de: {characters}</h1>
      <Link href="/">
        <a>Volver a la Home</a>
      </Link>
    </div>
  );
};
