import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Results from './Results';
import CovidInput from './CovidInput';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Results" component={Results} />
                </Switch>
            </Router>
        )
    }
}