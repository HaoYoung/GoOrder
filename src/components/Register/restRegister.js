import React from 'react';
import Select from 'react-select';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            imgurl: '',
            type: '',
            password: ''
            
        }
    }
    
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
    }
    
    onTypeChange = (selectedOption) => {
        this.setState({type: selectedOption.label});
        console.log(`Selected: ${selectedOption.label}`);
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
    
    onSubmitRegister = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.phone);
        console.log(this.state.imgurl);
        console.log(this.state.type);
        console.log(this.state.password);
        fetch('https://go-order-api.herokuapp.com/restaurant_register', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                imgurl: this.state.imgurl,
                type: this.state.type,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadRest(user);
                this.props.onRouteChange('rest-home');
            }
        })
        .catch( err => console.log(err));
    }
    
    render() {
        const { type } = this.state;
        return (
            <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                  <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                      <legend className="f1 fw6 ph0 mh0 white">Register</legend>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="name">Restaurant Name</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name"
                            onChange={this.onNameChange}
                        />
                      </div>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="name">Food Type</label>
                        <Select
                            name="form-types"
                            value={type}
                            onChange={this.onTypeChange}
                            options={[
                              { value: 'American', label: 'American' },
                              { value: 'Chinese', label: 'Chinese' },
                              { value: 'Mexican', label: 'Mexican' },
                              { value: 'Pizza', label: 'Pizza' },
                              { value: 'Sandwiches', label: 'Sandwiches' },
                              { value: 'Chicken Wings', label: 'Chicken Wings' },
                              { value: 'Salads', label: 'Salads' },
                              { value: 'Sushi', label: 'Sushi' },
                              { value: 'Dessert', label: 'Dessert' }
                            ]}
                          />
                      </div>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="name">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                        />
                      </div>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="name">Phone</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="phone"  
                            id="phone"
                            onChange={this.onPhoneChange}
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
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                          type="submit"
                          value="Register"
                          onClick={this.onSubmitRegister}
                      />
                    </div>
                  </div>
                </main>
            </article>
        );
    }
}

export default Register;
