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