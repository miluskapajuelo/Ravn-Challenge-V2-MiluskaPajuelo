import React from "react";
import "./DetailPeople.sass";

const DetailPeople = () => {

  return (
    <article className="detail">
      <h2>General Information</h2>
      <span >Eye Color<a>Blue</a></span>
      <span >Hair Color<a>Blond</a></span>
      <span >Skin Color<a>Fair</a></span>
      <span >Birth Year<a>19BBY</a></span>
      <br/>
      <br/>
      <h2>Vehicles</h2>
      <span >Snowspeeder</span>
      <span >Imperial Speeder Bike</span>
    </article>
  );
};

export default DetailPeople;