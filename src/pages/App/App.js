import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import AdminPage from '../AdminPage/AdminPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import Cart from '../../components/Cart/Cart';
import { Link, Redirect } from 'react-router-dom';
import adminService from '../../utils/adminService';
import ShirtsPage from '../ShirtsPage/ShirtsPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      cartVisible: false,
      products: [],
      viewing: null
    }
  }

  async componentDidMount() {
    const products = await adminService.indexProducts();
    this.setState({
        products: products
    });
  }

  handleRefresh = () => {
    const products = adminService.indexProducts();
    this.setState({
        products: products
    });
  }

  handleCartButton = () => {
    let flip = this.state.cartVisible ? false : true;
    this.setState({cartVisible: flip})
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleUpdateProduct = async (data) => {
    try {
      const updatedProduct = await adminService.updateProduct(data);
      const newProductsArray = this.state.products.map(p => 
        p._id === updatedProduct._id ? updatedProduct : p
      );
      this.setState(
        {products: newProductsArray},
        () => this.props.history.push('/admin/inventory')
      );
    } catch(err) {
      console.log(err);
    }
  }

  handleViewing = (product) => {
    let prod = this.state.viewing ? null : product;
    this.setState({viewing: prod})
  }
  
  handleViewingNull = () => {
    if (this.state.viewing) {
      this.setState({viewing: null});
    }
  }

  handleSort = (newSort) => {
    this.setState({products: newSort})
  }

  handleAddProduct = (product) => {
    let newProds = [...this.state.products, product]
    this.setState({products: newProds})
  }
  
  handleDeleteProduct = async (product) => {
    await adminService.deleteProduct(product);
    this.setState({
      products: this.state.products.filter(p => p._id !== product._id)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <div className="App-header-logo">
              SURDIST
              <div className="logo">
                <img src="https://i.imgur.com/mKidelE.png" alt="Milk Men"/>
              </div> 
              DESIGNS
            </div>
          </Link>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            cartVisible={this.state.cartVisible}
            handleCartButton={this.handleCartButton}
          />
        </header>
        <main>
          <div 
            className="page"
            id={this.state.cartVisible ? "page-cart" : ""}
          >
            <Switch>
              <Route exact path = '/' render={() => 
                <HomePage 
                  products={this.state.products}
                  handleViewing={this.handleViewing}
                  handleViewingNull={this.handleViewingNull}
                  viewing={this.state.viewing}
                  cartVisible={this.state.cartVisible}
                  handleCartButton={this.handleCartButton}
                />
              }/>
              <Route exact path = '/about' render={() => 
                <AboutPage />
              }/>
              <Route exact path = '/shirts' render={() => 
                <ShirtsPage 
                  products={this.state.products}
                  handleViewing={this.handleViewing}
                  handleViewingNull={this.handleViewingNull}
                  viewing={this.state.viewing}
                  cartVisible={this.state.cartVisible}
                  handleCartButton={this.handleCartButton}
                />
              }/>
              <Route path = '/admin' render={({ history }) => 
                userService.getUser() && userService.getUser().email === 'surdistdesigns@gmail.com' ?
                <AdminPage 
                  products={this.state.products}
                  history={history}
                  handleUpdateProduct={this.handleUpdateProduct}
                  handleDeleteProduct={this.handleDeleteProduct}
                  handleRefresh={this.handleRefresh}
                  cartVisible={this.state.cartVisible}
                  handleAddProduct={this.handleAddProduct}
                  handleSort={this.handleSort}
                />
                :
                <Redirect to='/' />
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
