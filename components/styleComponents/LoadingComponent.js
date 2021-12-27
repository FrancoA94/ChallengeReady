import styled from "styled-components";
import { keyframes } from "styled-components";
import { H1 } from "../StyledTittle";


export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`

export const Dot = styled.div`
background-color: #09f;
border-radius: 50%;
width: 0.75rem;
height: 0.75rem;
margin: 0 0.25rem;
/*Animation*/
animation: ${BounceAnimation} 0.5s linear infinite;
animation-delay: ${(props) => props.delay};
`

export default function Loading() {
    return (
        <LoadingWrapper>
        <H1>Loading</H1>
        <Dot delay="0s" />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </LoadingWrapper> 
    )
  }