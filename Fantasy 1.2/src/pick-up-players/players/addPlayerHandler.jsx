import React, { useContext } from 'react'

import { useAlert } from 'react-alert';
import { TeamContext } from "../../public/context/auth";

const Button = (props) => {
    const alert = useAlert();




    function addPlayer(props, context) {


        console.log(props, context);
        if (context.team.includes(props.playerName)) {

            return alert.show("Player already in team. ")
        }
        if (context.budget < props.price) {

            return alert.show("Not enough money for that player.")
        }

        const items = { playerName: props.playerName, price: props.price, points:props.points };
        fetch(`http://localhost:9999/api/team/${props.id}`, {

            body: JSON.stringify(items),
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((res) => {

                props.history.push("/addPlayers");
                window.location.reload();
            })
            

    }
    const teamContext = useContext(TeamContext)
    const items = props;
    return (

        <button type="button" onClick={(props) => { addPlayer(items, teamContext) }}>Add Player</button>

    )
}

export default Button;