import React, { useContext, Fragment } from 'react';
import { Link } from "react-router-dom"
import { TeamContext } from "../public/context/auth"

const Home = () => {

    const auth = useContext(TeamContext).username



    return (
        <Fragment>

            <div>

                <h1>Welcome to Fantazy League</h1>

                <div>
                    <p>Add players to your team:  <Link to="/addPlayers">here</Link>.</p>
                    <p>Check out how your team did:  <Link to="/completedTeam">here</Link>.</p>
                    <p>You can check out our current standings  <Link to="/rankings">here</Link>.</p>
                </div>

                <div>
                    <p>Create your own team:  <Link to="/createTeam">here</Link>.</p>
                    <p>To create your own team you need to <Link to="/register">register</Link>.</p>
                </div>

            </div>
        </Fragment>
    )

}

export default Home;