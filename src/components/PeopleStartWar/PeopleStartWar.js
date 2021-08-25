import React from "react";
import Header from "./../Header/Header";
import CardPeople from "./../CardPeople/CardPeople";
import DetailPeople from "./../DetailPeople/DetailPeople";
import "./PeopleStartWar.sass";
import { useQuery } from "@apollo/client";
import {TRACKS} from '../../module/query'



const PeopleStartWar = () => {
  const {loading, error, data}= useQuery(TRACKS);
  if(loading) return 'Loading';
  if(error) return `error! ${error.message}`;
  const dataPeople = data.allPeople.people

  return (
    <main>
      <Header />
      <section className="people">
        <aside className="people__card">
        {dataPeople.map(people =>  <CardPeople key={people.id} people={people} />)}       
        </aside>
        <div className="people__detail">
          <DetailPeople />
        </div>
      </section>
    </main>
  );
};

export default PeopleStartWar;
