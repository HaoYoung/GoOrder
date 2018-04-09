import React from 'react';
import './ShowRest.css';
import RestBox from './RestBox';
import Map from './Map/Map';
//height:'110px'
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
        const { rests } = this.props;
        
        const restComponent = rests.map((rest) => {
            return <RestBox id={rest.id} name={rest.name} url={rest.imgurl}/> 
            //console.log(rest.name);
        })
        
        return (
            <div className='mt5 container-fluid'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" onClick={this.onListClick}>List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={this.onMapClick}>Map</a>
                    </li>
                </ul>
                <div className='row ma3'>
                    <div className="container-fluid br3 w-100 mr5 pr3 bw1 b--light-black bg-light-blue">
                       { this.state.showList === true
                         ? <div className='row' id="restaurant-container">
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