import React from "react";
import "./CardPerson.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useHistory} from "react-router-dom"


const CardPerson = ({ people, setIsVisible }) => {

  const history = useHistory();
  
  const detailPeople = () => {
    history.push({ pathname: '/people', search:`${people.id}`, state: {id:people.id} })
    setIsVisible(true)
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
        <div onClick={detailPeople}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </article>
  );
};

export default CardPerson;
