import React from 'react';
import Player from "./completedPlayers/completedPlayers"

import './completedTeam.css';


class CompletedTeam extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            goalkeeper: {},
            defender1: {},
            defender2: {},
            defender3: {},
            defender4: {},
            defender5: {},
            midfielder1: {},
            midfielder2: {},
            midfielder3: {},
            midfielder4: {},
            midfielder5: {},
            forward1: {},
            forward2: {},
            forward3: {},
            kit: "",
            teamName: "",
            coachingStyle: "",
            totalPoints: 0

        }
    }

    componentDidMount() {

        fetch(`http://localhost:9999/api/team/team`,
            {
                Method: "GET",
                credentials: "include"
            })
            .then(response => response.json())
            .then(data => {
                if (data[0].coachingStyle === "balanced") {
                    data[0].midfielder1.points *= 2;
                    data[0].midfielder2.points *= 2;
                    data[0].midfielder3.points *= 2;
                    data[0].midfielder4.points *= 2;
                    data[0].midfielder5.points *= 2;

                }
                if (data[0].coachingStyle === "defensive") {
                    data[0].goalkeeper.points *= 2;
                    data[0].defender1.points *= 2;
                    data[0].defender2.points *= 2;
                    data[0].defender3.points *= 2;
                    data[0].defender4.points *= 2;
                    data[0].defender5.points *= 2;
                }
                if (data[0].coachingStyle === "attacking") {
                    data[0].forward1.points *= 3;
                    data[0].forward2.points *= 3;
                    data[0].forward3.points *= 3;


                }

                this.setState({
                    goalkeeper: data[0].goalkeeper,
                    defender1: data[0].defender1,
                    defender2: data[0].defender2,
                    defender3: data[0].defender3,
                    defender4: data[0].defender4,
                    defender5: data[0].defender5,
                    midfielder1: data[0].midfielder1,
                    midfielder2: data[0].midfielder2,
                    midfielder3: data[0].midfielder3,
                    midfielder4: data[0].midfielder4,
                    midfielder5: data[0].midfielder5,
                    forward1: data[0].forward1,
                    forward2: data[0].forward2,
                    forward3: data[0].forward3,
                    kit: data[0].kit,
                    teamName: data[0].teamName,
                    coachingStyle: data[0].coachingStyle,
                    totalPoints: (data[0].goalkeeper.points + data[0].defender1.points + data[0].defender2.points + data[0].defender3.points + data[0].defender4.points
                        + data[0].defender5.points + data[0].midfielder1.points + data[0].midfielder2.points + data[0].midfielder3.points + data[0].midfielder4.points
                        + data[0].midfielder5.points + data[0].forward1.points + data[0].forward2.points + data[0].forward3.points)


                });
            });

    }


    render() {

        return (

            <div className="center">
                <div>
                    <h1>{this.state.teamName}</h1>
                </div>
                <div>
                    <h2>Your team scored a total  of {this.state.totalPoints} points. Good job Coach!</h2>
                </div>

                <div className="field">

                    <div className="row-goalkeeper">
                        {this.state.goalkeeper.playerName ? <Player playerName={this.state.goalkeeper.playerName} points={this.state.goalkeeper.points} kit={this.state.kit} history={this.props.history} /> : null}
                    </div>
                    <div className="row-defenders">
                        {this.state.defender1.playerName ? <Player playerName={this.state.defender1.playerName} points={this.state.defender1.points} kit={this.state.kit} /> : null}
                        {this.state.defender2.playerName ? <Player playerName={this.state.defender2.playerName} points={this.state.defender2.points} kit={this.state.kit} /> : null}
                        {this.state.defender3.playerName ? <Player playerName={this.state.defender3.playerName} points={this.state.defender3.points} kit={this.state.kit} /> : null}
                        {this.state.defender4.playerName ? <Player playerName={this.state.defender4.playerName} points={this.state.defender4.points} kit={this.state.kit} /> : null}
                        {this.state.defender5.playerName ? <Player playerName={this.state.defender5.playerName} points={this.state.defender5.points} kit={this.state.kit} /> : null}

                    </div>
                    <div className="row-midfielders">
                        {this.state.midfielder1.playerName ? <Player playerName={this.state.midfielder1.playerName} points={this.state.midfielder1.points} kit={this.state.kit} /> : null}
                        {this.state.midfielder2.playerName ? <Player playerName={this.state.midfielder2.playerName} points={this.state.midfielder2.points} kit={this.state.kit} /> : null}
                        {this.state.midfielder3.playerName ? <Player playerName={this.state.midfielder3.playerName} points={this.state.midfielder3.points} kit={this.state.kit} /> : null}
                        {this.state.midfielder4.playerName ? <Player playerName={this.state.midfielder4.playerName} points={this.state.midfielder4.points} kit={this.state.kit} /> : null}
                        {this.state.midfielder5.playerName ? <Player playerName={this.state.midfielder5.playerName} points={this.state.midfielder5.points} kit={this.state.kit} /> : null}
                    </div>
                    <div className="row-strikers">
                        {this.state.forward1.playerName ? <Player playerName={this.state.forward1.playerName} points={this.state.forward1.points} kit={this.state.kit} /> : null}
                        {this.state.forward2.playerName ? <Player playerName={this.state.forward2.playerName} points={this.state.forward2.points} kit={this.state.kit} /> : null}
                        {this.state.forward3.playerName ? <Player playerName={this.state.forward3.playerName} points={this.state.forward3.points} kit={this.state.kit} /> : null}
                    </div>
                </div>
            </div>
        );
    }

}
export default CompletedTeam;