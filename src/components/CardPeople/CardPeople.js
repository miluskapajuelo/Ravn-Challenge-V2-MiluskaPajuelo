import React from "react";
import "./CardPeople.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { setPeopleId } from "../../module/storage";
import {Link} from "react-router-dom"


const CardPeople = ({ people }) => {
  const detailPeople = () => {
    setPeopleId(people.id);
  };

  return (
    <article className="card">
      <div className="card__detail">
        <div>
          <h2>{people.name}</h2>
          <p>
            {people.species !== null ? people.species.name : "Human"} from{" "}
            {people.homeworld.name}
          </p>
        </div>
        <Link to={{pathname:`/people/${people.id}`, state: people.id }} activeClass="active"><div onClick={detailPeople}>
          <FontAwesomeIcon icon={faCoffee} />
        </div></Link>
      </div>
    </article>
  );
};

export default CardPeople;
