import React from 'react';
import './ShowRest.css';

const RestBox = (props) => {
    const { name, url} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 abox pointer'>
            <img alt='rests' className='restimg' src={url} />
            <div className='row'>
                <p className='f2 ml3 pl2'>{name}</p>
            </div>
        </div>
    )
}

export default RestBox;