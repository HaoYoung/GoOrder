import React from 'react';
import './ShowRest.css';

class RestBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }
    
    loadThisMenu = () => {
        fetch(`https://go-order-api.herokuapp.com/menu/${this.state.id}`, {
            method: 'get',
            headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            if(data !== 'Not found'){
                this.props.loadMenu(data);
            }
        })
        
        fetch(`https://go-order-api.herokuapp.com/get_rest_info/${this.state.id}`, {
            method: 'get',
            headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            if(data !== 'Not found'){
                this.props.loadRest(data);
                console.log(data);
                this.props.onOrderState(true);
            }
        })
    }
    
    render(){
        const { name, url} = this.props;
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 abox pointer' onClick={this.loadThisMenu}>
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
}

export default RestBox;