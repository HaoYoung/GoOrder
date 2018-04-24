import React from 'react';
import './DishCard.css'

const DishCard = (props) => {
    const { name, price, url} = props;
    
    return (
        <div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
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

export default DishCard;