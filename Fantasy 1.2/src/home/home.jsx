import React, { useContext, Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { TeamContext } from "../public/context/auth"

const Home = (props) => {
    const curContext = useContext(TeamContext)
    const [isLogged, log] = useState(false);
    const [teamAdded, auth] = useState(false)
    const [isCompleted, complete] = useState(false)
    useEffect(() => {
        log(props.logged)
        auth(!!curContext.username)
        complete(curContext.completed)
    })
   

    return (
        <Fragment>

            <div>

                <h1>Welcome to Fantazy League</h1>

                <div className="home">
                    <p>You can check out our current standings  <Link to="/rankings">here</Link>.</p>
                    {!isLogged && <p>To create your own team you need to <Link to="/login">login</Link> or <Link to="/register">register</Link> .</p>}
                    {isLogged && !teamAdded && <p>Create your own team:  <Link to="/createTeam">here</Link>.</p>}
                    {(teamAdded && !isCompleted) && <p>Add players to your team:  <Link to="/addPlayers">here</Link>.</p>}
                    {isCompleted && <p>Check out how your team did:  <Link to="/completedTeam">here</Link>.</p>}

                </div>



            </div>
        </Fragment>
    )

}

export default Home;