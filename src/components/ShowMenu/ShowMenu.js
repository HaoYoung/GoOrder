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
        const { menu, rest, r_addr, c_id } = this.props;
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
                       <div className='ml3'>
                           <img alt='rests' className='restimg' src={rest.imgurl} />
                           <p className='f2 ml3 pl2'>{rest.name}</p>
                           <p className='f3 ml3 pl2'>Phone: {rest.phone}</p>
                           <p className='f3 ml3 pl2'>Address: {r_addr.street} {r_addr.suit} {r_addr.city} {r_addr.state}</p>
                       </div>
                    </div>
                    <div className='pl4 w-80'>
                        <ShowDish types={dishType} dishes={menu} r_id={rest.id} c_id={c_id} loadCart={this.props.loadCart}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowMenu;