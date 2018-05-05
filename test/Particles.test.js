import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {particlesOptions} from './Particles';

describe('css test',()=>{
let form = particlesOptions;
it('css value',()=>{
expect(form.particles.number.value).toEqual(200);
})


})