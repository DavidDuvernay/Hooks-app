import { todoReducer } from '../../../08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en todoReducer', () => {

    test('Debe retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos)
    })

    test('Debe agregar un nuevo TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3)
        expect(state).toEqual([...demoTodos, newTodo])
    })

    test('Debe de borrar un TODO', () => {

        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodos, action)

        expect(state.length).toBe(0)
        expect(state).toEqual([])

        
    })

    test('Debe de hacer el toggle del TODO', () => {

        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);

        expect(state[0].done).toBe(true)
        // expect(state[0]).toEqual(demoTodos[0])
    })
})