import React, { useState, useEffect } from 'react';
import './ranking.css';




const Rankings = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9999/api/rankings/`,
            {
                Method: "GET",
                credentials: "include"
            })
            .then(response => response.json())
            .then(newData => {
                setData(newData)

            })


    })


    return (
        <div className="table">
            <h2>Our Current Rankings </h2>

            <table>
                <tr>
                    <th>Ranking</th>
                    <th>User</th>
                    <th>Total Points</th>
                    <th>Team</th>
                </tr>
                {
                    data.map((rows, idx) => {
                        return <tr>
                            <th>#{idx+1}</th>
                            <th>{rows.user}</th>
                            <th>{rows.totalPoints}</th>
                            <th>{rows.team.map((item) => { return item + " " })}</th>
                        </tr>
                    })
                }

            </table>
        </div>
    )

}

export default Rankings;


