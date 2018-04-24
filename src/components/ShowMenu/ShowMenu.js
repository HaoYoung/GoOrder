import React from 'react';
import './ShowMenu.css';
import ShowDish from './ShowDish';

class ShowMenu extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dishType: []
        }
    }
    
    
    render(){ 
        const { menu, rest } = this.props;
        const { dishType } = this.state;
        
        menu.map((dish) => {
             if (dishType.indexOf(dish.category) === -1) {
                 dishType.push(dish.category);
             }
            return null;
        })
        
        return (
            <div className='mt2 container-fluid'>
                <div className='row' style={{height: 1000}}>
                    <div className='w-20'>
                       <div>
                           <img alt='rests' className='restimg' src={rest.imgurl} />
                       </div>
                    </div>
                    <div className='pl4 w-80'>
                        <ShowDish types={dishType} dishes={menu}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowMenu;