import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'

import { battle, fetchPopularRepos } from './GitHubApi';


class Popular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: undefined
        }
        
    }

    AppList() {
        const lang = 'JavaScript';
        fetchPopularRepos(lang).then((repos) => {
            console.log("repos:", repos);
            this.setState(function () {
                return {
                    repos: repos
                }
            });
        });
    }

    render() {
        const All = ()=>{
           return (<div>{this.state.repos}</div>);
        }
        const JavaScript = ()=>{
            return (<div>{this.state.repos}</div>);
        }
        const Ruby= ()=>{
           return(<div>{this.state.repos}</div>);
        }
        const Java = ()=>{
            return(<div>{this.state.repos}</div>);
        }
        const Css = ()=>{
            return(<div>{this.state.repos}</div>);
        }
        const Python = ()=>{
            return(<div>{this.state.repos}</div>);
        }


        return (
            <div className="container-fluid" >
                <div className="row">
                    <div>
                        <ul className="nav navbar-nav navbar-right" id="navbarActual">
                            <li>  <NavLink exact to="/popular/all"> All </NavLink> </li>
                            <li>  <NavLink to="/popular/javascript"> JavaScript </NavLink> </li>
                            <li>  <NavLink to="/popular/ruby"> Ruby </NavLink> </li>
                            <li>  <NavLink to="/popular/java"> Java </NavLink> </li>
                            <li>  <NavLink to="/popular/css"> Css </NavLink> </li>
                            <li>  <NavLink to="/popular/python"> Python </NavLink> </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="containerRanking">
                        <BrowserRouter>
                            <div id="info">
                                <div id="container-info" className="container-fluid">
                                    <Switch>
                                        <Route exact path="/popular/" component={All} />
                                        <Route path="/popular/javascript" component={JavaScript} />
                                        <Route path="/popular/ruby" component={Ruby} />
                                        <Route path="/popular/java" component={Java} />
                                        <Route path="/popular/css" component={Css} />
                                        <Route path="/popular/python" component={Python} />
                              
                                    </Switch>
                                </div>
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popular;