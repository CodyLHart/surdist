import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage = (props) => {
    return (
        <div>
            <h2>About Page</h2>
            <Link to='/'>To Home Page!</Link>
        </div>
    )
}

export default AboutPage;