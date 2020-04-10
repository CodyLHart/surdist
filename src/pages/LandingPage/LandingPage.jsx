import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = (props) => {
    return (
        <div>
            <h2>Landing Page</h2>
            <Link to='/about' >To About Page!</Link>
        </div>
    )
}

export default LandingPage;