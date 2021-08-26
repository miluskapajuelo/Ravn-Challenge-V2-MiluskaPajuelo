import React from "react";
import "./DetailPeople.sass";
import { useLocation } from 'react-router-dom'

import DetailPerson from './../DetailPerson/DetailPerson'

const DetailPeople = () => { 
  const location = useLocation();
  
  return (<>{location.state !== undefined ? <DetailPerson className="DetailPerson" idPerson={location.state.id}/>:''}</>)
  };

export default DetailPeople;