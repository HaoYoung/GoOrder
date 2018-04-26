import React from 'react';
import icon from './icon1.png';
import './Navigation.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';

class Navigation extends React.Component {
    
     constructor(){
         super();

         this.state = {
              color_white1: true,
              color_white2: true,
              color_white3: true
         }
    }

    changeColor1(){
        this.setState({color_white1: !this.state.color_white1, color_white2: true, color_white3: true});
        //onRoleChange('customer');
    }
    
    changeColor2(){
        this.setState({color_white2: !this.state.color_white2, color_white1: true, color_white3: true});
        //onRoleChange('restaurant');
    }
    changeColor3(){
        this.setState({color_white3: !this.state.color_white3, color_white2: true, color_white1: true});
        //onRoleChange('driver');
    }
    
    render(){
        const { onRoleChange } = this.props;
        let bgColor1 = this.state.color_white1 ? "white" : "violet"
        let bgColor2 = this.state.color_white2 ? "white" : "grey"
        let bgColor3 = this.state.color_white3 ? "white" : "olive"
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
                   <Nav pullRight >
                       <Navbar.Text>Login As </Navbar.Text>
                        <Button  style={{backgroundColor: bgColor1}} eventKey={1}  href="#" onClick={() =>{this.changeColor1(); onRoleChange('customer');}} >
                            Customer
                        </Button>
                        <Button  style={{backgroundColor: bgColor2}} eventKey={2} href="#" onClick={() =>{this.changeColor2();onRoleChange('restaurant');}} >
                            Restaurant
                        </Button>
                        <Button  style={{backgroundColor: bgColor3}} eventKey={3} href="#" onClick={() =>{this.changeColor3();onRoleChange('driver');}}
                           >
                           Driver
                        </Button>
                   </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
    
}

export default Navigation;