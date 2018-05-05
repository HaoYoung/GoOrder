import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import ShowRest from './ShowRest';
import Map from './Map/Map';

describe('show restaurant test',()=>{
const form = mount(<ShowRest />,{ attachTo: document.body });
it('list button',()=>{
form.find('#list').simulate('click');
expect(form.state().showList).toEqual(true);
})
it('map button',()=>{
form.find('#map').simulate('click');
expect(form.state().showList).toEqual(false);
})
})