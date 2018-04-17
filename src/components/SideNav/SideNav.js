import React from 'react';
import './SideNav.css';
import Modal from './Modal/Modal';
import ShowDish from './ShowDish/ShowDish';
import { Button, ButtonGroup } from 'react-bootstrap';

class SideNav extends React.Component {
    
    constructor(props) {
        super(props);
        const { profile } = this.props;
        this.state = {
            showSideNav: false,
            editProfile: false,
            showAddFood: false,
            editSchedule: false,
            id: profile.id,
            name: profile.name,
            type: profile.type,
            email: profile.email,
            phone: profile.phone,
            imgurl: profile.imgurl,
            dishName: '',
            dishCate: '',
            dishPrice: 0,
            dishImg: '',
            dishType: [],
            deliveryfee: 0
        }
    }
    
    closeSideNav = () => { this.setState({showSideNav: false}) }
    openSideNav = (data) => { this.setState({showSideNav: true}) }
    
    showProfile = () => { this.setState({editProfile: true}) }
    closeProfile = () => { this.setState({editProfile: false}) }
    
    showAddFood = () => { 
        this.setState({showAddFood: true})
        this.setState({
            dishName: '',
            dishCate: '',
            dishPrice: 0,
            dishImg: '',
            deliveryfee:0
            })
    }
    closeAddFood = () => { this.setState({showAddFood: false}) }
    showSchedule =()=>{this.setState({editSchedule:true})}
    closeSchedule = () =>{this.setState({editSchedule:false})}
    
    onNameChange = (event) => { this.setState({name: event.target.value}) }
    onEmailChange = (event) => { this.setState({email: event.target.value}) }
    OnTypeChange = (event) => { this.setState({type: event.target.value}) }
    OnPhoneChange = (event) => { this.setState({phone: event.target.value}) }
    OnImgUrlChange = (event) => { this.setState({imgurl: event.target.value}) }
    
    onDNameChange = (event) => { this.setState({dishName: event.target.value}) }
    onDCategoryChange = (event) => { this.setState({dishCate: event.target.value}) }
    onDPriceChange = (event) => { this.setState({dishPrice: event.target.value}) }
    onDFeeChange = (event) => { this.setState({deliveryfee: event.target.value}) }
    onDImgChange = (event) => { this.setState({dishImg: event.target.value}) }
    
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
        .catch( err => console.log(err));
    }
    
    OnAddDish = () => {
        fetch('https://go-order-api.herokuapp.com/rest_add_dish', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                r_id: this.state.id,
                name: this.state.dishName,
                category: this.state.dishCate,
                price: this.state.dishPrice,
                url: this.state.dishImg
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({showAddFood: false})
        })
    }
    
    render(){ 
        const { name, type, email, phone, imgurl } = this.state;
        const { dishName, dishCate, dishPrice, dishImg, dishType,deliveryfee } = this.state;
        
        this.props.dishes.map((dish) => {
             if (dishType.indexOf(dish.category) === -1) {
                 dishType.push(dish.category);
             }
            return null;
        })
            

        const dishTypeComponent = dishType.map((type, i) => {
            console.log(type);
            return <Button key={i}>{type}</Button>
        })
        
        return (
            <div className='w-100 h-100'>
                { this.state.showSideNav === true
                    ? <div id="mySidenavl" className="sidenavl" style={{ width: '200px'}}>
                        <a onClick={this.closeSideNav} className="closebtn" >&times;</a>
                        <a onClick={this.showProfile} className='pointer'>restaurant profile</a>
                        <a onClick={this.showSchedule} className='pointer'>Delivery schedule</a>
                        <a onClick={this.showAddFood} className='pointer'>add food</a>
                        <a className='pointer'>edit food</a>
                        <a className='pointer'>delete food</a>
                        <a href="LoginPage.html">Log out</a>
                      </div>
                    : <div />
                }
                <h2><span className='f1 pointer' onClick={this.openSideNav}>&#9776; Open Profile</span></h2>

                 <div>
                    <div className='mt2 ml4 mr4 ba b--dark-blue br4'>
                        <div className='tl ma1 pl3'>
                            <p className='f2'>Menu Category</p>
                        </div>
                        <ButtonGroup>
                            {dishTypeComponent}
                        </ButtonGroup>
                    </div>

                    <div>
                        <ShowDish types={this.state.dishType} dishes={this.props.dishes}/>
                    </div>
                  </div>

                        
                
                <Modal show={this.state.editProfile}>
                    <div className="imgcontainer">
                        <a onClick={this.closeProfile} className="close" title="Close Modal">&times;</a>
                        <h2>See & modify your profile</h2>
                        <hr />
                    </div>
                    <div className='container'>
                        <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml7 pl5'>Restaurant Name:</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <input type="text" value={name} onChange={this.onNameChange}/>
                            </div>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Restaurant Type:</p>
			      	        <input type="text" value={type} onChange={this.OnTypeChange} required/>
			      	    </div>
                        <div className='row mt3'>
			      		    <p className='f2 ml7 pl5'>Email:</p>
                            <p className='f2'>{email}</p>
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
                <Modal show={this.state.showAddFood}>
                   <div className='container'>
                       <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f3 ml4 mt2'>Dish Name:</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <input type="text" value={dishName} onChange={this.onDNameChange}/>
                            </div>
                        </div>
                        <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f3 ml4 mt2'>Dish Category:</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <input type="text" value={dishCate} onChange={this.onDCategoryChange}/>
                            </div>
                        </div>
                        <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f3 ml4 mt2'>Dish Price:</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <input type="number" value={dishPrice} onChange={this.onDPriceChange}/>
                            </div>
                        </div>
                        <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f3 ml4 mt2'>Dish Image:</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <input type="text" value={dishImg} onChange={this.onDImgChange}/>
                            </div>
                        </div>
                       <div className='mt2 ml7'>
                           <div className='mt2'>
                               <img src={this.state.dishImg} alt='' width='350px' height='300px'/>
                           </div>
                       </div>
                        <Button onClick={this.OnAddDish}>Submit</Button>
                        <Button onClick={this.closeAddFood}>Close</Button>
                   </div>
                </Modal>
                <Modal show={this.state.editSchedule}>
                    <div className="imgcontainer">
                        <a onClick={this.closeSchedule} className="close" title="Close Modal">&times;</a>
                        <h2>See & modify restaurant's schedule</h2>
                        <hr />
                    </div>
                    <div className='container'>
                        <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Date:</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>Opening time</p>
                            </div>
			      	    </div>
                         <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Monday</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>??-??</p>
                            </div>
			      	    </div>
                         <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Tuesday</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>??-??</p>
                            </div>
			      	    </div>
                         <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Wednesday</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>??-??</p>
                            </div>
			      	    </div>
                         <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Thursday</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>??-??</p>
                            </div>
			      	    </div>
                         <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Friday</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>??-??</p>
                            </div>
			      	    </div>
                         <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Saturday</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>??-??</p>
                            </div>
			      	    </div>
                         <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f2 ml4 mt2'>Sunday</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <p className='f2 ml4 mt2'>??-??</p>
                            </div>
			      	    </div>
                        <div className='center'>
                            <div className="fl w-third pa1">
                                <p className='f3 ml4 mt2'>Delivery Fee:</p>
                            </div>
                            <div className="fl w-two-thirds pa1">
                                <input type="text" value={deliveryfee} onChange={this.onDNameChange}/>
                            </div>
                        </div>
                        
                        <button className='signupbtn' type="submit" onClick={this.OnProfileUpdate}>submit</button>
			            <button className='cancelbtn' type="reset">reset</button>
                        
                    </div>
                </Modal>
            </div>  
            
        );
        
    }
    
}

export default SideNav;