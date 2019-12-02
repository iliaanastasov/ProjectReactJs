import React, { Component } from 'react'


import './styles.css'

class Players extends Component {
    


    render() {
        return (
            <div className="players-tile">
                <img className="players-image" src="https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png" alt="" />
                <div className="players-info">
                    <span className="players-name">{this.props.playingNumber} - {this.props.name}</span>
                    <span className="players-price">Price: ()</span>
                    
                </div>
                <button className="players-button">Add Player</button>
            </div>
        )
    }
}


export default Players