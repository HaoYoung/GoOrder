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

import RSideNav from './components/SideNav/SideNav';
import DSideNav from './components/Driver/SideNav';

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
    rest: {
        id: '',
        name: '',
        email: '',
        phone: '',
        imgurl: '',
        type: '',
        joined: ''
    },
    address: {
        has: false,
        id: '',
        street: '',
        suit: '',
        city: '',
        state: '',
        zip: ''
    },
    driver: {
        id: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        dlnum: '',
        joined: ''
    },
    restaurants: [],
    restDishes: []
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
    
    loadRest = (data) => {
        this.setState({
            rest: {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                imgurl: data.imgurl,
                type: data.type,
                joined: data.joined
            }
        })
    }
    
    loadDriver = (data) => {
        this.setState({
            driver: {
                id: data.id,
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                phone: data.phone,
                dlnum: data.dlnum,
                joined: data.joined
            }
        })
    }
    
    loadAddress = (data) => {
        this.setState({
            address: {
                has: true,
                id: data.id,
                street: data.street,
                suit: data.suit,
                city: data.city,
                state: data.state,
                zip: data.zip
            }
        })
    }
    
    loadRestaurants = (data) => {
        this.setState({restaurants: data});
    }
    
    loadRestDishes = (data) => {
        this.setState({restDishes: data});
    }
    
    addRestDish = (data) => {
        this.state.restDishes.push(data);
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
                        ? <CSignin 
                            loadUser={this.loadUser} 
                            onRouteChange={this.onRouteChange} 
                            loadRestaurant={this.loadRestaurants}
                            loadAddress={this.loadAddress}
                            />
                        : <CRegister loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                      )
                    : (
                        role === 'restaurant'
                        ? (
                            route === 'signin'
                            ? <RSignin loadRest={this.loadRest} 
                                    onRouteChange={this.onRouteChange} 
                                    loadDishes={this.loadRestDishes}
                                    r_id={this.state.rest.id}
                                    />
                            : <RRegister loadRest={this.loadRest} onRouteChange={this.onRouteChange}/>
                          )
                        : (
                            route === 'signin'
                            ? <DSignin loadDriver={this.loadDriver} onRouteChange={this.onRouteChange}/>
                            : <DRegister loadDriver={this.loadDriver} onRouteChange={this.onRouteChange}/>
                          )
                      )
                 }
              </div>
            : (
                route === 'customer-home'
                ? <div>
                   <CNavigation 
                       profile={this.state.user} 
                       loadUser={this.loadUser} 
                       address={this.state.address}
                       loadAddress={this.loadAddress}
                       onRouteChange={this.onRouteChange}
                       />
                    <div className="container-fluid">
                        <div className='row' style={{height: 1000}}>
                            <div className='w-20'>
                                <CSideFilter />
                            </div>
                            <div className='pl4 w-80'>
                                <CFoodBar loadRestaurant={this.loadRestaurants}/>
                                <CShowRest rests={this.state.restaurants}/>
                            </div>
                        </div>
                    </div>
                  </div>
                : (
                    route === 'rest-home'
                    ? <div>
                        <RSideNav 
                            profile={this.state.rest} 
                            loadRest={this.loadRest} 
                            dishes={this.state.restDishes}
                            addRestDish={this.addRestDish}
                            />
                      </div>
                    : <div>
                        this is driver page
                        <DSideNav profile={this.state.rest} loadRest={this.loadRest} />
                      </div>
                  )
              ) 
         }
      </div>
    );
  }
}

export default App;