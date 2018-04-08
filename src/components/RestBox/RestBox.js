import React from 'react';

const RestBox = (props) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}