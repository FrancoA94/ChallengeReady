import { gql } from "@apollo/client";

export const CHARACTERS_ID = (id) => {
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