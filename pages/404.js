import Link from "next/link";
import { StyledButton } from "../components/StyledLink";
import { H1 } from "../components/StyledTittle";

const NotFound = () =>{
    return(
        <div>
            <H1>Oooops!</H1>
            <img src="https://img.europapress.es/fotoweb/fotonoticia_20210713173033_420.jpg"></img>
            <h3> That page cannot be found</h3>
            <Link href="/">
         <StyledButton>Go back to home page</StyledButton>
        </Link>
        </div>
    )
}

export default NotFound