import React from 'react';
import "./create-team.css"
import { useAlert } from 'react-alert';


const Button = (props) => {
    const alert = useAlert()
    const items = props;
    function submitHandler(event) {
      const {teamName} = props

        if (teamName.length < 1) {
            return [alert.show("Team name is required"),
            event.preventDefault()]
        }
        
        fetch(`http://localhost:9999/api/team/create`, {
            body: JSON.stringify(items),
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((res) => {

                props.history.push(`/`);
                
                window.location.reload();
                return alert.show("Team successfully created")
           

        }).catch((err) => {
            debugger;
            const error = err.message;
            return [alert.show(error),
            ]
        });
    }

  return (
        <div className="create-team-btn">
            <button type="button" onClick={submitHandler}>Create your team</button>
        </div>)
}

export default Button