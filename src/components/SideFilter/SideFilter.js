import React from 'react';
import './SideFilter.css';

class SideFilter extends React.Component {
    
    render(){ 
        return (
            <div>
                <div className='row'>
                    <p className='f1 ml4 mt4'>Filters</p>
                    <a className='f3 ml3 mt4 pt3 pointer'>(clear all)</a>
                </div>
                
                <div className='row'>
                    <p className='f2 ml4 mt3'>I want</p>
                </div>

                <div className="row">
                    <div className="w-50 ml4">
                        <button className='type-btn'>Delivery</button>
                    </div>
                    <div className="w-50 mr3">
                        <button className='type-btn'>Pickup</button>
                    </div>
                </div>
                
                <div className="row">
                    <p className='f3 ml4 mt3'>Price range</p>
                </div>
                <div className="row">
                    <input type="button" className='w-20 ml4' value="$"/>
                    <input type="button" className='w-20' value="$$"/>
                    <input type="button" className='w-20' value="$$$"/>
                    <input type="button" className='w-20' value="$$$$"/>
                    <input type="button" className='w-20 mr3' value="$$$$$"/>
                </div>
                
                <div className="row">
                    <p className='f3 ml4 mt3'>Rating range</p>
                </div>
                <div className="row">
                    <input type="button" className='w-20 ml4' value="★"/>
                    <input type="button" className='w-20' value="★"/>
                    <input type="button" className='w-20' value="★"/>
                    <input type="button" className='w-20' value="★"/>
                    <input type="button" className='w-20 mr3' value="★"/>
                </div>
                
                <div className="row">
                    <p className='f3 ml4 mt3'>Delivery time</p>
                </div>
                <div className="slidecontainer pl3">
                 <div className="row">
                     <p className='f3 ml4'>Value: <span id="demo"></span></p>
                 </div>
                  <input type="range" min="1" max="100" value="33" className="slider" id="myRange"/>
                    <div className="row">
                        <div className="col-sm-3">
                        <h8>30 min</h8>
                        </div>
                        <div className="col-sm-3">
                        <h8>45 min</h8>
                        </div>
                        <div className="col-sm-3">
                        <h8>60 min</h8>
                        </div>
                        <div className="col-sm-3">
                        <h8>Any</h8>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <p className='f3 ml4 mt3'>Feature</p>
                </div>
                <div className="container">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox01" checked="checked"/>
                        <label className="form-check-label" for="checkbox100">Open Now</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="filled-in form-check-input" id="checkbox02" />
                        <label className="form-check-label" for="checkbox101">New & Hot</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox03"/>
                        <label className="form-check-label" for="checkbox100">Free Delivery</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox04" />
                        <label className="form-check-label" for="checkbox100">Coupons Available</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideFilter;