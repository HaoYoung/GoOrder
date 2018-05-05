import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import Register from './restRegister';
describe('restRegister',() =>{
    let form = mount(<Register />,{ attachTo: document.body });
    let form1 = shallow(<Register />,{ attachTo: document.body });
   // const wrapper = setupMount();
    const name = form.find('input').get(0);
    it('renders the name', ()=> {
        expect(name.props.name).toEqual('name');
    });
    const type = form.find('Select').get(0);
    it('renders the type', ()=> {
        expect(type.props.name).toEqual('form-types');
    });
    const email = form.find('input').get(2);
    it('renders the email address', ()=> {
        expect(email.props.name).toEqual('email-address');
    });
    const phone = form.find('input').get(3);
    it('renders the phone', ()=> {
        expect(phone.props.name).toEqual('phone');
    });
    const password = form.find('input').get(4);
    const repeatpassword = form.find('input').get(5);
    it('renders the password', ()=>{
        expect(password.props.name).toEqual('password');
    });
    it('renders the repeatpassword', ()=>{
        expect(repeatpassword.props.name).toEqual('repeatpassword');
    });
    const agree_but = form.find('input').get(6);
    it('renders the agree button', ()=>{
        expect(agree_but.props.id).toEqual('agree');
        });
    //const sum_but = form.find('input').get(7);
    it('onChange function test',()=>{
        form.find('#name').simulate('change', { target: {value: 'Mo'}});  
        form.find('Select').simulate('change', { target: {value: 'America'}});
        form.find('#email-address').simulate('change', { target: {value: 'moyuanqiu@gmail15.com'}});
        form.find('#phone').simulate('change', { target: {value: '11111111'}});
        form.find('#password').simulate('change', { target: {value: 'Mo7884496'}});
        form.find('#password').simulate('keyUp');
        form.find('#repeatpassword').simulate('change', { target: {value: 'Mo7884496'}});
        form.find('#repeatpassword').simulate('keyUp');
        expect(form.state().name).toEqual('Mo');
    });
    

    it('Password and repeatpassword match or not',()=>{
        const mark = form.find('#check').text();
        expect(mark).toEqual('Match!');
        form.find('#repeatpassword').simulate('change', { target: {value: 'Mo7884495'}});
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
                    form.find('#repeatpassword').simulate('change', { target: {value: 'Mo7884496'}});
                    form.find('#repeatpassword').simulate('keyUp');
                    console.log(form.state());
                    const but5 = form.find('input').get(7);
                    expect(form.state().isDisabled).toEqual(false);
                    form.find('#password').simulate('keyUp');
                    expect(form.state().isDisabled).toEqual(false);
                    form.find('input').at(7).simulate('click');
            });
        });
        it('submit button is disabled when agree button is not selected',()=>{
            //const but4 = form.find('input').get(7);
            form.find('input').at(6).simulate('click');
            expect(form.state().isChecked).toEqual(false);
            form.find('input').at(7).simulate('click');
            form.find('input').at(6).simulate('click');
            expect(form.state().isDisabled).toEqual(false);
            });

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
                form.find('#email-address').simulate('change', { target: {value: 'moyuanqiu@gmail15.com'}});
                form.find('input').at(7).simulate('click');
                });
 


})