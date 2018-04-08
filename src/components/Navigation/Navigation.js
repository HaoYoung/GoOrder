import React from 'react';
import icon from './icon1.png';
import './Navigation.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends React.Component {
    
    render(){
        const { onRoleChange } = this.props;
        return (
            <Navbar inverse fluid collapseOnSelect >
               <Navbar.Header>
                   <Navbar.Brand inverse>
                       <a href="#brand">
                           <img src={icon} alt='logo' width='30px' height='30px' />
                           <p className='f1 b light-green pl3'>GoOrder</p>
                       </a>
                   </Navbar.Brand>
               </Navbar.Header>

               <Navbar.Collapse>
                   <Nav pullRight>
                       <Navbar.Text>Login As </Navbar.Text>
                        <NavItem eventKey={1} href="#" onClick={() => onRoleChange('customer')}>
                            Customer
                        </NavItem>
                        <NavItem eventKey={2} href="#" onClick={() => onRoleChange('restaurant')}>
                            Restaurant
                        </NavItem>
                        <NavItem eventKey={3} href="#" onClick={() => onRoleChange('driver')}>
                            Driver
                        </NavItem>
                   </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
    
}

export default Navigation;