import React from "react";
import { useQuery } from "@apollo/client";
import { idPeople } from "./../../module/query"
import { loadingPage, errorPage } from "./../../assets/message"


const DetailPerson = ({idPerson}) => { 

    //idPeople is a function to make queries in GraphQL
    const id = idPeople(idPerson)
    
    const {loading, error, data}= useQuery(id)
    if(loading) return loadingPage;
    if(error) return errorPage;
    return (
        <article className="detail">
        <h2>General Information</h2>
        <span >Eye Color<p>{data.person.eyeColor}</p></span>
        <span >Hair Color<p>{data.person.hairColor}</p></span>
        <span >Skin Color<p>{data.person.SkinColor}</p></span>
        <span >Birth Year<p>{data.person.birthYear}</p></span>
        <br/>
        <br/>
        <h2>Vehicles</h2>
        {data.person.vehicleConnection !== []?data.person.vehicleConnection.vehicles.map(vehicle => <span key={vehicle.id}>{vehicle.name}</span>):''}
      </article>
      
    );
}
export default DetailPerson;