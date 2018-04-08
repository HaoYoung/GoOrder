import React from 'react';
import './ShowRest.css';
//height:'110px'
class ShowRest extends React.Component {
    render(){ 
        return (
            <div className='mt5'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Map</a>
                    </li>
                </ul>
                <div className='row ma3'>
                    
                </div>
            </div>
        );
    }
}

export default ShowRest;