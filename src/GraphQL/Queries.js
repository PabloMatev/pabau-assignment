import { gql } from "@apollo/client";

export const LOAD_MISSIONS = gql`
  query LoadMission {
    launchesPast(offset: 10, limit: 10) {
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
