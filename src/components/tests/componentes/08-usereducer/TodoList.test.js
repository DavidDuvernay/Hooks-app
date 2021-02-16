import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../08-useReducer/TodoList';
import {demoTodos} from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoList 
            todos = {demoTodos}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />
    );
    
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de tener dos <TodoListItem />', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)
    })
})