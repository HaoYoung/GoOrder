import React from 'react';
import './TypeFilter.css';

export default class TypeFilter extends React.Component {
    render() {
        const { onClose } = this.props;
        if (!this.props.show) {
            return null;
        }
        return (
            <div className='ml2 mr2'>
                <div className='br-pill bg-moon-gray pa2 f4 center' style={{height: '30px'}}>
                    {this.props.children}
                    <p className='pointer blue pl3 f3' onClick={() => onClose()}>×</p>
                </div>
            </div>
        );
    }
}