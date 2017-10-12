import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'

import {battle, fetchPopularRepos} from './GitHubApi';

// const lang = 'JavaScript';
// fetchPopularRepos(lang).then( (repos) => {
//    console.log ("repos:", repos);
//   this.setState(function () {
//     return {
//       repos: repos
//     }
//   });
// });

class Popular extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div>
                        <ul className="nav navbar-nav navbar-right" id="navbarActual">
                            <li>  <NavLink exact to="/courses/html"> All </NavLink> </li>
                            <li>  <NavLink to="/courses/css"> JavaScript </NavLink> </li>
                            <li>  <NavLink to="/courses/javascript"> Ruby </NavLink> </li>
                            <li>  <NavLink to="/courses/javascript"> Java </NavLink> </li>
                            <li>  <NavLink to="/courses/javascript"> Css </NavLink> </li>
                            <li>  <NavLink to="/courses/javascript"> Python </NavLink> </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="containerRanking">

                    </div>
                </div>
            </div>
        );
    }
}

export default Popular;