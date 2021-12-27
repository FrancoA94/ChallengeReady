import { gql } from "@apollo/client";

export const GET_CHARACTERS = (page: number, search: string) => {
  return gql`
  query {
    characters(page:${page}, filter: {name: "${search}"}) {
      results {
        name
        species
        image
        id
      }
      info{
        next 
        prev
        pages
      }
    }
  }
`;
};

