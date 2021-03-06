import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    
    onSubmitSignIn = () => {
        fetch('https://go-order-api.herokuapp.com/customer_signin', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.c_id){
                this.props.loadUser(user);
                this.props.onRouteChange('customer-home');
                
                fetch(`https://go-order-api.herokuapp.com/get_c_addr/${user.c_id}`, {
                    method: 'get',
                    headers: {'Content-type': 'application/json'}
                })
                .then(response => response.json())
                .then(address => {
                    if(address !== 'Not found'){
                        this.props.loadAddress(address);
                    }
                })
                
                fetch(`https://go-order-api.herokuapp.com/getcart/${user.c_id}`, {
                    method: 'get',
                    headers: {'Content-type': 'application/json'}
                })
                .then(response => response.json())
                .then(items => {
                    if(items !== null){
                        this.props.loadCart(items);
                    }
                })
                
                fetch('https://go-order-api.herokuapp.com/rests', {
                    method: 'get',
                    headers: {'Content-type': 'application/json'}
                })
                .then(response => response.json())
                .then(rests => {
                    this.props.loadRestaurant(rests);
                })
                
                fetch('https://go-order-api.herokuapp.com/get_aLL_r_addr', {
                    method: 'get',
                    headers: {'Content-type': 'application/json'}
                })
                .then(response => response.json())
                .then(rests_addr => {
                    console.log(rests_addr);
                    this.props.loadAllRestAddr(rests_addr);
                })
            }
        })
    }
    
    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba dark-gray b--white-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                  <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                      <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                        />
                      </div>
                      <div className="mv3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange}
                        />
                      </div>
                    </fieldset>
                    <div className="">
                      <input
                      onClick={this.onSubmitSignIn}
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Sign in"
                      />
                    </div>
                    <div className="lh-copy mt3">
                      <a onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</a>
                    </div>
                  </div>
                </main>
            </article>
        );
    }
}

export default Signin;
