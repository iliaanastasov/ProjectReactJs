import React from 'react';
import Button from "./registerHandler"

import "../login/login-and-register.css";


class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ``,
            rePassword: ``,
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
    changeRePasswordHandler = (event) => {
        const newValue = event.target.value;
        this.setState({ rePassword: newValue })
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form className="register">
                    <label htmlFor="username">
                        Name:
    <input type="textarea" name="username" onChange={this.changeUsernameHandler} />
                    </label>
                    <label htmlFor="password">
                        Password:
    <input type="password" name="password" onChange={this.changePasswordHandler} />
                    </label>
                    <label htmlFor="rePassword">
                        Re-password:
    <input type="password" name="rePassword" onChange={this.changeRePasswordHandler} />
                    </label>

                    <Button username={this.state.username} password={this.state.password} rePassword={this.state.rePassword} history={this.props.history} />
                </form>
            </div>
        )

    }

}

export default Register;