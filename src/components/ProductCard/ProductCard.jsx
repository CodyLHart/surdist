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
            <div className={styles.infoSection}>
                <img className={styles.infoImg} src={`${props.viewing ? props.viewing.photo : null}`} alt={props.viewing ? props.viewing.displayName : null}/>
                <div className={styles.infoTextDiv}>
                    {/* <h1>{props.viewing ? props.viewing.displayName.toUpperCase() : null}</h1> */}
                    <p>{props.viewing ? props.viewing.description : null}</p>
                    <hr/>
                    <div onClick={() => props.handleCartButton()} className={styles.addToCart}>ADD TO CART</div>
                </div>
            </div>
        </div>
    )
} 

export default ProductCard;