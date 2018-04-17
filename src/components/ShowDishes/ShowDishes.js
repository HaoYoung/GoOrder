import React from 'react';
import DishBox from './DishBox'

class ShowDishes extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showList: true
        }
    }
    
    render(){ 
        
        return(
            <div>
                <div>
                    Restaurant Info(image, name, business hour, address, phone, delivery time, min order, delivery fee)
                </div>
                <div>
                    menu category
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default ShowDishes;