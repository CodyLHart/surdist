import React from 'react';
import styles from './ProductCard.module.css'

const ProductCard = (props) => {
    return (
        <div className={props.viewing ? styles.shirtCard : styles.none}>
            <h1>{props.viewing ? props.viewing.displayName : null}</h1>
        </div>
    )
}

export default ProductCard;