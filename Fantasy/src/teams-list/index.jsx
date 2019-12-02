import React, {  Component } from 'react';

import Teams from '../teams'
import Player from '../players/players'
import './styles.css';


class TeamsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      selectedTeamIdx: null,
      selectedPlayerIdx: 0,
      hasFetched: false
   }
  }

  componentDidMount() {
    fetch(`http://localhost:9999/getAllTeams`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          teams: data,
          hasFetched: true,

        });
      });
  }
  selectTeam = (i) => {
    this.setState({
      selectedTeamIdx: i
    })

  }


  render() {
    return (
    
      
        <div className="container" >
          <h1>Add (Position)</h1>
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
              return <Player name={player.name} id={idx} playingNumber={player.playingNumber} key={"player" + index} />
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
