import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'
const { shallow } = require("enzyme")
const { MultipleCustomHooks } = require("../../../03-examples/MultipleCustomHooks")

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Pruebas es MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        counter: 10,
        incremente: () => {}
    })

    test('Debe mostrar el componente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar la informacion', () => {

          useFetch.mockReturnValue({
            data: [{
                author: 'David',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo')
        expect(wrapper.find('footer').text().trim()).toBe('David')

    })
})