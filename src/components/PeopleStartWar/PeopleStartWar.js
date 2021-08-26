import React, {useState} from "react";
import DetailPeople from "./../DetailPeople/DetailPeople";
import CardPeople from "./../CardPeople/CardPeople";
import "./PeopleStartWar.sass";
import Header from "./../Header/Header";

const PeopleStartWar = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
    <Header setIsVisible={setIsVisible} isVisible={isVisible} />
    <main>
      <section className="people">
        <aside className={isVisible===true?'people__card--innactive' :'people__card'}>
          <CardPeople isVisible={isVisible} setIsVisible={setIsVisible}/>
        </aside>
        <div className={isVisible===false?'people__detail--innactive':"people__detail"}>
          <DetailPeople />
        </div>
      </section>
    </main>
    </>
  );
};

export default PeopleStartWar;
