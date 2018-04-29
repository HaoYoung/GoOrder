import React from 'react';
import DishBox from './DishBox';

class ShowDish extends React.Component {
    
    render(){ 
        const { types, dishes, r_id, c_id } = this.props;
        const typeComponent = types.map((type, i) => {
            return (
                <div key={i}>
                    <div className='mt2 ml4 mr4 bb b--dark-blue'>
                        <div className='tl ma1 pl3'>
                            <p className='f2'>{type}</p>
                        </div>
                    </div>
                    <div>
                        <DishBox dishes={dishes} type={type} r_id={r_id} c_id={c_id} loadCart={this.props.loadCart}/>
                    </div>
                </div>
                
            );
        })
        
        return (
            <div>
                {typeComponent}
            </div>
        );
    }
}

export default ShowDish;