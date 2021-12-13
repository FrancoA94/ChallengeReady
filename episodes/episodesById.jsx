import { gql } from "@apollo/client";

export const EPISODES_ID = (id) => {
  return gql`
  query {
    episodesByIds(ids: ${id}){
      name
      air_date
    }
  }
`;
}; 