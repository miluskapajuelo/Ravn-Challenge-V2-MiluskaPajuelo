import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.sass";
import PeopleStartWar from "./components/PeopleStartWar/PeopleStartWar";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/peopleStartWar" component={PeopleStartWar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
