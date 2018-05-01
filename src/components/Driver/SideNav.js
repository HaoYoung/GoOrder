import React from 'react';
import './SideNav.css';
import './table.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class SideNav extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
            showSideNav: false,
            editProfile: false,
            editSchedule: false,
            id: this.props.profile.id,
            email: this.props.profile.email
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
    
    onRowSelect = (row,isselected) => {
        if(isselected){
            alert("You click the order which has the order ID:"+row.order_id +" and the customer name is: " + row.fname + " " + row.lname );
            fetch(`https://go-order-api.herokuapp.com/order_deliveried`, {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    d_id: this.state.id,
                    order_id: row.order_id
                })
            })
            .then(response => response.json())
            .then(data => {
                this.props.loadOrder(data);
            })
        }
    }
    
    render(){ 
        
        const selectRow = {
           mode: 'checkbox',
           bgColor:'grey',
           onSelect: this.onRowSelect
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
                    <BootstrapTable selectRow={ selectRow } data={this.props.orders} options={  { noDataText: 'This is custom text for empty data' } } >
                        <TableHeaderColumn dataField='order_id' isKey={ true }>order id</TableHeaderColumn>
                        <TableHeaderColumn dataField='fname'>Customer first name</TableHeaderColumn>                  
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
                
               
                