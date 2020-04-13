import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import Cart from '../../components/Cart/Cart';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      cartVisible: true
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
        <main>
          <div className="page">
            <Switch>
              <Route exact path = '/' render={() => 
                <HomePage className="page"/>
              }/>
              <Route exact path = '/about' render={() => 
                <AboutPage className="page" />
              }/>
              <Route exact path = '/signup' render={({ history }) => 
                <SignUpPage
                  classname="page" 
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              }/>
              <Route exact path = '/login' render={({ history }) => 
                <LoginPage 
                  classname="page"
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              }/>
            </Switch>
          </div>

          <Cart 
          cartVisible={this.state.cartVisible}
          />
        </main>
        
        
      </div>
    )
  }
}

export default App;
