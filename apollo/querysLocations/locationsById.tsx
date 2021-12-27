import { gql } from "@apollo/client";

export const LOCATIONS_ID = (id) => {
  return gql`
  query {
    locationsByIds(ids: ${id}){
      name
      dimension
      created
    }
  }
`;
}; 