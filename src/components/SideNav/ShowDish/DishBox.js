import React from 'react';
import DishCard from './DishCard';

class DishBox extends React.Component {
    
    render(){ 
        const { dishes, type } = this.props;
        const dishComponent = dishes.map((dish, i) => {
            if (dish.category === type) {
                return <DishCard key={i} id={dish.id} name={dish.name} price={dish.price} url={dish.url}></DishCard>
            } else {
                return null;
            }
        });
        
        return (
            <div className='container-fluid'>
                <div className='tc'>
                    {dishComponent}
                </div>
            </div>
        );
    }
}

export default DishBox;