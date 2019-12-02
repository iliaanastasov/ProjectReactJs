import React from 'react';
import {Link} from "react-router-dom"



export default function home() {
    return (
        <div>
            <h1>Welcome to Fantazy League</h1>
            <p>To create your own team you need to <Link to="/register">register</Link>.</p>
            <p>You can check out our current standings  <Link to="/standings">here</Link>.</p>
            <p>Create your own team:  <Link to="/createTeam">here</Link>.</p>
        </div>
    )
}