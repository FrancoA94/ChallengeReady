import Link from "next/link";
import { StyledButton, Title } from "../components";

const NotFound = () =>{
    return(
        <div>
            <Title>Oooops!</Title>
            <img src="https://img.europapress.es/fotoweb/fotonoticia_20210713173033_420.jpg"></img>
            <h3> That page cannot be found</h3>
            <Link href="/">
         <StyledButton>Go back to home page</StyledButton>
        </Link>
        </div>
    )
}

export default NotFound