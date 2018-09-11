import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Authentication from './Authentication';
import CustomLink from './CustomLink';
import SideBar from './SideBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <SideBar />
    </Router>, document.getElementById('root'));
registerServiceWorker()
