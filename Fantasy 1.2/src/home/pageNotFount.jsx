import React from 'react';
import { Link } from "react-router-dom"

const NotFound = () => {




    return (

        <div>

            

            <h2>Inaccurate path. Go back <Link to="/">home</Link></h2>
            <img src={process.env.PUBLIC_URL + `/confusion.png`} alt="#" />

        </div>

    )

}

export default NotFound;