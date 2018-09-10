import React, { Component } from "react";
import AuthService from '../utils/authservice';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        redirectToPreviousState: false
    };

    login = () => {
        AuthService.authenticate(() => {
            this.setState({redirectToPreviousState: true})
        })
    }

    render() {
        const { from } = this.props.location.state || {from : { pathname: '/'}};
        const {redirectToPreviousState} = this.state;

        if (redirectToPreviousState) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <p>You must login to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default Login;
