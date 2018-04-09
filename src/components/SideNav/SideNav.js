import React from 'react';
import './SideNav.css';
import Modal from './Modal/Modal';

class SideNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showSideNav: false,
            editProfile: false,
            addFood: false
        }
    }
    
    closeSideNav = () => {
        this.setState({showSideNav: false});
    }
    
    openSideNav = () => {
        this.setState({showSideNav: true});
    }
    
    showProfile = () => {
        this.setState({editProfile: true});
        console.log(this.state.editProfile);
    }
    
    closeProfile = () => {
        this.setState({editProfile: false});
        console.log(this.state.editProfile);
    }
    
    render(){ 
        const { profile } = this.props;
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
                    <div class="imgcontainer">
                        <a onClick={this.closeProfile} className="close" title="Close Modal">&times;</a>
                        <h2>See & modify your profile</h2>
                    </div>
                    <div className='container'>
                        <div className='row mt3'>
                            <p className='f2 ml7 pl5'>Restaurant Name:</p>
			      	        <input type="text" value={profile.name} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Restaurant Type:</p>
			      	        <input type="text" value={profile.type} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Email:</p>
			      	        <input type="text" value={profile.email} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Phone:</p>
			      	        <input type="text" value={profile.phone} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Image URL:</p>
			      	        <input type="text" value={profile.imgurl} required/>
			      	    </div>
                        <div className='mt2 ml7'>
                            <img src={profile.imgurl} alt='' width='350px' height='300px'/>
                        </div>
                
                        <button className='submit ma3' type="submit">submit</button>
			            <button className='submit ma3' type="reset">reset</button>
                    </div>
                </Modal>
            </div>  
            
        );
        
    }
    
}

export default SideNav;