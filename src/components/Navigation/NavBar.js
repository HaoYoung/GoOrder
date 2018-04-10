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
        
        const { profile } = this.props;
        this.state = {
            editProfile: false,
            id: profile.id,
            fname: profile.fname,
            lname: profile.lname,
            email: profile.email,
            phone: profile.phone
        }
    }
    
    showProfile = () => { this.setState({editProfile: true}); }
    closeProfile = () => { this.setState({editProfile: false}); }
    
    onFNameChange = (event) => { this.setState({fname: event.target.value}) }
    onLNameChange = (event) => { this.setState({lname: event.target.value}) }
    onEmailChange = (event) => { this.setState({email: event.target.value}) }
    onPhoneChange = (event) => { this.setState({phone: event.target.value}) }
    
    OnProfileUpdate = () => {
        fetch('https://go-order-api.herokuapp.com/customer_profile', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
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
    
    render(){
        const { onRouteChange } = this.props;
        const { fname, lname, email, phone } = this.state;
        
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
                            <a className="nav-link active" onClick={() => onRouteChange('customer-home')}>HOME</a>
                        </li>
                        <li className="nav-item mv3">
                           <DropdownButton title={'SETTING'} style={{background: '#FFD700'}}>
                               <MenuItem eventKey="1" onClick={this.showProfile}>Profile</MenuItem>
                               <MenuItem eventKey="2">Address</MenuItem>
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
                            <a className="nav-link pointer">CART<span className="badge badge-light">0</span></a>
                        </li>
                    </ul>
                </nav>
                </header>
                
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
            </div>   
        );
    }
    
}

export default Navigation;