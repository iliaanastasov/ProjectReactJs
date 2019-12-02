import React  from 'react';
import Header from '../header'
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Home from "../home/home"
import TeamsList from "../teams-list"
import Login from "../user-components/login/login"
import Logout from "../user-components/logout/logout"
import Register from "../user-components/register/register"
import CreateTeam from "../create-team/create-team"
import './app.css';

export default function App(props) {
    

    return (
        <div className="container">
            
            <Header />
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/addPlayers" component={TeamsList} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route path="/createTeam" component={CreateTeam}/>
            </Router>
           
        </div>
    )

}


