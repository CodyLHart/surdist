import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <header>Log In</header>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange}></input>
                    <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}></input>
                    <button>Log In</button>
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        );
    }
}

export default LoginPage;