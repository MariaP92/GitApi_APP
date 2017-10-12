import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'

import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';

const NotFound = (props) => {
  return (
    <div><h2> Error 404! </h2></div>
  );
}

const HeaderApp = () => {
  return (
    <header>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/battle">Battle</NavLink></li>
            <li><NavLink to="/popular">Popular</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

const App = (props) => {
  const { model } = props;
  return (
    <BrowserRouter>
      <div id="info">
        <HeaderApp />
        <div id="container-info" className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;

