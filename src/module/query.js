import { gql } from "@apollo/client";

export const TRACKS = gql`query Root{
  allPeople{
      people{
        id
        name
        homeworld {
          name
        }
        species {
          name
        }
      }
    }
}
`;
