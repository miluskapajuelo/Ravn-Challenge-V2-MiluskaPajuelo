import React from "react";
import DetailPeople from "./../DetailPeople/DetailPeople";
import CardPeople from "./../CardPeople/CardPeople";
import "./PeopleStartWar.sass";




const PeopleStartWar = () => {


  return (
    <main>
      <section className="people">
        <aside className="people__card">
          <CardPeople/>
        </aside>
        <div className="people__detail">
          <DetailPeople />
        </div>
      </section>
    </main>
  );
};

export default PeopleStartWar;
