import React, { Component } from 'react';

import Teams from '../teams'
import Player from '../players/players'
import './styles.css';


class TeamsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      selectedTeamIdx: null,
      hasFetched: false
    }
  }
 
  componentDidMount() {
    fetch(`http://localhost:8888/getAllTeams`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          teams: data,
          hasFetched: true,

        });
      });
  }
  selectTeam = (i) => {
  return  this.setState({
      selectedTeamIdx: i
    })
    
  }
  render() {
    console.log(this.state.teams);
    
    const id = (this.props.match.url).split("/")[2];
    const position = this.props.location.state.position;

    return (
      
      <div className="container" >
        <h1>Add {position}</h1>
        <div className="teams">
          {
            this.state.teams.map((team, idx) => {
              return <Teams selectTeam={(e) => this.selectTeam(idx, e)} imageUrl={team.imageUrl} players={team.players} id={idx} name={team.name} key={"team" + idx} />
            })
          }
        </div>

        <div className="players">
          {
            this.state.teams.map((team, idx) => {
              if (idx === this.state.selectedTeamIdx) {
                return team.players.map((player, index) => {
                  if (player.position === `${position}`) {
                    return <Player playerName={player.name} id={id} points={player.points} key={"player" + index} price={player.price} history={this.props.history}/>
                  }
                })
              }
              return "";
            })
          }
        </div>
      </div>
    )
  }
}

export default TeamsList;
