import "./CardPeople.sass";
import { useQuery } from "@apollo/client";
import { TRACKS } from "../../module/query";
import CardPerson from "./../CardPerson/CardPerson";
import { loadingPage, errorPage } from "./../../assets/message";

const CardPeople = ({setIsVisible}) => {

  //use userQuery to get data from a query (TRACKS)
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return loadingPage;
  if (error) return errorPage;
  
  const dataPeople = data.allPeople.people;

  return (
    <>
      {dataPeople.map((people) => (
        <CardPerson key={people.id} people={people} setIsVisible={setIsVisible}/>
      ))}
    </>
  );
};

export default CardPeople;
