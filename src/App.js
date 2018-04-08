import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import CSignin from './components/Signin/customerSignin';
import CRegister from './components/Register/customerRegister';
import RSignin from './components/Signin/restSignin';
import RRegister from './components/Register/restRegister';
import DSignin from './components/Signin/driverSignin';
import DRegister from './components/Register/driverRegister';

import CNavigation from './components/Navigation/NavBar';
import CSideFilter from './components/SideFilter/SideFilter';
import CFoodBar from './components/FoodBar/FoodBar';
import CShowRest from './components/ShowRest/ShowRest';

const particlesOptions = {
    particles: {
    number: {
      value: 200,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 14,
      direction: "bottom-left",
      random: false,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

const initialState = {
    isSignedIn: false,
    route: 'signin',
    role: 'customer',
    user: {
        id: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        joined: ''
    },
    restaurants: []
}

class App extends Component {
    constructor() {
        super();
        this.state = initialState;
    };
    
    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                phone: data.phone,
                joined: data.joined
            }
        })
    }
    
    loadRestaurant = (data) => {
        this.setState({restaurants: data});
        console.log(this.state.restaurants[0].name);
    }
    
    
    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState);
        } else if (route === 'customer-home' || route === 'rest-home' || route === 'driver-home') {
            this.setState({isSignedIn: true});
        }
        this.setState({route: route});
    };
    
    onRoleChange = (role) => {
        this.setState({role: role, route: 'signin'});
    }
    
  render() {
    const { isSignedIn, route, role } = this.state;
    return (
      <div className='App'>
         { isSignedIn === false // before login
            ? <div>
                 <Particles className='particles' params={particlesOptions}/>
                 <Navigation onRoleChange={this.onRoleChange}/>
                 { role === 'customer'
                    ? (
                        route === 'signin'
                        ? <CSignin loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadRestaurant={this.loadRestaurant}/>
                        : <CRegister loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                      )
                    : (
                        role === 'restaurant'
                        ? (
                            route === 'signin'
                            ? <RSignin onRouteChange={this.onRouteChange}/>
                            : <RRegister onRouteChange={this.onRouteChange}/>
                          )
                        : (
                            route === 'signin'
                            ? <DSignin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                            : <DRegister loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                          )
                      )
                 }
              </div>
            : (
                route === 'customer-home'
                ? <div>
                   <CNavigation />
                    <div className="container-fluid">
                        <div className='row' style={{height: 1000}}>
                            <div className='w-20'>
                                <CSideFilter />
                            </div>
                            <div className='pl4 w-80'>
                                <CFoodBar />
                                <CShowRest />
                            </div>
                        </div>
                    </div>
                  </div>
                : <div></div>
              ) 
         }
      </div>
    );
  }
}

export default App;

/*
    <Navigation />
          <div className="row" style={{height: 1000}}>
              <div className="col-sm-3 bg-light-gray side-bar" style={{height: 1000}}>
                <SideBar />
              </div>
              <div className="col-sm-9 bg-light-yellow" style={{height: 1000}}>
                <FoodBar />
              </div>
          </div>
*/