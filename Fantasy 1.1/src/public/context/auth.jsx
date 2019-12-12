import React, { useEffect, useState, createContext, useContext } from 'react'

export const TeamContext = createContext({ team: [], budget: 100, username: "" })

const ContextWrapper = (props) => {

    const [team, changeTeam] = useState([]);
    const [budget, changeBudget] = useState(100);
    const [username, changeName] = useState("")

    useEffect((username, team, budget) => {
        fetch(`http://localhost:9999/api/user/`,
            {
                Method: "GET",
                credentials: "include"
            })
            .then(response => response.json())
            .then(data => {
                if (data[0].team[0]) {
                    const valuesArray = Object.values(data[0].team[0]);
                    const newTeam = [];
                    valuesArray.map((x) => {
                        if (x.playerName) {
                            newTeam.push(x.playerName)
                        }
                        return newTeam
                    });
                    let newBudget = 100.
                    valuesArray.map((x) => {
                        if (x.price) {
                            newBudget = newBudget - x.price
                        }
                        return newBudget
                    });
                    changeName(data[0].username);
                    changeTeam(newTeam);
                    changeBudget(newBudget.toFixed(2));
                }








            });
    }, { username, team, budget })







    return (
        <TeamContext.Provider value={{ team: team, budget: budget, username: username }}>
            {props.children}
        </TeamContext.Provider>
    )


}
export default ContextWrapper