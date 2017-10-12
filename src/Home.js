import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
  } from 'react-router-dom'
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h1 className="text-center">Github Battle: Battle your friends... and stuff.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12" align="center">
                        <NavLink to="/battle">
                            <Button className="colorBtn" bsSize="large" >Battle</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;