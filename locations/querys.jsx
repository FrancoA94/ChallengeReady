import { gql } from "@apollo/client";

export const GET_LOCATIONS = () => {
  return gql`
  query {
    locations(page: 2){
      results{
        name
        dimension
        id
      }
    }
  }
  `;
};
