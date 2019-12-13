import React, { Component } from 'react'
import Button from "./addPlayerHandler"

import './styles.css'


class Players extends Component {
  


    render() {
        return (
            <div className="players-tile">
                <img className="players-image" src="https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png" alt="" />
                <form className="players-info">
                    <span className="players-name"  >{this.props.playerName}</span>
        <span className="players-price" >Price: {this.props.price}M€</span>
                   <Button playerName={this.props.playerName } id={this.props.id} price={this.props.price} points={this.props.points} history={this.props.history}/>
                </form>

            </div>
        )
    }
}


export default Players