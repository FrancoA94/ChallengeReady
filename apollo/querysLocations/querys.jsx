import { gql } from "@apollo/client";

export const GET_LOCATIONS = (page, search) => {
  return gql`
  query{
    locations(page: ${page}, filter: {name: "${search}"}){
      results{
        dimension
        name
        id
      }
      }
    }
  `;
};
