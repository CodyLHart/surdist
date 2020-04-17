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
            <h1>{props.viewing ? props.viewing.price : null}</h1>
            <h1>{props.viewing ? props.viewing.material : null}</h1>
            <h1>{props.viewing ? props.viewing.cut : null}</h1>
            <img src={`${props.viewing ? props.viewing.photo : null}`} alt="Stuff"/>
        </div>
    )
} 

export default ProductCard;