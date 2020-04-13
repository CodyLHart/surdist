import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';


const HomePage = (props) => {
    return (
        <div className={styles.page}>
            <div className={styles.headerFill}></div>
            <div className={styles.imageFill} />
            <div className={styles.container}>
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
            </div>
            <Link to='/about' >To About Page!</Link>
        </div>
    )
}

export default HomePage;