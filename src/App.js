import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.sass";
import PeopleStartWar from "./components/PeopleStartWar/PeopleStartWar";
import DetailPeople from "./components/DetailPeople/DetailPeople"


function App() {
  return (
    
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" component={PeopleStartWar} />
          <Route path='/people/:id' component={DetailPeople} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
