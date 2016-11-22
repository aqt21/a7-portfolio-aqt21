import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
require('materialize-css/dist/css/materialize.css');
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import LandingPage from './LandingPage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="my-projects" component={MyProjects}/>
                <Route path="contact-me" component={ContactMe}/>
            </Route>
        </Router>,
  document.getElementById('root')
);