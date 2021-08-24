import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.sass';
import Header from './components/Header/Header'


function App() {
  return (
    
    <div className="app-container">
    <Router>
      <Switch>
        <Route  path="/header" component={Header} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;