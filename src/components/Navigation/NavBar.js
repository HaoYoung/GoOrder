import React from 'react';
import search from './search.png';
import icon from './icon1.png';
import './Navigation.css';
import { DropdownButton, MenuItem, Modal, Button } from 'react-bootstrap';

class Navigation extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        
        this.showProfile = this.showProfile.bind(this);
        this.closeProfile = this.closeProfile.bind(this);
        
        const { profile, address } = this.props;
        this.state = {
            editProfile: false,
            editAddress: false,
            id: profile.id,
            fname: profile.fname,
            lname: profile.lname,
            email: profile.email,
            phone: profile.phone,
            street: address.street,
            suit: address.suit,
            city: address.city,
            state: address.state,
            zip: address.zip,
            longitude: address.longitude,
            latitude: address.latitude,
            showCart: false
        }
    }
    
    showProfile = () => { this.setState({editProfile: true}); }
    closeProfile = () => { this.setState({editProfile: false}); }
    showAddress = () => { this.setState({editAddress: true}); 
                         this.setState({street: this.props.address.street});
                         this.setState({suit: this.props.address.suit});
                         this.setState({city: this.props.address.city});
                         this.setState({state: this.props.address.state});
                         this.setState({zip: this.props.address.zip});
                         this.setState({longitude: this.props.address.longitude});
                         this.setState({latitude: this.props.address.latitude});
                        }
    closeAddress = () => { this.setState({editAddress: false}); }
    
    onFNameChange = (event) => { this.setState({fname: event.target.value}) }
    onLNameChange = (event) => { this.setState({lname: event.target.value}) }
    onEmailChange = (event) => { this.setState({email: event.target.value}) }
    onPhoneChange = (event) => { this.setState({phone: event.target.value}) }
    
    onStreetChange = (event) => { this.setState({street: event.target.value}) }
    onSuitChange = (event) => { this.setState({suit: event.target.value}) }
    onCityChange = (event) => { this.setState({city: event.target.value}) }
    onStateChange = (event) => { this.setState({state: event.target.value}) }
    onZipChange = (event) => { this.setState({zip: event.target.value}) }
    onLongitudeChange = (event) => { this.setState({longitude: event.target.value}) }
    onLatitudeChange = (event) => { this.setState({latitude: event.target.value}) }
    
    toggleCart = () => {
        if(this.state.showCart){
            this.setState({showCart: false});
        }else{
            this.setState({showCart: true});
        }
    }
    
    returnHome = () => {
        this.props.onOrderState(false);
        this.props.resetMenu();
    }
    
    OnProfileUpdate = () => {
        fetch('https://go-order-api.herokuapp.com/customer_profile', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                c_id: this.state.id,
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                phone: this.state.phone
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadRest(user);
                console.log(user);
            }
        })
        .catch( err => console.log(err));
    }
    
    OnAddressUpdate =() => {
        fetch('https://go-order-api.herokuapp.com/update_c_addr', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                c_id: this.state.id,
                street: this.state.street,
                suit: this.state.suit,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                longitude: this.state.longitude,
                latitude: this.state.latitude
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.id){
                this.props.loadAddress(data);
                console.log(data);
            }
        })
        .catch( err => console.log(err));
    }
    
    OnAddressInsert =() => {
        fetch('https://go-order-api.herokuapp.com/add_c_addr', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                c_id: this.state.id,
                street: this.state.street,
                suit: this.state.suit,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                longitude: this.state.longitude,
                latitude: this.state.latitude
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.id){
                this.props.loadAddress(data);
                console.log(data);
            }
        })
        .catch( err => console.log(err));
    }
    
    render(){
        const { fname, lname, email, phone, street, suit, city, state, zip, longitude, latitude } = this.state;
        
        return (
            <div>
                <header className="container-fluid">
                <nav className="navbar navbar-light">
                    <a className="navbar-brand logo pointer">
                        <img src={icon} width='35px' height='35px' className="d-inline-block align-top" alt=""/>
                        <p className='f1 mv2'>GoOrder</p>
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item search mv3">
                            <div className="form-inline my-2 my-lg-0 center">
                                <img id='searchIcon' alt='' src={search} width='30px' height='30px'/>
                                <input id="search-input" className="f4 pa2 w-70 center" type="text" placeholder="Search Food, Restaurant..."/>
                                <button  className="w-20 grow f4 link ph3 pv2 dib white bg-light-green"> GO </button>
                            </div>
                        </li>

                        <li className="nav-item mv3">
                            <a className="nav-link active" onClick={this.returnHome}>HOME</a>
                        </li>
                        <li className="nav-item mv3">
                           <DropdownButton title={'SETTING'} style={{background: '#FFD700'}}>
                               <MenuItem eventKey="1" onClick={this.showProfile}>Profile</MenuItem>
                               <MenuItem eventKey="2" onClick={this.showAddress}>Address</MenuItem>
                               <MenuItem eventKey="3">Payment</MenuItem>
                               <MenuItem eventKey="4">Change Password</MenuItem>
                               <MenuItem eventKey="5">Contact us</MenuItem>
                               <MenuItem divider />
                               <MenuItem eventKey="6">Log out</MenuItem>
                           </DropdownButton>
                        </li>
                        <li className="nav-item mv3">
                            <a className="nav-link">ORDERS</a>
                        </li>
                        <li className="nav-item mv3">
                            <a className="nav-link pointer" onClick={this.toggleCart}><i className='fa fa-shopping-cart f3'></i>CART<span className='badge'>{this.props.totalItem}</span></a>
                        </li>
                    </ul>
                </nav>
                </header>
                { this.state.showCart === true
                    ? <div className='container-fluid'>
                        <div className='shopping-cart'>
                            <div className='shopping-cart-header'>
                                <i className="fa fa-shopping-cart cart-icon"></i><span className='badge'>{this.props.totalItem}</span>
                                <div className="shopping-cart-total">
                                    <span class="lighter-text">Total:</span>
                                    <span class="main-color-text">$78.97</span>
                                </div>
                            </div>

                            <ul className='shopping-cart-items'>
                                <li className='clearfix'>
                                    <img className='cartimg' src='https://s3.amazonaws.com/1.us-east-1.517.today/images/1468027353796762.jpeg' alt='item1' />
                                    <span className='item-name'>Fried Rice</span>
                                    <span className='item-price'>$11.99</span>
                                    <span className='item-quantity'>Quantity: 1</span>
                                </li>
                            </ul>

                            <button className='checkout-button'>Checkout</button>
                        </div>
                    </div>
                    : <div/>
                }
                    
                
                <Modal show={this.state.editProfile} onHide={this.closeProfile} bsSize='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title><p className='f2'>Profile</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div class="center">
                                <div class="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>First Name:</p>
                                </div>
                                <div class="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={fname} onChange={this.onFNameChange} required/>
                                </div>
                            </div>
                            <div class="center">
                                <div class="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Last Name:</p>
                                </div>
                                <div class="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={lname} onChange={this.onLNameChange} required/>
                                </div>
                            </div>
                            <div class="center">
                                <div class="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Email:</p>
                                </div>
                                <div class="fl w-two-thirds pa1">
                                  <p className='ml2 mt2'>{email}</p>
                                </div>
                            </div>
                            <div class="center">
                                <div class="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Phone:</p>
                                </div>
                                <div class="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={phone} onChange={this.onPhoneChange} required/>
                                </div>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.OnProfileUpdate}>Update</Button>
                        <Button onClick={this.closeProfile}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
                <Modal show={this.state.editAddress} onHide={this.closeAddress} bsSize='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title><p className='f2'>Address</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="center">
                                <div className="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Street:</p>
                                </div>
                                <div className="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={street} onChange={this.onStreetChange} required/>
                                </div>
                            </div>
                            <div className="center">
                                <div className="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Suit:</p>
                                </div>
                                <div className="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={suit} onChange={this.onSuitChange}/>
                                </div>
                            </div>
                            <div className="center">
                                <div className="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>City:</p>
                                </div>
                                <div className="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={city} onChange={this.onCityChange} required/>
                                </div>
                            </div>
                            <div className="center">
                                <div className="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>State:</p>
                                </div>
                                <div className="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={state} onChange={this.onStateChange} required/>
                                </div>
                            </div>
                            <div className="center">
                                <div className="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Zip Code:</p>
                                </div>
                                <div className="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={zip} onChange={this.onZipChange} required/>
                                </div>
                            </div>
                            <div className="center">
                                <div className="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Longitude:</p>
                                </div>
                                <div className="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={longitude} onChange={this.onLongitudeChange} required/>
                                </div>
                            </div>
                            <div className="center">
                                <div className="fl w-third pa1">
                                  <p className='f3 ml4 mt2'>Latitude:</p>
                                </div>
                                <div className="fl w-two-thirds pa1">
                                  <input className='ml2' type="text" value={latitude} onChange={this.onLatitudeChange} required/>
                                </div>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                        { this.props.address.has === true
                            ? <Button onClick={this.OnAddressUpdate}>Update</Button>
                            : <Button onClick={this.OnAddressInsert}>Add</Button>
                        }
                        <Button onClick={this.closeAddress}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>   
        );
    }
    
}

export default Navigation;