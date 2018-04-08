import React from 'react';
import './ShowRest.css';
import RestBox from './RestBox';
//height:'110px'
class ShowRest extends React.Component {
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
                        <a class="nav-link active" href="#">List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Map</a>
                    </li>
                </ul>
                <div className='row ma3'>
                    <div className="container-fluid br3 bw1 b--light-silver">
                        <div class="row" id="restaurant-container">
                            {restComponent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowRest;