import { gql } from "@apollo/client";

export const LOAD_MISSIONS = gql`
  query LoadMission {
    missions {
      description
      manufacturers
      name
      wikipedia
      id
    }
  }
`;
