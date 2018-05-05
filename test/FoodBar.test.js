import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import FoodBar from './FoodBar';



describe('FoodBar test',()=>{
const form = mount(<FoodBar />,{ attachTo: document.body });

it('initial state',()=>{
    expect(form.state().showChinese).toEqual(false);
    expect(form.state().showAmerican).toEqual(false);
    expect(form.state().showMexican).toEqual(false);
    expect(form.state().showPizza).toEqual(false);
    
})

it('onclick test',()=>{
form.find('#chinese-food').simulate('click');
expect(form.state().showChinese).toEqual(true);

form.find('#american-food').simulate('click');
expect(form.state().showAmerican).toEqual(true);

form.find('#mexican-food').simulate('click');
expect(form.state().showMexican).toEqual(true);


form.find('#pizza-food').simulate('click');
expect(form.state().showPizza).toEqual(true);

form.find('#sandwiches-food').simulate('click');
expect(form.state().showSandwiches).toEqual(true);


form.find('#chicken-wings').simulate('click');
expect(form.state().showChicken).toEqual(true);


form.find('#salads-food').simulate('click');
expect(form.state().showSalads).toEqual(true);


form.find('#sushi-food').simulate('click');
expect(form.state().showSushi).toEqual(true);


form.find('#dessert-food').simulate('click');
expect(form.state().showDessert).toEqual(true);


})

it('onshow and onclose test',()=>{
const form = shallow(<FoodBar />,{ attachTo: document.body });
form.instance().closeChinese;
form.find('TypeFilter').at(0).simulate('close');
form.find('TypeFilter').at(1).simulate('close');
form.find('TypeFilter').at(2).simulate('close');
form.find('TypeFilter').at(3).simulate('close');
form.find('TypeFilter').at(4).simulate('close');
form.find('TypeFilter').at(5).simulate('close');
form.find('TypeFilter').at(6).simulate('close');
form.find('TypeFilter').at(7).simulate('close');
form.find('TypeFilter').at(8).simulate('close');


})



})