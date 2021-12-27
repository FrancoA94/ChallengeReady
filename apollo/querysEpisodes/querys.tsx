import { gql } from "@apollo/client";

export const GET_EPISODES = (page: number, search: string) => {
  return gql`
  query {
    episodes(page:${page}, filter: {name: "${search}"}){
      results{
        name
        id
        air_date
      }
    }
  }
`;
};