import React, { useState, useEffect } from 'react';
import Header from '../header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "../home/home";
import PickPlayers from "../pick-up-players/teams-list";
import Login from "../user-components/login/login";
import Logout from "../user-components/logout/logout";
import Register from "../user-components/register/register";
import CreateTeam from "../create-team/create-team";
import AddPlayers from "../addPlayers/addPlayer";
import DropPlayers from "../addPlayers/drop-player/dropPlayer";
import CompletedTeam from "../completedTeam/completedTeam";
import Rankings from "../rankings/ranking";
import NotFound from "../home/pageNotFount"

import './app.css';
import AuthWrapper from "../public/context/auth"

export default function App(props) {
    const [isLogged, login] = useState(false);
    
    function parseCookeis() {
        return document.cookie.split('; ').reduce((acc, cookie) => {
            const [cookieName, cookieValue] = cookie.split('=');
            acc[cookieName] = cookieValue;
            return acc;
        }, {})
    }

    useEffect(() => {
        const cookies = parseCookeis();

        login(!!cookies['x-auth-token']);

    },[])





    return (


        <div className="container">




            <Router>
                <AuthWrapper>
                    <Header logged={isLogged} />
                    <Switch>
                        {!isLogged && <Route path="/login" component={Login} ></Route>}
                        {!isLogged && <Route path="/register" component={Register} ></Route>}

                        <Route exact path="/"><Home logged={isLogged} /></Route>
                        {isLogged && <Route path="/createTeam" component={CreateTeam} ></Route>}
                        {isLogged && <Route exact path="/addPlayers" component={AddPlayers} ></Route>}
                        {isLogged && <Route path="/add/:id" component={PickPlayers} ></Route>}

                        {isLogged && <Route path="/drop/:id" component={DropPlayers} ></Route>}
                        {isLogged && <Route path="/completedTeam" component={CompletedTeam} />}
                        {isLogged && <Route path="/logout" component={Logout} ></Route>}


                        <Route path="/rankings" component={Rankings} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </AuthWrapper>

            </Router>


        </div>
    )

}


//<Route path="/add:position" component={TeamsList} />