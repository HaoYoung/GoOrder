import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import DishBox from './DishBox';

describe('DishBox test',()=>{
const form = mount(<DishBox />,{ attachTo: document.body });
it('render',()=>{
form.debug();
})

})