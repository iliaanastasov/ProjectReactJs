import React, { useContext } from 'react'
import { TeamContext } from "../public/context/auth";




const CompleteButton = (props) => {
    let points = 0;
    const curContext = useContext(TeamContext);
    const { goalkeeper, defender1, defender2, defender3, defender4, defender5, midfielder1, midfielder2, midfielder3, midfielder4, midfielder5,
        forward1, forward2, forward3 } = props.items

    if (props.items.coachingStyle === "balanced") {
        points = (goalkeeper.points + defender1.points + defender2.points + defender3.points + defender4.points + defender5.points + 2 * midfielder1.points +
            2 * midfielder2.points + 2 * midfielder3.points + 2 * midfielder4.points + 2 * midfielder5.points + forward1.points + forward2.points + forward3.points)
    }
    if (props.items.coachingStyle === "attacking") {
        points = (goalkeeper.points + defender1.points + defender2.points + defender3.points + defender4.points + defender5.points + midfielder1.points +
            midfielder2.points + midfielder3.points + midfielder4.points + midfielder5.points + 3 * forward1.points + 3 * forward2.points + 3 * forward3.points)
    }
    if (props.items.coachingStyle === "defensive") {
        points = (2 * goalkeeper.points + 2 * defender1.points + 2 * defender2.points + 2 * defender3.points + 2 * defender4.points + 2 * defender5.points + midfielder1.points +
            midfielder2.points + midfielder3.points + midfielder4.points + midfielder5.points + forward1.points + forward2.points + forward3.points)
    }


    const submitTeam = (point) => {

        const user = curContext.username;
        const team = curContext.team;
        const totalPoints = point;
        const items = { user, team, totalPoints }
        console.log(items);

       
        fetch(`http://localhost:9999/api/rankings/`, {
            body: JSON.stringify(items),
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
            .then((res) => {

                props.history.push(`/`);

                window.location.reload();
               

            }).catch((err) => {
                debugger;
                const error = err.message;
                return [alert.show(error),
                ]
            });
    }

    return (

        <button type="button" className="players-button" onClick={() => { submitTeam(points) }}>Add Player</button>

    )
}

export default CompleteButton;