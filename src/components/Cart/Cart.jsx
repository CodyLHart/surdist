import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return(
        <div 
        className="cart"
        id={props.cartVisible ? "" : "hidden"}
        >
            
        </div>
    );
}

export default Cart;