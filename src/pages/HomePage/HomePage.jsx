import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to='/about' >To About Page!</Link>
        </div>
    )
}

export default HomePage;