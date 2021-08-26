import { gql } from "@apollo/client";

//query to get all people in GraphQL
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

//query to filter by id in GraphQL
export const idPeople=(item)=>{
  if(item !== ''){const IDITEM = gql`query Root {
    person(id: "${item}") {
      id
      birthYear
      eyeColor
      hairColor
      skinColor
      vehicleConnection {
        vehicles {
          name
          id
        }
      }
    }
  }`
  return IDITEM
}
else{
  console.log('error')
}
}