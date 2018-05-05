import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import ShowDishes from './ShowDishes';

describe('ShowDishes test',()=>{
const form = mount(<ShowDishes />,{ attachTo: document.body }); 
it('renders',()=>{
form.debug();

});
it('initial state test',()=>{
expect(form.state().showList).toEqual(true);


})



})