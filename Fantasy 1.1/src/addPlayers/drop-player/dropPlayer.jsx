import React from "react";
import "./dropPlayers.css"




export default function dropPlayer(props) {

    const id = props.match.url.split("/")[2];
    const playerName = props.location.state.playerName;
    const price = props.location.state.price;
    const history = props.history;
    console.log(id);

    const removePlayer = (id, history) => {

        const items = { playerName: "", price: 0 , points:0};

        fetch(`http://localhost:9999/api/team/${id}`, {
            body: JSON.stringify(items),
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then((res) => {
                history.push("/addPlayers")
                window.location.reload();
            });

    }
    const goBack = (history) => {
        history.push("/addPlayers")

    }


    return (
        <div>
            <h1>Please confirm your change</h1>

            <div className="drop-container" >
                <img className="drop-image" src="https://cdn2.iconfinder.com/data/icons/user-profile-1/100/player-profile-delete-512.png" alt="" />
                <p>Are you sure you want to drop {playerName} - {price}M</p>
                <button className="drop-btn" onClick={() => { removePlayer(id, history) }}>Confirm</button>
                <button className="drop-btn" onClick={() => { goBack(history) }}>I changed my mind</button>

            </div>



        </div>
    )

}

