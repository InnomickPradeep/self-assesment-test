import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Button, Typography} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import CovidInput from './Components/CovidInput';
import Results from './Components/Results';
import CustomizedAccordions from './Components/accordion';
import MainFunction from './Components/mainfunction';
import Routes from './Components/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={CovidInput}/>
      <Route path="/Results/:report" exact component={Results} />

      </Switch>
    {/*  <Results /> */}
    {/* <CustomizedAccordions/> */}
    {/* <MainFunction/> */}
      </div>
      </Router>
  );
}

export default App;
