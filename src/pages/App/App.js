import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';


class App extends Component {
  render() {
    return (
      <div>
        <h1>SURDIST APP</h1>
        <nav>
          <NavLink to="/">Landing</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </nav>
        <Switch>
          <Route exact path = '/' render={() => 
            <LandingPage />
          }/>
          <Route exact path = '/about' render={() => 
            <AboutPage />
          }/>
          <Route exact path = '/signup' render={({ history }) => 
            <SignUpPage 
              history={history}
            />
          }/>
          <Route exact path = '/login' render={({ history }) => 
            <LoginPage 
              history={history}
            />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
