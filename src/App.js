import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Airport from './components/Airports';
import City from './components/City';
import Courses from './components/Courses';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>

        <Route path="/" exact component={Home}/>
        <Route path="/airports" component={Airport}/>
        <Route path="/cities" component={City}/>
        <Route path="/renderme" render={() => (<div>Render me</div>)} />
        <Route path="/courses" component={Courses} />
      </div>
    )
  }
}

export default App;