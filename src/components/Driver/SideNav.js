import React from 'react';
import './SideNav.css';
import './table.css';
import Modal from './Modal/Modal';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [{
             id: 1,
             name: "Product1",
             price: 120
            }, {
             id: 2,
             name: "Product2",
             price: 80
            }];

class SideNav extends React.Component {
    constructor(props) {
    super(props);
      const { profile } = this.props;
       this.state = {
            showSideNav: false,
            editProfile: false,
            editSchedule: false,
            id: profile.id,
            name: profile.name,
            type: profile.type,
            email: profile.email,
            phone: profile.phone
       }
    }
    
    foodHasDeliveredButton = (onBtnClick) => {
    return (
      <button style={ { color: 'red' } } onClick={ onBtnClick }>Delivered</button>
      );
    } 
    
    closeSideNav = () => { this.setState({showSideNav: false}) }
    openSideNav = (data) => { this.setState({showSideNav: true}) }
    
    showProfile = () => { this.setState({editProfile: true}) }
    closeProfile = () => { this.setState({editProfile: false}) }
    
    showSchedule =()=>{this.setState({editSchedule:true})}
    closeSchedule = () =>{this.setState({editSchedule:false})}
    
    onNameChange = (event) => { this.setState({name: event.target.value}) }
    onEmailChange = (event) => { this.setState({email: event.target.value}) }
    OnTypeChange = (event) => { this.setState({type: event.target.value}) }
    OnPhoneChange = (event) => { this.setState({phone: event.target.value}) }
    
    
    
    render(){ 
        const selectRow = {
           mode: 'checkbox'
        };
    
    
        return(
          <div className='w-100 h-100'>
                { this.state.showSideNav === true
                    ? <div id="mySidenavl" className="sidenavl" style={{ width: '200px'}}>
                        <a onClick={this.closeSideNav} className="closebtn" >&times;</a>
                        <a onClick={this.showProfile} className='pointer'>Driver's Profile</a>
                        <a onClick={this.showSchedule} className='pointer'>Delivery schedule</a>
                        <a href="LoginPage.html">Log out</a>
                      </div>
                    : <div />
                }
                <h2><span className='f1 pointer' onClick={this.openSideNav}>&#9776; Open</span></h2>
            <Modal show={this.state.editSchedule}>
                <div className="imgcontainer">
                    <a onClick={this.closeSchedule} className="close" title="Close Modal">&times;</a>
                    <h2>See & modify your profile</h2>
                    <hr />
                </div>
                <div className='container'>
                
                    <BootstrapTable className='w-50' selectRow={ selectRow } data={products} options={  { noDataText: 'This is custom text for empty data' } } deleteRow>
                        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </Modal>
             
          </div>
       );
   }
}
                
export default SideNav;
                
               
                