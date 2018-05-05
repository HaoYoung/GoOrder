import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import Signin from './driverSignin';
import onSubmitSignIn from './driverSignin';
//import {fakeServer} from 'sinon';
//import { Fetch } from 'react-request';
//import fetch from 'whatwg-fetch';
//import fetch from 'jest-fetch-mock';
//import fetch from 'node-fetch';
//import fetchmock from 'jest-fetch-mock';
import { XMLHttpRequest } from 'xmlhttprequest';

describe('driverSignin',() =>{
    let form = mount(<Signin />,{ attachTo: document.body });
    let form1 = shallow(<Signin />,{ attachTo: document.body });
    const email = form.find('input').get(0);
    it('renders the email', ()=> {
        expect(email.props.name).toEqual('email-address');
        });
    const password = form.find('input').get(1);
    it('renders the password', ()=>{
        expect(password.props.name).toEqual('password');
    });
    
    it('onChange function test',()=>{
    form.find('#email-address').simulate('change', { target: {value: 'moyuanqiu@gmail.com'}});  
    form.find('#password').simulate('change', { target: {value: 'mo7884496'}});  
    console.log(form.state());
    });

    it('successful log in',()=>{
        form.find('input').at(2).simulate('click');
    });
    it('an error will happen if log in with wrong email or password',()=>{
    form.find('#email-address').simulate('change', { target: {value: 'moyuanqiu@gmail.com'}});  
    form.find('#password').simulate('change', { target: {value: 'mo7884497'}}); 
    form.find('input').at(2).simulate('click');
    });

    it('register button',()=>{
    form.find('#regis').simulate('click');
    })

    it('log in with an account',()=>{
    form.find('#email-address').simulate('change', { target: {value: 'hao-yang@uiowa.edu'}});  
    form.find('#password').simulate('change', { target: {value: 'yh@123456'}}); 
    form.find('input').at(2).simulate('click'); 
    });

/*
    describe('testing fetch',()=>{
    beforeEach(()=>{
    fetch.resetMocks();
    })
    it('calls the fetch and log in',()=>{
    fetch.mockResponseOnce(JSON.stringify({ email: 'hao-yang@uiowa.edu',password:'yh@123456' }));
    });

    });
    */
   /*
    describe('fake server',()=>{
        let server;
        beforeEach(()=>{
            server = fakeServer.create();
            server.respondWith(
                'POST',
                'https://go-order-api.herokuapp.com/customer_signin',
                [
                    200,
                    {'Content-type': 'application/json'},
                    JSON.stringify({ email: 'hao-yang@uiowa.edu', password:'yh@123456'})
                ]

            )
        })
        it('log in test with fake server',()=>{
            server.respond();
            setTimeout;
            console.log(form.debug());

        })
    })
    */

    /*
   describe("api",function(){
  //  beforeEach(function(){
  //     global.fetch = jest.fn().mockImplementation(()=> Promise.resolve({ok:true,Id:'123'}));
  //  });
    it('appi', async function(){
    form.state().signInEmail = 'hao-yang@uiowa.edu';
    form.state().signInPassword = 'yh@123456';
    console.log(form.state());
    const response = await form.instance().onSubmitSignIn();
    //console.log(response);
    })
   })
   */
   describe("mock fetch",()=>{
       const account = { email: 'hao-yang@uiowa.edu', password:'yh@123456'};
       const mockEvent = {preventDefault: jest.fn()};
       const mockSignin = jest.fn();
       window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json:() => Promise.resolve({
         account
        })
      }))
      it('mock starts',()=>{
      form.setState(account);
      form.instance().onSubmitSignIn(mockEvent);
      })


   })
   
   
    /*
    it('api test',async ()=>{
    const data = { email: 'hao-yang@uiowa.edu', password:'yh@123456'};
    fetchmock('*',data);
    await form.instance().onSubmitSignIn()

    })
    */
    

})