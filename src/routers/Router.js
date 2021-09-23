import React from "react";
import { Component } from "react";
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import {Landing, Clients, BeforeAfter, Reviews, Service} from '../pages';


class App extends Component {
    
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path ='/' component={Landing} /> 
                    <Route exact path ='/services' component={Service} /> 
                    <Route exact path ='/before_after' component={BeforeAfter} /> 
                    <Route exact path ='/customers' component={Clients} /> 
                    <Route exact path ='/reviews' component={Reviews} />
                </Switch>
            </Router>
        )
    }
    
}

export default App;