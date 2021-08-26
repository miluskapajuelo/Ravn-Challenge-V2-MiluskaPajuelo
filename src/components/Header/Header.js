import React from "react";
import "./Header.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation} from "react-router-dom"

const Header = ({isVisible, setIsVisible}) => {
  const location = useLocation();
  const history = useHistory();

  const backToHome =()=>{
    setIsVisible(false)
    history.push('/')
  }
  
  return (
    <article className="header">
      <div className="header__title">
        {isVisible?<p className="header__title inactive">{location.state.name}</p>:<p className="header__title inactive">People</p>}
        
        <div className={isVisible===true?'header__icon--active' :'header__icon--inactive'}><FontAwesomeIcon icon={faCoffee} onClick={backToHome} className="icon"></FontAwesomeIcon></div>
      </div>
    </article>
  );
};

export default Header;
