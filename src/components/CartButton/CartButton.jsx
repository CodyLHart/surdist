import React from 'react';
import './CartButton.css'

const CartButton = (props) => {
    const style = props.cartVisible ? 'fa fa-shopping-cart cart-visible' : 'fa fa-shopping-cart'
    return (
        <>
        <i className={style} onClick={props.handleCartButton}></i>
        </>
    )
}

export default CartButton;