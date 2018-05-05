import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import SideNav from './SideNav';

describe('SideNav test',()=>{
const form = shallow(<SideNav />,{ attachTo: document.body });

it('initial state',()=>{
expect(form.state().showSideNav).toEqual(false);

})
it('onclick test',()=>{
const form = mount(<SideNav />,{ attachTo: document.body });
form.find('#open').simulate('click');
expect(form.state().showSideNav).toEqual(true);
form.find('#mySidenavl1').simulate('click');
expect(form.state().showSideNav).toEqual(false);
form.instance().showProfile();
expect(form.state().editProfile).toEqual(true);
form.instance().closeProfile();
expect(form.state().editProfile).toEqual(false);

form.instance().showSchedule();
expect(form.state().editSchedule).toEqual(true);

form.instance().closeSchedule();
expect(form.state().editSchedule).toEqual(false);
form.instance().foodHasDeliveredButton();
//console.log(form.instance().foodHasDeliveredButton().props.children)
expect(form.instance().foodHasDeliveredButton().props.children).toEqual('Delivered')
})

})