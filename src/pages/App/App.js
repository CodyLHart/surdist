import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';


class App extends Component {
  render() {
    return (
      <div>
        <h1>SURDIST APP</h1>
        <nav>
          <NavLink to="/">Landing</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Switch>
          <Route exact path = '/' render={() => 
            <LandingPage />
          }/>
          <Route exact path = '/about' render={() => 
            <AboutPage />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
