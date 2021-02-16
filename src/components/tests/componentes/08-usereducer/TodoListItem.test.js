import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../08-useReducer/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos';

describe('debe mostrar el componente TodoListItem', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo = {demoTodos[0]}
            index ={0}
            handleDelete = { handleDelete} 
            handleToggle = { handleToggle}
        />
    );
    
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click')

        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
    })
    
    test('Debe de llamar la funcion handleToggle', () => {

        wrapper.find('p').simulate('click')

        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
    })
    
    test('Debe mostrar el texto correctamente', () => {

        const p =wrapper.find('p')

        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    })
   
    test('Debe tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo = {demoTodos[0]}
                index ={0}
                handleDelete = { handleDelete} 
                handleToggle = { handleToggle}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
    })
})