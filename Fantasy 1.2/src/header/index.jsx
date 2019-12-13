import React, { useState, useContext, useEffect, Fragment } from 'react'
import './style.css'
import ball from '../public/images/smallBall.png'
import { TeamContext } from "../public/context/auth";

const Header = (props) => {
  const [name, changeName] = useState("");
 
  const [balance, changeBalance] = useState(100)
  const context = useContext(TeamContext)
  useEffect(() => {
    changeName(context.username);
    
    changeBalance(context.budget)

  })
  const isLogged = props.logged

  return (

    <div className="header-container">
      <ul >
        <li>
          <ul className="left">
            <li ><a href="/" > <img src={ball} alt="" /></a>  </li>
            {isLogged ? <li> <a href="/logout">Logout</a></li> :
              <Fragment>
                <li><a href="/register">Register</a></li>
                <li> <a href="/login">Login</a></li></Fragment>}


          </ul>
        </li>
        <li>
          {name && <ul className="right">
            <li ><a href="/addPlayers" > <img src="https://cdn3.iconfinder.com/data/icons/sports-1-5/512/24-512.png" alt="" /></a>  </li>
            <li>{name} Ballance- {balance}</li>
          </ul>}

        </li>
      </ul>
    </div >

  )


}

export default Header;