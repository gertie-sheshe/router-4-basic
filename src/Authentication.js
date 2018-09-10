import React, {Component} from 'react';
import {Route, Link, Redirect, withRouter, BrowserRouter as Router} from 'react-router-dom';
import Public from './components/Public';
import Private from './components/Private';
import AuthService from './utils/authservice';
import Login from './components/Login';


const SecretRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated === true ? <Component {...props}/> : <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
        }}/>
    )}/>
)

const AuthStatus = withRouter(({history}) => (
        AuthService.isAuthenticated ? (
            <p>
                Welcome! <button onClick={ () => {
                    AuthService.logout(() => history.push('/'))
                }}>Sign Out</button>
            </p>
        ) : (<p>You are not logged in</p>)
))

class Auth extends Component {
    render() {
        return (
            <Router>
                <div style={{width: 1000, margin: '0 auto'}}>
                <AuthStatus />
                    <ul>
                        <li><Link to="/public">Public</Link></li>
                        <li><Link to="/private">Private</Link></li>
                    </ul>

                    <hr />

                    <Route path='/public' component={Public} />
                    <Route path="/login" component={Login} />
                    <SecretRoute path='/private' component={Private} />
                </div>
            </Router>
        );
    }
}

export default Auth;