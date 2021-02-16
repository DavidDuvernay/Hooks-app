import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../04-useRef/RealExampleRef';


describe('Pruebas en RealExampleRef', () => {

    const wrapper = shallow(<RealExampleRef/>);

    test('Debe de ser igual al snapshot', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar correctamente el componente', () => {

        wrapper.find('button').simulate('click')

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })
})