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
  query LoadRocket($rocketId: String!) {
    launchesPast(limit: 10, find: { rocket_id: $rocketId }) {
      links {
        flickr_images
      }
      rocket {
        rocket {
          name
          wikipedia
          description
          country
          company
          cost_per_launch
        }
      }
    }
  }
`;
