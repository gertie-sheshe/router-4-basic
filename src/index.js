import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Authentication from './Authentication';
import CustomLink from './CustomLink';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <CustomLink />
    </Router>, document.getElementById('root'));
registerServiceWorker()
