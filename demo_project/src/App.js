import React from 'react';
import './App.css';
import CovidInput from './Components/CovidInput';
import Results from './Components/Results';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={CovidInput}/>
      <Route path="/Results/:report" exact component={Results} />

      </Switch>
      </div>
      </Router>
  );
}

export default App;
