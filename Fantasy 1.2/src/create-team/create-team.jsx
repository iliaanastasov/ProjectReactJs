import React, { useState } from 'react';
import Button from "./createTeamHandler"
import "./create-team.css"


const CreateTeam = (props) => {

    const [kit, setKit] = useState("blackWhiteStripes");
    const [teamName, setTeamName] = useState("");
    const [coachingStyle, setCoachingStyle] = useState("attacking")
    const explainStyle = {
        attacking: "To win you need to score. If you choose this coaching style your strikers will have their points TRIPLED",
        balanced: "It is all about the balance. If you choose this style your  midfielders` points will be DOUBLED",
        defensive: "Park that bus! If you choose this coaching style your defenders` and goalkeepers` points will be DOUBLED",
    }

    return (
        <div>
            <h1>Create your team</h1>
            <div className="create-team">
                <form className="create-form">
                    <label htmlFor="teamName">
                        Name of your team:
                        <br />
                        <input type="textarea" name="teamName" onChange={(e) => { setTeamName(e.target.value) }} />
                    </label>
                    <label htmlFor="coachingStyle">
                        Select your team`s kit:
                        <br />
                        <select name="teamKit" onChange={(e) => setKit(e.target.value)}>
                            <option value="blackWhiteStripes">Black and White Stripes</option>
                            <option value="blue">Blue</option>
                            <option value="blueBlackStripes">Blue and Black Stripes</option>
                            <option value="red">Red</option>
                            <option value="redBlueStripes">Red and Blue Stripes</option>
                            <option value="skyBlue">Skyblue</option>
                            <option value="white">White</option>
                            <option value="whiteRedStripes">White and Red Stripes</option>
                            <option value="yellowBlackHoops">Yellow and Black Hoops</option>
                        </select>
                    </label>
                    <img className="kit-image" src={process.env.PUBLIC_URL + `/kits/${kit}.png`} alt="kit" />

                    <label htmlFor="coachingStyle">
                        Coaching Style:
                <select name="coachingStyle" onChange={(e) => setCoachingStyle(e.target.value)}>

                            <option value="attacking">Attacking</option>
                            <option value="balanced">Balanced</option>
                            <option value="defensive">Defensive</option>
                        </select>
                    </label>
                    <p><q>{explainStyle[`${coachingStyle}`]}</q></p>
                    <Button teamName={teamName} kit={kit} coachingStyle={coachingStyle} history={props.history} />

                </form>
            </div>
        </div>
    )
}
export default CreateTeam;
