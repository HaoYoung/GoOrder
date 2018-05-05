import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import RestBox from './RestBox';
//import Map from './Map/Map';


describe('Restbox test',()=>{
const form = mount(<RestBox />,{ attachTo: document.body });

it('load menu button',()=>{
form.find('#loadmenu').simulate('click');
})

})