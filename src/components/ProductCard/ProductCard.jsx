import React from 'react';
import styles from './ProductCard.module.css'

const ProductCard = (props) => {
    let clName;
    if (props.viewing && !props.cartVisible) {
        clName = styles.shirtCard;
    } else if (props.viewing && props.cartVisible) {
        clName = styles.shirtCardCart;
    } else {
        clName = styles.none
    }
    return (
        <div className={clName} onClick={(e) => {
            e.stopPropagation();
        }}>
            <h1>{props.viewing ? props.viewing.displayName : null}</h1>
        </div>
    )
} 

export default ProductCard;