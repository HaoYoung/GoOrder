import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import Register from './driverRegister';
describe('driverRegister',() =>{
    let form = mount(<Register />,{ attachTo: document.body });
    let form1 = shallow(<Register />,{ attachTo: document.body });
    const fname = form.find('input').get(0);
    const lname = form.find('input').get(1);
    const email = form.find('input').get(2);
    const phone = form.find('input').get(3);
    const dlnum = form.find('input').get(4);
    const password = form.find('input').get(5);
    const repeatpassword = form.find('input').get(6);
    
    const agree_but = form.find('input').get(7);
    const sum_but = form.find('input').get(8);

    it('renders the fname', ()=> {
    expect(fname.props.name).toEqual('fname');
    });

    it('renders the lname', ()=>{
    expect(lname.props.name).toEqual('lname');
    });
    it('renders the email', ()=>{
    expect(email.props.name).toEqual('email-address');
    });
    it('renders the phone', ()=>{
    expect(phone.props.name).toEqual('phone');
    });
    it('renders the dlnum',()=>{
    expect(dlnum.props.name).toEqual('dlnum');
    });
    it('renders the password', ()=>{
        expect(password.props.name).toEqual('password');
    });
    it('renders the repeatpassword', ()=>{
        expect(repeatpassword.props.name).toEqual('repeatpassword');
    });

    it('renders the agree button', ()=>{
    expect(agree_but.props.id).toEqual('agree');
    });
    

    it('onChange function test',()=>{
    form.find('#fname').simulate('change', { target: {value: 'Mo'}});  
    form.find('#lname').simulate('change', { target: {value: 'Yuanqiu'}});
    form.find('#email-address').simulate('change', { target: {value: 'moyuanqiu@gmail.com'}});
    form.find('#phone').simulate('change', { target: {value: '3195129330'}});
    form.find('#password').simulate('change', { target: {value: 'Mo7884496!'}});
    form.find('#password').simulate('keyUp');
    form.find('#repeatpassword').simulate('change', { target: {value: 'Mo7884496!'}});
    form.find('#repeatpassword').simulate('keyUp');
    expect(form.state().fname).toEqual('Mo');
});
    it('Password and repeatpassword match or not',()=>{
        const mark = form.find('#check').text();
        expect(mark).toEqual('Match!');
        form.find('#repeatpassword').simulate('change', { target: {value: 'Mo7884496'}});
        form.find('#repeatpassword').simulate('keyUp');
        const mark1 = form.find('#check').text();
        expect(mark1).toEqual('Not match!');
        form.find('#password').simulate('keyUp');
        const mark2 = form.find('#check').text();
        expect(mark2).toEqual('Not match!');
    });

    describe('submit button test',()=>{
            it('isDisabled should be true',()=>{
            const but1 = form.find('input').get(8);
            const but1_dis = but1.props.disabled;
            expect(form.state().isDisabled).toEqual(true);
            });
            
            it('agree button is checked',()=>{
            form.find('input').at(7).simulate('click');
            const but3 = form.find('input').get(7);
            expect(but3.props.checked).toEqual(true);
            form.find('#repeatpassword').simulate('change', { target: {value: 'Mo7884496!'}});
            form.find('#repeatpassword').simulate('keyUp');
            const but5 = form.find('input').get(8);
            expect(form.state().isDisabled).toEqual(false);
            form.find('#password').simulate('keyUp');
            expect(form.state().isDisabled).toEqual(false);
            form.find('input').at(8).simulate('click');
            });

            it('now the submit button is enabled',()=>{
            const but_agree = form.find('input').get(7);
            form.find('input').at(7).simulate('click');
            expect(form.state().isChecked).toEqual(false);
            form.find('input').at(7).simulate('click');
            form.find('#repeatpassword').simulate('change', { target: {value: 'Mo788449'}});
            form.find('#repeatpassword').simulate('keyUp');
            expect(form.state().isDisabled).toEqual(true);
            form.find('#repeatpassword').simulate('keyUp');
            const but4 = form.find('input').get(8);
            expect(form.state().isDisabled).toEqual(true);
            form.find('#password').simulate('change', { target: {value: 'Mo788'}});
            form.find('#password').simulate('keyUp');
            expect(form.state().isDisabled).toEqual(true);
            form.find('input').at(7).simulate('click');
            form.find('#password').simulate('change', { target: {value: 'Mo788449'}});
            form.find('#password').simulate('keyUp');
            expect(form.state().isDisabled).toEqual(true);
            });
           
    })





});
