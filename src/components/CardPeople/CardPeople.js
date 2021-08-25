import "./CardPeople.sass";
import { useQuery } from "@apollo/client";
import {TRACKS} from '../../module/query'
import CardPerson from './../CardPerson/CardPerson'



const CardPeople = () => { 
    const {loading, error, data}= useQuery(TRACKS);
    if(loading) return 'Loading';
    if(error) return `error! ${error.message}`;
    const dataPeople = data.allPeople.people

  return (<>{dataPeople.map(people =>  <CardPerson key={people.id} people={people} />)}</>)
  };

export default CardPeople;