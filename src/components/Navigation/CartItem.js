import React from 'react';
import './Navigation.css';

const CartItem = (props) => {
    const { name, price, url, quantity } = props;
    
    return (
        <ul className='shopping-cart-items'>
            <li className='clearfix'>
                <img className='cartimg' src={url} alt='item' />
                <span className='item-name'>{name}</span>
                <span className='item-price'>${price}</span>
                <span className='item-quantity'>Quantity: {quantity}</span>
            </li>
        </ul>
    )
}

export default CartItem;