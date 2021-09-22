import React from "react";
import { Component } from "react";
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import {Landing} from '../pages';

class App extends Component {
    
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path ='/' component={Landing} /> 
                    {/* <Route exact path ='/services' component={services} /> 
                    <Route exact path ='/before_afte' component={before_after} /> 
                    <Route exact path ='/customers' component={clients} /> 
                    <Route exact path ='/reviews' component={reviews} /> */}
                </Switch>
            </Router>
        )
    }
    
}

export default App;