import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return(
        <div 
        className="cart"
        id={props.cartVisible ? "" : "hidden"}
        >
            <h3>SORRY!</h3>
            <h4>OUR WEBSITE IS UNDERGOING CONSTRUCTION</h4>
            <p>IF YOU WOULD LIKE TO PURCHASE A SHIRT, SHOOT US AN EMAIL AT</p>
            <a href="mailto:surdistdesigns@gmail.com" className="cart-email">SURDISTDESIGNS@GMAIL.COM</a>
            <p>AND WE WILL GIVE YOU A 15% DISCOUNT ON YOUR PURCHASE FOR PUTTING UP WITH US!</p>
            <h4>THANKS!</h4>
        </div>
    );
}

export default Cart;