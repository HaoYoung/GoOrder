import React from 'react';
import './ShowRest.css';

const RestBox = (props) => {
    const { name, url} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 abox pointer'>
            <img alt='rests' className='restimg' src={url} />
            <div className='container-fluid'>
                <div className='row'>
                    <p className='f2 ml3 pl2'>{name}</p>
                </div>
                <div className='row' style={{height: '20px'}}>
                    <p className='f4 ml3 pl2'>Min: $20</p>
                    <p className='f4 pl4'>Est. time: 45mins+</p>
                </div>
                <div className='row'>
                    <p className='f4 ml3 pl2'>Delivery fee: $1.99</p>
                </div>
            </div>
        </div>
    )
}

export default RestBox;