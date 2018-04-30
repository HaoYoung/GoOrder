import React from 'react';
import './SideNav.css';
import './table.css';
import Modal from './Modal/Modal';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';




class SideNav extends React.Component {
    constructor(props) {
    super(props);
      const { profile } = this.props;
       this.state = {
            showSideNav: false,
            editProfile: false,
            editSchedule: false,
            id: this.props.profile.id,
            name: this.props.profile.name,
            type: this.props.profile.type,
            email: this.props.profile.email
            //orderid:" "
            
       }
    }
    
     foodHasDeliveredButton = (onBtnClick) => {
       return (
          <button style={ { color: 'red' } } onClick={ onBtnClick }>Delivered!</button>
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
        
        function onRowSelect(row,isselected,orderid){
            if(isselected){
                alert("You click the order which has the order ID:"+row.order_id +" and the customer name is: " + row.fname + " " + row.lname );
               // orderid = row.order_id;
            }
        }
        const selectRow = {
           mode: 'checkbox',
           bgColor:'grey',
           onSelect: onRowSelect
        };
        
        const options = {
           deleteBtn: this.foodHasDeliveredButton
        };
    
    
        return(
          <div className='w-100 h-100'>
                { this.state.showSideNav === true
                    ? <div id="mySidenavl" className="sidenavl" style={{ width: '200px'}}>
                        <a onClick={this.closeSideNav} className="closebtn" >&times;</a>
                        <a onClick={this.showProfile} className='pointer'>Driver's Profile</a>
                        <a href="LoginPage.html">Log out</a>
                      </div>
                    : <div />
                }
                <h2><span className='f1 pointer' onClick={this.openSideNav}>&#9776; Open</span></h2>
            
                
                    <BootstrapTable selectRow={ selectRow } data={this.props.orders} options={  {deleteBtn: this.foodHasDeliveredButton, noDataText: 'This is custom text for empty data' } } deleteRow>
                        <TableHeaderColumn dataField='order_id' isKey={ true }>order id</TableHeaderColumn>
                        <TableHeaderColumn dataField='fname'>Customer fast name</TableHeaderColumn>                  
                        <TableHeaderColumn dataField='lname'>Customer last name</TableHeaderColumn>
                        <TableHeaderColumn dataField='phone'>Customer phone number</TableHeaderColumn>
                        <TableHeaderColumn dataField='c_street'>Customer address</TableHeaderColumn>
                        <TableHeaderColumn dataField='r_street'>Restaurant address</TableHeaderColumn>
                    </BootstrapTable>
             
          </div>
       );
   }
}
                
export default SideNav;
                
               
                