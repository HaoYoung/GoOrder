import React from 'react';
import './Navigation.css';

class CartItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dish_id: this.props.dish_id
        }
    }
    
    onPlusClick = () => {
        fetch('https://go-order-api.herokuapp.com/addtocart', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                c_id: this.props.c_id,
                r_id: this.props.r_id,
                dish_id: this.props.dish_id,
                quantity: this.props.quantity + 1
            })
        })
        .then(response => response.json())
        .then(cartItem => {
            this.props.loadCart(cartItem);
        })
    }
    
    onMinusClick = () => {
        if(this.props.quantity > 1){
            fetch('https://go-order-api.herokuapp.com/addtocart', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    c_id: this.props.c_id,
                    r_id: this.props.r_id,
                    dish_id: this.props.dish_id,
                    quantity: this.props.quantity - 1
                })
            })
            .then(response => response.json())
            .then(cartItem => {
                this.props.loadCart(cartItem);
            })
        }else{
            fetch('https://go-order-api.herokuapp.com/removefromcart', {
                method: 'delete',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    c_id: this.props.c_id,
                    item_id: this.props.item_id
                })
            })
            .then(response => response.json())
            .then(cartItem => {
                this.props.loadCart(cartItem);
            })
        }
    }
    
    render(){
        const { name, price, url, quantity } = this.props;

        return (
            <ul className='shopping-cart-items'>
                <li className='clearfix'>
                    <img className='cartimg' src={url} alt='item' />
                    <span className='item-name'>{name}</span>
                    <span className='item-price'>${price}</span>
                    <span className='item-quantity'>Quantity: <a className='br4 pointer bg-light-gray grow f1 pl2 pr2 mr2' onClick={this.onMinusClick}>-</a>{quantity}<a className='br4 pointer bg-light-red grow f1 pl2 pr2 ml2' onClick={this.onPlusClick}>+</a></span>
                </li>
            </ul>
        )
    }
}

export default CartItem;