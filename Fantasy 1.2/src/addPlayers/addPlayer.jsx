import React from 'react';
import Player from "./playerToAdd/player"
import CompleteButton from "./complition"
import './addPlayer.css';
function renderInstruction(gCount, dCount, mCount, fCount, state, history) {
    if (gCount < 1) {
        return <p>You need to have a goalkeeper!</p>
    }
    if (dCount < 3) {
        return <p>You need to have at least 3 defenders!</p>
    }
    if (mCount < 3) {
        return <p>You need to have at least 3 midfielders!</p>
    }
    if (fCount < 1) {
        return <p>You need to have at least 1 forward!</p>
    }
    return <div><p>Congratulations. You have added 11 players. Is this your final choice?</p><CompleteButton items={state} history={history} /></div>


}

class AddPlayers extends React.Component {

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
            gkCount: 0,
            dfCount: 0,
            mfCount: 0,
            fdCount: 0,
            playersCount: 0
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
                let gCount = 0;
                let dCount = 0;
                let mCount = 0;
                let fCount = 0;
                if (data[0].goalkeeper.playerName) {
                    gCount++
                }
                if (data[0].defender1.playerName) {
                    dCount++
                }
                if (data[0].defender2.playerName) {
                    dCount++
                }
                if (data[0].defender3.playerName) {
                    dCount++
                }
                if (data[0].defender4.playerName) {
                    dCount++
                }
                if (data[0].defender5.playerName) {
                    dCount++
                }
                if (data[0].midfielder1.playerName) {
                    mCount++
                }
                if (data[0].midfielder2.playerName) {
                    mCount++
                }
                if (data[0].midfielder3.playerName) {
                    mCount++
                }
                if (data[0].midfielder4.playerName) {
                    mCount++
                }
                if (data[0].midfielder5.playerName) {
                    mCount++
                } if (data[0].forward1.playerName) {
                    fCount++
                }
                if (data[0].forward2.playerName) {
                    fCount++
                }
                if (data[0].forward3.playerName) {
                    fCount++
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
                    gkCount: gCount,
                    dfCount: dCount,
                    mfCount: mCount,
                    fdCount: fCount,
                    playersCount: gCount + dCount + mCount + fCount


                });
            });

    }


    render() {

        return (

            <div className="center">
                <div>
                    <h1>{this.state.teamName}</h1>
                </div>
                {(this.state.playersCount === 11) ? renderInstruction(this.state.gkCount, this.state.dfCount, this.state.mfCount, this.state.fdCount, this.state, this.props.history) : <div className="infoAndCompletion">
                    <div className="tooltip"><span>&#8505;</span>
                        <span className="tooltiptext">Good day, Coach! For this one you will need to pick exactly 11 players.
                        Please be reasonable and use one of the classical formations: (3-5-2), (3-4-3), (4-5-1), (4-4-2) or (4-3-3).
                      Also don`t forget that every team needs a goalkeeper! GOOD LUCK</span>
                    </div>

                </div>}
                <div className="field">

                    <div className="row-goalkeeper">
                        {this.state.goalkeeper.playerName ? <Player playerName={this.state.goalkeeper.playerName} id={"goalkeeper"} price={this.state.goalkeeper.price} position={"Goalkeeper"} kit={this.state.kit} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"goalkeeper"} position={"Goalkeeper"} history={this.props.history} count={this.state.playersCount} /> : null}
                    </div>
                    <div className="row-defenders">
                        {this.state.defender1.playerName ? <Player playerName={this.state.defender1.playerName} id={"defender1"} price={this.state.defender1.price} kit={this.state.kit} position={"Defender"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"defender1"} position={"Defender"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.defender2.playerName ? <Player playerName={this.state.defender2.playerName} id={"defender2"} price={this.state.defender2.price} kit={this.state.kit} position={"Defender"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"defender2"} position={"Defender"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.defender3.playerName ? <Player playerName={this.state.defender3.playerName} id={"defender3"} price={this.state.defender3.price} kit={this.state.kit} position={"Defender"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"defender3"} position={"Defender"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.defender4.playerName ? <Player playerName={this.state.defender4.playerName} id={"defender4"} price={this.state.defender4.price} kit={this.state.kit} position={"Defender"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"defender4"} position={"Defender"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.defender5.playerName ? <Player playerName={this.state.defender5.playerName} id={"defender5"} price={this.state.defender5.price} kit={this.state.kit} position={"Defender"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"defender5"} position={"Defender"} history={this.props.history} count={this.state.playersCount} /> : null}

                    </div>
                    <div className="row-midfielders">
                        {this.state.midfielder1.playerName ? <Player playerName={this.state.midfielder1.playerName} id={"midfielder1"} price={this.state.midfielder1.price} kit={this.state.kit} position={"Midfielder"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"midfielder1"} position={"Midfielder"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.midfielder2.playerName ? <Player playerName={this.state.midfielder2.playerName} id={"midfielder2"} price={this.state.midfielder2.price} kit={this.state.kit} position={"Midfielder"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"midfielder2"} position={"Midfielder"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.midfielder3.playerName ? <Player playerName={this.state.midfielder3.playerName} id={"midfielder3"} price={this.state.midfielder3.price} kit={this.state.kit} position={"Midfielder"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"midfielder3"} position={"Midfielder"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.midfielder4.playerName ? <Player playerName={this.state.midfielder4.playerName} id={"midfielder4"} price={this.state.midfielder4.price} kit={this.state.kit} position={"Midfielder"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"midfielder4"} position={"Midfielder"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.midfielder5.playerName ? <Player playerName={this.state.midfielder5.playerName} id={"midfielder5"} price={this.state.midfielder5.price} kit={this.state.kit} position={"Midfielder"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"midfielder5"} position={"Midfielder"} history={this.props.history} count={this.state.playersCount} /> : null}
                    </div>
                    <div className="row-strikers">
                        {this.state.forward1.playerName ? <Player playerName={this.state.forward1.playerName} id={"forward1"} price={this.state.forward1.price} kit={this.state.kit} position={"Forward"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"forward1"} position={"Forward"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.forward2.playerName ? <Player playerName={this.state.forward2.playerName} id={"forward2"} price={this.state.forward2.price} kit={this.state.kit} position={"Forward"} history={this.props.history} />
                            : (this.state.playersCount < 11) ?
                                <Player id={"forward2"} position={"Forward"} history={this.props.history} count={this.state.playersCount} /> : null}
                        {this.state.forward3.playerName ? <Player playerName={this.state.forward3.playerName} id={"forward3"} price={this.state.forward3.price} kit={this.state.kit} position={"Forward"} history={this.props.history} /> :
                            (this.state.playersCount < 11) ? <Player id={"forward3"} position={"Forward"} history={this.props.history} count={this.state.playersCount} /> : null}
                    </div>
                </div>
            </div>
        );
    }

}
export default AddPlayers;