import React from 'react';
import './ShowRest.css';
import RestBox from './RestBox';
import Map from './Map/Map';
class ShowRest extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showList: true
        }
    }
    
    onListClick = () => {
        this.setState({showList: true})
    }
    
    onMapClick = () => {
        this.setState({showList: false})
    }
    
    render(){ 
        const { rests, onOrderState, loadMenu, loadRest, loadRAddress } = this.props;
        
        const restComponent = rests.map((rest, i) => {
            return <RestBox key={i} id={rest.r_id} name={rest.name} url={rest.imgurl} onOrderState={onOrderState} loadMenu={loadMenu} loadRest={loadRest} loadRAddress={loadRAddress}/> 
        })
        
        return (
            <div className='mt2 container-fluid'>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" onClick={this.onListClick}>List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.onMapClick}>Map</a>
                    </li>
                </ul>
                <div className='row ma3'>
                    <div className="container-fluid br3 w-100 mr5 pr3 bw1 b--light-black bg-light-blue">
                       { this.state.showList === true
                         ? <div className='tc' id="restaurant-container">
                            {restComponent}
                           </div>
                         : <div id='map-container'>
                              <Map />
                           </div>
                       }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowRest;