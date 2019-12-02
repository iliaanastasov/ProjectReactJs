import React from 'react';

import { useAlert } from 'react-alert';


const Button = (props) => {
    const alert = useAlert()
    const items = props;
    
    function submitHandler(event) {
        const { username, password,  } = items;
        
        if (username.length < 4) {
            return [alert.show("Username must be at least 4 characters"),
            event.preventDefault()]
        }
        if (password.length < 6) {
            return [alert.show("Password must be at least 6 characters"),
            event.preventDefault()]
        }
        fetch(`http://localhost:9999/api/user/login`, {
            body: JSON.stringify(items),
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            credentials: 'include'
          })
          .then(res => res.text())
          .then((res) => {
              console.log(res);
              
            if (res==="sucessful") {
                alert.show("Successfully logged in")
                props.history.push(`/`)
            }else{
                alert.show("Wrong credentials.") 
            }
            
          }).catch((err)=>{const error =err.message;
            debugger
              return [alert.show(error),
          event.preventDefault()] });
         
    }
    

    return (
        
        <button type="button" onClick={submitHandler}>Login</button>
    )
}

export default Button