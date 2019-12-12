import React, { useState, useEffect } from 'react';
import './completedPlayers.css';




const Player = (props) => {

    const [kit, changeKit] = useState("notAdded");
   
    const [playerName, changePlayer] = useState("Goshko");
    const[points,changePoints]=useState(0);
    useEffect(()=>{
        if (props.playerName) {
            changePlayer(props.playerName)
            
            changeKit(props.kit)
            changePoints(props.points)
        }
    })


    return (

        <div className="player-container">
           <div className="added">
                    <img src={process.env.PUBLIC_URL + `/kits/${kit}.png`} alt="#" />
                   
            <label htmlFor="btn">{playerName} Points - {points}</label>
                </div>
                 
            

        </div>
    )

}

export default Player


//{<Link to={`/add/${position}`} addPlayerHandler= { addPlayerHandler } position={position}>
//<button className="add-btn" >+ </button>
//</Link>}