import { gql } from "@apollo/client";

export const GET_EPISODES = (page, search) => {
  return gql`
  query {
    episodes(page:${page}, filter: {name: "${search}"}){
      results{
        name
        id
      }
    }
  }
`;
};