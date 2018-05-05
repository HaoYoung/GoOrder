import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import Register from './customerRegister';
describe('customerRegister',() =>{
    let form = mount(<Register />,{ attachTo: document.body });
    let form1 = shallow(<Register />,{ attachTo: document.body });
    const fname = form.find('input').get(0);
    const lname = form.find('input').get(1);
    const email = form.find('input').get(2);
    const phone = form.find('input').get(3);
    const password = form.find('input').get(4);
    const repeatpassword = form.find('input').get(5);
    
    const agree_but = form.find('input').get(6);
    const sum_but = form.find('input').get(7);

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
    form.find('#email-address').simulate('change', { target: {value: 'moyuanqiu@gmail14.com'}});
    form.find('#phone').simulate('change', { target: {value: '11111111'}});
    form.find('#password').simulate('change', { target: {value: 'Mo788446!'}});
    form.find('#password').simulate('keyUp');
    form.find('#repeatpassword').simulate('change', { target: {value: 'Mo788446!'}});
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
    });

    describe('submit button test',()=>{
        it('isDisabled should be true',()=>{
            const but1 = form.find('input').get(7);
            const but1_dis = but1.props.disabled;
            expect(form.state().isDisabled).toEqual(true);
            });
            it('agree button is checked',()=>{
            form.find('input').at(6).simulate('click');
            const but3 = form.find('input').get(6);
            expect(but3.props.checked).toEqual(true);
            });

            it('submit button is enabled',()=>{
                form.find('#repeatpassword').simulate('change', { target: {value: 'Mo788446!'}});
                form.find('#repeatpassword').simulate('keyUp');
                const but5 = form.find('input').get(7);
                expect(form.state().isDisabled).toEqual(false);
                form.find('#password').simulate('keyUp');
                expect(form.state().isDisabled).toEqual(false);
                form.find('input').at(7).simulate('click');
            });
            });

            it('submit button is disabled when agree button is not selected',()=>{
            const but4 = form.find('input').get(7);
            form.find('input').at(6).simulate('click');
            expect(form.state().isChecked).toEqual(false);
            form.find('input').at(7).simulate('click');
            form.find('input').at(6).simulate('click');
            expect(form.state().isDisabled).toEqual(true);
            });

            //form.find('input').at(7).simulate('click');
            it('submit button is disabed when passwords do not match',()=>{
                form.find('#repeatpassword').simulate('change', { target: {value: 'Mo788449'}});
                form.find('#repeatpassword').simulate('keyUp');
                expect(form.state().isChecked).toEqual(true);
                expect(form.state().isDisabled).toEqual(true);
                form.find('#password').simulate('change', { target: {value: 'Mo788'}});
                form.find('#password').simulate('keyUp');
                expect(form.state().isDisabled).toEqual(true);
            });
            it('submit button is disabed when passwords match but agree button is not checked',()=>{
                form.find('input').at(6).simulate('click');
                form.find('#password').simulate('change', { target: {value: 'Mo788449'}});
                form.find('#password').simulate('keyUp');
                expect(form.state().isDisabled).toEqual(true);
            })

        
            it('can not have duplicate emails',()=>{
            form.find('#email-address').simulate('change', { target: {value: 'moyuanqiu@gmail14.com'}});
            form.find('input').at(7).simulate('click');
            });
            
            
        })


