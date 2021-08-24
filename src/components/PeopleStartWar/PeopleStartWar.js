import React from 'react';
import Header from "./../Header/Header";
import CardPeople from "./../CardPeople/CardPeople";
import DetailPeople from "./../DetailPeople/DetailPeople";
import './PeopleStartWar.sass'

const PeopleStartWar = () => {

   

    return (
      <main>
        <Header/> 
        <section className="people">
        <aside className="people__card"> 
        <CardPeople/>
        <CardPeople/>
        <CardPeople/>
        <CardPeople/>
        </aside>
        <div className="people__detail">
        <DetailPeople/>
        </div>
        </section>
      </main>
    )
}

export default PeopleStartWar