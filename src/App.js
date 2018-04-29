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
import CMenu from './components/ShowMenu/ShowMenu';

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
        zip: '',
        longitude: 0,
        latitude: 0,
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
    restDishes: [],
    orders: [],
    onOrder: false,
    menu: [],
    r_addr: {
        street: '',
        suit: '',
        city: '',
        state: '',
        zip: ''
    },
    shopping_cart: [],
    total_item: 0,
    all_r_addr: []
}

class App extends Component {
    constructor() {
        super();
        this.state = initialState;
    };
    
    loadUser = (data) => {
        this.setState({
            user: {
                id: data.c_id,
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
                id: data.r_id,
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
    
    loadCAddress = (data) => {
        this.setState({
            address: {
                has: true,
                id: data.c_addr_id,
                street: data.c_street,
                suit: data.c_suit,
                city: data.c_city,
                state: data.c_state,
                zip: data.c_zip,
                longitude: data.c_longitude,
                latitude: data.c_latitude
            }
        })
    }
    
    loadRAddress = (data) => {
        this.setState({
            address: {
                has: true,
                id: data.r_addr_id,
                street: data.r_street,
                suit: data.r_suit,
                city: data.r_city,
                state: data.r_state,
                zip: data.r_zip,
                longitude: data.r_longitude,
                latitude: data.r_latitude
            }
        })
    }
    
    load_r_addr = (data) => {
        this.setState({
            r_addr: {
                street: data.r_street,
                suit: data.r_suit,
                city: data.r_city,
                state: data.r_state,
                zip: data.r_zip
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
    
    loadOrders = (data) => {
        this.setState({orders: data});
    }
    
    loadMenu = (data) => {
        this.setState({menu: data});
    }
    
    resetMenu = () => {
        this.setState({menu: []});
    }
    
    loadCart = (data) => {
        this.setState({shopping_cart: data});
        if(this.state.shopping_cart.length){
            var total = 0;
            this.state.shopping_cart.map((item) =>{
                total += item.quantity;
                return null;
            })
            this.setState({total_item: total});
        }
    }
    
    loadAllRestAddr = (data) => {
        this.setState({all_r_addr: data});
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
    
    onOrderState = (bool) => {
        this.setState({onOrder: bool});
    }
    
  render() {
    const { isSignedIn, route, role, onOrder } = this.state;
    
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
                            loadAddress={this.loadCAddress}
                            loadCart={this.loadCart}
                            loadAllRestAddr={this.loadAllRestAddr}
                            />
                        : <CRegister loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                      )
                    : (
                        role === 'restaurant'
                        ? (
                            route === 'signin'
                            ? <RSignin 
                                    loadRest={this.loadRest} 
                                    onRouteChange={this.onRouteChange} 
                                    loadDishes={this.loadRestDishes}
                                    r_id={this.state.rest.id}
                                    loadAddress={this.loadRAddress}
                                    />
                            : <RRegister loadRest={this.loadRest} onRouteChange={this.onRouteChange}/>
                          )
                        : (
                            route === 'signin'
                            ? <DSignin loadDriver={this.loadDriver} 
                                onRouteChange={this.onRouteChange}
                                loadOrder={this.loadOrders}
                                />
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
                       loadAddress={this.loadCAddress}
                       onOrderState={this.onOrderState}
                       resetMenu={this.resetMenu}
                       totalItem={this.state.total_item}
                       />
                    { onOrder === true
                        ? <div>
                            <CMenu menu={this.state.menu} rest={this.state.rest} r_addr={this.state.r_addr}/>
                        </div>
                        
                        : <div className="container-fluid">
                            <div className='row' style={{height: 1000}}>
                                <div className='w-20'>
                                    <CSideFilter />
                                </div>
                                <div className='pl4 w-80'>
                                    <CFoodBar loadRestaurant={this.loadRestaurants}/>
                                    <CShowRest 
                                        rests={this.state.restaurants} 
                                        onOrderState={this.onOrderState} 
                                        loadMenu={this.loadMenu}
                                        loadRest={this.loadRest}
                                        loadRAddress={this.load_r_addr}
                                        allRestAddr={this.all_r_addr}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                  </div>
                : (
                    route === 'rest-home'
                    ? <div>
                        <RSideNav 
                            profile={this.state.rest} 
                            loadRest={this.loadRest} 
                            dishes={this.state.restDishes}
                            addRestDish={this.addRestDish}
                            addr={this.state.address}
                            />
                      </div>
                    : <div>
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