import React from 'react';
import Header from '../header'
import { BrowserRouter as Router, Route, } from "react-router-dom";


import Home from "../home/home"
import PickPlayers from "../pick-up-players/teams-list"
import Login from "../user-components/login/login"
import Logout from "../user-components/logout/logout"
import Register from "../user-components/register/register"
import CreateTeam from "../create-team/create-team"
import AddPlayers from "../addPlayers/addPlayer"
import DropPlayers from "../addPlayers/drop-player/dropPlayer"
import CompletedTeam from "../completedTeam/completedTeam"
import Rankings from "../rankings/ranking"

import './app.css';
import AuthWrapper from "../public/context/auth"
export default function App(props) {



    return (


        <div className="container">




            <Router>
                <AuthWrapper>
                    <Header />
                    <Route path="/login" component={Login} ></Route>
                    <Route path="/register" component={Register} ></Route>
                    <Route path="/logout" component={Logout} ></Route>
                    <Route exact path="/" component={Home} ></Route>
                    <Route path="/createTeam" component={CreateTeam} ></Route>
                    <Route exact path="/addPlayers" component={AddPlayers} ></Route>
                    <Route path="/add/:id" component={PickPlayers} ></Route>
                    <Route path="/drop/:id" component={DropPlayers} ></Route>
                    <Route path="/completedTeam" component={CompletedTeam} />
                    <Route path="/rankings" component={Rankings}/>
                </AuthWrapper>
            </Router>


        </div>
    )

}


//<Route path="/add:position" component={TeamsList} />