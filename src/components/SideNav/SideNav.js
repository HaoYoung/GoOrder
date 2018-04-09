import React from 'react';
import './SideNav.css';
import Modal from './Modal/Modal';

class SideNav extends React.Component {
    
    constructor(props) {
        super(props);
        const { profile } = this.props;
        this.state = {
            showSideNav: false,
            editProfile: false,
            addFood: false,
            id: profile.id,
            name: profile.name,
            type: profile.type,
            email: profile.email,
            phone: profile.phone,
            imgurl: profile.imgurl
        }
    }
    
    closeSideNav = () => { this.setState({showSideNav: false}) }
    
    openSideNav = (data) => { 
        this.setState({
            showSideNav: true
        })
    }
    
    showProfile = () => { this.setState({editProfile: true}) }
    
    closeProfile = () => { this.setState({editProfile: false}) }
    
    onNameChange = (event) => { this.setState({name: event.target.value}) }
    onEmailChange = (event) => { this.setState({email: event.target.value}) }
    OnTypeChange = (event) => { this.setState({type: event.target.value}) }
    OnPhoneChange = (event) => { this.setState({phone: event.target.value}) }
    OnImgUrlChange = (event) => { this.setState({imgurl: event.target.value}) }
    
    OnProfileUpdate = () => {
        fetch('https://go-order-api.herokuapp.com/restaurant_profile', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                type: this.state.type,
                email: this.state.email,
                phone: this.state.phone,
                imgurl: this.state.imgurl
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadRest(user);
                console.log(user);
            }
        })
    }
    
    render(){ 
        const { name, type, email, phone, imgurl } = this.state;
        
        return (
            <div className='w-100 h-100'>
                { this.state.showSideNav === true
                    ? <div id="mySidenavl" className="sidenavl" style={{ width: '200px'}}>
                        <a onClick={this.closeSideNav} className="closebtn" >&times;</a>
                        <a onClick={this.showProfile} className='pointer'>restaurant profile</a>
                        <a className='pointer'>add food</a>
                        <a href="#">edit food</a>
                        <a href="#">delete food</a>
                        <a href="LoginPage.html">Log out</a>
                      </div>
                    : <div />
                }
                <h2><span className='f1 pointer' onClick={this.openSideNav}>&#9776; Open Profile</span></h2>
                <Modal show={this.state.editProfile}>
                    <div className="imgcontainer">
                        <a onClick={this.closeProfile} className="close" title="Close Modal">&times;</a>
                        <h2>See & modify your profile</h2>
                    </div>
                    <div className='container'>
                        <div className='row mt3'>
                            <p className='f2 ml7 pl5'>Restaurant Name:</p>
			      	        <input type="text" value={name} onChange={this.onNameChange} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Restaurant Type:</p>
			      	        <input type="text" value={type} onChange={this.OnTypeChange} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Email:</p>
			      	        <input type="text" value={email} onChange={this.onEmailChange} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Phone:</p>
			      	        <input type="text" value={phone} onChange={this.OnPhoneChange} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Image URL:</p>
			      	        <input type="text" value={imgurl} onChange={this.OnImgUrlChange} required/>
			      	    </div>
                        <div className='mt2 ml7'>
                            <img src={imgurl} alt='' width='350px' height='300px'/>
                        </div>
                
                        <button className='submit ma3' type="submit" onClick={this.OnProfileUpdate}>submit</button>
			            <button className='submit ma3' type="reset">reset</button>
                    </div>
                </Modal>
            </div>  
            
        );
        
    }
    
}

export default SideNav;