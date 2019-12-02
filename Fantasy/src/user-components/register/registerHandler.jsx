import React from 'react';

import { useAlert } from 'react-alert';


const Button = (props) => {
    const alert = useAlert()
    const items = props;
    
    function submitHandler(event) {
        const { username, password, rePassword } = items;
        console.log(props.history);

        if (username.length < 4) {
            return [alert.show("Username must be at least 4 characters"),
            event.preventDefault()]
        }
        if (password.length < 6) {
            return [alert.show("Password must be at least 6 characters"),
            event.preventDefault()]
        }
        if (rePassword !== password) {
            return [alert.show("Passwords must match"),
            event.preventDefault()]
        }

        fetch(`http://localhost:9999/api/user/register`, {
            body: JSON.stringify(items),
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            }
          }).then(res => res.json()).then(() => {
             props.history.push(`/login`)
          }).catch((err)=>{const error =err.message;
            debugger
              return [alert.show(error),
          event.preventDefault()] });
         
    }
    

    return (
        
        <button type="button" onClick={submitHandler}>Register</button>
    )
}

export default Button