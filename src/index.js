import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Authentication from './Authentication';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Authentication />
    </Router>, document.getElementById('root'));
registerServiceWorker()
