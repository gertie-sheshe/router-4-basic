import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

const Home = () => (
    <div>
        <h2>Home page</h2>
    </div>
);

const Contact = () => (
    <div>
        <h2>Contact Home</h2>
    </div>
);

const CustomLink = ({children, to, exact}) => (
    <Route path={to} exact={exact} children={({match}) => (
        <div className={match ? 'active' : ''}>
            {match ? '>' : ''}
            <Link to={to}>
                {children}
            </Link>
        </div>
    )} />
)

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <CustomLink exact={true} to="/">
                        Home
                    </CustomLink>
                    <CustomLink to="/contact">
                        Contact
                    </CustomLink>

                    <hr/>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact}/>
                        <Route render={() => (<div> Sorry, this page does not exist</div>)} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;