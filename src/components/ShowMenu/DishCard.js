import React from 'react';
import './DishCard.css'

class DishCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }
    
    addThisDish = () => {
        fetch('https://go-order-api.herokuapp.com/addtocart', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                c_id: this.props.c_id,
                r_id: this.props.r_id,
                dish_id: this.state.id,
                quantity: '1'
            })
        })
        .then(response => response.json())
        .then(cartItem => {
            this.props.loadCart(cartItem);
        })
    }
    
    render(){
        const { name, price, url} = this.props;

        return (
            <div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 pointer' onClick={this.addThisDish}>
               <div className='container-fluid'>
                   <div className='row'>
                       <img alt='dish' className='dishimg' src={url} />
                       <div className='ma2 pa2 tl dishDescription'>
                           <p className='f3'>{name}</p>
                           <p className='f3'>Price: ${price}</p>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
        
}

export default DishCard;