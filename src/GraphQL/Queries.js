import { gql } from "@apollo/client";

export const LOAD_MISSIONS = gql`
  query LoadMission {
    launchesPast(offset: 10, limit: 30) {
      mission_name
      links {
        flickr_images
      }
      details
      rocket {
        rocket_name
        rocket {
          id
        }
      }
    }
  }
`;

export const LOAD_ROCKET = gql`
  query LoadRocket($rocketId: ID!) {
    rocket(id: "$rocketId") {
      active
      boosters
      description
    }
  }
`;
