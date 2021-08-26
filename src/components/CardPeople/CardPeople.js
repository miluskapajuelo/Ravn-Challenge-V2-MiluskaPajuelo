import "./CardPeople.sass";
import { useQuery } from "@apollo/client";
import { TRACKS } from "../../module/query";
import CardPerson from "./../CardPerson/CardPerson";
import { loadingPage, errorPage } from "./../../Assets/message";

const CardPeople = ({setIsVisible}) => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return loadingPage;
  if (error) return errorPage;
  const dataPeople = data.allPeople.people;

  return (
    <>
      {dataPeople.map((people) => (
        <CardPerson key={people.id} people={people} setIsVisible={setIsVisible} />
      ))}
    </>
  );
};

export default CardPeople;
