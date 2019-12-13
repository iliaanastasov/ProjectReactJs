import React, { useState, useEffect } from 'react';
import './players.css';




const Player = (props) => {

    const [kit, changeKit] = useState("notAdded");
    const [added, addToTeam] = useState(false);
    const [playerName, changePlayer] = useState("Goshko");
    const[price,changePrice]=useState(0);
    useEffect(()=>{
        if (props.playerName) {
            changePlayer(props.playerName)
            addToTeam(true);
            changeKit(props.kit)
            changePrice(props.price)
        }
    },)


    const addNewPlayer = () => {
        console.log(props);
        props.history.push(`/add/${props.id}`, { position: props.position })

    }
    const removePlayer = () => {

        props.history.push(`/drop/${props.id}`, { position: props.position, playerName,price })

    }
      

 

    return (

        <div className="player-container">
            {added ?<div className="added">
                    <img src={process.env.PUBLIC_URL + `/kits/${kit}.png`} alt="#" />
                    <button className="add-btn" onClick={() => removePlayer()}>-</button>
            <label htmlFor="btn">{playerName} - {price}M€</label>
                </div>
                 : (props.count<11)?
                 <div className="notAdded">
                    <img src={process.env.PUBLIC_URL + `/kits/${kit}.png`} alt="#" />


                    <button className="add-btn" onClick={() => addNewPlayer()} >+ </button>
                    <label htmlFor="btn" >Add Player</label>
                </div> :null
            }

        </div>
    )

}

export default Player


//{<Link to={`/add/${position}`} addPlayerHandler= { addPlayerHandler } position={position}>
//<button className="add-btn" >+ </button>
//</Link>}