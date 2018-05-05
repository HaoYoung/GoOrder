import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import SideFilter from './SideFilter';

describe('Sidefiler test',()=>{
const form = mount(<SideFilter />,{ attachTo: document.body });;
it('css test',()=>{
//console.log(form.find('input').get(0).type)
expect(form.find('input').get(0).type).toEqual('input')

})


})