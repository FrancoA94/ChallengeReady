import { gql } from "@apollo/client";

export const CHARACTERS_ID = (id: number) => {
  return gql`
  query{
    charactersByIds(ids: ${id}){
      name
      image
      status
      gender
    }
  }
`;
}; 