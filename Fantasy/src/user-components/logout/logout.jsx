import  { useEffect } from 'react';
import { useAlert } from 'react-alert';
function Logout(props) {
    const alert = useAlert()
    useEffect(() => {
        console.log("in component");
        
        fetch(`http://localhost:9999/api/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text())
            .then(() => {
              
                props.history.push('/');
                return  alert.show("Logout Successfully");
            });
    });
    
  return null;
}

export default Logout;