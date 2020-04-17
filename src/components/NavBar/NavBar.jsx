import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import CartButton from '../CartButton/CartButton';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            {/* <Link className="NavBar-link" to="/">Home</Link> */}
            <Link className="NavBar-link" to='' onClick={props.handleLogout}>Log Out</Link>
            <span>WELCOME, {props.user.name.toUpperCase()}</span>
            {props.user && <CartButton 
                cartVisible={props.cartVisible}
                handleCartButton={props.handleCartButton}
            />}
        </div>
        :
        <div>
            <Link className="NavBar-link" to="/signup">Sign Up</Link>
            <Link className="NavBar-link" to="/login">Log In</Link>
        </div>

    return (
        <div className="NavBar">
            <div className="NavBar-left">
                <Link className="NavBar-link" to="/about">About</Link>
                <Link className="NavBar-link" to="/shirts">Shirts</Link>
                <Link className="NavBar-link" to="/not-shirts">Not Shirts</Link>
                <Link className="NavBar-link" to="/contact">Contact</Link>
                {props.user && props.user.email === 'surdistdesigns@gmail.com' && <Link className="NavBar-link" to="/admin">Admin</Link>}
                
            </div>
            <div className="NavBar-right">
                {nav}
                
            </div>
        </div>
    );
};

export default NavBar;