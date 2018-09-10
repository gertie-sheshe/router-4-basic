import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Airport = () => (
  <div>
    <ul>
      <li>JKIA</li>
      <li>Mombasa International</li>
      <li>Eldoret International</li>
      <li>Wilson</li>
    </ul>
  </div>
)

const City = () => (
  <div>
    <ul>
      <li>Nairobi</li>
      <li>Kisumu</li>
      <li>Mombasa</li>
      <li>Nakuru</li>
      <li>Eldoret</li>
    </ul>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" exact component={Home}/>
        <Route path="/airports" component={Airport}/>
        <Route path="/cities" component={City}/>
      </div>
    )
  }
}

export default App;