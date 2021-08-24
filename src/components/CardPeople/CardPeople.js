import React from "react";
import "./CardPeople.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const CardPeople = () => {
  return (
    <article className="card">
      <div className="card__detail">
        <div>
          <h2>Nombre comercial</h2>
          <p>Nombre completo</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </article>
  );
};

export default CardPeople;
