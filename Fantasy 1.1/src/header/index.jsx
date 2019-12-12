import React, { useState, useContext, useEffect } from 'react'
import './style.css'
import ball from '../public/images/smallBall.png'
import { TeamContext } from "../public/context/auth";

const Header = () => {
const [name,changeName] = useState("");
const [team,changeTeam] = useState([]);
const [balance,changeBalance] = useState(100)
 const context =  useContext(TeamContext)
useEffect(()=>{
changeName(context.username);
changeTeam(context.team);
changeBalance(context.budget)

})


  return (

    <div className="header-container">
      <ul >
        <li>
          <ul className="left">
            <li ><a href="/" > <img src={ball} alt="" /></a>  </li>
            <li><a href="/register">Register</a></li>
            <li> <a href="/login">Login</a></li>
            <li> <a href="/logout">Logout</a></li>
          </ul>
        </li>
        <li>
          <ul className="right">
            <li>{name} Ballance- {balance}</li>
          </ul>
        </li>
      </ul>
    </div >

  )


}

export default Header;