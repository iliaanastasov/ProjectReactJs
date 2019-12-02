import React, { Component } from 'react'
import './style.css'
import ball from '../public/images/smallBall.png'

class Header extends Component {
  state = {
    user: "",
    currentBalance: 100,
    team: []

  }



  render() {

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
            <li>(Current User)(Ballance)</li>
          </ul>
          </li>
        </ul>
      </div >
    )
  }

}
export default Header;