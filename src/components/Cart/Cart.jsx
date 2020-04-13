import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return(
        <div 
        className={props.cartVisible ? "cart" : "cart-hide"}
        >
            
        </div>
    );
}

export default Cart;