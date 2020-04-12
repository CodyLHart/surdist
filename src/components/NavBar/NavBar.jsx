import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link className="NavBar-link" to="/">Home</Link>
            <Link className="NavBar-link" to='' onClick={props.handleLogout}>Log Out</Link>
            <span>Welcome, {props.user.name}</span>
        </div>
        :
        <div>
            <Link className="NavBar-link" to="/signup">Sign Up</Link>
            <Link className="NavBar-link" to="/login">Log In</Link>
        </div>

    return (
        <div className="NavBar">
            <div className="NavBar-left">
                &nbsp;
                <Link className="NavBar-link" to="/about">About</Link>
            </div>
            <div className="NavBar-right">
                {nav}
                &nbsp;
            </div>
        </div>
    );
};

export default NavBar;