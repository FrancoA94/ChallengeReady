import { gql } from "@apollo/client";

export const EPISODES_ID = (id: number) => {
  return gql`
  query {
    episodesByIds(ids: ${id}){
      name
      air_date
    }
  }
`;
}; 