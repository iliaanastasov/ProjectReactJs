import React, { Component } from 'react'


import './style.css'

class Teams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            players: this.props.players,
            selectedTeamIdx: 0,
        }


    }


    render() {



        return (
            <div className="team-container" >
                <img className="teams-image" src={this.props.imageUrl} alt="" ></img>
                <button class="btn" onClick={() => this.props.selectTeam(this.props.id)}></button>
                <span className="product-brand">{this.props.name}</span>
                <div>
                    
                </div>

            </div>
        )
    }
}


export default Teams