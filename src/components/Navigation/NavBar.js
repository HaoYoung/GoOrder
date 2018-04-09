import React from 'react';
import search from './search.png';
import icon from './icon1.png';
import './Navigation.css';

class Navigation extends React.Component {
    
    render(){
        return (
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
                        <a className="nav-link active" href="LoginPage.html">HOME</a>
                    </li>
                    <li className="nav-item mv3">
                        <a className="nav-link" href="userSetting.html">SETTINGS</a>
                    </li>
                    <li className="nav-item mv3">
                        <a className="nav-link" href="userSetting.html">ORDERS</a>
                    </li>
                    <li className="nav-item mv3">
                        <a className="nav-link pointer">CART<span className="badge badge-light">0</span></a>
                    </li>
                </ul>
            </nav>
	        </header>
        );
    }
    
}

export default Navigation;