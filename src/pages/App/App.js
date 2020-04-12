import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-logo">
            SURDIST
            <div className="logo">
              <img src="https://i.imgur.com/mKidelE.png" alt="Milk Men"/>
            </div> 
            DESIGNS
          </div>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        
        <Switch>
          <Route exact path = '/' render={() => 
            <HomePage />
          }/>
          <Route exact path = '/about' render={() => 
            <AboutPage />
          }/>
          <Route exact path = '/signup' render={({ history }) => 
            <SignUpPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path = '/login' render={({ history }) => 
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
        <footer>
          <div>All Rights Reserved &copy;2020 Surdist Designs</div>
        </footer>
      </div>
    )
  }
}

export default App;
