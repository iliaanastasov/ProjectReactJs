import  { useEffect } from 'react';

function Logout(props) {
    
    useEffect(() => {
        console.log("in component");
        
        fetch(`http://localhost:9999/api/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text())
            .then(() => {
              
                props.history.push('/');
                return   window.location.reload()
                    
            })
    });
    
  return null;
}

export default Logout;