import React from 'react';
import Button from "./loginHandler"
import { Link } from "react-router-dom"

import "../login/login-and-register.css";


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ``,
        }
    }

    changeUsernameHandler = (event) => {
        const newValue = event.target.value;
        this.setState({ username: newValue })
    }
    changePasswordHandler = (event) => {
        const newValue = event.target.value;
        this.setState({ password: newValue })
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>No registration? Sign-up <Link to="/register">here</Link></p>
                <form className="register">
                    <label htmlFor="username">
                        Name:
    <input type="textarea" name="username" onChange={this.changeUsernameHandler} />
                    </label>
                    <label htmlFor="password">
                        Password:
    <input type="password" name="password" onChange={this.changePasswordHandler} />
                    </label>


                    <Button username={this.state.username} password={this.state.password} history={this.props.history} />
                </form>
            </div>
        )

    }

}

export default Login;