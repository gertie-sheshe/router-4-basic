import React, {Component} from 'react';
import {Route, Link, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Public from './components/Public';
import Private from './components/Private';

const AuthService = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const SecretRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated === true ? <Component {...props}/> : <Redirect to="/login"/>
    )}/>
)

class Auth extends Component {
    render() {
        return (
            <Router>
                <div style={{width: 1000, margin: '0 auto'}}>
                    <ul>
                        <li><Link to="/public">Public</Link></li>
                        <li><Link to="/private">Private</Link></li>
                    </ul>

                    <hr />

                    <Route path='/public' component={Public} />
                    <SecretRoute path='/private' component={Private} />
                </div>
            </Router>
        );
    }
}

export default Auth;