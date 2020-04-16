import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css'


const AboutPage = (props) => {
    return (
        <div className={styles.page}>
            <div className={styles.headerFill}></div>
            <div className={styles.imageFill}><h1 className={styles.tmm}>THE MILK MEN</h1></div>
            <div>
                <h1>TESTING TESTIN</h1>
            </div>
        </div>
    )
}

export default AboutPage;